import React from "react";
import Image from "next/image";
import { Button } from "../ui/Button";

export function BrandStory() {
  return (
    <section className="w-full bg-white py-12 sm:py-20 lg:py-28 border-b border-stone-200">
      <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* Left Large Process Image — Pure Photography, No BG Mat, No Outer Border */}
          <div className="lg:col-span-6 order-2 lg:order-1 group">
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-[1px]">
              <Image
                src="/images/brand_story_artisan_hands.jpg"
                alt="Master artisan hands gently guiding natural fibers and wooden tools in a rural Bengal workshop"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.03]"
              />
            </div>
          </div>

          {/* Right Editorial Narrative */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-5 sm:space-y-7">
            <div className="space-y-2.5 sm:space-y-3">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <span className="block w-6 sm:w-8 h-px bg-[#B88E3E]" />
                <span className="text-[11px] sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.28em] text-[#B88E3E] font-mono font-semibold">
                  HERITAGE &amp; HUMANITY
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-[68px] text-stone-950 font-normal leading-[1.08] sm:leading-[1.04] tracking-tight">
                From the hands <br className="hidden sm:inline" />
                <span className="italic font-light text-[#A84A28]">of master karigars.</span>
              </h2>
              <p className="font-serif-bengali text-xl sm:text-2xl md:text-3xl text-stone-700 font-medium pt-0.5">
                মাটি, সুতো আর মমতায় গড়ে ওঠা চিরন্তন সৃষ্টি
              </p>
            </div>

            <p className="text-sm sm:text-base md:text-lg text-stone-700 font-sans leading-relaxed">
              Across the alluvial riverbanks and village homesteads of Bangladesh, generations of craftspeople
              have worked with pliant bamboo, sun-dried clay, golden jute, and homespun cotton. Their
              tools are simple—needles, hand-turned spindles, and wooden pit-looms—yet their patience
              breathes an enduring soul into every piece.
            </p>

            <p className="text-sm sm:text-base md:text-lg text-stone-700 font-sans leading-relaxed">
              At Janani Craft, we bridge these ancestral artisan clusters with
              contemporary living. We preserve sacred techniques while crafting pieces that fit
              seamlessly into modern architectural spaces and cultural wardrobes worldwide.
            </p>

            {/* 3 Artisan Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 pt-4 sm:pt-5 border-t border-stone-200">
              <div className="space-y-1 sm:space-y-1.5">
                <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#A84A28] font-semibold block">
                  01. Raw Fibers
                </span>
                <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
                  Natural Kora cotton, Endi peace silk, and alluvial golden jute.
                </p>
              </div>
              <div className="space-y-1 sm:space-y-1.5">
                <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#B88E3E] font-semibold block">
                  02. Fair Wages
                </span>
                <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
                  Artisan dignity, fair compensation, and rural guild empowerment.
                </p>
              </div>
              <div className="space-y-1 sm:space-y-1.5">
                <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-stone-800 font-semibold block">
                  03. Living Guilds
                </span>
                <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
                  Protecting centuries of pit-loom and Nakshi Kantha heritage.
                </p>
              </div>
            </div>

            <div className="pt-2 sm:pt-3">
              <Button href="/about" variant="primary" size="lg" className="w-full sm:w-auto justify-center text-center">
                Explore Atelier Heritage
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
