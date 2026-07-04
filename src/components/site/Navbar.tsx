import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Phone, X, ArrowUpRight } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/internet-services", label: "Internet" },
  { to: "/tv-streaming", label: "TV & Streaming" },
  { to: "/wireless", label: "Wireless" },
  { to: "/learning-center", label: "Learning" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className={`transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border shadow-soft"
          : "bg-transparent border-b border-transparent"
      }`}>
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
          <nav className="flex items-center justify-between gap-6 h-[78px]">
            <Link to="/" className="flex items-center gap-3 group shrink-0">
              <img src="/logo.svg" alt="Skyconet" className="h-9 sm:h-10 w-auto" />
            </Link>

            <ul className="hidden xl:flex items-center gap-1 rounded-full border border-border bg-background/60 backdrop-blur-md p-1">
              {links.map((l) => {
                const active = pathname === l.to;
                return (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition ${
                        active
                          ? "bg-primary text-primary-foreground shadow-soft"
                          : "text-ink hover:bg-surface"
                      }`}
                    >
                      {l.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="hidden md:flex items-center gap-3">
              <a
                href="tel:#"
                className="hidden 2xl:inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-primary transition"
              >
                <Phone className="h-3.5 w-3.5" /> xxx-xxx-xxxx
              </a>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground pl-5 pr-2 py-2 text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
              >
                Compare Plans
                <span className="grid place-items-center h-7 w-7 rounded-full bg-primary text-white group-hover:bg-accent group-hover:text-accent-foreground transition">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </div>

            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((o) => !o)}
              className="xl:hidden inline-grid place-items-center h-10 w-10 rounded-full border border-border bg-background"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </nav>

          {open && (
            <div className="xl:hidden pb-5 pt-1 animate-fade-in">
              <ul className="flex flex-col divide-y divide-border">
                {links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="flex items-center justify-between py-4 text-ink font-medium">
                      {l.label}
                      <ArrowUpRight className="h-4 w-4 text-ink-muted" />
                    </Link>
                  </li>
                ))}
              </ul>
              <a href="tel:#" className="mt-4 flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 font-semibold text-primary-foreground">
                <Phone className="h-4 w-4" /> xxx-xxx-xxxx
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
