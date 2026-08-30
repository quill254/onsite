import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { FAQS, COMPANY } from "@/lib/site-content";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQs — Installation, Pricing & Support | Onsite Internet Solutions" },
      {
        name: "description",
        content:
          "Answers about Onsite internet installation times, payment methods, data limits, support hours, coverage and upgrading your package.",
      },
      { property: "og:title", content: "Onsite Internet Solutions — Frequently Asked Questions" },
      {
        property: "og:description",
        content: "Install times, payments, data limits, support and coverage answered.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQs"
        title="Questions we get asked most"
        description="If your question isn't here, call or WhatsApp us — a real person answers."
      />

      <section className="section-y">
        <div className="mx-auto max-w-3xl px-4">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-base font-semibold">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <p className="mt-6 text-xs text-muted-foreground">
            Draft answers — to be confirmed or corrected by Onsite.
          </p>

          <div className="mt-10 rounded-2xl border border-border bg-surface p-6 text-center">
            <h2 className="font-display text-xl font-bold">Still need help?</h2>
            <p className="mt-2 text-sm text-muted-foreground">{COMPANY.hours}</p>
            <Button asChild variant="signal" className="mt-5">
              <Link to="/contact">Talk to the team</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
