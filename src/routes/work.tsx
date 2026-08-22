import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useMemo, useState } from "react";
import workNova from "@/assets/work-nova.jpg";
import workVertex from "@/assets/work-vertex.jpg";
import workLumora from "@/assets/work-lumora.jpg";
import { Cta } from "@/components/site/Cta";
import { PageHero, Section, SectionLabel } from "@/components/site/Section";
import { AnimatedLines, Counter, Parallax, Reveal } from "@/components/site/motion-primitives";
import { PROJECTS, WORK_FILTERS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const TITLE = "Work & Case Studies | Microweb Solution";
const DESC =
  "Case studies from Microweb Solution: e-commerce growth, SaaS demand, brand transformation, performance marketing and website results.";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/work" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: Work,
});

const IMAGES = { nova: workNova, vertex: workVertex, lumora: workLumora };

const RESULTS = [
  { value: 187, prefix: "+", suffix: "%", label: "Organic Traffic" },
  { value: 3.8, suffix: "X", label: "Return on Ad Spend", decimals: 1 },
  { value: 68, prefix: "+", suffix: "%", label: "Conversion Rate" },
  { value: 320, prefix: "+", suffix: "%", label: "Engagement" },
];

function Work() {
  const [filter, setFilter] = useState("ALL");
  const visible = useMemo(
    () => (filter === "ALL" ? PROJECTS : PROJECTS.filter((p) => p.filter === filter)),
    [filter],
  );

  return (
    <>
      <PageHero
        label="Selected work"
        lines={
          <AnimatedLines
            className="display-xl"
            lines={["Work that", "speaks louder."]}
            lineClassName="[&:nth-child(2)]:text-gradient"
          />
        }
        copy="Six engagements, six growth problems, one common thread: creative that earns attention and data that proves it worked."
      />

      <Section className="pt-4">
        <div className="flex flex-wrap gap-2.5">
          {WORK_FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={cn(
                "relative rounded-full border px-5 py-2.5 font-display text-xs tracking-[0.16em] uppercase transition-colors duration-400",
                filter === f
                  ? "border-transparent text-primary-foreground"
                  : "border-border text-muted-foreground hover:text-foreground",
              )}
              style={filter === f ? { background: "var(--gradient-neon)" } : undefined}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-14 grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <motion.article
                key={p.id}
                layout
                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.96, filter: "blur(8px)" }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  "group relative overflow-hidden rounded-[2rem] border border-border bg-surface/40 p-4 transition-colors duration-500 hover:border-foreground/25 md:p-5",
                  i % 3 === 0 && "md:col-span-2",
                )}
              >
                <div
                  data-cursor="view"
                  className={cn(
                    "relative overflow-hidden rounded-[1.4rem]",
                    i % 3 === 0 ? "aspect-[16/8]" : "aspect-[16/11]",
                  )}
                >
                  <Parallax distance={24}>
                    <img
                      src={IMAGES[p.image]}
                      alt={`${p.name} — ${p.category} case study`}
                      loading="lazy"
                      width={1280}
                      height={960}
                      className="h-full w-full scale-105 object-cover transition-transform duration-[900ms] group-hover:scale-115"
                    />
                  </Parallax>
                  <div
                    className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-50"
                    style={{ background: "var(--gradient-neon)", mixBlendMode: "soft-light" }}
                  />
                  <span className="glass-strong absolute top-4 left-4 rounded-full px-3.5 py-1.5 font-display text-[0.65rem] tracking-[0.18em] uppercase">
                    {p.filter}
                  </span>
                </div>

                <div className="flex flex-wrap items-end justify-between gap-6 px-2 pt-7 pb-3">
                  <div>
                    <p className="eyebrow">
                      {p.id} — {p.category}
                    </p>
                    <h2 className="font-display mt-3 text-[clamp(1.9rem,4.4vw,3.6rem)] leading-[0.9] font-bold uppercase">
                      {p.name}
                    </h2>
                    <p className="mt-4 max-w-md text-sm text-muted-foreground">{p.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-display text-xl font-bold text-gradient md:text-2xl">
                      {p.result}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-2 font-display text-[0.65rem] tracking-[0.18em] uppercase text-muted-foreground transition-colors duration-500 group-hover:text-foreground">
                      View case study
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </Section>

      <Section className="bg-surface/40">
        <SectionLabel>Results</SectionLabel>
        <h2 className="display-lg mt-6 max-w-3xl">
          Results aren't <span className="text-gradient">optional.</span>
        </h2>
        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border lg:grid-cols-4">
          {RESULTS.map((r, i) => (
            <Reveal key={r.label} variant="up" delay={i * 0.08} className="bg-background/70 p-7 md:p-10">
              <p className="font-display text-4xl font-bold md:text-6xl">
                {r.prefix}
                <Counter value={r.value} suffix={r.suffix} decimals={r.decimals ?? 0} />
              </p>
              <p className="mt-3 text-xs tracking-[0.14em] text-muted-foreground uppercase">
                {r.label}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="pb-32 text-center">
        <Reveal variant="scale">
          <h2 className="display-lg">
            Want results <span className="text-gradient">like these?</span>
          </h2>
          <div className="mt-10 flex justify-center">
            <Cta to="/contact">Start Your Project</Cta>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
