"use client";

import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import { FaGithub, FaEnvelope, FaRocket, FaArrowDown, FaStar, FaWhatsapp } from "react-icons/fa";
import { useTheme } from "@/context/ThemeContext";

export default function Hero() {
  const theme = useTheme();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const socials = [
    { icon: FaGithub, href: "https://github.com/YoussefScript", color: "#9ca3af", hoverColor: "#d1d5db" },
    { icon: FaWhatsapp, href: "https://wa.me/201111225642", color: "#9ca3af", hoverColor: "#25d366" },
    { icon: FaEnvelope, href: "mailto:youssef1362009kamel@gmail.com", color: "#9ca3af", hoverColor: "#4ade80" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-24 md:pt-32 overflow-visible">
      <motion.div style={{ y, opacity }} className="max-w-6xl mx-auto text-center w-full relative z-30">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <motion.div
            className="inline-block p-[2px] rounded-full mb-6"
            style={{ backgroundImage: theme.primary }}
            animate={{ boxShadow: [`0 0 20px ${theme.glowColor}`, `0 0 40px ${theme.glowColor}`, `0 0 20px ${theme.glowColor}`] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="bg-black/90 rounded-full px-6 py-3 flex items-center gap-2">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}>
                <FaStar className="text-yellow-400" />
              </motion.div>
              <span className="text-sm font-medium text-white">Welcome to my universe</span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-5xl md:text-8xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <span className="block bg-clip-text text-transparent" style={{ backgroundImage: theme.secondaryText }}>
              Frontend Developer
            </span>
            <span className="block text-white">
              {"& Creative "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: theme.accentText }}>
                Coder
              </span>
            </span>
          </motion.h1>

          {/* Animated underline */}
          <motion.div
            className="h-1.5 mx-auto rounded-full mb-8"
            style={{ backgroundImage: theme.primary }}
            initial={{ width: 0 }}
            animate={{ width: "200px" }}
            transition={{ duration: 1, delay: 1.2 }}
          />

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            I craft{" "}
            <span className="font-bold bg-clip-text text-transparent" style={{ backgroundImage: theme.secondaryText }}>
              beautiful
            </span>
            ,{" "}
            <span className="font-bold bg-clip-text text-transparent" style={{ backgroundImage: theme.accentText }}>
              interactive
            </span>{" "}
            web experiences with modern technologies.
            <br />
            Passionate about clean code, stunning designs, and seamless user experiences.
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex justify-center mb-12"
        >
          <motion.a
            href="#projects"
            className="group relative px-8 py-4 text-white font-semibold rounded-full flex items-center justify-center gap-3 shadow-lg overflow-hidden cursor-pointer"
            style={{ backgroundImage: theme.primary }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}>
              <FaRocket />
            </motion.div>
            <span>Explore My Universe</span>
          </motion.a>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="flex justify-center gap-8 relative z-50 mb-16"
        >
          {socials.map((social, i) => {
            const Icon = social.icon;
            return (
              <motion.a
                href={social.href}
                key={i}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white transition-all hover:border-white/30 backdrop-blur-sm bg-white/5 shadow-lg relative z-50 cursor-pointer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.6 + 0.1 * i }}
                whileHover={{ 
                  scale: 1.2, 
                  y: -5, 
                  backgroundColor: "rgba(255,255,255,0.1)",
                  color: social.hoverColor 
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon size={24} className="pointer-events-none" />
              </motion.a>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 text-center pointer-events-none select-none z-10"
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-3xl bg-clip-text text-transparent"
          style={{ backgroundImage: theme.primary }}
        >
          <FaArrowDown />
        </motion.div>
        <div className="mt-2 text-sm bg-clip-text text-transparent" style={{ backgroundImage: theme.secondaryText }}>
          Scroll to explore
        </div>
      </motion.div>
    </section>
  );
}
