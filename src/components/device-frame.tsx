import Image from "next/image";
import type { CSSProperties } from "react";

// Apple product bezels (developer.apple.com/design/resources) with the screen
// opening measured in the frame's own pixels. Positions below are percentages
// of the frame, so the screenshot lines up exactly at any size. `mask` is the
// opening's exact shape (cut from the frame), so square screenshot corners never
// poke out past the rounded screen.
const devices = {
  macbook: {
    frame: "/devices/macbook-pro-14-silver.png",
    mask: "/devices/macbook-pro-14-screen-mask.png",
    width: 3860,
    height: 2540,
    screen: { x: 418, y: 288, w: 3024, h: 1964 },
    // Strip behind the camera notch (like a full-screen app); the rest is 16:10.
    topBar: 74,
  },
  iphone: {
    frame: "/devices/iphone-18-pro-silver.png",
    mask: "/devices/iphone-18-pro-screen-mask.png",
    width: 1350,
    height: 2760,
    screen: { x: 72, y: 69, w: 1206, h: 2622 },
    topBar: 0,
  },
};

export type Device = keyof typeof devices;

// Phone screenshots are tall and narrow; anything wider goes on the MacBook.
export function deviceFor(width: number, height: number): Device {
  return width / height < 0.6 ? "iphone" : "macbook";
}

export const deviceAspect = (device: Device) => devices[device].width / devices[device].height;

const pct = (n: number, of: number) => `${(n / of) * 100}%`;

// A screenshot inside a device frame. With the image's pixel size, a page taller
// than the screen shows from the top and scrolls to the bottom on hover, so
// nothing is cut off; without it, the screen shows the top of the image.
export function DeviceFrame({
  device,
  src,
  alt,
  sizes,
  imageWidth,
  imageHeight,
  priority = false,
  className = "",
  style,
}: {
  device: Device;
  src: string;
  alt: string;
  sizes: string;
  imageWidth?: number;
  imageHeight?: number;
  priority?: boolean;
  className?: string;
  style?: CSSProperties;
}) {
  const d = devices[device];
  const s = d.screen;
  const viewportAspect = s.w / (s.h - d.topBar);
  const imageAspect = imageWidth && imageHeight ? imageWidth / imageHeight : undefined;
  // How far a tall page has to move up (as a share of its own height) to show its bottom.
  const overflow = imageAspect && imageAspect < viewportAspect ? 1 - imageAspect / viewportAspect : 0;
  // A screenshot a touch wider than the screen (within 6%) fills it rather than
  // leaving a thin strip below; a much wider one shows whole from the top.
  const fill = imageAspect !== undefined && imageAspect >= viewportAspect && imageAspect / viewportAspect <= 1.06;
  const scroll: CSSProperties | undefined = overflow
    ? ({
        "--scroll": `-${(overflow * 100).toFixed(2)}%`,
        transitionDuration: `${(2 + overflow * 6).toFixed(1)}s`,
      } as CSSProperties)
    : undefined;

  return (
    <div
      className={`group/device relative drop-shadow-[0_18px_30px_rgba(0,0,0,0.16)] ${className}`}
      style={{ aspectRatio: `${d.width} / ${d.height}`, ...style }}
    >
      <div
        className="absolute flex flex-col overflow-hidden bg-white"
        style={{
          left: pct(s.x, d.width),
          top: pct(s.y, d.height),
          width: pct(s.w, d.width),
          height: pct(s.h, d.height),
          maskImage: `url(${d.mask})`,
          maskSize: "100% 100%",
          WebkitMaskImage: `url(${d.mask})`,
          WebkitMaskSize: "100% 100%",
        }}
      >
        {d.topBar > 0 && <div className="shrink-0 bg-black" style={{ height: pct(d.topBar, s.h) }} />}
        <div className="relative min-h-0 flex-1 overflow-hidden">
          {imageAspect ? (
            <Image
              src={src}
              alt={alt}
              width={imageWidth}
              height={imageHeight}
              sizes={sizes}
              priority={priority}
              className={`w-full ease-in-out ${fill ? "h-full object-cover object-top" : "h-auto"} ${
                overflow ? "transition-transform group-hover/device:[transform:translateY(var(--scroll))]" : ""
              }`}
              style={scroll}
            />
          ) : (
            <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover object-top" />
          )}
        </div>
      </div>
      <Image src={d.frame} alt="" fill sizes={sizes} priority={priority} className="pointer-events-none select-none" />
    </div>
  );
}
