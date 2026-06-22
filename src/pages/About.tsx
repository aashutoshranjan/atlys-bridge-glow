import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Target,
  Eye,
  HeartHandshake,
  Award,
  Sparkles,
  ArrowRight,
  MessageCircle,
  Users,
  Rocket,
  Shield,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/config/company";

const values = [
  { icon: Award, t: "Excellence", d: "We hold ourselves to enterprise-grade standards on every project, every time." },
  { icon: HeartHandshake, t: "Partnership", d: "We act as an extension of your team — long-term outcomes over short-term wins." },
  { icon: Shield, t: "Integrity", d: "Transparent estimates, transparent reporting, transparent invoices." },
  { icon: Rocket, t: "Innovation", d: "We invest in R&D, AI tooling and accelerators so you don't have to." },
  { icon: Users, t: "People-first", d: "We grow careers internally and through our internship pipeline." },
  { icon: Globe, t: "Global mindset", d: "Distributed teams, accountable to outcomes regardless of geography." },
];

const timeline = [
  { y: "2013", t: "Founded in Bengaluru", d: "Started as a four-person consulting studio for SMB IT modernization." },
  { y: "2016", t: "Enterprise practice launched", d: "Onboarded our first Fortune 500 client and scaled to 40 engineers." },
  { y: "2019", t: "Cloud & DevOps focus", d: "Built dedicated AWS, Azure and GCP centers of excellence." },
  { y: "2021", t: "AI & ML accelerator", d: "Launched our applied AI practice and internal model platform." },
  { y: "2023", t: "Internship & training programs", d: "Formalized industry-grade internships across 25+ tracks." },
  { y: "2025", t: "Global delivery network", d: "Serving 40+ clients across 18 countries with hybrid teams." },
];

const leadership = [
  { name: "Vikram Sundaresan", role: "Chief Executive Officer", bio: "20 years building global delivery orgs for IT services." },
  { name: "Meera Krishnan", role: "Chief Technology Officer", bio: "Ex-principal engineer with deep cloud and ML expertise." },
  { name: "Rohan Kapoor", role: "Head of Talent & Programs", bio: "Architects our internship and training ecosystem." },
  { name: "Aditi Sharma", role: "Head of Delivery", bio: "Runs enterprise engagements with surgical precision." },
];

const why = [
  "12+ years operating across regulated industries",
  "Senior-led teams — no resume-and-pray staffing",
  "ISO-aligned processes, security-by-default",
  "Fluent across cloud, data, AI and product",
  "Internship pipeline that fuels long-term retention",
  "Bengaluru HQ with global delivery presence",
];

export default function About() {
  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative hero-bg">
        <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
        <div className="relative container mx-auto max-w-7xl px-5 lg:px-8 pt-20 pb-20 lg:pt-28 lg:pb-28">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium mb-6">
              <Sparkles className="size-3.5 text-primary" /> About {company.shortName}
            </div>
            <h1 className="font-display font-bold text-5xl lg:text-7xl leading-[1.02]">
              We're a team of <span className="brand-gradient-text">builders, mentors and operators</span>.
            </h1>
            <p className="mt-7 text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              {company.name} is an integrated IT partner — combining
              enterprise consulting, software engineering and structured talent
              development into a single delivery model.
            </p>
          </motion.div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="container mx-auto max-w-7xl px-5 lg:px-8 py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">Company overview</p>
            <h2 className="font-display text-4xl font-bold leading-tight">Built for enterprises that can't afford to slow down.</h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-lg text-muted-foreground leading-relaxed">
            <p>
              Founded in 2013, {company.name} has grown into a multi-disciplinary
              partner for organizations modernizing their core. We blend deep
              technical specialization with operational discipline.
            </p>
            <p>
              Our work spans cloud and platform engineering, applied AI,
              enterprise software, digital transformation and high-quality
              IT staffing — all delivered from our Bengaluru headquarters and a
              distributed global team.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="container mx-auto max-w-7xl px-5 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-strong rounded-3xl p-10">
            <div className="h-12 w-12 rounded-2xl bg-[var(--gradient-brand)] grid place-items-center text-white mb-5"><Target className="size-5" /></div>
            <h3 className="font-display text-2xl font-bold mb-3">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To help enterprises ship better software, adopt AI responsibly,
              and develop the next generation of technologists — under one
              integrated delivery roof.
            </p>
          </div>
          <div className="glass-strong rounded-3xl p-10">
            <div className="h-12 w-12 rounded-2xl bg-[var(--gradient-brand)] grid place-items-center text-white mb-5"><Eye className="size-5" /></div>
            <h3 className="font-display text-2xl font-bold mb-3">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To be the most trusted integrated IT and talent partner across
              emerging markets — known equally for engineering quality and the
              careers we build.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="container mx-auto max-w-7xl px-5 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">Our Values</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold">The principles we hire, ship and partner by.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((v) => (
            <div key={v.t} className="glass rounded-2xl p-7 hover:-translate-y-1 transition">
              <v.icon className="size-7 text-primary mb-4" />
              <h3 className="font-display font-semibold text-lg mb-2">{v.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 bg-secondary/40">
        <div className="container mx-auto max-w-5xl px-5 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">Growth Timeline</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold">From a four-person studio to a global delivery org.</h2>
          </div>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
            <div className="space-y-10">
              {timeline.map((t, i) => (
                <div key={t.y} className={`relative grid md:grid-cols-2 gap-6 ${i % 2 === 0 ? "" : "md:[direction:rtl]"}`}>
                  <div className="md:[direction:ltr]">
                    <div className={`glass rounded-2xl p-6 md:max-w-md ${i % 2 === 0 ? "md:ml-auto" : ""}`}>
                      <div className="text-sm font-semibold text-primary">{t.y}</div>
                      <h3 className="font-display font-bold text-lg mt-1 mb-1.5">{t.t}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{t.d}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="container mx-auto max-w-7xl px-5 lg:px-8 py-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">Leadership</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold">Senior operators leading every practice.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {leadership.map((p) => (
            <div key={p.name} className="glass rounded-2xl p-6 text-center">
              <div className="mx-auto h-20 w-20 rounded-full bg-[var(--gradient-brand)] grid place-items-center text-white font-display text-2xl font-bold mb-4 shadow-[var(--shadow-glass)]">
                {p.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
              </div>
              <div className="font-display font-semibold">{p.name}</div>
              <div className="text-xs text-primary mb-3">{p.role}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="container mx-auto max-w-7xl px-5 lg:px-8 py-12">
        <div className="glass-strong rounded-3xl p-10 lg:p-14 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">Why {company.shortName}</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold leading-tight">Why choose {company.name}.</h2>
          </div>
          <ul className="grid gap-3">
            {why.map((w) => (
              <li key={w} className="flex items-start gap-3 text-foreground/85">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary shrink-0" />
                <span>{w}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto max-w-7xl px-5 lg:px-8 py-20">
        <div className="grid sm:grid-cols-2 gap-5">
          <Link
            to="/form"
            className="glass-strong rounded-3xl p-8 lg:p-10 group hover:-translate-y-1 transition flex items-center justify-between gap-6"
          >
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-2">For students</div>
              <h3 className="font-display text-2xl lg:text-3xl font-bold leading-tight">Apply for Internship</h3>
              <p className="text-sm text-muted-foreground mt-2">Start your application in under 2 minutes.</p>
            </div>
            <div className="h-14 w-14 rounded-2xl bg-[var(--gradient-brand)] grid place-items-center text-white shadow-[var(--shadow-elevated)] group-hover:scale-105 transition">
              <ArrowRight className="size-5" />
            </div>
          </Link>
          <Link
            to="/contact"
            className="glass-strong rounded-3xl p-8 lg:p-10 group hover:-translate-y-1 transition flex items-center justify-between gap-6"
          >
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-2">For enterprises</div>
              <h3 className="font-display text-2xl lg:text-3xl font-bold leading-tight">Contact Support</h3>
              <p className="text-sm text-muted-foreground mt-2">Talk to our delivery and partnership teams.</p>
            </div>
            <div className="h-14 w-14 rounded-2xl bg-[var(--gradient-brand)] grid place-items-center text-white shadow-[var(--shadow-elevated)] group-hover:scale-105 transition">
              <MessageCircle className="size-5" />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
