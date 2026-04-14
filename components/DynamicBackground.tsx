"use client";

import { useEffect, useState } from "react";

export default function DynamicBackground() {
  // 1. Change initial state so there's no flash of unblurred image on load
  const [blur, setBlur] = useState(6);
  const [overlayOpacity, setOverlayOpacity] = useState(0.5);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      const progress = Math.min(scrollY / (windowHeight * 0.8), 1);

      // --- TWEAK THESE VALUES ---
      const BASE_BLUR = 2; // The blur when at the very top (Hero section)
      const MAX_BLUR = 30; // The blur when scrolled down

      const BASE_OVERLAY = 0.35; // 50% dark when at the top (makes text readable)
      const MAX_OVERLAY = 0.65; // 85% dark when scrolled down
      // --------------------------

      setBlur(BASE_BLUR + progress * (MAX_BLUR - BASE_BLUR));
      setOverlayOpacity(BASE_OVERLAY + progress * (MAX_OVERLAY - BASE_OVERLAY));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Trigger once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 z-[-50] pointer-events-none bg-black overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all ease-out duration-100 will-change-[filter,transform]"
        style={{
          backgroundImage: "url('/bg.webp')", // Replace with your image
          filter: `blur(${blur}px)`,
          // We slightly increase the scale to prevent blurred edges from showing the background
          transform: `scale(${1 + blur * 0.005})`,
        }}
      />

      {/* Dark Overlay */}
      <div
        className="absolute inset-0 bg-black transition-opacity ease-out duration-100"
        style={{ opacity: overlayOpacity }}
      />
    </div>
  );
}
