"use client";

import { motion } from "framer-motion";
import TransitionLink from "./TransitionLink";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function CaseStudyFooter() {
  return (
    <section className="relative border-t border-gray-200 px-8 lg:px-16">
      {/* Subtle accent glow line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="mx-auto max-w-[1200px] py-20 text-center lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
          className="flex flex-col items-center gap-6"
        >
          <p className="font-mono text-sm uppercase tracking-[0.15em] text-gray-300">
            Thanks for reading
          </p>
          <TransitionLink
            href="/"
            spotlightColor="#000"
            className="group inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-8 py-3 font-mono text-[14px] tracking-[0.05em] text-gray-500 backdrop-blur-sm transition-all hover:border-accent/30 hover:bg-accent/5 hover:text-gray-900"
          >
            View More Projects
            <span className="transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </TransitionLink>
        </motion.div>
      </div>
    </section>
  );
}
