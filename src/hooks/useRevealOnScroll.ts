import { useEffect } from "react";

// Fades in every [data-reveal] element the first time it scrolls into view.
// The hiding CSS only applies once `js-reveal` is set, so content never stays invisible if this fails.
export function useRevealOnScroll() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const root = document.documentElement;
    root.classList.add("js-reveal");

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);
}
