import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { COMPANY } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="bg-ink-gradient text-ink-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <h3 className="font-display text-xl font-bold">{COMPANY.legalName}</h3>
          <p className="mt-3 max-w-sm text-sm text-ink-foreground/70">
            Fibre and wireless internet for homes, businesses and institutions across the Thika
            region — installed and supported by a local team.
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.18em] text-signal">
            Concept redesign — not an official Onsite property
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-ink-foreground/60">
            Pages
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              { to: "/pricing", label: "Packages" },
              { to: "/coverage", label: "Coverage" },
              { to: "/faq", label: "FAQs" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-ink-foreground/75 hover:text-ink-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-ink-foreground/60">
            Contact
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-ink-foreground/75">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 size-4 shrink-0 text-signal" />
              <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}>{COMPANY.phone}</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 size-4 shrink-0 text-signal" />
              <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-signal" />
              <span>{COMPANY.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-foreground/10">
        <div className="mx-auto max-w-6xl px-4 py-5 text-xs text-ink-foreground/55">
          © {new Date().getFullYear()} {COMPANY.legalName}. All details shown are placeholders
          pending confirmation.
        </div>
      </div>
    </footer>
  );
}
