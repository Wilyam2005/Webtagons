"use client";

import { useEffect, useRef } from "react";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const About = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center py-12 px-6 md:px-16 z-[20] w-full"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14 w-full max-w-[1340px]">
        {/* Left Column: About Copy */}
        <div className="w-full lg:w-[46%] flex flex-col gap-6 text-start">
          <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-[8px] px-[12px] border border-[#7042f88b] opacity-[0.9] self-start"
          >
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
            <h2 className="Welcome-text text-[13px] font-medium tracking-wide">
              About Webtagons
            </h2>
          </motion.div>

          <motion.div
            variants={slideInFromLeft(0.5)}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
          >
            <span>
              Empowering Growth Through{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                Smart Technology
              </span>
            </span>
          </motion.div>

          <motion.div
            variants={slideInFromLeft(0.8)}
            className="flex flex-col gap-4 text-gray-300 text-base leading-relaxed"
          >
            <p>
              Webtagons Indonesia merupakan penyedia layanan pengembangan solusi digital
              yang berfokus pada pembuatan website, aplikasi berbasis web, dan sistem
              informasi yang disesuaikan dengan kebutuhan bisnis maupun organisasi.
            </p>
            <p>
              Kami percaya bahwa teknologi bukan sekadar alat, melainkan solusi untuk
              meningkatkan efisiensi, memperluas jangkauan, dan menciptakan pengalaman
              digital yang lebih baik.
            </p>
            <p>
              Melalui pendekatan yang kolaboratif dan berorientasi pada kebutuhan
              pengguna, Webtagons berkomitmen menghadirkan produk digital yang fungsional,
              adaptif, dan berkelanjutan.
            </p>
          </motion.div>

          <motion.div
            variants={slideInFromLeft(1)}
            className="flex items-center gap-4 pt-2"
          >
            <a
              href="#services"
              className="py-3 px-6 button-primary text-center text-white cursor-pointer rounded-lg text-sm font-medium hover:scale-105 transition shadow-md shadow-[#2A0E61]/50"
            >
              Explore Our Services
            </a>
          </motion.div>
        </div>

        {/* Right Column: Video Logo Showcase (Enlarged, Looping, No Playback Controls) */}
        <motion.div
          variants={slideInFromRight(0.8)}
          className="w-full lg:w-[54%] flex flex-col items-center justify-center"
        >
          <div className="relative rounded-2xl overflow-hidden border border-[#7042f88b] shadow-2xl shadow-[#2A0E61]/60 bg-[#030014]/70 backdrop-blur-md p-3 w-full max-w-[760px]">
            <div className="w-full flex items-center justify-between pb-2.5 px-1.5 text-xs text-gray-400">
              <span className="flex items-center gap-2 font-medium">
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
                Official Brand Showcase
              </span>
              <span className="text-gray-400 font-mono tracking-wider font-semibold">WEBTAGONS</span>
            </div>
            {/* Video container — overflow:hidden clips any browser-injected control UI */}
            <div className="w-full overflow-hidden rounded-xl bg-black/40 relative">
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                disablePictureInPicture
                style={{ pointerEvents: "none", display: "block" }}
                className="w-full h-auto rounded-xl object-contain"
              >
                <source src="/videos/logo-webtagons.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* Invisible overlay to block any native control interaction */}
              <div className="absolute inset-0 z-10" aria-hidden="true" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
