"use client";

import { useEffect, useRef } from "react";

export default function CursorSpotlight() {
  const spotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    let raf = 0;
    const handleMove = (e: MouseEvent) => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (spotRef.current) {
          spotRef.current.style.transform = `translate(${e.clientX - 300}px, ${e.clientY - 300}px)`;
        }
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={spotRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-0 h-[600px] w-[600px] rounded-full will-change-transform"
      style={{
        background:
          "radial-gradient(circle, rgba(167,139,250,0.14) 0%, rgba(34,211,238,0.06) 40%, transparent 70%)",
      }}
    />
  );
}
