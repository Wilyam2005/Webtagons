"use client";

import { useState } from "react";
import Image from "next/image";
import { SparklesIcon } from "@heroicons/react/24/solid";
import {
  FaWhatsapp,
  FaTimes,
  FaCheckCircle,
  FaLayerGroup,
  FaInstagram,
  FaHome,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS, ProjectItem } from "@/constants";
import { StarsCanvas } from "@/components/main/star-background";

const CATEGORIES = [
  "Semua Proyek",
  "Online Voting System",
  "Learning Management System",
  "Digital Platform & Information System",
  "Custom Web Application",
  "Website Development",
  "Company Profile Website",
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("Semua Proyek");
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    selectedCategory === "Semua Proyek"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="relative min-h-screen w-full bg-[#030014] overflow-hidden">
      {/* Stars Background */}
      <StarsCanvas />

      {/* Top Navigation Bar (minimal — no main layout nav) */}
      <div className="relative z-20 w-full border-b border-[#2A0E61]/50 bg-[#030014]/80 backdrop-blur-md">
        <div className="max-w-[1340px] mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo.png"
              alt="Webtagons Logo"
              width={36}
              height={36}
              className="object-contain"
            />
            <span className="text-white font-bold text-lg tracking-wide group-hover:text-purple-300 transition-colors">
              WEBTAGONS
            </span>
          </a>

          {/* Back to home */}
          <a
            href="/"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors border border-[#2A0E61] hover:border-[#7042f88b] rounded-lg px-4 py-2"
          >
            <FaHome className="h-3.5 w-3.5" />
            <span>Kembali ke Beranda</span>
          </a>
        </div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 w-full max-w-[1340px] mx-auto px-6 md:px-12 py-16">
        {/* Page Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="Welcome-box py-[8px] px-[14px] border border-[#7042f88b] opacity-[0.9] mb-5"
          >
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
            <h2 className="Welcome-text text-[13px] font-medium tracking-wide">
              WEBTAGONS — Semua Proyek
            </h2>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
          >
            Portfolio &amp; Projects
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-300 text-sm sm:text-base max-w-[720px] mt-4 leading-relaxed"
          >
            Kumpulan proyek digital nyata yang telah kami rancang dan
            implementasikan—mencakup sistem informasi manajemen, e-learning
            vokasi, e-voting terenkripsi, smart library AI, aplikasi mobile, dan
            portal smart tourism.
          </motion.p>
        </div>

        {/* Category Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-[1000px] mx-auto"
        >
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            const count =
              cat === "Semua Proyek"
                ? PROJECTS.length
                : PROJECTS.filter((p) => p.category === cat).length;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs px-4 py-2 rounded-full border transition-all duration-300 font-medium ${
                  isActive
                    ? "border-[#7042f8] bg-[#7042f833] text-white shadow-lg shadow-[#7042f8]/30 scale-105"
                    : "border-[#2A0E61] bg-[#03001480] text-gray-400 hover:text-white hover:border-[#7042f88b]"
                }`}
              >
                {cat}
                <span
                  className={`ml-1.5 text-[10px] font-mono ${
                    isActive ? "text-cyan-300" : "text-gray-600"
                  }`}
                >
                  ({count})
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Project Count */}
        <div className="text-center mb-8 text-xs text-gray-500">
          Menampilkan{" "}
          <span className="text-purple-400 font-semibold">
            {filteredProjects.length}
          </span>{" "}
          dari {PROJECTS.length} proyek
        </div>

        {/* Project Grid — All projects */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
              >
                <ProjectCard
                  project={project}
                  onOpenDetail={(p) => setActiveProject(p)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Footer CTA */}
        <div className="mt-20 pt-10 border-t border-[#2A0E61]/50 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/6285190066709?text=Halo%20Webtagons,%20saya%20ingin%20konsultasi%20mengenai%20proyek%20digital%20saya."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 py-3 px-7 button-primary text-white rounded-xl text-sm font-semibold hover:scale-105 transition-all shadow-lg shadow-[#2A0E61]/50 border border-[#7042f88b]"
          >
            <FaWhatsapp className="h-4 w-4 text-green-400" />
            <span>Konsultasi via WhatsApp</span>
          </a>
          <a
            href="https://www.instagram.com/webtagons/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 py-3 px-7 rounded-xl text-sm font-semibold text-gray-300 hover:text-white border border-[#2A0E61] hover:border-[#7042f88b] transition-all"
          >
            <FaInstagram className="h-4 w-4 text-pink-400" />
            <span>Follow di Instagram</span>
          </a>
        </div>

        <p className="text-center text-xs text-gray-600 mt-8">
          © {new Date().getFullYear()} Webtagons Indonesia. All rights reserved.
        </p>
      </main>

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

              {/* CTA Buttons */}
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
    </div>
  );
}
