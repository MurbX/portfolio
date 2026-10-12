import { readFileSync } from "node:fs";
import { join } from "node:path";

// Pixel size of a PNG or JPEG in public/, read from its header at build time.
export function imageSize(src: string): { width: number; height: number } {
  const buf = readFileSync(join(process.cwd(), "public", src));

  // PNG: width and height are big-endian ints in the IHDR chunk.
  if (buf.readUInt32BE(0) === 0x89504e47) {
    return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
  }

  // JPEG: walk the segments to the first start-of-frame marker.
  let i = 2;
  while (i < buf.length) {
    const marker = buf[i + 1];
    const length = buf.readUInt16BE(i + 2);
    if (marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc) {
      return { width: buf.readUInt16BE(i + 7), height: buf.readUInt16BE(i + 5) };
    }
    i += 2 + length;
  }
  throw new Error(`Unsupported image format: ${src}`);
}
