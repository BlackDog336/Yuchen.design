"use client";

import { useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Phase = "english" | "chinese" | "full";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

// Full phrase: 下雨后的凌晨
const fullChars = ["下", "雨", "后", "的", "凌", "晨"];
const newIndices = [0, 2, 3, 4]; // 下, 后, 的, 凌

export default function YuchenMorph() {
  const [phase, setPhase] = useState<Phase>("english");
  const locked = useRef(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  const spacerText = phase === "english" ? "Yuchen" : phase === "chinese" ? "雨晨" : "下雨后的凌晨";

  const handleMouseEnter = useCallback(() => {
    if (!locked.current && phase === "english") {
      setPhase("chinese");
    }
  }, [phase]);

  const handleMouseLeave = useCallback(() => {
    if (!locked.current && phase === "chinese") {
      setPhase("english");
    }
  }, [phase]);

  const handleClick = useCallback(() => {
    if (phase === "chinese") {
      locked.current = true;
      setPhase("full");
    } else if (phase === "full") {
      locked.current = false;
      setPhase("english");
    }
  }, [phase]);

  return (
    <span
      ref={containerRef}
      data-cursor="underline"
      className="relative inline-block cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {/* Invisible spacer — resizes container to match current phase text */}
      <span className="invisible">{spacerText}</span>

      <AnimatePresence mode="wait">
        {phase === "english" && (
          <motion.span
            key="english"
            initial={{ opacity: 0, filter: "blur(12px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(12px)" }}
            transition={{ duration: 0.35, ease }}
            className="absolute inset-0 bg-gradient-to-r from-accent via-[#ffb366] to-accent bg-clip-text text-transparent"
          >
            Yuchen
          </motion.span>
        )}

        {phase === "chinese" && (
          <motion.span
            key="chinese"
            initial={{ opacity: 0, filter: "blur(12px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(12px)" }}
            transition={{ duration: 0.35, ease }}
            className="absolute inset-0 bg-gradient-to-r from-accent via-[#ffb366] to-accent bg-clip-text text-transparent"
          >
            雨晨
          </motion.span>
        )}

        {phase === "full" && (
          <motion.span
            key="full"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, filter: "blur(12px)", transition: { duration: 0.35, ease } }}
            className="absolute inset-0 inline-flex bg-gradient-to-r from-accent via-[#ffb366] to-accent bg-clip-text text-transparent"
          >
            {fullChars.map((char, i) => {
              const isNew = newIndices.includes(i);
              const sequenceIndex = newIndices.indexOf(i);
              return (
                <motion.span
                  key={`full-${i}`}
                  initial={
                    isNew
                      ? { opacity: 0, y: 20, filter: "blur(10px)" }
                      : { opacity: 1, y: 0, filter: "blur(0px)" }
                  }
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={
                    isNew
                      ? { duration: 0.5, delay: 0.15 + sequenceIndex * 0.12, ease }
                      : { duration: 0.3, ease }
                  }
                >
                  {char}
                </motion.span>
              );
            })}
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}
