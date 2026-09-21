import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Simple dark OG card: name + role, no images/fonts to keep it reliable.
export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        padding: 80,
        background: "#151515",
        color: "#EDEDED",
      }}
    >
      <div style={{ fontSize: 64, fontWeight: 700 }}>{profile.name}</div>
      <div style={{ marginTop: 16, fontSize: 32, color: "#A0A0A0" }}>
        {profile.role}
      </div>
    </div>,
    { ...size },
  );
}
