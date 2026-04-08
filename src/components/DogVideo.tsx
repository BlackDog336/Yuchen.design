"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

function GooglyEye({ pupilX, pupilY, cx, cy, r }: { pupilX: ReturnType<typeof useSpring>; pupilY: ReturnType<typeof useSpring>; cx: number; cy: number; r: number }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r * 1.3} fill="white" opacity="0.15" />
      <circle cx={cx} cy={cy} r={r} fill="white" stroke="rgba(0,0,0,0.2)" strokeWidth="2" />
      <motion.circle cx={cx} cy={cy} r={r * 0.55} fill="#111" style={{ x: pupilX, y: pupilY }} />
      <motion.circle cx={cx} cy={cy} r={r * 0.45} fill="#3b2f1a" style={{ x: pupilX, y: pupilY }} />
      <motion.circle cx={cx} cy={cy} r={r * 0.25} fill="#000" style={{ x: pupilX, y: pupilY }} />
      <motion.circle cx={cx + r * 0.15} cy={cy - r * 0.15} r={r * 0.18} fill="white" style={{ x: pupilX, y: pupilY }} />
      <motion.circle cx={cx - r * 0.2} cy={cy + r * 0.15} r={r * 0.08} fill="white" opacity="0.6" style={{ x: pupilX, y: pupilY }} />
    </g>
  );
}

export default function DogVideo() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const pupilRawX = useMotionValue(0);
  const pupilRawY = useMotionValue(0);
  const pupilX = useSpring(pupilRawX, { stiffness: 150, damping: 15 });
  const pupilY = useSpring(pupilRawY, { stiffness: 150, damping: 15 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Dog is bottom-right, so offset origin to ~85% right, ~85% down
      const nx = (e.clientX / window.innerWidth - 0.85);
      const ny = (e.clientY / window.innerHeight - 0.85);
      mouseX.set(nx * 20);
      mouseY.set(ny * 15);
      // Clamp pupils to mostly point left/up since dog is in bottom-right
      const px = nx * 10;
      const py = ny * 8;
      // Clamp to stay within eye radius (max ~8px from center)
      const dist = Math.sqrt(px * px + py * py);
      const maxDist = 8;
      const scale = dist > maxDist ? maxDist / dist : 1;
      pupilRawX.set(px * scale);
      pupilRawY.set(py * scale);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, pupilRawX, pupilRawY]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.3, ease }}
      style={{ x: springX, y: springY }}
      className="pointer-events-none absolute right-[-250px] bottom-[-50px] z-[2] hidden w-[800px] -rotate-[25deg] overflow-hidden rounded-[60px] lg:block"
    >
      <video
        src="/images/Dog.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-full object-cover"
      />
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <GooglyEye pupilX={pupilX} pupilY={pupilY} cx={360} cy={280} r={22} />
        <GooglyEye pupilX={pupilX} pupilY={pupilY} cx={450} cy={280} r={22} />
      </svg>
    </motion.div>
  );
}
