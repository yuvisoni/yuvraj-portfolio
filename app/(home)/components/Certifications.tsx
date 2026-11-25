"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Title from "./Title";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Generative AI Foundations Certificate",
    link: "https://lnkd.in/p/dGBsSimb",
    icon: "🤖",
  },
  {
    title: "Ultimate Web Development Course",
    link: "https://lnkd.in/p/drn3AtA8",
    icon: "🌐",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <Title
            text="Certifications"
            className="flex flex-col items-center justify-center mb-12"
          />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              className="glass-card p-6 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-purple-500/10 text-3xl shrink-0 group-hover:bg-purple-500/15 transition-colors">
                  {cert.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-4 h-4 text-purple-400 shrink-0" />
                    <span className="text-xs font-medium text-purple-400 uppercase tracking-wider">
                      Certificate
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-4 leading-snug">
                    {cert.title}
                  </h3>
                  <Link
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    View Certificate
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education mini-section */}
        <motion.div
          className="mt-16 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="glass-card p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-purple-500/10 text-2xl mb-4">
              🎓
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-1">
              Education
            </h3>
            <div className="flex items-center justify-center gap-2 text-zinc-400">
              <span className="text-purple-400 font-medium">2nd Year</span>
              <span className="w-1 h-1 rounded-full bg-zinc-600" />
              <span>Bachelor of Engineering</span>
            </div>
            <p className="text-zinc-400 mt-1">
              Computer Science and Engineering
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
