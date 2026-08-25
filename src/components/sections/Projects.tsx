"use client";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useTheme } from "@/context/ThemeContext";

const PROJECTS = [
  {
    title: "SaaS Landing Page",
    description: "A high-conversion SaaS landing page with RTL support and dark mode. Built with Next.js and Tailwind for maximum performance and responsiveness.",
    emoji: "🚀",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubLink: "https://github.com/YoussefScript/landing-page",
    liveLink: "https://landing-page-ivory-nine-96.vercel.app",
  },
  {
    title: "SkyCast Weather Dashboard",
    description: "A premium weather application with interactive maps and real-time geocoding. Features a stunning glassmorphic UI and multi-layered solar details.",
    emoji: "🌤️",
    tech: ["React 19", "Tailwind 4", "Zod", "Vite"],
    githubLink: "https://github.com/YoussefScript/Weather-React-DashBoard",
    liveLink: "https://skycast-beige-delta.vercel.app/",
  },
  {
    title: "E-Commerce Admin Dashboard",
    description: "A professional, high-performance admin dashboard designed to manage multiple stores, products, and analytics with ease. Features Stripe payments and Clerk authentication.",
    emoji: "🛍️",
    tech: ["Next.js 16", "Tailwind 4","Prisma", "zod", "Zustand", "Clerk", "Stripe"],
    githubLink: "https://github.com/YoussefScript/ecommerce-admin",
    liveLink: "https://ecommerce-admin-inky-alpha.vercel.app",
  },
  {
    title: "E-Commerce Store",
    description: "A luxury e-commerce storefront with a cinematic UI and smooth micro-interactions. Features a persistent cart via Zustand and a secure Stripe checkout flow.",
    emoji: "👗",
    tech: ["Next.js 16", "Tailwind 4", "zod","Prisma","Zustand", "Clerk", "Stripe"],
    githubLink: "https://github.com/YoussefScript/ecommerce-store",
    liveLink: "https://ecommerce-store-psi-rust.vercel.app",
  },
];

export default function Projects() {
  const theme = useTheme();

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">

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
            <span className="font-bold bg-clip-text text-transparent" style={{ backgroundImage: theme.accentText }}>
              creative work
            </span>{" "}
            and technical expertise
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-500 flex flex-col hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Content */}
              <div className="p-10 flex flex-col flex-1">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-gray-300 mb-8 text-lg leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-10">
                  {project.tech.map((t) => (
                    <span key={t} className="px-4 py-1.5 bg-white/10 text-white/90 rounded-full text-sm font-semibold border border-white/5 hover:bg-white/20 transition-colors">
                      {t}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-3 px-8 py-5 text-white rounded-2xl transition-all duration-300 hover:scale-[1.02] active:scale-95 text-sm font-bold shadow-xl shadow-blue-500/20 uppercase tracking-widest"
                    style={{ backgroundImage: theme.primary }}
                  >
                    <FaExternalLinkAlt size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-3 px-8 py-5 text-white/80 rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 hover:scale-[1.02] active:scale-95 hover:text-white hover:bg-white/10 text-sm font-bold uppercase tracking-widest backdrop-blur-sm"
                  >
                    <FaGithub size={20} />
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
