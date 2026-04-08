"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface Project {
  label: string;
  image: string;
  description: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [
  {
    label: "CodePay . Fintech Startup B2B Payment System 07/2025 - Now",
    image: "/images/codepay.png",
    description:
      "Founding designer across CodePay\u2019s B2B payments suite (in-person solution + operations) \u2014 building a cross-product design system, refactoring high-trust workflows, and prototyping AI-first experiences.",
    tags: [
      "Design Systems at Scale",
      "High-Trust UX (Risk & Clarity)",
      "Workflow Simplification",
      "Feedback-to-Release Loop",
      "AI-first Prototyping",
    ],
    link: "#",
  },
  {
    label: "BonCamel . E-Commerce Startup Chat-based AI Agent 03/2024 - 05/2024",
    image: "/images/boncamel.png",
    description:
      "Defined the end-to-end AI shopping flow (intent capture \u2192 recommendations \u2192 shortlist \u2192 checkout) and iterated through usability testing and A/B validation to improve purchase intent.",
    tags: [
      "0\u21921 Feature Design",
      "User Research + Usability Testing",
      "Conversion Optimization",
      "Hi-Fi Prototyping",
      "Interaction Design",
    ],
    link: "#",
  },
  {
    label: "DiDi . Mobility Platform Autonomous Trucking 05/2024 - 07/2024",
    image: "/images/didi.png",
    description:
      "Designed fleet ops + HMI interactions for autonomous trucking \u2014 mapping dispatch-to-execution workflows and defining risk-aware UI patterns for safety-critical scenarios. Built prototypes and simulations to validate faster, and shipped iterative improvements with engineering in a tight build\u2013test loop.",
    tags: [
      "Safety-Critical UX",
      "Dispatch Ops Workflows",
      "Simulation / Validation",
      "Edge-Case Design",
      "Prototype \u2192 Ship",
    ],
    link: "#",
  },
  {
    label: "Philly Truce . NGO of Community Safety Case Response Platform 11/2023 - 01/2024",
    image: "/images/phillytruce.png",
    description:
      "Built a high-trust case response platform for rapid incident intake and triage \u2014 turning SMS reports into trackable cases with status, ownership, and resolution workflows.",
    tags: [
      "Information Architecture",
      "Hierarchy & Progressive Disclosure",
      "0\u21921 Product Definition",
      "Scope & Prioritization",
      "Cross-functional Collaboration",
    ],
    link: "#",
  },
];

export default function Works() {
  return (
    <section id="works" className="px-8 lg:px-16">
      <div className="mx-auto max-w-[1200px] py-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
          className="mb-10 font-serif text-[64px] font-normal leading-[1.2] tracking-[-1px] text-white"
        >
          Works
        </motion.h2>

        <div className="grid grid-cols-1 gap-[10px] md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.a
              key={project.label}
              href={project.link}
              custom={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease }}
              className="group block overflow-hidden rounded-[12px] bg-surface p-8"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-[8px]">
                <div className="relative aspect-[4/3] w-full transition-transform duration-500 ease-out group-hover:scale-[1.03]">
                  <Image
                    src={project.image}
                    alt={project.label}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 560px"
                  />
                </div>
              </div>

              {/* Label */}
              <p className="mt-5 font-sans text-[21px] leading-[1.6] tracking-[-0.21px] text-white/80">
                {project.label}
              </p>

              {/* Description */}
              <p className="mt-2 font-sans text-[18px] leading-[1.6] tracking-[-0.18px] text-white/80">
                {project.description}
              </p>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full border border-white/15 bg-black/80 px-4 py-2 font-satoshi text-[18px] leading-[2] tracking-[-0.2px] text-white/80 transition-colors hover:border-white/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
