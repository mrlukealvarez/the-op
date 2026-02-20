import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "THE OP — Black Hills Consortium";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0a1628 0%, #162440 50%, #0a1628 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              background: "#22c55e",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
              fontWeight: "bold",
              color: "#0a1628",
            }}
          >
            O
          </div>
          <div style={{ fontSize: "48px", fontWeight: "bold", color: "#e2e8f0" }}>
            THE OP
          </div>
        </div>
        <div style={{ fontSize: "20px", color: "#94a3b8", marginBottom: "32px" }}>
          Cannabis-Adjacent Cafe & Community Hub
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "16px",
            color: "#22c55e",
          }}
        >
          <span>Black Hills Consortium</span>
          <span style={{ color: "#475569" }}>•</span>
          <span style={{ color: "#64748b" }}>13-Entity Holding Company</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
