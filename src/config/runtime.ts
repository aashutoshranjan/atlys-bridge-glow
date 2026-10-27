// Runtime configuration loader.
//
// The production frontend reads PUBLIC settings from /config/runtime-config.json
// at startup and applies them on top of the build-time defaults in
// src/config/company.ts. This lets the operator change the company name, QR
// image, UPI ID, enrollment fee, post-submission redirect and intro video
// directly on the VPS without editing source code or rebuilding.
//
// SECURITY: only the allow-listed keys below are read, every value is
// validated and sanitized, and the file must live on the SAME origin — nothing
// else (no query params, no form data, no external files) can influence these
// settings. Private secrets must never be placed in this file.

import { company } from "./company";

export const RUNTIME_CONFIG_KEYS = [
  "COMPANY_NAME",
  "PUBLIC_SITE_URL",
  "PAYMENT_QR_IMAGE",
  "PAYMENT_UPI_ID",
  "ENROLLMENT_FEE",
  "POST_SUBMISSION_REDIRECT_PATH",
  "APPLICATION_VIDEO_PATH",
  "SUPPORT_EMAIL",
  "SUPPORT_PHONE",
] as const;

export type RuntimeConfigKey = (typeof RUNTIME_CONFIG_KEYS)[number];

const str = (v: unknown): string => (typeof v === "string" ? v.trim() : "");

/** Internal app path: starts with a single "/", no "//", no "..". */
export const isInternalPath = (v: string): boolean =>
  /^\/[A-Za-z0-9\-._~\/]*$/.test(v) && !v.includes("//") && !v.includes("..");

/** Site-absolute asset path, e.g. /uploads/media/it-intro.mp4 */
const isAssetPath = (v: string): boolean =>
  v.startsWith("/") && isInternalPath(v);

const isEmail = (v: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const isPhone = (v: string): boolean => /^[+0-9 ()\-]{7,20}$/.test(v);
const isUpiId = (v: string): boolean =>
  /^[A-Za-z0-9.\-_]{2,64}@[A-Za-z]{2,32}$/.test(v);
const isFee = (v: string): boolean => /^[0-9]+(\.[0-9]{1,2})?$/.test(v);
const isSiteUrl = (v: string): boolean => /^https:\/\/[A-Za-z0-9.\-]+(:[0-9]+)?$/.test(v);

/**
 * Validate + apply runtime overrides onto the shared `company` object.
 * Unknown keys, wrong types and invalid values are silently ignored (the
 * build-time default stays in effect) so a broken config file can never
 * break or hijack the site.
 */
export function applyRuntimeOverrides(raw: Record<string, unknown>): void {
  const set = (patch: Partial<typeof company>) => Object.assign(company, patch);

  const name = str(raw.COMPANY_NAME);
  if (name && name.length <= 80) set({ name });

  const siteUrl = str(raw.PUBLIC_SITE_URL);
  if (siteUrl && isSiteUrl(siteUrl)) {
    set({
      websiteUrl: siteUrl,
      domain: siteUrl.replace(/^https:\/\//, "").replace(/\/$/, ""),
    });
  }

  const email = str(raw.SUPPORT_EMAIL);
  if (email && isEmail(email)) set({ supportEmail: email, hrEmail: email });

  const phone = str(raw.SUPPORT_PHONE);
  if (phone && isPhone(phone)) {
    set({
      supportPhone: phone,
      phoneNumber: phone,
      whatsappNumber: phone,
      whatsappLink: `https://wa.me/${phone.replace(/[^0-9]/g, "")}`,
    });
  }

  const qr = str(raw.PAYMENT_QR_IMAGE);
  if (qr && isAssetPath(qr)) set({ qrCodePath: qr });

  const upi = str(raw.PAYMENT_UPI_ID);
  if (upi && isUpiId(upi)) set({ upiId: upi });

  const fee = str(raw.ENROLLMENT_FEE);
  if (fee && isFee(fee)) set({ enrollmentFee: fee });

  const redirect = str(raw.POST_SUBMISSION_REDIRECT_PATH);
  if (redirect && isInternalPath(redirect)) {
    set({ postSubmissionRedirectPath: redirect });
  }

  const video = str(raw.APPLICATION_VIDEO_PATH);
  if (video && (isAssetPath(video) || /^https:\/\//.test(video))) {
    set({ applicationVideoPath: video });
  }
}

/**
 * Fetch the runtime config from the same origin. Returns null when the file
 * is missing or invalid — the app then runs entirely on build-time defaults.
 */
export async function fetchRuntimeConfig(): Promise<Record<
  string,
  unknown
> | null> {
  try {
    const res = await fetch(
      `/config/runtime-config.json?ts=${Date.now()}`,
      { cache: "no-store" }
    );
    if (!res.ok) return null;
    const data = (await res.json()) as unknown;
    if (!data || typeof data !== "object" || Array.isArray(data)) return null;
    const record = data as Record<string, unknown>;
    const picked: Record<string, unknown> = {};
    for (const key of RUNTIME_CONFIG_KEYS) {
      if (key in record) picked[key] = record[key];
    }
    return picked;
  } catch {
    return null;
  }
}
