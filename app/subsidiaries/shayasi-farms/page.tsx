import type { Metadata } from "next"
import Image from "next/image"
import type { LucideIcon } from "lucide-react"
import { ArrowRight, Leaf, Users, Warehouse, Wheat } from "lucide-react"
import Link from "next/link"

import CtaBanner from "@/components/cta-banner"
import PageHero from "@/components/page-hero"
import { Button } from "@/components/ui/button"
import { siteImages } from "@/lib/site-images"

const agricultureAreas = [
  {
    title: "Crop Farming",
    description:
      "We cultivate crops including soya beans, sorghum, hibiscus, rice, ginger, and more while improving land productivity and supporting reliable agricultural supply chains.",
    icon: Wheat,
    image: siteImages.farming.crop,
    alt: "Crop farming field at Shayasi Farms",
  },
  {
    title: "Livestock Farming",
    description:
      "Our livestock operations are managed with care and modern farming practices to deliver reliable, high-quality animal products.",
    icon: Leaf,
    image: siteImages.farming.livestock,
    alt: "Agricultural machinery and farmland",
  },
  {
    title: "Agricultural Trading",
    description:
      "We trade high-quality agricultural products for local and regional markets, with selected products such as ginger and hibiscus also reaching international buyers.",
    icon: Warehouse,
    image: siteImages.farming.trade,
    alt: "Agricultural production field supporting trading and supply chains",
  },
] satisfies Array<{
  title: string
  description: string
  icon: LucideIcon
  image: string
  alt: string
}>

export const metadata: Metadata = {
  title: "Shayasi Farms",
  description:
    "Shayasi Farms Limited is the agricultural subsidiary of Shayasi Global Resources focused on sustainable agriculture investment Nigeria through crop farming, livestock farming, agricultural trading, and export-ready produce.",
}

export default function ShayasiFarmsPage() {
  return (
    <main className="pb-8 md:pb-12">
      <PageHero
        eyebrow="Shayasi Farms"
        title="Sustainable and productive agriculture rooted in quality, community impact, and long-term value."
        description="Shayasi Global Resources Limited is committed to crop and livestock farming, as well as the trading of high-quality agricultural products that support local communities and provide reliable produce."
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
            Agriculture and farming designed to be productive, responsible, and market-ready.
          </h2>
          <p className="mt-4 lead-copy">
            Shayasi Global Resources Limited is committed to sustainable and productive agriculture through crop farming, livestock farming, and the trading of high-quality agricultural products.
          </p>
          <p className="mt-4 lead-copy">
            Our farms cultivate a variety of crops including soya beans, sorghum, hibiscus, rice, ginger, and more. We focus on improving the productivity of the land while preserving its natural value and maintaining the nutritional quality of the food we produce.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {agricultureAreas.map((area, index) => {
            const Icon = area.icon

            return (
              <div
                key={area.title}
                className="surface-card overflow-hidden p-0 fade-in-up"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={area.image}
                    alt={area.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/68 via-slate-950/10 to-transparent" />
                  <div className="absolute left-5 top-5 inline-flex rounded-full bg-white/14 p-3 text-white backdrop-blur-sm">
                    <Icon className="size-5" />
                  </div>
                </div>

                <div className="p-6 md:p-7">
                  <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                    {area.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {area.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="section-shell page-space pt-0">
        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="dark-panel p-8 md:p-10">
            <div className="relative z-10">
              <div className="relative mb-6 aspect-[16/9] overflow-hidden rounded-[1.6rem] border border-white/10">
                <Image
                  src={siteImages.farming.banner}
                  alt="Agricultural field and crop development"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/58 via-slate-950/8 to-transparent" />
              </div>
              <span className="eyebrow border-white/15 bg-white/8 text-white/70">Our Commitment to Agriculture</span>
              <h2 className="mt-5 section-title text-white">
                Modern farming, export-ready produce, and positive impact for communities we serve.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/74">
                Selected products such as ginger and hibiscus are also exported, bringing the best of Nigerian agriculture to international markets through careful management and quality-focused operations.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Sustainable crop and livestock farming",
                  "Improving land productivity while preserving natural value",
                  "Supporting local communities with reliable produce",
                  "High-quality products for local and export markets",
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
                To build a modern agribusiness enterprise that supports agricultural innovation, food security, export growth, and economic development.
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
                We welcome collaboration with investors, agricultural experts, buyers, and development partners who share our vision for building a strong, sustainable, and market-ready agricultural sector.
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
