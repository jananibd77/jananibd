import React from "react";
import Link from "next/link";
import Image from "next/image";
import { products, Product } from "@/data/products";

/* ─────────────────────────────────────────────────────────────
   Nakshi Kantha running-stitch SVG divider
───────────────────────────────────────────────────────────── */
function KanthaDivider({ light = false }: { light?: boolean }) {
  const color = light ? "#E5DFD5" : "#3A352F";
  return (
    <div className="w-full flex items-center gap-3 py-1" aria-hidden="true">
      <span className="flex-1 h-px" style={{ background: color, opacity: 0.35 }} />
      <svg width="180" height="10" viewBox="0 0 180 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Running stitch — Nakshi Kantha thread line */}
        {Array.from({ length: 18 }).map((_, i) => (
          <rect
            key={i}
            x={i * 10 + 1}
            y={4}
            width={6}
            height={1.5}
            rx={0.5}
            fill={color}
            opacity={0.55}
          />
        ))}
        {/* Centre lotus knot */}
        <circle cx={90} cy={5} r={2.5} fill="none" stroke={color} strokeWidth={1} opacity={0.6} />
        <circle cx={90} cy={5} r={1} fill={color} opacity={0.4} />
      </svg>
      <span className="flex-1 h-px" style={{ background: color, opacity: 0.35 }} />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Hero Card — large featured piece (2/3 width)
───────────────────────────────────────────────────────────── */
function HeroCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col h-full justify-between space-y-5">
      <div className="space-y-4 sm:space-y-5">
        {/* Pure image frame — zero text on image, full-width coverage */}
        <Link
          href={`/collections/${product.slug}`}
          className="relative block w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] overflow-hidden rounded-[1px]"
        >
          <Image
            src={product.images.main}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 66vw"
            className="object-cover object-[center_18%] transition-transform duration-700 ease-out group-hover:scale-105"
            priority
          />
        </Link>

        {/* Text content — fully outside image */}
        <div className="space-y-2 sm:space-y-3">
          <p className="font-serif-bengali text-xl sm:text-2xl lg:text-3xl text-[#A84A28] leading-snug">
            {product.bengaliName}
          </p>
          <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-stone-900 font-normal leading-[1.15] group-hover:text-[#A84A28] transition-colors duration-300">
            <Link href={`/collections/${product.slug}`}>{product.name}</Link>
          </h3>
          <p className="text-sm sm:text-base text-stone-600 font-sans leading-relaxed pt-0.5 line-clamp-3">
            {product.shortDescription}
          </p>
        </div>
      </div>

      <div className="pt-3 border-t border-stone-200">
        <Link
          href={`/collections/${product.slug}`}
          className="inline-flex items-center gap-2.5 text-xs sm:text-sm uppercase tracking-[0.22em] font-mono font-semibold text-stone-900 hover:text-[#A84A28] transition-colors duration-300 group/link"
        >
          <span>View Archive Dossier</span>
          <span className="transition-transform duration-300 group-hover/link:translate-x-1">→</span>
        </Link>
      </div>
    </article>
  );
}

/* ─────────────────────────────────────────────────────────────
   Standard Card — compact stacked / grid piece
───────────────────────────────────────────────────────────── */
function StandardCard({
  product,
  aspectRatio = "aspect-[4/3]",
  objectPosition = "object-top",
}: {
  product: Product;
  aspectRatio?: string;
  objectPosition?: string;
}) {
  return (
    <article className="group flex flex-col h-full justify-between space-y-4">
      <div className="space-y-3 sm:space-y-4">
        {/* Image — zero text on image, full-width coverage */}
        <Link
          href={`/collections/${product.slug}`}
          className={`relative block w-full ${aspectRatio} overflow-hidden rounded-[1px]`}
        >
          <Image
            src={product.images.main}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={`object-cover ${objectPosition} transition-transform duration-700 ease-out group-hover:scale-105`}
          />
        </Link>

        {/* Text — strictly below image */}
        <div className="space-y-1.5">
          <p className="font-serif-bengali text-lg sm:text-xl text-[#A84A28] leading-snug">
            {product.bengaliName}
          </p>
          <h3 className="font-serif text-xl sm:text-2xl text-stone-900 font-normal leading-snug group-hover:text-[#A84A28] transition-colors duration-300">
            <Link href={`/collections/${product.slug}`}>{product.name}</Link>
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed line-clamp-2">
            {product.shortDescription}
          </p>
        </div>
      </div>

      <div className="pt-3 border-t border-stone-200">
        <Link
          href={`/collections/${product.slug}`}
          className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.2em] font-mono font-semibold text-stone-700 hover:text-[#A84A28] transition-colors duration-300 group/link"
        >
          <span>View Archive Dossier</span>
          <span className="transition-transform duration-300 group-hover/link:translate-x-1">→</span>
        </Link>
      </div>
    </article>
  );
}

/* ─────────────────────────────────────────────────────────────
   Main Section
───────────────────────────────────────────────────────────── */
export function FeaturedProducts() {
  const selectedSlugs = [
    "exclusive-handloom-embroidered-panjabi",
    "hand-stitched-fabric-wall-mat-tapestry",
    "quality-endi-fabric-than-kapor",
    "exclusive-handloom-cotton-fatua",
    "half-silk-handloom-sharee",
    "padma-mandala-nakshi-kantha",
    "handcrafted-nakshi-kantha-cloth-flower-vase",
    "exclusive-handloom-embroidered-three-piece",
    "heritage-jute-decorative-wall-hanging",
  ];

  const curatedList = selectedSlugs
    .map((slug) => products.find((p) => p.slug === slug))
    .filter((p): p is Product => Boolean(p));

  const [hero, ...rest] = curatedList;
  const stackPair = rest.slice(0, 2);
  const gridRow = rest.slice(2);

  return (
    <section className="w-full bg-[#FAF7F2] border-b border-stone-200">

      {/* ════ WHITE THEME HEADER BAND ════ */}
      <div className="w-full bg-white px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-14 sm:pt-20 lg:pt-28 pb-10 sm:pb-16 lg:pb-20 border-b border-stone-200">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 sm:gap-10">

          {/* Left: editorial copy */}
          <div className="space-y-3 sm:space-y-5 max-w-2xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <span className="block w-6 sm:w-8 h-px bg-[#B88E3E]" />
              <span className="text-[11px] sm:text-base uppercase tracking-[0.25em] sm:tracking-[0.32em] text-[#B88E3E] font-mono font-semibold">
                Signature Creational Output
              </span>
            </div>

            {/* Main headline */}
            <div className="space-y-2 sm:space-y-3">
              <h2 className="font-serif text-4xl sm:text-6xl lg:text-8xl text-stone-900 font-normal leading-[1.08] sm:leading-[1.04] tracking-tight">
                Curated<br className="hidden sm:inline" />{" "}
                <em className="not-italic text-stone-700">Masterworks.</em>
              </h2>
              <p className="font-serif-bengali text-xl sm:text-3xl md:text-4xl text-[#A84A28] leading-snug">
                আমাদের প্রধান হস্তশিল্প ও তাঁত সম্ভার
              </p>
            </div>

            {/* Body */}
            <p className="text-base sm:text-lg lg:text-xl text-stone-600 font-sans leading-relaxed">
              Select signature creations from our Manikganj weaving sheds,
              tailoring atelier, and rural cooperative guilds.
            </p>
          </div>

          {/* Right: CTA */}
          <div className="w-full sm:w-auto shrink-0 flex flex-col items-start lg:items-end gap-3 sm:gap-4">
            {/* Catalogue count */}
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] sm:tracking-[0.3em] font-mono text-stone-400">
              Archive · {curatedList.length} Pieces
            </span>
            <Link
              href="/collections"
              className="group inline-flex items-center justify-center gap-3 border border-stone-900 hover:border-[#A84A28] text-stone-900 hover:text-[#A84A28] text-xs sm:text-sm uppercase tracking-[0.22em] font-mono font-semibold px-6 sm:px-7 h-11 sm:h-12 rounded-[1px] transition-colors duration-300 w-full sm:w-auto text-center"
            >
              <span>View Full Archive</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>

        {/* Nakshi Kantha running-stitch divider */}
        <div className="mt-8 sm:mt-12">
          <KanthaDivider />
        </div>
      </div>

      {/* ════ PRODUCT ARCHIVE GRID ════ */}
      <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-10 sm:py-16 lg:py-24 space-y-12 sm:space-y-20">

        {/* ── Row 1: Asymmetric hero + stack ───────────────── */}
        {hero && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 xl:gap-16">
            {/* Hero: 2/3 width */}
            <div className="lg:col-span-2">
              <HeroCard product={hero} />
            </div>

            {/* Stacked pair: 1/3 width */}
            <div className="flex flex-col gap-8 sm:gap-10 lg:gap-8">
              {stackPair.map((product) => (
                <StandardCard
                  key={product.id}
                  product={product}
                  aspectRatio="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]"
                  objectPosition="object-center"
                />
              ))}
            </div>
          </div>
        )}

        {/* Nakshi Kantha divider between rows */}
        <KanthaDivider />

        {/* ── Row 2: Equal 3-col grid ──────────────────────── */}
        {gridRow.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {gridRow.map((product) => (
              <StandardCard
                key={product.id}
                product={product}
                aspectRatio="aspect-[3/4] sm:aspect-[4/5]"
                objectPosition={
                  product.category === "nakshi-kantha" ||
                  product.slug.includes("kantha") ||
                  product.slug.includes("vase") ||
                  product.slug.includes("jute")
                    ? "object-center"
                    : "object-top"
                }
              />
            ))}
          </div>
        )}
      </div>

      {/* ════ BESPOKE INQUIRY BAND ════ */}
      <div className="w-full bg-white px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-10 sm:py-14 lg:py-20 border-t border-stone-200">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8">
          <div className="space-y-2.5 sm:space-y-3 max-w-2xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <span className="block w-6 h-px bg-[#B88E3E]" />
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] sm:tracking-[0.28em] font-mono text-[#B88E3E] font-semibold">
                Bespoke Tailoring &amp; Handloom Yardage
              </span>
            </div>
            <h4 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-stone-900 font-normal leading-tight">
              Need Custom Sizing or<br className="hidden sm:inline" /> Running Yardage Rolls?
            </h4>
            <p className="text-sm sm:text-base lg:text-lg text-stone-600 font-sans leading-relaxed">
              Our master weavers and tailors accept custom orders for institutional events,
              bespoke bridal wear, and continuous Than yardage rolls.
            </p>
          </div>

          <Link
            href="/contact"
            className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-3 bg-[#A84A28] hover:bg-[#8B381A] text-white text-xs uppercase tracking-[0.22em] font-mono font-semibold px-7 sm:px-8 h-12 rounded-[1px] transition-colors duration-300 group text-center"
          >
            <span>Inquire With Studio</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>

    </section>
  );
}
