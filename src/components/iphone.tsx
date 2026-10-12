import type { ReactNode } from "react";

const tones = {
  dark: {
    band: "bg-[linear-gradient(145deg,#55555a,#1d1d1f_28%,#2c2c2f_55%,#121214_80%,#3d3d41)]",
    button: "bg-[linear-gradient(90deg,#3a3a3d,#1d1d1f)]",
  },
  light: {
    band: "bg-[linear-gradient(145deg,#f4f4f5,#cfcfd3_30%,#e4e4e7_58%,#c4c4c8_82%,#ebebed)]",
    button: "bg-[linear-gradient(90deg,#d4d4d8,#b9b9be)]",
  },
};

// iPhone Pro-style device frame drawn in CSS, so it stays crisp at any size.
// Everything inside is sized in cqw (percent of the phone's width), so set the
// width through `className` and the proportions follow. Screen content can use
// cqw too and will scale with the frame.
export function IPhone({
  className = "",
  tone = "dark",
  children,
}: {
  className?: string;
  tone?: keyof typeof tones;
  children?: ReactNode;
}) {
  const t = tones[tone];
  return (
    <div className={`@container ${className}`}>
      <div className="relative aspect-[71.5/149.6]">
        {/* Hardware buttons: action, volume up/down on the left, side button on the right. */}
        <span className={`absolute left-[-1.3cqw] top-[17%] h-[4.5%] w-[2cqw] rounded-l-[1cqw] ${t.button}`} />
        <span className={`absolute left-[-1.3cqw] top-[24.5%] h-[7.5%] w-[2cqw] rounded-l-[1cqw] ${t.button}`} />
        <span className={`absolute left-[-1.3cqw] top-[34%] h-[7.5%] w-[2cqw] rounded-l-[1cqw] ${t.button}`} />
        <span className={`absolute right-[-1.3cqw] top-[27%] h-[11%] w-[2cqw] rounded-r-[1cqw] ${t.button}`} />

        {/* Titanium band, then black bezel, then the screen, with concentric corners. */}
        <div
          className={`absolute inset-0 rounded-[17cqw] p-[1.2cqw] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.14),0_18px_40px_rgba(0,0,0,0.18)] ${t.band}`}
        >
          <div className="h-full rounded-[15.8cqw] bg-black p-[2.4cqw]">
            <div className="relative h-full overflow-hidden rounded-[13.4cqw] bg-white">
              {children ? (
                <>
                  <StatusBar />
                  {children}
                </>
              ) : (
                <span className="absolute left-1/2 top-[2.7cqw] h-[8.6cqw] w-[29cqw] -translate-x-1/2 rounded-full bg-black" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Time on the left, Dynamic Island in the middle, signal/wifi/battery on the right.
function StatusBar() {
  return (
    <div className="grid h-[14cqw] grid-cols-[1fr_29cqw_1fr] items-center text-neutral-900">
      <span className="text-center text-[5.2cqw] font-semibold tracking-tight">9:41</span>
      <span className="h-[8.6cqw] rounded-full bg-black" />
      <span className="flex items-center justify-center gap-[1.2cqw]">
        <svg viewBox="0 0 18 12" className="h-[3cqw]" fill="currentColor" aria-hidden="true">
          <rect x="0" y="8" width="3" height="4" rx="1" />
          <rect x="5" y="5.5" width="3" height="6.5" rx="1" />
          <rect x="10" y="3" width="3" height="9" rx="1" />
          <rect x="15" y="0" width="3" height="12" rx="1" />
        </svg>
        <svg viewBox="0 0 16 12" className="h-[3cqw]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <path d="M1.5 4.5a9.2 9.2 0 0113 0M4.3 7.3a5.3 5.3 0 017.4 0" />
          <circle cx="8" cy="10.3" r="1.2" fill="currentColor" stroke="none" />
        </svg>
        <svg viewBox="0 0 27 12" className="h-[3cqw]" fill="currentColor" aria-hidden="true">
          <rect x="0.5" y="0.5" width="23" height="11" rx="3.5" fill="none" stroke="currentColor" strokeOpacity="0.4" />
          <rect x="2" y="2" width="20" height="8" rx="2" />
          <rect x="24.8" y="4" width="1.7" height="4" rx="0.85" fillOpacity="0.4" />
        </svg>
      </span>
    </div>
  );
}
