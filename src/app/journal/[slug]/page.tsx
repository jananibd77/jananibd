import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { journalArticles } from "@/data/journal";
import { KanthaDivider } from "@/components/ui/KanthaDivider";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return journalArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = journalArticles.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Article Not Found | Janani Craft",
    };
  }

  return {
    title: `${article.title} | Janani Craft Journal`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export default async function JournalArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = journalArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = journalArticles
    .filter((a) => a.id !== article.id)
    .slice(0, 3);

  return (
    <article className="w-full bg-[#FAF8F5] pt-24 sm:pt-32 lg:pt-36 pb-12 sm:pb-20 lg:pb-28 border-b border-stone-200">
      <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 space-y-8 sm:space-y-12">
        {/* Article Header */}
        <header className="space-y-4 sm:space-y-6 text-center w-full">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] font-mono font-semibold text-[#A84A28]">
            <span>{article.category}</span>
            <span className="text-stone-300">·</span>
            <span>{article.publishedDate}</span>
            <span className="text-stone-300">·</span>
            <span>{article.readTime}</span>
          </div>

          <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl xl:text-6xl text-stone-950 font-normal leading-[1.12] tracking-tight">
            {article.title}
          </h1>

          {article.bengaliTitle && (
            <p className="font-serif-bengali text-xl sm:text-2xl md:text-3xl text-[#A84A28] font-normal leading-snug">
              {article.bengaliTitle}
            </p>
          )}

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-mono text-stone-600">
            <span>By {article.author}</span>
            <span className="text-stone-300">·</span>
            <span className="text-[#B88E3E]">📍 {article.location}</span>
          </div>
        </header>

        {/* Lead Hero Photography (Zero text on image, pure photographic canvas) */}
        <div className="relative aspect-16/10 w-full overflow-hidden rounded-[1px]">
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 85vw"
            className="object-cover"
          />
        </div>

        {/* Running Stitch Divider */}
        <KanthaDivider />

        {/* Body Reading Experience */}
        <div className="w-full space-y-8 sm:space-y-10 text-stone-800 font-sans leading-relaxed text-base sm:text-lg">
          <p className="font-serif text-lg sm:text-2xl md:text-3xl text-stone-950 leading-relaxed border-l-2 border-[#A84A28] pl-4 sm:pl-6 italic bg-white/70 py-3 sm:py-4 pr-3 sm:pr-4 rounded-[1px] border">
            {article.content.intro}
          </p>

          {article.content.sections.map((sec, idx) => (
            <section key={idx} className="space-y-3 sm:space-y-4 pt-2">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-stone-950 font-normal border-b border-stone-100 pb-2">
                {sec.heading}
              </h2>
              <p className="text-stone-700 text-sm sm:text-base md:text-lg leading-relaxed">
                {sec.body}
              </p>
            </section>
          ))}

          {article.content.pullQuote && (
            <blockquote className="my-6 sm:my-10 p-5 sm:p-10 border-y border-stone-200 bg-white text-center font-serif text-lg sm:text-2xl md:text-3xl text-stone-950 italic leading-snug rounded-[1px]">
              “{article.content.pullQuote}”
            </blockquote>
          )}

          {/* Provenance note */}
          <div className="p-5 sm:p-6 bg-white border border-stone-200 rounded-[1px] space-y-2 font-mono text-xs text-stone-600">
            <div className="text-[#A84A28] font-semibold uppercase tracking-[0.2em]">
              Heritage Authenticity Statement
            </div>
            <p className="text-stone-600 font-sans text-xs sm:text-sm leading-relaxed">
              This field dispatch is published by Janani Craft & Fashion as part of our permanent documentation of Bangladesh’s living craft traditions. All materials, processes, and community guilds described adhere to verified fair-trade practices and authentic ancestral techniques.
            </p>
          </div>
        </div>

        {/* Back to Journal Link */}
        <div className="pt-6 sm:pt-8 border-t border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
          <Link
            href="/journal"
            className="text-xs uppercase tracking-[0.2em] font-mono font-semibold text-stone-900 hover:text-[#A84A28] transition-colors inline-flex items-center gap-2"
          >
            <span>← Back to All Dispatches</span>
          </Link>
          <Link
            href="/collections"
            className="text-xs uppercase tracking-[0.2em] font-mono font-semibold text-[#A84A28] hover:underline"
          >
            Explore Crafted Collections →
          </Link>
        </div>

        {/* Related Reads */}
        {relatedArticles.length > 0 && (
          <div className="border-t border-stone-200 pt-10 sm:pt-14 space-y-6 sm:space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-2xl sm:text-3xl text-stone-950 font-normal">
                Related Field Dispatches
              </h3>
              <span className="font-serif-bengali text-base sm:text-lg text-[#A84A28]">
                সম্পর্কিত প্রবন্ধ
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/journal/${rel.slug}`}
                  className="group block p-5 border border-stone-200 rounded-[1px] bg-white hover:border-[#A84A28] transition-all duration-300 flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    <span className="text-[11px] uppercase tracking-[0.2em] font-mono text-[#B88E3E] font-semibold block">
                      {rel.category}
                    </span>
                    <p className="font-serif-bengali text-base text-[#A84A28] line-clamp-1">
                      {rel.bengaliTitle}
                    </p>
                    <h4 className="font-serif text-xl text-stone-950 group-hover:text-[#A84A28] transition-colors line-clamp-2 font-normal leading-snug">
                      {rel.title}
                    </h4>
                  </div>
                  <div className="pt-3 mt-4 border-t border-stone-100 flex items-center justify-between text-xs font-mono text-stone-500">
                    <span>{rel.readTime}</span>
                    <span className="text-stone-900 group-hover:text-[#A84A28]">Read →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

