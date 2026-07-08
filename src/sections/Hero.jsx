import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "../lib/gsapSetup";
import { ChevronDown, Play } from "lucide-react";

export default function Hero() {
  const heroRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    // GSAP ScrollTrigger for smooth video parallax
    const ctx = gsap.context(() => {
      gsap.to(videoRef.current, {
        y: "15%", // Moves the video down slightly as you scroll
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2, // Adds a slight delay to the scrub for a smoother feel
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Custom easing for that buttery smooth "premium" feel
  const smoothEase = [0.16, 1, 0.3, 1];

  return (
    <section
      id="hero-modern"
      ref={heroRef}
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-obsidian"
    >
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-105" // scale-105 prevents edge bleeding during parallax
          // Replace this URL with your actual car/desert video
          src="/videos/video.mp4"
        />
      </div>

      {/* Cinematic Overlays for text readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-obsidian/90 via-obsidian/50 to-transparent" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-obsidian via-transparent to-transparent" />

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-10 pt-20">
        {/* Eyebrow Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: smoothEase, delay: 0.2 }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="h-[1px] w-12 bg-ember-bright" />
          <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-ember-bright">
            Est. for the desert road & the city night
          </p>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: smoothEase, delay: 0.35 }}
          className="font-display font-medium text-[12vw] md:text-[6vw] leading-[1.05] text-white tracking-tight max-w-4xl"
        >
          Protection worthy <br />
          <span className="text-sand/80 italic font-light">
            of the machine.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: smoothEase, delay: 0.5 }}
          className="mt-8 max-w-xl text-sand/70 text-base md:text-lg leading-relaxed font-light"
        >
          Emberdune is bespoke coverage for cars that were never meant to be
          ordinary — ceramic armor, mechanical breakdown protection, and a
          concierge that answers before sundown.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: smoothEase, delay: 0.65 }}
          className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6"
        >
          <a
            href="#coverage"
            className="group relative overflow-hidden bg-ember hover:bg-ember-bright text-obsidian font-semibold px-8 py-4 text-[13px] uppercase tracking-[0.15em] transition-all duration-500 ease-out flex items-center gap-3"
          >
            <span className="relative z-10">Explore Coverage</span>
            <div className="absolute inset-0 h-full w-0 bg-white/20 transition-all duration-500 ease-out group-hover:w-full z-0" />
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-6 md:left-10 z-20 flex flex-col items-center gap-2 text-sand/50"
      >
        <span
          className="font-mono text-[10px] tracking-widest uppercase rotate-180"
          style={{ writingMode: "vertical-rl" }}
        >
          Scroll
        </span>
        <ChevronDown className="animate-bounce" size={16} />
      </motion.div>
    </section>
  );
}
