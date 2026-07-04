import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

type AnyTo = string;

export function Footer() {
  return (
    <footer className="relative mt-32">
      <div className="relative bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent/30 blur-3xl" />
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-8 py-24 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <span className="text-[11px] tracking-[0.32em] uppercase text-accent font-semibold">Compare · Learn · Connect</span>
            <h2 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-medium leading-[0.98] tracking-tight">
              Find the right plan,<br />
              <span className="serif-italic text-accent">with confidence.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-4">
            <a href="tel:#" className="group inline-flex items-center gap-4">
              <span className="grid place-items-center h-14 w-14 rounded-full bg-accent text-accent-foreground group-hover:scale-110 transition">
                <Phone className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-[11px] uppercase tracking-[0.3em] text-primary-foreground/70">Guide line</span>
                <span className="block font-display text-3xl">xxx-xxx-xxxx</span>
              </span>
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-6 py-3 font-semibold hover:bg-background hover:text-ink transition">
              Request a callback <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="relative bg-background border-b border-border">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8 py-20 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <img src="/logo.svg" alt="Skyconet" className="h-9 w-auto" />
            </Link>
            <p className="mt-5 text-sm text-ink-muted leading-relaxed max-w-sm">
              A consumer-focused comparison and information platform for internet, TV, streaming, wireless and home connectivity options offered through participating providers.
            </p>
            <div className="flex gap-2 mt-6">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" aria-label="social" className="grid place-items-center h-9 w-9 rounded-full border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            <FooterCol title="Explore" links={[
              { to: "/internet-services", label: "Internet Services" },
              { to: "/tv-streaming", label: "TV & Streaming" },
              { to: "/wireless", label: "Wireless Solutions" },
              { to: "/home-connectivity", label: "Home Connectivity" },
            ]} />
            <FooterCol title="Learn" links={[
              { to: "/learning-center", label: "Learning Center" },
              { to: "/learning-center", label: "Technology Guides" },
              { to: "/learning-center", label: "Plan Comparisons" },
              { to: "/learning-center", label: "FAQs" },
            ]} />
            <FooterCol title="Company" links={[
              { to: "/about", label: "About Us" },
              { to: "/contact", label: "Contact" },
              { to: "/privacy", label: "Privacy" },
              { to: "/terms", label: "Terms" },
            ]} />
            <div>
              <h4 className="text-[11px] tracking-[0.32em] uppercase text-primary font-semibold mb-5">Reach Us</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3 text-ink-muted">
                  <Phone className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                  <a href="tel:#" className="hover:text-ink">xxx-xxx-xxxx</a>
                </li>
                <li className="flex items-start gap-3 text-ink-muted">
                  <Mail className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                  <a href="mailto:support@skyconet.com" className="hover:text-ink">support@skyconet.com</a>
                </li>
                <li className="flex items-start gap-3 text-ink-muted">
                  <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                  <span>48 states nationwide</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-surface border-b border-border">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8 py-8">
          <p className="text-xs leading-relaxed text-ink-muted max-w-5xl">
            <strong className="text-ink">Platform disclosure —</strong> Skyconet is a consumer-focused comparison and information platform. We do not own or operate any internet, TV, streaming or wireless network infrastructure. Plan availability, pricing, speeds and features are subject to change and depend on the participating provider serving your address. Brand and provider names are referenced for informational purposes only — all trademarks belong to their respective owners.
          </p>
        </div>
      </div>
      <div className="bg-background">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-ink-muted">
          <p>© {new Date().getFullYear()} Skyconet. All rights reserved.</p>
          <div className="flex flex-wrap gap-6">
            <Link to="/privacy" className="hover:text-ink">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-ink">Terms of Service</Link>
            <Link to="/refund-policy" className="hover:text-ink">Refund Policy</Link>
            <Link to="/disclaimer" className="hover:text-ink">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { to: AnyTo; label: string }[] }) {
  return (
    <div>
      <h4 className="text-[11px] tracking-[0.32em] uppercase text-primary font-semibold mb-5">{title}</h4>
      <ul className="space-y-3 text-sm">
        {links.map((l, i) => (
          <li key={`${l.to}-${i}`}>
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            <Link to={l.to as any} className="text-ink-muted hover:text-ink transition">{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
