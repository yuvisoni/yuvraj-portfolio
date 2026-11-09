"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState, useEffect } from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  {
    link: "https://github.com/yuvisoni",
    label: "GitHub",
    Icon: SiGithub,
  },
  {
    link: "https://www.linkedin.com/in/yuvraj-soni-328794384",
    label: "LinkedIn",
    Icon: SiLinkedin,
  },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    navItems.forEach((item) => {
      const el = document.querySelector(item.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass-nav py-3" : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavClick("#home")}
          className="text-xl font-bold text-foreground hover:text-purple-400 transition-colors"
        >
          Yuvraj
          <span className="text-purple-500">.</span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className={cn(
                "text-sm font-medium transition-colors relative py-1",
                activeSection === item.href.slice(1)
                  ? "text-purple-400"
                  : "text-zinc-400 hover:text-foreground"
              )}
            >
              {item.label}
              {activeSection === item.href.slice(1) && (
                <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-purple-500 rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex items-center gap-4">
          {socials.map((s) => {
            const Icon = s.Icon;
            return (
              <Link
                href={s.link}
                key={s.label}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-zinc-400 hover:text-purple-400 transition-colors"
              >
                <Icon className="w-5 h-5" />
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <HiX className="w-6 h-6" />
          ) : (
            <HiMenuAlt3 className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden fixed inset-x-0 top-[56px] glass-nav transition-all duration-300 overflow-hidden",
          mobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-5 py-4 flex flex-col gap-3">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className={cn(
                "text-left text-base font-medium py-2 px-3 rounded-lg transition-colors",
                activeSection === item.href.slice(1)
                  ? "text-purple-400 bg-purple-500/10"
                  : "text-zinc-400 hover:text-foreground hover:bg-zinc-800/50"
              )}
            >
              {item.label}
            </button>
          ))}
          <div className="flex gap-4 pt-2 px-3 border-t border-zinc-800">
            {socials.map((s) => {
              const Icon = s.Icon;
              return (
                <Link
                  href={s.link}
                  key={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-zinc-400 hover:text-purple-400 transition-colors py-2"
                >
                  <Icon className="w-5 h-5" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
