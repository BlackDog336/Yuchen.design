"use client";

import { useState, useCallback, useRef } from "react";
import { animate } from "framer-motion";

export default function YuchenMorph() {
  const [chinese, setChinese] = useState(false);
  const [displayText, setDisplayText] = useState("Yuchen");
  const containerRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const animating = useRef(false);

  const trigger = useCallback((toChinese: boolean) => {
    setChinese(toChinese);
    const el = textRef.current;
    if (!el || animating.current) return;
    animating.current = true;

    const nextText = toChinese ? "雨晨" : "Yuchen";

    // blur up smoothly, swap text at peak, then deblur
    animate(0, 5, {
      duration: 0.12,
      ease: [0.4, 0, 1, 1],
      onUpdate: (v) => {
        el.style.filter = `blur(${v}px)`;
      },
      onComplete: () => {
        setDisplayText(nextText);
        animate(5, 0, {
          duration: 0.18,
          ease: [0, 0, 0.2, 1],
          onUpdate: (v) => {
            el.style.filter = `blur(${v}px)`;
          },
          onComplete: () => {
            el.style.filter = "blur(0px)";
            animating.current = false;
          },
        });
      },
    });
  }, []);

  return (
    <span
      ref={containerRef}
      data-cursor="underline"
      className="relative inline-block cursor-pointer"
      onMouseEnter={() => trigger(true)}
      onMouseLeave={() => trigger(false)}
    >
      <span className="invisible">{chinese ? "雨晨" : "Yuchen"}</span>

      <span
        ref={textRef}
        className="absolute inset-0 bg-gradient-to-r from-accent via-[#ffb366] to-accent bg-clip-text text-transparent"
      >
        {displayText}
      </span>
    </span>
  );
}
