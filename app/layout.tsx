import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { PropsWithChildren } from "react";

import { StarsCanvas } from "@/components/main/star-background";
import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#030014",
};

export const metadata: Metadata = siteConfig;

// Root layout: shared shell (bg, stars, fonts).
// Navbar & Footer are injected ONLY by app/(main)/layout.tsx — not here.
// This keeps /portfolio completely standalone (no navbar, no footer from main site).
export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="id">
      <body
        className={cn(
          "bg-[#030014] overflow-y-scroll overflow-x-hidden",
          inter.className
        )}
      >
        <StarsCanvas />
        {children}
      </body>
    </html>
  );
}
