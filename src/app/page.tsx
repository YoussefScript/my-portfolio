"use client";

import { useState, useEffect } from "react";
import { ThemeProvider } from "@/context/ThemeContext";
import { useTheme } from "@/context/ThemeContext";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { FaCode, FaArrowUp } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

function PageContent() {
  const theme = useTheme();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative w-full flex flex-col text-white overflow-hidden">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 z-[60] origin-left"
        style={{
          scaleX,
          backgroundImage: theme.primary,
          boxShadow: `0 0 10px ${theme.solidAccent}`,
        }}
      />

      {/* Fixed Header */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/10"
        style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
          >
            <motion.div
              className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
              style={{ backgroundImage: theme.primary }}
              whileHover={{ scale: 1.1 }}
            >
              <FaCode className="text-white text-xl" />
            </motion.div>
            <div className="flex flex-col">
              <span
                className="text-xl font-bold bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 inline-block"
                style={{ backgroundImage: theme.secondaryText }}
              >
                Youssef Emad Kamel
              </span>
              <span className="text-xs text-gray-400 font-medium">Full-Stack Developer</span>
            </div>
          </motion.div>

          {/* Nav */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Navbar />
          </motion.div>
        </div>
      </motion.header>

      {/* Sections */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            key="backToTop"
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 p-3.5 rounded-full border border-white/20 text-white shadow-2xl backdrop-blur-md cursor-pointer group flex items-center justify-center"
            style={{ backgroundImage: theme.primary }}
            whileHover={{ scale: 1.15, y: -3 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Back to Top"
          >
            <FaArrowUp className="text-lg group-hover:animate-bounce" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Home() {
  return (
    <ThemeProvider>
      <PageContent />
    </ThemeProvider>
  );
}
