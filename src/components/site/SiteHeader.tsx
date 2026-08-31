import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import onsiteLogo from "@/assets/onsite-logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/pricing", label: "Packages" },
  { to: "/coverage", label: "Coverage" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQs" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <img
            src={onsiteLogo}
            alt="Onsite Fiber logo"
            className="size-9 rounded-lg object-contain"
          />

          <span className="leading-tight">
            <span className="block font-display text-base font-bold">Onsite</span>
            <span className="block text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Internet Solutions
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "bg-secondary text-secondary-foreground" }}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild variant="signal" size="sm">
            <Link to="/contact">Get Connected</Link>
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="inline-flex size-10 items-center justify-center rounded-md border border-border md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-3">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-foreground" }}
                className="rounded-md px-2 py-3 text-sm font-medium text-muted-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild variant="signal" className="mt-2">
              <Link to="/contact" onClick={() => setOpen(false)}>
                Get Connected
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
