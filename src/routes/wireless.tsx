import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone, Signal, Smartphone, Wifi, MapPin, CheckCircle2, ShieldCheck } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import offerInternet from "@/assets/v2-offer-internet.jpg";
import offerWifi from "@/assets/v2-offer-wifi.jpg";
import lifestyle from "@/assets/v2-lifestyle.jpg";
import bgCta from "@/assets/v2-bg-cta.jpg";

export const Route = createFileRoute("/wireless")({
  head: () => ({
    meta: [
      { title: "Wireless Solutions — Mobile, 5G Home Internet & Hotspots | Skyconet" },
      { name: "description", content: "Compare wireless options for the way you live: mobile plans, 5G home internet, hotspots and coverage maps from participating carriers." },
      { property: "og:title", content: "Wireless Solutions — Skyconet" },
      { property: "og:description", content: "Plain-English comparisons of mobile plans, 5G home internet and mobile hotspots." },
      { property: "og:url", content: "/wireless" },
    ],
    links: [{ rel: "canonical", href: "/wireless" }],
  }),
  component: WirelessPage,
});

const options = [
  { icon: Smartphone, eyebrow: "Mobile", title: "Mobile Phone Plans", img: lifestyle,
    desc: "Unlimited, family and prepaid plan options from participating wireless carriers — compared on data caps, hotspot allowances and international features.",
    points: ["Unlimited & tiered options", "Family multi-line plans", "Prepaid alternatives", "Hotspot & roaming notes"] },
  { icon: Signal, eyebrow: "5G Home Internet", title: "5G Home Internet", img: offerInternet,
    desc: "A cable-free way to bring fast internet into your home — perfect in areas where 5G coverage is strong and you want a flexible alternative to wired service.",
    points: ["No installer visit required", "Flat monthly pricing", "Often no annual contract", "Self-install in minutes"] },
  { icon: Wifi, eyebrow: "Hotspots", title: "Mobile Hotspots & Travel Plans", img: offerWifi,
    desc: "Stay connected on the road, at the cabin or during outages. Hotspot devices and travel plans compared on data, speed and coverage areas.",
    points: ["Great for remote work", "RV & travel friendly", "Backup-internet ready", "Pay-as-you-go data"] },
  { icon: MapPin, eyebrow: "Coverage", title: "Coverage Map Comparisons", img: lifestyle,
    desc: "Wireless is only as good as the signal at your address. Use coverage maps to compare carriers where you actually live, work and travel most.",
    points: ["Home address checks", "Work & commute corridors", "Travel destinations", "Indoor vs outdoor performance"] },
];

function WirelessPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Wireless solutions"
        title="Mobile, 5G home internet and hotspots — compared the modern way."
        subtitle="Whether you're rethinking your phone plan, replacing wired internet with 5G, or adding a hotspot for the road, here's a calm place to compare it all."
        bgImage={bgCta}
      />

      <section className="relative py-20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8 grid md:grid-cols-2 gap-10">
          {options.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <article className="panel overflow-hidden h-full">
                <div className="relative aspect-[16/10]">
                  <img src={s.img} alt={s.title} loading="lazy" width={1280} height={800} className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute top-5 left-5"><span className="chip">{s.eyebrow}</span></div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3">
                    <span className="grid place-items-center h-10 w-10 rounded-full bg-primary text-primary-foreground"><s.icon className="h-4 w-4" /></span>
                    <h2 className="font-display text-2xl text-ink">{s.title}</h2>
                  </div>
                  <p className="mt-4 text-ink-muted leading-relaxed">{s.desc}</p>
                  <ul className="mt-5 grid sm:grid-cols-2 gap-x-5 gap-y-2.5">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-ink/85">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" /> {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative py-16">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
          <div className="panel panel-accent p-10 sm:p-12 flex flex-col lg:flex-row items-start lg:items-center gap-8 justify-between">
            <div className="flex items-start gap-5 max-w-2xl">
              <div className="grid place-items-center h-12 w-12 rounded-xl bg-accent text-accent-foreground shrink-0"><ShieldCheck className="h-5 w-5" /></div>
              <div>
                <span className="text-[11px] tracking-[0.3em] uppercase text-accent font-semibold">Cut the wires</span>
                <div className="mt-2 font-display text-white text-3xl">Compare carriers based on coverage at your address.</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="tel:+18888719115" className="btn-accent"><Phone className="h-4 w-4" /> Talk to a guide</a>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 font-semibold text-white hover:bg-white hover:text-primary transition">Check coverage <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
