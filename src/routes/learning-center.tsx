import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Compass, Phone, Search, Tag } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import offerInternet from "@/assets/v2-offer-internet.jpg";
import offerCable from "@/assets/v2-offer-cable.jpg";
import offerWifi from "@/assets/v2-offer-wifi.jpg";
import offerStreaming from "@/assets/v2-offer-streaming.jpg";
import notebook from "@/assets/v2-notebook.jpg";
import lifestyle from "@/assets/v2-lifestyle.jpg";
import bgProcess from "@/assets/v2-bg-process.jpg";

export const Route = createFileRoute("/learning-center")({
  head: () => ({
    meta: [
      { title: "Learning Center — Internet, TV, Wireless & Smart-Home Guides | Skyconet" },
      { name: "description", content: "Educational guides and informational articles on internet technology, plan comparisons, streaming, wireless and home connectivity." },
      { property: "og:title", content: "Skyconet Learning Center" },
      { property: "og:description", content: "A growing library of plain-English guides on connectivity, plans and home networking." },
      { property: "og:url", content: "/learning-center" },
    ],
    links: [{ rel: "canonical", href: "/learning-center" }],
  }),
  component: LearningCenterPage,
});

const categories = ["All topics", "Internet Technology", "Plan Comparison", "TV & Streaming", "Wireless", "Home Wi-Fi", "Smart Home"];

const articles = [
  { c: "Internet Technology", t: "Fiber vs. Cable vs. Fixed Wireless: Which Internet Is Right for You?", d: "A side-by-side look at how each connection type performs in real homes — speed, latency, availability and cost.", img: offerInternet },
  { c: "Plan Comparison", t: "Understanding Internet Speed Tiers: Mbps, Gbps and Latency", d: "What internet speed numbers actually mean for streaming, video calls, gaming and busy households.", img: notebook },
  { c: "TV & Streaming", t: "How to Build a Streaming Stack That Replaces Cable", d: "Live TV streaming + on-demand platforms: a step-by-step way to design an entertainment mix you'll love.", img: offerStreaming },
  { c: "Wireless", t: "5G Home Internet vs. Cable: A Plain-English Comparison", d: "When the new wave of 5G home internet plans is the right call — and when sticking with cable still wins.", img: lifestyle },
  { c: "Home Wi-Fi", t: "Where to Place Your Router (and What It Actually Changes)", d: "Small placement tweaks that often deliver bigger speed improvements than upgrading the router itself.", img: offerWifi },
  { c: "Smart Home", t: "How Many Devices Can Your Wi-Fi Really Handle?", d: "A look at modern dual- and tri-band Wi-Fi, mesh systems and what 'connected device limits' really mean.", img: offerCable },
  { c: "Plan Comparison", t: "What to Ask Before You Switch Internet Providers", d: "A printable checklist of questions to ask any provider before signing up — pricing, equipment, contracts and more.", img: notebook },
  { c: "Internet Technology", t: "What Is Symmetrical Internet — And Why Does It Matter?", d: "Why upload speed quietly matters more than you think (especially for remote work and creators).", img: offerInternet },
  { c: "Home Wi-Fi", t: "Mesh Wi-Fi 6 vs. Wi-Fi 7: Should You Upgrade?", d: "A practical look at the new wave of routers and mesh systems, and which households actually benefit.", img: offerWifi },
];

function LearningCenterPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Learning Center"
        title="Informational articles for the connected household."
        subtitle="A growing library of plain-English guides on internet technology, plan comparisons, streaming, wireless and smart-home connectivity."
        bgImage={bgProcess}
      />

      {/* Search + filters */}
      <section className="relative py-12">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8 grid lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-6 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-muted" />
            <input placeholder="Search articles…" className="w-full rounded-full bg-surface border border-border pl-11 pr-4 py-3.5 text-sm outline-none focus:border-primary text-ink placeholder:text-ink-muted/70" />
          </div>
          <div className="lg:col-span-6 flex flex-wrap gap-2 justify-start lg:justify-end">
            {categories.map((c, i) => (
              <button key={c} className={`text-xs px-4 py-2 rounded-full border transition ${i === 0 ? "bg-primary text-primary-foreground border-primary" : "border-border text-ink hover:bg-surface"}`}>
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="relative py-8">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8 grid lg:grid-cols-12 gap-6">
          <Reveal className="lg:col-span-7">
            <article className="panel overflow-hidden group h-full">
              <div className="relative aspect-[16/9]">
                <img src={articles[0].img} alt="" loading="lazy" width={1600} height={900} className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition" />
                <span className="absolute top-5 left-5 chip">Featured · {articles[0].c}</span>
              </div>
              <div className="p-10">
                <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-semibold">{articles[0].c}</span>
                <h2 className="mt-3 font-display text-3xl sm:text-4xl text-ink leading-tight">{articles[0].t}</h2>
                <p className="mt-4 text-ink-muted leading-relaxed max-w-2xl">{articles[0].d}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink group-hover:text-primary transition">Read article <ArrowRight className="h-4 w-4" /></div>
              </div>
            </article>
          </Reveal>
          <div className="lg:col-span-5 grid gap-6">
            {articles.slice(1, 3).map((a) => (
              <Reveal key={a.t}>
                <article className="panel overflow-hidden group flex">
                  <div className="relative w-2/5 shrink-0">
                    <img src={a.img} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition" />
                  </div>
                  <div className="p-6 flex-1">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-semibold">{a.c}</span>
                    <h3 className="mt-2 font-display text-lg text-ink leading-snug">{a.t}</h3>
                    <div className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-ink group-hover:text-primary transition">Read <ArrowRight className="h-3.5 w-3.5" /></div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* All articles grid */}
      <section className="relative py-16">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
            <div>
              <span className="eyebrow">Browse the library</span>
              <h2 className="mt-5 font-display text-4xl text-ink leading-tight">All articles</h2>
            </div>
            <span className="inline-flex items-center gap-2 text-sm text-ink-muted"><Tag className="h-4 w-4 text-primary" /> {articles.length} articles · updated weekly</span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.slice(3).map((a, i) => (
              <Reveal key={a.t} delay={i * 60}>
                <article className="panel overflow-hidden h-full group">
                  <div className="relative aspect-[16/10]">
                    <img src={a.img} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition" />
                  </div>
                  <div className="p-7">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-semibold">{a.c}</span>
                    <h3 className="mt-3 font-display text-xl text-ink leading-snug">{a.t}</h3>
                    <p className="mt-3 text-sm text-ink-muted leading-relaxed">{a.d}</p>
                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink group-hover:text-primary transition">Read article <ArrowRight className="h-4 w-4" /></div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16">
        <div className="mx-auto max-w-[1100px] px-4 sm:px-8">
          <div className="panel p-10 sm:p-12 grid sm:grid-cols-12 items-center gap-8">
            <div className="sm:col-span-7">
              <span className="eyebrow">Stay informed</span>
              <h2 className="mt-4 font-display text-3xl text-ink leading-tight">A short, monthly briefing on what's new in home connectivity.</h2>
              <p className="mt-3 text-ink-muted text-sm">No spam, no sales pitches — just the most useful new guides, plan trends and tech explainers.</p>
            </div>
            <form className="sm:col-span-5 flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input type="email" required placeholder="you@email.com" className="flex-1 rounded-full bg-surface border border-border px-5 py-3.5 text-sm outline-none focus:border-primary text-ink placeholder:text-ink-muted/70" />
              <button className="btn-primary"><BookOpen className="h-4 w-4" /> Subscribe</button>
            </form>
          </div>
        </div>
      </section>

      <section className="relative py-10">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8 flex flex-wrap items-center justify-between gap-6 panel p-8">
          <div className="flex items-center gap-4">
            <span className="grid place-items-center h-12 w-12 rounded-xl bg-primary text-primary-foreground"><Compass className="h-5 w-5" /></span>
            <div>
              <div className="font-display text-2xl text-ink">Ready to compare plans?</div>
              <div className="text-sm text-ink-muted">Take the next step from learning to deciding.</div>
            </div>
          </div>
          <div className="flex gap-3">
            <a href="tel:#" className="btn-primary"><Phone className="h-4 w-4" /> xxx-xxx-xxxx</a>
            <Link to="/internet-services" className="btn-ghost">See internet plans <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
