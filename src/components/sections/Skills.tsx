"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiSass,
  SiTailwindcss,
  SiShadcnui,
  SiClerk,
  SiRedux,
  SiGithub,
  SiZod,
  SiMongodb,
  SiPrisma,
  SiPostgresql,
} from "react-icons/si";

import { FaReact, FaGitAlt } from "react-icons/fa";
import { useTheme } from "@/context/ThemeContext";

interface Skill {
  name: string;
  icon: React.ElementType;
  color: string;
  level: number;
  category: "Frontend" | "State & Data" | "Backend & DB" | "Auth & Tools";
}

/* =========================
   Better Auth Icon
========================= */

const BetterAuthIcon = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
  >
    <path
      d="M6 4h4.2c2.1 0 3.8 1.7 3.8 3.8S12.3 11.6 10.2 11.6H6V4Z"
      fill="currentColor"
    />

    <path
      d="M10.2 11.6H14c2.2 0 4 1.8 4 4s-1.8 4-4 4H6v-8h4.2Z"
      fill="currentColor"
    />

    <path
      d="M14.2 8.2h3.4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

/* =========================
   TanStack Icon
========================= */

const TanStackIcon = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    viewBox="0 0 64 84"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
  >
    <path
      d="M32 0C50.4 0 64 10.4 64 41.9C64 73.5 50.4 83.8 32 83.8S0 73.5 0 41.9C0 10.4 13.6 0 32 0Z"
      fill="currentColor"
    />

    <path
      d="M20 19h24v7H20v-7Zm0 12h18v7H20v-7Zm0 12h12v7H20v-7Z"
      fill="white"
    />
  </svg>
);

/* =========================
   Zustand Icon
   Bear-style Zustand mark
========================= */

const ZustandIcon = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
  >
    <path
      d="M22 35 C18 26 24 17 33 20 C39 11 61 11 67 20 C76 17 82 26 78 35 C88 45 86 66 77 77 C68 88 32 88 23 77 C14 66 12 45 22 35Z"
      fill="currentColor"
    />

    <circle cx="29" cy="29" r="7" fill="currentColor" />

    <circle cx="71" cy="29" r="7" fill="currentColor" />

    <circle cx="37" cy="48" r="4" fill="white" />

    <circle cx="63" cy="48" r="4" fill="white" />

    <ellipse cx="50" cy="61" rx="7" ry="5" fill="white" />

    <path
      d="M50 66v6M50 72c-5 5-10 2-12-1M50 72c5 5 10 2 12-1"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

/* =========================
   Neon Icon
========================= */

const NeonIcon = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
  >
    <path
      d="M5 4.5C5 3.67 5.67 3 6.5 3h2.18c.48 0 .93.23 1.2.63l7.64 11.15V4.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v15c0 .83-.67 1.5-1.5 1.5h-2.18c-.48 0-.93-.23-1.2-.63L8 9.22V19.5c0 .83-.67 1.5-1.5 1.5S5 20.33 5 19.5v-15Z"
      fill="currentColor"
    />
  </svg>
);

/* =========================
   Skills Data
========================= */

const SKILLS: Skill[] = [
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
    level: 100,
    category: "Frontend",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
    level: 100,
    category: "Frontend",
  },
  {
    name: "React",
    icon: FaReact,
    color: "#61DAFB",
    level: 100,
    category: "Frontend",
  },
  {
    name: "Next",
    icon: SiNextdotjs,
    color: "#ffffff",
    level: 100,
    category: "Frontend",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#38BDF8",
    level: 100,
    category: "Frontend",
  },
  {
    name: "Shadcn UI",
    icon: SiShadcnui,
    color: "#ffffff",
    level: 100,
    category: "Frontend",
  },
  {
    name: "Clerk",
    icon: SiClerk,
    color: "#6C47FF",
    level: 100,
    category: "Auth & Tools",
  },
  {
    name: "Better Auth",
    icon: BetterAuthIcon,
    color: "#ffffff",
    level: 100,
    category: "Auth & Tools",
  },
  {
    name: "TanStack Query",
    icon: TanStackIcon,
    color: "#FF4154",
    level: 100,
    category: "State & Data",
  },
  {
    name: "Zustand",
    icon: ZustandIcon,
    color: "#F0EFEA",
    level: 100,
    category: "State & Data",
  },
  {
    name: "Redux Toolkit",
    icon: SiRedux,
    color: "#764ABC",
    level: 100,
    category: "State & Data",
  },
  {
    name: "RTK Query",
    icon: SiRedux,
    color: "#764ABC",
    level: 100,
    category: "State & Data",
  },
  {
    name: "Zod",
    icon: SiZod,
    color: "#3068B7",
    level: 100,
    category: "State & Data",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
    level: 100,
    category: "Backend & DB",
  },
  {
    name: "MongoDB Atlas",
    icon: SiMongodb,
    color: "#47A248",
    level: 100,
    category: "Backend & DB",
  },
  {
    name: "Mongoose",
    icon: SiMongodb,
    color: "#880000",
    level: 100,
    category: "Backend & DB",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#4169E1",
    level: 100,
    category: "Backend & DB",
  },
  {
    name: "Neon",
    icon: NeonIcon,
    color: "#00E599",
    level: 100,
    category: "Backend & DB",
  },
  {
    name: "Prisma",
    icon: SiPrisma,
    color: "#5A67D8",
    level: 100,
    category: "Backend & DB",
  },
  {
    name: "Sass",
    icon: SiSass,
    color: "#CC6699",
    level: 100,
    category: "Frontend",
  },
  {
    name: "HTML",
    icon: SiHtml5,
    color: "#E34F26",
    level: 100,
    category: "Frontend",
  },
  {
    name: "CSS",
    icon: SiCss,
    color: "#1572B6",
    level: 100,
    category: "Frontend",
  },
  {
    name: "Git",
    icon: FaGitAlt,
    color: "#F05032",
    level: 100,
    category: "Auth & Tools",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    color: "#ffffff",
    level: 100,
    category: "Auth & Tools",
  },
];

const CATEGORIES = [
  "All",
  "Frontend",
  "State & Data",
  "Backend & DB",
  "Auth & Tools",
] as const;

export default function Skills() {
  const theme = useTheme();
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredSkills =
    activeCategory === "All"
      ? SKILLS
      : SKILLS.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2
            className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent"
            style={{
              backgroundImage: theme.primaryText,
            }}
          >
            Skills & Technologies
          </h2>

          <motion.div
            className="h-1.5 mx-auto rounded-full mb-6"
            style={{
              backgroundImage: theme.secondary,
            }}
            initial={{ width: 0 }}
            whileInView={{ width: "220px" }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          />

          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My technical{" "}
            <span
              className="font-bold bg-clip-text text-transparent"
              style={{
                backgroundImage: theme.accentText,
              }}
            >
              toolbox
            </span>{" "}
            and expertise
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-2 md:gap-3 mb-10"
        >
          {CATEGORIES.map((category) => {
            const count =
              category === "All"
                ? SKILLS.length
                : SKILLS.filter((s) => s.category === category).length;

            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? "text-white border border-white/20 shadow-lg shadow-black/20"
                    : "text-gray-400 hover:text-white bg-white/5 border border-white/10 hover:border-white/20"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSkillTab"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r opacity-90"
                    style={{
                      backgroundImage: theme.primary,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}

                <span className="relative z-10">{category}</span>

                <span
                  className={`relative z-10 text-xs px-2 py-0.5 rounded-full ${
                    isActive
                      ? "bg-black/30 text-white"
                      : "bg-white/10 text-gray-400 group-hover:text-white"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Skills Grid - Compact Badge Layout */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 max-w-6xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              const Icon = skill.icon;

              return (
                <motion.div
                  layout
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className="group relative bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 hover:border-white/30 rounded-xl p-3.5 flex items-center gap-3 transition-transform duration-150 ease-out transform-gpu hover:-translate-y-1 cursor-default overflow-hidden shadow-sm"
                >
                  {/* Icon Container */}
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-150 ease-out group-hover:scale-110 transform-gpu"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.06)",
                    }}
                  >
                    <Icon
                      className="text-2xl"
                      style={{
                        color: skill.color,
                      }}
                    />
                  </div>

                  {/* Skill Name */}
                  <div className="flex flex-col flex-1 min-w-0">
                    <span className="text-white font-medium text-xs sm:text-sm tracking-tight group-hover:text-white transition-colors leading-tight whitespace-normal">
                      {skill.name}
                    </span>

                    <span className="text-[10px] text-gray-400 leading-tight">
                      {skill.category}
                    </span>
                  </div>

                  {/* Right Accent Indicator */}
                  <span
                    className="w-1.5 h-1.5 rounded-full opacity-40 group-hover:opacity-100 transition-opacity shrink-0"
                    style={{
                      backgroundColor: skill.color,
                    }}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Decorative Blob - Left */}
        <div
          className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 blur-[120px] opacity-20 pointer-events-none"
          style={{
            backgroundImage: theme.primary,
          }}
        />

        {/* Decorative Blob - Right */}
        <div
          className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 blur-[120px] opacity-20 pointer-events-none"
          style={{
            backgroundImage: theme.secondary,
          }}
        />
      </div>
    </section>
  );
}
