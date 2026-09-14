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

  // Detect active section while scrolling
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

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Close mobile menu when clicking outside navbar
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (mobileOpen && !target.closest("nav")) {
        setMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", onClick);

    return () => {
      document.removeEventListener("mousedown", onClick);
    };
  }, [mobileOpen]);

  const scrollTo = (href: string) => {
    const id = href.substring(1);
    const element = document.getElementById(id);

    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMobileOpen(false);
  };

  return (
    <nav className="w-full relative flex items-center justify-between px-4 py-3">
      {/* =========================
          BRAND / AVATAR LOGO (Replaces </>)
      ========================== */}
      <motion.a
        href="#home"
        onClick={(e) => {
          e.preventDefault();
          scrollTo("#home");
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="flex items-center gap-3 cursor-pointer group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="relative p-0.5 rounded-full bg-gradient-to-r from-white/20 to-white/5 group-hover:from-white/40 group-hover:to-white/20 transition-all duration-300">
          <img
            src={AVATAR_URL}
            alt="Profile Avatar"
            className="w-10 h-10 rounded-full object-cover border border-white/20 shadow-md group-hover:border-white/50 transition-all duration-300"
          />
        </div>
      </motion.a>

      {/* =========================
          DESKTOP NAVIGATION
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
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.1 * i,
              }}
              className="relative flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 cursor-pointer"
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
                scale: 1.05,
                color: "#fff",
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              <Icon size={15} />
              <span>{item.name}</span>
            </motion.button>
          );
        })}
      </div>

      {/* =========================
          MOBILE TOGGLE
      ========================== */}
      <div className="md:hidden">
        <motion.button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white cursor-pointer"
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
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
                transition={{
                  duration: 0.2,
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
                transition={{
                  duration: 0.2,
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
              y: -16,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -16,
              scale: 0.95,
            }}
            transition={{
              duration: 0.2,
            }}
            className="md:hidden absolute top-16 right-4 bg-black/95 backdrop-blur-xl border border-white/20 rounded-2xl p-3 min-w-[200px] z-50 shadow-2xl"
          >
            {/* Dropdown Arrow */}
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
                    x: -20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    delay: 0.05 * i,
                  }}
                  className="w-full flex items-center gap-3 py-3 px-4 rounded-xl font-medium text-sm transition-all duration-300 cursor-pointer"
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
