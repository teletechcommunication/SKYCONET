import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone, Home, Wifi, Lightbulb, Router, Shield, Cable, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import offerWifi from "@/assets/v2-offer-wifi.jpg";
import notebook from "@/assets/v2-notebook.jpg";
import lifestyle from "@/assets/v2-lifestyle.jpg";
import bgHelp from "@/assets/v2-bg-help.jpg";

export const Route = createFileRoute("/home-connectivity")({
  head: () => ({
    meta: [
      { title: "Home Connectivity Resources — Wi-Fi, Mesh, Smart Home | Skyconet" },
      { name: "description", content: "Resources and guides for home Wi-Fi, mesh networking, smart-home setup and whole-home connectivity solutions." },
      { property: "og:title", content: "Home Connectivity Resources — Skyconet" },
      { property: "og:description", content: "Educational resources for home Wi-Fi, mesh systems, smart-home connectivity and bundle decisions." },
      { property: "og:url", content: "/home-connectivity" },
    ],
    links: [{ rel: "canonical", href: "/home-connectivity" }],
  }),
  component: HomeConnectivityPage,
});

const topics = [
  { icon: Router, t: "Choosing the Right Router", d: "Wi-Fi 6 vs Wi-Fi 7, ISP-provided gateways vs owning your own, and how to match a router to the size and density of your home." },
  { icon: Wifi, t: "Whole-Home Mesh Wi-Fi", d: "When mesh systems make sense, ideal node placement, and how to blanket multi-floor homes (and the backyard) with strong signal." },
  { icon: Home, t: "Smart-Home Connectivity", d: "Planning bandwidth for cameras, thermostats, speakers and dozens of connected devices — without slowing down the main household." },
  { icon: Lightbulb, t: "Wi-Fi Performance Tips", d: "Channel choice, dual vs tri-band, placement do's and don'ts, and the easy wins that make any home network feel faster." },
  { icon: Shield, t: "Home Network Security Basics", d: "Strong passwords, guest networks, firmware updates and other simple habits that keep your connected home protected." },
  { icon: Cable, t: "Bundles & Multi-Service Setups", d: "When bundling internet, TV and mobile actually saves money — and when separating them gives you more flexibility." },
];

function HomeConnectivityPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Home connectivity resources"
        title="Build a home network that just works — everywhere in the house."
        subtitle="Guides, frameworks and best practices for Wi-Fi, mesh, smart-home devices and whole-home connectivity decisions."
        bgImage={bgHelp}
      />

      <section className="relative py-20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8 grid lg:grid-cols-12 gap-10 items-center">
          <Reveal className="lg:col-span-6">
            <div className="relative">
              <div className="absolute -inset-3 bg-accent/15 blur-3xl rounded-full" />
              <div className="relative panel p-0 overflow-hidden aspect-[5/4]">
                <img src={offerWifi} alt="Home Wi-Fi network" loading="lazy" width={1280} height={1024} className="absolute inset-0 h-full w-full object-cover" />
              </div>
            </div>
          </Reveal>
          <div className="lg:col-span-6">
            <span className="eyebrow">The connected household</span>
            <h2 className="mt-5 font-display text-4xl sm:text-5xl text-ink leading-tight">Your home is a network now — <span className="serif-italic text-primary">treat it like one.</span></h2>
            <p className="mt-5 text-ink-muted leading-relaxed">
              A typical household runs 20+ devices on Wi-Fi: phones, laptops, TVs, cameras, doorbells, speakers, watches and more. Our home connectivity resources help you design a network that handles all of it gracefully — fast where you need speed, reliable where you need reliability, and secure throughout.
            </p>
            <ul className="mt-7 grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {["Plan-to-router pairings", "Mesh layout frameworks", "Smart-home bandwidth tips", "Security best practices"].map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-sm text-ink/85"><CheckCircle2 className="h-4 w-4 text-primary mt-0.5" /> {p}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-surface/50 border-y border-border">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-8 mb-12">
            <div>
              <span className="eyebrow">Topics & guides</span>
              <h2 className="mt-5 font-display text-4xl sm:text-5xl text-ink leading-tight">Pick the connectivity question on your mind.</h2>
            </div>
            <Link to="/learning-center" className="btn-ghost">All articles <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((s, i) => (
              <Reveal key={s.t} delay={i * 60}>
                <article className="panel p-8 h-full">
                  <span className="grid place-items-center h-11 w-11 rounded-xl bg-primary text-primary-foreground"><s.icon className="h-4 w-4" /></span>
                  <h3 className="mt-5 font-display text-2xl text-ink">{s.t}</h3>
                  <p className="mt-3 text-ink-muted text-sm leading-relaxed">{s.d}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
          <div className="panel p-10 sm:p-12 grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="eyebrow">Hands-on help</span>
              <h2 className="mt-5 font-display text-3xl sm:text-4xl text-ink leading-tight">Need a second opinion on your setup?</h2>
              <p className="mt-4 text-ink-muted leading-relaxed">Tell a guide what's connected and where the dead zones are — we'll point you to the right resources.</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="tel:#" className="btn-primary"><Phone className="h-4 w-4" /> xxx-xxx-xxxx</a>
                <Link to="/contact" className="btn-ghost">Send a message <ArrowRight className="h-4 w-4" /></Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative panel p-0 overflow-hidden aspect-[5/4]">
                <img src={notebook} alt="Home network planning notebook" loading="lazy" width={1280} height={1024} className="absolute inset-0 h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* unused asset retention to avoid TS removal */}
      <img src={lifestyle} alt="" className="hidden" />
    </SiteLayout>
  );
}
