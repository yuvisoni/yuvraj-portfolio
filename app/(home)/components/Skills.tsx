"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Title from "./Title";
import {
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiScikitlearn,
  SiStreamlit,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import {
  Brain,
  Code2,
  Globe,
  Users,
  Cpu,
  Sparkles,
  MessageSquare,
  BarChart3,
  Target,
  Handshake,
} from "lucide-react";
import { IconType } from "react-icons";

type SkillItem = {
  text: string;
  Icon: IconType | React.ComponentType<{ className?: string }>;
};

type SkillCategory = {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: SkillItem[];
  color: string;
};

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: Code2,
    color: "purple",
    skills: [
      { text: "Python", Icon: SiPython },
      { text: "Java", Icon: FaJava },
      { text: "JavaScript", Icon: SiJavascript },
    ],
  },
  {
    title: "Core Computer Science",
    icon: Cpu,
    color: "violet",
    skills: [
      { text: "Data Structures & Algorithms", Icon: BarChart3 },
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    color: "purple",
    skills: [
      { text: "Machine Learning", Icon: Brain },
      { text: "Generative AI", Icon: Sparkles },
      { text: "Natural Language Processing", Icon: MessageSquare },
      { text: "Scikit-learn", Icon: SiScikitlearn },
    ],
  },
  {
    title: "Web Development",
    icon: Globe,
    color: "violet",
    skills: [
      { text: "HTML", Icon: SiHtml5 },
      { text: "CSS", Icon: SiCss3 },
      { text: "JavaScript", Icon: SiJavascript },
      { text: "Streamlit", Icon: SiStreamlit },
    ],
  },
  {
    title: "Other Skills",
    icon: Users,
    color: "purple",
    skills: [
      { text: "Leadership", Icon: Target },
      { text: "Project Management", Icon: BarChart3 },
      { text: "Communication", Icon: Handshake },
    ],
  },
];

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20 relative">
      <div className="glow-purple-sm absolute top-1/2 left-0 -z-10" />

      <div className="max-w-7xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <Title
            text="Skills"
            className="flex flex-col items-center justify-center mb-12"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => {
            const CatIcon = category.icon;
            return (
              <motion.div
                key={category.title}
                className="glass-card p-6 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: catIndex * 0.1 }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`p-2 rounded-lg ${
                      category.color === "purple"
                        ? "bg-purple-500/10 text-purple-400"
                        : "bg-violet-500/10 text-violet-400"
                    }`}
                  >
                    <CatIcon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Grid */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => {
                    const SkillIcon = skill.Icon;
                    const isHovered = hoveredSkill === skill.text;
                    return (
                      <div
                        key={skill.text}
                        className={`relative flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all duration-200 cursor-default ${
                          isHovered
                            ? "bg-purple-500/15 text-purple-300 ring-1 ring-purple-500/30"
                            : "bg-zinc-800/60 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-300"
                        }`}
                        onMouseEnter={() => setHoveredSkill(skill.text)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <SkillIcon className="w-3.5 h-3.5 shrink-0" />
                        <span className="font-medium">{skill.text}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
