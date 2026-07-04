import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingCall } from "./FloatingCall";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 pt-[78px] animate-fade-in">{children}</main>
      <Footer />
      <FloatingCall />
    </div>
  );
}
