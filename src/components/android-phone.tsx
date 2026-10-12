import type { ReactNode } from "react";

// Pixel-style Android frame drawn in CSS, the counterpart to IPhone: flat
// aluminium band, power and volume buttons on the right, slim even bezels and a
// centred punch-hole camera. Sized in cqw (percent of the phone's width), so set
// the width through `className` and the proportions follow.
export function AndroidPhone({
  className = "",
  screenClassName = "bg-[#0f1115] text-white",
  children,
}: {
  className?: string;
  screenClassName?: string;
  children?: ReactNode;
}) {
  return (
    <div className={`@container ${className}`}>
      <div className="relative aspect-[72/152]">
        {/* Power, then the volume rocker, on the right edge. */}
        <span className="absolute right-[-1.3cqw] top-[21%] h-[7%] w-[2cqw] rounded-r-[1cqw] bg-[linear-gradient(90deg,#46464a,#2a2a2d)]" />
        <span className="absolute right-[-1.3cqw] top-[31%] h-[13%] w-[2cqw] rounded-r-[1cqw] bg-[linear-gradient(90deg,#46464a,#2a2a2d)]" />

        {/* Aluminium band, black bezel, screen; corners concentric. */}
        <div className="absolute inset-0 rounded-[13cqw] bg-[linear-gradient(145deg,#5a5a5f,#232326_30%,#36363a_60%,#1a1a1c)] p-[1.1cqw] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12),0_14px_30px_rgba(0,0,0,0.2)]">
          <div className="h-full rounded-[12cqw] bg-black p-[2.2cqw]">
            <div className={`relative h-full overflow-hidden rounded-[10cqw] ${screenClassName}`}>
              <span className="absolute left-1/2 top-[3.2cqw] z-10 size-[4.6cqw] -translate-x-1/2 rounded-full bg-black ring-[0.6cqw] ring-white/10" />
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
