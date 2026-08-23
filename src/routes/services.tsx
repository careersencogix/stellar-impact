import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Code2,
  LineChart,
  Palette,
  PenTool,
  Rocket,
  Search,
  Share2,
  Target,
} from "lucide-react";
import { Cta } from "@/components/site/Cta";
import { PageHero, Section, SectionLabel } from "@/components/site/Section";
import { AnimatedLines, Reveal } from "@/components/site/motion-primitives";
import { SERVICES } from "@/lib/site-data";

const TITLE = "Services | Email Marketing, SEO & Performance — Microweb Solution";
const DESC =
  "Explore Microweb Solution services: email marketing, SEO, social media, performance marketing, web development, branding, content and analytics.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const ICONS = { Rocket, Search, Share2, Target, Code2, Palette, PenTool, LineChart };

function Services() {
  return (
    <>
      <PageHero
        label="Services"
        lines={
          <AnimatedLines
            className="display-xl"
            lines={["Digital services", "built for growth."]}
            accentLine={1}
          />
        }
        copy="Eight connected disciplines. Pick one, or let us assemble the full growth engine around your brand."
      >
        <div className="mt-10">
          <Cta to="/contact">Book a Discovery Call</Cta>
        </div>
      </PageHero>

      <Section className="pt-6 md:pt-10">
        <div className="border-t border-border">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon as keyof typeof ICONS];
            return (
              <Reveal key={s.num} variant="up" delay={0.03 * (i % 3)}>
                <article className="group relative grid gap-8 overflow-hidden border-b border-border py-12 md:grid-cols-[0.55fr_1fr_0.9fr] md:gap-12 md:py-16">
                  <div
                    className="pointer-events-none absolute inset-y-0 -left-32 w-96 opacity-0 blur-[100px] transition-opacity duration-700 group-hover:opacity-30"
                    style={{ background: "var(--gradient-neon)" }}
                  />
                  <div className="relative flex items-start gap-5">
                    <span className="font-display text-5xl font-bold text-muted-foreground/40 transition-colors duration-500 group-hover:text-gradient md:text-7xl">
                      {s.num}
                    </span>
                    <Icon className="mt-2 h-8 w-8 shrink-0 text-accent transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110" />
                  </div>

                  <div className="relative">
                    <h2 className="font-display text-[clamp(1.7rem,3.6vw,3rem)] leading-[0.95] font-bold uppercase">
                      {s.title}
                    </h2>
                    <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
                      {s.long}
                    </p>
                    <Cta to="/contact" variant="ghost" className="mt-8 !py-3 !text-xs">
                      Start with {s.title.split(" ")[0]}
                    </Cta>
                  </div>

                  <div className="relative">
                    <p className="eyebrow">Key features</p>
                    <ul className="mt-5 grid gap-2.5">
                      {s.features.map((f, fi) => (
                        <li
                          key={f}
                          className="flex items-center gap-3 text-sm text-muted-foreground transition-all duration-500 group-hover:translate-x-1 group-hover:text-foreground"
                          style={{ transitionDelay: `${fi * 50}ms` }}
                        >
                          <ArrowRight className="h-3.5 w-3.5 text-accent" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="glass mt-7 hidden overflow-hidden rounded-2xl p-4 lg:block">
                      <div className="flex items-end gap-2">
                        {[38, 55, 44, 72, 61, 88].map((h, bi) => (
                          <span
                            key={bi}
                            className="flex-1 rounded-t-sm transition-[height] duration-700 ease-out"
                            style={{
                              height: `${h * 0.55}px`,
                              background: "var(--gradient-neon)",
                              opacity: 0.35 + bi * 0.1,
                            }}
                          />
                        ))}
                      </div>
                      <p className="eyebrow mt-3">Growth trajectory</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section className="pb-32">
        <Reveal variant="scale">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-surface/50 px-6 py-20 text-center md:py-28">
            <div
              className="pointer-events-none absolute -top-1/2 left-1/2 h-[60vmin] w-[60vmin] -translate-x-1/2 rounded-full opacity-20 blur-[110px]"
              style={{ background: "var(--gradient-neon)" }}
            />
            <SectionLabel>
              <span className="sr-only">Next step</span>
            </SectionLabel>
            <h2 className="display-lg relative mt-4">
              Not sure where <span className="text-gradient">to start?</span>
            </h2>
            <p className="relative mx-auto mt-6 max-w-xl text-sm text-muted-foreground md:text-base">
              Send us your goals. We'll come back with a channel mix, a 90-day roadmap and the
              numbers we'd hold ourselves to.
            </p>
            <div className="relative mt-10 flex justify-center">
              <Cta to="/contact">Get a Growth Plan</Cta>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
