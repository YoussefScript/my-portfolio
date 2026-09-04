"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useTheme } from "@/context/ThemeContext";

const CATEGORIES = ["All", "Full Stack", "Frontend"] as const;

const PROJECTS = [
  {
    title: "Job Application Tracker Kanban DashBoard",
    category: "Full Stack",
    description:
      "A clean, responsive Kanban-style job application tracker built with Next.js, React, Tailwind CSS and MongoDB. Manage job applications across stages, add notes, tags and drag-and-drop between columns.",
    emoji: "📊",
    tech: [
      "Next.js 16",
      "Tailwind 4",
      "Shadcn UI",
      "React 19",
      "MongoDB",  
      "MongoDB Atlas",  
      "Mongoose",
      "better auth",
      "@dnd-kit for drag-and-drop",
    ],
    githubLink: "https://github.com/YoussefScript/job-application-tracker",
    liveLink: "https://job-application-tracker-nu-two.vercel.app",
  },
  {
    title: "Event Planner",
    category: "Full Stack",
    description:
      "A modern full-stack Event Planning web application built with Next.js 15, React 19, Prisma, PostgreSQL, and NextAuth.js.",
    emoji: "📊",
    tech: [
      "Next.js 15",
      "Tailwind 4",
      "React.js 19",
      "React 19",
      "PostgreSQL",  
      "PrismaORM",  
      "Neon",
      "NextAuth.js v5",
      "Zod",
    ],
    githubLink: "https://github.com/YoussefScript/job-application-tracker",
    liveLink: "https://job-application-tracker-nu-two.vercel.app",
  },
  {
    title: "E-Commerce Admin Dashboard",
    category: "Full Stack",
    description:
      "A professional, high-performance admin dashboard designed to manage multiple stores, products, and analytics with ease. Features Stripe payments and Clerk authentication.",
    emoji: "🛍️",
    tech: [
      "Next.js 16",
      "Tailwind 4",
      "Prisma",
      "zod",
      "Zustand",
      "Clerk",
      "Stripe",
    ],
    githubLink: "https://github.com/YoussefScript/event-planner",
    liveLink: "https://event-planner-theta-ochre.vercel.app",
  },
  {
    title: "E-Commerce Store",
    category: "Full Stack",
    description:
      "A luxury e-commerce storefront with a cinematic UI and smooth micro-interactions. Features a persistent cart via Zustand and a secure Stripe checkout flow.",
    emoji: "👗",
    tech: [
      "Next.js 16",
      "Tailwind 4",
      "zod",
      "Prisma",
      "Zustand",
      "Clerk",
      "Stripe",
    ],
    githubLink: "https://github.com/YoussefScript/ecommerce-store",
    liveLink: "https://ecommerce-store-psi-rust.vercel.app",
  },
  {
    title: "SaaS Landing Page",
    category: "Frontend",
    description:
      "A modern, responsive UX/UI website built with React and Vite, featuring a clean design, smooth interactions, and a polished user experience.",
    emoji: "🚀",
    tech: ["React.js", "Tailwind CSS"],
    githubLink: "https://github.com/YoussefScript/modern-ux-ui-landing-page",
    liveLink: "https://modern-ux-ui-landing-page.vercel.app",
  },
  {
    title: "SkyCast Weather Dashboard",
    category: "Frontend",
    description:
      "A premium weather application with interactive maps and real-time geocoding. Features a stunning glassmorphic UI and multi-layered solar details.",
    emoji: "🌤️",
    tech: ["React 19", "Tailwind 4", "Zod", "Vite", "Tanstack Query"],
    githubLink: "https://github.com/YoussefScript/Weather-React-DashBoard",
    liveLink: "https://skycast-beige-delta.vercel.app/",
  },
];

export default function Projects() {
  const theme = useTheme();
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
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
            style={{ backgroundImage: theme.primaryText }}
          >
            Featured Projects
          </h2>

          <motion.div
            className="h-1.5 mx-auto rounded-full mb-6"
            style={{ backgroundImage: theme.secondary }}
            initial={{ width: 0 }}
            whileInView={{ width: "200px" }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          />

          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A showcase of my{" "}
            <span
              className="font-bold bg-clip-text text-transparent"
              style={{ backgroundImage: theme.accentText }}
            >
              creative work
            </span>{" "}
            and technical expertise
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-3 mb-12"
        >
          {CATEGORIES.map((category) => {
            const count =
              category === "All"
                ? PROJECTS.length
                : PROJECTS.filter((p) => p.category === category).length;
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? "text-white border border-white/20 shadow-lg shadow-black/20"
                    : "text-gray-400 hover:text-white bg-white/5 border border-white/10 hover:border-white/20"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeProjectTab"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r opacity-90"
                    style={{ backgroundImage: theme.primary }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
                <span
                  className={`relative z-10 text-xs px-2 py-0.5 rounded-full ${
                    isActive
                      ? "bg-black/30 text-white"
                      : "bg-white/10 text-gray-400"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Cards */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="group relative overflow-hidden rounded-3xl bg-white/[0.04] backdrop-blur-md border border-white/10 hover:border-white/30 transition-all duration-500 flex flex-col shadow-xl hover:shadow-2xl"
              >
                {/* Dynamic Ambient Theme Glow on Hover */}
                <div
                  className="absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 pointer-events-none"
                  style={{ backgroundImage: theme.primary }}
                />

                {/* Content */}
                <div className="p-8 md:p-10 flex flex-col flex-1 relative z-10">
                  {/* Category */}
                  <div className="mb-4">
                    <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-white/80 border border-white/15">
                      {project.category}
                    </span>
                  </div>

                  <div className="mb-4">
                    <h3
                      className="text-2xl md:text-3xl font-bold text-white transition-colors duration-300"
                    >
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-gray-300 mb-8 text-base md:text-lg leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2.5 mb-8">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3.5 py-1.5 bg-white/10 text-white/90 rounded-full text-xs font-semibold border border-white/10 hover:bg-white/20 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex flex-col sm:flex-row items-center gap-4 mt-auto">
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:flex-1 inline-flex items-center justify-center gap-3 px-6 py-4 text-white rounded-2xl text-xs sm:text-sm font-bold uppercase tracking-widest shadow-lg shadow-black/20"
                      style={{ backgroundImage: theme.primary }}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <FaExternalLinkAlt size={14} />
                      Live Demo
                    </motion.a>

                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:flex-1 inline-flex items-center justify-center gap-3 px-6 py-4 text-white/90 rounded-2xl bg-white/5 border border-white/10 text-xs sm:text-sm font-bold uppercase tracking-widest backdrop-blur-sm hover:bg-white/10 hover:text-white"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <FaGithub size={18} />
                      View Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
