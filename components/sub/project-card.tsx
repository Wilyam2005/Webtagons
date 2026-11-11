"use client";

import Image from "next/image";
import { ProjectItem } from "@/constants";

type ProjectCardProps = {
  project: ProjectItem;
  onOpenDetail?: (project: ProjectItem) => void;
};

export const ProjectCard = ({ project, onOpenDetail }: ProjectCardProps) => {
  return (
    <div
      onClick={() => onOpenDetail && onOpenDetail(project)}
      className="group relative overflow-hidden rounded-xl shadow-lg border border-[#2A0E61] bg-[#03001480] backdrop-blur-md hover:border-[#7042f88b] hover:shadow-2xl hover:shadow-[#2A0E61]/50 transition-all duration-300 flex flex-col justify-between cursor-pointer"
    >
      <div>
        {/* Banner Image Container */}
        <div className="relative w-full aspect-video overflow-hidden bg-black/40">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-80" />

          {/* Badge Tag */}
          <div className="absolute top-3 left-3">
            <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full border border-[#7042f88b] bg-[#030014]/80 text-cyan-300 backdrop-blur-md shadow-md">
              {project.badge}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-5 flex flex-col gap-2">
          <span className="text-xs text-purple-400 font-medium tracking-wide uppercase">
            {project.category}
          </span>
          <h2 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2 leading-snug">
            {project.title}
          </h2>
          <p className="text-sm text-gray-300 line-clamp-3 leading-relaxed mt-1">
            {project.summary}
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-[#2A0E61]/60">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#7042f81a] border border-[#7042f833] text-gray-300"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md text-gray-400">
                +{project.techStack.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Action Link */}
      <div className="px-5 pb-5 pt-2">
        <button
          type="button"
          className="w-full py-2.5 px-4 rounded-lg border border-[#7042f88b] bg-[#7042f815] group-hover:bg-[#7042f833] text-white text-xs font-medium flex items-center justify-between transition-colors shadow-sm"
        >
          <span>Lihat Penjelasan Lengkap</span>
          <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
        </button>
      </div>
    </div>
  );
};
