import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { CtaButton, Cta } from "@/components/site/Cta";
import { PageHero, Section, SectionLabel } from "@/components/site/Section";
import { AnimatedLines, Reveal } from "@/components/site/motion-primitives";
import { BRAND, BUDGETS, FAQS, SERVICES } from "@/lib/site-data";

const TITLE = "Contact Microweb Solution | Start a Digital Growth Project";
const DESC =
  "Tell us about your brand, project or growth challenge. Microweb Solution replies within one business day with a scoped plan.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero
        label="Contact"
        lines={
          <AnimatedLines
            className="display-xl"
            lines={["Let's build", "something", "unignorable."]}
            accentLine={2}
          />
        }
        copy="Have a project, idea or growth challenge? Let's talk."
      />

      <Section className="pt-4">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr]">
          <InquiryForm />
          <ContactInfo />
        </div>
      </Section>

      <Faq />

      <Section className="pb-32 text-center">
        <Reveal variant="scale">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-surface/50 px-6 py-20 md:py-32">
            <div
              className="pointer-events-none absolute -top-1/2 left-1/2 h-[60vmin] w-[60vmin] -translate-x-1/2 rounded-full opacity-20 blur-[110px]"
              style={{ background: "var(--gradient-neon)" }}
            />
            <h2 className="display-xl relative">
              Your next big
              <br />
              <span className="text-gradient">move starts here.</span>
            </h2>
            <div className="relative mt-12 flex justify-center">
              <Cta to="/contact">Let's Talk</Cta>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}

const fieldClass =
  "w-full rounded-xl border border-input bg-foreground/[0.03] px-4 py-3.5 text-sm text-foreground outline-none transition-colors duration-300 placeholder:text-muted-foreground/70 focus:border-transparent focus:ring-2 focus:ring-ring";

function InquiryForm() {
  const [sent, setSent] = useState(false);

  return (
    <Reveal variant="up">
      <div className="glass relative overflow-hidden rounded-[2rem] p-6 md:p-10">
        <AnimatePresence mode="wait">
          {sent ? (
            <motion.div
              key="done"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex min-h-[420px] flex-col items-center justify-center text-center"
            >
              <span
                className="flex h-16 w-16 items-center justify-center rounded-full"
                style={{ background: "var(--gradient-neon)" }}
              >
                <Check className="h-8 w-8 text-primary-foreground" />
              </span>
              <h2 className="font-display mt-8 text-3xl font-bold uppercase">Inquiry received</h2>
              <p className="mt-4 max-w-sm text-sm text-muted-foreground">
                Thanks for reaching out. This is a demo form — connect it to your inbox or CRM to go
                live. We'd normally reply within one business day.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-8 font-display text-xs tracking-[0.18em] uppercase text-accent"
              >
                Send another inquiry
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="space-y-5"
            >
              <SectionLabel>Project inquiry</SectionLabel>
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Name" htmlFor="name">
                  <input id="name" name="name" required placeholder="Your full name" className={fieldClass} />
                </Field>
                <Field label="Email" htmlFor="email">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    className={fieldClass}
                  />
                </Field>
                <Field label="Phone" htmlFor="phone">
                  <input id="phone" name="phone" placeholder="+91 00000 00000" className={fieldClass} />
                </Field>
                <Field label="Company" htmlFor="company">
                  <input id="company" name="company" placeholder="Brand or company" className={fieldClass} />
                </Field>
                <Field label="Service Required" htmlFor="service">
                  <div className="relative">
                    <select id="service" name="service" defaultValue="" className={`${fieldClass} appearance-none pr-10`}>
                      <option value="" disabled>
                        Select a service
                      </option>
                      {SERVICES.map((s) => (
                        <option key={s.title} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  </div>
                </Field>
                <Field label="Budget" htmlFor="budget">
                  <div className="relative">
                    <select id="budget" name="budget" defaultValue="" className={`${fieldClass} appearance-none pr-10`}>
                      <option value="" disabled>
                        Select a range
                      </option>
                      {BUDGETS.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  </div>
                </Field>
              </div>
              <Field label="Project Details" htmlFor="details">
                <textarea
                  id="details"
                  name="details"
                  rows={5}
                  required
                  placeholder="Goals, timelines, channels, anything we should know."
                  className={`${fieldClass} resize-none`}
                />
              </Field>
              <div className="pt-2">
                <CtaButton>Send Inquiry</CtaButton>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="eyebrow mb-2.5 block">
        {label}
      </label>
      {children}
    </div>
  );
}

function ContactInfo() {
  return (
    <Reveal variant="up" delay={0.1}>
      <div className="glass flex h-full flex-col justify-between gap-10 overflow-hidden rounded-[2rem] p-8 md:p-10">
        <div>
          <p className="font-display text-2xl leading-none font-bold tracking-[0.12em] uppercase">
            Microweb
          </p>
          <p className="font-display text-[0.6rem] tracking-[0.42em] text-muted-foreground uppercase">
            Solution
          </p>
          <p className="mt-5 text-sm text-muted-foreground">Digital Marketing &amp; Growth Agency</p>
        </div>

        <ul className="space-y-6 text-sm">
          <li className="flex items-start gap-4">
            <Mail className="mt-0.5 h-5 w-5 text-accent" />
            <a href={`mailto:${BRAND.email}`} className="transition-colors hover:text-accent">
              {BRAND.email}
            </a>
          </li>
          <li className="flex items-start gap-4">
            <Phone className="mt-0.5 h-5 w-5 text-accent" />
            <a href={`tel:${BRAND.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-accent">
              {BRAND.phone}
            </a>
          </li>
          <li className="flex items-start gap-4">
            <MapPin className="mt-0.5 h-5 w-5 text-accent" />
            <span className="text-muted-foreground">{BRAND.location}</span>
          </li>
        </ul>

        <div className="rounded-2xl border border-border p-5">
          <p className="eyebrow">Response time</p>
          <p className="font-display mt-2 text-3xl font-bold text-gradient">&lt; 24h</p>
          <p className="mt-2 text-xs text-muted-foreground">
            Every inquiry gets a human reply within one business day.
          </p>
        </div>
      </div>
    </Reveal>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section>
      <SectionLabel>FAQ</SectionLabel>
      <h2 className="display-lg mt-6 max-w-3xl">
        Questions, <span className="text-gradient">answered.</span>
      </h2>
      <div className="mt-14 border-t border-border">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q} className="border-b border-border">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className="font-display text-lg font-semibold md:text-2xl">{f.q}</span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border"
                >
                  <span className="relative block h-3.5 w-3.5">
                    <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-foreground" />
                    <span className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-foreground" />
                  </span>
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="max-w-2xl pb-7 text-sm leading-relaxed text-muted-foreground md:text-base">
                      {f.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
