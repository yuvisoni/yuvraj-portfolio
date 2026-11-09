"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { ArrowDown, ExternalLink, Download } from "lucide-react";
import DeveloperAvatar from "./DeveloperAvatar";
import { MovingBorderBtn } from "@/components/ui/moving-border";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center pt-20 pb-10 relative"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      <div className="glow-purple absolute top-1/3 left-1/4 -z-10" />
      <div className="glow-violet absolute bottom-1/4 right-1/4 -z-10" />

      <div className="max-w-7xl mx-auto px-5 w-full relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-8 lg:gap-16">
          {/* Left - Text Content */}
          <motion.div
            className="space-y-6 text-center lg:text-left max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <MovingBorderBtn
                borderRadius="2rem"
                className="px-4 py-1.5 font-medium text-sm"
                containerClassName="inline-block"
                as="div"
              >
                <span className="text-purple-300">
                  🎓 2nd Year Computer Science Engineering Student
                </span>
              </MovingBorderBtn>
            </motion.div>

            {/* Name */}
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <span className="text-gradient-purple">YUVRAJ</span>
              <br />
              <span className="text-foreground">SONI</span>
            </motion.h1>

            {/* Headline */}
            <motion.p
              className="text-xl sm:text-2xl lg:text-3xl font-semibold text-zinc-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Building Intelligent Solutions
              <br className="hidden sm:block" /> Through Code.
            </motion.p>

            {/* Description */}
            <motion.p
              className="text-base sm:text-lg text-zinc-400 max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Computer Science Engineering student exploring AI, Machine
              Learning and Software Development.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Link
                href="https://github.com/yuvisoni"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium text-sm transition-all hover:shadow-lg hover:shadow-purple-500/20"
              >
                <SiGithub className="w-4 h-4" />
                GitHub
              </Link>

              <Link
                href="https://www.linkedin.com/in/yuvraj-soni-328794384"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white font-medium text-sm transition-all border border-zinc-700 hover:border-zinc-600"
              >
                <SiLinkedin className="w-4 h-4" />
                LinkedIn
              </Link>

              <button
                onClick={() => {
                  const el = document.querySelector("#projects");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-800/50 hover:bg-zinc-800 text-zinc-300 hover:text-white font-medium text-sm transition-all border border-zinc-700/50 hover:border-zinc-600"
              >
                <ExternalLink className="w-4 h-4" />
                View Projects
              </button>

              <Link
                href="/Yuvraj_Soni_Resume.pdf"
                download="Yuvraj_Soni_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 hover:text-purple-200 font-medium text-sm transition-all border border-purple-500/20 hover:border-purple-500/40"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </Link>
            </motion.div>
          </motion.div>

          {/* Right - Developer Avatar */}
          <motion.div
            className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
          >
            <DeveloperAvatar />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="flex justify-center mt-16 lg:mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <button
            onClick={() => {
              const el = document.querySelector("#about");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex flex-col items-center gap-2 text-zinc-500 hover:text-purple-400 transition-colors"
          >
            <span className="text-xs font-medium tracking-wider uppercase">
              Scroll Down
            </span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
