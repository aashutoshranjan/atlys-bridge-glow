// ============= Wellaspire Technologies — centralized branding & integrations =============
//
// BUILD-TIME DEFAULTS. At startup the app fetches /config/runtime-config.json
// (see src/config/runtime.ts) and overrides the following fields on the live
// site WITHOUT rebuilding the frontend:
//
//   COMPANY_NAME                  -> name
//   PUBLIC_SITE_URL               -> websiteUrl / domain
//   SUPPORT_EMAIL                 -> supportEmail / hrEmail
//   SUPPORT_PHONE                 -> supportPhone / whatsappNumber / whatsappLink
//   PAYMENT_QR_IMAGE              -> qrCodePath
//   PAYMENT_UPI_ID                -> upiId
//   ENROLLMENT_FEE                -> enrollmentFee
//   POST_SUBMISSION_REDIRECT_PATH -> postSubmissionRedirectPath
//   APPLICATION_VIDEO_PATH        -> applicationVideoPath
//
// Edit values here only to change the shipped defaults. To change them in
// production, edit /var/www/wellbridge/config/runtime-config.json on the VPS
// (see DEPLOY.md) — no rebuild and no restart is needed.

export const company = {
  // --- Identity ---
  name: "Wellaspire Technologies",
  shortName: "Wellaspire",
  tagline: "Engineering tomorrow's enterprise — IT, cloud, AI & talent.",
  domain: "wellbridge.in",
  websiteUrl: "https://wellbridge.in",
  logo: "/wellaspire-logo.svg",

  // --- Contact ---
  supportEmail: "support@atlysbridge.com",
  hrEmail: "support@atlysbridge.com",
  supportPhone: "+91 92882 36779",
  phoneNumber: "+91 92882 36779",
  whatsappNumber: "+91 92882 36779",
  whatsappLink: "https://wa.me/919288236779",

  // --- Address ---
  officeAddress: {
    line1: "E45/7, Mahatma Gandhi Rd",
    line2: "Behind Oriental Bank of Commerce",
    line3: "Craig Park Layout, Ashok Nagar",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560001",
    country: "India",
  },

  // --- Social ---
  linkedinUrl: "https://www.linkedin.com/company/innovateloop-solutions/",
  socialLinks: {
    linkedin: "https://www.linkedin.com/company/innovateloop-solutions/",
  },

  // --- Training Platform ---
  trainingPlatformName: "lmstraineeprogram.in",
  trainingPlatformUrl: "https://lmstraineeprogram.in",
  trainingPlatformLabel:
    "lmstraineeprogram.in is our Internship platform where training and internship happen.",

  // --- Payments ---
  // Enrollment QR code image, replaceable on the VPS at
  // /var/www/wellbridge/uploads/payments/enrollment-qr.png (see DEPLOY.md).
  qrCodePath: "/uploads/payments/enrollment-qr.png",
  // UPI ID shown on the /payment page. Leave empty until you have a verified
  // UPI ID — the page then shows a safe "not configured" notice.
  upiId: "",
  // Enrollment fee as a plain number, e.g. "999" or "1499.00". Leave empty to
  // show "as per your Welcome Letter".
  enrollmentFee: "",
  // Where the candidate is redirected after a successful form submission.
  // Internal paths only (must start with "/").
  postSubmissionRedirectPath: "/enroll",

  // --- Media ---
  // Short IT intro video shown above the application form, replaceable on the
  // VPS at /var/www/wellbridge/uploads/media/it-intro.mp4 (see DEPLOY.md).
  applicationVideoPath: "/uploads/media/it-intro.mp4",

  // --- Forms ---
  // Google Apps Script Web App URL for enrollment form -> Google Sheet.
  // See GOOGLE_SHEETS_WEBHOOK.md. Leave empty to disable webhook posting.
  googleSheetsWebhookUrl: "",

  // --- Misc ---
  unsubscribeFormUrl: "https://forms.gle/v7ssvMGC26TcyHkx7",
  copyright: `© ${new Date().getFullYear()} Wellaspire Technologies. All rights reserved.`,
  footerText:
    "End-to-end IT services, staffing and internship programs based in Bengaluru.",

  // --- SEO ---
  metaTitle: "Wellaspire Technologies — Enterprise IT, Cloud, AI & Internships",
  metaDescription:
    "Wellaspire Technologies delivers end-to-end IT consulting, software development, cloud, AI and structured internship programs from Bengaluru.",
};

export type CompanyConfig = typeof company;
