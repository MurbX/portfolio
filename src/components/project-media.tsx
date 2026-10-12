import Image from "next/image";
import type { Frame } from "@/content/projects";

// A project image on a tinted panel. `className` must set the aspect ratio and rounding.
export function ProjectMedia({
  src,
  alt,
  frame,
  tint,
  sizes,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  frame: Frame;
  tint: string;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-linear-to-br ${tint} ${className}`}>
      {frame === "browser" && (
        // Raw screenshot inside a browser window, cropped at the panel's bottom edge.
        <div className="absolute inset-x-[7%] top-[11%] flex h-[120%] flex-col overflow-hidden rounded-t-xl border border-black/10 bg-white shadow-[0_16px_40px_rgba(0,0,0,0.18)]">
          <div className="flex items-center gap-1.5 border-b border-black/[0.06] bg-neutral-50 px-3 py-2">
            <span className="size-2 rounded-full bg-neutral-300" />
            <span className="size-2 rounded-full bg-neutral-300" />
            <span className="size-2 rounded-full bg-neutral-300" />
          </div>
          <div className="relative flex-1">
            <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover object-top" />
          </div>
        </div>
      )}
      {frame === "mockup" && (
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-contain p-[4%]" />
      )}
      {frame === "none" && (
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      )}
    </div>
  );
}
