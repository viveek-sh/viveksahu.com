// app/opengraph-image.tsx
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    <div
      style={{
        background: "#09090b",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "48px 56px",
      }}>
      <span style={{ color: "#a1a1aa", fontSize: 20, fontFamily: "monospace" }}>
        vs<span style={{ color: "#34d399" }}>.dev</span>
      </span>

      <div>
        <p
          style={{
            color: "#34d399",
            fontSize: 14,
            letterSpacing: "0.08em",
            margin: "0 0 12px",
          }}>
          FULL-STACK ENGINEER & SYSTEMS ARCHITECT
        </p>
        <h1
          style={{
            color: "#ffffff",
            fontSize: 64,
            fontWeight: 600,
            margin: "0 0 16px",
            lineHeight: 1.1,
          }}>
          Vivek Sahu
        </h1>
        <p style={{ color: "#71717a", fontSize: 22, margin: 0 }}>
          Scalable backend systems · Cloud infrastructure · Distributed systems
        </p>
      </div>

      <span style={{ color: "#3f3f46", fontSize: 18, fontFamily: "monospace" }}>
        viveksahu.com
      </span>
    </div>,
    { ...size },
  );
}
