"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface CraftItem {
  id: string;
  slug: string;
  name: string;
  bengaliName: string;
  tagline: string;
  image: string;
  href: string;
}

const craftItems: CraftItem[] = [
  {
    id: "traditional-wear",
    slug: "traditional-wear",
    name: "Exclusive Panjabi & Fatua",
    bengaliName: "এক্সক্লুসিভ পাঞ্জাবি ও ফতুয়া",
    tagline: "Tailored cultural menswear — handloom cotton-silk with hand-needle embroidery.",
    image: "/images/panjabi_white_maroon_mannequin.png",
    href: "/collections#panjabi",
  },
  {
    id: "three-piece",
    slug: "three-piece",
    name: "Artisanal Three-Piece",
    bengaliName: "ঐতিহ্যবাহী নকশী থ্রি-পিস",
    tagline: "Handcrafted women's boutique ensemble — pit-loom cotton-silk with hand-needle embroidery.",
    image: "/images/threepiece_pastel_pink_mannequin.png",
    href: "/collections#three-piece",
  },
  {
    id: "handloom-sarees",
    slug: "sarees",
    name: "Exclusive Handloom Sarees",
    bengaliName: "এক্সক্লুসিভ তাঁতের শাড়ি",
    tagline: "Heritage Tant and Half-Silk sarees — vibrant geometric mosaic borders handwoven on pit-looms.",
    image: "/images/saree_magenta_mosaic_mannequin.png",
    href: "/collections#sarees",
  },
  {
    id: "nakshi-kantha",
    slug: "nakshi-kantha",
    name: "Nakshi Kantha",
    bengaliName: "নকশিকাঁথা",
    tagline: "Folk embroidery — stitched narratives passed down through generations.",
    image: "/images/nakshi_kantha_padma_mandala.png",
    href: "/collections#nakshi-kantha",
  },
  {
    id: "cloth-vases",
    slug: "cloth-vases",
    name: "Handmade Cloth Vases",
    bengaliName: "নকশী কাপড়ের ফুলদানি",
    tagline: "Textile flower vases — reinforced deshi cotton canvas and folk lotus embroidery.",
    image: "/images/cloth_vase_cylindrical_lotus.png",
    href: "/collections#cloth-vases",
  },
  {
    id: "fabric-wall-mat",
    slug: "fabric-wall-mat",
    name: "Hand-Stitched Wall Mat",
    bengaliName: "কাপড়ের তরী ওয়ালমেট",
    tagline: "Heritage fabric tapestry — hand-embroidered riverboat motifs on layered deshi cotton.",
    image: "/images/fabric_wall_mat_tapestry_main.jpg",
    href: "/collections#wall-mat",
  },
  {
    id: "jute-wall-hanging",
    slug: "jute-wall-hanging",
    name: "Jute Wall Hanging",
    bengaliName: "পাটের নকশী দেয়াল ঝুলন্ত",
    tagline: "Artisanal golden jute tapestry — hand-braided folk lotus motifs with tassel fringe.",
    image: "/images/jute_wall_hanging_main.png",
    href: "/collections#jute-wall-hanging",
  },
  {
    id: "jamdani",
    slug: "jamdani",
    name: "Jamdani Handloom",
    bengaliName: "জামদানি",
    tagline: "UNESCO heritage weave — geometric motifs woven into sheer muslin air.",
    image: "/images/jamdani_hero_loom.jpg",
    href: "/collections#jamdani",
  },
  {
    id: "endi-silk",
    slug: "endi-silk",
    name: "Endi Silk",
    bengaliName: "এন্ডি রেশম",
    tagline: "Peace silk from Assam-Bengal tradition — warm, breathable, cruelty-free.",
    image: "/images/endi_fabric_sunlight_drape.jpg",
    href: "/collections#endi-silk",
  },
  {
    id: "bamboo-cane",
    slug: "bamboo-cane",
    name: "Bamboo & Cane",
    bengaliName: "বাঁশ ও বেত",
    tagline: "Shitol Pati weaving — fine cane craftsmanship from Sylhet's river plains.",
    image: "/images/bamboo_cane_tray.jpg",
    href: "/collections#bamboo-cane",
  },
  {
    id: "home-textiles",
    slug: "home-textiles",
    name: "Home Textiles",
    bengaliName: "গৃহসজ্জা টেক্সটাইল",
    tagline: "Handwoven table linens and throws for refined everyday living.",
    image: "/images/table_liner_dining.jpg",
    href: "/collections#home-textiles",
  },
  {
    id: "jute",
    slug: "jute",
    name: "Golden Jute",
    bengaliName: "সোনালী পাট",
    tagline: "Bengal's golden fibre — eco-conscious totes, bags, and woven goods.",
    image: "/images/jute_bag_green_mandala.png",
    href: "/collections#jute",
  },
];

export function FeaturedCollections() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

      const firstChild = scrollRef.current.firstElementChild as HTMLElement | null;
      if (firstChild) {
        const itemWidth = firstChild.offsetWidth + 16;
        const currentIdx = Math.round(scrollLeft / itemWidth);
        setActiveIdx(Math.max(0, Math.min(craftItems.length - 1, currentIdx)));
      }
    }
  };

  useEffect(() => {
    checkScroll();
  }, []);

  const handlePrev = () => {
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.clientWidth;
      const isMobile = window.innerWidth < 1024;
      const firstChild = scrollRef.current.firstElementChild as HTMLElement | null;
      const scrollAmount = isMobile && firstChild ? firstChild.offsetWidth + 16 : containerWidth;
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.clientWidth;
      const isMobile = window.innerWidth < 1024;
      const firstChild = scrollRef.current.firstElementChild as HTMLElement | null;
      const scrollAmount = isMobile && firstChild ? firstChild.offsetWidth + 16 : containerWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const children = scrollRef.current.children;
      if (children[index]) {
        const target = children[index] as HTMLElement;
        scrollRef.current.scrollTo({
          left: target.offsetLeft - scrollRef.current.offsetLeft,
          behavior: "smooth",
        });
      }
    }
    setActiveIdx(index);
  };

  const scrollToDesktopPage = (pageIndex: number) => {
    if (scrollRef.current) {
      const targetScroll = pageIndex * scrollRef.current.clientWidth;
      scrollRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative w-full overflow-hidden py-12 sm:py-20 lg:py-24 border-b border-stone-200">
      {/* ─── Background Image ─── */}
      <Image
        src="/images/bg5.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
        aria-hidden="true"
      />
      {/* ─── Warm Ivory Scrim ─── */}
      <div className="absolute inset-0 bg-[#F7F4EE]/40 pointer-events-none" />

      <div className="relative z-10 w-full mx-auto px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        <div className="flex flex-col lg:flex-row items-stretch gap-8 sm:gap-10 lg:gap-8 xl:gap-12">

          {/* ════ LEFT COLUMN ════ */}
          <div className="w-full lg:w-[32%] xl:w-[28%] shrink-0 flex flex-col justify-center space-y-5 sm:space-y-8 lg:space-y-10 py-1 sm:py-2">
            <div className="space-y-3.5 sm:space-y-5 lg:space-y-6">
              {/* Eyebrow */}
              <div className="flex items-center gap-2.5 sm:gap-3">
                <span className="text-xs sm:text-base uppercase tracking-[0.22em] sm:tracking-[0.24em] text-stone-600 font-sans font-semibold">
                  OUR CRAFT DISCIPLINES
                </span>
                <span className="w-6 sm:w-10 h-[1.5px] bg-stone-400/80" />
              </div>

              {/* Headline */}
              <div className="space-y-1.5 sm:space-y-2">
                <h2 className="font-serif text-3xl sm:text-5xl lg:text-[68px] xl:text-[78px] text-stone-900 font-normal leading-[1.08] sm:leading-[1.05] tracking-tight">
                  Timeless Crafts.
                  <span className="block text-stone-800">Sustainable Futures.</span>
                </h2>
                <p className="font-serif-bengali text-xl sm:text-2xl lg:text-3xl text-[#A84A28] font-medium pt-0.5 sm:pt-2">
                  বাংলার চিরন্তন লোকজ কারুশিল্প সম্ভার
                </p>
              </div>

              {/* Body */}
              <p className="text-sm sm:text-base lg:text-lg text-stone-600 font-sans leading-relaxed">
                Centuries of indigenous material mastery — needlework, pliant cane, handloom cotton, and alluvial golden fiber.
              </p>

              {/* CTA */}
              <div className="pt-1 sm:pt-2">
                <Link
                  href="/collections"
                  className="group inline-flex items-center justify-center gap-3 bg-[#445242] hover:bg-[#323E30] text-white text-xs sm:text-sm uppercase tracking-[0.2em] font-sans font-semibold px-6 sm:px-7 py-3 sm:py-3.5 rounded-full shadow-[0_6px_20px_rgba(68,82,66,0.22)] transition-all duration-300 hover:scale-[1.02] active:scale-95 w-full sm:w-auto text-center"
                >
                  <span>Explore Our Crafts</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1 text-base">→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* ════ RIGHT COLUMN: Responsive Carousel with Finalized Card UI ════ */}
          <div className="relative w-full lg:w-[68%] xl:w-[72%] flex flex-col gap-5 justify-center">

            {/* Prev Button */}
            <button
              onClick={handlePrev}
              disabled={!canScrollLeft}
              className={`absolute -left-3 sm:-left-5 top-[45%] -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/95 border border-stone-200/90 shadow-[0_4px_14px_rgba(0,0,0,0.08)] flex items-center justify-center text-stone-800 transition-all ${
                !canScrollLeft ? "opacity-30 cursor-not-allowed" : "opacity-100 hover:scale-105 active:scale-90"
              }`}
              aria-label="Previous slide"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              disabled={!canScrollRight}
              className={`absolute -right-3 sm:-right-5 top-[45%] -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/95 border border-stone-200/90 shadow-[0_4px_14px_rgba(0,0,0,0.08)] flex items-center justify-center text-stone-800 transition-all ${
                !canScrollRight ? "opacity-30 cursor-not-allowed" : "opacity-100 hover:scale-105 active:scale-90"
              }`}
              aria-label="Next slide"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            {/* ─── Scroll Track with Exact Finalized Card UI ─── */}
            <div
              ref={scrollRef}
              onScroll={checkScroll}
              className="w-full flex items-stretch gap-3 sm:gap-4 overflow-x-auto pb-4 pt-1 px-1 scroll-smooth snap-x snap-mandatory"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {craftItems.map((item) => (
                <div
                  key={item.id}
                  className="snap-start shrink-0 w-[84vw] sm:w-[calc(50%-8px)] lg:w-[calc((100%-32px)/3)]"
                >
                  <Link
                    href={item.href}
                    className="relative group block aspect-[3/5.2] rounded-[1px] overflow-hidden transition-all duration-500 hover:-translate-y-1"
                  >
                    {/* Photo */}
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Bottom scrim */}
                    <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none" />

                    {/* Info card */}
                    <div className="absolute inset-x-3 bottom-3 sm:inset-x-3.5 sm:bottom-3.5 p-4 sm:p-5 bg-[#FAF8F5]/95 backdrop-blur-md rounded-[1px] border border-white/80 shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-all duration-300 group-hover:bg-white">
                      <div className="flex items-center justify-between gap-2">
                        <div className="space-y-0.5 min-w-0">
                          <h3 className="font-serif text-lg sm:text-xl text-stone-900 font-semibold leading-tight group-hover:text-[#A84A28] transition-colors truncate">
                            {item.name}
                          </h3>
                          <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed line-clamp-2">
                            {item.tagline}
                          </p>
                        </div>
                        <div className="w-6 h-6 shrink-0 flex items-center justify-center text-stone-600 group-hover:text-stone-900 transition-transform duration-300 group-hover:translate-x-1">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            {/* Desktop Page dots */}
            <div className="hidden lg:flex items-center justify-center gap-2 pt-2">
              {Array.from({ length: Math.ceil(craftItems.length / 3) }).map((_, pageIdx) => {
                const isCurrentPage = Math.floor(activeIdx / 3) === pageIdx;
                return (
                  <button
                    key={pageIdx}
                    onClick={() => scrollToDesktopPage(pageIdx)}
                    className={`h-[3px] rounded-full transition-all duration-300 ${
                      isCurrentPage ? "w-8 bg-[#445242]" : "w-5 bg-stone-300/80 hover:bg-stone-400"
                    }`}
                    aria-label={`Go to page ${pageIdx + 1}`}
                  />
                );
              })}
            </div>

            {/* Mobile & Tablet Item dots */}
            <div className="flex lg:hidden items-center justify-center gap-2 pt-2">
              {craftItems.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToIndex(idx)}
                  className={`h-[3px] rounded-full transition-all duration-300 ${
                    activeIdx === idx ? "w-8 bg-[#445242]" : "w-4 bg-stone-300/80 hover:bg-stone-400"
                  }`}
                  aria-label={`Go to craft slide ${idx + 1}`}
                />
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
