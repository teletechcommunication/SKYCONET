import { Reveal } from "@/components/site/Reveal";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  bgImage,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  bgImage?: string;
}) {
  return (
    <section className="relative overflow-hidden">
      {bgImage && (
        <div
          aria-hidden
          className="absolute inset-0 sticky-bg opacity-25"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-mesh opacity-70 pointer-events-none" />
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-8 pt-20 pb-24 sm:pt-28 sm:pb-32">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <Reveal>
              {eyebrow && <span className="eyebrow">{eyebrow}</span>}
              <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-medium text-ink leading-[1.02] tracking-[-0.025em]">
                {title}
              </h1>
            </Reveal>
          </div>
          {subtitle && (
            <div className="lg:col-span-4 lg:pb-3">
              <Reveal delay={120}>
                <div className="border-l-2 border-accent pl-5">
                  <p className="text-base text-ink-muted leading-relaxed">{subtitle}</p>
                </div>
              </Reveal>
            </div>
          )}
        </div>
      </div>
      <div className="rule" />
    </section>
  );
}
