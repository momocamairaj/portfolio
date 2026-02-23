import { useEffect } from "react";

export default function useRevealOnScroll(enabled) {
  useEffect(() => {
    if (!enabled || typeof window === "undefined") {
      return undefined;
    }

    const targets = Array.from(document.querySelectorAll(".reveal-on-scroll:not(.is-visible)"));
    if (targets.length === 0) {
      return undefined;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || typeof window.IntersectionObserver === "undefined") {
      targets.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        root: null,
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px"
      }
    );

    targets.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [enabled]);
}
