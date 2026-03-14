import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { companyMetrics } from "@/lib/seo"
import { siteImages } from "@/lib/site-images"

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
            <div className="grid gap-4 sm:grid-cols-2 fade-in-up" style={{ animationDelay: "220ms" }}>
              <div className="relative min-h-[320px] overflow-hidden rounded-[1.9rem] border border-white/70 shadow-[0_24px_80px_-36px_rgba(15,23,42,0.38)] sm:col-span-2 md:min-h-[360px]">
                <Image
                  src={siteImages.hero.oil}
                  alt="Oil and gas logistics operations"
                  fill
                  sizes="(min-width: 1024px) 34vw, 100vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/78 via-slate-950/20 to-transparent" />
                <div className="absolute inset-x-5 bottom-5 rounded-[1.45rem] border border-white/12 bg-slate-950/45 p-5 backdrop-blur-md">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-white/58">
                    Core sectors
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {focusAreas.map((area) => (
                      <span
                        key={area}
                        className="rounded-full border border-white/12 bg-white/10 px-3 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white/76"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative min-h-[190px] overflow-hidden rounded-[1.75rem] border border-white/70 shadow-[0_24px_80px_-36px_rgba(15,23,42,0.38)]">
                <Image
                  src={siteImages.hero.investment}
                  alt="Investment growth concept"
                  fill
                  sizes="(min-width: 1024px) 16vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" />
                <div className="absolute inset-x-4 bottom-4">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/62">
                    Investments
                  </p>
                  <p className="mt-2 text-sm font-medium text-white/84">
                    Capital positioning for long-term value.
                  </p>
                </div>
              </div>

              <div className="relative min-h-[190px] overflow-hidden rounded-[1.75rem] border border-white/70 shadow-[0_24px_80px_-36px_rgba(15,23,42,0.38)]">
                <Image
                  src={siteImages.hero.realEstate}
                  alt="Premium real estate development"
                  fill
                  sizes="(min-width: 1024px) 16vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" />
                <div className="absolute inset-x-4 bottom-4">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/62">
                    Real Estate
                  </p>
                  <p className="mt-2 text-sm font-medium text-white/84">
                    Built environments that support growth.
                  </p>
                </div>
              </div>
            </div>

            <div className="surface-card p-6 md:p-7 fade-in-up" style={{ animationDelay: "320ms" }}>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Operating approach
              </p>

              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
                Partnerships, disciplined execution, and long-view growth.
              </h2>

              <p className="mt-5 rounded-[1.35rem] border border-border/70 bg-background/70 px-4 py-4 text-sm leading-7 text-muted-foreground">
                Shayasi Global Resources works with industry partners and stakeholders to develop projects that create value, promote economic growth, and support long-term national development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
