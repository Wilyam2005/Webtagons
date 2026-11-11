"use client";

import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

import { CONTACT_INFO } from "@/constants";
import { slideInFromTop } from "@/lib/motion";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="relative flex flex-col items-center justify-center py-14 px-6 md:px-20 z-[20] w-full text-center"
    >
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[12px] border border-[#7042f88b] opacity-[0.9] mb-4"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h2 className="Welcome-text text-[13px] font-medium tracking-wide">
          Contact Us
        </h2>
      </motion.div>

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 max-w-[800px] leading-tight">
        Let&apos;s Build Something{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Great
        </span>{" "}
        Together.
      </h1>

      <p className="text-base md:text-lg text-gray-300 mt-6 max-w-[680px] leading-relaxed">
        Have a project in mind? Let&apos;s discuss how Webtagons can help transform
        your ideas into digital solutions.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-10 w-full max-w-[650px]">
        <a
          href={CONTACT_INFO.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto py-3.5 px-8 button-primary text-center text-white cursor-pointer rounded-lg text-base font-medium flex items-center justify-center gap-3 hover:scale-105 transition shadow-lg shadow-[#2A0E61]/50"
        >
          <FaWhatsapp className="h-6 w-6 text-green-400" />
          <span>WhatsApp ({CONTACT_INFO.whatsappNumber})</span>
        </a>

        <a
          href={CONTACT_INFO.instagramLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto py-3.5 px-8 border border-[#7042f88b] bg-[#03001490] hover:bg-[#7042f833] text-center text-white cursor-pointer rounded-lg text-base font-medium flex items-center justify-center gap-3 hover:scale-105 transition backdrop-blur-sm"
        >
          <FaInstagram className="h-6 w-6 text-pink-400" />
          <span>Instagram ({CONTACT_INFO.instagramUsername})</span>
        </a>
      </div>
    </section>
  );
};
