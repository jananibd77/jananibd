"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface AgroDivision {
  id: string;
  num: string;
  bengaliNum: string;
  title: string;
  bengaliTitle: string;
  subtitle: string;
  bengaliSubtitle: string;
  image: string;
  alt: string;
  summary: string;
  bengaliSummary: string;
  specs: { label: string; value: string }[];
  highlight: string;
}

const agroDivisions: AgroDivision[] = [
  {
    id: "fish-feed",
    num: "01",
    bengaliNum: "০১",
    title: "High-Protein Aquaculture Fish Feed",
    bengaliTitle: "উন্নত মানের মৎস্য খাদ্য ও পুষ্টি উপাদান",
    subtitle: "Scientifically formulated floating & sinking feeds for commercial delta fisheries",
    bengaliSubtitle: "বাণিজ্যিক মাছ চাষ ও ঘেরের জন্য উচ্চ প্রোটিনযুক্ত ভাসমান ও ডুবন্ত ফিড",
    image: "/images/rapid_agro_fish_feed.jpg",
    alt: "Premium aquaculture floating fish feed pellets and packaging for commercial fish farming",
    summary:
      "Rapid Agro Care imports and distributes balanced aquaculture feeds engineered to maximize Feed Conversion Ratio (FCR). Formulated with certified marine proteins, essential amino acids, and fortified vitamins tailored for Rohu, Katla, Pangas, and Tilapia cultivation across Manikganj and delta pond ecosystems.",
    bengaliSummary:
      "মাছের দ্রুত ও সুষম বৃদ্ধির জন্য বৈজ্ঞানিকভাবে তৈরি ফিড; উচ্চ প্রোটিন (২৮%-৩২%), পানিতে দীর্ঘস্থায়ী স্থায়িত্ব এবং স্থানীয় মৎস্যচাষীদের জন্য সর্বোচ্চ ফলন নিশ্চয়তা।",
    specs: [
      { label: "Product Category", value: "Floating & Sinking Aqua Feed Pellets" },
      { label: "Protein Concentration", value: "28% to 32% Crude Marine Protein" },
      { label: "Target Species", value: "Rohu, Katla, Grass Carp, Tilapia, Pangas" },
      { label: "Water Stability", value: "High Pellet Water Retention (Zero Water Pollution)" },
    ],
    highlight: "পানিতে দূষণমুক্ত ও দ্রুত হজমযোগ্য—মাছের ওজন বৃদ্ধি ও চাষীদের সর্বোচ্চ মুনাফার নির্ভরযোগ্য নাম।",
  },
  {
    id: "veterinary",
    num: "02",
    bengaliNum: "০২",
    title: "Veterinary Healthcare & Livestock Medicines",
    bengaliTitle: "ভেটেরিনারি ওষুধ, ভ্যাকসিন ও প্রাণিসম্পদ সুরক্ষা",
    subtitle: "Certified pharmaceutical remedies and dietary premixes for cattle, dairy & poultry",
    bengaliSubtitle: "গবাদি পশু, ডেইরি খামার ও পোল্ট্রির জন্য আন্তর্জাতিক মানের প্রতিরোধক ও আরোগ্যকারী ওষুধ",
    image: "/images/rapid_agro_veterinary.jpg",
    alt: "Certified veterinary healthcare medicines, antibiotics, and nutritional supplements for livestock",
    summary:
      "Safeguarding rural livestock vitality across central Bangladesh. We distribute certified veterinary antibiotics, broad-spectrum anthelmintics, liver stimulants, calcium-phosphorus tonics, and electrolyte solutions through temperature-monitored distribution chains directly to registered veterinarians, dairy cooperatives, and farmsteads.",
    bengaliSummary:
      "ডেইরি ও পোল্ট্রি খামার সুরক্ষায় উন্নত মানের ভেটেরিনারি অ্যান্টিবায়োটিক, কৃমিনাশক, ক্যালসিয়াম ও লিভার টনিকের সুশৃঙ্খল পরিবেশন।",
    specs: [
      { label: "Therapeutic Scope", value: "Anthelmintics, Antibiotics, Vitamins & Electrolytes" },
      { label: "Target Livestock", value: "Dairy Cattle, Goats, Sheep, Commercial Poultry" },
      { label: "Storage Protocol", value: "Certified Cold-Chain & Climate-Controlled Depot" },
      { label: "Regulatory Standard", value: "DGDA & Livestock Department Certified" },
    ],
    highlight: "গ্রামীণ ডেইরি ও খামারিদের অর্থনৈতিক নিরাপত্তার সহায়ক—নিরাপদ ও নির্ভরযোগ্য প্রাণিসম্পদ চিকিৎসা।",
  },
  {
    id: "distribution-hub",
    num: "03",
    bengaliNum: "০৩",
    title: "Regional Distribution Network & Farmer Support",
    bengaliTitle: "আঞ্চলিক সরবরাহ নেটওয়ার্ক ও মাঠপর্যায়ের পরামর্শ",
    subtitle: "Direct farmgate delivery, cold-storage warehousing, and technical guidance in Manikganj",
    bengaliSubtitle: "মানিকগঞ্জ ও পার্শ্ববর্তী জেলায় খামারিদের দ্বারে দ্বারে দ্রুত সরবরাহ ও অভিজ্ঞ পরামর্শ সেবা",
    image: "/images/rapid_agro_care.jpg",
    alt: "Rapid Agro Care central warehouse, delivery logistics, and agricultural consultation hub",
    summary:
      "Operating from our central logistics headquarters in Sakrail, Gorpara, Manikgonj, Rapid Agro Care bridges global nutritional science with local agrarian prosperity. Our dedicated technical officers provide on-site pond water quality testing, feed conversion monitoring, and cattle health counseling to empower farming communities.",
    bengaliSummary:
      "মানিকগঞ্জের সাকরাইল সেন্ট্রাল ডিপো থেকে সরাসরি খামারিদের কাছে পৌঁছানো, বিনামূল্যে পুকুরের পানি পরীক্ষা ও সার্বক্ষণিক পরামর্শ সেবা।",
    specs: [
      { label: "Central Depot", value: "Sakrail, Gorpara, Manikgonj, Bangladesh" },
      { label: "Supply Reach", value: "Manikganj, Dhaka Rural, Tangail, Faridpur Belt" },
      { label: "Farmer Services", value: "Free Pond Testing, Dosage Advisory, Farmgate Delivery" },
      { label: "Corporate Commitment", value: "Food Security & Rural Agricultural Vitality" },
    ],
    highlight: "খাদ্য নিরাপত্তা ও গ্রামীণ কৃষক-খামারিদের সমৃদ্ধি নিশ্চিত করতে আমাদের নিরবচ্ছিন্ন প্রাতিষ্ঠানিক অঙ্গীকার।",
  },
];

export function RapidAgroCareShowcase() {
  return (
    <section className="w-full bg-white border-b border-stone-200 py-14 sm:py-20 lg:py-28 overflow-hidden">
      <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 space-y-12 sm:space-y-16 lg:space-y-24">

        {/* ── 1. Sovereign Enterprise Header ────────────────────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 pb-8 sm:pb-10 border-b border-stone-200">
          <div className="space-y-3 sm:space-y-4 max-w-3xl">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <span className="block w-8 sm:w-12 h-px bg-[#2B5329]" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.26em] text-[#2B5329] font-mono font-bold">
                ENTERPRISE WING 03 &bull; AGRICULTURAL &amp; AQUACULTURE VITALITY
              </span>
            </div>

            <div className="space-y-2">
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-stone-950 font-normal tracking-tight leading-[1.08]">
                Rapid Agro Care
              </h2>
              <p className="font-serif-bengali text-2xl sm:text-3xl lg:text-4xl text-[#2B5329] font-medium leading-snug">
                র‍্যাপিড এগ্রো কেয়ার
              </p>
            </div>

            <p className="text-base sm:text-lg text-stone-700 font-sans leading-relaxed pt-1 max-w-2xl">
              আমদানিকারক ও পরিবেশক: উন্নত মানের মাছের খাদ্য, পুষ্টি উপাদান ও বিশ্বস্ত ভেটেরিনারি ওষুধ।
              মানিকগঞ্জের সাকরাইল থেকে গ্রামীণ কৃষি ও মৎস্য সম্পদের অর্থনৈতিক সমৃদ্ধি গড়ার অগ্রদূত।
            </p>
          </div>

          {/* Provenance & Distribution Badge */}
          <div className="shrink-0 border border-stone-200 bg-[#FAF8F5] rounded-[1px] p-4 sm:p-5 space-y-1.5 text-xs font-mono self-start lg:self-auto">
            <div className="flex items-center gap-2 text-[#2B5329] font-bold uppercase tracking-[0.2em]">
              <span className="w-2 h-2 bg-[#2B5329] rotate-45 shrink-0" />
              <span>Sakrail, Gorpara, Manikganj</span>
            </div>
            <p className="text-stone-900 font-semibold text-sm">Importer &amp; Primary Distributor</p>
            <p className="text-stone-600">Aqua Feed &amp; Veterinary Healthcare</p>
            <p className="text-[#2B5329] font-semibold pt-0.5">Direct Farmgate Supply Network</p>
          </div>
        </div>

        {/* ── 2. Serial-by-Serial Showcase (All 3 Divisions Rendered in Order) ── */}
        <div className="space-y-16 sm:space-y-24 lg:space-y-32">
          {agroDivisions.map((division, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <article
                key={division.id}
                id={`agro-${division.id}`}
                className="space-y-6 sm:space-y-8 scroll-mt-24"
              >
                {/* Division Header Strip */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-stone-200 pb-4">
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono text-[#2B5329] uppercase tracking-[0.2em] font-semibold block">
                      Agricultural Division
                    </span>

                    <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-stone-900 font-normal">
                      {division.title}
                    </h3>
                    <p className="font-serif-bengali text-lg sm:text-2xl text-[#2B5329]">
                      {division.bengaliTitle}
                    </p>
                  </div>
                </div>

                {/* Split Photographic Grid (Zero Text on Image, Alternating Layout) */}
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    !isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Master Image Frame (100% Clean & Pure) */}
                  <div className={`${isEven ? "lg:col-span-6" : "lg:col-span-6 lg:order-2"}`}>
                    <div className="relative aspect-[16/11] sm:aspect-[16/10] w-full overflow-hidden rounded-[1px]">
                      <Image
                        src={division.image}
                        alt={division.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-center transition-all duration-700 ease-out hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Technical & Agro Specifications Dossier */}
                  <div className={`space-y-5 ${isEven ? "lg:col-span-6 lg:pl-4" : "lg:col-span-6 lg:pr-4 lg:order-1"}`}>
                    <div className="space-y-2.5">
                      <span className="text-xs uppercase tracking-[0.25em] text-[#2B5329] font-mono font-bold block">
                        Commercial Specification &bull; বিবরণ
                      </span>
                      <p className="text-stone-700 font-sans text-sm sm:text-base leading-relaxed">
                        {division.summary}
                      </p>
                      <div className="bg-[#FAF8F5] p-4 border-l-2 border-[#2B5329] rounded-[1px]">
                        <p className="font-serif-bengali text-stone-800 text-sm sm:text-base leading-relaxed">
                          {division.bengaliSummary}
                        </p>
                      </div>
                    </div>

                    {/* Specifications Box */}
                    <div className="border border-stone-200 rounded-[1px] bg-white divide-y divide-stone-200 text-xs sm:text-sm font-sans">
                      {division.specs.map((spec) => (
                        <div key={spec.label} className="flex justify-between items-center px-4 py-2.5">
                          <span className="text-stone-500 font-mono text-[11px] uppercase tracking-wider">{spec.label}</span>
                          <span className="text-stone-900 font-medium text-right">{spec.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Highlight Box */}
                    <div className="p-4 bg-white border-l-2 border-[#B88E3E] border border-stone-200 rounded-[1px]">
                      <p className="font-serif-bengali text-sm sm:text-base text-stone-900 leading-relaxed">
                        {division.highlight}
                      </p>
                    </div>

                    {/* Action Link */}
                    <div className="pt-1">
                      <Link
                        href="/contact?concern=rapid-agro-care"
                        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-mono font-bold text-stone-900 hover:text-[#2B5329] transition-colors"
                      >
                        <span>Distributor &amp; Wholesale Inquiries</span>
                        <span>&rarr;</span>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Hairline Divider between divisions */}
                {idx < agroDivisions.length - 1 && (
                  <div className="pt-8 sm:pt-12 border-b border-stone-200/80" />
                )}
              </article>
            );
          })}
        </div>

        {/* ── 3. Bottom Agro Action Bar ──────────────────────────────────── */}
        <div className="w-full bg-[#FAF8F5] border border-stone-200 rounded-[1px] p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-[#2B5329] font-mono text-xs uppercase tracking-wider font-bold">
              <span>✦</span>
              <span>Farmgate Distribution &bull; খামারি ও ডিলারদের জন্য সেবা</span>
            </div>
            <h4 className="font-serif text-2xl sm:text-3xl text-stone-900">
              Commercial Dealership &amp; Farm Inquiries
            </h4>
            <p className="text-sm sm:text-base text-stone-600 font-sans">
              For dealership partnerships, bulk fish feed supply, or veterinary medicine distribution
              in Manikganj and neighboring districts, connect with our central agro depot.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
            <Link
              href="/contact?concern=rapid-agro-care"
              className="inline-flex justify-center items-center px-6 py-3.5 bg-[#2B5329] hover:bg-[#1E3A1D] text-white text-xs uppercase tracking-[0.2em] font-mono rounded-[1px] transition-colors text-center"
            >
              Contact Agro Care Hub &rarr;
            </Link>
            <Link
              href="tel:01713574686"
              className="inline-flex justify-center items-center px-6 py-3.5 border border-stone-300 hover:border-stone-900 text-stone-900 text-xs uppercase tracking-[0.2em] font-mono rounded-[1px] transition-colors text-center"
            >
              Call: 01713-574686
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

export default RapidAgroCareShowcase;
