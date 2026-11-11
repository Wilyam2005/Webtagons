'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { NAV_LINKS, SOCIALS } from "@/constants";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full h-[60px] md:h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001427] backdrop-blur-md z-50 px-4 md:px-10">
      {/* Navbar Container */}
      <div className="w-full h-full flex items-center justify-between m-auto px-1 md:px-[10px]">
        {/* Logo + Name */}
        <Link
          href="#home"
          className="flex items-center"
        >
          <Image
            src="/logo.png"
            alt="Webtagons Logo"
            width={50}
            height={50}
            draggable={false}
            className="h-9 w-9 cursor-pointer object-contain md:h-[50px] md:w-[50px]"
          />
          <div className="hidden md:flex font-bold ml-[10px] text-gray-200 tracking-wider text-base">
            WEBTAGONS
          </div>
        </Link>

        {/* Web Navbar */}
        <div className="hidden md:flex w-[520px] h-full flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-around w-full h-auto border border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200 text-sm">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer hover:text-[rgb(112,66,248)] transition font-medium"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Social Icons (Web) */}
        <div className="hidden md:flex flex-row gap-5">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={name}
              title={name}
              className="text-white hover:text-[rgb(112,66,248)] transition"
            >
              <Icon className="h-6 w-6" />
            </Link>
          ))}
        </div>

        {/* Hamburger Menu */}
        <button
          className="md:hidden text-white focus:outline-none text-3xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[65px] left-0 w-full bg-[#030014] border-b border-[#7042f88b] p-5 flex flex-col items-center text-gray-300 md:hidden shadow-xl">
          {/* Links */}
          <div className="flex flex-col items-center gap-4 w-full">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer hover:text-[rgb(112,66,248)] transition text-center py-2 w-full font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mt-6 pt-4 border-t border-[#7042f833] w-full">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                key={name}
                title={name}
                className="text-white hover:text-[rgb(112,66,248)] transition"
              >
                <Icon className="h-8 w-8" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
