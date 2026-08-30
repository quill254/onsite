import { useEffect, useRef, type ElementType } from "react";
import gsap from "gsap";

type SplitType = "chars" | "words" | "lines";

export type SplitTextProps = {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: SplitType;
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  threshold?: number;
  rootMargin?: string;
  textAlign?: "left" | "center" | "right";
  tag?: ElementType;
  onLetterAnimationComplete?: () => void;
};

function splitText(text: string, splitType: SplitType) {
  if (splitType === "words") return text.split(/(\s+)/);
  if (splitType === "lines") return text.split("\n");
  return Array.from(text);
}

export default function SplitText({
  text,
  className,
  delay = 50,
  duration = 1,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "left",
  tag: Tag = "span",
  onLetterAnimationComplete,
}: SplitTextProps) {
  const ref = useRef<HTMLElement | null>(null);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const parts = el.querySelectorAll<HTMLElement>("[data-split-part]");
    if (!parts.length) return;

    gsap.set(parts, from);

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const play = () => {
      if (done.current) return;
      done.current = true;
      gsap.to(parts, {
        ...to,
        duration: reduce ? 0 : duration,
        ease,
        stagger: reduce ? 0 : delay / 1000,
        onComplete: () => onLetterAnimationComplete?.(),
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) play();
      },
      { threshold, rootMargin },
    );
    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  const words = splitType === "chars" ? text.split(" ") : null;

  return (
    <Tag
      ref={ref as never}
      className={className}
      style={{ textAlign, display: "inline-block", whiteSpace: "pre-wrap" }}
      aria-label={text}
    >
      {words
        ? words.map((word, wi) => (
            <span key={`${word}-${wi}`} style={{ display: "inline-block" }} aria-hidden="true">
              {Array.from(word).map((ch, ci) => (
                <span
                  key={`${ch}-${ci}`}
                  data-split-part
                  style={{ display: "inline-block", willChange: "transform, opacity" }}
                >
                  {ch}
                </span>
              ))}
              {wi < words.length - 1 && (
                <span data-split-part style={{ display: "inline-block" }}>
                  {"\u00A0"}
                </span>
              )}
            </span>
          ))
        : splitText(text, splitType).map((part, i) => (
            <span
              key={`${part}-${i}`}
              data-split-part
              aria-hidden="true"
              style={{ display: "inline-block", willChange: "transform, opacity" }}
            >
              {part === " " ? "\u00A0" : part}
            </span>
          ))}
    </Tag>
  );
}
