"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

const EXPERIENCES = [
  {
    title: "Front-End Developer Intern",
    company: "01Neo (On Site)",
    date: "Jun 2025",
    bullets: [
      "Developed reusable components with Next.js, TypeScript, and TailwindCSS.",
      "Translated mockups into responsive web interfaces.",
      "Integrated RESTful APIs and handled error states securely.",
      "Contributed to stand-ups, async GitHub reviews, and agile boards.",
    ],
    tags: ["Next.js", "TypeScript", "TailwindCSS", "RESTful APIs", "GitHub", "Agile"],
  },
  {
    title: "Freelance Web Developer",
    company: "Independent Contractor",
    date: "2023 - 2025",
    bullets: [
      "Delivered custom web solutions for diverse clients across multiple industries.",
      "Collaborated directly with stakeholders to transform ideas into pixel-perfect reality.",
      "Built scalable, performance-optimized applications with modern tech stacks.",
      "Maintained 100% client satisfaction through clear communication and timely delivery.",
      "Specialized in responsive design and seamless user experience optimization.",
    ],
    tags: ["React", "Next.js", "JavaScript", "CSS3", "HTML5", "Responsive Design", "UI/UX", "Client Relations"],
  },
];

export default function Experience() {
  const theme = useTheme();
  const titleGradients = [theme.primaryText, theme.secondaryText];
  const companyGradients = [theme.secondaryText, theme.accentText];

  return (
    <section id="experience" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent"
            style={{ backgroundImage: theme.primaryText }}>
            Experience
          </h2>
          <motion.div
            className="h-1.5 mx-auto rounded-full mb-6"
            style={{ backgroundImage: theme.secondary }}
            initial={{ width: 0 }}
            whileInView={{ width: "250px" }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My professional journey in{" "}
            <span className="font-bold bg-clip-text text-transparent" style={{ backgroundImage: theme.accentText }}>
              software development
            </span>
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 opacity-30"
              style={{ backgroundImage: "linear-gradient(to bottom, #3b82f6, #8b5cf6, #ec4899)" }} />

            {EXPERIENCES.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + idx * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.01, y: -4 }}
                className="relative pl-0 md:pl-20 pb-8 md:pb-12 group"
              >
                {/* Dot */}
                <div
                  className="hidden md:block absolute left-5 top-6 w-5 h-5 rounded-full border-4 border-gray-950 group-hover:scale-125 transition-transform duration-300"
                  style={{ backgroundImage: idx === 0 ? theme.primary : theme.secondary }}
                />

                {/* Card */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 md:p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden">
                  {/* Hover overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"
                    style={{ backgroundImage: idx === 0 ? theme.primary : theme.secondary }} />

                  <h3 className="text-xl md:text-2xl font-bold mb-2 bg-clip-text text-transparent relative z-10"
                    style={{ backgroundImage: titleGradients[idx] }}>
                    {exp.title}
                  </h3>

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-5 relative z-10">
                    <span className="text-base md:text-lg font-semibold bg-clip-text text-transparent mb-1 md:mb-0"
                      style={{ backgroundImage: companyGradients[idx] }}>
                      {exp.company}
                    </span>
                    <span className="text-gray-400 text-sm md:text-base">{exp.date}</span>
                  </div>

                  <ul className="space-y-2.5 text-gray-300 relative z-10 mb-6">
                    {exp.bullets.map((bullet, bi) => (
                      <motion.li
                        key={bi}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 + bi * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <span className="hidden md:block mt-2 w-2 h-2 rounded-full shrink-0"
                          style={{ backgroundImage: theme.accent }} />
                        <span className="group-hover:text-white transition-colors duration-300">{bullet}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 relative z-10">
                    {exp.tags.map((tag) => (
                      <span key={tag}
                        className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-medium text-gray-300 hover:bg-white/20 hover:text-white transition-all duration-300 cursor-default">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
