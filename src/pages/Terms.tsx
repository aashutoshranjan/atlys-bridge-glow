import { LegalPage } from "./Privacy";
import { company } from "@/config/company";

const sections = [
  { h: "Acceptance of terms", p: `By using ${company.websiteUrl}, you agree to these terms and our policies.` },
  { h: "Use of services", p: "Our services are provided for lawful business and educational purposes only." },
  { h: "Intellectual property", p: `All content, branding and materials are owned by ${company.name} unless otherwise noted.` },
  { h: "Limitation of liability", p: "We are not liable for indirect or consequential damages arising from use of our services." },
  { h: "Governing law", p: "These terms are governed by the laws of India, with jurisdiction in Bengaluru, Karnataka." },
];

export default function Terms() {
  return <LegalPage title="Terms & Conditions" intro="The terms that govern use of our website and services." sections={sections} />;
}
