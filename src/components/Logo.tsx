import { Link } from "react-router-dom";
import { company } from "@/config/company";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center gap-2.5 group ${className}`}>
      <div className="relative h-9 w-9 rounded-xl bg-[var(--gradient-brand)] grid place-items-center shadow-[var(--shadow-glass)] overflow-hidden">
        <span className="text-white font-display font-bold text-lg">
          {company.shortName[0]}
        </span>
        <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition" />
      </div>
      <div className="flex flex-col leading-tight">
        <span className="font-display font-bold text-[15px] text-foreground">
          {company.name}
        </span>
        <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          {company.domain}
        </span>
      </div>
    </Link>
  );
}
