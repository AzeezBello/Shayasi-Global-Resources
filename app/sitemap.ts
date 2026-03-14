import type { MetadataRoute } from "next"

import { siteConfig } from "@/lib/seo"

const routes = [
  "/",
  "/about",
  "/services",
  "/contact",
  "/subsidiaries/shayasi-farms",
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route === "/" ? "" : route}`,
  }))
}
