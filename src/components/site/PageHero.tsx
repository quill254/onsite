import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="bg-ink-gradient text-ink-foreground">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-signal">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-base text-ink-foreground/75">{description}</p>
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
