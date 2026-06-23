import { LegalPage } from "./Privacy";
import { company } from "@/config/company";

const sections = [
  {
    h: "Acceptance of terms",
    p: `By using ${company.websiteUrl}, you agree to these terms and our policies.`,
  },
  {
    h: "Use of services",
    p: "Our services are provided for lawful business and educational purposes only.",
  },
  {
    h: "Training platform",
    p: `${company.trainingPlatformLabel} All training and internship activities are delivered via ${company.trainingPlatformUrl}.`,
  },
  {
    h: "Dummy project verification",
    p: "Once you submit the dummy project, our team will verify it properly (line by line). Your dummy project should be at least 90% accurate. After successful verification, we will assign you a real client project for stipend-based work.",
  },
  {
    h: "Stipend policy",
    p: "After you complete the client project, we will then initiate your stipend. Note: During the learning or training phase, we are not able to provide a stipend. As mentioned in your Welcome Letter, stipend is provided only after working on real client projects.",
  },
  {
    h: "Internship certificate",
    p: "After completion of your training modules, you will become eligible to apply for the Internship Certificate.",
  },
  {
    h: "Intellectual property",
    p: `All content, branding and materials are owned by ${company.name} unless otherwise noted.`,
  },
  {
    h: "Limitation of liability",
    p: "We are not liable for indirect or consequential damages arising from use of our services.",
  },
  {
    h: "Governing law",
    p: "These terms are governed by the laws of India, with jurisdiction in Bengaluru, Karnataka.",
  },
];

export default function Terms() {
  return (
    <LegalPage
      title="Terms & Conditions"
      intro="The terms that govern use of our website, training platform and services. Thank you."
      sections={sections}
    />
  );
}
