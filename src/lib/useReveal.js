import { useEffect, useRef } from "react";
import { gsap } from "./gsapSetup";
import "./gsapSetup"; // ensures ScrollTrigger plugin is registered

/**
 * Attaches a scroll-triggered reveal animation to elements matching
 * `selector` inside the returned ref container.
 */
export function useReveal(selector = "[data-reveal]", options = {}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray(selector);
      targets.forEach((el, i) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, y: options.y ?? 36 },
          {
            autoAlpha: 1,
            y: 0,
            duration: options.duration ?? 1,
            ease: "power3.out",
            delay: (options.stagger ?? 0.08) * (options.staggerAll ? i : 0),
            scrollTrigger: {
              trigger: el,
              start: options.start ?? "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [selector]);

  return containerRef;
}
