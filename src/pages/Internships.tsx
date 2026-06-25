import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GraduationCap, Award, Clock, BookOpen, ArrowRight, Search, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const internships = [
  { title: "Data Analyst", desc: "Hands-on with SQL, Python and BI dashboards for real client datasets.", eligibility: "Any graduate / final-year student" },
  { title: "Python Developer", desc: "Build automation tools, APIs and data pipelines in Python.", eligibility: "CS / IT background preferred" },
  { title: "Front End Developer", desc: "Ship modern React + TypeScript interfaces with production discipline.", eligibility: "Familiarity with HTML/CSS/JS" },
  { title: "SQL Developer", desc: "Design schemas, write performant queries and own data integrity.", eligibility: "Any CS / data background" },
  { title: "HTML/CSS Developer", desc: "Pixel-perfect markup, semantic structure and responsive design.", eligibility: "Beginners welcome" },
  { title: "Business Analyst", desc: "Translate business needs into requirements, user stories and KPIs.", eligibility: "Any graduate" },
  { title: "HR Executive / HR Intern", desc: "Talent ops, recruitment workflows and people analytics.", eligibility: "MBA-HR / any graduate" },
  { title: "Machine Learning", desc: "Train, evaluate and ship ML models for real business problems.", eligibility: "Python + math fundamentals" },
  { title: "Data Science", desc: "Statistical modeling, experimentation and storytelling with data.", eligibility: "STEM / quant background" },
  { title: "Artificial Intelligence", desc: "Applied GenAI, LLMs, vector search and AI app development.", eligibility: "CS / data background" },
  { title: "Web Developer", desc: "End-to-end web app development with modern frameworks.", eligibility: "CS / IT background" },
  { title: "Software Developer", desc: "Engineering fundamentals across multiple stacks and tools.", eligibility: "CS / IT graduate" },
  { title: "Full Stack Developer", desc: "Front end + back end + DB + deployment, real production work.", eligibility: "Intermediate web skills" },
  { title: "Computer Science Engineer", desc: "Cross-functional engineering rotation across teams.", eligibility: "BE/B.Tech CS / IT" },
  { title: "Medical Billing", desc: "Healthcare RCM workflows, coding standards and claims handling.", eligibility: "Any graduate" },
  { title: "Node.js Developer", desc: "Backend APIs, microservices and async architectures with Node.", eligibility: "JS fundamentals" },
  { title: "Healthcare Data Analyst", desc: "Healthcare datasets, HIPAA-aware reporting and BI.", eligibility: "Life sciences / data background" },
  { title: "Graduate Engineer", desc: "Structured rotation across product engineering teams.", eligibility: "BE/B.Tech fresh graduate" },
  { title: "Financial Analyst", desc: "Financial modeling, reporting and analytics for fintech projects.", eligibility: "Finance / commerce graduate" },
  { title: "Email & Chat Process", desc: "Customer communications, support quality and CSAT operations.", eligibility: "Any graduate" },
  { title: "Java Developer", desc: "Spring Boot, microservices and enterprise Java engineering.", eligibility: "Java fundamentals" },
  { title: "Account Executive", desc: "Inbound/outbound enterprise sales and CRM workflows.", eligibility: "Any graduate" },
  { title: "DevOps Engineer", desc: "CI/CD, IaC, containers, observability and SRE practices.", eligibility: "Linux + cloud basics" },
  { title: "MERN Stack Developer", desc: "MongoDB, Express, React and Node — end to end.", eligibility: "JS / React fundamentals" },
  { title: "Customer Service / Email Support", desc: "Multi-channel customer support and ticket workflows.", eligibility: "Any graduate" },
  { title: "Business Development", desc: "Lead generation, qualification and partnership workflows.", eligibility: "Any graduate" },
  { title: "Lab Technician", desc: "Clinical lab workflows, equipment handling and SOPs.", eligibility: "Life sciences background" },
  { title: "Medical Coding", desc: "ICD-10, CPT coding standards and compliance.", eligibility: "Life sciences / any graduate" },
  { title: "Cyber Security", desc: "VAPT, SOC operations, hardening and security tooling.", eligibility: "CS / IT background" },
];

export default function Internships() {
  const [q, setQ] = useState("");
  const filtered = internships.filter((i) =>
    i.title.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div className="overflow-hidden">
      <section className="relative hero-bg">
        <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
        <div className="relative container mx-auto max-w-7xl px-5 lg:px-8 pt-20 pb-16 lg:pt-28 lg:pb-20">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium mb-6">
              <GraduationCap className="size-3.5 text-primary" /> Internship With Us
            </div>
            <h1 className="font-display font-bold text-5xl lg:text-7xl leading-[1.02]">
              Real projects. <span className="brand-gradient-text">Real mentors.</span> Real outcomes.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              Pick from 25+ structured tracks across engineering, data, AI,
              healthcare and business. Every program ships with certification,
              dedicated mentorship and an offer pipeline.
            </p>

            <div className="mt-8 max-w-xl glass rounded-full px-4 py-2 flex items-center gap-3">
              <Search className="size-4 text-muted-foreground" />
              <Input
                placeholder="Search internships (e.g. Python, Data, MERN)"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                className="border-0 bg-transparent shadow-none focus-visible:ring-0 h-10 px-0"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-5 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: (i % 9) * 0.03 }}
              className="glass rounded-2xl p-7 flex flex-col hover:-translate-y-1 transition"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="h-11 w-11 rounded-xl btn-brand grid place-items-center text-white">
                  <GraduationCap className="size-5" />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full bg-primary/8 text-primary">Open</span>
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{it.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{it.desc}</p>
              <div className="space-y-2 text-xs text-foreground/75 mb-6">
                <div className="flex items-center gap-2"><BookOpen className="size-3.5 text-primary" /> {it.eligibility}</div>
                <div className="flex items-center gap-2"><Clock className="size-3.5 text-primary" /> 4 weeks · All Programs</div>
                <div className="flex items-center gap-2"><Award className="size-3.5 text-primary" /> Internship Certificate + Letter of Recommendation</div>
                <div className="flex items-center gap-2"><BadgeCheck className="size-3.5 text-primary" /> Stipend Provided</div>
              </div>
              <Button asChild className="mt-auto rounded-full btn-brand text-white">
                <Link to="/form">Apply Now <ArrowRight className="size-4" /></Link>
              </Button>
            </motion.div>
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="text-center text-muted-foreground py-12">No internships match your search.</div>
        )}
      </section>
    </div>
  );
}
