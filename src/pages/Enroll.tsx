import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  BadgeCheck,
  Mail,
  MessageCircle,
  X,
  Hourglass,
  Sparkles,
  CheckCircle2,
  Send,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/config/company";

type FormShape = {
  fullName?: string;
  email?: string;
  contactNumber?: string;
  position?: string;
  location?: string;
  startDate?: string;
  batchCode?: string;
};

function buildPaymentMailto(form: FormShape | null) {
  const body = [
    `Name: ${form?.fullName ?? ""}`,
    "",
    `Email: ${form?.email ?? ""}`,
    "",
    `Contact Number: ${form?.contactNumber ?? ""}`,
    "",
    `Position: ${form?.position ?? ""}`,
    "",
    `Starting Date: ${form?.startDate ?? ""}`,
    "",
    `Batch Code: ${form?.batchCode ?? ""}`,
    "",
    "I am attaching the payment screenshot for verification.",
    "",
    `Submitted from: ${company.websiteUrl}`,
  ].join("\n");
  const subject = `Enrollment Payment Confirmation — ${form?.fullName ?? "Candidate"}`;
  return `mailto:${company.supportEmail}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
}


function QRPlaceholder() {
  return (
    <div className="relative aspect-square w-full max-w-[260px] mx-auto rounded-2xl bg-white p-4 shadow-[var(--shadow-elevated)] border border-border">
      <img
        src={company.qrCodePath}
        alt="Payment QR code"
        className="h-full w-full object-contain"
        onError={(e) => {
          const t = e.currentTarget;
          t.style.display = "none";
          const fallback = t.nextElementSibling as HTMLElement | null;
          if (fallback) fallback.style.display = "grid";
        }}
      />
      <div className="hidden h-full w-full place-items-center text-center text-xs text-muted-foreground">
        <div>
          <div className="mx-auto h-32 w-32 rounded-lg bg-[conic-gradient(at_top_left,_var(--color-primary)_0_25%,_white_0_50%,_var(--color-primary)_0_75%,_white_0)] opacity-90 mb-3" />
          QR placeholder
          <br />
          <span className="text-[10px]">
            Replace /public{company.qrCodePath}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Enroll() {
  const [form, setForm] = useState<FormShape | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem("atlys-enroll-form");
      if (raw) setForm(JSON.parse(raw));
    } catch {}
    const t = setTimeout(() => setShowModal(true), 2500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative min-h-[calc(100vh-72px)] hero-bg overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div className="absolute top-10 -right-20 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-float" />
      <div className="absolute -bottom-10 -left-20 h-96 w-96 rounded-full bg-[oklch(0.78_0.13_200/0.25)] blur-3xl" />

      <div className="relative container mx-auto max-w-6xl px-5 lg:px-8 py-12 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium mb-5">
            <Sparkles className="size-3.5 text-primary" /> Secure Enrollment
            Payment
          </div>
          <h1 className="font-display font-bold text-4xl lg:text-5xl">
            Complete your{" "}
            <span className="brand-gradient-text">enrollment</span>.
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Complete your enrollment and receive your Confirmation Email,
            Login Credentials and Training Session Link along with mentor
            WhatsApp details.
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

        <div className="grid lg:grid-cols-5 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 glass-strong rounded-3xl p-7 lg:p-10 ring-1 ring-white/40"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-11 w-11 rounded-xl btn-brand grid place-items-center">
                <Lock className="size-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  Premium Payment
                </div>
                <div className="font-display font-bold text-xl">
                  Scan &amp; pay via UPI
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Please scan the QR code and make the payment amount mentioned in
              your Internship Appointment Letter.
            </p>

            <QRPlaceholder />

            <div className="mt-6 grid sm:grid-cols-3 gap-2.5">
              <div className="glass rounded-xl px-3 py-2.5 flex items-center gap-2 text-xs font-medium">
                <BadgeCheck className="size-4 text-emerald-600" /> Verified Payee
              </div>
              <div className="glass rounded-xl px-3 py-2.5 flex items-center gap-2 text-xs font-medium">
                <ShieldCheck className="size-4 text-primary" /> Encrypted &amp;
                Secure
              </div>
              <div className="glass rounded-xl px-3 py-2.5 flex items-center gap-2 text-xs font-medium">
                <CheckCircle2 className="size-4 text-emerald-600" /> Trusted
                Transaction
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-amber-200/60 bg-amber-50/60 p-4 text-[13px] text-amber-900 leading-relaxed">
              <strong>Note:</strong> If you pay via any UPI app, the payment
              receiver may appear as either our company name or an authorized
              person's name. Both are valid.
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-5"
          >
            <div className="glass-strong rounded-3xl p-7 ring-1 ring-white/40">
              <h3 className="font-display font-bold text-lg mb-1">
                Send payment confirmation
              </h3>
              <p className="text-sm text-muted-foreground mb-5">
                One-tap email to{" "}
                <span className="font-semibold text-foreground">
                  {company.supportEmail}
                </span>{" "}
                pre-filled with your Name, Email, Contact Number, Position,
                Starting Date and Batch Code. Please attach your payment
                screenshot before sending.
              </p>

              <a href={buildPaymentMailto(form)} className="block">
                <Button className="btn-brand w-full rounded-full h-12 text-base font-semibold">
                  <Send className="size-4" /> Send Payment Email
                </Button>
              </a>

              <a
                href={company.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="block mt-3"
              >
                <Button
                  variant="outline"
                  className="w-full rounded-full h-11 bg-white/80 border-border text-foreground hover:bg-white"
                >
                  <MessageCircle className="size-4 text-emerald-600" /> WhatsApp
                  Support
                </Button>
              </a>
            </div>


            <div className="glass rounded-3xl p-7">
              <div className="flex items-center gap-3 mb-3">
                <BadgeCheck className="size-5 text-emerald-600" />
                <h3 className="font-display font-bold">After verification</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Once payment is verified, we will send your Confirmation Email,
                Login Credentials and Training Session Link along with mentor
                WhatsApp details for{" "}
                <a
                  href={company.trainingPlatformUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary font-semibold inline-flex items-center gap-1"
                >
                  {company.trainingPlatformName}
                  <ExternalLink className="size-3" />
                </a>
                .
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 grid place-items-center bg-black/40 backdrop-blur-sm p-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="relative glass-strong rounded-3xl p-8 max-w-md w-full text-center"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 h-8 w-8 grid place-items-center rounded-full hover:bg-foreground/5"
                aria-label="Close"
              >
                <X className="size-4" />
              </button>
              <div className="relative mx-auto mb-5 h-16 w-16 grid place-items-center">
                <span className="absolute inset-0 rounded-full bg-amber-400/30 animate-pulse-ring" />
                <div className="relative h-14 w-14 rounded-full btn-brand grid place-items-center">
                  <Hourglass className="size-6" />
                </div>
              </div>
              <h3 className="font-display font-bold text-2xl mb-2">
                ⏳ Limited Seats Available!
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Complete your enrollment and confirm your seat ASAP to secure
                your spot before all seats are filled.
              </p>
              <Button
                onClick={() => setShowModal(false)}
                className="btn-brand mt-6 rounded-full h-11 px-7 font-semibold"
              >
                I'll secure my seat
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
