import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ShieldCheck, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export default function FormPage() {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    position: "",
    location: "",
    startDate: "",
    batchCode: "",
  });

  const update = (k: keyof typeof form, v: string) => setForm((s) => ({ ...s, [k]: v }));

  return (
    <div className="relative min-h-[calc(100vh-72px)] hero-bg overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div className="absolute top-20 -left-20 h-80 w-80 rounded-full bg-primary/20 blur-3xl animate-float" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[oklch(0.75_0.16_200/0.25)] blur-3xl" />

      <div className="relative container mx-auto max-w-3xl px-5 lg:px-8 py-16 lg:py-24">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center mb-10">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium mb-5">
            <Sparkles className="size-3.5 text-primary" /> Internship Enrollment
          </div>
          <h1 className="font-display font-bold text-4xl lg:text-5xl leading-tight">
            Apply for your <span className="brand-gradient-text">internship</span>.
          </h1>
          <p className="mt-4 text-muted-foreground">Takes under 2 minutes. We'll guide you through the next step right away.</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={(e) => {
            e.preventDefault();
            if (Object.values(form).some((v) => !v)) {
              toast.error("Please fill in all fields.");
              return;
            }
            setSubmitting(true);
            try {
              sessionStorage.setItem("atlys-enroll-form", JSON.stringify(form));
            } catch {}
            setTimeout(() => navigate("/enroll"), 600);
          }}
          className="glass-strong rounded-3xl p-7 lg:p-10 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input id="fullName" value={form.fullName} onChange={(e) => update("fullName", e.target.value)} className="bg-white/70 border-white/70 h-11" placeholder="Jane Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className="bg-white/70 border-white/70 h-11" placeholder="jane@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="position">Internship / Job Position</Label>
              <Input id="position" value={form.position} onChange={(e) => update("position", e.target.value)} className="bg-white/70 border-white/70 h-11" placeholder="e.g. Full Stack Developer" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Current Location</Label>
              <Input id="location" value={form.location} onChange={(e) => update("location", e.target.value)} className="bg-white/70 border-white/70 h-11" placeholder="City, Country" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="startDate">Preferred Starting Date</Label>
              <Input id="startDate" type="date" value={form.startDate} onChange={(e) => update("startDate", e.target.value)} className="bg-white/70 border-white/70 h-11" />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="batchCode">Batch Code (Mentioned in Welcome Letter)</Label>
              <Input id="batchCode" value={form.batchCode} onChange={(e) => update("batchCode", e.target.value)} className="bg-white/70 border-white/70 h-11" placeholder="e.g. ATL-2026-A" />
            </div>
          </div>

          <Button type="submit" disabled={submitting} className="w-full rounded-full h-12 bg-[var(--gradient-brand)] text-white text-base font-semibold">
            {submitting ? "Submitting…" : <>Submit Application <ArrowRight className="size-4" /></>}
          </Button>

          <div className="flex flex-wrap items-center justify-center gap-5 pt-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><ShieldCheck className="size-3.5 text-primary" /> Verified Employer</span>
            <span className="inline-flex items-center gap-1.5"><Lock className="size-3.5 text-primary" /> Encrypted Submission</span>
          </div>
        </motion.form>
      </div>
    </div>
  );
}
