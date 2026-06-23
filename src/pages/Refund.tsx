import { LegalPage } from "./Privacy";
import { company } from "@/config/company";

const sections = [
  {
    h: "Refund queries",
    p: `For any type of Refund confirmation or queries, please write to ${company.supportEmail} with the subject line "Refund".`,
  },
  {
    h: "100% Refund — before login credentials",
    p: "If you want to cancel your internship enrollment, please write to us BEFORE receiving your login credentials. We will refund 100% of your amount within 3 working days.",
  },
  {
    h: "50% Refund — after login credentials",
    p: "If you ask for a refund after receiving your login credentials, only 50% of the amount can be refunded.",
  },
  {
    h: "How to request a refund",
    p: `Email ${company.supportEmail} with the subject line "Refund". Include your full name, batch ID, internship position and reason for the refund so our team can process it quickly.`,
  },
  {
    h: "Processing time",
    p: "Approved refunds are processed within 3 working days to the original payment method.",
  },
  {
    h: "Non-refundable items",
    p: "Issued certificates, completed training modules and any third-party processing fees are non-refundable.",
  },
  {
    h: "Training platform",
    p: `${company.trainingPlatformLabel} You can check it out at ${company.trainingPlatformUrl}.`,
  },
];

export default function Refund() {
  return (
    <LegalPage
      title="Refund Policy"
      intro="Clear, fair refund terms for our internship and training programs."
      sections={sections}
    />
  );
}
