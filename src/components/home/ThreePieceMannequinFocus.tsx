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
    id: "silhouette",
    tag: "View 01 · Pastel Pink Mannequin Form",
    bengaliTag: "০১ · প্যাস্টেল পিঙ্ক ডলে পূর্ণাঙ্গ অবয়ব",
    title: "Pastel Blush Pink & White Lace Ensemble",
    bengaliTitle: "ম্যানিকিনে প্যাস্টেল গোলাপি কামিজ ও ওড়নার স্নিগ্ধ আভিজাত্য",
    image: "/images/threepiece_pastel_pink_mannequin.png",
    aspectDesc: "Complete 3-piece ensemble displayed on vintage headless wooden atelier doll form with natural daylight.",
    provenanceDetails: [
      { label: "Color Palette", value: "Pastel Blush Pink & Pure White" },
      { label: "Embroidery Technique", value: "Hand-needle threadwork & cutwork lace" },
      { label: "Dupatta Artistry", value: "Sheer organdy with scalloped borders" },
      { label: "Atelier Lineage", value: "M/S Janani Craft & Fashion, Manikganj" },
    ],
    description:
      "Sculpted on an artisan tailor's dummy at the Sakrail atelier, this handcrafted Three-Piece ensemble honors the timeless grace of Bengal's boutique heritage. Soft blush pink fine cotton is highlighted with delicate white floral embroidery and scalloped lace.",
  },
  {
    id: "yoke",
    tag: "View 02 · Neckline & Lace Yoke Macro",
    bengaliTag: "০২ · কলার ও বক্ষপটের সূক্ষ্ম লেইস মোটিফ",
    title: "Notched V-Neckline & Mother-of-Pearl Closures",
    bengaliTitle: "সূক্ষ্ম সুই-সুতার কাজ, লেইস প্যানেল ও আসল মুক্তার বোতাম",
    image: "/images/threepiece_pastel_pink_yoke_macro.png",
    aspectDesc: "Macro view revealing intricate floral threadwork, cutwork lace trim, and genuine mother-of-pearl buttons.",
    provenanceDetails: [
      { label: "Yoke Construction", value: "Multi-layered floral needlework & cutwork lace" },
      { label: "Neckline Silhouette", value: "Notched Mandarin band with slit" },
      { label: "Placket Closures", value: "Handcrafted Mother-of-Pearl Shell Buttons" },
      { label: "Stitch Density", value: "22-26 fine stitches per inch" },
    ],
    description:
      "The chest yoke is the artisan centerpiece of the ensemble. Senior needlework craftspersons hand-stitch delicate floral vine patterns framed by cutwork lace, finished with iridescent mother-of-pearl buttons.",
  },
  {
    id: "printed",
    tag: "View 03 · Rose Pink & Black Printed Edition",
    bengaliTag: "০৩ · রোজ পিঙ্ক ও ব্ল্যাক প্রিন্টেড সংস্করণ",
    title: "Ethnic Textures & Paisley Daman Borders",
    bengaliTitle: "চারকোল ব্ল্যাক ও গোলাপি রঙের জ্যামিতিক নকশা ও ওড়না",
    image: "/images/threepiece_printed_black_rose_mannequin.png",
    aspectDesc: "Tailor mannequin display of the rose-pink and charcoal black cotton ensemble with matching printed dupatta.",
    provenanceDetails: [
      { label: "Print Discipline", value: "Precision ethnic block & screen print" },
      { label: "Color Harmony", value: "Rose Pink, Charcoal Black & Amber" },
      { label: "Daman Detailing", value: "Traditional paisley (Kalka) border panels" },
      { label: "Trousers Style", value: "Solid charcoal black straight comfort fit" },
    ],
    description:
      "A bold contemporary take on traditional delta prints. Features a structured floral neck placket, fine all-over geometric field motifs, and an elaborate paisley border complemented by a lightweight printed dupatta and solid black trousers.",
  },
  {
    id: "royal",
    tag: "View 04 · Royal Blue & Magenta Jamdani Edition",
    bengaliTag: "০৪ · রয়্যাল ব্লু ও ম্যাজেন্টা জামদানি সংস্করণ",
    title: "Handloom Cotton-Silk with Gold Zari Boutis",
    bengaliTitle: "নীল জমিনে ম্যাজেন্টা ও সোনালী সুতার জামদানি মোটিফ",
    image: "/images/threepiece_royal_blue_jamdani_mannequin.png",
    aspectDesc: "Mannequin presentation of the regal royal blue cotton-silk ensemble with magenta and gold zari accents.",
    provenanceDetails: [
      { label: "Base Fabric", value: "Handloom Cotton-Mulberry Silk Blend" },
      { label: "Motif Heritage", value: "Jamdani geometric floral boutis" },
      { label: "Dupatta Artistry", value: "Dual-tone sheer navy & magenta with tassels" },
      { label: "Weaving Hub", value: "M/S Janani Weaving Factory, Manikgonj" },
    ],
    description:
      "Rooted in Bengal's legendary handloom legacy, this edition pairs a rich royal blue body with vibrant magenta and burnished gold woven Jamdani motifs, paired with a sheer dual-tone dupatta finished with hand-knotted silk tassels.",
  },
  {
    id: "flatlay",
    tag: "View 05 · Curated Ensemble Flat-Lay",
    bengaliTag: "০৫ · স্টুডিও টেবিলে সম্পূর্ণ পোশাকের সজ্জা",
    title: "Flat-Lay Composition & Organic Drape",
    bengaliTitle: "কাঠের টেবিলে কামিজ, সালোয়ার ও ওড়নার সমাহার",
    image: "/images/threepiece_ensemble_flatlay_stilllife.png",
    aspectDesc: "Archival still-life photography of the neatly folded cotton three-piece with scalloped embroidered dupatta and tassels.",
    provenanceDetails: [
      { label: "Display Arrangement", value: "Atelier workbench flat-lay composition" },
      { label: "Dupatta Detailing", value: "Organza scallop embroidery with silk tassels" },
      { label: "Fabric Tactility", value: "100% natural breathable combed cotton" },
      { label: "Couture Standard", value: "Single-needle tailored French seams" },
    ],
    description:
      "A peaceful studio perspective showcasing the tactile authenticity of the garments: the crisp embroidered neckline, the neatly folded salwar, and the sheer scalloped dupatta draping naturally over weathered teakwood.",
  },
];

export function ThreePieceMannequinFocus() {
  const [activeTab, setActiveTab] = useState<string>("silhouette");

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
                Women&apos;s Couture Exhibition · M/S Janani Craft &amp; Fashion
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-stone-900 font-normal tracking-tight leading-[1.08]">
              The Artisanal Three-Piece on Atelier Form
            </h2>

            <p className="font-serif-bengali text-xl sm:text-2xl md:text-3xl text-[#B88E3E] font-normal leading-snug">
              ম্যানিকিনে ঐতিহ্যবাহী নকশী থ্রি-পিসের সুষম অবয়ব ও শৈল্পিক বয়ন
            </p>

            <p className="text-sm sm:text-base md:text-lg text-stone-600 font-sans leading-relaxed pt-1">
              Displayed on a vintage wooden tailor&apos;s dummy in our Manikganj atelier, explore how
              unbleached pit-loom cotton-silk, authentic Nakshi Kantha needlework, and pure Endi silk converge into timeless boutique elegance.
            </p>
          </div>

          <div className="shrink-0 flex flex-col items-start lg:items-end gap-2 sm:gap-3 text-xs font-mono text-stone-500">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#B88E3E] rotate-45 shrink-0" />
              <span className="uppercase tracking-[0.2em] font-semibold text-stone-900">
                100% Handcrafted Ensemble
              </span>
            </div>
            <span className="text-stone-400">Sakrail, Gorpara, Manikganj</span>
          </div>
        </div>

        {/* ── 2. Interactive Focus Selector Bar ──────────────────────────── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 border-b border-stone-200 pb-4">
          {focusPoints.map((item, idx) => {
            const isActive = item.id === activeTab;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`text-left p-3.5 sm:p-4 rounded-[1px] border transition-all duration-300 flex flex-col justify-between space-y-2 group ${
                  isActive
                    ? "bg-white border-[#A84A28] text-stone-950 shadow-[0_1px_3px_rgba(0,0,0,0.03)]"
                    : "bg-[#F3EDE2]/40 border-stone-200 hover:border-stone-400 text-stone-600"
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span
                    className={`text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-mono font-bold ${
                      isActive ? "text-[#A84A28]" : "text-stone-400 group-hover:text-stone-700"
                    }`}
                  >
                    0{idx + 1} · Focus
                  </span>
                  <span
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${
                      isActive ? "bg-[#A84A28]" : "bg-transparent"
                    }`}
                  />
                </div>
                <div>
                  <p className="font-serif text-sm sm:text-base font-normal text-stone-900 line-clamp-1">
                    {item.title.split("&")[0].trim()}
                  </p>
                  <p className="font-serif-bengali text-xs text-stone-500 line-clamp-1 pt-0.5">
                    {item.bengaliTag}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* ── 3. High-Definition Focus Showcase (Zero Text on Image) ─────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column: Pure Photographic Canvas (100% Unobstructed) */}
          <div className="lg:col-span-6">
            <div className="relative aspect-3/4 w-full overflow-hidden rounded-[1px]">
              <Image
                key={currentFocus.image}
                src={currentFocus.image}
                alt={`${currentFocus.title} - Bengali Three-Piece displayed on tailor mannequin`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-all duration-700 ease-out"
              />
            </div>
          </div>

          {/* Right Column: Deep Artisanal Technical Dossier */}
          <div className="lg:col-span-6 space-y-7 lg:pl-4">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 bg-[#B88E3E] rotate-45" />
                <span className="text-xs uppercase tracking-[0.25em] text-[#B88E3E] font-mono font-semibold">
                  Atelier Technical Specification
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-stone-950 font-normal leading-snug">
                {currentFocus.title}
              </h3>

              <p className="font-serif-bengali text-lg sm:text-2xl text-[#A84A28] leading-snug">
                {currentFocus.bengaliTitle}
              </p>

              <p className="text-stone-700 font-sans text-sm sm:text-base lg:text-lg leading-relaxed pt-1 sm:pt-2">
                {currentFocus.description}
              </p>
            </div>

            {/* Technical Specifications Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-4 border-t border-stone-200">
              {currentFocus.provenanceDetails.map((detail) => (
                <div key={detail.label} className="space-y-0.5 sm:space-y-1">
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-mono text-stone-400 block font-semibold">
                    {detail.label}
                  </span>
                  <span className="font-serif text-base sm:text-lg text-stone-900 block leading-snug">
                    {detail.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Karigar Quote */}
            <div className="p-5 bg-white border-l-2 border-[#A84A28] rounded-[1px] space-y-1.5 border border-stone-200/60">
              <p className="font-serif italic text-sm sm:text-base text-stone-800 leading-relaxed">
                &ldquo;প্রতিটি সেলাইয়ে বাংলার নারীর গল্প গাঁথা থাকে। পোশাকে যখন গ্রামীণ তাঁত আর সুই-সুতার কাজ মিলে যায়, তখনই সৃষ্টি হয় আসল ঐতিহ্য।&rdquo;
              </p>
              <span className="text-[10px] uppercase tracking-[0.2em] text-stone-500 font-mono block">
                Senior Nakshi Shilpi &amp; Tailor · M/S Janani Craft &amp; Fashion
              </span>
            </div>

            {/* Direct Link to Three-Piece Product Archive */}
            <div className="pt-2">
              <Link
                href="/collections/exclusive-handloom-embroidered-three-piece"
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-stone-900 hover:bg-[#A84A28] text-white text-xs uppercase tracking-[0.2em] font-mono font-semibold rounded-[1px] transition-colors"
              >
                <span>Explore Three-Piece Archive</span>
                <span>→</span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ThreePieceMannequinFocus;
