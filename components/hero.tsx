import Link from "next/link"
import { ArrowRight, MapPin, ShieldCheck, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { companyMetrics, siteConfig } from "@/lib/seo"

const focusAreas = [
  "Oil & Gas",
  "Strategic investments",
  "Real estate development",
  "Shayasi Farms expansion",
] as const

export default function Hero() {
  return (
    <section className="section-shell pt-8 md:pt-12">
      <div className="relative overflow-hidden rounded-[2.25rem] border border-white/70 bg-[radial-gradient(circle_at_top_left,rgba(212,177,103,0.22),transparent_28%),radial-gradient(circle_at_top_right,rgba(33,94,88,0.16),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.78),rgba(255,255,255,0.95))] px-6 py-10 shadow-[0_28px_90px_-44px_rgba(15,23,42,0.45)] md:px-10 md:py-14 lg:px-12 lg:py-16">
        <div className="absolute -right-16 top-8 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -left-10 bottom-10 h-40 w-40 rounded-full bg-accent/30 blur-3xl" />
        <div className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.78fr)] lg:items-stretch lg:gap-6">
          <div className="relative z-10 fade-in-up">
            <span className="eyebrow bg-white/82">
              <Sparkles className="size-3.5" />
              Strategic growth from Lagos, Nigeria
            </span>

            <h1 className="mt-6 display-title max-w-4xl text-balance text-foreground">
              Powering Energy,
              <span className="block">
                Investments &amp;
                <span className="italic text-primary"> Sustainable Development</span>
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-[1.02rem] leading-8 text-foreground/72 md:text-[1.1rem]">
              Shayasi Global Resources is a diversified Nigerian company specializing in Oil &amp; Gas, strategic investments, and real estate development. Through innovation, industry partnerships, and long-term vision, we deliver projects that drive economic growth and sustainable development across Nigeria.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {focusAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-border/70 bg-white/82 px-3 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground"
                >
                  {area}
                </span>
              ))}
            </div>

            <div className="mt-6 max-w-2xl rounded-[1.6rem] border border-primary/12 bg-primary/6 px-5 py-5">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                Our mission is simple
              </p>
              <p className="mt-3 text-base leading-7 text-foreground/88 md:text-[1.02rem]">
                To build value-driven ventures that support industries, communities, and future generations.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg">
                <Link href="/services">
                  Explore Our Services
                  <ArrowRight />
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>

            <div className="mt-9 grid gap-3 sm:grid-cols-3">
              {companyMetrics.map((metric, index) => (
                <div
                  key={metric.label}
                  className="stat-card fade-in-up"
                  style={{ animationDelay: `${120 + index * 90}ms` }}
                >
                  <p className="text-[1.85rem] font-semibold tracking-tight text-foreground md:text-[2.05rem]">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-[0.85rem] leading-6 text-muted-foreground">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 grid gap-4 lg:grid-rows-[minmax(0,1fr)_auto]">
            <div className="dark-panel p-6 md:p-7 fade-in-up" style={{ animationDelay: "220ms" }}>
              <div className="relative z-10">
                <div className="inline-flex rounded-full border border-white/12 bg-white/8 p-3 text-white">
                  <ShieldCheck className="size-5" />
                </div>

                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-white/58">
                  Why Shayasi
                </p>
                <h2 className="mt-3 text-[1.7rem] font-semibold tracking-tight text-white md:text-[2rem]">
                  Innovation, partnerships, and long-term sector vision.
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/74">
                  Built around industries that influence growth, infrastructure, and sustainable value creation across Nigeria.
                </p>

                <div className="mt-6 grid gap-3">
                  {focusAreas.map((area, index) => (
                    <div
                      key={area}
                      className="flex items-center gap-4 rounded-[1.35rem] border border-white/12 bg-white/8 px-4 py-4"
                    >
                      <span className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-white/45">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="text-sm font-medium text-white/84">{area}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="surface-card p-6 md:p-7 fade-in-up" style={{ animationDelay: "320ms" }}>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Head office
              </p>

              <div className="mt-4 flex items-start gap-3 text-foreground/80">
                <MapPin className="mt-1 size-4 shrink-0 text-primary" />
                <div className="space-y-1">
                  {siteConfig.addressLines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>

              <p className="mt-5 rounded-[1.35rem] border border-border/70 bg-background/70 px-4 py-4 text-sm leading-7 text-muted-foreground">
                Operating from our head office in Lagos, Shayasi Global Resources works with industry partners and stakeholders to develop projects that create value, promote economic growth, and support national development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
