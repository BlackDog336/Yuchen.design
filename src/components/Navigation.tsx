"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const navLinks = [
  { label: "Works", href: "#works" },
  { label: "Playground", href: "#playground" },
  { label: "Story", href: "#story" },
  { label: "Email", href: "mailto:yuchen666333@gmail.com" },
  {
    label: "Instagram",
    href: "https://instagram.com/yuchen_0.0_/",
    external: true,
  },
];

const sectionIds = ["works", "playground", "story"];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease, delay: 0.3 }}
      className="fixed bottom-5 left-1/2 z-50 w-[calc(100%-40px)] max-w-fit -translate-x-1/2 sm:bottom-6 sm:w-auto"
    >
      <div
        className="flex items-center justify-center gap-4 rounded-full px-5 py-3 sm:gap-5 sm:px-7"
        style={{
          background: "rgba(0, 0, 0, 0.65)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 4px 24px rgba(0, 0, 0, 0.5)",
        }}
      >
        {navLinks.map((link) => {
          const isActive =
            link.href.startsWith("#") &&
            activeSection === link.href.slice(1);

          return (
            <a
              key={link.label}
              href={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className={`whitespace-nowrap text-[12px] text-white transition-opacity duration-200 hover:opacity-100 min-h-[44px] flex items-center sm:text-[14px] ${
                isActive ? "opacity-100" : "opacity-60"
              }`}
              style={{ fontFamily: '"Instrument Sans", sans-serif' }}
            >
              {link.label}
            </a>
          );
        })}
      </div>
    </motion.nav>
  );
}
