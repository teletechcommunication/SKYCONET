import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, HeadphonesIcon, MapPin, Phone, ShieldCheck, Target, Users, Zap, ArrowUpRight, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import team from "@/assets/v2-team.jpg";
import portrait from "@/assets/v2-portrait.jpg";
import bgHelp from "@/assets/v2-bg-help.jpg";
import bgCta from "@/assets/v2-bg-cta.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Skyconet — Connectivity Comparison & Information Platform" },
      { name: "description", content: "Learn about Skyconet, a consumer-focused comparison and information platform that helps households evaluate internet, TV, wireless and home connectivity options." },
      { property: "og:title", content: "About Skyconet" },
      { property: "og:description", content: "We help consumers compare connectivity options from participating providers through clear, educational content." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const milestones = [
  { year: "2026", title: "Skyconet launches", desc: "We open as a consumer-focused comparison and information platform for everyday connectivity decisions." },
  { year: "Q1", title: "Learning Center goes live", desc: "A growing library of plain-English guides on fiber, cable, wireless, streaming and smart-home connectivity." },
  { year: "Q2", title: "Coverage tools expand", desc: "ZIP-level availability lookups roll out across all major service categories, surfacing only what's offered nearby." },
  { year: "Today", title: "Nationwide comparisons", desc: "Households across 48 states use Skyconet to compare plans and choose participating providers with confidence." },
];

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About Skyconet"
        title="A consumer-focused comparison platform for the modern connected home."
        subtitle="We launched in 2026 to give households a calm, educational place to compare internet, TV, streaming, wireless and home connectivity options."
        bgImage={bgHelp}
      />

      <section className="relative py-20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8 grid lg:grid-cols-12 gap-12 items-start">
          <Reveal className="lg:col-span-7">
            <div className="relative">
              <div className="absolute -inset-3 bg-accent/15 blur-3xl rounded-full" />
              <div className="relative panel p-0 overflow-hidden aspect-[5/4]">
                <img src={team} alt="Skyconet team" loading="lazy" width={1400} height={1120} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div>
                    <span className="chip">Compare · Learn · Connect</span>
                    <p className="mt-3 font-display text-white text-xl leading-tight max-w-xs">Educational by design. Consumer-first by choice.</p>
                  </div>
                  <span className="font-display serif-italic text-7xl text-white/40">'26</span>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-5 lg:pt-8">
            <span className="eyebrow">Who we are</span>
            <h2 className="mt-6 font-display text-4xl sm:text-5xl font-medium text-ink leading-[1.05] tracking-[-0.025em]">
              We help consumers <span className="serif-italic text-primary">discover and compare</span> connectivity options.
            </h2>
            <p className="mt-6 text-ink-muted leading-relaxed">
              Skyconet is a comparison and information platform that brings internet, TV, streaming, wireless and home connectivity options together in one clean, jargon-free space. We do not own or operate any network infrastructure — instead, we organize what's available from participating providers in your area so you can compare options on your own terms.
            </p>
            <p className="mt-4 text-ink-muted leading-relaxed">
              Our content is educational first. Our coverage lookups, side-by-side comparisons and Learning Center guides exist to help you make informed decisions — without ever feeling sold to.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative py-16">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8 grid md:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {[
            { icon: Target, t: "Our Mission", d: "Give every household a clear, educational way to compare connectivity options — and the confidence to pick the right plan with the right participating provider.", dark: false },
            { icon: Award, t: "Our Vision", d: "Become the most trusted consumer-facing source for connectivity comparisons and educational content across internet, TV, streaming and wireless.", dark: true },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 100}>
              <div className={`p-12 h-full ${c.dark ? "bg-primary text-primary-foreground" : "bg-surface"}`}>
                <c.icon className={`h-8 w-8 ${c.dark ? "text-accent" : "text-primary"}`} />
                <h3 className={`mt-8 font-display text-4xl ${c.dark ? "text-white" : "text-ink"}`}>{c.t}</h3>
                <p className={`mt-4 leading-relaxed ${c.dark ? "text-white/85" : "text-ink-muted"} max-w-md`}>{c.d}</p>
                <div className={`mt-8 h-px w-16 ${c.dark ? "bg-accent" : "bg-primary"}`} />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative py-20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
          <div className="border-y border-border py-14 grid grid-cols-2 lg:grid-cols-4 gap-10 relative">
            <div className="absolute inset-0 line-grid opacity-30 pointer-events-none" />
            {[
              { v: 100, suffix: "%", l: "Consumer-focused & educational" },
              { v: 48, suffix: "", l: "States with plan comparisons" },
              { v: 50, suffix: "+", l: "Participating providers referenced" },
              { v: 0, suffix: "", l: "Provider passwords ever requested" },
            ].map((s, i) => (
              <div key={s.l} className="relative">
                <div className="text-[10px] uppercase tracking-[0.3em] text-primary font-semibold">0{i + 1}</div>
                <div className="mt-3 font-display text-5xl sm:text-6xl text-ink">
                  <Counter to={s.v} suffix={s.suffix} />
                </div>
                <div className="text-sm mt-3 text-ink-muted leading-snug max-w-[180px]">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8 grid lg:grid-cols-12 gap-14">
          <div className="lg:col-span-4">
            <Reveal>
              <div className="lg:sticky lg:top-32">
                <span className="eyebrow">Our journey</span>
                <h2 className="mt-6 font-display text-5xl font-medium text-ink leading-[1.0] tracking-[-0.025em]">
                  Built for the<br /><span className="serif-italic text-primary">connected household.</span>
                </h2>
                <p className="mt-5 text-ink-muted leading-relaxed">
                  A young, intentional platform — every decision shaped by clear comparisons, educational content and respect for your time.
                </p>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-8 relative">
            <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-accent/40 to-transparent" />
            <ul className="space-y-10">
              {milestones.map((m, i) => (
                <Reveal key={m.year} delay={i * 80}>
                  <li className="relative pl-12">
                    <span className="absolute left-0 top-1.5 grid place-items-center h-7 w-7 rounded-full bg-primary border-2 border-background">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                    </span>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-primary font-semibold">{m.year}</div>
                    <h3 className="mt-2 font-display text-3xl text-ink">{m.title}</h3>
                    <p className="mt-2 text-ink-muted leading-relaxed max-w-xl">{m.desc}</p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="relative py-16">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8 grid lg:grid-cols-12 gap-10 items-center">
          <Reveal className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-3 bg-accent/15 blur-3xl rounded-full" />
              <div className="relative panel p-0 overflow-hidden aspect-[4/5]">
                <img src={portrait} alt="Friendly Skyconet guide" loading="lazy" width={1024} height={1280} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute top-5 right-5 grid place-items-center h-10 w-10 rounded-full glass">
                  <ArrowUpRight className="h-4 w-4 text-ink" />
                </div>
              </div>
            </div>
          </Reveal>
          <div className="lg:col-span-7 order-1 lg:order-2">
            <Reveal>
              <span className="eyebrow">Friendly guides on call</span>
              <h2 className="mt-6 font-display text-5xl font-medium text-ink leading-[1.0] tracking-[-0.025em]">
                Real humans who<br /><span className="serif-italic text-primary">actually pick up.</span>
              </h2>
              <p className="mt-6 text-ink-muted leading-relaxed max-w-lg">
                Prefer to talk it through? Our guides walk you through comparisons in plain English — at your pace, without pushing any specific brand.
              </p>
              <div className="mt-10 grid sm:grid-cols-2 gap-5">
                {[
                  { icon: HeadphonesIcon, t: "Easy to reach", d: "Phone, message or callback." },
                  { icon: Users, t: "Consumer-first", d: "Educational by default." },
                  { icon: ShieldCheck, t: "Privacy-respecting", d: "No credentials requested." },
                  { icon: Zap, t: "Plain-English", d: "No jargon, no upsell." },
                ].map((f) => (
                  <div key={f.t} className="card-premium">
                    <f.icon className="h-5 w-5 text-primary" />
                    <div className="mt-4 font-display text-xl text-ink">{f.t}</div>
                    <div className="text-xs text-ink-muted mt-1.5">{f.d}</div>
                  </div>
                ))}
              </div>
              <a href="tel:#" className="mt-8 btn-primary inline-flex">
                <Phone className="h-4 w-4" /> Talk to a real human
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative mt-12">
        <div className="absolute inset-0 sticky-bg" style={{ backgroundImage: `url(${bgCta})` }} aria-hidden />
        <div className="absolute inset-0 bg-primary/88" />
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-8 py-28 text-primary-foreground">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <MapPin className="h-8 w-8 text-accent mb-4" />
              <h2 className="font-display text-4xl sm:text-5xl font-medium leading-[1.02] tracking-[-0.025em]">Plan comparisons, available in <span className="serif-italic text-accent">48 states.</span></h2>
              <p className="mt-4 text-primary-foreground/85 max-w-xl">See what fiber, cable, wireless and streaming options are offered at your address.</p>
            </div>
            <div className="lg:col-span-4 flex flex-wrap gap-3 lg:justify-end">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-7 py-3.5 font-semibold hover:bg-background hover:text-ink transition">
                Compare in my ZIP <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="tel:#" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 text-primary-foreground px-7 py-3.5 font-semibold hover:bg-primary-foreground hover:text-primary transition">
                <Phone className="h-4 w-4" /> xxx-xxx-xxxx
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
