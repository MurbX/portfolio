// The OG renderer only understands plain <img>, not next/image.
/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";
import { site } from "@/content/site";
import { ogFonts, ogSize, publicImage } from "@/lib/og";

// Link preview for the home page (and any page without its own).
export const alt = `${site.name} — ${site.role} from ${site.highlight}`;
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  const avatar = await publicImage(site.avatar);
  const domain = new URL(site.url).host;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          padding: "0 90px",
          gap: 70,
          fontFamily: "Geist",
          color: "#111",
          background:
            "radial-gradient(circle at 92% 108%, rgba(245,105,27,0.45), rgba(245,105,27,0) 45%), #f4f4f4",
        }}
      >
        <img
          alt={site.name}
          src={avatar}
          width={300}
          height={300}
          style={{
            borderRadius: 9999,
            border: "10px solid #fff",
            boxShadow: "0 20px 50px rgba(0,0,0,0.18)",
            objectFit: "cover",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              alignSelf: "flex-start",
              padding: "10px 22px",
              borderRadius: 9999,
              background: "#fff",
              fontSize: 24,
              fontWeight: 500,
              boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
            }}
          >
            <div style={{ width: 14, height: 14, borderRadius: 9999, background: "#22c55e" }} />
            {site.availability}
          </div>
          <div style={{ marginTop: 28, fontSize: 76, fontWeight: 700, letterSpacing: -2, lineHeight: 1 }}>
            {site.name}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", marginTop: 18, fontSize: 40, fontWeight: 700, letterSpacing: -1 }}>
            <span>{site.role}&nbsp;</span>
            <span style={{ color: "#a3a3a3" }}>{site.connector}&nbsp;</span>
            <span style={{ color: "#f5691b" }}>{site.highlight}</span>
          </div>
          <div style={{ marginTop: 26, fontSize: 26, fontWeight: 500, lineHeight: 1.4, color: "#525252" }}>
            {site.description}
          </div>
          <div style={{ marginTop: 34, fontSize: 26, fontWeight: 700, color: "#111" }}>{domain}</div>
        </div>
      </div>
    ),
    { ...size, fonts: await ogFonts() },
  );
}
