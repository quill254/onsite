import { Check } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Plan } from "@/lib/site-content";

export function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={cn(
        "relative flex flex-col rounded-2xl border border-border bg-card p-6 shadow-soft",
        plan.featured && "border-signal/50 ring-1 ring-signal/30",
      )}
    >
      {plan.featured && (
        <span className="absolute -top-3 left-6 rounded-full bg-signal-gradient px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-signal-foreground">
          Most popular
        </span>
      )}
      <h3 className="font-display text-lg font-bold">{plan.name}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{plan.audience}</p>

      <div className="mt-5 flex items-end gap-1">
        <span className="text-sm font-medium text-muted-foreground">KSh</span>
        <span className="font-display text-4xl font-bold leading-none">{plan.price}</span>
        {plan.price !== "Custom" && (
          <span className="pb-1 text-sm text-muted-foreground">/month</span>
        )}
      </div>
      <p className="mt-2 text-sm font-semibold text-primary">{plan.speed}</p>

      <ul className="mt-5 flex-1 space-y-2.5 text-sm">
        {plan.features.map((f) => (
          <li key={f} className="flex gap-2">
            <Check className="mt-0.5 size-4 shrink-0 text-primary" />
            <span className="text-muted-foreground">{f}</span>
          </li>
        ))}
      </ul>

      <Button asChild variant={plan.featured ? "signal" : "outline"} className="mt-6">
        <Link to="/contact">Get Connected</Link>
      </Button>
    </div>
  );
}
