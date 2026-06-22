import { company } from "@/config/company";

const sections = [
  {
    h: "Information we collect",
    p: "We collect information you provide directly — such as your name, email, and application details — along with basic technical data needed to operate the site.",
  },
  {
    h: "How we use information",
    p: "To respond to enquiries, deliver our internship and consulting services, and improve our website and programs.",
  },
  {
    h: "Data sharing",
    p: "We do not sell personal data. Limited information may be shared with trusted service providers strictly to deliver our services.",
  },
  {
    h: "Your rights",
    p: "You may request access, correction or deletion of your data by emailing our support team.",
  },
  {
    h: "Contact",
    p: `For any privacy-related concerns, contact ${company.supportEmail}.`,
  },
];

export default function Privacy() {
  return <LegalPage title="Privacy Policy" intro="How we collect, use and protect your information." sections={sections} />;
}

export function LegalPage({ title, intro, sections }: { title: string; intro: string; sections: { h: string; p: string }[] }) {
  return (
    <div className="hero-bg">
      <div className="container mx-auto max-w-3xl px-5 lg:px-8 py-20">
        <h1 className="font-display font-bold text-4xl lg:text-5xl">{title}</h1>
        <p className="mt-4 text-muted-foreground">{intro}</p>
        <div className="mt-10 space-y-6">
          {sections.map((s) => (
            <div key={s.h} className="glass rounded-2xl p-6">
              <h2 className="font-display font-semibold text-xl mb-2">{s.h}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.p}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
