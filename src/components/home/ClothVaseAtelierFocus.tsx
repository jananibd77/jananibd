"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface FocusPoint {
  id: string;
  tag: string;
  bengaliTag: string;
  title: string;
  bengaliTitle: string;
  image: string;
  aspectDesc: string;
  provenanceDetails: {
    label: string;
    value: string;
  }[];
  description: string;
}

const focusPoints: FocusPoint[] = [
  {
    id: "lotus-cylinder",
    tag: "View 01 · Cylindrical Lotus Vase",
    bengaliTag: "০১ · পদ্ম মোটিফ নলাকার ফুলদানি",
    title: "Upright Nakshi Kantha Cylindrical Vase",
    bengaliTitle: "অষ্টদল পদ্ম ও জ্যামিতিক নকশার নলাকার কাপড়ের ফুলদানি",
    image: "/images/cloth_vase_cylindrical_lotus.png",
    aspectDesc: "Tall cylindrical cloth vase crafted from stiffened Deshi cotton canvas with dense kantha running stitches, holding dried delta reeds and wild cotton bolls.",
    provenanceDetails: [
      { label: "Base Canvas", value: "100% Unbleached Deshi Cotton" },
      { label: "Interfacing", value: "Reinforced Natural Golden Jute" },
      { label: "Embroidery Technique", value: "Traditional Kantha Fhor (হাতের কাজ)" },
      { label: "Artisan Lineage", value: "Janani Handicrafts, Manikganj" },
    ],
    description:
      "A cultural innovation in delta homeware. Rural women artisans stiffen multi-layered raw cotton canvas, adorning it with sacred lotus blossoms and geometric diamond motifs in terracotta, river indigo, and mustard thread. Designed for dried botanical arrangements.",
  },
  {
    id: "kalshi-pitcher",
    tag: "View 02 · Kalshi Pitcher with Cowrie",
    bengaliTag: "০২ · কলসি আকৃতির কড়িযুক্ত ফুলদানি",
    title: "Amphora Silhouette with Rolled Handles",
    bengaliTitle: "মাটির কলসির আদলে নীল ক্যানভাস ও কড়ির নকশা",
    image: "/images/cloth_vase_pitcher_kalshi.png",
    aspectDesc: "Earthen pitcher silhouette shaped from structured indigo-dyed cotton canvas with rolled fabric handles and hand-sewn cowrie shell neck trim.",
    provenanceDetails: [
      { label: "Textile Form", value: "Structured Indigo & Jute Canvas" },
      { label: "Handle Architecture", value: "Hand-rolled reinforced fabric cord" },
      { label: "Trim Detailing", value: "Natural Sea Cowrie Shells (কড়ি)" },
      { label: "Molding Process", value: "Hand-molded fabric contouring" },
    ],
    description:
      "Echoing the timeless form of Bengal's riverbank water pitcher (মাটির কলসি). Handcrafted from deep indigo-dyed cotton and natural golden jute, finished with genuine cowrie shells along the neck rim and geometric running stitches.",
  },
  {
    id: "needlework-macro",
    tag: "View 03 · Needlework & Canvas Macro",
    bengaliTag: "০৩ · কাপড়ের বুনন ও সূচিকর্মের ম্যাক্রো",
    title: "Running Stitch Relief & Organic Fiber",
    bengaliTitle: "কোরা ক্যানভাসে সুই-সুতার ঘন নকশা ও কর্ডেড সিম",
    image: "/images/cloth_vase_needlework_macro.png",
    aspectDesc: "Razor-sharp macro focus revealing dense running stitch relief, natural plant-dyed embroidery threads, and corded edge binding.",
    provenanceDetails: [
      { label: "Stitch Density", value: "20-24 running stitches per inch" },
      { label: "Thread Medium", value: "Vegetable-dyed cotton embroidery floss" },
      { label: "Canvas Grain", value: "Heavyweight slub Deshi cotton" },
      { label: "Seam Finish", value: "Overlocked corded structural binding" },
    ],
    description:
      "The macro view highlights the tactile warmth of the handcrafted cloth vase. Every lotus petal and geometric border is brought to life through hours of patient running stitches laid with natural terracotta and cobalt embroidery threads.",
  },
  {
    id: "trio-cluster",
    tag: "View 04 · Trio Cluster Decor",
    bengaliTag: "০৪ · তিনটি ফুলদানির সমন্বিত সজ্জা",
    title: "Curated Earthen Homeware Ensemble",
    bengaliTitle: "কাঠের বেঞ্চে কোরা, ইন্ডিগো ও পোড়ামাটি ফুলদানি",
    image: "/images/cloth_vase_trio_cluster.png",
    aspectDesc: "Harmonious grouping of three handcrafted cloth vases in complementary heights, shapes, and earthen tones on a rustic bench.",
    provenanceDetails: [
      { label: "Trio Palette", value: "Unbleached Ecru, Deep Indigo & Terracotta" },
      { label: "Form Variety", value: "Cylindrical, Flared Neck & Bulbous Earthen" },
      { label: "Styling Context", value: "Minimalist heritage interior & dried florals" },
      { label: "Craft Guild", value: "Janani Women Craft Cooperatives" },
    ],
    description:
      "Arranged as a multi-silhouette collection, the three cloth vases celebrate Bengal's organic palette: unbleached cotton ecru, botanical river-indigo, and clay terracotta. A sustainable, break-resistant alternative to conventional ceramic decor.",
  },
  {
    id: "workshop-making",
    tag: "View 05 · Workshop Artisan Still-Life",
    bengaliTag: "০৫ · কারুশিল্পীর কাঠের টেবিলে নির্মাণ সজ্জা",
    title: "The Workshop Teak Cutting Table",
    bengaliTitle: "সেলাই ফ্রেম, পিতলের কাঁচি ও সুতার লাচির নির্মাণ গল্প",
    image: "/images/cloth_vase_workshop_stilllife.png",
    aspectDesc: "Artisanal still-life showcasing a cloth vase in progress alongside wooden embroidery hoops, brass shears, and dried lotus pods.",
    provenanceDetails: [
      { label: "Artisan Workshop", value: "Janani Handicrafts Atelier, Manikganj" },
      { label: "Hand Tools", value: "Wooden embroidery hoops & brass shears" },
      { label: "Crafting Cadence", value: "4-5 days of hand assembly per piece" },
      { label: "Delta Heritage", value: "100% rural women artisan empowered" },
    ],
    description:
      "A glimpse into the meditative rhythm of Bengal's craft sheds. Each cloth flower vase undergoes multiple manual stages: cutting reinforced canvas, hand-embroidering on wooden hoops, shaping the silhouette, and edge-binding with natural jute.",
  },
];

export function ClothVaseAtelierFocus() {
  const [activeTab, setActiveTab] = useState<string>("lotus-cylinder");

  const currentFocus = focusPoints.find((f) => f.id === activeTab) || focusPoints[0];

  return (
    <section className="w-full bg-[#FAF8F5] border-b border-stone-200 py-12 sm:py-20 lg:py-28">
      <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 space-y-10 sm:space-y-12 lg:space-y-16">

        {/* ── 1. Section Header ─────────────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 pb-6 sm:pb-8 border-b border-stone-200">
          <div className="space-y-3 sm:space-y-4 max-w-3xl">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <span className="block w-6 sm:w-8 h-px bg-[#A84A28]" />
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.22em] sm:tracking-[0.28em] text-[#A84A28] font-mono font-semibold">
                Heritage Homeware Exhibition · Janani Handicrafts
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-stone-900 font-normal tracking-tight leading-[1.08]">
              Handcrafted Cloth Vases &amp; Textile Vessels
            </h2>

            <p className="font-serif-bengali text-xl sm:text-2xl md:text-3xl text-[#B88E3E] font-normal leading-snug">
              নকশী কাঁথার ঘন বুননে হাতে তৈরি কাপড়ের নান্দনিক ফুলদানি
            </p>

            <p className="text-sm sm:text-base md:text-lg text-stone-600 font-sans leading-relaxed pt-1">
              Crafted from reinforced Deshi cotton canvas and golden jute, discover how rural artisans in Manikganj
              transform folk needlework, lotus motifs, and traditional pitcher forms into break-resistant, eco-conscious interior sculptures.
            </p>
          </div>

          <div className="shrink-0 flex flex-col items-start lg:items-end gap-2 sm:gap-3 text-xs font-mono text-stone-500">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#B88E3E] rotate-45 shrink-0" />
              <span className="uppercase tracking-[0.2em] font-semibold text-stone-900">
                100% Hand-Stitched Decor
              </span>
            </div>
            <span className="text-stone-400">Sakrail, Gorpara, Manikganj</span>
          </div>
        </div>

        {/* ── 2. Interactive Focus Selector Bar ──────────────────────────── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 border-b border-stone-200 pb-4">
          {focusPoints.map((item, idx) => {
            const isActive = item.id === activeTab;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`text-left p-3.5 sm:p-4 rounded-[1px] transition-all border ${
                  isActive
                    ? "bg-white border-[#A84A28] border-l-4 border-l-[#A84A28]"
                    : "bg-white/60 border-stone-200 hover:border-stone-400 hover:bg-white"
                }`}
              >
                <div className="text-[10px] font-mono uppercase tracking-[0.16em] text-stone-500 mb-1">
                  View 0{idx + 1}
                </div>
                <div className={`font-serif text-xs sm:text-sm font-medium ${isActive ? "text-[#A84A28]" : "text-stone-800"}`}>
                  {item.title}
                </div>
                <div className="font-serif-bengali text-xs text-stone-500 mt-1 line-clamp-1">
                  {item.bengaliTitle}
                </div>
              </button>
            );
          })}
        </div>

        {/* ── 3. Split Editorial Viewport ─────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-start">

          {/* Left: Pure, Unobstructed Photography Frame */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden rounded-[1px]">
              <Image
                src={currentFocus.image}
                alt={currentFocus.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Captions strictly OUTSIDE the image container */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-stone-500 pt-2 border-t border-stone-200">
              <span className="text-[#A84A28] font-semibold tracking-wider">
                {currentFocus.tag} · {currentFocus.bengaliTag}
              </span>
              <span className="text-stone-400">
                Natural Studio Sunlight · 100% Authentic Handcraft
              </span>
            </div>
          </div>

          {/* Right: Curatorial & Provenance Dossier */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <div className="space-y-3 pb-6 border-b border-stone-200">
              <div className="text-xs font-mono text-[#A84A28] tracking-[0.2em] uppercase font-semibold">
                Textile Vessel Archive · Item Focus
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-stone-900 tracking-tight leading-tight">
                {currentFocus.title}
              </h3>
              <p className="font-serif-bengali text-lg sm:text-xl text-[#B88E3E]">
                {currentFocus.bengaliTitle}
              </p>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed pt-2 font-sans">
                {currentFocus.description}
              </p>
            </div>

            {/* Provenance Table */}
            <div className="space-y-3">
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-stone-500 font-semibold">
                Craftsmanship &amp; Architectural Specifications
              </div>
              <div className="border border-stone-200 rounded-[1px] bg-white divide-y divide-stone-200 text-xs sm:text-sm font-sans">
                {currentFocus.provenanceDetails.map((detail) => (
                  <div key={detail.label} className="flex justify-between items-center px-4 py-3">
                    <span className="text-stone-500 font-medium">{detail.label}</span>
                    <span className="text-stone-900 font-semibold text-right">{detail.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Narrative Box */}
            <div className="p-5 border border-stone-200 rounded-[1px] bg-white/70 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#A84A28] uppercase tracking-wider font-semibold">
                <span>✦</span>
                <span>Delta Homeware Narrative</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
                {currentFocus.aspectDesc}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href="/collections/handcrafted-nakshi-kantha-cloth-flower-vase"
                className="inline-flex justify-center items-center px-6 py-3.5 bg-stone-900 hover:bg-[#A84A28] text-white text-xs uppercase tracking-[0.2em] font-mono rounded-[1px] transition-colors"
              >
                Explore Cloth Vase In Archive →
              </Link>
              <Link
                href="/collections?category=home-textiles"
                className="inline-flex justify-center items-center px-6 py-3.5 border border-stone-300 hover:border-stone-900 text-stone-900 text-xs uppercase tracking-[0.2em] font-mono rounded-[1px] transition-colors"
              >
                View Home Textiles
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
