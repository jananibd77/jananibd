"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import { siteConfig } from "@/data/siteConfig";
import { Card3D } from "@/components/ui/Card3D";
import { EndiSilkFilamentCanvas } from "./EndiSilkFilamentCanvas";

interface EndiFabricExhibitionProps {
  product: Product;
}

export function EndiFabricExhibition({ product }: EndiFabricExhibitionProps) {
  void product;

  // Active Gallery Image State for the Split Hero Showcase
  const galleryViews = [
    {
      id: "bolts",
      title: "Master Than Kapor Bolts (30m Rolls)",
      bengali: "৩০ মিটারের প্রমাণ মাপের এন্ডি থান কাপড়",
      image: "/images/endi_than_kapor_bolts.jpg",
      caption: "Finished continuous 30-meter Than Kapor rolls stacked on natural pine inspection tables at Sakrail Weaving Shed.",
      provenance: "Sakrail Production Shed · 44\" Width",
    },
    {
      id: "shuttle",
      title: "Timber Pit-Loom Shuttle in Flight",
      bengali: "ঐতিহ্যবাহী কাঠের গর্ত-তাঁতে মাকু চলাচল",
      image: "/images/endi_loom_shuttle_action.jpg",
      caption: "Synchronized fly-shuttle binding 70 picks per inch on a clay-anchored wooden loom in Manikganj.",
      provenance: "Manikganj Weaving Facility · Senior Tanti",
    },
    {
      id: "drape",
      title: "Porous Slub Weave in Natural Sunlight",
      bengali: "রোদের আলোয় এন্ডি সুতার প্রাকৃতিক বুনন",
      image: "/images/endi_fabric_sunlight_drape.jpg",
      caption: "Sunlight illuminating the breathable porous fiber channels and distinctive uneven slub texture of unbleached silk.",
      provenance: "Natural Delta Light Table · Kora Tone",
    },
    {
      id: "takli",
      title: "Takli Hand-Spindle Yarn Reeling",
      bengali: "তাকলি ও মাটির পাত্রে হাতে সুতা কাটা",
      image: "/images/endi_takli_spinning_hands.jpg",
      caption: "Artisan fingertips drawing raw organic Eri silk fibers into slub yarn using a traditional wooden takli hand spindle.",
      provenance: "Rural Women Spinners Circle · Ahimsa Silk",
    },
  ];

  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  // Video player state
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Commission Inquiry Form State
  const [inquiryData, setInquiryData] = useState({
    name: "",
    email: "",
    phone: "",
    yardage: "30 Meters (Standard Than Kapor Roll)",
    usage: "Bespoke Couture & Traditional Tailoring",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  // 5-Stage Craft Process with 5 unique authentic photographic records
  const craftStages = [
    {
      step: "01",
      title: "Ethical Eri Sericulture & Natural Cocoon Harvest",
      bengaliTitle: "অহিংস রেশম চাষ ও গুটি সংগ্রহ",
      subtitle: "Ahimsa Sericulture (Non-Violent Silk)",
      description:
        "Unlike commercial mulberry silk, Endi silk is derived from the domesticated Samia cynthia ricini moth. The caterpillars feed exclusively on organic castor leaves (ভেরেণ্ডা পাতা). In adherence to ancient Ahimsa traditions, cocoons are gathered only after the moth naturally pierces the shell and flies away. Not a single pupa is harmed, earning Endi its worldwide reverence as the 'Peace Silk of Bengal'.",
      image: "/images/endi_cocoon_spinning_macro.jpg",
      highlight: "100% Ethical & Non-Violent Sericulture",
      location: "River Basin Sericulture Sheds",
    },
    {
      step: "02",
      title: "Takli & Charkha Hand-Spinning of Uneven Slub Yarn",
      bengaliTitle: "তাকলি ও চরকায় হাতে কাটা সুতা",
      subtitle: "Tactile Irregularity & Organic Slub",
      description:
        "Because the cocoon is open-ended rather than reeled in an unbroken filament, the silk fibers are carded by hand and drawn on a traditional wooden takli spindle into clay cups. Rural women artisans manipulate the filaments with rhythmic fingertip control, generating an organic slub yarn with natural thick-and-thin variations that give Endi its signature linen-like hand feel.",
      image: "/images/endi_takli_spinning_hands.jpg",
      highlight: "Hand-Drawn Slub Character",
      location: "Rural Women Spinners Guild, Manikganj",
    },
    {
      step: "03",
      title: "Alluvial River Scouring & Sunlight Conditioning",
      bengaliTitle: "নদীর জলে শোধন ও প্রাকৃতিক শুকানো",
      subtitle: "Zero Harsh Chemicals or Chlorine",
      description:
        "The hand-spun skeins are immersed in simmering river water with natural wood-ash and mild organic vegetable soap to gently dissolve excess sericin gum. The yarn is never bleached with chlorine; instead, it is conditioned in the open rural breeze under morning sunlight, preserving the warm unbleached kora-cream hue of raw delta silk.",
      image: "/images/endi_fabric_sunlight_drape.jpg",
      highlight: "Pure Botanical Alluvial Scouring",
      location: "Dhaleshwari Riverbank Drying Meadows",
    },
    {
      step: "04",
      title: "Wooden Pit-Loom Shuttle Weaving (Tant Brikkho)",
      bengaliTitle: "ঐতিহ্যবাহী কাঠের গর্ত-তাঁতে বয়ন",
      subtitle: "Rhythmic Shuttle Flight & Soil Humidity",
      description:
        "In our dedicated handloom sheds at Sakrail, Gorpara, Manikgonj, master tantis operate timber pit-looms anchored into the damp earthen floor. The subterranean soil equilibrium maintains consistent ambient moisture, preventing fragile silk warp threads from snapping. With synchronized treadle pedals and hand-pulled fly shuttles, weavers balance 60 to 80 threads per inch into a balanced plain weave.",
      image: "/images/endi_loom_shuttle_action.jpg",
      highlight: "Pit-Loom Earth Humidity Balance",
      location: "M/S Janani Weaving Factory Sheds",
    },
    {
      step: "05",
      title: "Hand-Measuring, Inspection & Than Kapor Folding",
      bengaliTitle: "মাপজোখ, মান পরীক্ষা ও থান কাপড় তৈরি",
      subtitle: "Standard 30-Meter Master Rolls",
      description:
        "Upon leaving the loom beam, every meter of fabric is inspected against natural light tables for weave consistency, density, and selvedge perfection. The fabric is then measured with vintage brass rules, lightly steam-pressed, and hand-folded into traditional bolts (Than Kapor) ready for custom tailoring, couture panjabis, and bridal sherwanis.",
      image: "/images/endi_than_kapor_bolts.jpg",
      highlight: "Full Archival Inspection Standards",
      location: "Sakrail Quality Inspection Chamber",
    },
  ];

  // Technical Science & Thermal Properties
  const fiberProperties = [
    {
      title: "Isothermal Micro-Air Matrix",
      desc: "Endi silk filaments are uniquely porous and micro-channeled. They trap ambient body warmth during chilly seasons yet remain extraordinarily breathable and moisture-wicking in tropical monsoon humidity.",
      tag: "Year-Round Utility",
    },
    {
      title: "Living Fiber Patina",
      desc: "Unlike synthetic fibers that degrade with friction, pure unbleached Endi silk softens progressively with every wash, developing an understated golden luster and fluid drape across decades.",
      tag: "Heirloom Durability",
    },
    {
      title: "Hypoallergenic & Ahimsa",
      desc: "Free from chemical boiling, synthetic dyes, and animal cruelty. The gentle organic protein matrix contains minimal sericin residue, making it exceptionally comfortable for sensitive skin.",
      tag: "Pure Organic Composition",
    },
    {
      title: "Tactile Slub Aesthetics",
      desc: "The irregular thickness of hand-spun yarn creates a distinguished slub pattern that captures natural light with subtle matte elegance, prized by haute couture designers for bespoke menswear and drapery.",
      tag: "Artisanal Fingerprint",
    },
  ];

  // Historical Lineup & Chronology
  const historyMilestones = [
    {
      era: "Ancient Antiquity (4th – 8th Century)",
      title: "The Sacred Silk of Buddhist Sages & River Monks",
      bengali: "প্রাচীন ঐতিহ্য ও অহিংস বস্ত্র",
      detail:
        "Ancient chronicles of Bengal document Buddhist ascetics and hermits adopting Endi fabric due to its non-violent Ahimsa harvest. Unlike imperial royal silks that destroyed the moth, Endi was revered as holy attire suitable for meditation and monastic sanctity.",
    },
    {
      era: "16th – 18th Century",
      title: "The Warmth of Rural Bengal ('Bengal's Cashmere')",
      bengali: "বাংলার প্রাকৃতিক পশমিনা",
      detail:
        "While Dhaka Muslin dominated the sultry summer courts of Mughal emperors, Endi fabric became celebrated as the winter luxury of Bengal. Traveling European merchants noted its incredible isothermal properties—providing featherlight warmth comparable to Himalayan cashmere.",
    },
    {
      era: "Early 20th Century",
      title: "Cottage Swadeshi & Rural Self-Reliance",
      bengali: "স্বদেশী আন্দোলন ও গ্রামীণ আত্মনির্ভরশীলতা",
      detail:
        "During the anti-colonial Swadeshi movement, hand-spun Endi silk emerged as a proud emblem of rural self-sufficiency across Bengal. Spinners and weavers preserved the takli craft in village households, ensuring the knowledge survived industrial factory competition.",
    },
    {
      era: "Present (M/S Janani Handloom Project)",
      title: "Revitalization at Sakrail, Gorpara, Manikgonj",
      bengali: "মানিকগঞ্জে আধুনিক পল্লি তাঁত প্রকল্প",
      detail:
        "Today, M/S Janani Weaving Factory operates a comprehensive rural handloom initiative in Manikganj. By providing fair wages, traditional wooden pit-looms, and dependable yarn distribution, we empower local weavers and supply authentic Endi Than Kapor running yardage to designers worldwide.",
    },
  ];

  return (
    <div className="w-full bg-[#FAF8F5] text-stone-900 border-b border-stone-200">
      {/* ─────────────────────────────────────────────────────────────
          1. Hero Exhibition & Interactive Multi-Angle Gallery
          (Archival Masterpiece · Pure Image Containers)
      ───────────────────────────────────────────────────────────── */}
      <section className="w-full border-b border-stone-200 bg-white pt-28 sm:pt-32 lg:pt-36 pb-16 lg:pb-24">
        <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          {/* Split Exhibition Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-start">
            {/* Left Column: Curatorial Dossier & Provenance */}
            <div className="lg:col-span-6 space-y-6 sm:space-y-8">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[#B88E3E] uppercase tracking-[0.25em]">
                  <span className="w-6 h-px bg-[#B88E3E]" />
                  <span>Flagship Textile Discipline</span>
                </div>
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-stone-900 font-normal leading-[1.08] tracking-tight">
                  Quality Endi Fabric <br />
                  <span className="italic font-light text-stone-600">(Than Kapor)</span>
                </h1>
                <p className="font-serif-bengali text-2xl sm:text-3xl text-[#A84A28] leading-snug">
                  উন্নত মানের এন্ডি থান কাপড় — অহিংস রেশম পল্লী তাঁত প্রকল্প
                </p>
              </div>

              {/* Curatorial Backstory */}
              <div className="space-y-4 text-stone-700 font-sans text-sm sm:text-base leading-relaxed">
                <p className="font-medium text-stone-900">
                  The legendary Ahimsa &ldquo;Peace Silk&rdquo; of Bengal — spun from naturally vacated Eri cocoons, hand-drawn on takli spindles, and handwoven on earthen pit-looms in Manikganj into continuous 30-meter master bolts.
                </p>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  Unlike industrial silks, pure Endi possesses a rich slubbed texture reminiscent of raw delta linen, combined with the gentle isothermal luxury of wild cashmere. It insulates against winter dampness while remaining supremely breathable under summer monsoon humidity.
                </p>
              </div>

              {/* 3 Hairline Metric Dossier Boxes */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="border border-stone-200 bg-stone-50/60 p-3.5 rounded-[1px] space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500 block">
                    Fiber Standard
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-stone-900 block">
                    100% Ahimsa Eri Silk
                  </span>
                  <span className="text-[10px] text-stone-500 font-sans block">
                    Zero pupa boiled
                  </span>
                </div>

                <div className="border border-stone-200 bg-stone-50/60 p-3.5 rounded-[1px] space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500 block">
                    Bolt Format
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-stone-900 block">
                    30-Meter Than Roll
                  </span>
                  <span className="text-[10px] text-stone-500 font-sans block">
                    44&quot; Standard Width
                  </span>
                </div>

                <div className="border border-stone-200 bg-stone-50/60 p-3.5 rounded-[1px] space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500 block">
                    Loom Method
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-stone-900 block">
                    Timber Pit-Loom
                  </span>
                  <span className="text-[10px] text-stone-500 font-sans block">
                    Clay soil equilibrium
                  </span>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href="#commission-studio"
                  className="h-12 px-6 bg-[#162720] hover:bg-[#A84A28] text-white text-xs uppercase tracking-[0.2em] font-sans font-semibold rounded-[1px] transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-none"
                >
                  <span>Commission Running Bolt</span>
                  <span>→</span>
                </a>
                <a
                  href="#process-journey"
                  className="h-12 px-6 border border-stone-300 hover:border-stone-900 text-stone-800 text-xs uppercase tracking-[0.2em] font-mono font-medium rounded-[1px] transition-colors inline-flex items-center justify-center gap-2"
                >
                  <span>5-Stage Craft Journey ↓</span>
                </a>
                <a
                  href="#documentary-theater"
                  className="h-12 px-5 border border-stone-200 hover:border-[#A84A28] hover:text-[#A84A28] text-stone-600 text-xs uppercase tracking-[0.18em] font-mono rounded-[1px] transition-colors inline-flex items-center justify-center gap-1.5"
                >
                  <span>Loom Video ▶</span>
                </a>
              </div>
            </div>

            {/* Right Column: Multi-Angle Visual Showcase (Zero Text, Zero BG, Zero Border) */}
            <div className="lg:col-span-6 space-y-3">
              {/* Primary Visual Viewport: PURE IMAGE */}
              <div className="relative aspect-4/3 sm:aspect-16/11 w-full overflow-hidden rounded-[1px]">
                <Image
                  src={galleryViews[activeGalleryIndex].image}
                  alt={galleryViews[activeGalleryIndex].title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                />
              </div>

              {/* 4 Interactive Thumbnail Angle Selectors - Pure Images, Zero Text, Zero BG, Zero Border */}
              <div className="grid grid-cols-4 gap-2.5 pt-1">
                {galleryViews.map((view, idx) => {
                  const isActive = idx === activeGalleryIndex;
                  return (
                    <button
                      key={view.id}
                      type="button"
                      onClick={() => setActiveGalleryIndex(idx)}
                      className={`text-left transition-opacity rounded-[1px] ${
                        isActive ? "opacity-100" : "opacity-50 hover:opacity-90"
                      }`}
                    >
                      <div className="relative aspect-4/3 w-full overflow-hidden rounded-[1px]">
                        <Image
                          src={view.image}
                          alt={view.title}
                          fill
                          sizes="15vw"
                          className="object-cover"
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. Tactile 3D "Woven Air" Silk Filament Canvas Simulation
          (60fps Canvas Simulation · Museum Interaction)
      ───────────────────────────────────────────────────────────── */}
      <section className="w-full py-16 lg:py-24 border-b border-stone-200 bg-white">
        <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-5 space-y-5">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.25em] font-mono text-[#B88E3E] font-semibold block">
                  Tactile Fiber Physics
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal leading-tight">
                  The Organic Hand-Spun Slub Filament
                </h2>
                <p className="font-serif-bengali text-xl sm:text-2xl text-[#A84A28]">
                  হাতে কাটা সুতার জৈব বৈশিষ্ট্য ও প্রাকৃতিক তরঙ্গ
                </p>
              </div>

              <p className="text-sm sm:text-base text-stone-600 font-sans leading-relaxed">
                Because Endi silk is spun from open-ended Ahimsa cocoons without industrial boiling, no two meters of thread have identical caliper. Our weavers embrace this natural irregularity:
              </p>

              <div className="space-y-3 pt-2 text-xs sm:text-sm font-sans">
                <div className="border-l-2 border-[#A84A28] pl-4 py-1">
                  <span className="font-mono text-xs uppercase tracking-wider text-stone-900 font-semibold block">
                    Organic Slub Variation
                  </span>
                  <span className="text-stone-600">
                    Hand-drawn on wooden spindles, generating subtle thick-and-thin ridges that capture light with matte sophistication.
                  </span>
                </div>
                <div className="border-l-2 border-[#B88E3E] pl-4 py-1">
                  <span className="font-mono text-xs uppercase tracking-wider text-stone-900 font-semibold block">
                    Interactive Warp Physics
                  </span>
                  <span className="text-stone-600">
                    Move your cursor across the interactive canvas on the right to simulate raw silk threads floating in delta air currents.
                  </span>
                </div>
              </div>
            </div>

            {/* Right Interactive Canvas Viewport */}
            <div className="lg:col-span-7">
              <div className="aspect-16/10 sm:aspect-16/9 w-full">
                <EndiSilkFilamentCanvas className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. Archival Pit-Loom Documentary Motion Theater
          (Modern Luxury White Gallery Theme · Crisp Hairline Framing)
      ───────────────────────────────────────────────────────────── */}
      <section id="documentary-theater" className="w-full bg-[#FAF8F5] text-stone-900 py-16 lg:py-24 border-b border-stone-200">
        <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 space-y-8">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-stone-200">
            <div className="space-y-1.5 max-w-2xl">
              <span className="text-xs uppercase tracking-[0.25em] font-mono text-[#A84A28] font-semibold block">
                Archival Video Record · মানিকগঞ্জ তাঁতশালার কর্মমুখর মুহূর্ত
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900">
                The Rhythm of the Manikganj Pit-Loom
              </h2>
              <p className="text-stone-600 text-xs sm:text-sm md:text-base font-sans leading-relaxed">
                Witness the synchronized cadence of flying shuttles, tensioned silk warp beams, and veteran tantis at M/S Janani Weaving Factory.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={togglePlay}
                className="px-5 py-2.5 bg-[#162720] text-white hover:bg-[#A84A28] transition-colors text-xs uppercase tracking-[0.2em] font-mono font-semibold rounded-[1px]"
              >
                {isPlaying ? "Pause Video ❚❚" : "Play Video ▶"}
              </button>
              <button
                type="button"
                onClick={toggleMute}
                className="px-4 py-2.5 border border-stone-300 bg-white text-stone-700 hover:text-stone-900 hover:border-stone-900 transition-colors text-xs uppercase tracking-[0.2em] font-mono rounded-[1px]"
              >
                {isMuted ? "Unmute 🔊" : "Mute 🔇"}
              </button>
            </div>
          </div>

          {/* Cinematic Video Viewport - Zero heavy shadows, strict hairline border */}
          <div className="relative aspect-video w-full overflow-hidden bg-stone-900 border border-stone-300 rounded-[1px]">
            <video
              ref={videoRef}
              src="/videos/endi_handloom_documentary.mp4"
              poster="/images/endi_loom_shuttle_action.jpg"
              playsInline
              muted={isMuted}
              loop
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              className="w-full h-full object-cover"
            />

            {/* Center Play Trigger Overlay when Paused */}
            {!isPlaying && (
              <div
                onClick={togglePlay}
                className="absolute inset-0 bg-black/30 backdrop-blur-[1px] flex flex-col items-center justify-center cursor-pointer group transition-all"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-[1px] border border-white/60 bg-black/70 group-hover:bg-[#A84A28] group-hover:border-[#A84A28] flex items-center justify-center text-white transition-all duration-300">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="ml-1">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
                <p className="mt-3 font-mono text-xs uppercase tracking-[0.25em] text-white/90 group-hover:text-white transition-colors">
                  Click to Experience Handloom Pit-Loom Action
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. The 5-Stage Step-by-Step Craft Journey
          (5 Unique Authentic Images · Zero Text on Image)
      ───────────────────────────────────────────────────────────── */}
      <section id="process-journey" className="w-full py-20 lg:py-28 border-b border-stone-200 bg-white">
        <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 space-y-16 lg:space-y-24">
          {/* Section Header */}
          <div className="space-y-3 max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-mono text-[#B88E3E] uppercase tracking-[0.25em]">
              <span className="w-6 h-px bg-[#B88E3E]" />
              <span>Ancestral Process &amp; Methodology</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-stone-900 font-normal leading-[1.08]">
              How Quality Endi Than Kapor is Made
            </h2>
            <p className="font-serif-bengali text-2xl sm:text-3xl text-[#A84A28]">
              গুটি থেকে তাঁতের থান — ৫টি ধাপে নিপুণ শিল্পকর্ম
            </p>
            <p className="text-sm sm:text-base md:text-lg text-stone-600 font-sans leading-relaxed pt-1">
              From the ethical gathering of open castor cocoons to the rhythmic clatter of wooden flying shuttles, follow the unhurried journey of traditional Bengali silk weaving.
            </p>
          </div>

          {/* 5 Stages Alternating Spread */}
          <div className="space-y-16 lg:space-y-24">
            {craftStages.map((stage, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={stage.step}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 xl:gap-16 items-center border-t border-stone-200 pt-14 first:border-t-0 first:pt-0"
                >
                  {/* Visual Frame - Pure Image, Zero Text, Zero BG, Zero Border */}
                  <div
                    className={`lg:col-span-6 ${
                      isEven ? "order-1" : "order-1 lg:order-2"
                    }`}
                  >
                    <div className="relative aspect-4/3 w-full overflow-hidden rounded-[1px]">
                      <Image
                        src={stage.image}
                        alt={stage.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Narrative Text Panel */}
                  <div
                    className={`lg:col-span-6 space-y-4 ${
                      isEven ? "order-2" : "order-2 lg:order-1"
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-base sm:text-lg font-bold text-[#A84A28]">
                          {stage.step}
                        </span>
                        <span className="text-xs uppercase tracking-[0.2em] font-mono text-stone-500">
                          {stage.subtitle}
                        </span>
                      </div>
                      <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-stone-900 leading-tight font-normal">
                        {stage.title}
                      </h3>
                      <p className="font-serif-bengali text-xl text-[#B88E3E]">
                        {stage.bengaliTitle}
                      </p>
                    </div>

                    <p className="text-sm sm:text-base md:text-lg text-stone-700 font-sans leading-relaxed">
                      {stage.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. Material Science & Isothermal Properties (3D Parallax Tilt)
      ───────────────────────────────────────────────────────────── */}
      <section className="w-full py-20 lg:py-28 border-b border-stone-200 bg-[#FAF8F5]">
        <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 space-y-14">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-[#B88E3E] uppercase tracking-[0.25em]">
              <span className="w-6 h-px bg-[#B88E3E]" />
              <span>Material Intelligence &amp; Fiber Science</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-stone-900 font-normal leading-tight">
              Natural Isothermal Balance
            </h2>
            <p className="font-serif-bengali text-2xl text-[#A84A28]">
              প্রাকৃতিক তাপ নিয়ন্ত্রণ ও দীর্ঘস্থায়ী ঔজ্জ্বল্য
            </p>
            <p className="text-sm sm:text-base text-stone-600 font-sans leading-relaxed">
              Eri silk is nature&apos;s thermal regulator. Hollow micro-filaments insulate against chill while wicking vapor away during Bengal&apos;s monsoon humidity.
            </p>
          </div>

          {/* 4 Technical Dossier Cards with 3D Parallax Tilt */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {fiberProperties.map((prop) => (
              <Card3D key={prop.title}>
                <div className="p-6 space-y-3 bg-white h-full flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#A84A28] font-bold block">
                      {prop.tag}
                    </span>
                    <h4 className="font-serif text-xl text-stone-900 font-normal leading-snug">
                      {prop.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
                      {prop.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] font-mono text-stone-400 uppercase">
                    <span>Authentic Ahimsa</span>
                    <span>100% Organic</span>
                  </div>
                </div>
              </Card3D>
            ))}
          </div>

          {/* Material Comparison Table */}
          <div className="bg-white border border-stone-200 rounded-[1px] p-6 sm:p-8 space-y-4">
            <h3 className="font-serif text-xl sm:text-2xl text-stone-900">
              Comparative Fiber Specification Matrix
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm font-sans">
                <thead>
                  <tr className="border-b border-stone-200 font-mono text-stone-500 uppercase tracking-wider text-[11px]">
                    <th className="py-3 pr-4">Attribute</th>
                    <th className="py-3 px-4 text-[#A84A28] font-bold">Janani Quality Endi (Ahimsa)</th>
                    <th className="py-3 px-4">Commercial Mulberry Silk</th>
                    <th className="py-3 pl-4">Synthetic Polyester</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-stone-700">
                  <tr>
                    <td className="py-3 pr-4 font-mono font-medium text-stone-900">Harvest Ethics</td>
                    <td className="py-3 px-4 font-semibold text-emerald-800">100% Non-Violent (Moth Pierces Cocoon)</td>
                    <td className="py-3 px-4">Boiled alive in cocoon</td>
                    <td className="py-3 pl-4">Petrochemical synthesis</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-mono font-medium text-stone-900">Thermal Behavior</td>
                    <td className="py-3 px-4 font-semibold text-stone-900">Isothermal (Warm in winter, cool in summer)</td>
                    <td className="py-3 px-4">Moderate thermal retention</td>
                    <td className="py-3 pl-4">Traps sweat, non-breathable</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-mono font-medium text-stone-900">Yarn Structure</td>
                    <td className="py-3 px-4 font-semibold text-stone-900">Hand-spun organic textured slub</td>
                    <td className="py-3 px-4">Uniform smooth filament</td>
                    <td className="py-3 pl-4">Extruded uniform plastic</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-mono font-medium text-stone-900">Wash Durability</td>
                    <td className="py-3 px-4 font-semibold text-stone-900">Grows softer & lustrous with wear</td>
                    <td className="py-3 px-4">Delicate, weakens when damp</td>
                    <td className="py-3 pl-4">Sheds harmful microplastics</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. Ancestral Timeline & Cultural Chronology
      ───────────────────────────────────────────────────────────── */}
      <section className="w-full py-20 lg:py-28 border-b border-stone-200 bg-white">
        <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 space-y-16">
          <div className="space-y-3 max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-mono text-[#B88E3E] uppercase tracking-[0.25em]">
              <span className="w-6 h-px bg-[#B88E3E]" />
              <span>Ancestral Timeline</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-stone-900 font-normal leading-[1.08]">
              The History Lineup of Endi Silk
            </h2>
            <p className="font-serif-bengali text-2xl sm:text-3xl text-[#A84A28]">
              যুগে যুগে অহিংস এন্ডি সিল্কের ঐতিহ্য ও পুনর্জাগরণ
            </p>
            <p className="text-sm sm:text-base md:text-lg text-stone-600 font-sans leading-relaxed pt-1">
              Trace how Bengal&apos;s most humane and resilient natural textile evolved from ancient monastic robes to modern bespoke runway yardage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {historyMilestones.map((milestone, idx) => (
              <div
                key={milestone.era}
                className="bg-stone-50/60 border border-stone-200 p-6 sm:p-7 rounded-[1px] flex flex-col justify-between space-y-4 hover:border-stone-400 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-stone-200 pb-2">
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#A84A28] font-bold">
                      Era 0{idx + 1}
                    </span>
                    <span className="text-xs font-mono text-stone-400">Archival</span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-stone-900 font-normal leading-snug">
                    {milestone.title}
                  </h3>

                  <p className="font-serif-bengali text-sm text-[#B88E3E]">
                    {milestone.bengali}
                  </p>

                  <p className="text-xs font-mono text-stone-500 font-semibold uppercase tracking-wider">
                    {milestone.era}
                  </p>

                  <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed pt-1">
                    {milestone.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          7. Bespoke Yardage Allocation & Commission Studio
      ───────────────────────────────────────────────────────────── */}
      <section id="commission-studio" className="w-full py-20 lg:py-28 bg-[#FAF8F5] border-b border-stone-200">
        <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="max-w-4xl mx-auto bg-white border border-stone-200 rounded-[1px] p-6 sm:p-10 lg:p-14 space-y-8">
            <div className="space-y-2 text-center max-w-2xl mx-auto">
              <span className="text-xs uppercase tracking-[0.25em] font-mono text-[#B88E3E] font-semibold block">
                Bespoke Yardage Commission
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-stone-900 font-normal">
                Commission Quality Endi Than Kapor
              </h2>
              <p className="font-serif-bengali text-xl text-stone-600">
                থান কাপড় বরাদ্দ ও বিশেষ বয়ন অনুসন্ধান
              </p>
              <p className="text-xs sm:text-sm md:text-base text-stone-600 font-sans pt-1">
                Because our Endi silk is handwoven in master bolts of 30 meters at Sakrail sheds in Manikganj, we allocate running yardage directly to couture designers, tailoring maisons, and textile collectors on registered inquiry.
              </p>
            </div>

            {submitted ? (
              <div className="text-center py-10 space-y-4 border border-stone-200 bg-stone-50/50 p-6 rounded-[1px]">
                <div className="w-12 h-12 mx-auto border border-[#A84A28] rounded-[1px] flex items-center justify-center text-[#A84A28] font-mono text-lg">
                  ✓
                </div>
                <h3 className="font-serif text-2xl text-stone-900">
                  Yardage Allocation Request Transmitted
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-stone-600 max-w-lg mx-auto">
                  Thank you. Your inquiry for M/S Janani Weaving Factory Quality Endi Than Kapor has been recorded. Our handloom shed supervisor will reach out with loom scheduling and dispatch estimates.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 border border-stone-900 text-stone-900 text-xs uppercase tracking-[0.2em] font-mono rounded-[1px] hover:bg-stone-900 hover:text-white transition-colors"
                >
                  Send Another Allocation Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs uppercase tracking-[0.18em] font-semibold text-stone-700">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={inquiryData.name}
                      onChange={(e) => setInquiryData({ ...inquiryData, name: e.target.value })}
                      placeholder="e.g., Mahir Al-Mamun"
                      className="w-full h-12 px-4 bg-white text-stone-900 text-sm border border-stone-200 rounded-[1px] focus:outline-none focus:border-[#A84A28]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs uppercase tracking-[0.18em] font-semibold text-stone-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={inquiryData.email}
                      onChange={(e) => setInquiryData({ ...inquiryData, email: e.target.value })}
                      placeholder="mahir@atelier.com"
                      className="w-full h-12 px-4 bg-white text-stone-900 text-sm border border-stone-200 rounded-[1px] focus:outline-none focus:border-[#A84A28]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs uppercase tracking-[0.18em] font-semibold text-stone-700">
                      Phone / Mobile *
                    </label>
                    <input
                      type="text"
                      required
                      value={inquiryData.phone}
                      onChange={(e) => setInquiryData({ ...inquiryData, phone: e.target.value })}
                      placeholder="01700-000000"
                      className="w-full h-12 px-4 bg-white text-stone-900 text-sm border border-stone-200 rounded-[1px] focus:outline-none focus:border-[#A84A28]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs uppercase tracking-[0.18em] font-semibold text-stone-700">
                      Yardage Allocation Required *
                    </label>
                    <select
                      value={inquiryData.yardage}
                      onChange={(e) => setInquiryData({ ...inquiryData, yardage: e.target.value })}
                      className="w-full h-12 px-4 bg-white text-stone-900 text-sm border border-stone-200 rounded-[1px] focus:outline-none focus:border-[#A84A28]"
                    >
                      <option value="10 Meters (Sample Yardage)">10 Meters (Sample Yardage)</option>
                      <option value="30 Meters (Standard Than Kapor Roll)">30 Meters (Standard Than Kapor Roll)</option>
                      <option value="60 Meters (Double Master Bolt)">60 Meters (Double Master Bolt)</option>
                      <option value="100+ Meters (Institutional / Boutique Supply)">100+ Meters (Institutional / Boutique Supply)</option>
                      <option value="Custom Length Specification">Custom Length Specification</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs uppercase tracking-[0.18em] font-semibold text-stone-700">
                    Intended Craft Application
                  </label>
                  <select
                    value={inquiryData.usage}
                    onChange={(e) => setInquiryData({ ...inquiryData, usage: e.target.value })}
                    className="w-full h-12 px-4 bg-white text-stone-900 text-sm border border-stone-200 rounded-[1px] focus:outline-none focus:border-[#A84A28]"
                  >
                    <option value="Bespoke Couture & Traditional Tailoring">Bespoke Couture &amp; Traditional Panjabi/Sherwani</option>
                    <option value="High-End Interior Drapery & Upholstery">High-End Interior Drapery &amp; Upholstery</option>
                    <option value="Boutique Fashion Collection">Boutique Fashion Collection</option>
                    <option value="Museum Archive & Study">Museum Archive &amp; Cultural Exhibition</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs uppercase tracking-[0.18em] font-semibold text-stone-700">
                    Specific Weaving Instructions or Delivery Timeline
                  </label>
                  <textarea
                    rows={4}
                    value={inquiryData.message}
                    onChange={(e) => setInquiryData({ ...inquiryData, message: e.target.value })}
                    placeholder="Specify target delivery timeline, custom width requirements, or unbleached tone preferences..."
                    className="w-full p-4 bg-white text-stone-900 text-sm border border-stone-200 rounded-[1px] focus:outline-none focus:border-[#A84A28]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full h-14 bg-stone-900 text-white text-xs sm:text-sm uppercase tracking-[0.2em] font-mono font-semibold rounded-[1px] hover:bg-[#A84A28] transition-colors flex items-center justify-center"
                >
                  {submitting ? "Registering Allocation..." : "Submit Yardage Allocation Request →"}
                </button>
              </form>
            )}

            {/* Direct Factory Contacts */}
            <div className="pt-6 border-t border-stone-200 text-center text-xs font-mono text-stone-500 space-y-1">
              <p>
                Direct Handloom Production Sheds: Sakrail, Gorpara, Manikgonj
              </p>
              <p>
                Central Desk: {siteConfig.contact.phoneNumbers.join(" · ")} &bull; Email: {siteConfig.contact.email}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          8. Complementary Sister Concern Heritage Works
      ───────────────────────────────────────────────────────────── */}
      <section className="w-full bg-white py-16 lg:py-24 border-b border-stone-200">
        <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-stone-200 pb-6">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-[0.25em] text-[#A84A28] font-mono font-semibold block">
                Janani Enterprise Ecosystem
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal">
                Explore Sister Concern Works
              </h2>
            </div>
            <Link
              href="/collections"
              className="text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold text-stone-700 hover:text-[#A84A28] transition-colors inline-flex items-center gap-2"
            >
              <span>Permanent Collections Archive</span>
              <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Sister Card 1: Janani Craft & Fashion Panjabi */}
            <Link
              href="/collections/exclusive-handloom-embroidered-panjabi"
              className="group space-y-3 block"
            >
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-[1px]">
                <Image
                  src="/images/panjabi_white_maroon_mannequin.png"
                  alt="Exclusive Panjabi by Janani Craft & Fashion"
                  fill
                  sizes="30vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-lg text-stone-900 group-hover:text-[#A84A28] transition-colors">
                  Exclusive Embroidered Panjabi
                </h3>
                <p className="text-xs text-stone-600 font-sans line-clamp-2">
                  Tailored from handloom cotton-silk with intricate collar needle embroidery and shell buttons.
                </p>
              </div>
            </Link>

            {/* Sister Card 2: Janani Craft & Fashion Fatua */}
            <Link
              href="/collections/exclusive-handloom-cotton-fatua"
              className="group space-y-3 block"
            >
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-[1px]">
                <Image
                  src="/images/fatua_kora_ecru_mannequin.png"
                  alt="Exclusive Handloom Fatua by Janani Craft & Fashion"
                  fill
                  sizes="30vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-lg text-stone-900 group-hover:text-[#A84A28] transition-colors">
                  Exclusive Handloom Fatua
                </h3>
                <p className="text-xs text-stone-600 font-sans line-clamp-2">
                  Breathable Deshi cotton short tunic with artisanal hand needlework (হাতের কাজ) and carved coconut buttons.
                </p>
              </div>
            </Link>

            {/* Sister Card 3: Traditional Handloom Saree */}
            <Link
              href="/collections/half-silk-handloom-sharee"
              className="group space-y-3 block"
            >
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-[1px]">
                <Image
                  src="/images/saree_royalblue_tant_mannequin.png"
                  alt="Half-Silk Traditional Handloom Saree"
                  fill
                  sizes="30vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-lg text-stone-900 group-hover:text-[#A84A28] transition-colors">
                  Half-Silk Handloom Saree
                </h3>
                <p className="text-xs text-stone-600 font-sans line-clamp-2">
                  Luminous mulberry silk warp with combed cotton weft and extra-weft temple zari border.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
