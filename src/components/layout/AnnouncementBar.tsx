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

const FIRST_NAMES = [
  "Rahul", "Priya", "Amit", "Sneha", "Vikram", "Ananya", "Rohan", "Kavya",
  "Arjun", "Neha", "Siddharth", "Pooja", "Karthik", "Divya", "Aditya", "Isha",
  "Manish", "Shreya", "Nikhil", "Meera", "Varun", "Swati",
];

const LAST_NAMES = [
  "Sharma", "Patel", "Verma", "Iyer", "Reddy", "Nair", "Gupta", "Mehta",
  "Joshi", "Rao", "Das", "Kulkarni", "Bhatt", "Menon", "Chowdhury", "Pillai",
];

const rand = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
const fullName = () => `${rand(FIRST_NAMES)} ${rand(LAST_NAMES)}`;

type Pick = { name: string; pos: string };

// Rotates generic sample names with every position, but phrases each
// message transparently (exploring opportunities) — never claims that
// the person has enrolled, since no verified enrollment data is used.
const message = (p: Pick) => [
  { t: p.name, hi: true },
  { t: " is exploring the " },
  { t: p.pos, hi: true },
  { t: " Internship at " },
  { t: company.name, hi: true },
  { t: "!" },
];

const ROTATE_MS = 3500;

export default function AnnouncementBar() {
  const [pick, setPick] = useState<Pick>(() => ({
    name: fullName(),
    pos: rand(POSITIONS),
  }));
  const reduced = useReducedMotion();

  useEffect(() => {
    const t = setInterval(() => {
      setPick((prev) => {
        let pos = rand(POSITIONS);
        while (pos === prev.pos) pos = rand(POSITIONS);
        let name = fullName();
        while (name === prev.name) name = fullName();
        return { name, pos };
      });
    }, ROTATE_MS);
    return () => clearInterval(t);
  }, []);

  const segments = message(pick);

  return (
    <div
      className="announcement-bar h-10 lg:h-12 flex items-center justify-center overflow-hidden text-background"
      role="status"
      aria-live="polite"
    >
      <div className="container mx-auto max-w-7xl px-4 flex items-center justify-center gap-2">
        <Sparkles className="hidden sm:block size-3.5 shrink-0 banner-hi" />
        <AnimatePresence mode="wait" initial={false}>
          <motion.p
            key={`${pick.name}-${pick.pos}`}
            initial={{ opacity: 0, y: reduced ? 0 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduced ? 0 : -10 }}
            transition={{ duration: reduced ? 0.2 : 0.4 }}
            className="truncate font-semibold text-[11px] sm:text-[13px] lg:text-[15px] text-center whitespace-nowrap"
          >
            {segments.map((s, i) => (
              <span key={i} className={s.hi ? "banner-hi" : undefined}>
                {s.t}
              </span>
            ))}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}
