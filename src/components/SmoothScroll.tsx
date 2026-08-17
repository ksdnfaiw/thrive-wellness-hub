import { useEffect } from "react";

/**
 * Inertia scrolling, matching the reference video's slow, weighted scroll feel.
 * Loaded after hydration only, and skipped entirely for reduced-motion users.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let instance: { raf: (time: number) => void; destroy: () => void } | null = null;
    let cancelled = false;

    void (async () => {
      const { default: Lenis } = await import("lenis");
      if (cancelled) return;

      const lenis = new Lenis({
        duration: 1.05,
        easing: (t: number) => 1 - Math.pow(1 - t, 3),
        smoothWheel: true,
        touchMultiplier: 1.6,
      });
      instance = lenis as unknown as { raf: (time: number) => void; destroy: () => void };

      const loop = (time: number) => {
        instance?.raf(time);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    })();

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      instance?.destroy();
    };
  }, []);

  return null;
}
