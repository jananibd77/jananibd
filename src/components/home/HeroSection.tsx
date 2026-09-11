import React from "react";
import Image from "next/image";
import Link from "next/link";

// Authentic Bengali Jamdani Ornamental Watermark Motif matching the design
function HeroWatermarkEmblem({ className = "w-28 h-28 text-[#B88E3E]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Central Diamond Core */}
      <rect
        x="43"
        y="43"
        width="14"
        height="14"
        stroke="currentColor"
        strokeWidth="1.2"
        transform="rotate(45 50 50)"
      />
      <rect
        x="46"
        y="46"
        width="8"
        height="8"
        fill="currentColor"
        transform="rotate(45 50 50)"
      />

      {/* 4 Cardinal Radiant Petals */}
      {/* Top Petal */}
      <path
        d="M50 40 C43 27 34 20 50 6 C66 20 57 27 50 40 Z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M50 34 C46 25 40 19 50 12 C60 19 54 25 50 34 Z"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeDasharray="1.5 1.5"
      />

      {/* Bottom Petal */}
      <path
        d="M50 60 C43 73 34 80 50 94 C66 80 57 73 50 60 Z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M50 66 C46 75 40 81 50 88 C60 81 54 75 50 66 Z"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeDasharray="1.5 1.5"
      />

      {/* Left Petal */}
      <path
        d="M40 50 C27 43 20 34 6 50 C20 66 27 57 40 50 Z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M34 50 C25 46 19 40 12 50 C19 60 25 54 34 50 Z"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeDasharray="1.5 1.5"
      />

      {/* Right Petal */}
      <path
        d="M60 50 C73 43 80 34 94 50 C80 66 73 57 60 50 Z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M66 50 C75 46 81 40 88 50 C81 60 75 54 66 50 Z"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeDasharray="1.5 1.5"
      />

      {/* 4 Diagonal Weave Loops */}
      <path
        d="M42 42 C30 30 25 24 35 14 C45 24 39 30 42 42 Z"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M58 42 C70 30 76 24 66 14 C56 24 61 30 58 42 Z"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M42 58 C30 70 24 76 34 86 C44 76 38 70 42 58 Z"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M58 58 C70 70 76 76 66 86 C56 76 62 70 58 58 Z"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  );
}

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen min-h-[100dvh] lg:h-screen bg-[#FCFBF9] overflow-hidden flex items-center border-b border-[#EFE9DF]">
      {/* Background Photography: Ultra-High Resolution 4K Artisanal Crafts Spread (Brightened Ambient Light) */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/hero_artisanal_spread_4k.webp"
          alt="Handcrafted Bengali textiles, folded fine linen kurti, hand-stitched leathercraft, and wooden heirlooms bathed in natural sunlight"
          fill
          priority
          quality={100}
          unoptimized
          sizes="100vw"
          className="object-cover object-[75%_center] md:object-[70%_center] lg:object-right-center select-none brightness-[1.08] contrast-[0.94] saturate-[0.92]"
        />
      </div>

      {/* Atmospheric Gradients for text contrast (Luminous pure white feather gradient) */}
      <div className="absolute inset-y-0 left-0 w-full lg:w-3/5 bg-gradient-to-r from-[#FCFBF9] via-[#FCFBF9]/90 sm:via-[#FCFBF9]/55 to-transparent z-10 pointer-events-none" />

      {/* Top Header Ambient Gradient for Transparent Navbar Contrast */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#FCFBF9]/90 via-[#FCFBF9]/35 to-transparent z-10 pointer-events-none" />

      {/* Far Left Decorative Jamdani Watermark Motif — Light Golden Whisper */}
      <div className="absolute -left-10 sm:-left-8 lg:-left-6 top-1/2 -translate-y-1/2 z-10 pointer-events-none opacity-[0.10] text-[#B88E3E]">
        <HeroWatermarkEmblem className="w-28 sm:w-36 lg:w-44 h-auto" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-24 sm:pt-28 lg:pt-20 pb-10 sm:pb-16 lg:pb-12">
        <div className="w-full lg:w-3/5 xl:w-1/2 space-y-5 sm:space-y-7">
          {/* Top Tagline with Hairline Dash in Warm Brass */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <span className="w-7 sm:w-10 h-px bg-[#B88E3E]" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-mono font-semibold text-[#B88E3E]">
              TRADITIONAL CRAFTS &bull; BANGLADESH
            </span>
          </div>

          {/* Main Headline — 100% Light Heritage Colors (Zero Black) */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[86px] font-normal tracking-[-0.015em] leading-[1.08] sm:leading-[1.04]">
            <span className="block text-[#A84A28]">Timeless Crafts.</span>
            <span className="block italic font-light text-[#B88E3E]">Modern Living.</span>
          </h1>

          {/* Subtitle Paragraph — Warm Light Hazel / Muted Cocoa (Zero Black) */}
          <p className="text-sm sm:text-base md:text-[18px] text-[#736356] font-sans font-normal leading-[1.65] max-w-xl">
            Discover handcrafted treasures &mdash; from handloom Than Kapor, Panjabi &amp; Fatua to Tant sarees, dining linens, and heirloom Nakshi Kantha, woven in the riverine soul of Bengal.
          </p>

          {/* Action CTA Buttons — 100% Light Colors (Zero Black) */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            {/* Primary Button: Light Terracotta Wash with Warm Border */}
            <Link
              href="#weaving-factory"
              className="h-12 sm:h-14 px-7 sm:px-8 bg-[#FFF8F3] hover:bg-[#FCEEE3] border border-[#E8CAB7] hover:border-[#A84A28] text-[#A84A28] text-xs sm:text-sm uppercase tracking-[0.2em] font-mono font-semibold rounded-[1px] inline-flex items-center justify-center gap-2.5 transition-all shadow-none group active:scale-[0.98] text-center"
            >
              <span>EXPLORE EXHIBITION</span>
              <span className="text-sm transition-transform duration-300 group-hover:translate-y-0.5">
                ↓
              </span>
            </Link>

            {/* Secondary Button: Pure Light Cream & Champagne Brass */}
            <Link
              href="/collections"
              className="h-12 sm:h-14 px-7 sm:px-8 bg-white hover:bg-[#FAF9F5] border border-[#E5DECE] hover:border-[#B88E3E] text-[#B88E3E] text-xs sm:text-sm uppercase tracking-[0.2em] font-mono font-semibold rounded-[1px] transition-all inline-flex items-center justify-center gap-2 active:scale-[0.98] text-center"
            >
              <span>VIEW ALL WORKS</span>
              <span className="text-sm transition-transform duration-300 group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          </div>

          {/* Subtle Enterprise Jump Links — Warm Light Tones (Zero Black) */}
          <div className="pt-2 flex flex-wrap items-center gap-x-3.5 gap-y-1 text-xs font-sans">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#B88E3E] font-semibold">DIVISIONS:</span>
            <Link
              href="#weaving-factory"
              className="text-[#736356] hover:text-[#A84A28] transition-colors flex items-center gap-1 underline-offset-4 hover:underline"
            >
              <span className="text-[#A84A28] font-mono text-[11px] font-semibold">01</span>
              <span className="font-medium">Weaving Factory</span>
            </Link>
            <span className="text-[#DCD5C8]">/</span>
            <Link
              href="#craft-fashion"
              className="text-[#736356] hover:text-[#A84A28] transition-colors flex items-center gap-1 underline-offset-4 hover:underline"
            >
              <span className="text-[#A84A28] font-mono text-[11px] font-semibold">02</span>
              <span className="font-medium">Craft &amp; Fashion</span>
            </Link>
            <span className="text-[#DCD5C8]">/</span>
            <Link
              href="#rapid-agro"
              className="text-[#736356] hover:text-[#2B5329] transition-colors flex items-center gap-1 underline-offset-4 hover:underline font-medium"
            >
              <span className="text-[#2B5329] font-mono text-[11px] font-semibold">03</span>
              <span className="font-medium">Rapid Agro Care</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
