import type { Metadata } from "next"
import type { LucideIcon } from "lucide-react"
import { ArrowRight, Leaf, Users, Warehouse, Wheat } from "lucide-react"
import Link from "next/link"

import CtaBanner from "@/components/cta-banner"
import PageHero from "@/components/page-hero"
import { Button } from "@/components/ui/button"

const agricultureAreas = [
  {
    title: "Crop Farming",
    description:
      "We cultivate a variety of crops to support local food production and agricultural supply chains.",
    icon: Wheat,
  },
  {
    title: "Livestock Farming",
    description:
      "Our livestock operations are designed to provide high-quality animal products while maintaining modern farming standards.",
    icon: Leaf,
  },
  {
    title: "Agricultural Trading",
    description:
      "Shayasi Farms participates in the trading and distribution of agricultural commodities to support local and regional markets.",
    icon: Warehouse,
  },
] satisfies Array<{
  title: string
  description: string
  icon: LucideIcon
}>

export const metadata: Metadata = {
  title: "Shayasi Farms",
  description:
    "Shayasi Farms Limited is the agricultural subsidiary of Shayasi Global Resources focused on agriculture investment Nigeria through crop farming, livestock farming, and agricultural trading.",
}

export default function ShayasiFarmsPage() {
  return (
    <main className="pb-8 md:pb-12">
      <PageHero
        eyebrow="Shayasi Farms"
        title="An agricultural subsidiary focused on agribusiness development and food production in Nigeria."
        description="Shayasi Farms Limited is the agricultural subsidiary of Shayasi Global Resources, focused on advancing agribusiness development and food production in Nigeria."
        aside={
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Focus areas
            </p>
            <div className="mt-5 space-y-3">
              {agricultureAreas.map((area) => (
                <div
                  key={area.title}
                  className="rounded-[1.35rem] border border-border/70 bg-background/75 px-4 py-4"
                >
                  <p className="font-semibold tracking-tight text-foreground">{area.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        }
      />

      <section className="section-shell page-space">
        <div className="max-w-3xl">
          <span className="eyebrow">Overview</span>
          <h2 className="mt-5 section-title text-balance">
            Established to support sustainable agriculture and economic empowerment.
          </h2>
          <p className="mt-4 lead-copy">
            Established to support sustainable agriculture and economic empowerment, Shayasi Farms operates across several areas of agricultural production and trading.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {agricultureAreas.map((area, index) => {
            const Icon = area.icon

            return (
              <div
                key={area.title}
                className="surface-card p-6 md:p-7 fade-in-up"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <div className="inline-flex rounded-full bg-primary/10 p-3 text-primary">
                  <Icon className="size-5" />
                </div>
                <h2 className="mt-5 text-2xl font-semibold tracking-tight text-foreground">
                  {area.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {area.description}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="section-shell page-space pt-0">
        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="dark-panel p-8 md:p-10">
            <div className="relative z-10">
              <span className="eyebrow border-white/15 bg-white/8 text-white/70">Our Commitment to Agriculture</span>
              <h2 className="mt-5 section-title text-white">
                Sustainable farming, stronger productivity, and support for food security in Nigeria.
              </h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Sustainable farming practices",
                  "Improving agricultural productivity",
                  "Supporting local communities",
                  "Contributing to food security in Nigeria",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.35rem] border border-white/12 bg-white/8 px-4 py-4 text-sm text-white/80"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <Button asChild variant="secondary" size="lg" className="mt-8">
                <Link href="/contact">
                  Contact Us
                  <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="surface-card p-6 md:p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Our Vision for Agriculture
              </p>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                To build a modern agribusiness enterprise that supports agricultural innovation, food security, and economic development.
              </p>
            </div>

            <div className="surface-card p-6 md:p-7">
              <div className="inline-flex rounded-full bg-primary/10 p-3 text-primary">
                <Users className="size-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-tight text-foreground">
                Partnership Opportunities
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                We welcome collaboration with investors, agricultural experts, and development partners who share our vision for building a strong and sustainable agricultural sector.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow="Agribusiness"
        title="Interested in agriculture investment and partnership opportunities with Shayasi Farms?"
        description="Reach out to discuss agribusiness collaboration, agricultural trading, food production, or development partnerships."
        ctaLabel="Contact Us"
      />
    </main>
  )
}
