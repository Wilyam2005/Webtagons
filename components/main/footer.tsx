import Link from "next/link";

import { FOOTER_DATA } from "@/constants";

export const Footer = () => {
  return (
    <footer className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] border-t border-[#2A0E61]/40 mt-10 z-[20] relative">
      <div className="w-full max-w-[1240px] flex flex-col items-center justify-center m-auto">
        {/* Brand Summary */}
        <div className="text-center my-6 max-w-[600px] px-4">
          <div className="text-2xl font-bold tracking-wider text-white">
            WEBTAGONS
          </div>
          <p className="text-sm text-gray-400 mt-2 leading-relaxed">
            Digital solutions for businesses, organizations, and a better connected future.
          </p>
        </div>

        {/* Footer Navigation Columns */}
        <div className="w-full h-full flex flex-row items-start justify-around flex-wrap gap-8 my-6">
          {FOOTER_DATA.map((column) => (
            <div
              key={column.title}
              className="min-w-[200px] h-auto flex flex-col items-center md:items-start justify-start"
            >
              <h3 className="font-bold text-[16px] text-gray-200 mb-2">{column.title}</h3>
              {column.data.map(({ icon: Icon, name, link }) => (
                <Link
                  key={`${column.title}-${name}`}
                  href={link}
                  target={link.startsWith("http") ? "_blank" : undefined}
                  rel={link.startsWith("http") ? "noreferrer noopener" : undefined}
                  className="flex flex-row items-center my-[10px] text-gray-400 hover:text-[rgb(112,66,248)] transition"
                >
                  {Icon && <Icon className="h-4 w-4" />}
                  <span className="text-[14px] ml-[8px]">{name}</span>
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-8 mb-[20px] text-[14px] text-center text-gray-400">
          &copy; Webtagons Indonesia {new Date().getFullYear()}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
