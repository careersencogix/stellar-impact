import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Magnetic } from "./motion-primitives";

const base =
  "group relative inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 font-display text-sm font-semibold tracking-wide uppercase transition-all duration-500";

const styles = {
  solid:
    "text-primary-foreground shadow-[var(--glow-violet)] hover:shadow-[0_0_80px_-8px_oklch(0.62_0.24_300/70%)]",
  ghost: "glass text-foreground hover:bg-foreground/10",
} as const;

export function Cta({
  to,
  children,
  variant = "solid",
  className,
  arrow = true,
}: {
  to: string;
  children: ReactNode;
  variant?: keyof typeof styles;
  className?: string;
  arrow?: boolean;
}) {
  return (
    <Magnetic strength={0.25}>
      <Link
        to={to}
        className={cn(base, styles[variant], className)}
        style={variant === "solid" ? { background: "var(--gradient-neon)" } : undefined}
      >
        <span>{children}</span>
        {arrow && (
          <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1.5" />
        )}
      </Link>
    </Magnetic>
  );
}

export function CtaButton({
  children,
  className,
  type = "submit",
  disabled,
}: {
  children: ReactNode;
  className?: string;
  type?: "submit" | "button";
  disabled?: boolean;
}) {
  return (
    <Magnetic strength={0.2}>
      <button
        type={type}
        disabled={disabled}
        className={cn(base, styles.solid, "disabled:opacity-60", className)}
        style={{ background: "var(--gradient-neon)" }}
      >
        <span>{children}</span>
        <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1.5" />
      </button>
    </Magnetic>
  );
}
