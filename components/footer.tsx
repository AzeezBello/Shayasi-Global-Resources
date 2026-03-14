import Link from "next/link"
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"

import { navigation, sectors, siteConfig } from "@/lib/seo"

export default function Footer() {
  return (
    <footer className="pb-6 pt-16 md:pt-24">
      <div className="section-shell">
        <div className="dark-panel p-8 md:p-10">
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
            <div className="max-w-xl">
              <span className="eyebrow border-white/15 bg-white/8 text-white/70">
                Diversified growth platform
              </span>

              <h2 className="mt-5 section-title text-white">
                Energy, capital, land, and agriculture under one clear brand.
              </h2>

              <p className="mt-4 max-w-xl text-base leading-7 text-white/72">
                {siteConfig.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/70">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 hover:bg-white/12"
                >
                  <Mail className="size-4" />
                  {siteConfig.email}
                </a>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 hover:bg-white/12"
                >
                  <Phone className="size-4" />
                  {siteConfig.phone}
                </a>
              </div>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white"
              >
                Contact the team
                <ArrowRight className="size-4" />
              </Link>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-white/55">
                Explore
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-white/75">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/subsidiaries/shayasi-farms" className="hover:text-white">
                    Shayasi Farms
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-white/55">
                Reach us
              </h3>

              <div className="mt-4 space-y-4 text-sm text-white/75">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0" />
                  <div>
                    {siteConfig.addressLines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 size-4 shrink-0" />
                  <div>
                    <p>{siteConfig.phone}</p>
                  </div>
                </div>

                <div>
                  <p className="font-medium text-white">Strategic sectors</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {sectors.map((sector) => (
                      <span
                        key={sector}
                        className="rounded-full border border-white/12 bg-white/8 px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-white/70"
                      >
                        {sector}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
            <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
            <p>{siteConfig.location}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
