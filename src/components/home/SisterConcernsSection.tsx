import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export function SisterConcernsSection() {
  const concerns = siteConfig.sisterConcerns;

  return (
    <section className="w-full bg-stone-50 border-b border-stone-200">

      {/* ─── Section Header ────────────────────────────────────────────────── */}
      <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-14 sm:pt-20 lg:pt-28 pb-10 sm:pb-14 lg:pb-20 border-b border-stone-200">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8">

          {/* Left: titles */}
          <div className="space-y-3 sm:space-y-4 max-w-2xl">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <span className="block w-6 sm:w-8 h-px bg-[#A84A28]" />
              <span className="text-[11px] sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#A84A28] font-mono font-semibold">
                Enterprise Ecosystem
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-7xl text-stone-900 font-normal leading-[1.08] sm:leading-[1.05]">
              Our Sister Concerns &amp;{" "}
              <span className="italic font-light text-stone-500">
                Enterprises
              </span>
            </h2>
            <p className="font-serif-bengali text-xl sm:text-2xl md:text-3xl text-[#B88E3E] leading-snug">
              আমাদের সহযোগী প্রতিষ্ঠান ও উৎপাদন সম্ভার
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-stone-600 font-sans leading-relaxed max-w-xl pt-1">
              Three distinct enterprises — unified by a single commitment to quality, heritage, and rural livelihood.
            </p>
          </div>

          {/* Right: provenance tag */}
          <div className="w-full sm:w-auto shrink-0 border border-stone-200 bg-white rounded-[1px] p-4 sm:px-6 sm:py-5 space-y-1 text-xs sm:text-sm font-mono text-stone-600 self-start lg:self-auto">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#B88E3E] font-semibold mb-1.5 sm:mb-2">
              Headquarters &amp; Production
            </p>
            <p className="font-semibold text-stone-900 text-sm sm:text-base">Sakrail, Gorpara, Manikgonj</p>
            <p>Bangladesh</p>
            <p className="text-[#A84A28] pt-1">Rural Handloom &amp; Agro Enterprise</p>
          </div>
        </div>
      </div>

      {/* ─── Concern Rows ──────────────────────────────────────────────────── */}
      <div className="w-full divide-y divide-stone-200">
        {concerns.map((concern, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <article key={concern.id} className="w-full group/concern">
              <div
                className={`flex flex-col ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } min-h-110 sm:min-h-125 lg:min-h-140`}
              >
                {/* ── Image Panel - Pure Photography ─────────────────────── */}
                <div className="relative w-full lg:w-[52%] xl:w-[54%] shrink-0 overflow-hidden aspect-16/10 sm:aspect-16/10 lg:aspect-auto">
                  <Image
                    src={concern.image}
                    alt={concern.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 54vw"
                    className="object-cover transition-transform duration-1400 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover/concern:scale-[1.04]"
                    priority={idx === 0}
                  />
                </div>

                {/* ── Editorial Text Panel ──────────────────────────────── */}
                <div
                  className={`
                    w-full lg:flex-1 flex flex-col justify-center bg-stone-50
                    px-5 sm:px-8 md:px-12 lg:px-14 xl:px-16
                    py-10 sm:py-14 lg:py-20
                    ${isEven ? "lg:border-l" : "lg:border-r"} border-stone-200
                  `}
                >
                  {/* Bengali name */}
                  <p className="font-serif-bengali text-xl sm:text-2xl md:text-3xl text-stone-600 mb-2 leading-snug">
                    {concern.bengaliName}
                  </p>

                  {/* English name */}
                  <h3 className="font-serif text-2xl sm:text-4xl lg:text-[52px] xl:text-[56px] text-stone-900 font-normal leading-[1.08] sm:leading-[1.06] mb-4 sm:mb-5">
                    {concern.name}
                  </h3>

                  {/* Subtitle with brass left-border */}
                  <div className="flex gap-3.5 sm:gap-4 mb-5 sm:mb-7">
                    <span className="block w-0.5 shrink-0 bg-[#B88E3E] self-stretch rounded-none" />
                    <div>
                      <p className="text-base sm:text-xl text-[#A84A28] font-serif italic leading-snug">
                        {concern.subtitle}
                      </p>
                      <p className="font-serif-bengali text-sm sm:text-base md:text-lg text-stone-600 mt-1">
                        {concern.bengaliSubtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base md:text-lg text-stone-700 font-sans leading-relaxed mb-6 sm:mb-8 max-w-lg">
                    {concern.description}
                  </p>

                  {/* Product lines */}
                  <div className="mb-8 sm:mb-10 pb-6 sm:pb-8 border-b border-stone-200">
                    <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-stone-500 font-mono mb-3 sm:mb-4 font-semibold">
                      Core Lines &amp; Distribution
                    </p>
                    <ul className="space-y-2 sm:space-y-2.5">
                      {concern.products.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 sm:gap-3">
                          <span className="mt-1.5 w-1 sm:w-1.25 h-1 sm:h-1.25 shrink-0 bg-[#A84A28] rounded-none rotate-45" />
                          <span className="text-xs sm:text-base text-stone-800 font-sans leading-relaxed font-medium">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <Link
                    href={concern.href}
                    className="group/cta inline-flex items-center gap-3 self-start"
                  >
                    <span className="text-xs sm:text-base uppercase tracking-[0.2em] font-semibold text-stone-900 group-hover/cta:text-[#A84A28] transition-colors duration-300">
                      Explore Concern
                    </span>
                    <span className="h-[1.5px] w-6 sm:w-8 bg-stone-400 group-hover/cta:w-12 sm:group-hover/cta:w-14 group-hover/cta:bg-[#A84A28] transition-all duration-300 rounded-none" />
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}


