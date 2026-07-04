import { Phone } from "lucide-react";

export function FloatingCall() {
  return (
    <a
      href="tel:#"
      aria-label="Call now"
      className="fixed bottom-6 right-6 z-40 group inline-flex items-center"
    >
      <span className="hidden sm:inline-flex items-center gap-2 rounded-full bg-background border border-border text-ink pl-5 pr-6 py-3 text-sm font-semibold shadow-elegant mr-[-22px] opacity-0 group-hover:opacity-100 group-hover:mr-2 transition-all duration-300">
        Call xxx-xxx-xxxx
      </span>
      <span className="relative grid place-items-center h-16 w-16 rounded-full bg-primary text-primary-foreground shadow-glow group-hover:scale-110 transition-transform">
        <span className="absolute inset-0 rounded-full bg-accent/70 animate-pulse-ring" />
        <span className="absolute inset-0 rounded-full bg-primary/60 animate-pulse-ring" style={{ animationDelay: "0.8s" }} />
        <Phone className="relative h-6 w-6" />
      </span>
    </a>
  );
}
