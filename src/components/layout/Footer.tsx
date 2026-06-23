import { Link } from "react-router-dom";
import { Linkedin, MapPin, Mail, Phone, MessageCircle, ExternalLink } from "lucide-react";
import Logo from "@/components/Logo";
import { company } from "@/config/company";

const links = [
  { label: "Features", to: "/features" },
  { label: "About Us", to: "/about" },
  { label: "Internship With Us", to: "/internships" },
  { label: "Contact", to: "/contact" },
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms & Conditions", to: "/terms" },
  { label: "Refund Policy", to: "/refund" },
];

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-border bg-gradient-to-b from-white to-secondary/40">
      <div className="container mx-auto max-w-7xl px-5 lg:px-8 py-16 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4 space-y-5">
          <Logo />
          <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
            {company.footerText}
          </p>
          <div className="rounded-2xl glass p-4 text-sm">
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
              Our Training & Internship Platform
            </div>
            <a
              href={company.trainingPlatformUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-primary hover:underline"
            >
              {company.trainingPlatformName} <ExternalLink className="size-3.5" />
            </a>
            <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
              {company.trainingPlatformLabel}
            </p>
          </div>
          <div className="space-y-2.5 text-sm text-muted-foreground">
            <div className="flex gap-2.5">
              <MapPin className="size-4 mt-0.5 text-primary shrink-0" />
              <span>
                {company.officeAddress.line1}, {company.officeAddress.line3},{" "}
                {company.officeAddress.city} {company.officeAddress.pincode}
              </span>
            </div>
            <a
              href={`mailto:${company.supportEmail}`}
              className="flex gap-2.5 hover:text-foreground transition"
            >
              <Mail className="size-4 text-primary" /> {company.supportEmail}
            </a>
            <a
              href={company.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="flex gap-2.5 hover:text-foreground transition"
            >
              <MessageCircle className="size-4 text-primary" /> WhatsApp Support:{" "}
              {company.whatsappNumber}
            </a>
            <div className="flex gap-2.5">
              <Phone className="size-4 text-primary" /> {company.phoneNumber}
            </div>
          </div>
        </div>

        <div className="lg:col-span-4">
          <h4 className="font-display font-semibold text-foreground mb-5">
            Important Links
          </h4>
          <ul className="grid grid-cols-2 gap-2.5 text-sm">
            {links.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  className="text-muted-foreground hover:text-primary transition"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4 space-y-5">
          <h4 className="font-display font-semibold text-foreground">
            Stay Connected
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            For any concerns or unsubscribe requests, please submit your report
            only through our official Google Form.
          </p>
          <a
            href={company.unsubscribeFormUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full rounded-full h-11 px-5 text-sm font-semibold btn-brand"
          >
            <Mail className="size-4" /> Unsubscribe & Report
          </a>
          <div className="flex items-center gap-3 pt-1">
            <a
              href={company.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center gap-2 h-10 px-4 rounded-full text-sm font-medium bg-[#0A66C2] text-white hover:brightness-110 transition shadow-[var(--shadow-glass)]"
            >
              <Linkedin className="size-4" /> LinkedIn
            </a>
            <a
              href={company.whatsappLink}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="inline-flex items-center gap-2 h-10 px-4 rounded-full text-sm font-medium bg-emerald-500 text-white hover:brightness-110 transition shadow-[var(--shadow-glass)]"
            >
              <MessageCircle className="size-4" /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container mx-auto max-w-7xl px-5 lg:px-8 py-5 flex flex-col sm:flex-row gap-3 items-center justify-between text-xs text-muted-foreground">
          <p>{company.copyright}</p>
          <p>
            {company.domain} • Built with care in {company.officeAddress.city}
          </p>
        </div>
      </div>
    </footer>
  );
}
