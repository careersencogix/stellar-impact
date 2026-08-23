import { createFileRoute } from "@tanstack/react-router";
import {
  BarChart3,
  Cpu,
  Handshake,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";
import { Cta } from "@/components/site/Cta";
import { Marquee } from "@/components/site/Marquee";
import { PageHero, Section, SectionLabel } from "@/components/site/Section";
import { AnimatedLines, Reveal, WordReveal } from "@/components/site/motion-primitives";
import { MARQUEE_WORDS, PROCESS, TEAM, WHY } from "@/lib/site-data";

const TITLE = "About Microweb Solution | Digital Growth Agency";
const DESC =
  "Microweb Solution blends creativity, data, technology and performance marketing to build digital momentum for ambitious brands.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const ICONS = { Sparkles, BarChart3, Target, Cpu, Handshake, TrendingUp };

function About() {
  return (
    <>
      <PageHero
        label="About us"
        lines={
          <AnimatedLines
            className="display-xl"
            lines={["We shape", "bold ideas", "into impact."]}
            accentLine={1}
          />
        }
        copy="Strategy without creativity is invisible. Creativity without strategy is noise. We combine both."
      />

      <Marquee items={MARQUEE_WORDS} />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionLabel>Our story</SectionLabel>
            <h2 className="display-lg mt-6">
              A modern
              <br />
              growth
              <br />
              <span className="text-gradient">agency.</span>
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            <Reveal variant="up">
              <p>
                Microweb Solution started with a simple frustration: most marketing is either
                beautiful and unmeasured, or measured and forgettable. We built an agency that
                refuses that trade-off.
              </p>
            </Reveal>
            <Reveal variant="up" delay={0.1}>
              <p>
                Our teams pair creative direction with analytics engineering. Strategists frame the
                opportunity, designers and writers craft work worth remembering, and performance
                specialists put budget behind whatever proves itself.
              </p>
            </Reveal>
            <Reveal variant="up" delay={0.2}>
              <p>
                Technology runs underneath all of it — fast builds, clean tracking and dashboards
                you can read without a translator. Creativity, data, technology, strategy,
                performance: five disciplines, one growth system.
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section className="py-16 md:py-24">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal variant="scale">
            <div className="glass relative h-full overflow-hidden rounded-[2rem] p-9 md:p-14">
              <div
                className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full opacity-30 blur-[90px]"
                style={{ background: "radial-gradient(circle, var(--violet), transparent 70%)" }}
              />
              <p className="eyebrow relative">Mission</p>
              <h3 className="font-display relative mt-6 text-[clamp(1.8rem,3.4vw,3rem)] leading-[1.05] font-bold">
                <WordReveal text="“Make every message worth remembering.”" />
              </h3>
            </div>
          </Reveal>
          <Reveal variant="scale" delay={0.1}>
            <div className="glass relative h-full overflow-hidden rounded-[2rem] p-9 md:p-14">
              <div
                className="pointer-events-none absolute -top-20 -left-20 h-64 w-64 rounded-full opacity-25 blur-[90px]"
                style={{ background: "radial-gradient(circle, var(--cyan), transparent 70%)" }}
              />
              <p className="eyebrow relative">Vision</p>
              <p className="relative mt-6 text-[clamp(1.15rem,2vw,1.6rem)] leading-snug text-foreground/90">
                Build a growth system where every meaningful connection moves the business forward.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <SectionLabel>Our process</SectionLabel>
        <h2 className="display-lg mt-6">
          Six steps to <span className="text-gradient">scale.</span>
        </h2>
        <ol className="mt-16 border-t border-border">
          {PROCESS.map((step, i) => (
            <Reveal key={step.num} variant="up" delay={i * 0.05} as="li">
              <div className="group grid items-start gap-4 border-b border-border py-8 transition-colors duration-500 hover:bg-foreground/[0.03] md:grid-cols-[110px_1fr_1.1fr] md:gap-10 md:py-10">
                <span className="font-display text-3xl font-bold text-muted-foreground/50 transition-colors duration-500 group-hover:text-gradient md:text-5xl">
                  {step.num}
                </span>
                <h3 className="font-display text-2xl font-bold uppercase md:text-4xl">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  {step.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section>
        <SectionLabel>Why Microweb</SectionLabel>
        <h2 className="display-lg mt-6 max-w-3xl">
          Built different, <span className="text-gradient">on purpose.</span>
        </h2>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {WHY.map((w, i) => {
            const Icon = ICONS[w.icon as keyof typeof ICONS];
            return (
              <Reveal key={w.title} variant="up" delay={i * 0.06}>
                <div className="border-gradient group glass h-full rounded-3xl p-7 transition-transform duration-500 hover:-translate-y-2">
                  <Icon className="h-7 w-7 text-accent transition-transform duration-500 group-hover:scale-110" />
                  <h3 className="font-display mt-7 text-xl font-bold">{w.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{w.copy}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section>
        <SectionLabel>The team</SectionLabel>
        <h2 className="display-lg mt-6">
          Senior minds, <span className="text-gradient">no layers.</span>
        </h2>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((m, i) => (
            <Reveal key={m.name} variant="up" delay={i * 0.07}>
              <article
                data-cursor="view"
                className="group relative overflow-hidden rounded-3xl border border-border bg-surface/50"
              >
                <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden">
                  <div
                    className="absolute inset-0 transition-transform duration-[900ms] group-hover:scale-110"
                    style={{
                      background:
                        i % 2 === 0
                          ? "radial-gradient(120% 90% at 25% 15%, oklch(0.62 0.24 300 / 55%), transparent 65%), oklch(0.18 0.014 285)"
                          : "radial-gradient(120% 90% at 75% 20%, oklch(0.78 0.14 200 / 45%), transparent 65%), oklch(0.18 0.014 285)",
                    }}
                  />
                  <span className="font-display relative text-6xl font-bold tracking-tight opacity-80">
                    {m.initials}
                  </span>
                </div>
                <div className="relative p-6">
                  <h3 className="font-display text-lg font-bold">{m.name}</h3>
                  <p className="mt-1 text-xs tracking-[0.14em] text-muted-foreground uppercase">
                    {m.role}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="pb-32">
        <Reveal variant="scale">
          <div className="flex flex-col items-center gap-8 rounded-[2.5rem] border border-border bg-surface/50 px-6 py-20 text-center md:py-28">
            <h2 className="display-lg">
              Let's turn your <span className="text-gradient">vision into impact.</span>
            </h2>
            <Cta to="/contact">Let's Talk</Cta>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
