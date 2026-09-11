"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface FactoryStage {
  id: string;
  stepNum: string;
  bengaliStep: string;
  title: string;
  bengaliTitle: string;
  subtitle: string;
  bengaliSubtitle: string;
  primaryImage: string;
  secondaryImage: string;
  primaryAlt: string;
  secondaryAlt: string;
  galleryImages?: {
    image: string;
    alt: string;
    label: string;
    bengaliLabel: string;
  }[];
  description: string;
  specs: { label: string; value: string }[];
  highlight: string;
  actionHref: string;
  actionLabel: string;
}

const factoryStages: FactoryStage[] = [
  {
    id: "factory-looms",
    stepNum: "01",
    bengaliStep: "পর্যায় ০১",
    title: "Traditional Weaving Factory & Pit-Looms",
    bengaliTitle: "ঐতিহ্যবাহী তাঁত ফ্যাক্টরি ও কাঠের পিট-লুম",
    subtitle: "Rhythmic hand-thrown shuttles preserving Manikganj's ancestral weaving sheds",
    bengaliSubtitle: "মানিকগঞ্জের গ্রামীণ কারখানায় কাঠের তাঁতে বয়ন শিল্পীদের অবিরাম সাধনা",
    primaryImage: "/images/sister_concern_weaving_factory.jpg",
    secondaryImage: "/images/weaving_loom_shuttle_action.png",
    primaryAlt: "Wide view inside M/S Janani Weaving Factory in Manikganj with master weavers operating pit-looms",
    secondaryAlt: "Close-up action macro of a master weaver's hands throwing a polished wooden shuttle across cotton warp threads",
    description:
      "At M/S Janani Weaving Factory in Sakrail, Manikganj, master tantis (তাঁতি) operate rows of traditional wooden pit-looms. Guided by muscle memory and centuries of oral craft knowledge, every throw of the teakwood shuttle (মাকু) and tap of the reed interlocks warp and weft with calibrated tension that automated power-looms can never replicate.",
    specs: [
      { label: "Loom Architecture", value: "Traditional Wooden Pit-Looms (মাটির গর্তের তাঁত)" },
      { label: "Weaving Hub", value: "Sakrail, Gorpara, Manikgonj" },
      { label: "Shuttle Craft", value: "Polished Teakwood Flying Shuttle (হাতে চালিত মাকু)" },
      { label: "Daily Output", value: "4 to 6 yards per artisan loom" },
    ],
    highlight: "১০০% বিদ্যুৎহীন কায়িক শ্রমে নির্মিত খাঁটি হস্তচালিত ঐতিহ্যবাহী তাঁত শিল্প।",
    actionHref: "/collections?category=weaving-factory",
    actionLabel: "Explore Factory Line",
  },
  {
    id: "than-kapor",
    stepNum: "02",
    bengaliStep: "পর্যায় ০২",
    title: "Endi Silk & Cotton Than Kapor (Fabric Bolts)",
    bengaliTitle: "খাঁটি এন্ডি সিল্ক ও সুতি থান কাপড় সম্ভার",
    subtitle: "Continuous running yardage rolls for bespoke tailoring and boutique houses",
    bengaliSubtitle: "অভিজাত দর্জি ও বুটিক হাউসের জন্য ৩০ মিটারের অবিরল হস্তনির্মিত থান রোল",
    primaryImage: "/images/handloom_than_kapor_display.png",
    secondaryImage: "/images/endi_cotton_than_drape.png",
    primaryAlt: "Neatly stacked bolts of handloom Than Kapor in unbleached ivory Endi silk and fine cotton",
    secondaryAlt: "Continuous handloom Than fabric roll draping across an artisan wooden cutting workbench",
    description:
      "Celebrated across Bangladesh, our continuous handloom Than Kapor (থান কাপড়) is woven in generous 30-meter rolls. Crafted from pure cruelty-free Endi silk (Ahimsa silk) and combed Deshi cotton, each bolt possesses a distinctive breathable slub texture that softens with every wash while retaining enduring thermal comfort.",
    specs: [
      { label: "Fabric Width", value: "44\" to 48\" wide running yardage" },
      { label: "Standard Roll Length", value: "30-meter continuous bolts (থান)" },
      { label: "Material Composition", value: "100% Pure Endi Silk & Combed Cotton" },
      { label: "Commercial Distribution", value: "Bespoke ateliers & institutional wholesale" },
    ],
    highlight: "অনুকরণহীন প্রাকৃতিক বুনন—বুটিক পোশাক ও এক্সক্লুসিভ পাঞ্জাবির সবচেয়ে বিশ্বস্ত কাঁচামাল।",
    actionHref: "/contact?concern=janani-weaving-factory",
    actionLabel: "Order Than Rolls",
  },
  {
    id: "yarn-spools",
    stepNum: "03",
    bengaliStep: "পর্যায় ০৩",
    title: "Yarn Preparation, Charkha & Botanical Dyeing",
    bengaliTitle: "রঙিন সুতা, চরকা ও ভেষজ রঙের লাচি",
    subtitle: "Organic rice-starch sizing, bamboo drying poles, and traditional bobbin winding",
    bengaliSubtitle: "ভেষজ রঙে সুতা ডাইং, চালের মাড়ের প্রক্রিয়াজাতকরণ ও নলি পাকানো",
    primaryImage: "/images/weaving_yarn_spools_charkha.png",
    secondaryImage: "/images/yarn_bobbins_charkha_stilllife.png",
    primaryAlt: "Vibrant dyed cotton and silk yarn skeins hanging on bamboo poles in sunlight",
    secondaryAlt: "Traditional wooden spinning charkha with wooden bobbins and colorful thread reels",
    description:
      "Before a single warp is laid on the loom, raw cotton and silk yarns undergo rigorous preparation. Yarns are immersed in natural plant-derived dye vats—river indigo, terracotta clay, and turmeric—then sized with organic cooked rice starch to enhance tensile strength. Artisans wind threads onto bamboo reeds and wooden bobbins (নলি) using hand-operated spinning charkhas.",
    specs: [
      { label: "Dye Chemistry", value: "100% Plant & Earth Pigments (Terracotta, Indigo, Madder)" },
      { label: "Yarn Conditioning", value: "Organic Rice-Starch Sizing (ভাতের ফ্যান ও মাড়)" },
      { label: "Spinning Tool", value: "Handcrafted Wooden Charkha (হাতে ঘোরানো চরকা)" },
      { label: "Thread Count", value: "60s to 100s Superfine Count" },
    ],
    highlight: "রাসায়নিকমুক্ত প্রাকৃতিক রঙে রঞ্জিত সুতা যা ত্বকের জন্য শতভাগ নিরাপদ ও পরিবেশবান্ধব।",
    actionHref: "/craftsmanship",
    actionLabel: "Learn Sizing & Dyeing",
  },
  {
    id: "saree-lifestyle",
    stepNum: "04",
    bengaliStep: "পর্যায় ০৪",
    title: "Heirloom Tant & Jamdani Border Sarees in Graceful Drape",
    bengaliTitle: "শাড়ি পরা রমণীর চিরন্তন আভিজাত্য — তাঁতের শাড়ি সম্ভার",
    subtitle: "Authentic Bengali women draped in handloom sarees across heritage courtyards and studio settings",
    bengaliSubtitle: "বাংলার নারীর অকৃত্রিম স্নিগ্ধতা ও ঐতিহ্যের জীবন্ত প্রতিচ্ছবি",
    primaryImage: "/images/saree_sage_blue_model_full.png",
    secondaryImage: "/images/saree_sage_blue_pallu_macro.png",
    primaryAlt: "Bengali model seated in handloom Tant cotton saree in sheer sage green with royal-blue geometric anchal and yellow star boutis",
    secondaryAlt: "Macro close-up of extra-weft diamond border, hand-thrown shuttle texture, and embroidered star boutis",
    galleryImages: [
      {
        image: "/images/saree_sage_blue_model_standing.png",
        alt: "Standing graceful drape flow of sage-green and royal-blue handloom saree",
        label: "Drape Flow Perspective",
        bengaliLabel: "পূর্ণাঙ্গ শাড়ি ড্র্যাপ ও আঁচল",
      },
      {
        image: "/images/saree_courtyard_lifestyle_drape.jpg",
        alt: "Bengali woman wearing handloom Tant saree in village courtyard veranda",
        label: "Courtyard Heritage Drape",
        bengaliLabel: "গ্রামীণ আঙিনায় ঐতিহ্যবাহী রূপ",
      },
      {
        image: "/images/saree_pallu_studio_exhibition.jpg",
        alt: "Handloom Tant saree in indigo and terracotta draped over vintage wooden loom frame in atelier",
        label: "Atelier Loom Display",
        bengaliLabel: "তাঁত কাঠামে শাড়ির নান্দনিক বিন্যাস",
      },
    ],
    description:
      "The crowning creational glory of Janani Weaving Factory is the Bengali handloom saree. Captured in real-life dignity: draped in flowing folds over the shoulder, moving with effortless grace through tropical daylight, and adorned with geometric diamond temple borders and hand-knotted tassels.",
    specs: [
      { label: "Saree Dimensions", value: "Traditional 12 Haat (approx. 5.5 meters)" },
      { label: "Border Architecture", value: "Extra-weft geometric diamond border (জাফরি পাড়)" },
      { label: "Pallu / Anchal Artistry", value: "Hand-knotted dual-tone silk tassel fringe with floral star boutis" },
      { label: "Weaving Hub", value: "M/S Janani Weaving Factory, Manikganj" },
    ],
    highlight: "বাংলার আবহাওয়ার সাথে নিখুঁতভাবে মানানসই—হালকা, আরামদায়ক এবং সর্বজনীন আভিজাত্যের প্রতীক।",
    actionHref: "/collections#sarees",
    actionLabel: "View Saree Collection",
  },
];

export function WeavingFactoryShowcase() {
  return (
    <section className="w-full bg-white border-b border-stone-200 py-14 sm:py-20 lg:py-28 overflow-hidden">
      <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 space-y-12 sm:space-y-16 lg:space-y-24">

        {/* ── 1. Sovereign Enterprise Header ────────────────────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 pb-8 sm:pb-10 border-b border-stone-200">
          <div className="space-y-3 sm:space-y-4 max-w-3xl">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <span className="block w-8 sm:w-12 h-px bg-[#A84A28]" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.26em] text-[#A84A28] font-mono font-bold">
                ENTERPRISE WING 01 &bull; RURAL HANDLOOM PROJECT
              </span>
            </div>

            <div className="space-y-2">
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-stone-950 font-normal tracking-tight leading-[1.08]">
                Janani Weaving Factory
              </h2>
              <p className="font-serif-bengali text-2xl sm:text-3xl lg:text-4xl text-[#B88E3E] font-medium leading-snug">
                মেসার্স জননী উইভিং ফ্যাক্টরি
              </p>
            </div>

            <p className="text-base sm:text-lg text-stone-700 font-sans leading-relaxed pt-1 max-w-2xl">
              উন্নত মানের এন্ডি থান, হাফ-সিল্ক শাড়ি ও ওড়না তৈরির পল্লী তাঁত প্রকল্প। মানিকগঞ্জের সাকরাইলে
              কাঠের পিট-লুমে তৈরি খাঁটি প্রাকৃতিক সুতি ও রেশম বয়ন শিল্প।
            </p>
          </div>

          {/* Provenance & Production Capacity Badge */}
          <div className="shrink-0 border border-stone-200 bg-[#FAF8F5] rounded-[1px] p-4 sm:p-5 space-y-2 text-xs font-mono self-start lg:self-auto">
            <div className="flex items-center gap-2 text-[#A84A28] font-bold uppercase tracking-[0.2em]">
              <span className="w-2 h-2 bg-[#A84A28] rotate-45 shrink-0" />
              <span>Sakrail, Gorpara, Manikganj</span>
            </div>
            <p className="text-stone-900 font-semibold text-sm">Active Wooden Pit-Looms: 45+ Units</p>
            <p className="text-stone-600">Monthly Than Yardage: 10,000+ Meters</p>
            <p className="text-[#B88E3E] font-semibold pt-0.5">100% Pure Organic Fiber Production</p>
          </div>
        </div>

        {/* ── 2. Serial-by-Serial Showcase (All 4 Stages Rendered in Linear Order) ── */}
        <div className="space-y-16 sm:space-y-24 lg:space-y-32">
          {factoryStages.map((stage, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <article
                key={stage.id}
                id={stage.id}
                className="space-y-6 sm:space-y-8 scroll-mt-24"
              >
                {/* Stage Header Strip */}
                <div className="border-b border-stone-200 pb-4 space-y-1">
                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-stone-900 font-normal">
                    {stage.title}
                  </h3>
                  <p className="font-serif-bengali text-lg sm:text-2xl text-[#B88E3E]">
                    {stage.bengaliTitle}
                  </p>
                </div>

                {/* Split Photographic Grid (Alternating Left/Right for Editorial Rhythm) */}
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start ${
                    !isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Primary Master Image Frame (Zero Text on Image) */}
                  <div className={`${isEven ? "lg:col-span-7" : "lg:col-span-7 lg:order-2"}`}>
                    <div className="relative w-full aspect-[16/10] sm:aspect-[16/10] lg:aspect-[4/3] rounded-[1px] overflow-hidden">
                      <Image
                        src={stage.primaryImage}
                        alt={stage.primaryAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 58vw"
                        className="object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Secondary Image & Technical Details Dossier */}
                  <div className={`space-y-5 ${isEven ? "lg:col-span-5" : "lg:col-span-5 lg:order-1"}`}>
                    {/* Secondary Photograph Frame (Zero Text on Image) */}
                    <div className="relative w-full aspect-[16/10] sm:aspect-[16/10] rounded-[1px] overflow-hidden">
                      <Image
                        src={stage.secondaryImage}
                        alt={stage.secondaryAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 42vw"
                        className="object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
                      />
                    </div>

                    {/* Narrative Description */}
                    <p className="text-sm sm:text-base text-stone-700 font-sans leading-relaxed pt-1">
                      {stage.description}
                    </p>

                    {/* Specifications Box */}
                    <div className="border border-stone-200 bg-[#FAF8F5] rounded-[1px] divide-y divide-stone-200 text-xs font-sans">
                      {stage.specs.map((item) => (
                        <div key={item.label} className="flex justify-between items-center px-4 py-2.5">
                          <span className="text-stone-500 font-mono text-[11px] uppercase tracking-wider">{item.label}</span>
                          <span className="text-stone-900 font-medium text-right">{item.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Heritage Highlight */}
                    <div className="p-4 bg-white border-l-2 border-[#A84A28] border border-stone-200 rounded-[1px]">
                      <p className="font-serif-bengali text-sm sm:text-base text-[#A84A28] leading-relaxed">
                        {stage.highlight}
                      </p>
                    </div>

                    {/* Action Link */}
                    <div className="pt-1">
                      <Link
                        href={stage.actionHref}
                        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-mono font-bold text-stone-900 hover:text-[#A84A28] transition-colors"
                      >
                        <span>{stage.actionLabel}</span>
                        <span>&rarr;</span>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Optional Multi-Perspective Heritage Gallery Strip (Zero Text on Images) */}
                {stage.galleryImages && stage.galleryImages.length > 0 && (
                  <div className="pt-8 sm:pt-10 space-y-4">
                    <div className="flex items-center justify-between border-b border-stone-200 pb-2.5">
                      <div className="flex items-center gap-2">
                        <span className="w-4 h-px bg-[#A84A28]" />
                        <h4 className="text-xs uppercase tracking-[0.2em] font-mono font-semibold text-stone-900">
                          Heritage Perspectives &amp; Drape Styles
                        </h4>
                      </div>
                      <span className="text-[11px] font-mono text-stone-500 hidden sm:inline">
                        শাড়ির বিভিন্ন দৃষ্টিকোণ ও রূপ সম্ভার
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                      {stage.galleryImages.map((item, gIdx) => (
                        <div key={gIdx} className="space-y-2">
                          {/* Pure Image Container (Zero Text on Image) */}
                          <div className="relative w-full aspect-[4/3] rounded-[1px] overflow-hidden">
                            <Image
                              src={item.image}
                              alt={item.alt}
                              fill
                              sizes="(max-width: 768px) 100vw, 33vw"
                              className="object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
                            />
                          </div>

                          <div className="pt-0.5">
                            <span className="font-sans font-medium text-stone-900 text-xs block">{item.label}</span>
                            <span className="font-serif-bengali text-xs text-[#A84A28] block">
                              {item.bengaliLabel}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Hairline Divider between serial stages */}
                {idx < factoryStages.length - 1 && (
                  <div className="pt-10 sm:pt-14 border-b border-stone-200/80" />
                )}
              </article>
            );
          })}
        </div>

        {/* ── 3. Bottom Factory Action Bar ───────────────────────────────── */}
        <div className="w-full bg-[#FAF8F5] border border-stone-200 rounded-[1px] p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-[#A84A28] font-mono text-xs uppercase tracking-wider font-bold">
              <span>✦</span>
              <span>Direct Handloom Supply &bull; প্রাতিষ্ঠানিক অর্ডার ও সরবরাহ</span>
            </div>
            <h4 className="font-serif text-2xl sm:text-3xl text-stone-900">
              Need Continuous Than Yardage or Wholesale Sarees?
            </h4>
            <p className="text-sm sm:text-base text-stone-600 font-sans">
              Our 45+ pit-looms accept bulk orders for continuous Endi silk bolts, fine cotton Than kapor,
              and authentic handloom Tant sarees directly from Sakrail, Manikganj.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
            <Link
              href="/collections?category=weaving-factory"
              className="inline-flex justify-center items-center px-6 py-3.5 bg-stone-900 hover:bg-[#A84A28] text-white text-xs uppercase tracking-[0.2em] font-mono rounded-[1px] transition-colors text-center"
            >
              View Full Weaving Archive &rarr;
            </Link>
            <Link
              href="/contact?concern=janani-weaving-factory"
              className="inline-flex justify-center items-center px-6 py-3.5 border border-stone-300 hover:border-stone-900 text-stone-900 text-xs uppercase tracking-[0.2em] font-mono rounded-[1px] transition-colors text-center"
            >
              Inquire For Than Orders
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

export default WeavingFactoryShowcase;
