"use client";

import React, { useState } from "react";
import Image from "next/image";

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
    tag: "View 01 · Full Mannequin Form",
    bengaliTag: "০১ · ডলে পূর্ণাঙ্গ অবয়ব",
    title: "The Tailored Silhouette on Atelier Form",
    bengaliTitle: "ম্যানিকিনে কাঁধ থেকে ঝুল পর্যন্ত সুষম অনুপাত",
    image: "/images/panjabi_white_maroon_mannequin.png",
    aspectDesc: "Dignified drape over natural linen-covered tailor form with vintage wooden stand.",
    provenanceDetails: [
      { label: "Cut & Proportion", value: "Semi-fitted Bengali Classic" },
      { label: "Fabric Base", value: "100% Combed Adi Dhuti Cotton" },
      { label: "Collar & Placket", value: "Antique Gold & Maroon Needlework" },
      { label: "Hem & Side Vents", value: "Reinforced 14-inch ease of movement" },
    ],
    description:
      "Sculpted on a master tailor's dummy at the Sakrail atelier, this Adi Dhuti cotton Panjabi honors traditional Bengali sartorial posture with contemporary architectural poise. Features rich antique gold and maroon needlework embroidery along the collar and chest placket.",
  },
  {
    id: "collar",
    tag: "View 02 · Collar & Placket Macro",
    bengaliTag: "০২ · কলার ও প্লাকেটের সূচিকর্ম",
    title: "Hand-Needle Mandarin Collar & Shell Buttons",
    bengaliTitle: "সূক্ষ্ম সুই-সুতার নকশা ও আসল মুক্তার বোতাম",
    image: "/images/panjabi_collar_focus_macro.jpg",
    aspectDesc: "Razor-sharp macro focus revealing individual needlework thread relief and mother-of-pearl luster.",
    provenanceDetails: [
      { label: "Embroidery Style", value: "Traditional tonal needlework" },
      { label: "Placket Interfacing", value: "Double-fused breathable canvas" },
      { label: "Buttons", value: "Natural Mother-of-Pearl (MOP) Shell" },
      { label: "Stitch Precision", value: "18-20 stitches per inch" },
    ],
    description:
      "The mandarin collar is the sovereign focal point of the Panjabi. Master needlecraft artisans spend hours hand-embroidering delicate floral vines along the band and vertical placket, anchored with hand-stitched natural shell buttons.",
  },
  {
    id: "skyblue",
    tag: "View 03 · Sky Blue Floral Edition",
    bengaliTag: "০৩ · আকাশী সুতি ফ্লোরাল সংস্করণ",
    title: "Sky Blue Cotton with Royal Blue Flora",
    bengaliTitle: "আকাশী জমিনে গাঢ় নীল ফ্লোরাল এমব্রয়ডারি ও গোল্ড বোতাম",
    image: "/images/panjabi_skyblue_floral_mannequin.png",
    aspectDesc: "Mannequin presentation of the serene sky-blue 100% cotton Panjabi with royal blue vine embroidery.",
    provenanceDetails: [
      { label: "Fabric Colorway", value: "Serene Sky Blue (কোড ১০২)" },
      { label: "Embroidery Palette", value: "Royal Blue & Cyan Floral Vines" },
      { label: "Placket Closures", value: "Gold-Rimmed Metallic Buttons" },
      { label: "Atelier Signature", value: "Matching Floral Sleeve Cuffs" },
    ],
    description:
      "Tailored from soft combed cotton in a serene sky-blue tone, this edition features royal blue floral vine needlework flowing down the mandarin collar and chest placket, accented with metallic gold-rimmed buttons.",
  },
  {
    id: "cuff",
    tag: "View 04 · Tailoring & Cuff Detailing",
    bengaliTag: "০৪ · হাতের কাফ ও সিঙ্গেল-নিডল সিম",
    title: "Artisanal Barrel Cuffs & French Seams",
    bengaliTitle: "হাতের কাফে টোনাল স্টিচ ও মজবুত ফিনিশিং",
    image: "/images/panjabi_cuff_tailoring_focus.jpg",
    aspectDesc: "Atelier workbench detail showcasing precision single-needle edge stitching and cuff finishing.",
    provenanceDetails: [
      { label: "Seam Construction", value: "Enclosed French Seams (Zero fray)" },
      { label: "Cuff Style", value: "Classic single-button barrel cuff" },
      { label: "Thread Spec", value: "Mercerized 3-ply cotton thread" },
      { label: "Atelier Signature", value: "Hand-turned edge pick-stitching" },
    ],
    description:
      "Clean interior construction is the hallmark of Janani Craft & Fashion tailoring. All armhole and sleeve seams are fully enclosed French seams, ensuring zero abrasion against the wearer's skin and decades of structural longevity.",
  },
];

export function PanjabiMannequinFocus() {
  const [activeTab, setActiveTab] = useState<string>("silhouette");

  const currentFocus = focusPoints.find((f) => f.id === activeTab) || focusPoints[0];

  return (
    <section className="w-full bg-white border-b border-stone-200 py-12 sm:py-20 lg:py-28">
      <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 space-y-10 sm:space-y-12 lg:space-y-16">

        {/* ── 1. Section Header ─────────────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 pb-6 sm:pb-8 border-b border-stone-200">
          <div className="space-y-3 sm:space-y-4 max-w-3xl">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <span className="block w-6 sm:w-8 h-px bg-[#A84A28]" />
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.22em] sm:tracking-[0.28em] text-[#A84A28] font-mono font-semibold">
                Atelier Mannequin Exhibition · M/S Janani Craft &amp; Fashion
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-stone-900 font-normal tracking-tight leading-[1.08]">
              The Panjabi on the Atelier Form
            </h2>

            <p className="font-serif-bengali text-xl sm:text-2xl md:text-3xl text-[#B88E3E] font-normal leading-snug">
              ম্যানিকিনে পাঞ্জাবির নিখুঁত অবয়ব ও নিপুণ দর্জি কারুকাজ
            </p>

            <p className="text-sm sm:text-base md:text-lg text-stone-600 font-sans leading-relaxed pt-1">
              Draped on a vintage tailor&apos;s dummy in our Sakrail workshop, explore how handloom
              textiles, bespoke structural cutting, and heirloom needlework converge into timeless Bengali menswear.
            </p>
          </div>

          <div className="shrink-0 flex flex-col items-start lg:items-end gap-2 sm:gap-3 text-xs font-mono text-stone-500">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#B88E3E] rotate-45 shrink-0" />
              <span className="uppercase tracking-[0.2em] font-semibold text-stone-900">
                100% Bespoke Atelier Tailoring
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
                    ? "bg-[#FAF8F5] border-[#A84A28] text-stone-950"
                    : "bg-white border-stone-200 hover:border-stone-400 text-stone-600"
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
                alt={`${currentFocus.title} - Bengali Panjabi displayed on mannequin dummy`}
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
            <div className="p-5 bg-[#FAF8F5] border-l-2 border-[#B88E3E] rounded-[1px] space-y-1.5">
              <p className="font-serif italic text-sm sm:text-base text-stone-800 leading-relaxed">
                &ldquo;A Panjabi must breathe with the man who wears it. On the doll we verify every curve before a single needle finishes the collar.&rdquo;
              </p>
              <span className="text-[10px] uppercase tracking-[0.2em] text-stone-500 font-mono block">
                Master Ustad Tailor · Janani Craft &amp; Fashion
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default PanjabiMannequinFocus;
