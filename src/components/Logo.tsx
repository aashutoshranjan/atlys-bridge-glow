import { Link } from "react-router-dom";
import { company } from "@/config/company";
import logoSrc from "@/assets/atlys-logo.png";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center gap-3 group ${className}`}>
      <div className="relative h-10 w-10 rounded-xl bg-white/70 backdrop-blur grid place-items-center shadow-[var(--shadow-glass)] border border-white/70 overflow-hidden">
        <img
          src={logoSrc}
          alt={`${company.name} logo`}
          className="h-8 w-8 object-contain"
        />
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
