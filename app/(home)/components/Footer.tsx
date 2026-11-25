"use client";

import React from "react";
import Link from "next/link";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800/50 mt-10">
      <div className="max-w-7xl mx-auto px-5 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left - Name & tagline */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-foreground">
              Yuvraj Soni<span className="text-purple-500">.</span>
            </h3>
            <p className="text-sm text-zinc-500 mt-1">
              Building Intelligent Solutions Through Code
            </p>
          </div>

          {/* Center - Social links */}
          <div className="flex items-center gap-5">
            <Link
              href="https://github.com/yuvisoni"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-zinc-500 hover:text-purple-400 transition-colors"
            >
              <SiGithub className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/yuvraj-soni-328794384"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-zinc-500 hover:text-purple-400 transition-colors"
            >
              <SiLinkedin className="w-5 h-5" />
            </Link>
            <Link
              href="mailto:yuvisoni2005@gmail.com"
              aria-label="Email"
              className="text-zinc-500 hover:text-purple-400 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </Link>
          </div>

          {/* Right - Copyright */}
          <p className="text-xs text-zinc-600">
            &copy; {currentYear} Yuvraj Soni. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
