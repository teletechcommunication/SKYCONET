import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone, Tv, MonitorPlay, Film, Radio, CheckCircle2, ShieldCheck } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import offerCable from "@/assets/v2-offer-cable.jpg";
import offerStreaming from "@/assets/v2-offer-streaming.jpg";
import lifestyle from "@/assets/v2-lifestyle.jpg";
import bgHelp from "@/assets/v2-bg-help.jpg";

export const Route = createFileRoute("/tv-streaming")({
  head: () => ({
    meta: [
      { title: "TV & Streaming — Compare Cable, Live TV & Streaming Platforms | Skyconet" },
      { name: "description", content: "Explore traditional cable TV alongside today's streaming and live-TV platforms. Build the home entertainment mix that fits your household." },
      { property: "og:title", content: "TV & Streaming — Skyconet" },
      { property: "og:description", content: "Educational comparisons of cable, satellite, live-TV streaming and on-demand platforms." },
      { property: "og:url", content: "/tv-streaming" },
    ],
    links: [{ rel: "canonical", href: "/tv-streaming" }],
  }),
  component: TvStreamingPage,
});

const options = [
  { icon: Tv, eyebrow: "Cable TV", title: "Traditional Cable Lineups", img: offerCable,
    desc: "Time-tested channel bundles featuring live news, local sports and a deep library of cable networks — often bundled with internet plans for added value.",
    points: ["Local & regional channels", "Live news & sports", "Strong bundle discounts", "Familiar guide & DVR experience"] },
  { icon: MonitorPlay, eyebrow: "Live TV Streaming", title: "Live TV Streaming Services", img: offerStreaming,
    desc: "Cloud-based live TV delivered over your internet connection. Most platforms include cloud DVR, multi-stream support and a flexible channel ladder.",
    points: ["No installer visit needed", "Cloud DVR included", "Watch on multiple devices", "Month-to-month flexibility"] },
  { icon: Film, eyebrow: "On-Demand", title: "On-Demand Streaming Platforms", img: lifestyle,
    desc: "Subscription libraries of movies, originals and series. Mix two or three platforms to replicate the depth of a traditional cable bundle for less.",
    points: ["Originals & blockbusters", "Watch anywhere", "Add or cancel monthly", "Family & kids profiles"] },
  { icon: Radio, eyebrow: "Satellite", title: "Satellite TV (Where Wired Falls Short)", img: offerCable,
    desc: "A reliable option for rural and outlying areas where cable and fiber service haven't fully arrived — especially for households that love live sports.",
    points: ["Wide rural coverage", "Strong sports packages", "HD & 4K channels", "Optional add-on services"] },
];

function TvStreamingPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="TV & streaming"
        title="From classic cable to streaming-first stacks — compared in one place."
        subtitle="Build a home entertainment mix that matches how you actually watch. Cable, satellite, live-TV streaming and on-demand platforms, side-by-side."
        bgImage={bgHelp}
      />

      <section className="relative py-20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8 space-y-28">
          {options.map((s, i) => {
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
                      </div>
                    </div>
                  </div>
                  <div className={`lg:col-span-6 ${reverse ? "lg:order-1" : ""}`}>
                    <span className="eyebrow">{s.eyebrow}</span>
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
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="relative py-16">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
          <div className="panel panel-accent p-10 sm:p-12 flex flex-col lg:flex-row items-start lg:items-center gap-8 justify-between">
            <div className="flex items-start gap-5 max-w-2xl">
              <div className="grid place-items-center h-12 w-12 rounded-xl bg-accent text-accent-foreground shrink-0"><ShieldCheck className="h-5 w-5" /></div>
              <div>
                <span className="text-[11px] tracking-[0.3em] uppercase text-accent font-semibold">Build your stack</span>
                <div className="mt-2 font-display text-white text-3xl">Cable, streaming or both — pick what fits.</div>
                <p className="mt-3 text-sm text-white/85 leading-relaxed">Educational comparisons across participating providers and streaming platforms.</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="tel:#" className="btn-accent"><Phone className="h-4 w-4" /> Talk to a guide</a>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 font-semibold text-white hover:bg-white hover:text-primary transition">Get my recommendation <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
