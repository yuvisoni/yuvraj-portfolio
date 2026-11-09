"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Title from "./Title";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { Mail, ArrowUpRight } from "lucide-react";

const Contact = () => {
  const contactLinks = [
    {
      label: "Email",
      value: "yuvisoni2005@gmail.com",
      href: "mailto:yuvisoni2005@gmail.com",
      Icon: Mail,
      description: "Drop me an email",
    },
    {
      label: "GitHub",
      value: "github.com/yuvisoni",
      href: "https://github.com/yuvisoni",
      Icon: SiGithub,
      description: "Check out my code",
    },
    {
      label: "LinkedIn",
      value: "Yuvraj Soni",
      href: "https://www.linkedin.com/in/yuvraj-soni-328794384",
      Icon: SiLinkedin,
      description: "Let's connect",
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="glow-purple-sm absolute bottom-0 left-1/2 -translate-x-1/2 -z-10" />

      <div className="max-w-7xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <Title
            text="Contact"
            className="flex flex-col items-center justify-center mb-6"
          />
        </motion.div>

        <motion.div
          className="text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Have an Idea?{" "}
            <span className="text-gradient-purple">
              Let&apos;s Build Something Together.
            </span>
          </h3>
          <p className="text-zinc-400 leading-relaxed">
            I&apos;m always interested in exploring new technologies,
            collaborating on exciting projects and connecting with people who
            share an interest in technology and innovation.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {contactLinks.map((item, index) => {
            const Icon = item.Icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  target={item.label !== "Email" ? "_blank" : undefined}
                  rel={
                    item.label !== "Email"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="glass-card p-5 flex flex-col items-center text-center group block h-full"
                >
                  <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 mb-3 group-hover:bg-purple-500/20 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-semibold text-foreground text-sm mb-1">
                    {item.label}
                  </h4>
                  <p className="text-xs text-zinc-500 mb-2">
                    {item.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs text-purple-400 group-hover:text-purple-300 transition-colors mt-auto">
                    {item.value}
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
