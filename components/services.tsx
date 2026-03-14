import Image from "next/image"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { ArrowRight, Building2, Factory, TrendingUp } from "lucide-react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { siteImages } from "@/lib/site-images"

const services = [
  {
    title: "Oil & Gas",
    description:
      "We operate in the downstream oil and gas sector, supplying and distributing refined petroleum products including petrol, diesel, and gas across Nigeria.",
    icon: Factory,
    points: ["Petrol, diesel, and gas supply", "Fuel station operations", "Reliable nationwide distribution"],
    image: siteImages.homeServices.oil,
    alt: "Oil and gas infrastructure and logistics",
  },
  {
    title: "Investments",
    description:
      "We offer strategic investment opportunities across real estate, agriculture, and the downstream oil and gas sector with a focus on sustainable long-term returns.",
    icon: TrendingUp,
    points: ["Real estate and land opportunities", "Agriculture and agribusiness", "Downstream energy investments"],
    image: siteImages.homeServices.investment,
    alt: "Investment growth visual",
  },
  {
    title: "Real Estate",
    description:
      "We provide reliable property services across the buying and selling of lands and buildings, leasing, rentals, management, and long-term real estate investment.",
    icon: Building2,
    points: ["Land and building sales", "Leasing and rentals", "Property management"],
    image: siteImages.homeServices.realEstate,
    alt: "Modern residential real estate development",
  },
] satisfies Array<{
  title: string
  description: string
  icon: LucideIcon
  points: string[]
  image: string
  alt: string
}>

export default function ServicesGrid() {
  return (
    <section className="section-shell page-space">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <span className="eyebrow">Our core business areas</span>
          <h2 className="mt-5 section-title text-balance">
            Diversified sectors with a shared focus on growth, value, and sustainability.
          </h2>
          <p className="mt-4 lead-copy">
            Shayasi Global Resources operates across energy, investments, real estate, and agriculture with a long-term vision for economic development in Nigeria.
          </p>
        </div>

        <Button asChild variant="outline" size="lg" className="self-start md:self-auto">
          <Link href="/services">
            Explore Our Services
            <ArrowRight />
          </Link>
        </Button>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon

          return (
            <Card
              key={service.title}
              className="fade-in-up overflow-hidden border-white/70 bg-white/78"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(min-width: 1024px) 22vw, (min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover/card:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/72 via-slate-950/10 to-transparent" />
                <div className="absolute left-5 top-5 inline-flex rounded-full bg-white/14 p-3 text-white backdrop-blur-sm">
                  <Icon className="size-5" />
                </div>
              </div>

              <div className="px-6 pb-6 pt-5">
                <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="rounded-2xl border border-border/60 bg-background/80 px-4 py-3 text-sm text-foreground"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
