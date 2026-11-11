import type { PropsWithChildren } from "react";

import { Footer } from "@/components/main/footer";
import { Navbar } from "@/components/main/navbar";

// This layout wraps ONLY the main site pages (homepage).
// /portfolio uses its own standalone layout without Navbar/Footer.
export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
