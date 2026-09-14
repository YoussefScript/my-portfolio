"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  Zap,
  FolderOpen,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const AVATAR_URL =
  "https://avatars.githubusercontent.com/u/250314469?s=400&u=8f1359ded64ae590bb3554a35656de42ba4af941&v=4";

const NAV_ITEMS = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: Zap },
  { name: "Projects", href: "#projects", icon: FolderOpen },
  { name: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar() {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY + 120;

      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const id = NAV_ITEMS[i].href.substring(1);
        const el = document.getElementById(id);

        if (el && el.offsetTop <= scrollY) {
          setActive(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (
        mobileOpen &&
        !(e.target as HTMLElement).closest("nav")
      ) {
        setMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", onClick);

    return () => {
      document.removeEventListener("mousedown", onClick);
    };
  }, [mobileOpen]);

  const scrollTo = (href: string) => {
    document
      .getElementById(href.substring(1))
      ?.scrollIntoView({
        behavior: "smooth",
      });

    setMobileOpen(false);
  };

  return (
    <nav className="w-full relative flex items-center justify-between">
      {/* =========================
          LEFT SIDE - PROFILE
      ========================== */}
      <motion.button
        onClick={() => scrollTo("#home")}
        className="flex items-center gap-3 cursor-pointer text-left"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.02 }}
      >
        {/* Avatar */}
        <div className="w-14 h-14 rounded-full overflow-hidden shrink-0">
          <img
            src={AVATAR_URL}
            alt="Youssef Emad Kamel"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name + Title */}
        <div className="flex flex-col">
          <span
            className="text-xl md:text-2xl font-bold leading-tight"
            style={{
              backgroundImage: theme.primary,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Youssef Emad Kamel
          </span>

          <span className="text-sm md:text-base text-white/60 font-medium">
            Full-Stack Developer
          </span>
        </div>
      </motion.button>

      {/* =========================
          RIGHT SIDE - DESKTOP NAV
      ========================== */}
      <div className="hidden md:flex items-center bg-white/5 backdrop-blur-sm rounded-full border border-white/10 px-2 py-2 gap-1">
        {NAV_ITEMS.map((item, i) => {
          const Icon = item.icon;
          const isActive = active === item.href.substring(1);

          return (
            <motion.button
              key={item.name}
              onClick={() => scrollTo(item.href)}
              initial={{
                opacity: 0,
                y: -15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.4,
                delay: 0.08 * i,
              }}
              className="relative flex items-center gap-2 px-4 py-2.5 rounded-full font-medium text-sm cursor-pointer transition-all duration-300"
              style={
                isActive
                  ? {
                      backgroundImage: theme.primary,
                      color: "#fff",
                    }
                  : {
                      color: "rgba(255,255,255,0.7)",
                    }
              }
              whileHover={{
                scale: 1.04,
                color: "#fff",
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              <Icon size={16} />
              <span>{item.name}</span>
            </motion.button>
          );
        })}
      </div>

      {/* =========================
          MOBILE MENU BUTTON
      ========================== */}
      <div className="md:hidden">
        <motion.button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label={
            mobileOpen ? "Close menu" : "Open menu"
          }
        >
          <AnimatePresence mode="wait">
            {mobileOpen ? (
              <motion.div
                key="close"
                initial={{
                  rotate: -90,
                  opacity: 0,
                }}
                animate={{
                  rotate: 0,
                  opacity: 1,
                }}
                exit={{
                  rotate: 90,
                  opacity: 0,
                }}
              >
                <X size={22} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{
                  rotate: 90,
                  opacity: 0,
                }}
                animate={{
                  rotate: 0,
                  opacity: 1,
                }}
                exit={{
                  rotate: -90,
                  opacity: 0,
                }}
              >
                <Menu size={22} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* =========================
          MOBILE DROPDOWN
      ========================== */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -15,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -15,
              scale: 0.95,
            }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-16 right-0 w-56 bg-black/95 backdrop-blur-xl border border-white/20 rounded-2xl p-3 z-50 shadow-2xl"
          >
            <div className="absolute -top-2 right-6 w-4 h-4 bg-black/95 border-l border-t border-white/20 rotate-45" />

            {NAV_ITEMS.map((item, i) => {
              const Icon = item.icon;
              const isActive = active === item.href.substring(1);

              return (
                <motion.button
                  key={item.name}
                  onClick={() => scrollTo(item.href)}
                  initial={{
                    opacity: 0,
                    x: -15,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    delay: i * 0.05,
                  }}
                  className="w-full flex items-center gap-3 py-3 px-4 rounded-xl font-medium text-sm cursor-pointer"
                  style={
                    isActive
                      ? {
                          backgroundImage: theme.primary,
                          color: "#fff",
                        }
                      : {
                          color: "#fff",
                        }
                  }
                  whileHover={{
                    x: 4,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                >
                  <Icon size={17} />
                  <span>{item.name}</span>
                </motion.button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
