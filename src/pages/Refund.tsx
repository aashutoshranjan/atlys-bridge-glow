import { LegalPage } from "./Privacy";
import { company } from "@/config/company";

const sections = [
  { h: "Eligibility", p: "Refund requests are evaluated based on the program type, time of enrollment and stage of training." },
  { h: "How to request", p: `Email ${company.supportEmail} with your batch ID, position and reason for refund.` },
  { h: "Processing time", p: "Approved refunds are processed within 7–10 business days to the original payment method." },
  { h: "Non-refundable items", p: "Issued certificates, completed training modules and processing fees are non-refundable." },
  { h: "Questions", p: `For any questions, reach our support team at ${company.supportEmail}.` },
];

export default function Refund() {
  return <LegalPage title="Refund Policy" intro="Clear, fair refund terms for our programs." sections={sections} />;
}
