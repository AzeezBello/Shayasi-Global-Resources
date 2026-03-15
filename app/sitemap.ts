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
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route === "/contact" ? 0.9 : 0.8,
  }))
}
