// The OG renderer only understands plain <img>, not next/image.
/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { ogFonts, ogSize, publicImage, tintGradient } from "@/lib/og";

// Link preview for a case study: name and tagline beside the project's hero image.
export const alt = `Case study by ${site.name}`;
export const size = ogSize;
export const contentType = "image/png";

// Render every preview at build time, so production never reads files at request time.
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug)!;
  const hero = project.gallery[0];
  const heroSrc = await publicImage(hero.src);
  const domain = new URL(site.url).host;
  // Raw screenshots sit on a white card; mockups already have their own device frame.
  const framed = hero.frame !== "mockup";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          padding: "0 0 0 80px",
          fontFamily: "Geist",
          color: "#111",
          background: tintGradient(project.tint),
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", width: 470, flexShrink: 0 }}>
          <div
            style={{
              alignSelf: "flex-start",
              padding: "10px 22px",
              borderRadius: 9999,
              background: "#fff",
              fontSize: 22,
              fontWeight: 500,
              boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
            }}
          >
            {project.category}
          </div>
          <div style={{ marginTop: 26, fontSize: 78, fontWeight: 700, letterSpacing: -2, lineHeight: 1 }}>
            {project.name}
          </div>
          <div style={{ marginTop: 22, fontSize: 30, fontWeight: 500, lineHeight: 1.35, color: "rgba(17,17,17,0.72)" }}>
            {project.tagline}
          </div>
          <div style={{ display: "flex", marginTop: 40, fontSize: 24, fontWeight: 700 }}>
            <span>{site.name}</span>
            <span style={{ color: "rgba(17,17,17,0.45)" }}>&nbsp;·&nbsp;{domain}</span>
          </div>
        </div>
        <div style={{ display: "flex", flex: 1, height: "100%", alignItems: "center", justifyContent: "center", padding: framed ? "0 0 0 50px" : "0 30px" }}>
          {framed ? (
            <img
              alt={project.name}
              src={heroSrc}
              width={660}
              height={470}
              style={{
                objectFit: "cover",
                objectPosition: "left top",
                borderRadius: "18px 0 0 18px",
                border: "1px solid rgba(0,0,0,0.08)",
                boxShadow: "0 24px 60px rgba(0,0,0,0.2)",
              }}
            />
          ) : (
            <img alt={project.name} src={heroSrc} width={620} height={350} style={{ objectFit: "contain" }} />
          )}
        </div>
      </div>
    ),
    { ...size, fonts: await ogFonts() },
  );
}
