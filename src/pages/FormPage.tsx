import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Lock,
  Mail,
  ExternalLink,
  CheckCircle2,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { company } from "@/config/company";

type FormState = {
  fullName: string;
  email: string;
  contactNumber: string;
  position: string;
  location: string;
  startDate: string;
  batchCode: string;
};

function buildDetailsMailto(form: FormState) {
  const body = [
    `Name: ${form.fullName}`,
    "",
    `Email Address: ${form.email}`,
    "",
    `Contact Number: ${form.contactNumber}`,
    "",
    `Internship Position: ${form.position}`,
    "",
    `Current Location: ${form.location}`,
    "",
    `Starting Date: ${form.startDate}`,
    "",
    `Batch Code: ${form.batchCode}`,
    "",
    `Submitted from: ${company.websiteUrl}`,
  ].join("\n");
  const subject = `Internship Application — ${form.fullName || "New applicant"}`;
  return `mailto:${company.supportEmail}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
}

export default function FormPage() {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState<FormState>({
    fullName: "",
    email: "",
    contactNumber: "",
    position: "",
    location: "",
    startDate: "",
    batchCode: "",
  });

  const update = (k: keyof FormState, v: string) =>
    setForm((s) => ({ ...s, [k]: v }));

  const allFilled = Object.values(form).every((v) => v.trim().length > 0);

  return (
    <div className="relative min-h-[calc(100vh-72px)] hero-bg overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div className="absolute top-20 -left-20 h-80 w-80 rounded-full bg-primary/20 blur-3xl animate-float" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[oklch(0.75_0.16_200/0.25)] blur-3xl" />

      <div className="relative container mx-auto max-w-3xl px-5 lg:px-8 py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium mb-5">
            <Sparkles className="size-3.5 text-primary" /> Internship Enrollment
          </div>
          <h1 className="font-display font-bold text-4xl lg:text-5xl leading-tight">
            Apply for your{" "}
            <span className="brand-gradient-text">internship</span>.
          </h1>
          <p className="mt-4 text-muted-foreground">
            Takes under 2 minutes. We'll guide you through the next step right
            away.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 text-xs glass rounded-full px-3 py-1.5">
            <CheckCircle2 className="size-3.5 text-emerald-600" />
            Training delivered on
            <a
              href={company.trainingPlatformUrl}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-primary inline-flex items-center gap-1"
            >
              {company.trainingPlatformName}
              <ExternalLink className="size-3" />
            </a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={async (e) => {
            e.preventDefault();
            if (!allFilled) {
              toast.error("Please fill in all fields.");
              return;
            }
            setSubmitting(true);
            try {
              sessionStorage.setItem("atlys-enroll-form", JSON.stringify(form));
            } catch {}

            // Post to Google Sheets webhook (Apps Script Web App) if configured.
            // See GOOGLE_SHEETS_WEBHOOK.md for the Apps Script to deploy.
            const webhook = company.googleSheetsWebhookUrl;
            if (webhook) {
              try {
                await fetch(webhook, {
                  method: "POST",
                  mode: "no-cors",
                  headers: { "Content-Type": "text/plain;charset=utf-8" },
                  body: JSON.stringify({
                    ...form,
                    timestamp: new Date().toISOString(),
                    source: company.websiteUrl,
                  }),
                });
              } catch {
                // Non-blocking — candidate still proceeds to /enroll
              }
            }
            setTimeout(() => navigate("/enroll"), 600);
          }}
          className="glass-strong rounded-3xl p-7 lg:p-10 space-y-5 ring-1 ring-white/40"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                value={form.fullName}
                onChange={(e) => update("fullName", e.target.value)}
                className="bg-white/80 border-white/70 h-11"
                placeholder="Jane Doe"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                className="bg-white/80 border-white/70 h-11"
                placeholder="jane@example.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contactNumber">Contact Number</Label>
              <Input
                id="contactNumber"
                type="tel"
                value={form.contactNumber}
                onChange={(e) => update("contactNumber", e.target.value)}
                className="bg-white/80 border-white/70 h-11"
                placeholder="+91 98765 43210"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="position">Internship / Job Position</Label>
              <Input
                id="position"
                value={form.position}
                onChange={(e) => update("position", e.target.value)}
                className="bg-white/80 border-white/70 h-11"
                placeholder="e.g. Full Stack Developer"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Current Location</Label>
              <Input
                id="location"
                value={form.location}
                onChange={(e) => update("location", e.target.value)}
                className="bg-white/80 border-white/70 h-11"
                placeholder="City, Country"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="startDate">Preferred Starting Date</Label>
              <Input
                id="startDate"
                type="date"
                value={form.startDate}
                onChange={(e) => update("startDate", e.target.value)}
                className="bg-white/80 border-white/70 h-11"
              />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="batchCode">
                Batch Code (Mentioned in Welcome Letter)
              </Label>
              <Input
                id="batchCode"
                value={form.batchCode}
                onChange={(e) => update("batchCode", e.target.value)}
                className="bg-white/80 border-white/70 h-11"
                placeholder="e.g. ATL-2026-A"
              />
            </div>
          </div>

          <Button
            type="submit"
            disabled={submitting}
            className="btn-brand w-full rounded-full h-12 text-base font-semibold"
          >
            {submitting ? (
              "Submitting…"
            ) : (
              <>
                Continue to Enrollment <ArrowRight className="size-4" />
              </>
            )}
          </Button>

          <div className="relative my-2 flex items-center gap-3 text-[11px] uppercase tracking-wider text-muted-foreground">
            <div className="h-px flex-1 bg-border" /> or send details directly
            <div className="h-px flex-1 bg-border" />
          </div>

          <a
            href={allFilled ? buildDetailsMailto(form) : undefined}
            onClick={(e) => {
              if (!allFilled) {
                e.preventDefault();
                toast.error("Please fill all fields before sending details.");
              }
            }}
            className={`flex items-center justify-center gap-2 w-full rounded-full h-12 text-base font-semibold transition ${
              allFilled
                ? "btn-brand hover:brightness-110"
                : "bg-muted text-muted-foreground cursor-not-allowed"
            }`}
          >
            <Send className="size-4" /> Send My Details to{" "}
            <span className="hidden sm:inline">{company.supportEmail}</span>
            <span className="sm:hidden">Support</span>
          </a>

          <p className="text-xs text-center text-muted-foreground">
            Opens your email app with all details pre-filled to{" "}
            <span className="font-semibold text-foreground">
              {company.supportEmail}
            </span>
            .
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 pt-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="size-3.5 text-primary" /> Verified Employer
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Lock className="size-3.5 text-primary" /> Encrypted Submission
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Mail className="size-3.5 text-primary" /> Direct to Support
            </span>
          </div>
        </motion.form>
      </div>
    </div>
  );
}
