import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

export type RevealVariant = "up" | "clip" | "scale" | "fade" | "stagger";

export function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  variant = "up",
  className = "",
}: {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  variant?: RevealVariant;
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // No animation for reduced-motion users, and no observer cost either.
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) {
      setShown(true);
      return;
    }

    // Anything already in the first viewport reveals immediately: avoids a
    // one-frame flash and keeps the LCP element paint-stable.
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.9) {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined }}
      className={`reveal reveal-${variant} ${shown ? "reveal-in" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}
