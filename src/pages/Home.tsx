import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Cloud,
  Cpu,
  Code2,
  Sparkles,
  Building2,
  Users,
  GraduationCap,
  ShieldCheck,
  Rocket,
  LineChart,
  Layers,
  Workflow,
  Globe2,
  Star,
  Quote,
  Plus,
  Minus,
  Mail,
  CheckCircle2,
  Zap,
  Brain,
  Database,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";
import { company } from "@/config/company";

const services = [
  { icon: Cpu, title: "IT Consulting", desc: "Architecture, roadmaps and strategy from senior practitioners." },
  { icon: Code2, title: "Software Development", desc: "Custom platforms, APIs and product engineering at scale." },
  { icon: Sparkles, title: "Digital Transformation", desc: "Modernize legacy stacks with cloud-native, AI-first workflows." },
  { icon: Cloud, title: "Cloud Services", desc: "AWS, Azure, GCP design, migration, FinOps and reliability." },
  { icon: Brain, title: "AI Solutions", desc: "Generative AI, ML pipelines and intelligent automation." },
  { icon: Building2, title: "Enterprise Solutions", desc: "ERP, CRM and integration platforms tailored to your ops." },
  { icon: Users, title: "Staffing Services", desc: "Vetted contract, contract-to-hire and full-time IT talent." },
  { icon: GraduationCap, title: "Internship Programs", desc: "Industry-grade mentorship and certification tracks." },
];

const stats = [
  { v: "12+", l: "Years of expertise" },
  { v: "180+", l: "Enterprise projects" },
  { v: "40+", l: "Global clients" },
  { v: "98%", l: "Client retention" },
];

const why = [
  { icon: ShieldCheck, t: "Enterprise-grade security", d: "ISO-aligned processes, SOC 2 controls and zero-trust by default." },
  { icon: Rocket, t: "Outcome-driven delivery", d: "Fixed-scope sprints, transparent reporting, no surprises." },
  { icon: LineChart, t: "Measurable ROI", d: "Every engagement ties back to revenue, cost or velocity." },
  { icon: Layers, t: "Full-stack expertise", d: "Strategy, design, engineering and operations under one roof." },
  { icon: Workflow, t: "Modern engineering culture", d: "CI/CD, IaC, observability and SRE baked into every project." },
  { icon: Globe2, t: "Global delivery model", d: "Bengaluru HQ with distributed teams across time zones." },
];

const benefits = [
  "Reduce time-to-market by 40–60%",
  "Cut cloud spend with FinOps practices",
  "Deploy AI features in weeks, not quarters",
  "Hire pre-vetted, project-ready talent",
  "Modernize without disrupting operations",
  "24×7 production support and SRE",
];

const testimonials = [
  { name: "Priya Menon", role: "CTO, Finlytix", q: "Atlys rebuilt our analytics platform and shaved 4 months off our roadmap. Exceptional engineering discipline." },
  { name: "Daniel Park", role: "VP Engineering, CarePath", q: "Their AI team productionized our triage model in 6 weeks. The mentorship of our internal engineers was a bonus." },
  { name: "Anika Rao", role: "Head of People, NorthRail", q: "We hired three full-time engineers from the internship pipeline. Quality of talent is genuinely impressive." },
];

const process = [
  { n: "01", t: "Discover", d: "Workshops to align on goals, KPIs and constraints." },
  { n: "02", t: "Design", d: "Architecture, UX and a phased delivery blueprint." },
  { n: "03", t: "Build", d: "Sprint-based engineering with weekly demos." },
  { n: "04", t: "Operate", d: "Launch, monitor, iterate and scale with SRE." },
];

const faq = [
  { q: "What industries do you serve?", a: "Financial services, healthcare, logistics, education, SaaS and enterprise IT." },
  { q: "Do you offer fixed-price engagements?", a: "Yes — for well-scoped projects we offer fixed-price; long programs run on T&M with monthly caps." },
  { q: "How quickly can you start?", a: "Discovery typically begins within 5 business days, and delivery teams can be staffed in 2–3 weeks." },
  { q: "Are internships paid?", a: "Our internships are structured training programs with certifications. See the Internships page for full details." },
  { q: "Can you work with our existing teams?", a: "Absolutely — we frequently embed alongside in-house teams as a delivery partner." },
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative hero-bg">
        <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
        <div className="absolute top-20 -left-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[oklch(0.75_0.16_200/0.25)] blur-3xl" />

        <div className="relative container mx-auto max-w-7xl px-5 lg:px-8 pt-20 lg:pt-28 pb-24 lg:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium text-foreground/80 mb-7">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Trusted by enterprises across 18 countries
            </div>
            <h1 className="font-display font-bold text-[40px] sm:text-[56px] lg:text-[72px] leading-[1.02] tracking-tight">
              Engineering the{" "}
              <span className="brand-gradient-text">next era</span> of
              enterprise technology.
            </h1>
            <p className="mt-7 text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              {company.name} partners with ambitious organizations to deliver
              cloud, AI, software and talent solutions — end to end, from
              strategy to operations.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full h-12 px-7 bg-[var(--gradient-brand)] text-white shadow-[var(--shadow-elevated)]">
                <Link to="/contact">Talk to an expert <ArrowRight className="size-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full h-12 px-7 glass border-white/60">
                <Link to="/features">Explore capabilities</Link>
              </Button>
            </div>

            <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl">
              {stats.map((s) => (
                <div key={s.l} className="glass rounded-2xl p-5">
                  <div className="font-display text-3xl font-bold brand-gradient-text">{s.v}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* COMPANY INTRO */}
      <section className="container mx-auto max-w-7xl px-5 lg:px-8 py-24">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">Who we are</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold leading-[1.05]">
              An integrated IT partner — built for the AI era.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-lg text-muted-foreground leading-relaxed">
            <p>
              Headquartered in Bengaluru, {company.name} brings together senior
              engineering, design and consulting talent to help enterprises
              move faster without compromising on quality.
            </p>
            <p>
              We combine deep technical expertise with a structured delivery
              model — and reinvest in the next generation through our flagship
              internship and training programs.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative py-24 bg-gradient-to-b from-secondary/30 to-transparent">
        <div className="container mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">What we do</p>
              <h2 className="font-display text-4xl lg:text-5xl font-bold">
                Capabilities across the modern stack.
              </h2>
            </div>
            <Link to="/features" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
              See all capabilities <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass rounded-2xl p-6 hover:-translate-y-1 transition group"
              >
                <div className="h-11 w-11 rounded-xl bg-[var(--gradient-brand)] grid place-items-center text-white mb-4 shadow-[var(--shadow-glass)]">
                  <s.icon className="size-5" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="container mx-auto max-w-7xl px-5 lg:px-8 py-24">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">Why teams choose us</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold">A delivery partner that scales with you.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {why.map((w) => (
            <div key={w.t} className="glass rounded-2xl p-7">
              <w.icon className="size-7 text-primary mb-4" />
              <h3 className="font-display font-semibold text-lg mb-2">{w.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{w.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CLIENT BENEFITS */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-transparent to-[oklch(0.78_0.13_200/0.08)]">
        <div className="container mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">Client benefits</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">Outcomes that compound, quarter after quarter.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Our engagements are designed around measurable business outcomes
              — not deliverables. Here's what teams typically see after working
              with us.
            </p>
            <Button asChild className="rounded-full h-12 px-7 bg-[var(--gradient-brand)] text-white">
              <Link to="/contact">Schedule a discovery call <ArrowRight className="size-4" /></Link>
            </Button>
          </div>
          <div className="grid gap-3">
            {benefits.map((b) => (
              <div key={b} className="glass rounded-xl px-5 py-4 flex items-center gap-3">
                <CheckCircle2 className="size-5 text-primary shrink-0" />
                <span className="text-sm font-medium">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container mx-auto max-w-7xl px-5 lg:px-8 py-24">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">Voices of leaders</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold">Trusted by teams shipping serious software.</h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="glass rounded-2xl p-7 flex flex-col">
              <Quote className="size-7 text-primary mb-4" />
              <p className="text-foreground/85 leading-relaxed flex-1">"{t.q}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-11 w-11 rounded-full bg-[var(--gradient-brand)] grid place-items-center text-white font-semibold">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
                <div className="ml-auto flex text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-3.5 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 bg-secondary/40">
        <div className="container mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">How we work</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold">A repeatable process — without the rigidity.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {process.map((p) => (
              <div key={p.n} className="glass rounded-2xl p-7 relative overflow-hidden">
                <div className="absolute -top-3 -right-3 text-7xl font-display font-bold text-primary/10">{p.n}</div>
                <div className="text-sm font-semibold text-primary mb-2">Step {p.n}</div>
                <h3 className="font-display font-bold text-xl mb-2">{p.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto max-w-7xl px-5 lg:px-8 py-24">
        <div className="relative overflow-hidden rounded-3xl bg-[var(--gradient-brand)] p-10 lg:p-16 text-white">
          <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-display text-3xl lg:text-5xl font-bold leading-tight">
                Ready to build with a team that ships?
              </h2>
              <p className="mt-5 text-white/85 text-lg max-w-lg">
                From advisory to AI to staffing — let's map your roadmap and
                deliver real outcomes in your next quarter.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
              <Button asChild size="lg" className="rounded-full h-12 px-7 bg-white text-primary hover:bg-white/90">
                <Link to="/contact">Contact our team</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full h-12 px-7 border-white/40 text-white bg-white/10 hover:bg-white/20">
                <Link to="/form">Apply for internship</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto max-w-4xl px-5 lg:px-8 py-24">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">FAQ</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold">Common questions, answered.</h2>
        </div>
        <div className="space-y-3">
          {faq.map((f, i) => {
            const open = openFaq === i;
            return (
              <div key={f.q} className="glass rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(open ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-display font-semibold">{f.q}</span>
                  {open ? <Minus className="size-5 text-primary" /> : <Plus className="size-5 text-primary" />}
                </button>
                {open && <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{f.a}</div>}
              </div>
            );
          })}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="container mx-auto max-w-5xl px-5 lg:px-8 pb-24">
        <div className="glass-strong rounded-3xl p-10 lg:p-14 text-center">
          <Mail className="size-9 text-primary mx-auto mb-5" />
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-3">Career tips, internship openings & IT insights.</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-7">
            Get a monthly digest from our engineering and talent teams.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!email) return;
              toast.success("You're subscribed! Watch your inbox.");
              setEmail("");
            }}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <Input
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="rounded-full h-12 px-5 bg-white/80 border-white/70"
            />
            <Button type="submit" className="rounded-full h-12 px-6 bg-[var(--gradient-brand)] text-white">
              Subscribe <Zap className="size-4" />
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
