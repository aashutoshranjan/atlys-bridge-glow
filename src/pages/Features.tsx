import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Code2, Brain, Cloud, Sparkles, Globe2, Building2, ShieldCheck, Cpu, Users, GraduationCap,
  BookOpen, Workflow, LineChart, LifeBuoy, CheckCircle2, ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  { icon: Code2, t: "Software Development", d: "Web, mobile and platform engineering — from MVP to enterprise scale.", tags: ["React", "Node", "Java", ".NET"] },
  { icon: Brain, t: "AI & Machine Learning", d: "LLMs, MLOps, vector search and bespoke models for production use.", tags: ["GenAI", "MLOps", "Vector DB"] },
  { icon: Cloud, t: "Cloud Services", d: "Cloud architecture, migration, FinOps and SRE across AWS, Azure, GCP.", tags: ["AWS", "Azure", "GCP", "K8s"] },
  { icon: Sparkles, t: "Digital Transformation", d: "Modernize legacy stacks and operating models with cloud-native foundations.", tags: ["Modernization", "Strategy"] },
  { icon: Globe2, t: "Web Development", d: "Marketing sites, web apps and headless commerce — fast and accessible.", tags: ["Next.js", "Headless", "CMS"] },
  { icon: Building2, t: "Enterprise Solutions", d: "ERP, CRM and integration platforms tailored to your operations.", tags: ["SAP", "Salesforce", "iPaaS"] },
  { icon: ShieldCheck, t: "Cyber Security", d: "Zero-trust, SecOps, audits and SOC support for regulated workloads.", tags: ["SOC 2", "ISO", "Zero Trust"] },
  { icon: Cpu, t: "IT Consulting", d: "Architecture, roadmaps and CTO advisory from senior practitioners.", tags: ["Strategy", "Advisory"] },
  { icon: Users, t: "Staffing", d: "Pre-vetted contract, contract-to-hire and full-time IT talent.", tags: ["Contract", "FTE"] },
  { icon: GraduationCap, t: "Internship Programs", d: "Industry-grade mentorship across 25+ technology and business tracks.", tags: ["Mentorship", "Certified"] },
  { icon: BookOpen, t: "Technical Training", d: "Custom upskilling tracks for engineering and data teams.", tags: ["Upskill", "Cohort"] },
  { icon: Workflow, t: "Automation", d: "RPA, workflow automation and AI-augmented ops.", tags: ["RPA", "n8n", "AI Ops"] },
  { icon: LineChart, t: "Analytics", d: "Data warehouses, BI and AI-ready data platforms.", tags: ["Snowflake", "dbt", "BI"] },
  { icon: LifeBuoy, t: "Support", d: "24×7 production support, incident response and SRE.", tags: ["L1–L3", "SRE"] },
];

const benefits = [
  "Senior-led, outcome-focused teams",
  "Transparent estimates and weekly demos",
  "Reusable accelerators reduce delivery time",
  "Security and compliance baked in",
  "Flexible engagement models (fixed / T&M)",
  "Global delivery, single accountable owner",
];

const process = [
  { n: "01", t: "Discover", d: "Workshops, audits and a scoped engagement plan." },
  { n: "02", t: "Design", d: "Architecture, UX and phased delivery blueprint." },
  { n: "03", t: "Build", d: "Sprint-based engineering, weekly demos." },
  { n: "04", t: "Operate", d: "Launch, monitor, iterate, scale." },
];

export default function Features() {
  return (
    <div className="overflow-hidden">
      <section className="relative hero-bg">
        <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
        <div className="relative container mx-auto max-w-7xl px-5 lg:px-8 pt-20 pb-16 lg:pt-28 lg:pb-20">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium mb-6">
              <Sparkles className="size-3.5 text-primary" /> Complete IT Solutions
            </div>
            <h1 className="font-display font-bold text-5xl lg:text-7xl leading-[1.02]">
              One partner. <span className="brand-gradient-text">Every capability</span> your roadmap needs.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              Explore the full breadth of services we deliver — from cloud and AI to staffing and structured internship programs.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-5 lg:px-8 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.t}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.04 }}
              className="glass rounded-2xl p-7 hover:-translate-y-1 transition group"
            >
              <div className="h-12 w-12 rounded-2xl bg-[var(--gradient-brand)] grid place-items-center text-white mb-5 shadow-[var(--shadow-glass)]">
                <f.icon className="size-5" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{f.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{f.d}</p>
              <div className="flex flex-wrap gap-1.5">
                {f.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-medium uppercase tracking-wider px-2 py-1 rounded-full bg-primary/8 text-primary">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-secondary/40">
        <div className="container mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">Benefits</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">Why teams standardize on us.</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Our service catalog is built around what consistently produces results in production — not what looks good in a sales deck.
            </p>
            <Button asChild className="rounded-full h-12 px-7 bg-[var(--gradient-brand)] text-white">
              <Link to="/contact">Get a tailored proposal <ArrowRight className="size-4" /></Link>
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

      <section className="container mx-auto max-w-7xl px-5 lg:px-8 py-24">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">Process</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold">A delivery model that scales with you.</h2>
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
      </section>
    </div>
  );
}
