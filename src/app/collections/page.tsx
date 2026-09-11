import React, { Suspense } from "react";
import type { Metadata } from "next";
import { CollectionsClient } from "./CollectionsClient";

export const metadata: Metadata = {
  title: "Historical Craft Archive | Janani Permanent Collections",
  description:
    "Explore the permanent historical craft archive of Janani Enterprise: authentic pit-loom Endi silk, Half-Silk sarees, Nakshi Kantha, bamboo-cane vessels, and handcrafted menswear from Manikganj, Bangladesh.",
};

export default function CollectionsPage() {
  return (
    <div className="w-full bg-[#FAF8F5] pt-24 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 lg:pb-24 border-b border-stone-200">
      <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 space-y-8 sm:space-y-12">
        {/* Page Header */}
        <div className="w-full lg:w-3/4 space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <span className="block w-6 sm:w-8 h-px bg-[#B88E3E]" />
            <span className="text-[10px] sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#B88E3E] font-mono font-semibold">
              Permanent Historical Archive
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-7xl text-stone-900 font-normal tracking-tight leading-[1.08] sm:leading-[1.05]">
            Curated Craft Disciplines &amp; Historical Works
          </h1>

          <p className="font-serif-bengali text-xl sm:text-2xl md:text-3xl text-[#A84A28] leading-snug">
            ঐতিহাসিক কারুশিল্প সম্ভার ও আদি বয়ন ঐতিহ্য
          </p>

          <p className="text-sm sm:text-base md:text-xl text-stone-600 leading-relaxed font-sans pt-1 max-w-4xl">
            A living repository of Bengal&apos;s ancestral craftsmanship. Every piece documented below represents an
            unbroken lineage of wooden pit-looms, river-cane plaiting, and hand-needle storytelling from Sakrail,
            Gorpara, Manikgonj and Bengal craft belts.
          </p>
        </div>

        {/* Client Interactive Filter & Full-Width Dedicated Sections inside Suspense */}
        <Suspense
          fallback={
            <div className="py-24 text-center text-sm sm:text-base font-mono text-stone-500">
              Loading historical craft archive...
            </div>
          }
        >
          <CollectionsClient />
        </Suspense>
      </div>
    </div>
  );
}
