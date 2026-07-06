import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, ArrowUpRight, BadgeCheck, BookOpen, Clock, Compass,
  HelpCircle, Lightbulb, Minus, Phone, Plus,
  Quote, ShieldCheck, Signal, Star, Tv, Wifi, Zap,
} from "lucide-react";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import CurvedLoop from "@/components/ui/CurvedLoop";
import heroBg from "@/assets/v2-hero.jpg";
import bgHelp from "@/assets/v2-bg-help.jpg";
import bgProcess from "@/assets/v2-bg-process.jpg";
import bgCta from "@/assets/v2-bg-cta.jpg";
import offerInternet from "@/assets/v2-offer-internet.jpg";
import offerCable from "@/assets/v2-offer-cable.jpg";
import offerWifi from "@/assets/v2-offer-wifi.jpg";
import offerStreaming from "@/assets/v2-offer-streaming.jpg";
import notebook from "@/assets/v2-notebook.jpg";
import portrait from "@/assets/v2-portrait.jpg";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Skyconet — Compare Internet, TV & Wireless Plans in Your Area" },
      { name: "description", content: "Explore and compare internet, TV, streaming, wireless and home connectivity options from participating providers. Educational, consumer-focused guidance — call (888) 871-9115." },
      { property: "og:title", content: "Skyconet — Connectivity Comparison & Information Platform" },
      { property: "og:description", content: "Compare fiber, cable, fixed-wireless, TV, streaming and mobile plans side-by-side. Educational content, no pressure." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const categories = [
  { img: offerInternet, icon: Wifi, title: "Internet Services",
    desc: "Compare fiber, cable, DSL and fixed-wireless plans side-by-side — speeds, technology and what each offers your household.",
    points: ["Fiber, cable & DSL explained", "Plan & speed comparisons", "Coverage availability tools"],
    href: "/internet-services" as const },
  { img: offerCable, icon: Tv, title: "TV & Streaming",
    desc: "Explore traditional cable lineups alongside today's streaming platforms so you can build the home entertainment mix that fits.",
    points: ["Cable vs. streaming overview", "Channel package basics", "Device & streaming-quality guides"],
    href: "/tv-streaming" as const },
  { img: offerWifi, icon: Signal, title: "Wireless Solutions",
    desc: "Mobile, 5G home internet and hotspot options compared in plain English — for households on the move and remote workers.",
    points: ["Mobile plan comparisons", "5G home internet explained", "Hotspot & coverage tips"],
    href: "/wireless" as const },
  { img: offerStreaming, icon: Compass, title: "Home Connectivity",
    desc: "Smart-home, Wi-Fi mesh, whole-home Wi-Fi 6/7 and bundle guidance so every room — and every device — stays connected.",
    points: ["Wi-Fi mesh & router pointers", "Smart-home connectivity tips", "Bundle decision frameworks"],
    href: "/home-connectivity" as const },
];

const benefits = [
  "Side-by-side comparison of plans, speeds and technologies across participating providers.",
  "Plain-English explanations of fiber, cable, fixed-wireless, 5G and streaming.",
  "Zero pressure — we're a comparison and information platform, not a sales floor.",
  "Educational guides, FAQs and a Learning Center built around real household questions.",
  "Coverage availability lookups by ZIP so you only see what's actually offered nearby.",
  "Privacy-respecting research — we never request provider passwords or account credentials.",
];

const process = [
  { n: "01", t: "Tell us your area", d: "Share your ZIP code so we can surface internet, TV and wireless options from participating providers serving your neighborhood." },
  { n: "02", t: "Compare side-by-side", d: "Explore plans, speeds, technologies and features in a clean, jargon-free layout — including educational notes on what each spec actually means." },
  { n: "03", t: "Choose with confidence", d: "Take the comparison directly to the provider of your choice. Subscriptions, billing and installation stay between you and them." },
];

const techGuide = [
  { icon: Zap, t: "Fiber Internet", d: "Light-speed signals over glass strands. Symmetrical upload/download, low latency — ideal for video calls, streaming and gaming." },
  { icon: Wifi, t: "Cable Internet", d: "Delivered over coaxial lines. Strong download speeds, broadly available, and a popular choice for streaming-heavy households." },
  { icon: Signal, t: "Fixed Wireless & 5G", d: "Internet beamed from a nearby tower to your home antenna. A solid option in areas where fiber or cable haven't fully arrived." },
  { icon: Tv, t: "Streaming Services", d: "On-demand TV delivered over your internet connection. Mix and match platforms to match your viewing habits — no equipment required." },
];

const testimonials = [
  { name: "Marcus J.", role: "Atlanta, GA", text: "Finally a place where fiber, cable and 5G home internet were laid out side-by-side. I picked a plan in one sitting — no sales pressure.", img: avatar1, rating: 5 },
  { name: "Priya P.", role: "Austin, TX", text: "The Learning Center articles helped me understand what 'symmetrical speed' actually means before I even compared plans. Super helpful.", img: avatar2, rating: 5 },
  { name: "Susan W.", role: "Denver, CO", text: "Loved how transparent the comparisons were. It felt like research, not a pitch — and I ended up with a better TV + internet combo.", img: avatar3, rating: 5 },
];

const faqs = [
  { q: "What does Skyconet do?", a: "Skyconet is a consumer-focused comparison and information platform. We help households explore and compare internet, TV, streaming, wireless and home connectivity options from participating providers — paired with educational guides that explain how each technology actually works." },
  { q: "Do you own the internet or TV networks you compare?", a: "No. We don't own or operate any network infrastructure. We aggregate and present plan information so you can compare options clearly and choose a provider directly." },
  { q: "Is using Skyconet free for consumers?", a: "Browsing plan comparisons, technology guides and Learning Center articles is free. If you opt in to a paid concierge assistance session, the fee is disclosed up front before anything begins." },
  { q: "How do I know what's available at my address?", a: "Enter your ZIP code on our coverage tools. We'll surface internet, TV and wireless options offered by participating providers in your area, along with educational notes on each technology." },
  { q: "Will my bill come from Skyconet?", a: "No. When you choose a plan, billing, installation and support stay with the provider you select. We're an information layer, not a reseller." },
  { q: "Do you share my information with providers?", a: "Only if you ask us to connect you. You control when, and with whom, your contact details are shared. See our Privacy Policy for full details." },
  { q: "What's the difference between fiber, cable and fixed wireless?", a: "Fiber uses light through glass strands for very fast, symmetrical speeds. Cable uses coaxial lines and is widely available with strong downloads. Fixed wireless beams internet from a nearby tower to your home — a great option where wired options are limited. Our Internet Technology Guide breaks each one down in detail." },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* ====== HERO — comparison-focused ====== */}
      <section className="relative min-h-[62vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 sticky-bg"
          style={{ backgroundImage: `url(${heroBg})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-[1400px] w-full px-4 sm:px-8 pt-2 pb-16">
          <div className="mt-2 grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-9">
              <Reveal>
                <span className="eyebrow">Connectivity comparison & information platform</span>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="mt-8 font-display text-[3rem] sm:text-7xl lg:text-[8.5rem] font-medium text-ink leading-[0.92] tracking-[-0.035em]">
                  Compare plans.<br />
                  <span className="serif-italic text-primary">Connect</span>{" "}
                  smarter.
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-8 max-w-xl text-lg text-ink/85 leading-relaxed">
                  Explore internet, TV, streaming, wireless and home connectivity options available in your area — laid out clearly, explained in plain English, and built around what your household actually needs.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-3">
              <Reveal delay={260}>
                <a href="tel:+18888719115" className="bg-white border border-border shadow-soft rounded-2xl p-5 block group">
                  <div className="text-[10px] uppercase tracking-[0.32em] text-primary font-semibold">Talk to a guide</div>
                  <div className="mt-1 font-display text-3xl text-ink">(888) 871-9115</div>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-ink group-hover:text-primary transition">
                    <Phone className="h-4 w-4" /> Tap to call
                  </div>
                </a>
              </Reveal>
            </div>
          </div>

          <Reveal delay={300}>
            <div className="mt-12 flex flex-wrap items-center gap-3">
              <Link to="/internet-services" className="btn-ghost">
                Explore Internet Plans <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/learning-center" className="btn-ghost">
                Visit Learning Center <BookOpen className="h-4 w-4" />
              </Link>
              <span className="text-xs text-ink-muted ml-2">Educational comparisons · Free to browse · No obligation.</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ====== TRUST RIBBON WITH CURVED LOOP ====== */}
      <section className="relative bg-background text-ink overflow-hidden border-y border-border py-4">
        <CurvedLoop 
          marqueeText="Cable ✦ 5G Home Internet ✦ Streaming ✦ Mobile ✦ Whole-Home Wi-Fi ✦ "
          speed={1.5}
          curveAmount={120}
          direction="left"
          interactive={true}
          className="curved-text-primary"
        />
      </section>

      {/* ====== INTRO — pull quote ====== */}
      <section className="relative py-28">
        <div className="mx-auto max-w-[1100px] px-4 sm:px-8 text-center">
          <Reveal>
            <span className="eyebrow mx-auto">Why we exist</span>
            <p className="mt-8 font-display text-3xl sm:text-5xl text-ink leading-[1.15] tracking-[-0.02em]">
              Choosing a connectivity plan shouldn't feel like decoding a <span className="serif-italic text-primary">technical manual.</span> So we built a clean place to compare, learn and decide — at your own pace.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4 text-sm text-ink-muted">
              <span className="h-px w-12 bg-ink-muted/50" />
              <span className="tracking-[0.3em] uppercase text-[11px]">Skyconet · Connectivity Comparisons</span>
              <span className="h-px w-12 bg-ink-muted/50" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ====== EXPLORE SERVICE CATEGORIES ====== */}
      <section className="relative">
        <div
          className="absolute inset-0 sticky-bg"
          style={{ backgroundImage: `url(${bgHelp})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-8 py-28">
          <div className="grid lg:grid-cols-12 gap-10 mb-16 items-end">
            <div className="lg:col-span-7">
              <Reveal>
                <span className="eyebrow">Chapter One · Explore service categories</span>
                <h2 className="mt-6 font-display text-5xl sm:text-6xl font-medium text-ink leading-[1.0] tracking-[-0.025em]">
                  Every connectivity choice,<br /><span className="serif-italic text-primary">in one place.</span>
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={100}>
                <p className="text-lg text-ink-muted leading-relaxed">
                  Start with what you're researching. We organize internet, TV, streaming, wireless and whole-home connectivity into clear categories so you can jump straight to the comparisons that matter.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {categories.map((o, i) => (
              <Reveal key={o.title} delay={i * 80}>
                <Link to={o.href} className="block h-full">
                  <article className="panel group h-full overflow-hidden">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img src={o.img} alt={o.title} loading="lazy" width={1200} height={1000} className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
                      <span className="absolute top-4 left-4 chip">{String(i + 1).padStart(2, "0")} · Category</span>
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-3">
                        <span className="grid place-items-center h-10 w-10 rounded-full bg-primary text-primary-foreground">
                          <o.icon className="h-4 w-4" />
                        </span>
                        <h3 className="font-display text-2xl text-ink">{o.title}</h3>
                      </div>
                      <p className="mt-4 text-ink-muted leading-relaxed">{o.desc}</p>
                      <ul className="mt-5 space-y-2">
                        {o.points.map((p) => (
                          <li key={p} className="flex items-start gap-2 text-sm text-ink/85">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" /> {p}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 pt-5 border-t border-border flex items-center justify-between text-xs">
                        <span className="uppercase tracking-[0.28em] text-ink-muted">Explore category</span>
                        <ArrowUpRight className="h-4 w-4 text-ink-muted group-hover:text-primary group-hover:rotate-45 transition" />
                      </div>
                    </div>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ====== CUSTOMER BENEFITS — dark band ====== */}
      <section className="relative bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-15" />
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-8 py-28 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="text-[11px] tracking-[0.32em] uppercase text-accent font-semibold">Chapter Two · Customer benefits</span>
              <h2 className="mt-6 font-display text-5xl sm:text-6xl font-medium leading-[1.0] tracking-[-0.025em]">
                Built for<br /><span className="serif-italic text-accent">smart shoppers.</span>
              </h2>
              <p className="mt-6 text-primary-foreground/80 leading-relaxed max-w-md">
                We organize what's available, explain how the technology works, and step back. The decision — and the relationship with your provider — stays entirely yours.
              </p>
              <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent ulink">
                How Skyconet works <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <ul className="divide-y divide-primary-foreground/15">
              {benefits.map((n, i) => (
                <Reveal key={n} delay={i * 80}>
                  <li className="flex items-start gap-5 py-5 transition-all duration-300 hover:translate-x-2">
                    <span className="font-display serif-italic text-2xl text-accent mt-1 shrink-0 w-10">{String(i + 1).padStart(2, "0")}</span>
                    <BadgeCheck className="h-5 w-5 text-accent mt-1 shrink-0" />
                    <span className="leading-relaxed">{n}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ====== HOW PLAN COMPARISON WORKS ====== */}
      <section className="relative">
        <div
          className="absolute inset-0 sticky-bg"
          style={{ backgroundImage: `url(${bgProcess})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-background/92" />
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-8 py-28">
          <div className="grid lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-5">
              <Reveal>
                <span className="eyebrow">Chapter Three · How plan comparison works</span>
                <h2 className="mt-6 font-display text-5xl sm:text-6xl font-medium text-ink leading-[1.0] tracking-[-0.025em]">
                  Three steps,<br /><span className="serif-italic text-primary">from ZIP to choice.</span>
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 lg:pt-4">
              <Reveal delay={100}>
                <p className="text-lg text-ink-muted leading-relaxed">
                  We've stripped the comparison flow down to the essentials. No login walls, no quotes that require your phone number — just clear options laid out so you can make an informed choice.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {process.map((p, i) => (
              <Reveal key={p.n} delay={i * 100}>
                <article className="panel p-10 h-full relative overflow-hidden group">
                  <span className="font-display serif-italic text-[7rem] leading-none text-accent/30 absolute -top-4 -right-2 group-hover:text-accent/60 transition">{p.n}</span>
                  <div className="relative">
                    <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-primary font-semibold">Step {p.n}</span>
                    <h3 className="mt-4 font-display text-3xl text-ink leading-tight">{p.t}</h3>
                    <p className="mt-4 text-ink-muted leading-relaxed">{p.d}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ====== INTERNET TECHNOLOGY GUIDE ====== */}
      <section className="relative py-28 border-t border-border">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8 grid lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-3 bg-accent/20 blur-3xl rounded-full" />
              <div className="relative panel p-0 overflow-hidden aspect-[5/4]">
                <img src={notebook} alt="Internet technology comparison notebook" loading="lazy" width={1200} height={900} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
                  <div className="glass rounded-xl px-4 py-3">
                    <div className="text-[10px] uppercase tracking-[0.3em] text-primary font-semibold">Technology guide</div>
                    <div className="font-display text-ink mt-1">Fiber · Cable · Wireless · Streaming</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <Reveal>
              <span className="eyebrow">Chapter Four · Internet technology guide</span>
              <h2 className="mt-6 font-display text-5xl sm:text-6xl font-medium text-ink leading-[1.0] tracking-[-0.025em]">
                Know the tech.<br /><span className="serif-italic text-primary">Choose with clarity.</span>
              </h2>
              <p className="mt-5 text-ink-muted leading-relaxed max-w-lg">
                A two-minute primer on the connection types you'll see across our comparisons — so the spec sheets make sense.
              </p>
            </Reveal>

            <div className="mt-10 grid sm:grid-cols-2 gap-5">
              {techGuide.map((f, i) => (
                <Reveal key={f.t} delay={i * 60}>
                  <div className="card-premium h-full">
                    <span className="grid place-items-center h-10 w-10 rounded-full bg-accent text-accent-foreground">
                      <f.icon className="h-4 w-4" />
                    </span>
                    <div className="mt-4 font-display text-xl text-ink">{f.t}</div>
                    <div className="text-sm text-ink-muted mt-2">{f.d}</div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Link to="/learning-center" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary ulink">
              Read full guides in the Learning Center <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ====== POPULAR HOME CONNECTIVITY SOLUTIONS ====== */}
      <section className="relative py-28 bg-surface/50 border-y border-border">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-8 mb-14">
            <div>
              <span className="eyebrow">Chapter Five · Popular home connectivity solutions</span>
              <h2 className="mt-6 font-display text-5xl sm:text-6xl font-medium text-ink leading-[1.0] tracking-[-0.025em]">
                Solutions households<br /><span className="serif-italic text-primary">love right now.</span>
              </h2>
            </div>
            <Link to="/home-connectivity" className="btn-ghost">
              Browse all solutions <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Zap, t: "Gigabit Fiber Bundles", d: "Symmetrical 1 Gbps tiers paired with whole-home Wi-Fi 6 — popular with remote-work households." },
              { icon: Signal, t: "5G Home Internet", d: "Cable-free internet over the 5G network — a flexible alternative in growing service areas." },
              { icon: Tv, t: "Streaming-First TV Stacks", d: "Skinny live-TV bundles paired with two or three on-demand platforms instead of traditional cable." },
              { icon: Wifi, t: "Mesh Wi-Fi for Big Homes", d: "Multi-node systems that blanket every floor and the backyard with consistent, fast Wi-Fi." },
              { icon: Compass, t: "Work-From-Home Kits", d: "Higher upload speeds, low-latency tiers and UPS backup ideas for serious home offices." },
              { icon: Lightbulb, t: "Smart-Home Ready Plans", d: "Bandwidth and router pairings that comfortably handle dozens of connected smart devices." },
            ].map((s, i) => (
              <Reveal key={s.t} delay={i * 60}>
                <article className="panel p-8 h-full">
                  <span className="grid place-items-center h-11 w-11 rounded-xl bg-primary text-primary-foreground">
                    <s.icon className="h-4 w-4" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl text-ink">{s.t}</h3>
                  <p className="mt-3 text-ink-muted text-sm leading-relaxed">{s.d}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ====== LEARNING CENTER PREVIEW ====== */}
      <section className="relative py-28 border-t border-border">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
          <div className="grid lg:grid-cols-12 gap-10 mb-12 items-end">
            <div className="lg:col-span-7">
              <span className="eyebrow">Chapter Six · Learning Center</span>
              <h2 className="mt-6 font-display text-5xl sm:text-6xl font-medium text-ink leading-[1.0] tracking-[-0.025em]">
                Informational articles,<br /><span className="serif-italic text-primary">written for humans.</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-ink-muted leading-relaxed">
                A growing library covering connectivity technology, plan-comparison frameworks, smart-home setup and home Wi-Fi best practices — written for everyday households, not engineers.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: "Fiber vs. Cable: Which Internet Is Right for You?", c: "Technology guide", img: offerInternet },
              { t: "Understanding Internet Speed Tiers (Mbps, Gbps & Latency)", c: "Plan comparison", img: notebook },
              { t: "How to Build a Streaming Stack That Replaces Cable", c: "TV & Streaming", img: offerStreaming },
            ].map((a, i) => (
              <Reveal key={a.t} delay={i * 80}>
                <Link to="/learning-center" className="block">
                  <article className="panel overflow-hidden h-full group">
                    <div className="relative aspect-[16/10]">
                      <img src={a.img} alt="" loading="lazy" width={1200} height={750} className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition" />
                    </div>
                    <div className="p-7">
                      <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-semibold">{a.c}</span>
                      <h3 className="mt-3 font-display text-xl text-ink leading-snug">{a.t}</h3>
                      <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink group-hover:text-primary transition">
                        Read article <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ====== TESTIMONIALS ====== */}
      <section className="relative py-28 bg-surface/50 border-y border-border">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-8 mb-14">
            <div>
              <span className="eyebrow">Chapter Seven · Voices</span>
              <h2 className="mt-6 font-display text-5xl sm:text-6xl font-medium text-ink leading-[1.0] tracking-[-0.025em]">
                What shoppers say after<br /><span className="serif-italic text-primary">one good comparison.</span>
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {[avatar1, avatar2, avatar3].map((a, i) => (
                  <img key={i} src={a} alt="" loading="lazy" width={44} height={44} className="h-10 w-10 rounded-full ring-2 ring-background object-cover" />
                ))}
              </div>
              <div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />)}
                </div>
                <div className="text-xs text-ink-muted mt-1">Verified visitor feedback</div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-6">
            <Reveal className="lg:col-span-7">
              <article className="panel panel-accent p-10 sm:p-14 h-full relative overflow-hidden">
                <div className="absolute inset-0 dot-grid opacity-25" />
                <Quote className="h-14 w-14 text-accent/70 mb-6 relative" />
                <p className="relative font-display text-2xl sm:text-3xl text-white leading-snug">
                  "{testimonials[0].text}"
                </p>
                <div className="relative mt-10 pt-6 border-t border-white/25 flex items-center gap-4">
                  <img src={testimonials[0].img} alt={testimonials[0].name} loading="lazy" width={56} height={56} className="h-12 w-12 rounded-full object-cover ring-2 ring-white/40" />
                  <div className="flex-1">
                    <div className="font-semibold text-white">{testimonials[0].name}</div>
                    <div className="text-xs text-white/70">{testimonials[0].role}</div>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, k) => <Star key={k} className="h-3.5 w-3.5 fill-accent text-accent" />)}
                  </div>
                </div>
              </article>
            </Reveal>

            <div className="lg:col-span-5 grid gap-6">
              {testimonials.slice(1).map((t, i) => (
                <Reveal key={t.name} delay={i * 100}>
                  <article className="panel p-7 h-full">
                    <Quote className="h-7 w-7 text-primary/50 mb-4" />
                    <p className="text-ink leading-relaxed">"{t.text}"</p>
                    <div className="mt-6 pt-5 border-t border-border flex items-center gap-3">
                      <img src={t.img} alt={t.name} loading="lazy" width={44} height={44} className="h-10 w-10 rounded-full object-cover ring-2 ring-primary/30" />
                      <div className="flex-1">
                        <div className="font-semibold text-ink text-sm">{t.name}</div>
                        <div className="text-xs text-ink-muted">{t.role}</div>
                      </div>
                      <div className="flex gap-0.5">
                        {[...Array(t.rating)].map((_, k) => <Star key={k} className="h-3 w-3 fill-accent text-accent" />)}
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====== POLICY NOTE ====== */}
      <section className="relative py-20">
        <div className="mx-auto max-w-[1100px] px-4 sm:px-8">
          <Reveal>
            <div className="panel p-8 sm:p-10 flex flex-col md:flex-row gap-6 items-start border-accent/40">
              <div className="grid place-items-center h-14 w-14 rounded-2xl bg-accent text-accent-foreground shrink-0">
                <Clock className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <span className="chip">Concierge sessions</span>
                <h3 className="mt-3 font-display text-3xl text-ink">7–15 day refund window on paid sessions</h3>
                <p className="mt-3 text-ink-muted leading-relaxed">
                  Browsing comparisons and reading the Learning Center is always free. If you choose a paid concierge comparison session, refund requests can be submitted within 7 to 15 days of purchase — full eligibility details live on our Refund Policy page.
                </p>
                <Link to="/refund-policy" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary ulink">
                  Read full Refund Policy <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ====== FAQ ====== */}
      <section className="relative py-28 border-t border-border">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <Reveal>
              <div className="lg:sticky lg:top-32">
                <span className="eyebrow">Chapter Eight · FAQ</span>
                <h2 className="mt-6 font-display text-5xl sm:text-6xl font-medium text-ink leading-[1.0] tracking-[-0.025em]">
                  Common questions,<br /><span className="serif-italic text-primary">clearly answered.</span>
                </h2>
                <p className="mt-5 text-ink-muted leading-relaxed">
                  Quick answers to what shoppers most often ask before exploring plan comparisons.
                </p>
                <a href="tel:+18888719115" className="mt-7 inline-flex items-center gap-2 rounded-full border border-ink bg-transparent px-5 py-3 font-semibold text-ink hover:bg-ink hover:text-background transition">
                  <HelpCircle className="h-4 w-4" /> Still have a question?
                </a>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <ul className="divide-y divide-border border-y border-border">
              {faqs.map((f, i) => (
                <Reveal key={f.q} delay={i * 60}>
                  <FaqItem q={f.q} a={f.a} index={i + 1} />
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ====== FINAL CTA ====== */}
      <section className="relative">
        <div
          className="absolute inset-0 sticky-bg"
          style={{ backgroundImage: `url(${bgCta})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-primary/85" />
        <div className="absolute inset-0 dot-grid opacity-10" />
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-8 py-32 text-primary-foreground">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <Reveal>
                <span className="text-[11px] tracking-[0.32em] uppercase text-accent font-semibold">Start your comparison</span>
                <h2 className="mt-6 font-display text-5xl sm:text-7xl font-medium leading-[0.98] tracking-[-0.025em]">
                  See what's available<br />
                  <span className="serif-italic text-accent">in your area today.</span>
                </h2>
                <p className="mt-6 text-primary-foreground/85 max-w-xl leading-relaxed">
                  Plug in your ZIP to view internet, TV, streaming and wireless options from participating providers — paired with educational guides so the choice is yours to own.
                </p>
                <div className="mt-10 flex flex-wrap gap-3">
                  <a href="tel:+18888719115" className="btn-accent">
                    <Phone className="h-4 w-4" /> (888) 871-9115
                  </a>
                  <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/40 px-7 py-3.5 font-semibold text-primary-foreground hover:bg-primary-foreground hover:text-primary transition">
                    Request a callback <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-4">
              <Reveal delay={120}>
                <MiniContactCard />
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <li className="group transition-all hover:bg-surface/30">
      <button onClick={() => setOpen((o) => !o)} className="w-full flex items-center justify-between gap-6 py-6 px-4 text-left transition-all hover:px-6">
        <div className="flex items-baseline gap-5">
          <span className="font-display serif-italic text-xl text-primary shrink-0 transition-transform group-hover:scale-110">{String(index).padStart(2, "0")}</span>
          <span className="font-display text-xl text-ink leading-snug group-hover:text-primary transition-colors">{q}</span>
        </div>
        <span className={`grid place-items-center h-9 w-9 rounded-full border shrink-0 transition-all ${open ? "bg-primary text-primary-foreground border-transparent rotate-90" : "border-border text-ink-muted group-hover:text-primary group-hover:border-primary/40"}`}>
          {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>
      <div className={`grid transition-all duration-500 ease-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          <p className="pb-6 pl-14 pr-16 text-ink-muted leading-relaxed">{a}</p>
        </div>
      </div>
    </li>
  );
}

function MiniContactCard() {
  const [sent, setSent] = useState(false);
  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 3500); }}
      className="bg-background text-ink rounded-2xl p-7 shadow-elegant"
    >
      <div className="flex items-center gap-3 mb-6">
        <img src={portrait} alt="" loading="lazy" width={48} height={48} className="h-11 w-11 rounded-full object-cover ring-2 ring-accent" />
        <div>
          <div className="font-display text-lg text-ink">Request a callback</div>
          <div className="text-xs text-ink-muted">A guide will follow up with comparison info</div>
        </div>
      </div>
      <div className="space-y-3">
        <input required maxLength={80} placeholder="Full name" className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-primary text-ink placeholder:text-ink-muted/60" />
        <input required type="tel" maxLength={20} placeholder="Phone number" className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-primary text-ink placeholder:text-ink-muted/60" />
        <input required maxLength={5} placeholder="ZIP code" className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-primary text-ink placeholder:text-ink-muted/60" />
        <textarea required maxLength={400} rows={3} placeholder="What are you researching?" className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-primary resize-none text-ink placeholder:text-ink-muted/60" />
      </div>
      <button className="mt-5 w-full btn-primary">
        {sent ? "Thanks — we'll be in touch!" : "Send callback request"}
      </button>
      <p className="mt-3 text-[11px] text-ink-muted text-center">
        Consumer comparison & information platform.
      </p>
    </form>
  );
}

