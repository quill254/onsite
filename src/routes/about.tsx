import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { COMPANY } from "@/lib/site-content";
import teamGroup from "@/assets/team-group.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — The Team Behind Onsite Internet Solutions" },
      {
        name: "description",
        content:
          "Meet the local Thika-based team installing and supporting unlimited home, business and school internet across Kiambu County.",
      },
      { property: "og:title", content: "About Onsite Internet Solutions" },
      {
        property: "og:description",
        content: "A local crew of installers, engineers and support agents serving Thika and beyond.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const TEAM = [
  { name: "Team member name", role: "Lead Installation Technician", photo: team1 },
  { name: "Team member name", role: "Customer Support", photo: team2 },
  { name: "Team member name", role: "Network Engineer", photo: team3 },
  { name: "Team member name", role: "Operations Manager", photo: team4 },
];

const VALUES = [
  {
    title: "Local first",
    body: "Our technicians live in the same estates they serve, so help is minutes away — not a call centre in another county.",
  },
  {
    title: "Honest connections",
    body: "Unlimited means unlimited. No hidden caps, no surprise charges on your invoice.",
  },
  {
    title: "Built to stay up",
    body: "Redundant links, proactive monitoring and 24/7 support keep homes, shops and classrooms online.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A local crew keeping Thika online"
        description="Onsite Internet Solutions installs and supports unlimited internet for homes, businesses, schools and institutions across Thika and the surrounding areas."
      />

      <section className="section-y">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2">
          <Reveal>
            <img
              src={teamGroup}
              alt="The Onsite Internet Solutions installation crew outside the Thika office"
              width={1600}
              height={900}
              loading="lazy"
              className="w-full rounded-3xl object-cover shadow-lift"
            />
          </Reveal>
          <Reveal delay={120}>
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-signal">
                Our story
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl">Started on the ground, still on the ground</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                We began by stringing wireless links between a handful of rooftops in Thika Town. Today
                the same hands-on approach carries fibre and wireless connections into estates, shops,
                offices and classrooms — with installations typically completed within two working days.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {COMPANY.address} · {COMPANY.hours}
              </p>
              <Button asChild variant="signal" className="mt-6">
                <Link to="/contact">Work with us</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl">What we stand for</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 100}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <h3 className="text-lg">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="mx-auto max-w-6xl px-4">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-signal">
            The team
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl">Faces behind the network</h2>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
            Placeholder photos and names — swap in your real team pictures and titles.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((m, i) => (
              <Reveal key={m.role} delay={i * 90}>
                <figure className="group overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
                  <div className="aspect-square overflow-hidden bg-muted">
                    <img
                      src={m.photo}
                      alt={`${m.role} at Onsite Internet Solutions`}
                      width={800}
                      height={800}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <figcaption className="p-4">
                    <p className="font-accent text-base font-bold">{m.name}</p>
                    <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                      {m.role}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <p className="mt-6 text-xs text-muted-foreground">
            Concept page — team details pending confirmation by Onsite.
          </p>
        </div>
      </section>
    </>
  );
}
