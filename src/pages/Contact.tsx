import { motion } from "framer-motion";
import { MapPin, Mail, Phone, MessageCircle, Linkedin, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";
import { company } from "@/config/company";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [news, setNews] = useState("");

  const update = (k: keyof typeof form, v: string) => setForm((s) => ({ ...s, [k]: v }));

  return (
    <div className="overflow-hidden">
      <section className="relative hero-bg">
        <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
        <div className="relative container mx-auto max-w-7xl px-5 lg:px-8 pt-20 pb-16 lg:pt-28">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium mb-6">
              <Sparkles className="size-3.5 text-primary" /> Get in touch
            </div>
            <h1 className="font-display font-bold text-5xl lg:text-7xl leading-[1.02]">
              Let's <span className="brand-gradient-text">build something</span> together.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              Whether you're scoping a project, hiring talent, or applying for an internship — we read every message and reply within one business day.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-5 lg:px-8 py-16 grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5 space-y-5">
          <div className="glass-strong rounded-3xl p-7">
            <div className="flex items-start gap-4">
              <div className="h-11 w-11 rounded-xl bg-[var(--gradient-brand)] grid place-items-center text-white shrink-0">
                <MapPin className="size-5" />
              </div>
              <div>
                <h3 className="font-display font-bold mb-1.5">Visit our office</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {company.officeAddress.line1},<br />
                  {company.officeAddress.line2},<br />
                  {company.officeAddress.line3},<br />
                  {company.officeAddress.city}, {company.officeAddress.state} {company.officeAddress.pincode}
                </p>
              </div>
            </div>
          </div>

          <a href={`mailto:${company.supportEmail}`} className="glass rounded-2xl p-6 flex items-center gap-4 hover:-translate-y-1 transition">
            <div className="h-11 w-11 rounded-xl bg-[var(--gradient-brand)] grid place-items-center text-white shrink-0"><Mail className="size-5" /></div>
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Support email</div>
              <div className="font-semibold">{company.supportEmail}</div>
            </div>
          </a>

          <a href={company.whatsappLink} target="_blank" rel="noreferrer" className="glass rounded-2xl p-6 flex items-center gap-4 hover:-translate-y-1 transition">
            <div className="h-11 w-11 rounded-xl bg-[var(--gradient-brand)] grid place-items-center text-white shrink-0"><MessageCircle className="size-5" /></div>
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">WhatsApp support</div>
              <div className="font-semibold">{company.whatsappNumber}</div>
            </div>
          </a>

          <div className="glass rounded-2xl p-6 flex items-center gap-4">
            <div className="h-11 w-11 rounded-xl bg-[var(--gradient-brand)] grid place-items-center text-white shrink-0"><Phone className="size-5" /></div>
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Phone</div>
              <div className="font-semibold">{company.phoneNumber}</div>
            </div>
          </div>

          <a href={company.linkedinUrl} target="_blank" rel="noreferrer" className="glass rounded-2xl p-6 flex items-center gap-4 hover:-translate-y-1 transition">
            <div className="h-11 w-11 rounded-xl bg-[var(--gradient-brand)] grid place-items-center text-white shrink-0"><Linkedin className="size-5" /></div>
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Connect on</div>
              <div className="font-semibold">LinkedIn</div>
            </div>
          </a>
        </div>

        <div className="lg:col-span-7">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!form.name || !form.email || !form.message) {
                toast.error("Please fill in your name, email and message.");
                return;
              }
              toast.success("Message sent — we'll get back within 1 business day.");
              setForm({ name: "", email: "", subject: "", message: "" });
            }}
            className="glass-strong rounded-3xl p-8 lg:p-10 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="name">Full name</Label>
                <Input id="name" value={form.name} onChange={(e) => update("name", e.target.value)} className="bg-white/70 border-white/70 h-11" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className="bg-white/70 border-white/70 h-11" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" value={form.subject} onChange={(e) => update("subject", e.target.value)} className="bg-white/70 border-white/70 h-11" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" rows={6} value={form.message} onChange={(e) => update("message", e.target.value)} className="bg-white/70 border-white/70" />
            </div>
            <Button type="submit" className="rounded-full h-12 px-7 bg-[var(--gradient-brand)] text-white">
              Send message <Send className="size-4" />
            </Button>
          </form>

          <div className="glass rounded-3xl p-8 mt-6">
            <h3 className="font-display text-2xl font-bold mb-2">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-5">Career tips, internship openings &amp; IT insights.</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!news) return;
                toast.success("Subscribed! Check your inbox.");
                setNews("");
              }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Input type="email" placeholder="you@company.com" value={news} onChange={(e) => setNews(e.target.value)} className="rounded-full h-12 px-5 bg-white/70 border-white/70" />
              <Button type="submit" className="rounded-full h-12 px-6 bg-[var(--gradient-brand)] text-white">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
