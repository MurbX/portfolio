import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Shared setup for the generated link-preview images (opengraph-image.tsx files).

export const ogSize = { width: 1200, height: 630 };

const font = (file: string) => readFile(join(process.cwd(), "src/app/fonts", file));

export async function ogFonts() {
  const [medium, bold] = await Promise.all([font("Geist-Medium.ttf"), font("Geist-Bold.ttf")]);
  return [
    { name: "Geist", data: medium, weight: 500 as const, style: "normal" as const },
    { name: "Geist", data: bold, weight: 700 as const, style: "normal" as const },
  ];
}

// A file from public/ as a data URI, since the image renderer can't fetch site paths.
export async function publicImage(src: string) {
  const data = await readFile(join(process.cwd(), "public", src));
  const type = src.endsWith(".png") ? "png" : "jpeg";
  return `data:image/${type};base64,${data.toString("base64")}`;
}

// Hex values for the Tailwind colours used in project tints ("from-x to-y").
const palette: Record<string, string> = {
  "amber-100": "#fef3c7",
  "amber-200": "#fde68a",
  "blue-100": "#dbeafe",
  "blue-200": "#bfdbfe",
  "cyan-100": "#cffafe",
  "cyan-200": "#a5f3fc",
  "emerald-200": "#a7f3d0",
  "fuchsia-200": "#f5d0fe",
  "indigo-100": "#e0e7ff",
  "indigo-200": "#c7d2fe",
  "lime-100": "#ecfccb",
  "orange-100": "#ffedd5",
  "orange-200": "#fed7aa",
  "pink-100": "#fce7f3",
  "red-200": "#fecaca",
  "rose-100": "#ffe4e6",
  "rose-200": "#fecdd3",
  "sky-100": "#e0f2fe",
  "sky-200": "#bae6fd",
  "slate-100": "#f1f5f9",
  "slate-300": "#cbd5e1",
  "teal-100": "#ccfbf1",
  "teal-200": "#99f6e4",
  "violet-100": "#ede9fe",
};

export function tintGradient(tint: string) {
  const from = palette[tint.match(/from-(\S+)/)?.[1] ?? ""] ?? "#f4f4f4";
  const to = palette[tint.match(/to-(\S+)/)?.[1] ?? ""] ?? "#e5e5e5";
  return `linear-gradient(135deg, ${from}, ${to})`;
}
