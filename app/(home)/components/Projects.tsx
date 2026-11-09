"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Title from "./Title";
import { SiGithub } from "react-icons/si";
import { ExternalLink, X, ChevronRight } from "lucide-react";

type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features?: string[];
  tech: string[];
  github?: string;
  liveDemo?: string;
  gradient: string;
  icon: string;
};

const projects: Project[] = [
  {
    id: "cinematch",
    title: "CineMatch",
    subtitle: "Hybrid Movie Recommendation System",
    description:
      "A hybrid movie recommendation system built using Python, Streamlit and Scikit-learn. It combines Content-Based Filtering, Collaborative Filtering and Matrix Factorization to deliver personalized movie recommendations through an interactive web application.",
    tech: ["Python", "Streamlit", "Scikit-learn", "Pandas", "Machine Learning"],
    liveDemo: "https://yuvisoni-cinematch-app-ppfahe.streamlit.app/",
    gradient: "from-purple-600 to-violet-600",
    icon: "🎬",
  },
  {
    id: "trustrag",
    title: "TrustRAG",
    subtitle: "Trust-Aware Retrieval-Augmented Generation",
    description:
      "A Trust-Aware Retrieval-Augmented Generation system designed to improve the reliability of LLM-generated responses through evidence-grounded answer generation and trust evaluation.",
    tech: ["Python", "RAG", "NLP", "Generative AI"],
    github: "https://github.com/yuvisoni/TrustRAG",
    gradient: "from-violet-600 to-indigo-600",
    icon: "🔍",
  },
  {
    id: "house-price",
    title: "House Price Prediction",
    subtitle: "ML-Based Price Prediction",
    description:
      "A machine learning-based house price prediction web application built using Python, Scikit-learn and Streamlit.",
    tech: ["Python", "Scikit-learn", "Streamlit", "Machine Learning"],
    github: "https://github.com/yuvisoni/House-Price-Prediction",
    gradient: "from-purple-600 to-fuchsia-600",
    icon: "🏠",
  },
  {
    id: "smart-summarizer",
    title: "Smart-Summarizer",
    subtitle: "NLP Text Summarization Tool",
    description:
      "A Python-based NLP text summarization tool that uses TF-IDF and TextRank algorithms to extract important sentences from lengthy documents.",
    tech: ["Python", "NLP", "TF-IDF", "TextRank"],
    github: "https://github.com/yuvisoni/smart-summarizer",
    gradient: "from-indigo-600 to-purple-600",
    icon: "📝",
  },
  {
    id: "dungeon-zero",
    title: "DUNGEON ZERO",
    subtitle: "Terminal Roguelike Dungeon Crawler",
    description:
      "A high-performance terminal-based dungeon crawler developed using Nim 2.4.0.",
    features: [
      "Procedural dungeon generation",
      "BFS-based enemy pathfinding",
      "Raycasted Field of View",
      "Fog of War",
      "Turn-based combat",
      "Multi-floor progression",
      "Character leveling",
      "Inventory management",
      "Deterministic AI simulation benchmark",
      "11 automated test suites validating core game mechanics",
    ],
    tech: ["Nim 2.4.0", "Algorithms", "BFS", "Procedural Generation"],
    github: "https://github.com/yuvisoni/dungeon-zero",
    gradient: "from-fuchsia-600 to-purple-600",
    icon: "⚔️",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 relative">
      <div className="glow-purple-sm absolute bottom-1/3 right-0 -z-10" />

      <div className="max-w-7xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <Title
            text="Projects"
            className="flex flex-col items-center justify-center mb-12"
          />
          <p className="text-center text-zinc-400 mb-10 max-w-2xl mx-auto -mt-6">
            A selection of projects that showcase my exploration of AI, Machine
            Learning and Software Development.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="glass-card overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Project thumbnail */}
              <div
                className={`h-40 bg-gradient-to-br ${project.gradient} relative flex items-center justify-center overflow-hidden`}
              >
                <span className="text-5xl relative z-10 group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </span>
                {/* Decorative elements */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-3 left-3 text-white/30 text-xs font-mono">
                    {"{ }"}
                  </div>
                  <div className="absolute bottom-3 right-3 text-white/30 text-xs font-mono">
                    {"</>"}
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white/10 rounded-full" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/5 rounded-full" />
                </div>
              </div>

              {/* Project info */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-purple-400/80 mb-2 font-medium">
                  {project.subtitle}
                </p>
                <p className="text-sm text-zinc-400 line-clamp-2 mb-4">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/10"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-400">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                {/* Action buttons */}
                <div className="flex items-center gap-2">
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-md bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white transition-colors"
                    >
                      <SiGithub className="w-3.5 h-3.5" />
                      GitHub
                    </Link>
                  )}
                  {project.liveDemo && (
                    <Link
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-md bg-purple-600 text-white hover:bg-purple-700 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Demo
                    </Link>
                  )}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                    className="ml-auto text-xs text-zinc-500 hover:text-purple-400 transition-colors inline-flex items-center gap-1"
                  >
                    Details
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal */}
            <motion.div
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto glass-card p-6 sm:p-8 z-10"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${selectedProject.gradient} text-3xl mb-4`}
              >
                {selectedProject.icon}
              </div>

              <h2 className="text-2xl font-bold text-foreground mb-1">
                {selectedProject.title}
              </h2>
              <p className="text-purple-400 font-medium text-sm mb-4">
                {selectedProject.subtitle}
              </p>

              <p className="text-zinc-300 leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              {selectedProject.features && (
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3">
                    Key Features
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {selectedProject.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm text-zinc-400"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-3">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className="text-sm px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/15"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-2 border-t border-zinc-800">
                {selectedProject.github && (
                  <Link
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white transition-colors text-sm font-medium"
                  >
                    <SiGithub className="w-4 h-4" />
                    View on GitHub
                  </Link>
                )}
                {selectedProject.liveDemo && (
                  <Link
                    href={selectedProject.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors text-sm font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </Link>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
