import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen grid place-items-center hero-bg px-5">
      <div className="text-center max-w-md">
        <div className="font-display text-7xl font-bold brand-gradient-text">404</div>
        <h1 className="font-display text-2xl font-semibold mt-3">Page not found</h1>
        <p className="text-muted-foreground mt-2">The page you're looking for doesn't exist or has moved.</p>
        <Button asChild className="mt-6 rounded-full bg-[var(--gradient-brand)] text-white">
          <Link to="/"><Home className="size-4" /> Go home</Link>
        </Button>
      </div>
    </div>
  );
}
