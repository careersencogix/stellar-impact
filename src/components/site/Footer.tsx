import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { BRAND, NAV_LINKS } from "@/lib/site-data";

const SERVICE_LINKS = [
  "Digital Marketing",
  "SEO",
  "Social Media",
  "Performance Marketing",
  "Web Development",
  "Branding",
];

const SOCIALS = ["Instagram", "LinkedIn", "Facebook", "X"];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-surface/40">
      <div className="mx-auto w-full max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl leading-none font-bold tracking-[0.12em] uppercase md:text-4xl">
              Microweb
            </p>
            <p className="font-display text-xs tracking-[0.45em] text-muted-foreground uppercase">
              Solution
            </p>
            <p className="mt-6 max-w-sm text-sm text-muted-foreground">
              A creative digital marketing and growth agency engineering attention into measurable
              revenue.
            </p>
            <a
              href={`mailto:${BRAND.email}`}
              className="mt-6 inline-flex items-center gap-2 text-sm text-foreground transition-colors hover:text-accent"
            >
              {BRAND.email}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <FooterCol title="Navigation">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </FooterCol>

          <FooterCol title="Services">
            {SERVICE_LINKS.map((s) => (
              <li key={s}>
                <Link to="/services" className="transition-colors hover:text-foreground">
                  {s}
                </Link>
              </li>
            ))}
          </FooterCol>

          <FooterCol title="Social">
            {SOCIALS.map((s) => (
              <li key={s}>
                <a
                  href="/"
                  onClick={(e) => e.preventDefault()}
                  className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
                >
                  {s}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </li>
            ))}
          </FooterCol>
        </div>

        <p
          className="mt-20 hidden text-[13vw] leading-[0.8] font-bold tracking-tighter uppercase opacity-[0.07] md:block font-display"
          aria-hidden
        >
          Unignorable
        </p>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© 2026 Microweb Solution. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="/" onClick={(e) => e.preventDefault()} className="hover:text-foreground">
              Privacy Policy
            </a>
            <a href="/" onClick={(e) => e.preventDefault()} className="hover:text-foreground">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="eyebrow">{title}</p>
      <ul className="mt-5 space-y-3 text-sm text-muted-foreground">{children}</ul>
    </div>
  );
}
