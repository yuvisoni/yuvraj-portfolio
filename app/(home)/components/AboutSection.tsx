"use client";

import React from "react";
import { motion } from "framer-motion";
import Title from "./Title";
import { Code2, Brain, Lightbulb } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description:
        "Exploring intelligent systems, from machine learning algorithms to generative AI and natural language processing.",
    },
    {
      icon: Code2,
      title: "Software Development",
      description:
        "Building practical applications with clean code, combining Python, web technologies and modern frameworks.",
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description:
        "Turning ideas into real-world solutions through experimentation, creativity and strong engineering fundamentals.",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <Title
            text="About Me"
            className="flex flex-col items-center justify-center mb-12"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Text content */}
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg text-zinc-300 leading-relaxed">
              I&apos;m a Computer Science Engineering student passionate about{" "}
              <span className="text-purple-400 font-medium">
                Artificial Intelligence
              </span>
              ,{" "}
              <span className="text-purple-400 font-medium">
                Machine Learning
              </span>
              ,{" "}
              <span className="text-purple-400 font-medium">
                Generative AI
              </span>{" "}
              and software development.
            </p>

            <p className="text-base text-zinc-400 leading-relaxed">
              I enjoy exploring emerging technologies and building intelligent,
              practical applications that solve real-world problems. With
              experience in Python, machine learning, NLP and software
              development, I continuously explore new technologies, experiment
              with ideas and develop projects that combine creativity with
              engineering.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              <p className="text-sm text-zinc-400">
                2nd Year Computer Science Engineering Student
              </p>
            </div>
          </motion.div>

          {/* Right - Highlight Cards */}
          <div className="space-y-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  className="glass-card p-5 flex items-start gap-4 group cursor-default"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20 transition-colors shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
