import { createFileRoute } from "@tanstack/react-router";
import { Clock, HeadphonesIcon, Mail, MapPin, Phone, Search, Send, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import contactBg from "@/assets/v2-contact-bg.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Skyconet — Compare Plans & Get Guidance | xxx-xxx-xxxx" },
      { name: "description", content: "Reach a Skyconet guide for help comparing internet, TV, wireless and home connectivity plans. Call xxx-xxx-xxxx or send a message." },
      { property: "og:title", content: "Contact Skyconet" },
      { property: "og:description", content: "Consumer-focused connectivity comparisons — call, message or request a callback." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [zipResult, setZipResult] = useState<null | "available" | "checking">(null);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Get in touch"
        title="A calm place to compare connectivity options."
        subtitle="Friendly guides ready to help you compare internet, TV, wireless and home connectivity plans. Reach out by phone, message or callback."
        bgImage={contactBg}
      />

      <section className="relative py-20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8 grid lg:grid-cols-12 gap-10 items-stretch">
          <Reveal className="lg:col-span-5">
            <div className="panel panel-ink p-10 h-full relative overflow-hidden">
              <div className="absolute inset-0 line-grid opacity-15" />
              <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
              <div className="relative h-full flex flex-col justify-between gap-10">
                <div>
                  <div className="grid place-items-center h-12 w-12 rounded-xl bg-accent text-accent-foreground">
                    <Phone className="h-5 w-5" />
                  </div>
                  <span className="mt-8 block text-[11px] tracking-[0.32em] uppercase text-accent font-semibold">Guide line</span>
                  <a href="tel:#" className="block mt-3 font-display text-5xl sm:text-6xl text-white hover:text-accent transition leading-[0.95]">
                    xxx-xxx-xxxx
                  </a>
                  <p className="mt-6 text-white/70 text-sm leading-relaxed max-w-xs">
                    Real humans · educational comparisons · we never request provider passwords.
                  </p>
                </div>
                <a href="tel:#" className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-6 py-3 font-semibold hover:bg-white hover:text-primary transition w-fit">
                  Call now <Phone className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {[
              { icon: Mail, t: "Email", v: "support@Skyconet.com", href: "mailto:support@Skyconet.com", sub: "Reply within 2 business hours" },
              { icon: Clock, t: "Hours", v: "Mon–Sat · 8a–8p", sub: "Guides available across U.S. time zones" },
              { icon: MapPin, t: "Coverage", v: "48 states nationwide", sub: "Plan comparisons by ZIP code" },
              { icon: ShieldCheck, t: "Promise", v: "No credentials requested", sub: "We never ask for provider passwords" },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 60}>
                <a href={c.href ?? "#"} className="bg-card p-8 h-full block hover:bg-surface transition group">
                  <div className="flex items-center justify-between">
                    <div className="grid place-items-center h-10 w-10 rounded-full bg-primary text-primary-foreground">
                      <c.icon className="h-4 w-4" />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.32em] text-ink-muted">{c.t}</span>
                  </div>
                  <div className="mt-6 font-display text-2xl text-ink">{c.v}</div>
                  <div className="mt-1.5 text-xs text-ink-muted">{c.sub}</div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-12">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8 grid lg:grid-cols-12 gap-6">
          <Reveal className="lg:col-span-8">
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 4000); }}
              className="panel p-10 sm:p-14"
            >
              <span className="eyebrow">Send a message</span>
              <h2 className="mt-5 font-display text-4xl sm:text-5xl font-medium text-ink leading-[1.05] tracking-[-0.025em]">
                Tell us what you're<br/><span className="serif-italic text-primary">comparing today.</span>
              </h2>
              <p className="mt-4 text-ink-muted text-sm max-w-lg">A guide will follow up with relevant comparisons and Learning Center articles — no upsell, no credentials required.</p>

              <div className="mt-10 grid sm:grid-cols-2 gap-5">
                <Field label="Full name" type="text" placeholder="Jane Doe" />
                <Field label="Phone number" type="tel" placeholder="(555) 123-4567" />
                <Field label="Email" type="email" placeholder="jane@example.com" />
                <Field label="ZIP code" type="text" placeholder="80202" />
              </div>
              <div className="mt-5">
                <label className="text-[10px] font-semibold text-ink-muted uppercase tracking-[0.32em]">Message</label>
                <textarea
                  required
                  rows={5}
                  placeholder="What service category are you researching — internet, TV, wireless, smart home?"
                  className="mt-2 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-primary resize-none text-ink placeholder:text-ink-muted/60"
                />
              </div>
              <button className="mt-8 btn-primary">
                {sent ? "Sent — talk soon!" : (<><Send className="h-4 w-4" /> Send message</>)}
              </button>
              <p className="mt-4 text-[11px] text-ink-muted">
                By submitting you acknowledge Skyconet is a consumer comparison and information platform.
              </p>
            </form>
          </Reveal>

          <div className="lg:col-span-4 space-y-6">
            <Reveal delay={100}>
              <div className="panel panel-accent p-8 relative overflow-hidden">
                <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-accent/40 blur-3xl" />
                <div className="relative text-white">
                  <div className="grid place-items-center h-11 w-11 rounded-xl bg-accent text-accent-foreground">
                    <Search className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl">Coverage check</h3>
                  <p className="mt-2 text-sm text-white/85">Enter your ZIP — we'll let you know what internet, TV and wireless options are available in your area.</p>
                  <form
                    onSubmit={(e)=>{e.preventDefault(); setZipResult("checking"); setTimeout(()=>setZipResult("available"), 900);}}
                    className="mt-5 flex gap-2"
                  >
                    <input required placeholder="ZIP code" maxLength={5} className="flex-1 rounded-full bg-white/15 border border-white/25 px-5 py-3 text-sm outline-none placeholder:text-white/60 focus:border-white text-white" />
                    <button className="rounded-full bg-accent text-accent-foreground px-5 py-3 font-semibold text-sm hover:bg-white hover:text-primary transition">Check</button>
                  </form>
                  {zipResult === "checking" && <p className="mt-3 text-xs text-white/80">Checking your area…</p>}
                  {zipResult === "available" && (
                    <p className="mt-3 text-xs text-white font-semibold">✓ Comparisons available — call xxx-xxx-xxxx to walk through them.</p>
                  )}
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="panel p-8">
                <div className="grid place-items-center h-11 w-11 rounded-xl bg-primary text-primary-foreground">
                  <HeadphonesIcon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-2xl text-ink">Prefer to call?</h3>
                <p className="mt-2 text-sm text-ink-muted">Skip the form — call our guide line and talk through your options with a real human.</p>
                <a href="tel:#" className="mt-5 btn-primary w-full"><Phone className="h-4 w-4" /> xxx-xxx-xxxx</a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative py-16">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
          <Reveal>
            <div className="panel p-0 overflow-hidden aspect-[16/7] relative">
              <img src={contactBg} alt="Coverage map illustration" loading="lazy" width={1600} height={1100} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute top-6 left-6 glass rounded-2xl p-5 shadow-soft max-w-[320px]">
                <span className="chip">Comparison platform</span>
                <div className="mt-3 font-display text-2xl text-ink">Skyconet</div>
                <div className="text-sm text-ink-muted mt-1">Plan comparisons across 48 states — educational and consumer-focused.</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-[10px] font-semibold text-ink-muted uppercase tracking-[0.32em]">{label}</label>
      <input required {...rest} className="mt-2 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-primary text-ink placeholder:text-ink-muted/60" />
    </div>
  );
}
