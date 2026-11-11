"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-center px-5 md:px-20 mt-24 md:mt-40 w-full z-[20] gap-6 md:gap-10"
    >
      <div className="h-full w-full flex flex-col gap-4 md:gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[12px] border border-[#7042f88b] bg-[#030014]/80 opacity-[0.9] md:bg-transparent"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px] font-medium tracking-wide drop-shadow-[0_1px_6px_rgba(3,0,20,0.9)] md:drop-shadow-none">
            WEBTAGONS Indonesia
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-4 md:gap-6 mt-2 md:mt-4 text-3xl sm:text-5xl md:text-6xl font-bold text-white max-w-[650px] w-auto h-auto leading-tight"
        >
          <span>
            Building{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Digital Solutions
            </span>{" "}
            That Move Your Business Forward.
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-[15px] md:text-lg text-gray-300 md:text-gray-400 my-2 md:my-4 max-w-[600px] leading-relaxed"
        >
          Webtagons Indonesia menghadirkan solusi digital melalui pengembangan website,
          aplikasi berbasis web, sistem informasi, dan platform digital yang dirancang
          untuk membantu bisnis, lembaga, serta organisasi berkembang di era teknologi.
        </motion.p>

        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-col sm:flex-row flex-wrap items-center gap-3 sm:gap-4 mt-2"
        >
          <a
            href="#services"
            className="w-full sm:w-auto py-3 px-4 sm:px-6 button-primary text-center text-white cursor-pointer rounded-lg text-sm font-medium hover:scale-105 transition shadow-md shadow-[#2A0E61]/50"
          >
            Explore Our Services
          </a>
          <a
            href="#portfolio"
            className="w-full sm:w-auto py-3 px-4 sm:px-6 border border-[#7042f88b] bg-[#03001480] hover:bg-[#7042f833] text-center text-white cursor-pointer rounded-lg text-sm font-medium hover:scale-105 transition backdrop-blur-sm"
          >
            View Our Portfolio
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto py-3 px-4 sm:px-6 border border-[#7042f88b] bg-[#03001480] hover:bg-[#7042f833] text-center text-white cursor-pointer rounded-lg text-sm font-medium hover:scale-105 transition backdrop-blur-sm"
          >
            Contact Us
          </a>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="hidden md:flex w-full h-full justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none object-contain"
        />
      </motion.div>
    </motion.div>
  );
};
