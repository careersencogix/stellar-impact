import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Code2, LineChart, Palette, PenTool, Rocket, Search, Share2, Target } from "lucide-react";
import { useState } from "react";
import heroOrb from "@/assets/hero-orb.jpg";
import workNova from "@/assets/work-nova.jpg";
import workVertex from "@/assets/work-vertex.jpg";
import workLumora from "@/assets/work-lumora.jpg";
import { Cta } from "@/components/site/Cta";
import { Marquee } from "@/components/site/Marquee";
import { Section, SectionLabel } from "@/components/site/Section";
import {
  AnimatedLines,
  Counter,
  Magnetic,
  Parallax,
  Reveal,
  WordReveal,
} from "@/components/site/motion-primitives";
import { CLIENTS, MARQUEE_WORDS, PROJECTS, SERVICES, STATS } from "@/lib/site-data";

const TITLE = "Microweb Solution | Digital Marketing & Growth Agency";
const DESC =
  "Microweb Solution helps ambitious brands grow through digital marketing, SEO, social media, performance marketing, branding and technology.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Microweb Solution",
          description: DESC,
          email: "hello@microwebsolution.com",
          address: { "@type": "PostalAddress", addressCountry: "IN" },
        }),
      },
    ],
  }),
  component: Home,
});

const ICONS = { Rocket, Search, Share2, Target, Code2, Palette, PenTool, LineChart };
const WORK_IMAGES = { nova: workNova, vertex: workVertex, lumora: workLumora };

function Home() {
  return (
    <>
      <Hero />
      <Trust />
      <Marquee items={MARQUEE_WORDS} />
      <AboutSnapshot />
      <ServicesPreview />
      <FeaturedWork />
      <FinalCta />
    </>
  );
}

function Hero() {
  return (
    <header className="relative overflow-hidden pt-32 pb-20 md:min-h-screen md:pt-44 md:pb-28">
      <div className="mx-auto grid w-full max-w-[1400px] items-center gap-14 px-5 md:px-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="relative z-10">
          <motion.p
            className="eyebrow flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.8 }}
          >
            <span className="h-1.5 w-1.5 rotate-45" style={{ background: "var(--gradient-neon)" }} />
            Creative Digital Marketing &amp; Growth Agency
          </motion.p>

          <AnimatedLines
            className="display-xl mt-7"
            delay={0.25}
            lines={["We make", "brands", "impossible", "to ignore."]}
            lineClassName="[&:nth-child(3)]:text-gradient"
          />

          <motion.p
            className="mt-9 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.8 }}
          >
            Microweb Solution is a creative digital marketing agency helping ambitious brands turn
            attention into measurable growth.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <Cta to="/contact">Start a Project</Cta>
            <Cta to="/work" variant="ghost">
              Explore Our Work
            </Cta>
          </motion.div>
        </div>

        <HeroVisual />
      </div>
    </header>
  );
}

function HeroVisual() {
  return (
    <motion.div
      className="relative mx-auto aspect-square w-full max-w-[560px]"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="spin-slow absolute inset-6 rounded-full border border-border/70" />
      <div
        className="spin-slow absolute inset-16 rounded-full border border-dashed border-border"
        style={{ animationDirection: "reverse", animationDuration: "38s" }}
      />
      <div className="float-slow absolute inset-0 flex items-center justify-center">
        <img
          src={heroOrb}
          alt="Abstract glowing sphere representing digital growth momentum"
          width={1280}
          height={1280}
          className="h-[86%] w-[86%] rounded-full object-cover mix-blend-screen"
        />
      </div>

      <FloatingCard className="top-2 -left-2 md:-left-8" delay={1.1}>
        <p className="eyebrow">ROAS</p>
        <p className="font-display mt-1 text-2xl font-bold">3.8X</p>
      </FloatingCard>
      <FloatingCard className="right-0 bottom-16 md:-right-6" delay={1.3}>
        <p className="eyebrow">Organic Traffic</p>
        <p className="font-display mt-1 text-2xl font-bold text-gradient">+187%</p>
      </FloatingCard>
      <FloatingCard className="bottom-0 left-4 md:left-0" delay={1.5}>
        <p className="eyebrow">Engagement</p>
        <p className="font-display mt-1 text-2xl font-bold">+320%</p>
      </FloatingCard>
    </motion.div>
  );
}

function FloatingCard({
  children,
  className,
  delay,
}: {
  children: React.ReactNode;
  className?: string;
  delay: number;
}) {
  return (
    <motion.div
      className={`glass-strong absolute rounded-2xl px-4 py-3 ${className ?? ""}`}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Trust() {
  return (
    <Section className="py-16 md:py-20">
      <Reveal variant="fade">
        <p className="eyebrow text-center">Trusted by ambitious brands</p>
      </Reveal>
      <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 lg:grid-cols-8">
        {CLIENTS.map((c, i) => (
          <Reveal key={c} variant="blur" delay={i * 0.05}>
            <p className="font-display text-center text-lg font-bold tracking-[0.2em] text-muted-foreground/60 uppercase transition-colors duration-500 hover:text-foreground">
              {c}
            </p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function AboutSnapshot() {
  return (
    <Section>
      <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <SectionLabel>About Microweb</SectionLabel>
          <h2 className="display-lg mt-7">
            <WordReveal text="“Attention is the" />
            <span className="text-gradient block">
              <WordReveal text="new currency.”" />
            </span>
          </h2>
        </div>
        <Reveal variant="up" className="self-end">
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            We combine strategy, creativity, technology and performance marketing into one growth
            system. Research sharpens the story, design makes it magnetic, and paid and organic
            channels carry it to the people who matter — measured end to end.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 font-display text-sm tracking-[0.16em] uppercase transition-colors hover:text-accent"
          >
            More about us <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>

      <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border lg:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal key={s.label} variant="up" delay={i * 0.08} className="bg-surface/60 p-7 md:p-10">
            <p className="font-display text-4xl font-bold md:text-6xl">
              <Counter value={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
            </p>
            <p className="mt-3 text-xs tracking-[0.14em] text-muted-foreground uppercase">
              {s.label}
            </p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function ServicesPreview() {
  return (
    <Section>
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <SectionLabel>What we do</SectionLabel>
          <h2 className="display-lg mt-6">
            Growth
            <br />
            <span className="text-gradient">disciplines.</span>
          </h2>
        </div>
        <Cta to="/services" variant="ghost">
          All Services
        </Cta>
      </div>

      <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.slice(0, 6).map((s, i) => {
          const Icon = ICONS[s.icon as keyof typeof ICONS];
          return (
            <Reveal key={s.title} variant="up" delay={i * 0.06}>
              <Link
                to="/services"
                className="border-gradient group glass relative flex h-full flex-col justify-between overflow-hidden rounded-3xl p-7 transition-transform duration-500 hover:-translate-y-2 md:p-8"
              >
                <div
                  className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full opacity-0 blur-[70px] transition-opacity duration-700 group-hover:opacity-40"
                  style={{ background: "var(--gradient-neon)" }}
                />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <Icon className="h-7 w-7 text-accent transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110" />
                    <span className="font-display text-xs tracking-[0.2em] text-muted-foreground">
                      {s.num}
                    </span>
                  </div>
                  <h3 className="font-display mt-8 text-2xl font-bold">{s.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{s.short}</p>
                  <p className="max-h-0 overflow-hidden text-sm text-muted-foreground/90 opacity-0 transition-all duration-500 group-hover:mt-3 group-hover:max-h-28 group-hover:opacity-100">
                    {s.long}
                  </p>
                </div>
                <span className="relative mt-8 inline-flex items-center gap-2 font-display text-xs tracking-[0.18em] uppercase">
                  Explore
                  <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-2" />
                </span>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

function FeaturedWork() {
  const [hovered, setHovered] = useState<string | null>(null);
  return (
    <Section>
      <SectionLabel>Featured work</SectionLabel>
      <h2 className="display-lg mt-6 max-w-3xl">
        Case studies with <span className="text-gradient">receipts.</span>
      </h2>

      <div className="mt-16 space-y-6">
        {PROJECTS.slice(0, 3).map((p, i) => (
          <Reveal key={p.id} variant="clip" delay={i * 0.05}>
            <Link
              to="/work"
              data-cursor="view"
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
              className="group grid items-center gap-8 rounded-3xl border border-border bg-surface/40 p-5 transition-colors duration-500 hover:border-foreground/25 md:grid-cols-[0.9fr_1.1fr] md:p-7"
            >
              <div className="relative aspect-[16/11] overflow-hidden rounded-2xl">
                <Parallax distance={26}>
                  <img
                    src={WORK_IMAGES[p.image]}
                    alt={`${p.name} case study visual`}
                    loading="lazy"
                    width={1280}
                    height={960}
                    className="h-full w-full scale-105 object-cover transition-transform duration-[900ms] group-hover:scale-115"
                  />
                </Parallax>
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-55"
                  style={{ background: "var(--gradient-neon)", mixBlendMode: "soft-light" }}
                />
              </div>
              <div>
                <p className="eyebrow">
                  {p.id} — {p.category}
                </p>
                <h3 className="font-display mt-4 text-[clamp(2.2rem,6vw,4.5rem)] leading-[0.9] font-bold uppercase">
                  {p.name}
                </h3>
                <p className="mt-5 max-w-md text-sm text-muted-foreground">{p.description}</p>
                <div className="mt-7 flex items-center gap-5">
                  <span className="font-display text-lg font-bold text-gradient">{p.result}</span>
                  <span
                    className={`inline-flex items-center gap-2 font-display text-xs tracking-[0.18em] uppercase transition-opacity duration-500 ${
                      hovered === p.id ? "opacity-100" : "opacity-60"
                    }`}
                  >
                    View case study <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function FinalCta() {
  return (
    <Section className="pb-32 text-center">
      <Reveal variant="scale">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-surface/50 px-6 py-24 md:px-16 md:py-36">
          <div
            className="pointer-events-none absolute -top-1/2 left-1/2 h-[70vmin] w-[70vmin] -translate-x-1/2 rounded-full opacity-25 blur-[120px]"
            style={{ background: "var(--gradient-neon)" }}
          />
          <h2 className="display-xl relative">
            Ready to make
            <br />
            <span className="text-gradient">some noise?</span>
          </h2>
          <div className="relative mt-12 flex justify-center">
            <Magnetic strength={0.3}>
              <Cta to="/contact">Start Your Project</Cta>
            </Magnetic>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
