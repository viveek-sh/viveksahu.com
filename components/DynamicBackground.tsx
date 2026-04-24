"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

// --- Overlay Effects ---
const BASE_BLUR = 1;
const MAX_BLUR = 30;
const BASE_OVERLAY = 0.35;
const MAX_OVERLAY = 0.65;

export default function DynamicBackground() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  // tracks the math for the scrolling behavior on the home page
  const [scrollBlur, setScrollBlur] = useState(BASE_BLUR);
  const [scrollOverlay, setScrollOverlay] = useState(BASE_OVERLAY);

  // If on the home page, use the scrolling state.
  // If anywhere else, instantly bypass state and use the MAX values.
  const activeBlur = isHome ? scrollBlur : MAX_BLUR;
  const activeOverlayOpacity = isHome ? scrollOverlay : MAX_OVERLAY;

  useEffect(() => {
    if (!isHome) return;

    // --- Landing Page Scroll Logic ---
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      const progress = Math.min(scrollY / (windowHeight * 0.8), 1);

      setScrollBlur(BASE_BLUR + progress * (MAX_BLUR - BASE_BLUR));
      setScrollOverlay(BASE_OVERLAY + progress * (MAX_OVERLAY - BASE_OVERLAY));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  return (
    <div className="fixed inset-0 z-[-50] pointer-events-none bg-black overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all ease-out duration-100 will-change-[filter,transform]"
        style={{
          backgroundImage: "url('/bg.webp')", // Replace with your image
          filter: `blur(${activeBlur}px)`,
          transform: `scale(${1 + activeBlur * 0.005})`,
        }}
      />

      {/* Dark Overlay */}
      <div
        className="absolute inset-0 bg-black transition-opacity ease-out duration-100"
        style={{ opacity: activeOverlayOpacity }}
      />
    </div>
  );
}git 
