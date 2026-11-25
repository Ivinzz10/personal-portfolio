import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) return [];

  return [
    {
      url: siteUrl.href,
      // Update this date when the public portfolio content materially changes.
      lastModified: new Date("2026-11-26"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
