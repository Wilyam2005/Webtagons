"use client";

import { useState } from "react";
import Image from "next/image";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { FaWhatsapp, FaTimes, FaCheckCircle, FaLayerGroup, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS, ProjectItem } from "@/constants";
import { slideInFromTop } from "@/lib/motion";

// Only 3 featured projects shown on homepage
const FEATURED_IDS = ["fg-diy", "alc-yayasan", "sim-tbm-alc"];

export const Projects = () => {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const featuredProjects = PROJECTS.filter((p) => FEATURED_IDS.includes(p.id));

  return (
    <section
      id="portfolio"
      className="flex flex-col items-center justify-center py-14 px-6 md:px-12 z-[20] w-full relative"
    >
      {/* Section Header */}
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[14px] border border-[#7042f88b] opacity-[0.9] mb-4"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h2 className="Welcome-text text-[13px] font-medium tracking-wide">
          WEBTAGONS Portfolio Showcase
        </h2>
      </motion.div>

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-center">
        Our Portfolio &amp; Projects
      </h1>

      <p className="text-gray-300 text-sm sm:text-base max-w-[760px] text-center mt-4 leading-relaxed">
        Kumpulan proyek digital nyata yang telah kami rancang dan implementasikan—mencakup
        sistem informasi manajemen, e-learning vokasi, e-voting terenkripsi, smart library AI,
        aplikasi mobile, dan portal smart tourism.
      </p>

      {/* Featured Project Grid — 3 cards only */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1340px] mt-10">
        {featuredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpenDetail={(p) => setActiveProject(p)}
          />
        ))}
      </div>

      {/* "Selengkapnya" CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-10 flex flex-col items-center gap-3"
      >
        <a
          href="/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 py-3 px-8 button-primary text-white rounded-xl text-sm font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-[#2A0E61]/50 border border-[#7042f88b]"
        >
          <span>Lihat Semua Proyek</span>
          <FaArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform duration-300" />
        </a>
        <span className="text-xs text-gray-500">
          {PROJECTS.length} proyek tersedia — terbuka di tab baru
        </span>
      </motion.div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-[850px] max-h-[90vh] overflow-y-auto rounded-2xl border border-[#7042f88b] bg-[#030014] p-6 sm:p-8 shadow-2xl shadow-[#2A0E61]/70 z-10 custom-scrollbar text-left"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                aria-label="Tutup modal"
                className="absolute top-5 right-5 p-2 rounded-full bg-[#7042f822] hover:bg-[#7042f855] text-gray-300 hover:text-white transition-colors border border-[#7042f844] z-20"
              >
                <FaTimes className="h-4 w-4" />
              </button>

              {/* Modal Banner Image */}
              <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-[#2A0E61] bg-black/60 shadow-lg">
                <Image
                  src={activeProject.image}
                  alt={activeProject.title}
                  fill
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full border border-[#7042f88b] bg-[#030014]/90 text-cyan-300 backdrop-blur-md">
                    {activeProject.badge}
                  </span>
                </div>
              </div>

              {/* Title & Category */}
              <div className="mt-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-purple-400">
                  {activeProject.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1 leading-snug">
                  {activeProject.title}
                </h2>
              </div>

              {/* Overview & Description */}
              <div className="mt-5">
                <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-2 flex items-center gap-2">
                  <FaLayerGroup className="text-purple-400" />
                  Gambaran Umum Proyek
                </h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed bg-[#7042f80d] p-4 rounded-xl border border-[#7042f822]">
                  {activeProject.description}
                </p>
              </div>

              {/* Key Features */}
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">
                  Fitur &amp; Komponen Utama
                </h3>
                <ul className="space-y-2.5">
                  {activeProject.features.map((feat, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm text-gray-300"
                    >
                      <FaCheckCircle className="text-cyan-400 mt-1 flex-shrink-0 h-4 w-4" />
                      <span className="leading-relaxed">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Target User & Impact */}
              {(activeProject.targetUser || activeProject.impact) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 pt-5 border-t border-[#2A0E61]/60">
                  {activeProject.targetUser && (
                    <div className="bg-[#030014]/80 p-3.5 rounded-lg border border-[#7042f822]">
                      <span className="text-xs font-semibold text-purple-400 block mb-1">
                        Target Pengguna:
                      </span>
                      <p className="text-xs text-gray-300 leading-relaxed">
                        {activeProject.targetUser}
                      </p>
                    </div>
                  )}
                  {activeProject.impact && (
                    <div className="bg-[#030014]/80 p-3.5 rounded-lg border border-[#7042f822]">
                      <span className="text-xs font-semibold text-cyan-400 block mb-1">
                        Manfaat &amp; Dampak:
                      </span>
                      <p className="text-xs text-gray-300 leading-relaxed">
                        {activeProject.impact}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Tech Stack */}
              <div className="mt-6">
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Teknologi &amp; Infrastruktur
                </h3>
                <div className="flex flex-wrap gap-2">
                  {activeProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-3 py-1 rounded-md bg-[#7042f81a] border border-[#7042f844] text-purple-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Action Buttons */}
              <div className="mt-8 pt-5 border-t border-[#2A0E61] flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setActiveProject(null)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-[#7042f844] text-gray-300 hover:text-white text-xs font-medium transition-colors"
                >
                  Tutup
                </button>
                <a
                  href={`https://wa.me/6285190066709?text=Halo%20Webtagons,%20saya%20tertarik%20konsultasi%20mengenai%20proyek%20${encodeURIComponent(
                    activeProject.title
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto py-2.5 px-6 button-primary text-center text-white cursor-pointer rounded-lg text-xs font-medium flex items-center justify-center gap-2 hover:scale-105 transition shadow-lg shadow-[#2A0E61]/50"
                >
                  <FaWhatsapp className="h-4 w-4 text-green-400" />
                  <span>Konsultasikan Proyek Serupa</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
