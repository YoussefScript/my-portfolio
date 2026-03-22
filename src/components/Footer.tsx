"use client";

import { motion } from "framer-motion";
import { FaGithub, FaEnvelope, FaCode, FaWhatsapp } from "react-icons/fa";
import { useTheme } from "@/context/ThemeContext";

export default function Footer() {
  const theme = useTheme();

  const socials = [
    { icon: FaGithub, href: "https://github.com/YoussefScript", hoverBg: "rgba(255,255,255,0.2)", hoverText: "#fff" },
    { icon: FaWhatsapp, href: "https://wa.me/201111225642", hoverBg: "rgba(37,211,102,0.15)", hoverText: "#25d366" },
    { icon: FaEnvelope, href: "mailto:youssef1362009kamel@gmail.com", hoverBg: "rgba(74,222,128,0.15)", hoverText: "#4ade80" },
  ];

  return (
    <footer className="py-12 md:py-16 border-t border-white/10" style={{ backgroundColor: "rgba(0,0,0,0.2)" }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between lg:items-center lg:gap-0">

          {/* Logo + Name */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <motion.div
              className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
              style={{ backgroundImage: theme.primary }}
              whileHover={{ scale: 1.1 }}
            >
              <FaCode className="text-white text-2xl" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold bg-clip-text text-transparent"
                style={{ backgroundImage: theme.secondaryText }}>
                Emad Kamel Ayad
              </span>
              <span className="text-xs md:text-sm text-gray-400 font-medium">Frontend Developer</span>
            </div>
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex gap-5"
          >
            {socials.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full flex items-center justify-center border border-white/10 text-gray-400 hover:text-white transition-all bg-white/5 backdrop-blur-sm"
                  whileHover={{ 
                    scale: 1.2, 
                    y: -3, 
                    backgroundColor: s.hoverBg,
                    color: s.hoverText 
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={22} className="pointer-events-none" />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-gray-400 text-sm md:text-base">© 2026 Developed by Emad Kamel Ayad.</p>
            <p className="text-gray-500 text-xs md:text-sm mt-1">Crafted with ❤️ and code</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
