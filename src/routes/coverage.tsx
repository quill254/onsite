import { createFileRoute, Link } from "@tanstack/react-router";
import { Radio } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { CoverageChecker } from "@/components/site/CoverageChecker";
import { COVERAGE_AREAS } from "@/lib/site-content";

export const Route = createFileRoute("/coverage")({
  head: () => ({
    meta: [
      { title: "Coverage Areas — Onsite Internet Solutions, Thika" },
      {
        name: "description",
        content:
          "See which Thika-area estates Onsite Internet Solutions covers, check your street instantly, and request a survey if your area isn't live yet.",
      },
      { property: "og:title", content: "Coverage Areas — Onsite Internet Solutions" },
      {
        property: "og:description",
        content: "Check whether Onsite fibre and wireless internet reaches your area.",
      },
    ],
  }),
  component: CoveragePage,
});

const statusStyles: Record<string, string> = {
  Live: "bg-accent text-accent-foreground",
  Planned: "bg-secondary text-secondary-foreground",
  "Survey required": "bg-muted text-muted-foreground",
};

function CoveragePage() {
  return (
    <>
      <PageHero
        eyebrow="Coverage"
        title="Do we reach your area?"
        description="Our network covers Thika town and the surrounding estates, with new areas added as demand grows."
      />

      <section className="section-y">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <CoverageChecker />

            <h2 className="mt-10 font-display text-2xl font-bold">Areas we serve</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {COVERAGE_AREAS.map((a) => (
                <li
                  key={a.area}
                  className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3"
                >
                  <span className="text-sm font-medium">{a.area}</span>
                  <span
                    className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${statusStyles[a.status]}`}
                  >
                    {a.status}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-muted-foreground">
              Illustrative area list — to be replaced with Onsite's actual service map.
            </p>
          </div>

          <div>
            <div className="relative overflow-hidden rounded-2xl border border-border bg-ink-gradient p-8 text-ink-foreground shadow-lift">
              <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle,white_1px,transparent_1px)] [background-size:22px_22px]" />
              <div className="relative">
                <Radio className="size-8 text-signal" />
                <h3 className="mt-4 text-xl font-bold">Thika service area</h3>
                <p className="mt-2 text-sm text-ink-foreground/75">
                  Wireless coverage radiates from our masts in Thika town, with fibre routes along
                  the main estates. A real coverage map will replace this graphic.
                </p>
                <div className="mt-8 space-y-3">
                  {[
                    { l: "Core wireless radius", v: "~12 km from Thika town" },
                    { l: "Fibre routes", v: "Selected estates & business parks" },
                    { l: "Survey turnaround", v: "1 working day" },
                  ].map((r) => (
                    <div
                      key={r.l}
                      className="flex items-center justify-between border-b border-ink-foreground/10 pb-2 text-sm"
                    >
                      <span className="text-ink-foreground/60">{r.l}</span>
                      <span className="font-medium">{r.v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-border bg-surface p-6">
              <h3 className="font-display text-lg font-bold">Not listed yet?</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Send us your location. We log every request and prioritise new areas by demand.
              </p>
              <Button asChild variant="signal" className="mt-4">
                <Link to="/contact">Request coverage</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
