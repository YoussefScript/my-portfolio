"use client";

import { motion } from "framer-motion";

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
} from "react-icons/si";

import { FaReact, FaGitAlt } from "react-icons/fa";
import { useTheme } from "@/context/ThemeContext";

interface Skill {
  name: string;
  icon: React.ElementType;
  color: string;
  level: number;
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
      d="M22 35
         C18 26 24 17 33 20
         C39 11 61 11 67 20
         C76 17 82 26 78 35
         C88 45 86 66 77 77
         C68 88 32 88 23 77
         C14 66 12 45 22 35Z"
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
   Skills
========================= */

const SKILLS: Skill[] = [
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
    level: 100,
  },

  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
    level: 100,
  },

  {
    name: "React",
    icon: FaReact,
    color: "#61DAFB",
    level: 100,
  },

  {
    name: "Next",
    icon: SiNextdotjs,
    color: "#ffffff",
    level: 100,
  },

  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#38BDF8",
    level: 100,
  },

  {
    name: "Shadcn UI",
    icon: SiShadcnui,
    color: "#ffffff",
    level: 100,
  },

  {
    name: "Clerk",
    icon: SiClerk,
    color: "#6C47FF",
    level: 100,
  },

  {
    name: "Better Auth",
    icon: BetterAuthIcon,
    color: "#ffffff",
    level: 100,
  },

  {
    name: "TanStack Query",
    icon: TanStackIcon,
    color: "#FF4154",
    level: 100,
  },

  {
    name: "Zustand",
    icon: ZustandIcon,
    color: "#F0EFEA",
    level: 100,
  },

  {
    name: "Redux Toolkit",
    icon: SiRedux,
    color: "#764ABC",
    level: 100,
  },

  {
    name: "RTK Query",
    icon: SiRedux,
    color: "#764ABC",
    level: 100,
  },

  {
    name: "Zod",
    icon: SiZod,
    color: "#3068B7",
    level: 100,
  },

  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
    level: 100,
  },

  {
    name: "MongoDB Atlas",
    icon: SiMongodb,
    color: "#47A248",
    level: 100,
  },

  {
    name: "Mongoose",
    icon: SiMongodb,
    color: "#880000",
    level: 100,
  },

  {
    name: "Prisma",
    icon: SiPrisma,
    color: "#5A67D8",
    level: 100,
  },

  {
    name: "Sass",
    icon: SiSass,
    color: "#CC6699",
    level: 100,
  },

  {
    name: "HTML",
    icon: SiHtml5,
    color: "#E34F26",
    level: 100,
  },

  {
    name: "CSS",
    icon: SiCss,
    color: "#1572B6",
    level: 100,
  },

  {
    name: "Git",
    icon: FaGitAlt,
    color: "#F05032",
    level: 100,
  },

  {
    name: "GitHub",
    icon: SiGithub,
    color: "#ffffff",
    level: 100,
  },
];

export default function Skills() {
  const theme = useTheme();

  return (
    <section
      id="skills"
      className="relative py-24 overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
          className="text-center mb-16"
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
            initial={{
              width: 0,
            }}
            whileInView={{
              width: "220px",
            }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
            viewport={{
              once: true,
            }}
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

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {SKILLS.map((skill, i) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.05 * i,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -5,
                  scale: 1.02,
                }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center transition-all duration-300 hover:border-white/20"
              >
                {/* Glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300"
                  style={{
                    backgroundColor: skill.color,
                  }}
                />

                <div className="relative z-10 flex flex-col items-center w-full">

                  {/* Icon Container */}
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor:
                        "rgba(255,255,255,0.05)",
                    }}
                  >
                    <Icon
                      className="text-4xl"
                      style={{
                        color: skill.color,
                      }}
                    />
                  </div>

                  {/* Skill Name */}
                  <h3 className="text-white font-bold text-center tracking-tight">
                    {skill.name}
                  </h3>

                  {/* Progress Bar */}
                  <div className="w-full h-1.5 bg-white/10 rounded-full mt-4 overflow-hidden">
                    <motion.div
                      initial={{
                        width: 0,
                      }}
                      whileInView={{
                        width: `${skill.level}%`,
                      }}
                      transition={{
                        duration: 1,
                        delay: 0.5 + 0.1 * i,
                      }}
                      viewport={{
                        once: true,
                      }}
                      className="h-full rounded-full"
                      style={{
                        backgroundImage: theme.primary,
                      }}
                    />
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

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
