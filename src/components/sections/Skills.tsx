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
  SiAxios,
  SiReactquery,
  SiZod
} from "react-icons/si";
import { FaReact, FaGitAlt } from "react-icons/fa";
import { useTheme } from "@/context/ThemeContext";

const SKILLS = [
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Shadcn UI", icon: SiShadcnui, color: "#ffffff" },
  { name: "Sass", icon: SiSass, color: "#CC6699" },
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss, color: "#1572B6" },
  { name: "TanStack Query", icon: SiReactquery, color: "#FF4154" },
  { name: "Zod", icon: SiZod, color: "#3068B7" },
  { name: "Axios", icon: SiAxios, color: "#5A29E4" },
  { name: "Zustand", icon: FaReact, color: "#ebaf19" },
  { name: "Clerk", icon: SiClerk, color: "#6C47FF" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
];

export default function Skills() {
  const theme = useTheme();

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent"
            style={{ backgroundImage: theme.primaryText }}>
            Skills & Technologies
          </h2>
          <motion.div
            className="h-1.5 mx-auto rounded-full mb-6"
            style={{ backgroundImage: theme.secondary }}
            initial={{ width: 0 }}
            whileInView={{ width: "220px" }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My technical{" "}
            <span className="font-bold bg-clip-text text-transparent" style={{ backgroundImage: theme.accentText }}>
              toolbox
            </span>{" "}
            and expertise
          </p>
        </motion.div>

        {/* Skill Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {SKILLS.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.05 * i }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center transition-all duration-300 hover:border-white/20"
              >
                {/* Glow on hover */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300"
                  style={{ backgroundColor: skill.color }}
                />

                <div className="relative z-10 flex flex-col items-center">
                  <div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                  >
                    <Icon className="text-4xl" style={{ color: skill.color }} />
                  </div>
                  <h3 className="text-white font-bold text-center tracking-tight">{skill.name}</h3>
                  
                  {/* Progress Bar Container */}
                  <div className="w-full h-1.5 bg-white/10 rounded-full mt-4 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 + 0.1 * i }}
                      viewport={{ once: true }}
                      className="h-full rounded-full"
                      style={{ backgroundImage: theme.primary }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Floating Decorative Blobs */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 blur-[120px] opacity-20 pointer-events-none"
          style={{ backgroundImage: theme.primary }} />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 blur-[120px] opacity-20 pointer-events-none"
          style={{ backgroundImage: theme.secondary }} />

      </div>
    </section>
  );
}
