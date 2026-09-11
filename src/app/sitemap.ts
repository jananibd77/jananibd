import type { MetadataRoute } from "next";
import { journalArticles } from "@/data/journal";
import { products } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://jananicraft.com";

  // Static core corporate routes
  const staticRoutes = [
    "",
    "/collections",
    "/about",
    "/craftsmanship",
    "/journal",
    "/contact",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic product collection detail routes
  const productRoutes = products.map((product) => ({
    url: `${baseUrl}/collections/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Dynamic journal article routes
  const journalRoutes = journalArticles.map((article) => ({
    url: `${baseUrl}/journal/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...productRoutes, ...journalRoutes];
}
