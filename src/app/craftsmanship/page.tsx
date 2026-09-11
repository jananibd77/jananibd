import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Artisanal Craftsmanship Documentary | Traditional Techniques | Janani Craft",
  description:
    "A living visual documentary exploring Bangladesh's heritage crafts: Nakshi Kantha needlework, bamboo & cane weaving, golden jute extraction, and traditional handlooms.",
};

export default function CraftsmanshipPage() {
  const crafts = [
    {
      id: "nakshi-kantha",
      title: "Nakshi Kantha: The Diary of Needle & Thread",
      bengali: "নকশিকাঁথা শিল্প",
      cluster: "Jessore, Chapainawabganj & Rajshahi",
      image: "/images/nakshi_kantha_lotus_artisan.jpg",
      href: "/collections?category=nakshi-kantha",
      description:
        "Historically created from layered, repurposed cotton saris stitched together with running thread, Nakshi Kantha is one of Bengal's most revered folk textile traditions. Each piece serves as an intimate visual narrative where women artisans immortalize rural flora, alluvial river ripples, and spiritual lotus mandalas.",
      techniques: [
        "Multiple layers of soft unbleached cotton tacked securely by hand",
        "Continuous rhythmic running stitch (fhor) producing characteristic rippled texture",
        "Central sacred lotus (Astadala Padma) framed by kalka and fish motifs",
        "Vegetable-extracted dyes from madder root, natural indigo, and marigold petals",
      ],
    },
    {
      id: "bamboo-cane",
      title: "Bamboo & Cane: Architecture of Pliant Fibers",
      bengali: "বাঁশ ও বেত কারুশিল্প",
      cluster: "Sylhet, Tangail & Chittagong Hill Tracts",
      image: "/images/journal_bamboo_cane_artisan.jpg",
      href: "/collections?category=bamboo-cane",
      description:
        "The river valleys of Bangladesh provide ideal microclimates for wild cane and dense bamboo. Shaping these resilient botanical fibers requires extraordinary mastery over draw-blade angles, moisture seasoning, and tension balance.",
      techniques: [
        "Selective harvesting of 3-year-old matured mooli and barak bamboo",
        "Hand-splitting using traditional draw knives into paper-thin, uniform ribbons",
        "Tight herringbone and hexagonal radial wicker weaving for load-bearing strength",
        "Natural saline seasoning followed by unrefined beeswax protective finish",
      ],
    },
    {
      id: "jute",
      title: "Golden Jute: The Sacred Biodegradable Fiber",
      bengali: "সোনালী পাট ও আঁশ",
      cluster: "Faridpur, Narsingdi & Rangpur",
      image: "/images/journal_jute_harvest_river.jpg",
      href: "/collections?category=jute",
      description:
        "Celebrated globally as the golden fiber of Bengal, jute is an ecological marvel that thrives in monsoon silt. We honor its natural oatmeal and camel tones, hand-braiding long-staple fibers into structured totes and enduring lifestyle pieces.",
      techniques: [
        "Slow river retting of harvested jute stalks in clear fresh water",
        "Manual fiber stripping and sun drying on bamboo poles",
        "Multi-strand hand braiding and rope weaving for high tensile durability",
        "Reinforced saddle stitching with natural cotton interior bindings",
      ],
    },
    {
      id: "handloom",
      title: "The Handloom Shuttle: Breathing Life into Cotton & Silk",
      bengali: "ঐতিহ্যবাহী তাঁত শিল্প",
      cluster: "Tangail, Pabna & Sonargaon",
      image: "/images/jamdani_hero_loom.jpg",
      href: "/collections?category=jamdani",
      description:
        "The rhythmic clack of the wooden pit-loom has resonated across Bengal's villages for centuries. Woven by hand without electrical automation, our handloom textiles preserve the delicate balance of warp and weft tension that makes deshi cotton and half-silk so light and breathable.",
      techniques: [
        "Manual yarn sizing and warp preparation using rice starch",
        "Traditional wooden pit-looms operated with rhythmic foot treadles and hand shuttles",
        "Supplementary weft insertion for motifs and border detailing",
        "Natural air drying to maintain fiber elasticity and soft hand-feel",
      ],
    },
  ];

  const craftSteps = [
    {
      step: "01",
      bengaliStep: "পর্যায় ০১",
      title: "Raw Material Sourcing",
      bengaliTitle: "কাঁচামাল আহরণ",
      image: "/images/craft_step_material_sourcing.jpg",
      description: "River retting of golden jute and hand-ginning of unbleached Deshi cotton.",
    },
    {
      step: "02",
      bengaliStep: "পর্যায় ০২",
      title: "Loom & Tool Calibration",
      bengaliTitle: "তাঁত ও যন্ত্রের সমন্বয়",
      image: "/images/craft_step_pit_loom.jpg",
      description: "Organic rice-starch yarn sizing and precision draw-knife cane splitting.",
    },
    {
      step: "03",
      bengaliStep: "পর্যায় ০৩",
      title: "Master Handcrafting",
      bengaliTitle: "হাতের কারুকাজ ও বুনন",
      image: "/images/craft_step_needlework_detail.jpg",
      description: "Rhythmic Nakshi Kantha needlework and supplementary Jamdani shuttle wefts.",
    },
    {
      step: "04",
      bengaliStep: "পর্যায় ০৪",
      title: "Sun Curing & Finishing",
      bengaliTitle: "প্রাকৃতিক সমাপনী",
      image: "/images/craft_step_finished_artifacts.jpg",
      description: "Natural sunlight air curing, organic beeswax buffing, and archival packaging.",
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* ─── Hero Section: Documentary Header ───────────────────────── */}
      <section className="w-full bg-[#FAF8F5] border-b border-stone-200 pt-24 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 lg:pb-20">
        <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8">
            {/* Left titles */}
            <div className="space-y-3 sm:space-y-4 max-w-3xl">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <span className="block w-6 sm:w-8 h-px bg-[#A84A28]" />
                <span className="text-[10px] sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#A84A28] font-mono font-semibold">
                  VISUAL CRAFT ARCHIVE · LIVING TECHNIQUES
                </span>
              </div>
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-[72px] text-stone-900 font-normal leading-[1.08] sm:leading-[1.04] tracking-tight">
                The Living Documentary <br className="hidden sm:inline" />
                <span className="italic font-light text-stone-600">of Bangladeshi Craft.</span>
              </h1>
              <p className="font-serif-bengali text-xl sm:text-2xl md:text-3xl text-[#B88E3E] leading-snug">
                বাংলার কারুশিল্পীদের জীবন্ত ঐতিহ্য ও নির্মাণকলা
              </p>
              <p className="text-sm sm:text-base lg:text-xl text-stone-600 font-sans leading-relaxed max-w-2xl pt-1">
                Step behind the finished object. Explore the raw alluvial materials, traditional
                tools, and generational techniques that transform Bengal’s natural fibers into
                enduring works of everyday utility.
              </p>
            </div>

            {/* Right provenance tag box (aligned with SisterConcerns styling) */}
            <div className="w-full sm:w-auto flex-shrink-0 border border-stone-200 bg-white rounded-[1px] p-4 sm:px-6 sm:py-5 space-y-1 text-xs sm:text-sm font-mono text-stone-600 self-start lg:self-auto">
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#B88E3E] font-semibold mb-1.5 sm:mb-2">
                HERITAGE ARCHIVE SPECIFICATION
              </p>
              <p className="font-semibold text-stone-900 text-sm sm:text-base">04 Living Craft Disciplines</p>
              <p>100% Handcrafted Lineage</p>
              <p className="text-[#A84A28] pt-1">Jessore · Sylhet · Tangail · Faridpur</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4 Craft Documentary Chapters (Full-Width Alternating Panels) ─ */}
      <section className="w-full divide-y divide-stone-200 border-b border-stone-200">
        {crafts.map((craft, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <article key={craft.id} className="w-full group/craft">
              <div
                className={`flex flex-col ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } min-h-[440px] sm:min-h-[520px] lg:min-h-[600px]`}
              >
                {/* ── Image Panel: Pure Photography — Zero Mat, Zero Border, Zero Text on Image ── */}
                <div className="relative w-full lg:w-[50%] xl:w-[52%] flex-shrink-0 overflow-hidden aspect-16/11 sm:aspect-16/11 lg:aspect-auto min-h-[300px] sm:min-h-[440px] lg:min-h-[580px]">
                  <Image
                    src={craft.image}
                    alt={craft.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 52vw"
                    className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover/craft:scale-[1.04]"
                    priority={idx === 0}
                  />
                </div>

                {/* ── Editorial Narrative Panel ── */}
                <div
                  className={`
                    w-full lg:flex-1 flex flex-col justify-center bg-stone-50
                    px-5 sm:px-8 md:px-12 lg:px-14 xl:px-16
                    py-10 sm:py-14 lg:py-20
                    ${isEven ? "lg:border-l" : "lg:border-r"} border-stone-200
                    space-y-5 sm:space-y-6
                  `}
                >
                  {/* Discipline Badge & Cluster */}
                  <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                    <span className="bg-[#A84A28]/10 border border-[#A84A28]/30 rounded-[1px] px-2.5 py-0.5 font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#A84A28] font-semibold">
                      Discipline 0{idx + 1}
                    </span>
                    <span className="font-mono text-xs text-stone-500">
                      Cluster: {craft.cluster}
                    </span>
                  </div>

                  {/* Bilingual Headings */}
                  <div className="space-y-1 sm:space-y-1.5">
                    <p className="font-serif-bengali text-xl sm:text-2xl md:text-3xl text-[#A84A28] font-medium leading-snug">
                      {craft.bengali}
                    </p>
                    <h2 className="font-serif text-2xl sm:text-3xl lg:text-[44px] text-stone-900 font-normal leading-[1.12] sm:leading-[1.1] tracking-tight">
                      {craft.title}
                    </h2>
                  </div>

                  {/* Story Prose */}
                  <p className="text-sm sm:text-base md:text-lg text-stone-600 font-sans leading-relaxed">
                    {craft.description}
                  </p>

                  {/* Technical Characteristics Grid */}
                  <div className="pt-3 sm:pt-4 border-t border-stone-200/80 space-y-3">
                    <h3 className="text-xs uppercase tracking-[0.22em] font-mono font-bold text-stone-900 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#B88E3E]" />
                      Technical Characteristics &amp; Mastery
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                      {craft.techniques.map((tech, i) => (
                        <li
                          key={i}
                          className="p-2.5 sm:p-3 bg-white rounded-[1px] border border-stone-200/70 text-xs sm:text-sm text-stone-700 font-sans leading-relaxed flex items-start gap-2"
                        >
                          <span className="font-mono text-xs font-bold text-[#B88E3E] mt-0.5 shrink-0">
                            0{i + 1}.
                          </span>
                          <span>{tech}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Link Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                    <Link
                      href={craft.href}
                      className="inline-flex items-center justify-center gap-2.5 bg-stone-900 hover:bg-[#A84A28] text-white text-xs sm:text-sm uppercase tracking-[0.2em] font-mono font-semibold px-6 py-3.5 rounded-[1px] transition-colors duration-300 group/btn w-full sm:w-auto text-center"
                    >
                      <span>Explore Collection</span>
                      <span className="transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 border border-stone-300 hover:border-stone-900 text-stone-700 hover:text-stone-950 text-xs sm:text-sm uppercase tracking-[0.2em] font-mono font-semibold px-5 py-3.5 rounded-[1px] transition-colors duration-300 w-full sm:w-auto text-center"
                    >
                      Inquire Guild Custom
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* ─── 4 Stages of Material Mastery ───────────────────────────── */}
      <section className="w-full bg-white py-12 sm:py-20 lg:py-28 border-b border-stone-200">
        <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 space-y-10 sm:space-y-14">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 sm:pb-8 border-b border-stone-200 gap-6">
            <div className="space-y-2.5 sm:space-y-3 max-w-2xl">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <span className="block w-6 sm:w-8 h-px bg-[#B88E3E]" />
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#B88E3E] font-mono font-semibold">
                  THE ARTISANAL METHODOLOGY
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-7xl text-stone-900 font-normal leading-[1.08] sm:leading-[1.05]">
                From Alluvial Earth to Master Artifact
              </h2>
              <p className="font-serif-bengali text-xl sm:text-2xl md:text-3xl text-[#A84A28] leading-snug">
                ঐতিহ্যের সৃষ্টিধারা — কাঁচামাল থেকে নিখুঁত শিল্পকর্ম
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-stone-600 font-sans leading-relaxed pt-1 max-w-xl">
                Every piece created under Janani Craft traverses an unhurried lifecycle where raw nature and human patience converge.
              </p>
            </div>

            <Link
              href="/collections"
              className="group inline-flex items-center justify-center gap-3 border border-stone-900 hover:border-[#A84A28] hover:text-[#A84A28] text-stone-900 text-xs sm:text-sm uppercase tracking-[0.22em] font-mono font-semibold px-6 h-11 sm:h-12 rounded-[1px] transition-colors duration-300 w-full md:w-auto shrink-0 text-center"
            >
              <span>View All Masterworks</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>

          {/* 4 Stages Progression Grid — Just Image and Text, Zero BG, Zero Box Borders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
            {craftSteps.map((step) => (
              <article key={step.step} className="group flex flex-col space-y-3 sm:space-y-3.5">
                {/* Pure Photographic Image Frame — Zero Background, Zero Border */}
                <div className="relative aspect-4/3 w-full overflow-hidden rounded-[1px]">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Fresh, Minimalist Text Strictly Below Image */}
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="text-[#A84A28] font-bold tracking-wider">STAGE {step.step}</span>
                    <span className="text-stone-300">·</span>
                    <span className="font-serif-bengali text-stone-500">{step.bengaliTitle}</span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-stone-900 font-normal leading-snug group-hover:text-[#A84A28] transition-colors duration-300">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Closing Callout Section: Preserving Ancestral Skills (Full Width) ───── */}
      <section className="w-full bg-stone-50 py-12 sm:py-20 lg:py-24 border-b border-stone-200">
        <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="w-full border border-stone-200 p-5 sm:p-10 lg:p-14 rounded-[1px] bg-white">
            <div className="w-full flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8 lg:gap-14">
              <div className="space-y-3.5 sm:space-y-4 max-w-4xl">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <span className="block w-6 sm:w-8 h-px bg-[#A84A28]" />
                  <span className="text-[10px] sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.28em] text-[#A84A28] font-mono font-semibold">
                    SUSTAINABLE ARTISAN FUTURES
                  </span>
                </div>
                <div className="space-y-1.5 sm:space-y-2">
                  <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl xl:text-6xl text-stone-900 font-normal leading-[1.12] sm:leading-[1.08] tracking-tight">
                    Preserving Ancestral Skills for Tomorrow
                  </h2>
                  <p className="font-serif-bengali text-xl sm:text-2xl lg:text-3xl text-[#B88E3E] font-medium leading-snug">
                    ঐতিহ্যের সুরক্ষা ও টেকসই ভবিষ্যৎ নির্মাণ
                  </p>
                </div>
                <p className="text-sm sm:text-base lg:text-xl text-stone-600 leading-relaxed font-sans pt-1">
                  Our dedicated production facilities and rural artisan clusters sustain ancestral skills
                  while meeting world-class ethical craft, fair compensation, and global export standards.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 sm:gap-3.5 shrink-0 w-full sm:w-auto self-stretch sm:self-auto">
                <Button href="/contact" variant="primary" size="md" className="w-full sm:w-auto justify-center text-center">
                  Corporate &amp; Production Inquiries
                </Button>
                <Button href="/collections" variant="outline" size="md" className="w-full sm:w-auto justify-center text-center">
                  Explore All Collections
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
