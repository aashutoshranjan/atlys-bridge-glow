import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { company } from "@/config/company";

const POSITIONS = [
  "Data Analyst", "Python Developer", "Front End Developer", "HTML/CSS Developer",
  "Business Analyst", "HR Executive", "SQL Developer", "Email & Chat Process",
  "Web Developer", "Data Science", "Machine Learning", "Software Developer",
  "Full Stack Developer", "Computer Science Engineer", "Medical Coding",
  "Backend Developer", "Account / MIS Executive", "Java Developer",
  "Graduate Engineer", "DevOps Engineer", "Customer Service And Email Process",
  "Financial Analyst", "Lab Technician", "Artificial Intelligence",
  "Cyber Security", "Healthcare Data Analyst", "Content Writer", "UI/UX Design",
  "Design Engineer", "React Developer", "MERN Stack Developer",
  "Ticketing Executive", "Account Executive", "Diploma Engineer", "HR Recruiter",
  "Node.js Developer", "Technical Support Executive", "Business Development",
  "Medical Billing", "Staff Nurse", "MBBS Doctor",
];

type Seg = { t: string; hi?: boolean };
const seg = (t: string, hi = false): Seg => ({ t, hi });
const B = company.name;
const D = company.domain;

// Rotating message templates — position and brand name are highlighted
// in the accent color. These are informational announcements only.
const TEMPLATES: ((p: string) => Seg[])[] = [
  (p) => [seg("Explore opportunities in "), seg(p, true), seg(" Internship at "), seg(B, true), seg(" 🚀")],
  (p) => [seg("Build practical skills in "), seg(p, true), seg(" with "), seg(B, true)],
  (p) => [seg("Discover technology career opportunities with "), seg(B, true)],
  (p) => [seg("Now hiring: "), seg(p, true), seg(" — apply today at "), seg(D, true)],
];

const ROTATE_MS = 3500;

export default function AnnouncementBar() {
  const [idx, setIdx] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => i + 1), ROTATE_MS);
    return () => clearInterval(t);
  }, []);

  const segments = TEMPLATES[idx % TEMPLATES.length](
    POSITIONS[idx % POSITIONS.length]
  );

  return (
    <div
      className="h-9 lg:h-10 flex items-center justify-center overflow-hidden bg-foreground text-background"
      role="status"
      aria-live="polite"
    >
      <div className="container mx-auto max-w-7xl px-4 flex items-center justify-center gap-2">
        <Sparkles className="hidden sm:block size-3.5 shrink-0 text-primary" />
        <AnimatePresence mode="wait" initial={false}>
          <motion.p
            key={idx}
            initial={{ opacity: 0, y: reduced ? 0 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduced ? 0 : -10 }}
            transition={{ duration: reduced ? 0.2 : 0.4 }}
            className="truncate text-[11px] lg:text-[13px] text-center whitespace-nowrap"
          >
            {segments.map((s, i) => (
              <span key={i} className={s.hi ? "font-semibold text-primary" : undefined}>
                {s.t}
              </span>
            ))}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}
