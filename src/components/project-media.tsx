import Image from "next/image";
import { DeviceFrame, deviceAspect, deviceFor } from "@/components/device-frame";
import type { Frame } from "@/content/projects";

// A project image on a tinted panel. `className` must set the aspect ratio and rounding.
// Pass the image's pixel size to pick the right device (phone or laptop) and let long
// screenshots scroll on hover; without it a screen shows on a MacBook from the top.
export function ProjectMedia({
  src,
  alt,
  frame,
  tint,
  sizes,
  imageWidth,
  imageHeight,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  frame: Frame;
  tint: string;
  sizes: string;
  imageWidth?: number;
  imageHeight?: number;
  priority?: boolean;
  className?: string;
}) {
  const device = imageWidth && imageHeight ? deviceFor(imageWidth, imageHeight) : "macbook";

  return (
    <div className={`relative overflow-hidden bg-linear-to-br ${tint} ${className}`}>
      {frame === "screen" && (
        // The device is as large as the panel allows while keeping its own shape.
        <div className="absolute inset-[7%] flex items-center justify-center @container-size">
          <DeviceFrame
            device={device}
            src={src}
            alt={alt}
            sizes={sizes}
            imageWidth={imageWidth}
            imageHeight={imageHeight}
            priority={priority}
            className="shrink-0"
            style={{ width: `min(100cqw, ${deviceAspect(device) * 100}cqh)` }}
          />
        </div>
      )}
      {frame === "mockup" && (
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-contain p-[4%]" />
      )}
      {frame === "none" && (
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-contain p-[4%]" />
      )}
    </div>
  );
}
