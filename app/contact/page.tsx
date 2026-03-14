import type { Metadata } from "next"
import { Clock3, ExternalLink, Mail, MapPin } from "lucide-react"

import PageHero from "@/components/page-hero"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/seo"

const inquiryTopics = [
  {
    title: "Strategic partnerships",
    description: "Conversations around sector-aligned collaboration and opportunity development.",
  },
  {
    title: "Investment and project interest",
    description: "Introductions related to relevant projects, land, or long-view investment themes.",
  },
  {
    title: "General business inquiries",
    description: "Questions about the company, its services, or Shayasi Farms.",
  },
] as const

const mapQuery = encodeURIComponent("AYINKE HOUSE, 120 Mushin Road, Isolo, Lagos, Nigeria")
const mapEmbedSrc = `https://www.google.com/maps?q=${mapQuery}&z=15&output=embed`
const mapLink = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Shayasi Global Resources in Lagos, Nigeria for business inquiries and partnership discussions.",
}

export default function Contact() {
  return (
    <main className="pb-8 md:pb-12">
      <PageHero
        eyebrow="Contact"
        title="Reach the team in Lagos for thoughtful business conversations."
        description="Whether you are exploring a partnership, a project conversation, or a general inquiry, the most direct route is through the contact details below."
        aside={
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Primary channels
            </p>
            <div className="mt-5 space-y-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="block rounded-[1.35rem] border border-border/70 bg-background/75 px-4 py-4"
              >
                <p className="font-semibold tracking-tight text-foreground">{siteConfig.email}</p>
                <p className="mt-1 text-sm text-muted-foreground">Email us directly</p>
              </a>
              <div className="rounded-[1.35rem] border border-border/70 bg-background/75 px-4 py-4">
                <p className="font-semibold tracking-tight text-foreground">Head office</p>
                <p className="mt-1 text-sm text-muted-foreground">AYINKE HOUSE, 120 Mushin Road, Isolo, Lagos, Nigeria</p>
              </div>
            </div>
          </div>
        }
      />

      <section className="section-shell page-space">
        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="surface-card p-6 md:p-7">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Contact details
            </h2>

            <div className="mt-6 grid gap-4">
              <div className="rounded-[1.4rem] border border-border/70 bg-background/75 p-5">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-5 text-primary" />
                  <div>
                    <p className="font-semibold tracking-tight text-foreground">Office address</p>
                    <div className="mt-2 space-y-1 text-sm leading-7 text-muted-foreground">
                      {siteConfig.addressLines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.4rem] border border-border/70 bg-background/75 p-5">
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 size-5 text-primary" />
                  <div>
                    <p className="font-semibold tracking-tight text-foreground">Email</p>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                      {siteConfig.email}
                    </p>
                  </div>
                </div>
              </div>

            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href={`mailto:${siteConfig.email}`}>Email the team</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={mapLink} target="_blank" rel="noreferrer">
                  Open map
                </a>
              </Button>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="dark-panel p-6 md:p-7">
              <div className="relative z-10">
                <div className="inline-flex rounded-full border border-white/12 bg-white/8 p-3 text-white">
                  <Clock3 className="size-5" />
                </div>
                <h2 className="mt-5 text-2xl font-semibold tracking-tight text-white">
                  Best reasons to reach out
                </h2>
                <div className="mt-6 space-y-3">
                  {inquiryTopics.map((topic) => (
                    <div
                      key={topic.title}
                      className="rounded-[1.35rem] border border-white/12 bg-white/8 px-4 py-4"
                    >
                      <p className="font-semibold tracking-tight text-white">{topic.title}</p>
                      <p className="mt-2 text-sm leading-7 text-white/72">{topic.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="surface-card overflow-hidden p-0">
              <div className="flex items-center justify-between border-b border-border/70 px-6 py-5">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                    Location map
                  </p>
                  <p className="mt-1 text-lg font-semibold tracking-tight text-foreground">
                    {siteConfig.location}
                  </p>
                </div>

                <a
                  href={mapLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
                >
                  Open larger map
                  <ExternalLink className="size-4" />
                </a>
              </div>

              <div className="aspect-[4/3] w-full">
                <iframe
                  title="Map showing Shayasi Global Resources office location"
                  src={mapEmbedSrc}
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
