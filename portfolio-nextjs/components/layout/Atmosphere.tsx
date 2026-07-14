export function Atmosphere() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* subtle ambient gradients for depth and texture */}
      <div className="absolute left-1/2 top-[-220px] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(127,182,133,0.12),transparent_65%)]" />
      <div className="absolute -left-24 -top-32 h-[480px] w-[480px] animate-drift rounded-full bg-primary opacity-[0.08] blur-[110px]" />
      <div className="absolute -right-36 top-1/4 h-[420px] w-[420px] animate-drift rounded-full bg-secondary opacity-[0.08] blur-[110px] [animation-delay:-8s]" />
      <div className="absolute -bottom-40 left-1/3 h-[380px] w-[380px] animate-drift rounded-full bg-accent opacity-[0.05] blur-[110px] [animation-delay:-14s]" />
      <div
        className="absolute inset-0 opacity-[0.25] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent_70%)]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
    </div>
  );
}
