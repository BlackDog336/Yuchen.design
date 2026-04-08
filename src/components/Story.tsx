"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const tabs = ["My Vision", "My Work Style", "Outside Work"] as const;
type Tab = (typeof tabs)[number];

const values = [
  { accent: "Impact", sub: "Make work travel farther" },
  { accent: "Exploration", sub: "Learn by building" },
  { accent: "Growth", sub: "Compound skills, not titles" },
];

export default function Story() {
  const [activeTab, setActiveTab] = useState<Tab>("My Vision");
  const sectionRefs = useRef<Record<Tab, HTMLDivElement | null>>({
    "My Vision": null,
    "My Work Style": null,
    "Outside Work": null,
  });

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    tabs.forEach((tab) => {
      const el = sectionRefs.current[tab];
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveTab(tab);
        },
        { rootMargin: "-10% 0px -60% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section id="story" className="px-8 pt-[160px] pb-16 lg:px-16">
      <div className="mx-auto max-w-[1200px]">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
          className="font-serif text-[64px] font-normal leading-[1.2] tracking-[-1px] text-white"
        >
          Story
        </motion.h2>

        <div className="mt-12 flex flex-col gap-12 lg:mt-16 lg:flex-row lg:gap-16">
          {/* Left - sticky tab nav */}
          <nav className="flex flex-row gap-4 lg:sticky lg:top-8 lg:w-[220px] lg:shrink-0 lg:self-start lg:flex-col lg:gap-4">
            {tabs.map((tab) => (
              <span
                key={tab}
                className={`font-sans text-[30px] leading-[1.4] tracking-[-1.2px] transition-colors duration-500 ${
                  activeTab === tab ? "text-accent" : "text-white/30"
                }`}
              >
                {tab}
              </span>
            ))}
          </nav>

          {/* Middle - scrollable content */}
          <div className="flex max-w-[635px] flex-col gap-16 lg:flex-1">
            <div ref={(el) => { sectionRefs.current["My Vision"] = el; }}>
              <p className="mb-6 font-sans text-[18px] leading-[1.6] tracking-[-0.18px] text-white/80">
                I&apos;ve always liked making things, sometimes it starts as a
                visual idea, sometimes it starts as a small frustration I notice
                in daily life. Over time, I realized the work that keeps me most
                engaged is the kind that actually lands with real people.
              </p>
              <p className="mb-6 font-sans text-[18px] leading-[1.6] tracking-[-0.18px] text-white/80">
                What I&apos;m chasing isn&apos;t &ldquo;big words&rdquo; impact.
                It&apos;s more concrete, launching something, getting it into
                users&apos; hands, and watching it change how they move through a
                task or a day, whether that&apos;s making work simpler, decisions
                clearer, or the experience a little more delightful.
              </p>
              <p className="font-sans text-[18px] leading-[1.6] tracking-[-0.18px] text-white/80">
                That&apos;s why my path gradually shifted from exploring many
                mediums in school to focusing more on product, because I like the
                moment when design stops being a concept and becomes something
                people can truly use.
              </p>
            </div>

            <div ref={(el) => { sectionRefs.current["My Work Style"] = el; }}>
              <p className="mb-6 font-sans text-[18px] leading-[1.6] tracking-[-0.18px] text-white/80">
                I&apos;m comfortable talking to users early, getting past the
                polite &ldquo;sounds good&rdquo; feedback and into what&apos;s
                actually hard, the constraints, the tradeoffs, the moments where
                they hesitate or lose confidence. I like turning those
                conversations into a clear problem framing and a few sharp bets.
              </p>
              <p className="mb-6 font-sans text-[18px] leading-[1.6] tracking-[-0.18px] text-white/80">
                Then I prototype quickly, not because research is optional, but
                because prototypes make learning cheaper. Recently, vibe coding
                tools have made this even faster for me, the cost of trying
                something and seeing a real result is much lower, so I can
                iterate more and align with stakeholders earlier.
              </p>
              <p className="font-sans text-[18px] leading-[1.6] tracking-[-0.18px] text-white/80">
                I don&apos;t try to perfect UI at the start. I&apos;d rather
                answer the real questions first, is this the right problem, does
                the flow hold up, what breaks at the edges. Once the direction is
                right, that&apos;s when I slow down, tightening the system,
                polishing the interactions, and making the UI feel intentional
                and reliable.
              </p>
            </div>

            <div ref={(el) => { sectionRefs.current["Outside Work"] = el; }}>
              <p className="mb-6 font-sans text-[18px] leading-[1.6] tracking-[-0.18px] text-white/80">
                Right now I&apos;m leaning more into product work and product
                decision-making. It lets me stay creative while staying close to
                real customers, real constraints, metrics, edge cases, and the
                messy parts of go-to-market. That&apos;s the kind of impact
                I&apos;m after, not loud, just real.
              </p>
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[16px]">
                <Image
                  src="/images/surfing.jpg"
                  alt="Surfing"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
            </div>
          </div>

          {/* Right - Values + Hobbies */}
          <div className="flex flex-row flex-wrap gap-6 lg:w-[200px] lg:shrink-0 lg:flex-col lg:justify-between lg:gap-10 lg:pt-2">
            <div className="flex flex-col gap-10">
              {values.map((v, i) => (
                <div key={i}>
                  <span className="font-serif text-[36px] leading-[1.2] text-accent">
                    {v.accent}
                  </span>
                  <p className="mt-1 font-sans text-[16px] leading-[1.6] tracking-[-0.16px] text-white/80">
                    {v.sub}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-2">
              {["Snowboarding", "Surfing", "Traveling", "City Walking", "Space Aesthetics"].map((hobby) => (
                <span key={hobby} className="font-sans text-[16px] leading-[1.6] tracking-[-0.16px] text-white/40">
                  {hobby}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
