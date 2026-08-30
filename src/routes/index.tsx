import { createFileRoute, Link } from "@tanstack/react-router";
import { Gauge, Headset, ShieldCheck, Wrench, ArrowRight, Wifi, Building2, School } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CoverageChecker } from "@/components/site/CoverageChecker";
import { PlanCard } from "@/components/site/PlanCard";
import { Reveal } from "@/components/site/Reveal";
import SplitText from "@/components/SplitText";
import { HOME_PLANS, TESTIMONIALS } from "@/lib/site-content";
import heroImage from "@/assets/hero-install.jpg";
import homeStreaming from "@/assets/home-streaming.jpg";
import businessOffice from "@/assets/business-office.jpg";
import schoolLab from "@/assets/school-lab.jpg";
import supportTeam from "@/assets/support-team.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Onsite Internet Solutions — Fast Home & Business Internet in Thika" },
      {
        name: "description",
        content:
          "Unlimited fibre and wireless internet for homes, businesses and schools around Thika. Check coverage, compare packages and get installed in two working days.",
      },
      { property: "og:title", content: "Onsite Internet Solutions — Internet that stays on" },
      {
        property: "og:description",
        content:
          "Unlimited home and business internet around Thika, installed and supported by a local team.",
      },
    ],
  }),
  component: Index,
});

const stats = [
  { value: "99.5%", label: "Network uptime target" },
  { value: "2 days", label: "Typical install time" },
  { value: "12+", label: "Areas served" },
  { value: "Local", label: "Thika-based engineers" },
];

const services = [
  {
    icon: Wifi,
    image: homeStreaming,
    alt: "A family streaming television at home over an Onsite connection",
    title: "Home internet",
    body: "Unlimited fibre and wireless packages built for streaming, study and working from home.",
  },
  {
    icon: Building2,
    image: businessOffice,
    alt: "Staff working at computers in a small business office",
    title: "Business connectivity",
    body: "Dedicated bandwidth, static IPs and SLA-backed response for offices, shops and clinics.",
  },
  {
    icon: School,
    image: schoolLab,
    alt: "Students using desktop computers in a school computer lab",
    title: "Institutions",
    body: "Campus-wide coverage with content filtering and bandwidth scheduling for schools.",
  },
  {
    icon: Wrench,
    image: supportTeam,
    alt: "Two Onsite field technicians with a ladder and fibre cable spools",
    title: "Installation & support",
    body: "Site survey, mounting, router setup and after-sales support handled by our own team.",
  },
];

const why = [
  { icon: Gauge, title: "Unlimited internet", body: "No data worries — every package comes with unlimited data." },
  { icon: ShieldCheck, title: "Ultra-speed connection", body: "High speeds guaranteed, with limits set only by the package you choose." },
  { icon: Wifi, title: "Flexible tariff plans", body: "Packages suited to homes, businesses, institutions and schools." },
  { icon: Headset, title: "Quick installation & support", body: "Set up within two working days, with 24/7 support on dedicated lines." },
];

function Index() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink-gradient text-ink-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <p className="animate-fade-in text-xs font-semibold uppercase tracking-[0.2em] text-signal">
              Thika · Kiambu County
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-[1.05] md:text-6xl">
              <SplitText
                text="Internet that stays on, from a team down the road."
                delay={22}
                duration={0.9}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 30 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="0px"
              />
            </h1>
            <p className="mt-5 max-w-lg animate-fade-in text-base text-ink-foreground/75 [animation-delay:400ms] md:text-lg">
              Unlimited fibre and wireless packages for homes, businesses and institutions —
              installed within two working days and supported by local engineers.
            </p>
            <div className="mt-8 flex animate-fade-in flex-wrap gap-3 [animation-delay:600ms]">
              <Button asChild variant="signal" size="xl">
                <Link to="/contact">Get Connected</Link>
              </Button>
              <Button asChild variant="onInk" size="xl">
                <Link to="/pricing">
                  See packages <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative animate-float">
            <img
              src={heroImage}
              width={1600}
              height={1100}
              alt="Onsite technician installing a wireless internet antenna on a rooftop"
              className="rounded-2xl shadow-lift"
            />
            <div className="absolute -bottom-5 -left-4 hidden animate-fade-in rounded-xl border border-border bg-card px-4 py-3 shadow-lift [animation-delay:800ms] sm:block">
              <p className="font-display text-lg font-bold text-foreground">2 days</p>
              <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                Typical install
              </p>
            </div>
          </div>

        </div>

        <div className="border-t border-ink-foreground/10">
          <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-8 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-2xl font-bold md:text-3xl">{s.value}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-ink-foreground/60">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section-y">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-2xl border border-border bg-surface p-6 md:p-8">
            <h2 className="font-display text-2xl font-bold">Do we cover your area?</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Type your estate and we'll tell you straight away.
            </p>
            <div className="mt-5">
              <CoverageChecker compact />
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal>
            <h2 className="font-display text-3xl font-bold">What we do</h2>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 90}>
                <div className="group h-full overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <div className="overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.alt}
                      loading="lazy"
                      width={1200}
                      height={800}
                      className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <span className="flex size-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                      <s.icon className="size-5" />
                    </span>
                    <h3 className="mt-4 text-base font-bold">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal>
            <h2 className="font-display text-3xl font-bold">On the ground in Thika</h2>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              Placeholder imagery — to be swapped for real photos of Onsite installations, the team
              and the office.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { src: supportTeam, alt: "Field technicians preparing a fibre installation", span: "lg:col-span-2" },
              { src: homeStreaming, alt: "A connected family home", span: "" },
              { src: schoolLab, alt: "School computer lab on an Onsite link", span: "" },
              { src: businessOffice, alt: "Business office on a dedicated connection", span: "lg:col-span-2" },
            ].map((img, i) => (
              <Reveal
                key={img.alt}
                delay={i * 80}
                direction={i % 2 === 0 ? "left" : "right"}
                className={img.span}
              >
                <div className="group overflow-hidden rounded-2xl border border-border">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    width={1200}
                    height={800}
                    className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      <section className="section-y">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-display text-3xl font-bold">Why customers stay with us</h2>
            <p className="mt-3 text-muted-foreground">
              We plan capacity per neighbourhood, keep engineers local and bill one clear price. No
              throttling surprises, no call-centre queues.
            </p>
          </div>
          <ul className="space-y-4">
            {why.map((w) => (
              <li key={w.title} className="flex gap-4 rounded-xl border border-border bg-card p-5">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-signal-gradient text-signal-foreground">
                  <w.icon className="size-5" />
                </span>
                <div>
                  <h3 className="text-base font-bold">{w.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{w.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-3xl font-bold">Home packages</h2>
            <Link to="/pricing" className="text-sm font-semibold text-primary hover:underline">
              See business & institution plans →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {HOME_PLANS.map((p) => (
              <PlanCard key={p.name} plan={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-display text-3xl font-bold">What customers say</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <blockquote className="text-sm leading-relaxed text-foreground">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-4 text-sm font-semibold">
                  {t.name}
                  <span className="font-normal text-muted-foreground"> · {t.area}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Placeholder quotes — to be replaced with real customer testimonials.
          </p>
        </div>
      </section>

      <section className="bg-ink-gradient text-ink-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-16 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold">Ready to get connected?</h2>
            <p className="mt-2 text-ink-foreground/75">
              Tell us your area and package — we'll confirm installation within a day.
            </p>
          </div>
          <Button asChild variant="signal" size="xl">
            <Link to="/contact">Get Connected</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
