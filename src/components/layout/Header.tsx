import { Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight, MessageCircle, Linkedin } from "lucide-react";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { company } from "@/config/company";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/features", label: "Features" },
  { to: "/internships", label: "Internship With Us" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled
          ? "backdrop-blur-xl bg-white/70 border-b border-border/60 shadow-[0_6px_30px_-12px_rgba(60,60,140,0.15)]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto max-w-7xl px-5 lg:px-8 h-[72px] flex items-center justify-between gap-6">
        <Logo />

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-sm font-medium transition ${
                  isActive
                    ? "text-primary bg-primary/8"
                    : "text-foreground/75 hover:text-foreground hover:bg-foreground/5"
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2.5">
          <a
            href={company.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="h-10 w-10 grid place-items-center rounded-full glass !border-white/60 text-[#0A66C2] hover:text-white hover:bg-[#0A66C2] transition"
          >
            <Linkedin className="size-4" />
          </a>
          <Button
            variant="ghost"
            onClick={() => navigate("/contact")}
            className="glass !border-white/60 rounded-full px-4 h-10 text-foreground/80"
          >
            <MessageCircle className="size-4" /> Contact Support
          </Button>
          <Button
            onClick={() => navigate("/form")}
            className="btn-brand rounded-full h-10 px-5 font-semibold"
          >
            Apply for Internship <ArrowRight className="size-4" />
          </Button>
        </div>

        <button
          onClick={() => setOpen((s) => !s)}
          className="lg:hidden h-10 w-10 grid place-items-center rounded-lg glass"
          aria-label="Menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-white/90 backdrop-blur-xl">
          <div className="container mx-auto max-w-7xl px-5 py-4 flex flex-col gap-1">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2.5 rounded-lg text-sm font-medium ${
                    isActive
                      ? "text-primary bg-primary/8"
                      : "text-foreground/80 hover:bg-foreground/5"
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
            <div className="grid grid-cols-2 gap-2 pt-3">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="glass rounded-full h-11 grid place-items-center text-sm font-medium"
              >
                Contact Support
              </Link>
              <Link
                to="/form"
                onClick={() => setOpen(false)}
                className="btn-brand rounded-full h-11 grid place-items-center text-sm font-semibold"
              >
                Apply Now
              </Link>
            </div>
            <a
              href={company.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 flex items-center justify-center gap-2 rounded-full h-11 text-sm font-medium bg-[#0A66C2] text-white"
            >
              <Linkedin className="size-4" /> Follow us on LinkedIn
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
