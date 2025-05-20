"use client";

export default function LayeredBackground() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
        background: "#fff6e0",
        overflow: "hidden",
      }}
      aria-hidden="true"
    >
      <svg
        width="100vw"
        height="100vh"
        viewBox="0 0 1920 1080"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute", width: "100vw", height: "100vh" }}
      >
        {/* Simple Computer */}
        <rect x="700" y="600" rx="32" width="520" height="320" fill="#fff" opacity="0.8" />
        <rect x="740" y="640" rx="12" width="440" height="200" fill="#e3f7fa" opacity="0.8" />
        <rect x="900" y="860" rx="8" width="160" height="24" fill="#b2ebf2" opacity="0.7" />
        {/* Papers */}
        <rect x="1300" y="800" rx="8" width="120" height="80" fill="#fff" opacity="0.7" transform="rotate(-8 1300 800)" />
        <rect x="350" y="900" rx="8" width="100" height="60" fill="#fff" opacity="0.7" transform="rotate(12 350 900)" />
        {/* Pencils & Pens */}
        <rect x="1200" y="950" rx="4" width="12" height="60" fill="#ffd180" opacity="0.8" transform="rotate(-18 1200 950)" />
        <rect x="1250" y="970" rx="4" width="10" height="50" fill="#90caf9" opacity="0.8" transform="rotate(10 1250 970)" />
        <rect x="400" y="980" rx="4" width="10" height="50" fill="#ffab91" opacity="0.8" transform="rotate(-8 400 980)" />
        {/* Flowers (simple circles and stems) */}
        <rect x="1550" y="800" width="8" height="60" rx="4" fill="#a5d6a7" opacity="0.7" />
        <circle cx="1554" cy="800" r="18" fill="#f8bbd0" opacity="0.8" />
        <rect x="1600" y="850" width="8" height="40" rx="4" fill="#a5d6a7" opacity="0.7" />
        <circle cx="1604" cy="850" r="14" fill="#fff59d" opacity="0.8" />
        <rect x="300" y="850" width="8" height="50" rx="4" fill="#a5d6a7" opacity="0.7" />
        <circle cx="304" cy="850" r="15" fill="#b39ddb" opacity="0.8" />
      </svg>
    </div>
  );
} 