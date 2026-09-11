import React from "react";
import Link from "next/link";
import Image from "next/image";
import { JournalArticle } from "@/data/journal";
import { KanthaDivider } from "@/components/ui/KanthaDivider";

interface JournalClientProps {
  articles: JournalArticle[];
}

export default function JournalClient({ articles }: JournalClientProps) {
  const featuredArticle = articles[0];
  const galleryArticles = articles.slice(1);

  return (
    <div className="w-full bg-[#FAF8F5] pt-28 sm:pt-32 lg:pt-36 pb-20 lg:pb-28 border-b border-stone-200">
      <div className="w-full px-6 md:px-12 lg:px-16 xl:px-20 space-y-14 sm:space-y-16 lg:space-y-20">
        {/* ─────────────────────────────────────────────────────────────
            1. MAGAZINE EDITORIAL MASTHEAD & VOLUME HEADER
        ───────────────────────────────────────────────────────────── */}
        <header className="w-full border-b border-stone-200 pb-12 sm:pb-16 space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="space-y-4 max-w-3xl">
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-stone-950 font-normal tracking-tight leading-[1.08]">
                The Artisan Journal<span className="text-[#A84A28]">.</span>
              </h1>
              <p className="font-serif-bengali text-2xl sm:text-3xl text-[#A84A28] font-normal leading-relaxed">
                কারুশিল্পের গল্প, আদি বয়ন ঐতিহ্য ও গ্রামীণ জীবনধারা
              </p>
              <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-sans max-w-2xl pt-1">
                An unhurried archive of field essays, material histories, and firsthand chronicles
                from Bengal’s rural weaving hamlets, metal casting forges, and river delta workshops.
              </p>
            </div>

            {/* Archival metadata box */}
            <div className="w-full lg:w-auto shrink-0 bg-white border border-stone-200 p-5 rounded-[1px] space-y-3 font-mono text-xs">
              <div className="text-[#A84A28] font-semibold uppercase tracking-[0.2em] border-b border-stone-100 pb-2">
                Janani Living Archive
              </div>
              <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-stone-600">
                <div>
                  <span className="text-stone-400 block text-[10px] uppercase tracking-wider">Documented Guilds</span>
                  <span className="text-stone-900 font-medium">06 Active Clusters</span>
                </div>
                <div>
                  <span className="text-stone-400 block text-[10px] uppercase tracking-wider">Provenance</span>
                  <span className="text-stone-900 font-medium">100% Handcrafted</span>
                </div>
                <div>
                  <span className="text-stone-400 block text-[10px] uppercase tracking-wider">Frequency</span>
                  <span className="text-stone-900 font-medium">Bi-Monthly Issues</span>
                </div>
                <div>
                  <span className="text-stone-400 block text-[10px] uppercase tracking-wider">Living Heritage</span>
                  <span className="text-stone-900 font-medium">UNESCO Listed</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* ─────────────────────────────────────────────────────────────
            2. FEATURED ESSAY SPREAD (MUSEUM PASSE-PARTOUT ZERO-OVERLAY)
        ───────────────────────────────────────────────────────────── */}
        {featuredArticle && (
          <section className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
              {/* Image Frame with ZERO text on image */}
              <div className="lg:col-span-7 space-y-3">
                <Link
                  href={`/journal/${featuredArticle.slug}`}
                  className="group block relative aspect-16/10 w-full overflow-hidden rounded-[1px]"
                >
                  <Image
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </Link>
              </div>

              {/* Text Editorial Column */}
              <div className="lg:col-span-5 space-y-4 sm:space-y-5">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] font-mono font-semibold text-[#A84A28]">
                  <span>Featured Dispatch</span>
                  <span className="text-stone-300">·</span>
                  <span>{featuredArticle.readTime}</span>
                  <span className="text-stone-300">·</span>
                  <span className="text-[#B88E3E]">{featuredArticle.location}</span>
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <p className="font-serif-bengali text-xl sm:text-2xl md:text-3xl text-[#A84A28] font-normal leading-snug">
                    {featuredArticle.bengaliTitle}
                  </p>
                  <Link href={`/journal/${featuredArticle.slug}`}>
                    <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-stone-950 hover:text-[#A84A28] transition-colors leading-[1.15] font-normal">
                      {featuredArticle.title}
                    </h2>
                  </Link>
                </div>

                <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
                  {featuredArticle.excerpt}
                </p>

                {/* Pull Quote Highlight */}
                {featuredArticle.content.pullQuote && (
                  <div className="border-l-2 border-[#A84A28] pl-3.5 sm:pl-4 py-1 bg-[#FAF8F5] border border-stone-200/60 rounded-[1px]">
                    <p className="font-serif text-stone-800 text-xs sm:text-base italic leading-relaxed">
                      “{featuredArticle.content.pullQuote}”
                    </p>
                  </div>
                )}

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 border-t border-stone-100">
                  <div className="font-mono text-xs text-stone-500">
                    <span className="text-stone-400 block text-[10px] uppercase">Author</span>
                    <span className="text-stone-900">{featuredArticle.author}</span>
                  </div>
                  <Link
                    href={`/journal/${featuredArticle.slug}`}
                    className="inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] font-mono font-semibold text-white bg-stone-950 hover:bg-[#A84A28] transition-colors px-6 py-3 rounded-[1px] w-full sm:w-auto text-center"
                  >
                    <span>Read Full Essay</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ─────────────────────────────────────────────────────────────
            3. RUNNING-STITCH KANTHA DIVIDER
        ───────────────────────────────────────────────────────────── */}
        <div className="py-2">
          <KanthaDivider />
        </div>

        {/* ─────────────────────────────────────────────────────────────
            4. DISPATCHES GALLERY GRID (CLEAN MINIMALIST CARDS)
        ───────────────────────────────────────────────────────────── */}
        <section className="space-y-6 sm:space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4 border-b border-stone-200 pb-4">
            <div>
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#B88E3E] font-semibold block mb-1">
                The Bengal Archives
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-stone-950 font-normal">
                Field Notes &amp; Craft Essays
              </h3>
            </div>
            <span className="font-serif-bengali text-lg sm:text-xl text-stone-600">
              ঐতিহ্যের অনুসন্ধান ও নিবন্ধ
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {galleryArticles.map((article) => (
              <article
                key={article.id}
                className="group flex flex-col justify-between space-y-3.5 sm:space-y-4"
              >
                <div className="space-y-3.5 sm:space-y-4">
                  {/* Photographic frame with ZERO text inside and NO background around image */}
                  <Link
                    href={`/journal/${article.slug}`}
                    className="relative block aspect-16/10 w-full overflow-hidden rounded-[1px]"
                  >
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </Link>

                  {/* Metadata strip strictly below image */}
                  <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.18em] font-mono text-stone-500 border-b border-stone-200/80 pb-2">
                    <span className="text-[#A84A28] font-semibold">{article.category}</span>
                    <span className="text-stone-400">{article.readTime}</span>
                  </div>

                  {/* Titles */}
                  <div className="space-y-1 sm:space-y-1.5">
                    <p className="font-serif-bengali text-base sm:text-lg text-[#A84A28] font-normal leading-snug line-clamp-1">
                      {article.bengaliTitle}
                    </p>
                    <Link href={`/journal/${article.slug}`}>
                      <h4 className="font-serif text-xl sm:text-2xl text-stone-950 group-hover:text-[#A84A28] transition-colors leading-snug font-normal line-clamp-2">
                        {article.title}
                      </h4>
                    </Link>
                  </div>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-sm text-stone-600 line-clamp-3 leading-relaxed font-sans">
                    {article.excerpt}
                  </p>

                  {/* Location provenance */}
                  <div className="text-[11px] font-mono text-stone-500 flex items-center gap-1.5 pt-1">
                    <span className="text-[#B88E3E]">📍</span>
                    <span>{article.location}</span>
                  </div>
                </div>

                {/* Card footer */}
                <div className="pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-stone-200/80 flex items-center justify-between">
                  <span className="font-mono text-xs text-stone-400">
                    {article.publishedDate}
                  </span>
                  <Link
                    href={`/journal/${article.slug}`}
                    className="text-xs uppercase tracking-[0.2em] font-mono font-semibold text-stone-900 group-hover:text-[#A84A28] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Read Essay</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            5. ARCHIVAL INQUIRIES & ACADEMIC COLLABORATION BANNER
        ───────────────────────────────────────────────────────────── */}
        <section className="bg-white border border-stone-200 rounded-[1px] p-5 sm:p-10 lg:p-16 space-y-6 sm:space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            <div className="lg:col-span-8 space-y-3 sm:space-y-4">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-mono text-[#B88E3E] font-semibold">
                <span>Collaborations &amp; Cultural Archive</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-stone-950 font-normal leading-tight">
                Documenting Bengal’s Ancestral Living Heritage
              </h3>
              <p className="font-serif-bengali text-lg sm:text-xl text-[#A84A28]">
                গবেষক ও সংগ্রাহকদের জন্য আমাদের উন্মুক্ত আর্কাইভ
              </p>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-sans max-w-2xl">
                Janani Craft collaborates with textile historians, university researchers, and museum curators worldwide. We provide authentic documentation, provenance verification, and direct field access to our Manikganj and Dhamrai artisan clusters.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-2.5 sm:gap-3.5">
              <Link
                href="/about"
                className="w-full text-center px-4 py-3.5 sm:px-6 bg-stone-950 text-white hover:bg-[#A84A28] transition-colors rounded-[1px] font-mono text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] font-semibold"
              >
                Meet the Guild Artisans →
              </Link>
              <Link
                href="/collections"
                className="w-full text-center px-4 py-3.5 sm:px-6 bg-white text-stone-900 border border-stone-300 hover:border-stone-950 transition-colors rounded-[1px] font-mono text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] font-semibold"
              >
                Browse Master Catalog →
              </Link>
              <Link
                href="/contact"
                className="w-full text-center px-4 py-3.5 sm:px-6 bg-[#FAF8F5] text-[#A84A28] border border-[#A84A28]/30 hover:border-[#A84A28] transition-colors rounded-[1px] font-mono text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] font-semibold"
              >
                Inquire with Cultural Archivist →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
