"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { useTheme } from "@/context/ThemeContext";

const CONTACT_INFO = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "youssef1362009kamel@gmail.com",
    href: "mailto:youssef1362009kamel@gmail.com",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "+20 1111225642",
    href: "https://wa.me/201111225642",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "YoussefScript",
    href: "https://github.com/YoussefScript",
  },
];

export default function Contact() {
  const theme = useTheme();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<boolean | null>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.id]: e.target.value });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setStatus(null);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify(form),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        setStatus(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus(false);
      }
    } catch (error) {
      console.error("Form error:", error);
      setStatus(false);
    } finally {
      setSending(false);
    }
  };

  const inputCls = "w-full p-4 rounded-lg border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors";
  const inputStyle = { backgroundColor: "rgba(55,65,81,0.6)" };

  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent"
            style={{ backgroundImage: theme.primaryText }}>
            Get in Touch
          </h2>
          <motion.div
            className="h-1.5 mx-auto rounded-full mb-6"
            style={{ backgroundImage: theme.secondary }}
            initial={{ width: 0 }}
            whileInView={{ width: "220px" }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to bring your{" "}
            <span className="font-bold bg-clip-text text-transparent" style={{ backgroundImage: theme.accentText }}>
              ideas to life
            </span>
            ? Let&apos;s create something amazing together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Get in Touch</h3>
              <div className="space-y-5">
                {CONTACT_INFO.map((info) => {
                  const Icon = info.icon;
                  return (
                    <div key={info.label} className="flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                        style={{ backgroundImage: "linear-gradient(to right, #3b82f6, #9333ea)" }}
                      >
                        <Icon className="text-white text-xl" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 mb-0.5">{info.label}</p>
                        <a
                          href={info.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white font-medium hover:text-blue-400 transition-colors underline underline-offset-2 break-all"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
              <form className="space-y-5" onSubmit={onSubmit}>
                <div className="flex flex-col md:flex-row gap-5">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-white mb-2" htmlFor="name">Name</label>
                    <input id="name" type="text" className={inputCls} style={inputStyle}
                      placeholder="Your name" required value={form.name} onChange={onChange} />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-white mb-2" htmlFor="email">Email</label>
                    <input id="email" type="email" className={inputCls} style={inputStyle}
                      placeholder="Your email" required value={form.email} onChange={onChange} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2" htmlFor="message">Message</label>
                  <textarea id="message" rows={5} className={`${inputCls} resize-none`} style={inputStyle}
                    placeholder="Your message" required value={form.message} onChange={onChange} />
                </div>
                <motion.button
                  type="submit"
                  className="w-full py-3 px-6 text-white font-semibold rounded-lg transition-opacity disabled:opacity-50"
                  style={{ backgroundImage: theme.primary }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={sending}
                >
                  {sending ? "Sending..." : "Send Message"}
                </motion.button>
                {status !== null && (
                  <p className={`text-sm ${status ? "text-green-400" : "text-red-400"}`}>
                    {status ? "✅ Message sent successfully!" : "❌ Failed to send. Try again."}
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
