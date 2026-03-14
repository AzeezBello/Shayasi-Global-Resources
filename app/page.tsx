import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2, MapPin, Target } from "lucide-react"

import CtaBanner from "@/components/cta-banner"
import Hero from "@/components/hero"
import ServicesGrid from "@/components/services"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/seo"

const partnershipReasons = [
  "Strategic industry expertise",
  "Diversified investment portfolio",
  "Long-term project sustainability",
  "Commitment to economic development",
] as const

const agricultureFocus = [
  "Crop farming",
  "Livestock production",
  "Agricultural trading",
] as const

export const metadata: Metadata = {
  title: "Powering Energy, Investments & Sustainable Development",
  description:
    "Shayasi Global Resources is a diversified Nigerian company specializing in Oil and Gas Nigeria, investment company Lagos services, real estate development Nigeria projects, and agriculture investment Nigeria through Shayasi Farms.",
}

export default function HomePage() {
  return (
    <main className="pb-8 md:pb-12">
      <Hero />
      <ServicesGrid />

      <section className="section-shell page-space pt-0">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="max-w-2xl">
            <span className="eyebrow">Who we are</span>
            <h2 className="mt-5 section-title text-balance">
              A forward-looking company committed to energy, infrastructure, and agriculture.
            </h2>
            <p className="mt-4 lead-copy">
              Shayasi Global Resources is a forward-looking company committed to developing opportunities across energy, infrastructure, and agriculture. With a strong focus on strategic partnerships and sustainable investment models, the company continues to expand its footprint across key sectors of the Nigerian economy.
            </p>
            <p className="mt-4 lead-copy">
              Operating from our head office in Lagos, Shayasi Global Resources works with industry partners and stakeholders to develop projects that create value, promote economic growth, and support national development.
            </p>
          </div>

          <div className="surface-card p-6 md:p-7">
            <div className="inline-flex rounded-full bg-primary/10 p-3 text-primary">
              <MapPin className="size-5" />
            </div>
            <h3 className="mt-5 text-xl font-semibold tracking-tight text-foreground">
              Head Office
            </h3>
            <div className="mt-4 space-y-1 text-sm leading-7 text-muted-foreground">
              {siteConfig.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell page-space pt-0">
        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="dark-panel p-8 md:p-10">
            <div className="relative z-10">
              <span className="eyebrow border-white/15 bg-white/8 text-white/70">
                Our subsidiary
              </span>
              <h2 className="mt-5 section-title text-white">
                Shayasi Farms
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/74">
                Shayasi Farms Limited is the agricultural arm of Shayasi Global Resources. The company focuses on crop farming, livestock production, and agricultural trading, supporting Nigeria&apos;s food security and agribusiness sector.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {agricultureFocus.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.4rem] border border-white/12 bg-white/8 px-4 py-4 text-sm text-white/80"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <Button asChild variant="secondary" size="lg" className="mt-8">
                <Link href="/subsidiaries/shayasi-farms">
                  Learn More About Shayasi Farms
                  <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="surface-card p-6 md:p-7">
              <div className="inline-flex rounded-full bg-primary/10 p-3 text-primary">
                <Target className="size-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-tight text-foreground">
                Our Vision
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                To become a trusted Nigerian enterprise recognized for excellence in energy, investments, real estate, and agribusiness development.
              </p>
            </div>

            <div className="surface-card p-6 md:p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Why Partner With Shayasi
              </p>
              <div className="mt-6 space-y-3">
                {partnershipReasons.map((reason) => (
                  <div
                    key={reason}
                    className="flex items-center gap-3 rounded-2xl border border-border/70 bg-background/70 px-4 py-3 text-sm font-medium text-foreground"
                  >
                    <CheckCircle2 className="size-4 text-primary" />
                    {reason}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow="Connect with Shayasi"
        title="Build with a company focused on long-term value, national development, and sector growth."
        description="Reach out for discussions around services, partnerships, investments, or development opportunities."
        ctaLabel="Contact Us"
      />
    </main>
  )
}
