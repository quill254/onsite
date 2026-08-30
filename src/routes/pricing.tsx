import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { PlanCard } from "@/components/site/PlanCard";
import { BUSINESS_PLANS, HOME_PLANS } from "@/lib/site-content";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Internet Packages & Prices — Onsite Internet Solutions" },
      {
        name: "description",
        content:
          "Compare Onsite home, business and institution internet packages: speeds, monthly prices, installation terms and what's included.",
      },
      { property: "og:title", content: "Internet Packages & Prices — Onsite" },
      {
        property: "og:description",
        content: "Home, business and institution internet packages with unlimited data.",
      },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Packages"
        title="Simple monthly pricing, unlimited data"
        description="One clear price per month. Installation is quoted after a quick survey — no long contracts on home plans."
      />

      <section className="section-y">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-display text-2xl font-bold">Home</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {HOME_PLANS.map((p) => (
              <PlanCard key={p.name} plan={p} />
            ))}
          </div>

          <h2 className="mt-16 font-display text-2xl font-bold">Business & institutions</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {BUSINESS_PLANS.map((p) => (
              <PlanCard key={p.name} plan={p} />
            ))}
          </div>

          <div className="mt-12 grid gap-6 rounded-2xl border border-border bg-surface p-6 md:grid-cols-3 md:p-8">
            {[
              { t: "Installation", b: "Standard installation is quoted after a free site survey. Router included on selected plans." },
              { t: "Billing", b: "Billed monthly in advance via M-Pesa, bank transfer or invoice for business accounts." },
              { t: "Changing plans", b: "Upgrade or downgrade once per billing cycle at no extra charge." },
            ].map((i) => (
              <div key={i.t}>
                <h3 className="text-sm font-bold uppercase tracking-wider text-primary">{i.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{i.b}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs text-muted-foreground">
            Placeholder pricing — final package names, speeds, fees and offers to be confirmed by
            Onsite.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild variant="signal" size="lg">
              <Link to="/contact">Get Connected</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/coverage">Check coverage first</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
