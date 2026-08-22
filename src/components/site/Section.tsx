import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("relative py-24 md:py-36", className)}>
      <div className="mx-auto w-full max-w-[1400px] px-5 md:px-10">{children}</div>
    </section>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="eyebrow flex items-center gap-3">
      <span className="h-1.5 w-1.5 rotate-45" style={{ background: "var(--gradient-neon)" }} />
      {children}
    </p>
  );
}

export function PageHero({
  label,
  lines,
  copy,
  children,
}: {
  label: string;
  lines: ReactNode;
  copy: string;
  children?: ReactNode;
}) {
  return (
    <header className="relative overflow-hidden pt-36 pb-16 md:pt-52 md:pb-24">
      <div className="mx-auto w-full max-w-[1400px] px-5 md:px-10">
        <SectionLabel>{label}</SectionLabel>
        <div className="mt-8">{lines}</div>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {copy}
        </p>
        {children}
      </div>
    </header>
  );
}
