import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: "-40px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const hidden =
    direction === "left"
      ? "-translate-x-8 opacity-0"
      : direction === "right"
        ? "translate-x-8 opacity-0"
        : direction === "none"
          ? "opacity-0"
          : "translate-y-8 opacity-0";

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-all duration-700 ease-out motion-reduce:transition-none",
        shown ? "translate-x-0 translate-y-0 opacity-100" : hidden,
        className,
      )}
    >
      {children}
    </div>
  );
}
