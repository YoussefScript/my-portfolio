"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

export default function About() {
  const theme = useTheme();

  const stats = [
    { label: "Technologies", value: "15+", icon: "🛠️" },
    { label: "Projects", value: "4", icon: "🚀" },
    { label: "Experience Years", value: "2+", icon: "⏳" },
    { label: "Lines of Code", value: "♾️", icon: "</>" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent"
              style={{ backgroundImage: theme.primaryText }}>
              About Me
            </h2>
            <motion.div
              className="h-1.5 w-24 rounded-full mb-8"
              style={{ backgroundImage: theme.secondary }}
              initial={{ width: 0 }}
              whileInView={{ width: "96px" }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            />
            
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              Get to know the person behind the{" "}
              <span className="font-bold bg-clip-text text-transparent" style={{ backgroundImage: theme.accentText }}>
                code
              </span>
            </p>
            
            <div className="space-y-4 text-gray-400 text-lg">
              <p>
                I&apos;m a passionate frontend developer with a love for creating beautiful, functional web experiences. 
                My journey in web development started with curiosity and has evolved into a dedication to crafting 
                digital solutions that make a difference.
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open-source 
                projects, or learning about the latest trends in web development. I believe in continuous learning 
                and pushing the boundaries of what&apos;s possible on the web.
              </p>
              <p>
                My goal is to bridge the gap between design and development, creating seamless user experiences 
                that are both visually stunning and highly functional.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 group"
                >
                  <div className="text-3xl grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110">
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-2xl font-bold bg-clip-text text-transparent"
                      style={{ backgroundImage: theme.secondaryText }}>
                      {stat.value}
                    </p>
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group"
          >
            {/* Background Glow */}
            <div 
              className="absolute -inset-4 rounded-3xl opacity-20 group-hover:opacity-40 blur-2xl transition-all duration-500 pointer-events-none"
              style={{ backgroundImage: theme.primary }}
            />
            
            {/* Image Wrap */}
            <div className="relative aspect-square rounded-3xl overflow-hidden border-2 border-white/10 group-hover:border-white/20 transition-all duration-500 shadow-2xl">
              <Image
                src="/pro.jpg"
                alt="Profile"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Decorative Elements */}
            <motion.div 
              className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full blur-3xl opacity-30"
              style={{ backgroundImage: theme.secondary }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div 
              className="absolute -top-6 -left-6 w-32 h-32 rounded-full blur-3xl opacity-30"
              style={{ backgroundImage: theme.accent }}
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 2 }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
