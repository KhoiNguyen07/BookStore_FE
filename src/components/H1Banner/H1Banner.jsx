import React from "react";

/**
 * H1Banner
 * props:
 * - img: background image (required)
 * - title: banner title (required)
 * - height: px or string (default 750)
 * - fixed: boolean for background-attachment (default true)
 * - overlayOpacity: number 0-100
 */
const H1Banner = ({
  img,
  title,
  height = 750,
  fixed = true,
  overlayOpacity = 40,
}) => {
  const bgAttachment = fixed ? "fixed" : "scroll";
  const bgHeight = typeof height === "number" ? `${height}px` : height;

  return (
    <section
      className="w-full relative"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: bgAttachment,
        backgroundRepeat: "no-repeat",
        height: bgHeight,
      }}
    >
      {/* overlay */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(180deg, rgba(0,0,0,${
            overlayOpacity / 100
          }) 0%, rgba(0,0,0,${(overlayOpacity + 20) / 100}) 100%)`,
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
          color: "#fff",
          textAlign: "center",
          padding: "0 16px",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: "48px",
            fontWeight: 700,
            textShadow: "0 2px 6px rgba(0,0,0,0.6)",
          }}
        >
          {title}
        </h1>
      </div>
    </section>
  );
};

export default H1Banner;
