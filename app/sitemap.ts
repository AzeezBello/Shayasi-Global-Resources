import type { MetadataRoute } from "next"

import { siteConfig } from "@/lib/seo"

const routes = [
  "/",
  "/about",
  "/services",
  "/projects",
  "/contact",
  "/subsidiaries/shayasi-farms",
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route === "/" ? "" : route}`,
  }))
}
