"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

interface Project {
  title: string;
  description: string;
  image?: string;
  gradient?: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "Magic Diary \u00b7 AI Journaling Companion (Gamification)",
    description:
      "Designed a narrative, object-based navigation system and Lottie-powered interaction loop that turns journaling into a playful \u201cpotion-making\u201d experience.",
    image: "/images/magic-diary.png",
    link: "#",
  },
  {
    title: "AR Try-On Lens for Sustainable Fashion (200k Plays)",
    description:
      "Built a 3D-to-AR virtual try-on Lens for sustainable fashion on Snapchat, reaching 200k+ total plays/views.",
    image: "/images/ar-tryon.png",
    link: "#",
  },
  {
    title: "Interactive Data Visualization (30k+ entries)",
    description:
      "Built a web-based interactive data explorer for 30k+ material records to surface patterns and support faster comparison, filtering, and insight discovery.",
    gradient: "conic-gradient(#fff 0deg, #ffa640 180deg, #fc8f4c 360deg)",
    link: "#",
  },
  {
    title: "p5.js Experiments",
    description:
      "A curated set of interactive p5.js sketches exploring motion, data storytelling, and rapid prototyping.",
    gradient: "conic-gradient(#ffce8f 0deg, #e65c12 215.676deg, #ff1c1c 360deg)",
    link: "#",
  },
];

function PlaygroundCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.a
      href={project.link}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.12, ease }}
      className="group block overflow-hidden rounded-[36px] bg-white/10 backdrop-blur-sm"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div
            className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-105"
            style={{ background: project.gradient }}
          />
        )}
      </div>

      <div className="p-6 sm:p-8">
        <h3 className="font-serif text-[32px] font-normal leading-[1.3] text-white">
          {project.title}
        </h3>
        <p className="mt-2 font-sans text-[16px] leading-[1.6] tracking-[-0.16px] text-white/80">
          {project.description}
        </p>
        {/* Button – crossfade between default & hover states */}
        <div className="relative mt-6 h-12">
          {/* Default: label + white circle arrow */}
          <div className="absolute inset-0 flex items-center gap-3 transition-opacity duration-400 group-hover:opacity-0">
            <span className="font-sans text-[16px] font-medium text-white">
              Take a look
            </span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[18px] text-[#1a1a2e]">
              &rarr;
            </span>
          </div>
          {/* Hover: filled accent pill */}
          <div className="absolute inset-0 flex items-center opacity-0 transition-opacity duration-400 group-hover:opacity-100">
            <span className="inline-flex items-center gap-2.5 rounded-full bg-accent px-6 py-2.5">
              <span className="font-sans text-[16px] font-medium text-white">
                Take a look
              </span>
              <span className="text-[18px] text-white">&rarr;</span>
            </span>
          </div>
        </div>
      </div>
    </motion.a>
  );
}

export default function Playground() {
  return (
    <section
      id="playground"
      className="px-8 py-20 md:py-32 lg:px-16"
      style={{
        background: "linear-gradient(180deg, #e8662a 0%, #f5903c 40%, #f0783a 70%, #d45520 100%)",
      }}
    >
      <div className="mx-auto max-w-[1180px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
          className="mb-12 text-center md:mb-16"
        >
          <h2 className="font-serif text-[64px] font-normal leading-[1.2] tracking-[-1px] text-white">
            Playground
          </h2>
          <p className="mx-auto mt-3 max-w-[600px] font-sans text-[18px] leading-[1.6] tracking-[-0.18px] text-white/70">
            Vibe Coding Projects, XR, Games, Textiles, 3D Arts, Programming Arts etc.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {projects.map((project, i) => (
            <PlaygroundCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
