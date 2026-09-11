import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { AboutCinematicHeroVideo } from "@/components/about/AboutCinematicHeroVideo";

export const metadata: Metadata = {
  title: "About Us | Janani Craft & Sister Concerns",
  description:
    "Discover the enterprise heritage of M/S Janani Craft & Fashion, M/S Janani Weaving Factory, and Rapid Agro Care, based in Sakrail, Gorpara, Manikgonj.",
};

export default function AboutPage() {
  const { sisterConcerns } = siteConfig;

  const milestones = [
    {
      year: "Origins",
      bengaliYear: "সূচনা পর্ব",
      title: "The Handloom Seed in Manikganj",
      bengaliTitle: "মানিকগঞ্জের তাঁত ঐতিহ্য",
      description:
        "Founded on the alluvial riverbanks of Manikganj with a commitment to protect Bengal's centuries-old wooden pit-loom craft from industrial obsolescence.",
    },
    {
      year: "Expansion",
      bengaliYear: "উৎপাদন বিস্তার",
      title: "M/S Janani Weaving Factory",
      bengaliTitle: "উইভিং ফ্যাক্টরির পদযাত্রা",
      description:
        "Established dedicated artisan weaving sheds producing superfine Endi silk fabric (Than Kapor), heirloom Half-Silk (H/S) Sarees, and delicately woven Ornas.",
    },
    {
      year: "Atelier",
      bengaliYear: "অভিজাত পোশাক নির্মাণ",
      title: "M/S Janani Craft & Fashion",
      bengaliTitle: "পাঞ্জাবি ও ফতুয়া কর্মশালা",
      description:
        "Inaugurated an exclusive manufacturing atelier specializing in tailored cultural menswear, handcrafted Panjabis, and artisanal Fatuas with hand-needle collar embroidery.",
    },
    {
      year: "Vitality",
      bengaliYear: "গ্রামীণ কৃষি সংযোগ",
      title: "Rapid Agro Care Initiative",
      bengaliTitle: "র‍্যাপিড এগ্রো কেয়ার",
      description:
        "Expanded into regional agricultural security, importing and distributing certified aquaculture fish feeds and veterinary medicines to empower farming communities.",
    },
  ];

  const principles = [
    {
      num: "01",
      bengaliNum: "০১",
      title: "Preservation of Ancestral Pit-Looms",
      bengaliTitle: "ঐতিহ্যবাহী তাঁত সংরক্ষণ",
      content:
        "We maintain working wooden shuttle pit-looms where master weavers (tantis) throw the bobbin by hand, preserving the inimitable tactile handfeel and breathability of authentic Bengal textiles.",
    },
    {
      num: "02",
      bengaliNum: "০২",
      title: "Pure & Ethical Material Provenance",
      bengaliTitle: "খাঁটি প্রাকৃতিক কাঁচামাল",
      content:
        "From natural Eri/Endi silk cocoons to combed Deshi cotton, golden jute, and treated bamboo, every raw material is sourced with certified origin and zero synthetic contamination.",
    },
    {
      num: "03",
      bengaliNum: "০৩",
      title: "Dignified Karigar Livelihood",
      bengaliTitle: "কারিগরদের আর্থিক মর্যাদা",
      content:
        "True luxury begins with the artisan. We provide fair living wages, stable year-round commissions, and respectful collaborative studio environments for rural craftspeople in Manikganj.",
    },
    {
      num: "04",
      bengaliNum: "০৪",
      title: "Master Tailoring & Needlework",
      bengaliTitle: "নিখুঁত দর্জি ও কারুকাজ",
      content:
        "Our Panjabis and Fatuas are constructed with artisanal tailoring, clean French seams, hand-turned collars, natural shell and wooden buttons, and delicate needle embroidery.",
    },
    {
      num: "05",
      bengaliNum: "০৫",
      title: "Rural Agricultural Fortification",
      bengaliTitle: "কৃষি ও মৎস্য সম্পদের পুষ্টি",
      content:
        "Through Rapid Agro Care, we bolster rural food security by distributing scientifically formulated aqua feeds and veterinary solutions to local farmers and livestock keepers.",
    },
    {
      num: "06",
      bengaliNum: "০৬",
      title: "Zero Synthetic Compromise",
      bengaliTitle: "অনুকরণহীন শতভাগ খাঁটি অঙ্গীকার",
      content:
        "We reject machine-printed polyester imitations and fast-fashion shortcuts. Every piece represents honest, unhurried human labor, made to endure across generations.",
    },
  ];

  return (
    <div className="w-full bg-white text-stone-900">

      {/* ── 1. Page Hero Header ────────────────────────────────────────── */}
      <section className="w-full border-b border-stone-200 pt-24 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 lg:pb-24 bg-[#FAF8F5]">
        <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="max-w-4xl space-y-4 sm:space-y-6">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <span className="block w-6 sm:w-8 h-px bg-[#B88E3E]" />
              <span className="text-[10px] sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#B88E3E] font-mono font-semibold">
                Heritage Maison &amp; Industrial Provenance
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-7xl xl:text-[80px] text-stone-900 font-normal tracking-tight leading-[1.08] sm:leading-[1.05]">
              The Living Legacy of Bengal&apos;s Craft &amp; Rural Enterprise
            </h1>

            <p className="font-serif-bengali text-xl sm:text-2xl md:text-3xl text-[#A84A28] leading-snug">
              ঐতিহ্যের সৃষ্টি, গ্রামীণ শিল্পের বিকাশ ও মানবিক অঙ্গীকার
            </p>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-stone-600 leading-relaxed font-sans max-w-3xl pt-1 sm:pt-2">
              Headquartered in <strong className="text-stone-900 font-semibold">Sakrail, Gorpara, Manikgonj</strong>,
              Janani is an integrated enterprise uniting rural handloom weaving, exclusive cultural apparel manufacturing,
              and regional agricultural distribution. We bridge Bengal&apos;s ancestral artisan mastery with contemporary dignity.
            </p>
          </div>

          {/* Provenance Metadata Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-8 sm:pt-12 mt-8 sm:mt-12 border-t border-stone-200/80">
            <div>
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#B88E3E] font-mono font-semibold mb-1">
                Headquarters
              </p>
              <p className="font-serif text-lg sm:text-2xl text-stone-900">Manikganj</p>
              <p className="text-[11px] sm:text-xs text-stone-500 font-sans mt-0.5">Sakrail, Gorpara</p>
            </div>
            <div>
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#B88E3E] font-mono font-semibold mb-1">
                Core Craft
              </p>
              <p className="font-serif text-lg sm:text-2xl text-stone-900">Handloom Silk &amp; Cotton</p>
              <p className="text-[11px] sm:text-xs text-stone-500 font-sans mt-0.5">Pit-Loom Weaving Sheds</p>
            </div>
            <div>
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#B88E3E] font-mono font-semibold mb-1">
                Atelier Specialty
              </p>
              <p className="font-serif text-lg sm:text-2xl text-stone-900">Panjabi &amp; Fatua</p>
              <p className="text-[11px] sm:text-xs text-stone-500 font-sans mt-0.5">Needle Embroidery Tailoring</p>
            </div>
            <div>
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#B88E3E] font-mono font-semibold mb-1">
                Enterprise Scope
              </p>
              <p className="font-serif text-lg sm:text-2xl text-stone-900">3 Sister Concerns</p>
              <p className="text-[11px] sm:text-xs text-stone-500 font-sans mt-0.5">Weaving, Craft, Agro</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Cinematic Artisan Documentary Showcase ──────────────────── */}
      <AboutCinematicHeroVideo />

      {/* ── 3. Narrative: Soil, Loom & Human Dignity ──────────────────── */}
      <section className="w-full py-12 sm:py-20 lg:py-28 border-b border-stone-200 bg-white">
        <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">
            {/* Left Column: Heading & Quote */}
            <div className="lg:col-span-5 space-y-5 sm:space-y-6">
              <div className="flex items-center gap-3">
                <span className="block w-6 h-px bg-[#A84A28]" />
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.28em] text-[#A84A28] font-mono font-semibold">
                  Our Founding Philosophy
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-stone-900 font-normal leading-tight">
                Where Soil, Silk &amp; Handloom Meet Modern Life
              </h2>

              <blockquote className="border-l-2 border-[#B88E3E] pl-4 sm:pl-6 py-2 space-y-2">
                <p className="font-serif text-lg sm:text-xl lg:text-2xl text-stone-800 italic leading-snug">
                  &ldquo;A craft without community is an antique. A craft with dignified artisans is a living, breathing civilization.&rdquo;
                </p>
                <cite className="block text-[10px] sm:text-xs uppercase tracking-[0.2em] font-mono text-[#A84A28] font-semibold not-italic">
                  — Janani Heritage Charter
                </cite>
              </blockquote>
            </div>

            {/* Right Column: Deep Body Prose */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-sm sm:text-base lg:text-lg text-stone-600 font-sans leading-relaxed">
              <p>
                Across the delta of Bengal, textile weaving is not a commercial novelty; it is an ancestral language.
                For centuries, the river systems of the Padma, Jamuna, and Dhaleshwari nourished native cotton shrubs,
                mulberry groves, and resilient Eri silkworms, giving birth to fabrics whose sheer lightness and warmth
                astonished travelers across the globe.
              </p>

              <p>
                Yet the rapid onslaught of high-speed synthetic power-looms threatened to extinguish this fragile lineage.
                Master weavers who had inherited intuitive knot calculations and temple border geometries were forced
                to abandon their looms. Janani was founded in <strong className="text-stone-900 font-semibold">Sakrail, Gorpara, Manikgonj</strong> to
                stand firmly against this loss.
              </p>

              <p>
                By providing sustained institutional backing, authentic pit-loom facilities, and uncompromised raw materials,
                we ensure that master tantis and women embroidery artisans retain their rightful dignity, fair compensation,
                and creative autonomy. Here, each bolt of Endi silk, each hand-tailored Panjabi, and each embroidered quilt
                carries the living soul of Bengal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. The 3 Sister Concerns: Architectural Deep Dive ──────────── */}
      <section id="sister-concerns" className="w-full py-12 sm:py-20 lg:py-28 border-b border-stone-200 bg-stone-50">
        <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 space-y-10 sm:space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 sm:pb-8 border-b border-stone-200">
            <div className="space-y-2.5 sm:space-y-3 max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="block w-6 sm:w-8 h-px bg-[#B88E3E]" />
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#B88E3E] font-mono font-semibold">
                  Corporate Architecture
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-7xl text-stone-900 font-normal leading-[1.05]">
                Our 3 Sister Concerns
              </h2>
              <p className="font-serif-bengali text-xl sm:text-2xl md:text-3xl text-[#A84A28]">
                সহযোগী প্রতিষ্ঠান ও বিশেষায়িত উৎপাদন ক্ষেত্র
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-stone-600 font-sans leading-relaxed max-w-xl">
                Operating cohesively from our Sakrail campus, each enterprise addresses a vital dimension of regional heritage and economy.
              </p>
            </div>

            <Link
              href="/collections"
              className="group inline-flex items-center justify-center gap-3 border border-stone-900 hover:border-[#A84A28] hover:text-[#A84A28] text-stone-900 text-xs sm:text-sm uppercase tracking-[0.22em] font-semibold px-6 h-12 rounded-[1px] transition-colors duration-300 w-full sm:w-auto"
            >
              <span>Explore All Concerns</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>

          {/* Stacked Full-Width Architectural Rows */}
          <div className="w-full divide-y divide-stone-200 border-t border-stone-200">
            {sisterConcerns.map((concern, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <article key={concern.id} className="w-full group/concern py-10 sm:py-16 lg:py-20">
                  <div className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 sm:gap-10 lg:gap-16 items-center`}>
                    {/* Image Column - Pure Image with Zero Text Overlay */}
                    <div className="relative w-full lg:w-[50%] aspect-16/11 overflow-hidden rounded-[1px] flex-shrink-0">
                      <Image
                        src={concern.image}
                        alt={concern.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover/concern:scale-[1.04]"
                      />
                    </div>

                    {/* Editorial Content Column */}
                    <div className="w-full lg:flex-1 space-y-5 sm:space-y-6">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3 mb-1">
                          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#B88E3E] font-mono font-semibold border border-[#B88E3E]/30 px-2.5 py-0.5 rounded-[1px] bg-[#B88E3E]/5">
                            Concern 0{idx + 1}
                          </span>
                          <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.22em] text-stone-400 font-mono">
                            Operating Unit · Manikganj
                          </span>
                        </div>
                        <p className="font-serif-bengali text-xl sm:text-2xl md:text-3xl text-stone-400">
                          {concern.bengaliName}
                        </p>
                        <h3 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-stone-900 font-normal leading-tight">
                          {concern.name}
                        </h3>
                      </div>

                      <div className="border-l-2 border-[#A84A28] pl-3.5 sm:pl-4 py-1.5 space-y-1">
                        <p className="text-sm sm:text-base md:text-lg text-[#A84A28] font-serif italic leading-snug">
                          {concern.subtitle}
                        </p>
                        <p className="font-serif-bengali text-xs sm:text-sm md:text-base text-stone-500">
                          {concern.bengaliSubtitle}
                        </p>
                      </div>

                      <p className="text-sm sm:text-base md:text-lg text-stone-600 font-sans leading-relaxed">
                        {concern.description}
                      </p>

                      <div className="pt-3 sm:pt-4 border-t border-stone-200 space-y-2.5 sm:space-y-3">
                        <p className="text-[10px] sm:text-xs uppercase tracking-[0.22em] text-stone-400 font-mono font-semibold">
                          Manufactured Lines &amp; Scope:
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                          {concern.products.map((p) => (
                            <li key={p} className="flex items-start gap-2 text-xs sm:text-sm md:text-base text-stone-800 font-sans">
                              <span className="mt-[6px] w-[5px] h-[5px] flex-shrink-0 bg-[#A84A28] rotate-45" />
                              <span>{p}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-2 sm:pt-4">
                        <Link
                          href={concern.href}
                          className="group/cta inline-flex items-center gap-3 self-start"
                        >
                          <span className="text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] font-semibold text-stone-900 group-hover/cta:text-[#A84A28] transition-colors duration-300">
                            Explore {concern.name}
                          </span>
                          <span className="h-[1.5px] w-8 bg-stone-300 group-hover/cta:w-14 group-hover/cta:bg-[#A84A28] transition-all duration-300 rounded-none" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. Historic Evolution Timeline ────────────────────────────── */}
      <section className="w-full py-12 sm:py-20 lg:py-28 border-b border-stone-200 bg-white">
        <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 space-y-10 sm:space-y-16">
          <div className="space-y-2.5 sm:space-y-3 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="block w-6 sm:w-8 h-px bg-[#B88E3E]" />
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#B88E3E] font-mono font-semibold">
                Historical Progression
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-stone-900 font-normal leading-[1.05]">
              Milestones of Growth &amp; Livelihood
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-stone-600 font-sans leading-relaxed">
              From cottage pit-looms in Sakrail to a diversified regional enterprise.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {milestones.map((m, i) => (
              <div
                key={m.year}
                className="relative p-5 sm:p-6 lg:p-8 bg-[#FAF8F5] border border-stone-200 rounded-[1px] space-y-3.5 sm:space-y-4 hover:border-stone-400 transition-colors duration-300"
              >
                <div className="flex items-baseline justify-between border-b border-stone-200 pb-2.5 sm:pb-3">
                  <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.22em] sm:tracking-[0.25em] text-[#A84A28] font-semibold">
                    Phase 0{i + 1}
                  </span>
                  <span className="font-serif-bengali text-xs text-stone-400">
                    {m.bengaliYear}
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-mono text-[#B88E3E] font-semibold block">
                    {m.year}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-stone-900 font-normal leading-snug">
                    {m.title}
                  </h3>
                  <p className="font-serif-bengali text-xs sm:text-sm text-stone-500">
                    {m.bengaliTitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm md:text-base text-stone-600 font-sans leading-relaxed">
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Guiding Craft Charter & Principles ─────────────────────── */}
      <section className="w-full py-12 sm:py-20 lg:py-28 border-b border-stone-200 bg-[#FAF8F5]">
        <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 space-y-10 sm:space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200">
            <div className="space-y-2.5 sm:space-y-3 max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="block w-6 sm:w-8 h-px bg-[#B88E3E]" />
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#B88E3E] font-mono font-semibold">
                  Ethos &amp; Commitments
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-stone-900 font-normal leading-[1.05]">
                Our Core Operating Charter
              </h2>
              <p className="font-serif-bengali text-xl sm:text-2xl text-[#A84A28]">
                আমাদের মূল নীতি ও কারুশিল্পের সনদ
              </p>
            </div>
            <p className="text-sm sm:text-base text-stone-600 font-sans max-w-md">
              Six foundational tenets governing our loom sheds, tailoring atelier, agro distribution, and artisan relations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {principles.map((pr) => (
              <div
                key={pr.num}
                className="p-5 sm:p-6 lg:p-8 bg-white border border-stone-200 rounded-[1px] space-y-4 hover:border-stone-400 transition-colors duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-baseline justify-between border-b border-stone-100 pb-2.5 sm:pb-3">
                    <span className="font-mono text-xs sm:text-sm text-[#A84A28] font-bold">
                      {pr.num}
                    </span>
                    <span className="font-serif-bengali text-xs sm:text-sm text-stone-400">
                      {pr.bengaliTitle}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-stone-900 font-normal leading-snug">
                    {pr.title}
                  </h3>

                  <p className="text-xs sm:text-sm md:text-base text-stone-600 leading-relaxed font-sans">
                    {pr.content}
                  </p>
                </div>

                <div className="pt-3 sm:pt-4 border-t border-stone-100 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#B88E3E] rounded-none rotate-45" />
                  <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-stone-400">
                    Janani Standard
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Headquarters & Production Facility ─────────────────────── */}
      <section className="w-full py-12 sm:py-20 lg:py-28 border-b border-stone-200 bg-white">
        <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="border border-stone-200 rounded-[1px] p-5 sm:p-10 lg:p-14 bg-[#FAF8F5] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 sm:gap-10">
            <div className="space-y-3.5 sm:space-y-4 max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="block w-6 h-px bg-[#A84A28]" />
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.28em] text-[#A84A28] font-mono font-semibold">
                  Artisan Sheds &amp; Management Office
                </span>
              </div>

              <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-stone-900 font-normal leading-tight">
                Visit Our Facilities in Sakrail, Manikganj
              </h2>

              <p className="text-sm sm:text-base lg:text-lg text-stone-600 font-sans leading-relaxed">
                We welcome boutique curators, textile researchers, cooperative partners, and institutional buyers to our
                production sheds. Witness the rhythm of wooden pit-looms, inspect master Endi silk yardage, and explore
                collaborative opportunities.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-4 text-xs sm:text-sm font-mono text-stone-600">
                <span className="bg-white border border-stone-200 px-3 py-1.5 rounded-[1px]">
                  📍 Sakrail, Gorpara, Manikgonj
                </span>
                <span className="bg-white border border-stone-200 px-3 py-1.5 rounded-[1px]">
                  📞 01713-574686
                </span>
                <span className="bg-white border border-stone-200 px-3 py-1.5 rounded-[1px] break-all sm:break-normal">
                  ✉️ jananibd77@gmail.com
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 shrink-0 w-full lg:w-auto">
              <Link
                href="/collections"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 bg-stone-900 hover:bg-[#A84A28] text-white text-xs sm:text-sm uppercase tracking-[0.22em] font-semibold rounded-[1px] transition-colors duration-300 text-center w-full sm:w-auto"
              >
                <span>Explore Collections</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 border border-stone-900 hover:border-[#A84A28] hover:text-[#A84A28] text-stone-900 text-xs sm:text-sm uppercase tracking-[0.22em] font-semibold rounded-[1px] transition-colors duration-300 text-center w-full sm:w-auto"
              >
                <span>Schedule Corporate Visit</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
