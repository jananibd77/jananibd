import React from "react";
import Link from "next/link";
import Image from "next/image";
import { journalArticles } from "@/data/journal";

export function JournalTeaser() {
  const articles = journalArticles.slice(0, 3);

  return (
    <section className="w-full bg-white border-b border-stone-200 py-12 sm:py-20 lg:py-28">
      <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        
        {/* ── Section Header ─────────────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 pb-8 sm:pb-12 border-b border-stone-200">
          <div className="space-y-3 sm:space-y-4 max-w-2xl">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <span className="block w-6 sm:w-8 h-px bg-[#A84A28]" />
              <span className="text-[11px] sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.28em] font-mono font-semibold text-[#A84A28]">
                EDITORIAL &amp; CULTURAL DISPATCHES
              </span>
            </div>
            <div className="space-y-1.5 sm:space-y-2">
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-[64px] text-stone-950 font-normal leading-[1.08] sm:leading-[1.04] tracking-tight">
                From the Artisan Journal.
              </h2>
              <p className="font-serif-bengali text-xl sm:text-2xl md:text-3xl text-[#B88E3E] font-medium pt-0.5 sm:pt-1 leading-snug">
                আমাদের কারিগর দিনলিপি, ঐতিহ্য গাঁথা ও ক্ষেত্র সমীক্ষা
              </p>
            </div>
            <p className="text-sm sm:text-base lg:text-lg text-stone-600 font-sans leading-relaxed max-w-xl">
              Dispatches from the pit-loom, the embroidery needle, and the riverine guilds &mdash; living heritage narratives from rural Bengal.
            </p>
          </div>

          <Link
            href="/journal"
            className="group inline-flex items-center justify-center gap-3 border border-stone-900 hover:border-[#A84A28] text-stone-900 hover:text-[#A84A28] text-xs sm:text-sm uppercase tracking-[0.22em] font-mono font-semibold px-6 sm:px-7 h-11 sm:h-12 rounded-[1px] transition-colors duration-300 w-full sm:w-auto shrink-0 text-center"
          >
            <span>Read All Stories</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>

        {/* ── 3-Card Editorial Showcase Grid ──────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 pt-12 sm:pt-14">
          {articles.map((article, idx) => (
            <article
              key={article.id}
              className="group flex flex-col justify-between space-y-4"
            >
              {/* Pure Photographic Canvas — 100% Unobstructed, Zero Text on Image */}
              <Link
                href={`/journal/${article.slug}`}
                className="relative block w-full aspect-16/10 overflow-hidden rounded-[1px]"
              >
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.04]"
                  priority={idx === 0}
                />
              </Link>

              {/* Editorial Details Strictly Below Image */}
              <div className="flex flex-col flex-1 justify-between space-y-4 pt-1">
                <div className="space-y-2 sm:space-y-2.5">
                  {/* Category & Read Time */}
                  <div className="flex items-center justify-between text-xs font-mono text-stone-500 pb-1 border-b border-stone-100">
                    <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[#B88E3E]">
                      {article.category}
                    </span>
                    <span className="text-[11px] text-stone-400">
                      {article.readTime}
                    </span>
                  </div>

                  {/* Bengali Title */}
                  <p className="font-serif-bengali text-lg sm:text-2xl text-[#A84A28] leading-snug pt-0.5 sm:pt-1">
                    {article.bengaliTitle}
                  </p>

                  {/* English Headline */}
                  <Link href={`/journal/${article.slug}`}>
                    <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl text-stone-950 font-normal leading-snug group-hover:text-[#A84A28] transition-colors duration-300 line-clamp-2">
                      {article.title}
                    </h3>
                  </Link>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-sm md:text-base text-stone-600 font-sans leading-relaxed line-clamp-2 pt-1">
                    {article.excerpt}
                  </p>
                </div>

                {/* Footer Meta & Story CTA Link */}
                <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
                  <span className="text-xs font-mono text-stone-400">
                    {article.publishedDate}
                  </span>
                  <Link
                    href={`/journal/${article.slug}`}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] font-mono font-semibold text-stone-900 group-hover:text-[#A84A28] transition-colors duration-300"
                  >
                    <span>Read Story</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
