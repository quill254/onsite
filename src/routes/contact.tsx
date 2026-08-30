import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PageHero } from "@/components/site/PageHero";
import { COMPANY } from "@/lib/site-content";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Onsite Internet Solutions — Get Connected in Thika" },
      {
        name: "description",
        content:
          "Call, WhatsApp or send an enquiry to Onsite Internet Solutions to book an installation, request coverage or get support.",
      },
      { property: "og:title", content: "Contact Onsite Internet Solutions" },
      {
        property: "og:description",
        content: "Book an installation, request coverage in your area, or get support.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get connected"
        description="Tell us where you are and what you need. We reply the same working day."
      />

      <section className="section-y">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-4">
            {[
              { icon: Phone, label: "Call us", value: COMPANY.phone, href: `tel:${COMPANY.phone.replace(/\s/g, "")}` },
              { icon: MessageCircle, label: "WhatsApp", value: COMPANY.whatsapp, href: `https://wa.me/${COMPANY.whatsapp.replace(/\D/g, "")}` },
              { icon: Mail, label: "Email", value: COMPANY.email, href: `mailto:${COMPANY.email}` },
              { icon: MapPin, label: "Office", value: COMPANY.address },
              { icon: Clock, label: "Hours", value: COMPANY.hours },
            ].map((c) => (
              <div key={c.label} className="flex gap-4 rounded-xl border border-border bg-card p-5">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <c.icon className="size-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {c.label}
                  </p>
                  {c.href ? (
                    <a href={c.href} className="text-sm font-medium hover:text-primary">
                      {c.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium">{c.value}</p>
                  )}
                </div>
              </div>
            ))}
            <p className="text-xs text-muted-foreground">
              Contact details are placeholders pending confirmation of the official email, phone and
              address.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft md:p-8">
            {sent ? (
              <div className="py-10 text-center">
                <h2 className="font-display text-2xl font-bold">Thanks — we've got your details</h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  A member of the team will call you back within one working day.
                </p>
                <p className="mt-6 text-xs text-muted-foreground">
                  Concept demo: this form is front-end only and is not yet wired to an inbox or CRM.
                </p>
                <Button variant="outline" className="mt-6" onClick={() => setSent(false)}>
                  Send another enquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <h2 className="font-display text-2xl font-bold">Send an enquiry</h2>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full name</Label>
                    <Input id="name" required placeholder="Jane Wanjiku" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone number</Label>
                    <Input id="phone" required type="tel" placeholder="07xx xxx xxx" />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="area">Your area</Label>
                    <Input id="area" required placeholder="e.g. Makongeni" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="interest">I'm interested in</Label>
                    <Select defaultValue="home">
                      <SelectTrigger id="interest">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="home">Home internet</SelectItem>
                        <SelectItem value="business">Business internet</SelectItem>
                        <SelectItem value="institution">Institution / school</SelectItem>
                        <SelectItem value="support">Existing customer support</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us about your location, building type and when you'd like installation."
                  />
                </div>
                <Button type="submit" variant="signal" size="lg" className="w-full">
                  Get Connected
                </Button>
                <p className="text-xs text-muted-foreground">
                  Concept demo: submissions are not yet delivered anywhere.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
