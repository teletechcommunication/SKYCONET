import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone, Wifi, Zap, Signal, Cable, ShieldCheck, BookOpen, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import offerInternet from "@/assets/v2-offer-internet.jpg";
import offerWifi from "@/assets/v2-offer-wifi.jpg";
import lifestyle from "@/assets/v2-lifestyle.jpg";
import bgProcess from "@/assets/v2-bg-process.jpg";

export const Route = createFileRoute("/internet-services")({
  head: () => ({
    meta: [
      { title: "Internet Services — Compare Fiber, Cable, DSL & Fixed Wireless | Skyconet" },
      { name: "description", content: "Explore and compare internet plans across fiber, cable, DSL and fixed-wireless technologies from participating providers in your area." },
      { property: "og:title", content: "Internet Services — Skyconet" },
      { property: "og:description", content: "Side-by-side comparisons of internet plans, technologies and speeds — explained in plain English." },
      { property: "og:url", content: "/internet-services" },
    ],
    links: [{ rel: "canonical", href: "/internet-services" }],
  }),
  component: InternetServicesPage,
});

const technologies = [
  { icon: Zap, eyebrow: "Fiber", title: "Fiber Internet Plans",
    img: offerInternet,
    desc: "Glass-strand connections that deliver symmetrical upload and download speeds, ultra-low latency, and the headroom for video calls, cloud work and gaming.",
    points: ["Symmetrical Gbps speeds", "Lowest typical latency", "Future-proof capacity", "Great for streaming-heavy homes"] },
  { icon: Cable, eyebrow: "Cable", title: "Cable Internet Plans",
    img: lifestyle,
    desc: "Coaxial-based service that's broadly available across most metro and suburban areas, with strong download tiers and competitive multi-service bundles.",
    points: ["Wide availability", "Strong download tiers", "Often bundled with TV", "Good fit for streaming households"] },
  { icon: Signal, eyebrow: "Fixed Wireless", title: "Fixed Wireless & 5G Home Internet",
    img: offerWifi,
    desc: "Internet delivered wirelessly from a nearby tower or 5G node to an antenna at your home — flexible, often quick to install, and ideal where wired options are limited.",
    points: ["Quick installation", "Great in growing service areas", "Cable-free setup", "Competitive monthly pricing"] },
  { icon: Wifi, eyebrow: "DSL & Hybrid", title: "DSL & Hybrid Connections",
    img: offerInternet,
    desc: "Telephone-line and hybrid connections still serving rural and outlying communities. Useful when fiber, cable or fixed wireless aren't yet available.",
    points: ["Rural availability", "Steady, dependable speeds", "Often the most affordable tier", "Bridge to future fiber rollout"] },
];

function InternetServicesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Internet services"
        title="Compare every internet technology side-by-side."
        subtitle="Fiber, cable, fixed wireless and DSL — laid out clearly so you can match the right connection type to the way your household actually uses the internet."
        bgImage={bgProcess}
      />

      {/* ZIG-ZAG TECH ROWS */}
      <section className="relative py-20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8 space-y-28">
          {technologies.map((s, i) => {
            const reverse = i % 2 === 1;
            return (
              <Reveal key={s.title}>
                <article className="grid lg:grid-cols-12 gap-10 items-center">
                  <div className={`lg:col-span-6 ${reverse ? "lg:order-2" : ""}`}>
                    <div className="relative">
                      <div className="absolute -inset-3 bg-accent/20 blur-3xl rounded-full" />
                      <div className="relative panel p-0 overflow-hidden aspect-[5/4] group">
                        <img src={s.img} alt={s.title} loading="lazy" width={1280} height={1024} className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute top-5 left-5"><span className="chip">{s.eyebrow}</span></div>
                        <div className="absolute bottom-5 right-5">
                          <span className="font-display serif-italic text-7xl text-white/40">{String(i + 1).padStart(2, "0")}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`lg:col-span-6 ${reverse ? "lg:order-1" : ""}`}>
                    <span className="eyebrow">{s.eyebrow} · {String(i + 1).padStart(2, "0")} / {String(technologies.length).padStart(2, "0")}</span>
                    <h2 className="mt-5 font-display text-4xl sm:text-5xl font-medium text-ink leading-[1.05] tracking-[-0.025em]">{s.title}</h2>
                    <p className="mt-5 text-ink-muted leading-relaxed max-w-xl">{s.desc}</p>
                    <ul className="mt-7 grid sm:grid-cols-2 gap-x-6 gap-y-3">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-start gap-2.5 text-sm text-ink/85">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-ink-muted">
                      <span className="h-px w-8 bg-primary" />
                      Educational comparison · Plans vary by area
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* SPEED TIERS GRID */}
      <section className="relative py-20 bg-surface/50 border-y border-border">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-8 mb-12">
            <div>
              <span className="eyebrow">Speed tier primer</span>
              <h2 className="mt-5 font-display text-4xl sm:text-5xl text-ink leading-tight">What internet speeds <span className="serif-italic text-primary">actually mean.</span></h2>
            </div>
            <Link to="/learning-center" className="btn-ghost"><BookOpen className="h-4 w-4" /> Read full guide</Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: "25–100 Mbps", d: "Comfortable for browsing, email and a couple of HD streams across a small household." },
              { t: "200–500 Mbps", d: "A solid sweet spot for streaming-heavy households, video calls and connected devices." },
              { t: "1 Gbps (Gigabit)", d: "Great for power users, multi-person households, gaming and large-file uploads." },
              { t: "2 Gbps+", d: "Future-ready for serious creators, smart-home superusers and households with many simultaneous streams." },
            ].map((s) => (
              <div key={s.t} className="panel p-7">
                <div className="font-display text-3xl text-primary">{s.t}</div>
                <p className="mt-3 text-sm text-ink-muted leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
          <div className="panel panel-accent p-10 sm:p-12 flex flex-col lg:flex-row items-start lg:items-center gap-8 justify-between">
            <div className="flex items-start gap-5 max-w-2xl">
              <div className="grid place-items-center h-12 w-12 rounded-xl bg-accent text-accent-foreground shrink-0">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[11px] tracking-[0.3em] uppercase text-accent font-semibold">No pressure</span>
                <div className="mt-2 font-display text-white text-3xl">See what fiber, cable and fixed wireless look like in your area.</div>
                <p className="mt-3 text-sm text-white/85 leading-relaxed">Plug in your ZIP, browse the comparisons, then choose a participating provider on your own terms.</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="tel:#" className="btn-accent"><Phone className="h-4 w-4" /> Talk to a guide</a>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 font-semibold text-white hover:bg-white hover:text-primary transition">Compare in my ZIP <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
