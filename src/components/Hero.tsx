"use client";

import { motion } from "framer-motion";
import Starfield from "./Starfield";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-8 pt-[240px] pb-[120px] lg:px-16">
      <Starfield />

      {/* Animated gradient orbs */}
      <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
        {/* Large warm orb - top right */}
        <div
          className="absolute -right-[20%] -top-[20%] h-[70vh] w-[70vh] animate-orb-drift-1 rounded-full opacity-[0.12] blur-[120px]"
          style={{ background: "radial-gradient(circle, #ff8c42 0%, #d44a1a 40%, transparent 70%)" }}
        />
        {/* Purple orb - bottom left */}
        <div
          className="absolute -bottom-[15%] -left-[15%] h-[60vh] w-[60vh] animate-orb-drift-2 rounded-full opacity-[0.10] blur-[100px]"
          style={{ background: "radial-gradient(circle, #6b3fa0 0%, #1a0533 40%, transparent 70%)" }}
        />
        {/* Teal accent - center */}
        <div
          className="absolute left-[30%] top-[40%] h-[50vh] w-[50vh] animate-orb-drift-3 rounded-full opacity-[0.08] blur-[100px]"
          style={{ background: "radial-gradient(circle, #1a6a7c 0%, #0a1628 40%, transparent 70%)" }}
        />
        {/* Gold accent - bottom right */}
        <div
          className="absolute -bottom-[10%] right-[10%] h-[40vh] w-[40vh] animate-orb-drift-4 rounded-full opacity-[0.10] blur-[80px]"
          style={{ background: "radial-gradient(circle, #ffb366 0%, #ff6b35 40%, transparent 70%)" }}
        />
      </div>

      <div className="relative z-[3] flex w-full max-w-[900px] flex-col items-center text-center lg:items-start lg:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="font-serif text-[38px] leading-[1.2] font-normal tracking-[-1px] text-accent"
        >
          Hi, I&apos;m Yuchen.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="mt-8 max-w-[900px] font-satoshi text-[26px] leading-[1.5] font-normal tracking-[-0.32px] text-white/80"
        >
          I&apos;m a Product Designer who builds clear systems and polished
          experiences, turning complexity into simple, shippable flows.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease }}
          className="mt-4 font-satoshi text-[20px] leading-[1.2] tracking-[-0.54px] text-white/50"
        >
          Product Designer @ CodePay &middot; NYC &middot; Open to opportunities
        </motion.p>
      </div>
    </section>
  );
}
