"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

/** Short premium intro loader: brand lock-up + 00 → 100 counter. */
export function Loader() {
  const reduce = useReducedMotion();
  const [done, setDone] = useState(true);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("mw-intro") === "seen") return;
    setDone(false);
    sessionStorage.setItem("mw-intro", "seen");
    const start = performance.now();
    const duration = 1500;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setPct(Math.round(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 220);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  if (reduce) return null;

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[300] flex flex-col items-center justify-center bg-background"
          exit={{ opacity: 0, filter: "blur(12px)" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            className="pointer-events-none absolute h-[60vmin] w-[60vmin] rounded-full opacity-40 blur-[110px]"
            style={{ background: "var(--gradient-neon)" }}
          />
          <motion.p
            className="font-display relative text-[clamp(1.4rem,5vw,2.6rem)] font-bold tracking-[0.22em] uppercase"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Microweb <span className="text-gradient">Solution</span>
          </motion.p>
          <p className="eyebrow relative mt-4">We make brands impossible to ignore</p>
          <div className="relative mt-10 h-px w-[min(320px,60vw)] overflow-hidden bg-border">
            <motion.div
              className="h-full origin-left"
              style={{ background: "var(--gradient-neon)", scaleX: pct / 100 }}
            />
          </div>
          <p className="font-display relative mt-4 text-sm tabular-nums text-muted-foreground">
            {String(pct).padStart(3, "0")}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
