import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

type CtaBannerProps = {
  eyebrow?: string
  title: string
  description: string
  href?: string
  ctaLabel?: string
}

export default function CtaBanner({
  eyebrow = "Get in touch",
  title,
  description,
  href = "/contact",
  ctaLabel = "Contact the team",
}: CtaBannerProps) {
  return (
    <section className="section-shell page-space pb-12 pt-0 md:pb-16">
      <div className="dark-panel p-8 md:p-10">
        <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="eyebrow border-white/15 bg-white/8 text-white/70">
              {eyebrow}
            </span>
            <h2 className="mt-5 section-title text-white">{title}</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/72">
              {description}
            </p>
          </div>

          <Button asChild variant="secondary" size="lg" className="self-start lg:self-auto">
            <Link href={href}>
              {ctaLabel}
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
