"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

/** Custom desktop cursor: glowing dot that expands on interactive elements. */
export function Cursor() {
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
    const [mode, setMode] = useState<"idle" | "hover" | "explore">("idle");
  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);
  const x = useSpring(mx, { stiffness: 700, damping: 40, mass: 0.35 });
  const y = useSpring(my, { stiffness: 700, damping: 40, mass: 0.35 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    setEnabled(true);

    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
      const el = e.target as HTMLElement | null;
        if (el?.closest("[data-cursor='explore']")) setMode("explore");
      else if (el?.closest("a, button, [role='button'], input, textarea, select")) setMode("hover");
      else setMode("idle");
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  if (!enabled || reduce) return null;

    const size = mode === "explore" ? 78 : mode === "hover" ? 46 : 12;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[200] hidden md:block"
      style={{ x, y }}
    >
      <motion.div
        className="flex items-center justify-center rounded-full"
        animate={{ width: size, height: size, marginLeft: -size / 2, marginTop: -size / 2 }}
        transition={{ type: "spring", stiffness: 320, damping: 26 }}
        style={{
          background: mode === "idle" ? "var(--violet)" : "oklch(1 0 0 / 10%)",
          border: mode === "idle" ? "none" : "1px solid oklch(1 0 0 / 45%)",
          backdropFilter: mode === "idle" ? undefined : "blur(4px)",
          boxShadow: "var(--glow-violet)",
        }}
      >
          {mode === "explore" && (
          <span className="font-display text-[0.6rem] tracking-[0.28em] text-foreground">VIEW</span>
        )}
      </motion.div>
    </motion.div>
  );
}
