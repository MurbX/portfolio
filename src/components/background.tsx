// Decorative page background: fixed, behind everything, never intercepts clicks.
export function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden print:hidden">
      {/* Dot grid, strongest behind the hero, fading out further down. */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(17,17,17,0.09)_1px,transparent_1.3px)] bg-[size:26px_26px] [mask-image:radial-gradient(ellipse_70%_55%_at_50%_12%,black,transparent_75%)]" />

      {/* Concentric rings, top-right. */}
      <svg
        className="absolute -right-[18rem] -top-[20rem] size-[56rem] text-black/[0.05] md:-right-[10rem]"
        viewBox="0 0 900 900"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        {[110, 200, 290, 380, 450].map((r) => (
          <circle key={r} cx="450" cy="450" r={r} />
        ))}
      </svg>

      {/* Soft colour glows that drift slowly. */}
      <div className="bg-drift absolute -top-32 right-[-6rem] size-[34rem] rounded-full bg-[radial-gradient(circle,rgba(245,105,27,0.22),transparent_62%)] blur-3xl" />
      <div className="bg-drift absolute bottom-[-10rem] left-[-8rem] size-[38rem] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.16),transparent_62%)] blur-3xl [animation-delay:-9s]" />
    </div>
  );
}
