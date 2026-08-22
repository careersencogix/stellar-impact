import { cn } from "@/lib/utils";

export function Marquee({
  items,
  className,
  accentEvery = 2,
}: {
  items: string[];
  className?: string;
  accentEvery?: number;
}) {
  const loop = [...items, ...items];
  return (
    <div className={cn("relative flex overflow-hidden border-y border-border py-6", className)}>
      <div className="marquee-track flex w-max shrink-0 items-center gap-10 pr-10">
        {loop.map((item, i) => (
          <span key={item + i} className="flex items-center gap-10">
            <span
              className={cn(
                "font-display text-[clamp(1.5rem,4vw,3.4rem)] font-bold tracking-tight uppercase",
                i % accentEvery === 0 ? "text-foreground" : "text-muted-foreground/45",
              )}
            >
              {item}
            </span>
            <span className="h-2 w-2 rotate-45" style={{ background: "var(--gradient-neon)" }} />
          </span>
        ))}
      </div>
    </div>
  );
}
