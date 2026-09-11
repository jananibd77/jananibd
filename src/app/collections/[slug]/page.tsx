import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";
import { EndiFabricExhibition } from "@/components/collections/EndiFabricExhibition";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const base = products.map((product) => ({
    slug: product.slug,
  }));
  return [
    ...base,
    { slug: "half-silk-traditional-handloom-saree" },
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const effectiveSlug =
    slug === "half-silk-traditional-handloom-saree"
      ? "half-silk-handloom-sharee"
      : slug;
  const product = products.find((p) => p.slug === effectiveSlug);

  if (!product) {
    return {
      title: "Artifact Not Found",
    };
  }

  return {
    title: `${product.name} | Janani Craft & Fashion`,
    description: product.shortDescription,
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      images: [product.images.main],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const effectiveSlug =
    slug === "half-silk-traditional-handloom-saree"
      ? "half-silk-handloom-sharee"
      : slug;
  const product = products.find((p) => p.slug === effectiveSlug);

  if (!product) {
    notFound();
  }

  // Dedicated Archival & Process Exhibition for Quality Endi Fabric (Than Kapor)
  if (slug === "quality-endi-fabric-than-kapor") {
    return <EndiFabricExhibition product={product} />;
  }

  // Related products: prioritize same category, then pad up to 3 from other heritage works
  const sameCategory = products.filter(
    (p) => p.id !== product.id && p.category === product.category
  );
  const otherCategory = products.filter(
    (p) => p.id !== product.id && p.category !== product.category
  );
  const fallbackRelated = [...sameCategory, ...otherCategory].slice(0, 3);

  return (
    <div className="w-full bg-white border-b border-stone-200">
      {/* Main Product Showcase */}
      <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-24 sm:pt-32 lg:pt-36 pb-10 sm:pb-12 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-start">
          {/* Left Column: Visual Gallery */}
          <div className="lg:col-span-6 xl:col-span-7 space-y-4 sm:space-y-6">
            {/* Primary Main Image Frame */}
            <div className="relative aspect-4/5 sm:aspect-square lg:aspect-4/5 w-full overflow-hidden rounded-[1px]">
              <Image
                src={product.images.main}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

            </div>

            {/* Additional Detail Thumbnails if available */}
            {product.images.detail && product.images.detail !== product.images.main && (
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-1">
                  <div className="relative aspect-video w-full overflow-hidden rounded-[1px]">
                    <Image
                      src={product.images.detail}
                      alt={`${product.name} macro weave detail`}
                      fill
                      sizes="25vw"
                      className="object-cover"
                    />
                  </div>
                  <p className="text-[10px] uppercase tracking-wider font-mono text-stone-500">Macro Detail</p>
                </div>
                {product.images.lifestyle && (
                  <div className="space-y-1">
                    <div className="relative aspect-video w-full overflow-hidden rounded-[1px]">
                      <Image
                        src={product.images.lifestyle}
                        alt={`${product.name} lifestyle context`}
                        fill
                        sizes="25vw"
                        className="object-cover"
                      />
                    </div>
                    <p className="text-[10px] uppercase tracking-wider font-mono text-stone-500">Atelier Context</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right Column: Editorial Provenance & Inquiries */}
          <div className="lg:col-span-6 xl:col-span-5 space-y-6 sm:space-y-8">
            {/* Title & Bengali Attribution */}
            <div className="space-y-1.5 sm:space-y-2">
              <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-stone-900 font-normal leading-[1.12]">
                {product.name}
              </h1>
              <p className="font-serif-bengali text-xl sm:text-2xl md:text-3xl text-stone-600 pt-0.5 leading-snug">
                {product.bengaliName}
              </p>
            </div>

            {/* Summary & Cultural Backstory */}
            <div className="space-y-3 sm:space-y-4 text-stone-700 font-sans leading-relaxed text-sm sm:text-base md:text-lg">
              <p className="font-medium text-stone-900">{product.shortDescription}</p>
              <p className="text-stone-600 text-xs sm:text-sm md:text-base leading-relaxed">{product.description}</p>
            </div>

            {/* Provenance Dossier Grid */}
            <div className="border-t border-b border-stone-200 py-4 sm:py-6 space-y-3 sm:space-y-4">
              <span className="text-xs uppercase tracking-[0.24em] font-mono font-semibold text-stone-900 block">
                Artisanal Provenance Dossier
              </span>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4 text-xs sm:text-sm font-sans">
                <div className="border border-stone-200 p-3 sm:p-3.5 rounded-[1px] bg-stone-50/50">
                  <dt className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-stone-500">Artisan Cluster</dt>
                  <dd className="font-medium text-stone-900 mt-1">{product.craftInfo.origin}</dd>
                </div>
                <div className="border border-stone-200 p-3 sm:p-3.5 rounded-[1px] bg-stone-50/50">
                  <dt className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-stone-500">Craft Karigar</dt>
                  <dd className="font-medium text-stone-900 mt-1">{product.craftInfo.artisanRole}</dd>
                </div>
                <div className="border border-stone-200 p-3 sm:p-3.5 rounded-[1px] bg-stone-50/50">
                  <dt className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-stone-500">Production Time</dt>
                  <dd className="font-medium text-stone-900 mt-1">{product.craftInfo.craftingDuration}</dd>
                </div>
              </dl>
            </div>

            {/* Specifications & Materials */}
            <div className="space-y-3 text-sm font-sans">
              <div className="flex items-start justify-between py-2 border-b border-stone-100">
                <span className="text-stone-500 font-mono text-xs uppercase tracking-wider">Raw Materials</span>
                <span className="font-medium text-stone-900 text-right">{product.materials.join(", ")}</span>
              </div>
              <div className="flex items-start justify-between py-2 border-b border-stone-100">
                <span className="text-stone-500 font-mono text-xs uppercase tracking-wider">Dimensions</span>
                <span className="font-medium text-stone-900 text-right">{product.dimensions}</span>
              </div>
              <div className="flex items-start justify-between py-2 border-b border-stone-100">
                <span className="text-stone-500 font-mono text-xs uppercase tracking-wider">Palette</span>
                <span className="font-medium text-stone-900 text-right">{product.colors.join(", ")}</span>
              </div>
            </div>

            {/* Corporate & Bespoke Inquiry CTAs */}
            <div className="pt-4 space-y-3">
              <Link
                href={`/contact?inquiry=${encodeURIComponent(product.name)}`}
                className="w-full h-14 bg-[#162720] hover:bg-[#A84A28] text-white text-xs sm:text-sm uppercase tracking-[0.2em] font-sans font-semibold rounded-[1px] transition-all duration-300 inline-flex items-center justify-center gap-3 shadow-none active:scale-[0.98]"
              >
                <span>Direct Corporate Inquiry</span>
                <span className="text-base">→</span>
              </Link>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs font-mono text-stone-500 px-1 pt-1">
                <span>Ref: {product.id}</span>
                <span>Bespoke commissions & institutional partnerships</span>
              </div>
            </div>

            {/* Care & Heirloom Preservation */}
            {product.careInstructions.length > 0 && (
              <div className="border-t border-stone-200 pt-6 space-y-2">
                <span className="text-xs uppercase tracking-[0.2em] font-mono font-semibold text-stone-700 block">
                  Heirloom Care & Preservation
                </span>
                <ul className="text-xs sm:text-sm text-stone-600 font-sans space-y-1 list-disc list-inside">
                  {product.careInstructions.map((instruction, idx) => (
                    <li key={idx}>{instruction}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Complementary Works from Artisanal Archives */}
      <div className="w-full bg-white py-12 sm:py-16 lg:py-24 border-t border-stone-200">
        <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 space-y-8 sm:space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4 border-b border-stone-200 pb-4 sm:pb-6">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-[0.25em] text-[#9A5B3D] font-mono font-semibold block">
                Complementary Pieces
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-stone-900 font-normal">
                Explore More Works
              </h2>
            </div>
            <Link
              href="/collections"
              className="text-xs sm:text-sm uppercase tracking-[0.18em] sm:tracking-[0.2em] font-semibold text-stone-700 hover:text-[#9A5B3D] transition-colors inline-flex items-center gap-2"
            >
              <span>View All Collections</span>
              <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {fallbackRelated.map((relProduct) => (
              <ProductCard key={relProduct.id} product={relProduct} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
