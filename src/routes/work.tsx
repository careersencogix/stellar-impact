import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";
import workNova from "@/assets/work-nova.jpg";
import workVertex from "@/assets/work-vertex.jpg";
import { Cta } from "@/components/site/Cta";
import { Marquee } from "@/components/site/Marquee";
import { PageHero, Section, SectionLabel } from "@/components/site/Section";
import { AnimatedLines, Reveal } from "@/components/site/motion-primitives";
import { cn } from "@/lib/utils";

const TITLE = "Work | Ideas We Turned Into Impact — Microweb Solution";
const DESC = "From brand launches to digital growth campaigns, we create digital experiences that attract attention, build trust and drive action.";
const FILTERS = ["ALL", "BRANDING", "WEB", "SOCIAL MEDIA", "SEO", "PERFORMANCE"] as const;

const PROJECTS = [
  ["01", "E-Commerce Growth", "E-Commerce", "PERFORMANCE", ["Digital Marketing", "Social Media", "Performance Marketing", "Creative Campaigns"], "Built a complete digital growth strategy combining creative campaigns, paid advertising and social media content.", workNova],
  ["02", "Brand Identity", "Lifestyle & Consumer", "BRANDING", ["Brand Strategy", "Visual Identity", "Social Media Branding", "Creative Direction"], "Created a distinctive visual identity and digital brand language for a growing consumer brand.", workVertex],
  ["03", "Digital Presence", "Technology / SaaS", "WEB", ["Website Design", "UI/UX", "Web Development", "Conversion Strategy"], "Designed and developed a modern digital experience that communicates complex technology through a simple and intuitive interface.", workNova],
  ["04", "Social Media Campaign", "Fashion & Lifestyle", "SOCIAL MEDIA", ["Social Media Strategy", "Content Creation", "Campaign Design", "Creative Direction"], "Developed a complete social media creative direction combining campaign concepts, short-form content and a consistent visual language.", workVertex],
  ["05", "Search & Content", "Professional Services", "SEO", ["SEO", "Content Strategy", "Keyword Research", "On-Page Optimization"], "Created a search-focused content strategy designed to improve online visibility and connect the brand with high-intent audiences.", workNova],
  ["06", "Performance Campaign", "D2C Brand", "PERFORMANCE", ["Meta Ads", "Google Ads", "Landing Pages", "Conversion Optimization"], "Designed a performance-focused campaign ecosystem connecting advertising creatives, landing pages and conversion-focused messaging.", workVertex],
] as const;

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [{ title: TITLE }, { name: "description", content: DESC }, { property: "og:title", content: TITLE }, { property: "og:description", content: DESC }],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: Work,
});

function Work() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("ALL");
  const visibleProjects = useMemo(() => filter === "ALL" ? PROJECTS : PROJECTS.filter((project) => project[3] === filter), [filter]);

  return (
    <>
      <PageHero label="Selected work" lines={<AnimatedLines className="display-xl" lines={["Ideas we turned", "into impact."]} accentLine={1} />} copy={DESC} />
      <Marquee items={["Strategy", "Design", "Content", "Technology", "Performance", "Growth"]} />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <SectionLabel>Creative intro</SectionLabel>
            <h2 className="display-lg mt-6">From first idea<br /><span className="text-gradient">to final impact.</span></h2>
          </div>
          <Reveal variant="up" className="max-w-xl lg:justify-self-end"><p className="text-base leading-relaxed text-muted-foreground md:text-lg">We combine strategy, creativity and technology to build digital work that has a purpose.</p></Reveal>
        </div>
      </Section>
      <Section className="pt-0">
        <div className="flex flex-wrap gap-2.5 border-y border-border py-6">
          {FILTERS.map((item) => <button key={item} type="button" onClick={() => setFilter(item)} className={cn("rounded-full border px-5 py-2.5 font-display text-xs tracking-[0.16em] uppercase transition-colors duration-300", filter === item ? "border-transparent text-primary-foreground" : "border-border text-muted-foreground hover:text-foreground")} style={filter === item ? { background: "var(--gradient-neon)" } : undefined}>{item}</button>)}
        </div>
        <motion.div layout className="mt-12 grid gap-5 md:grid-cols-2">
          <AnimatePresence mode="popLayout">{visibleProjects.map((project, index) => <ProjectCard key={project[0]} project={project} index={index} />)}</AnimatePresence>
        </motion.div>
      </Section>
      <Section className="pb-32">
        <Reveal variant="scale">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-surface/50 px-6 py-20 text-center md:py-32">
            <div className="pointer-events-none absolute -top-1/2 left-1/2 h-[70vmin] w-[70vmin] -translate-x-1/2 rounded-full opacity-25 blur-[120px]" style={{ background: "var(--gradient-neon)" }} />
            <h2 className="display-xl relative">Have a project<br /><span className="text-gradient">worth showing off?</span></h2>
            <p className="relative mx-auto mt-7 max-w-md text-base text-muted-foreground">Let's create something your audience won't forget.</p>
            <div className="relative mt-10 flex justify-center"><Cta to="/contact">Start a Project <ArrowRight className="h-4 w-4" /></Cta></div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}

function ProjectCard({ project, index }: { project: (typeof PROJECTS)[number]; index: number }) {
  const sizeClass = index === 0 || index === 3 ? "md:col-span-2" : "";
  const imageClass = index === 0 || index === 3 ? "aspect-[16/8]" : "aspect-[16/11]";
  return (
    <motion.article layout data-cursor="explore" initial={{ opacity: 0, y: 36, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }} className={cn("group relative overflow-hidden rounded-[2rem] border border-border bg-surface/40 p-4 transition-all duration-700 hover:border-accent/60 hover:shadow-[0_0_45px_rgba(255,190,40,0.14)] md:p-5", sizeClass)}>
      <div className={cn("relative overflow-hidden rounded-[1.4rem]", imageClass)}>
        <img src={project[6]} alt={`${project[1]} project showcase`} loading="lazy" width={1280} height={960} className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-60 transition-opacity duration-700 group-hover:opacity-90" />
        <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 md:inset-x-7 md:bottom-7"><span className="font-display text-sm font-semibold tracking-[0.18em] text-white/80 uppercase">{project[0]}</span><span className="font-display text-[0.65rem] tracking-[0.18em] text-white/70 uppercase">{project[2]}</span></div>
      </div>
      <div className="px-2 pt-6 pb-2 md:px-3 md:pt-7">
        <div className="flex flex-wrap items-start justify-between gap-4"><div><p className="eyebrow">{project[2]}</p><h3 className="font-display mt-3 text-[clamp(1.7rem,3.5vw,3rem)] leading-[0.95] font-bold uppercase transition-transform duration-500 group-hover:translate-x-1">{project[1]}</h3></div><span className="font-display text-xs tracking-[0.16em] text-accent uppercase">{project[3]}</span></div>
        <div className="mt-5 flex flex-wrap gap-2">{project[4].map((service) => <span key={service} className="rounded-full border border-border px-3 py-1.5 text-[0.65rem] tracking-[0.08em] text-muted-foreground uppercase transition-colors duration-500 group-hover:border-accent/40 group-hover:text-foreground">{service}</span>)}</div>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">{project[5]}</p>
      </div>
    </motion.article>
  );
}