/** Ambient background: glowing blobs, grid and grain. Purely decorative. */
export function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="float-slow absolute -top-40 -left-32 h-[52vmax] w-[52vmax] rounded-full opacity-[0.22] blur-[130px]"
        style={{ background: "radial-gradient(circle, var(--violet), transparent 70%)" }}
      />
      <div
        className="float-slow absolute top-1/3 -right-40 h-[44vmax] w-[44vmax] rounded-full opacity-[0.16] blur-[130px]"
        style={{
          background: "radial-gradient(circle, var(--cyan), transparent 70%)",
          animationDelay: "-4s",
        }}
      />
      <div
        className="float-slow absolute bottom-0 left-1/3 h-[40vmax] w-[40vmax] rounded-full opacity-[0.14] blur-[140px]"
        style={{
          background: "radial-gradient(circle, var(--magenta), transparent 70%)",
          animationDelay: "-7s",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(1 0 0 / 6%) 1px, transparent 1px), linear-gradient(to bottom, oklch(1 0 0 / 6%) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse at 50% 0%, #000 0%, transparent 75%)",
        }}
      />
    </div>
  );
}
