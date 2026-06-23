// Centralized company branding & integrations.
// Single source of truth for the entire website. Update values here and
// re-run `npm run build` — every page, header, footer, form, button, and
// meta tag will pick up the new values automatically.
//
// To swap the payment QR image, just replace `public/payment-qr.png` with
// your new image — no code changes needed (path comes from `qrCodePath`).
//
// To change the company name everywhere at once, run:
//   npm run change-company "New Company Name"

export const company = {
  // --- Identity ---
  name: "Atlys Integrated Infotech",
  shortName: "Atlys",
  tagline: "Engineering tomorrow's enterprise — IT, cloud, AI & talent.",
  domain: "atlysbridge.com",
  websiteUrl: "https://atlysbridge.com",
  logo: "/atlys-logo.png",

  // --- Contact ---
  supportEmail: "support@lmstraineeprogram.in",
  hrEmail: "support@lmstraineeprogram.in",
  phoneNumber: "+91 9936667124",
  whatsappNumber: "+91 9936667124",
  whatsappLink: "https://wa.me/919936667124",

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

  // --- Payment ---
  // Replace public/payment-qr.png to update the QR shown on the enrollment page.
  qrCodePath: "/payment-qr.png",

  // --- Forms ---
  // Paste the Google Apps Script Web App URL here to send enrollment form
  // submissions to your Google Sheet. See GOOGLE_SHEETS_WEBHOOK.md for the
  // exact Apps Script to deploy. Leave empty to disable webhook posting.
  googleSheetsWebhookUrl: "",

  // --- Misc ---
  unsubscribeFormUrl: "https://forms.gle/v7ssvMGC26TcyHkx7",
  copyright: `© ${new Date().getFullYear()} Atlys Integrated Infotech. All rights reserved.`,
  footerText:
    "End-to-end IT services, staffing and internship programs based in Bengaluru.",

  // --- SEO ---
  metaTitle:
    "Atlys Integrated Infotech — Enterprise IT, Cloud, AI & Internships",
  metaDescription:
    "Atlys Integrated Infotech delivers end-to-end IT consulting, software development, cloud, AI and structured internship programs from Bengaluru.",
} as const;

export type CompanyConfig = typeof company;
