"use client";

import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/site-data";
import { Magnetic } from "./motion-primitives";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[100] transition-all duration-500",
          scrolled ? "glass-strong border-b border-border py-3" : "py-5",
        )}
      >
        <nav className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-5 md:px-10">
          <Link to="/" className="flex flex-col leading-none" onClick={() => setOpen(false)}>
            <span className="font-display text-lg font-bold tracking-[0.18em] uppercase md:text-xl">
              Microweb
            </span>
            <span className="font-display text-[0.55rem] tracking-[0.42em] text-muted-foreground uppercase">
              Solution
            </span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  activeProps={{ "data-active": "true" }}
                  className="group relative block px-4 py-2 font-display text-xs tracking-[0.16em] text-muted-foreground uppercase transition-colors hover:text-foreground data-[active=true]:text-foreground"
                >
                  {l.label}
                  <span
                    className="absolute bottom-1 left-4 h-px w-0 transition-all duration-500 group-hover:w-[calc(100%-2rem)] group-data-[active=true]:w-[calc(100%-2rem)]"
                    style={{ background: "var(--gradient-neon)" }}
                  />
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <Magnetic strength={0.2} className="hidden sm:inline-block">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-foreground/5 px-5 py-2.5 font-display text-xs font-semibold tracking-[0.16em] uppercase backdrop-blur-md transition-colors hover:border-transparent hover:bg-foreground/10"
              >
                Let's Talk
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Magnetic>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="glass flex h-11 w-11 items-center justify-center rounded-full lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[95] flex flex-col justify-center bg-background/95 px-6 backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <ul className="space-y-2">
              {NAV_LINKS.map((l, i) => (
                <motion.li
                  key={l.to}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 + i * 0.06, duration: 0.5 }}
                >
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="font-display block py-2 text-[13vw] leading-[0.95] font-bold uppercase sm:text-6xl"
                  >
                    {l.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="mt-12 space-y-1 text-sm text-muted-foreground">
              <p>hello@microwebsolution.com</p>
              <p>+91 98765 43210</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
