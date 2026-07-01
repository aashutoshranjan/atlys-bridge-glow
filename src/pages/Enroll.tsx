import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  BadgeCheck,
  X,
  Hourglass,
  Sparkles,
  CheckCircle2,
  ExternalLink,
  Megaphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/config/company";

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
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
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

            <div className="mt-6 rounded-2xl border border-amber-200/60 bg-amber-50/60 p-4 text-[13px] text-amber-900 leading-relaxed">
              <strong>Note:</strong> If you pay via any UPI app, the payment
              receiver may appear as either our company name or an authorized
              person's name. Both are valid.
            </div>

            <div className="mt-4 grid sm:grid-cols-3 gap-2.5">
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="glass-strong rounded-3xl p-7 ring-1 ring-white/40 space-y-5">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl btn-brand grid place-items-center">
                  <Megaphone className="size-5" />
                </div>
                <h3 className="font-display font-bold text-lg leading-tight">
                  Important Notice – Enrollment Confirmation
                </h3>
              </div>

              <div>
                <div className="font-semibold text-foreground text-sm mb-1">
                  Confirm Your Participation:
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  To secure your place in the program, please complete the
                  enrolment process by paying the internship enrollment fee as
                  specified in your Welcome Letter.
                </p>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                After completion of your enrollment process, please share the
                required details as mentioned and send your payment screenshot
                to our support team at{" "}
                <a
                  href={`mailto:${company.supportEmail}`}
                  className="font-semibold text-primary hover:underline"
                >
                  {company.supportEmail}
                </a>{" "}
                or on WhatsApp{" "}
                <a
                  href={company.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-primary hover:underline"
                >
                  ({company.whatsappNumber})
                </a>
                .
              </p>

              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4 text-sm text-foreground leading-relaxed">
                Sending these details via WhatsApp is{" "}
                <strong>mandatory</strong>. Once we receive your details, we
                will proceed with sending your confirmation email, login
                credentials, and the WhatsApp number of your dedicated mentor.
              </div>

              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                  Details to share
                </div>
                <ul className="text-sm text-foreground space-y-1.5">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-emerald-600 mt-0.5 shrink-0" />
                    Payment Screenshot
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-emerald-600 mt-0.5 shrink-0" />
                    Full Name
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-emerald-600 mt-0.5 shrink-0" />
                    Email ID
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-emerald-600 mt-0.5 shrink-0" />
                    Contact Number
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-emerald-600 mt-0.5 shrink-0" />
                    Internship Position Applied For
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-emerald-600 mt-0.5 shrink-0" />
                    Cohort Date
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-emerald-600 mt-0.5 shrink-0" />
                    Batch Code (Mentioned in Welcome Letter)
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-amber-200/60 bg-amber-50/60 p-4 text-[13px] text-amber-900 leading-relaxed">
                <strong>Note:</strong> The confirmation email will be shared
                within one hour, while the login credentials will be delivered
                by End of Day (Till 10:00 PM today).
              </div>

              <div className="pt-1">
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  For any concerns or unsubscribe requests, please submit your
                  report only through our official Google Form.
                </p>
                <a
                  href={company.unsubscribeFormUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full h-9 px-4 text-xs font-medium btn-brand"
                >
                  <ExternalLink className="size-3.5" /> Click here to
                  Unsubscribe &amp; Report
                </a>
              </div>
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
