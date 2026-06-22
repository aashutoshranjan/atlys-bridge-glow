// Centralized company branding. Update values here to update the entire site.
// The change-company.sh script edits this file safely.

export const company = {
  name: "Atlys Integrated Infotech",
  shortName: "Atlys",
  domain: "atlysbridge.com",
  websiteUrl: "https://atlysbridge.com",
  logo: "/logo.svg",
  tagline: "Engineering tomorrow's enterprise — IT, cloud, AI & talent.",

  supportEmail: "support@atlysbridge.com",
  hrEmail: "support@atlysbridge.com",

  whatsappNumber: "+91 9936667124",
  whatsappLink: "https://wa.me/919936667124",
  phoneNumber: "+91 9936667124",

  officeAddress: {
    line1: "E45/7, Mahatma Gandhi Rd",
    line2: "Behind Oriental Bank of Commerce",
    line3: "Craig Park Layout, Ashok Nagar",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560001",
    country: "India",
  },

  copyright: `© ${new Date().getFullYear()} Atlys Integrated Infotech. All rights reserved.`,
  footerText:
    "End-to-end IT services, staffing and internship programs based in Bengaluru.",

  linkedinUrl: "https://www.linkedin.com/company/innovateloop-solutions/",
  socialLinks: {
    linkedin: "https://www.linkedin.com/company/innovateloop-solutions/",
  },

  qrCodePath: "/payment-qr.png",
  unsubscribeFormUrl: "https://forms.gle/",
} as const;

export type CompanyConfig = typeof company;
