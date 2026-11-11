"use client";

import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

import { SERVICES } from "@/constants";
import { slideInFromTop } from "@/lib/motion";

export const Services = () => {
  return (
    <section
      id="services"
      className="flex flex-col items-center justify-center py-12 px-6 md:px-10 z-[20] w-full"
    >
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[12px] border border-[#7042f88b] opacity-[0.9] mb-4"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h2 className="Welcome-text text-[13px] font-medium tracking-wide">
          WEBTAGONS Capabilities
        </h2>
      </motion.div>

      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pb-12 text-center">
        Our Services
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1240px]">
        {SERVICES.map((service) => (
          <div
            key={service.number}
            className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-[#03001470] backdrop-blur-sm p-6 hover:border-[#7042f88b] hover:shadow-2xl hover:shadow-[#2A0E61]/40 transition duration-300 group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-mono">
                  {service.number}
                </span>
                <span className="h-1.5 w-8 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 opacity-60"></span>
              </div>
              <h2 className="text-2xl font-semibold text-white mt-4 group-hover:text-cyan-300 transition">
                {service.title}
              </h2>
              <p className="mt-3 text-gray-300 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>

            <div className="pt-6 mt-4 border-t border-[#2A0E61]/60">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs font-semibold text-purple-400 group-hover:text-cyan-300 transition"
              >
                Consult With Us
                <span>&rarr;</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
