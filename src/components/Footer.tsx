"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function Footer() {
  return (
    <footer className="px-8 pb-16 pt-32 lg:px-16">
      {/* Big CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease }}
        className="text-center"
      >
        <p className="font-sans text-[16px] tracking-[-0.16px] text-white/40">
          Want to work together?
        </p>
        <a
          href="mailto:yuchen666333@gmail.com"
          className="mt-4 inline-block font-serif text-[48px] leading-[1.2] tracking-[-1px] text-white transition-colors duration-300 hover:text-accent md:text-[72px]"
        >
          Say hello.
        </a>
      </motion.div>

      {/* Bottom bar */}
      <div className="mt-24 flex flex-col items-center gap-8 border-t border-white/10 pt-8 sm:flex-row sm:justify-between">
        {/* Left - nav */}
        <nav className="flex items-center gap-6">
          {["Works", "Playground", "Story"].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="font-sans text-[14px] tracking-[-0.14px] text-white/30 transition-colors duration-200 hover:text-white/70"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Center - social icons */}
        <div className="flex items-center gap-5">
          <a
            href="mailto:yuchen666333@gmail.com"
            className="text-white/30 transition-colors duration-200 hover:text-accent"
            aria-label="Email"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 4L12 13 2 4" />
            </svg>
          </a>
          <a
            href="https://instagram.com/yuchen_0.0_/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 transition-colors duration-200 hover:text-accent"
            aria-label="Instagram"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
            </svg>
          </a>
        </div>

        {/* Right - copyright */}
        <p className="font-satoshi text-[13px] text-white/20">
          &copy; 2026 Yuchen Zhang
        </p>
      </div>
    </footer>
  );
}
