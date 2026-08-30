import { useState, type FormEvent } from "react";
import { MapPin, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { COVERAGE_AREAS } from "@/lib/site-content";

export function CoverageChecker({ compact = false }: { compact?: boolean }) {
  const [value, setValue] = useState("");
  const [result, setResult] = useState<null | { tone: "live" | "soon" | "unknown"; text: string }>(
    null,
  );

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const q = value.trim().toLowerCase();
    if (!q) return;
    const match = COVERAGE_AREAS.find((a) => a.area.toLowerCase().includes(q));
    if (match?.status === "Live") {
      setResult({ tone: "live", text: `Good news — ${match.area} is on our live network. We can usually install within two working days.` });
    } else if (match) {
      setResult({ tone: "soon", text: `${match.area} is ${match.status.toLowerCase()}. Leave your details and we'll confirm a date for your street.` });
    } else {
      setResult({
        tone: "unknown",
        text: "We don't have that area listed yet. Send us your location and our team will confirm availability manually within one working day.",
      });
    }
  }

  return (
    <div className={compact ? "" : "rounded-2xl border border-border bg-card p-6 shadow-soft"}>
      <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <MapPin className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter your estate or area, e.g. Makongeni"
            aria-label="Your area"
            className="h-11 pl-9"
          />
        </div>
        <Button type="submit" variant="signal" size="lg">
          <Search className="size-4" /> Check coverage
        </Button>
      </form>

      {result && (
        <p
          className={
            "mt-4 rounded-lg border px-4 py-3 text-sm " +
            (result.tone === "live"
              ? "border-primary/30 bg-accent text-accent-foreground"
              : "border-border bg-muted text-muted-foreground")
          }
        >
          {result.text}
        </p>
      )}
      <p className="mt-3 text-xs text-muted-foreground">
        Concept demo: results are matched against a sample area list pending Onsite's real coverage
        data.
      </p>
    </div>
  );
}
