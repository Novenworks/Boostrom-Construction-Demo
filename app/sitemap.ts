import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/contact"].map((path) => ({
    url: `${site.deployedUrl}${path}`,
    changeFrequency: "yearly",
    priority: path === "" ? 1 : 0.6,
  }));
}
