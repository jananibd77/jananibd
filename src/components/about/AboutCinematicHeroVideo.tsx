"use client";

import { useRef, useState, useCallback, useEffect } from "react";

/* ─── Kantha Running-Stitch SVG Divider ──────────────────────────────────── */
function KanthaStitchDivider() {
  return (
    <div className="w-full flex items-center justify-center py-1">
      <svg
        viewBox="0 0 800 6"
        className="w-full max-w-3xl h-[6px]"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <line
          x1="0" y1="3" x2="800" y2="3"
          stroke="#E2D9CB"
          strokeWidth="1"
          strokeDasharray="12 6 4 6"
          strokeLinecap="square"
        />
      </svg>
    </div>
  );
}

/* ─── Decorative Brass Diamond ───────────────────────────────────────────── */
function BrassDiamond({ size = 6 }: { size?: number }) {
  return (
    <span
      className="shrink-0 bg-[#B88E3E]"
      style={{
        width: size,
        height: size,
        transform: "rotate(45deg)",
        display: "inline-block",
      }}
    />
  );
}

/* ─── Provenance Metadata ────────────────────────────────────────────────── */
const provenanceData = [
  {
    label: "Location",
    bengaliLabel: "অবস্থান",
    value: "Sakrail, Gorpara",
    detail: "Manikganj District",
  },
  {
    label: "Subject",
    bengaliLabel: "বিষয়বস্তু",
    value: "Wooden Pit-Loom",
    detail: "Manual Warp & Weft",
  },
  {
    label: "Technique",
    bengaliLabel: "কৌশল",
    value: "Traditional Shuttle",
    detail: "Hand-Thrown Bobbin",
  },
  {
    label: "Material",
    bengaliLabel: "উপাদান",
    value: "Endi Silk & Cotton",
    detail: "Natural Fiber Blend",
  },
];

export function AboutCinematicHeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const togglePlay = useCallback(() => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, []);

  /* ── Track video progress for the thin progress bar ── */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, []);

  return (
    <section className="w-full border-b border-stone-200 bg-white">

      {/* ── 1. Editorial Section Header ────────────────────────────────── */}
      <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-12 sm:pt-16 lg:pt-20 pb-6 sm:pb-8 lg:pb-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="space-y-3 sm:space-y-4 max-w-2xl">
            {/* Brass accent rule + tracker label */}
            <div className="flex items-center gap-3">
              <span className="block w-6 sm:w-8 h-px bg-[#B88E3E]" />
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.28em] text-[#B88E3E] font-mono font-semibold">
                Artisan Documentary Reel
              </span>
            </div>

            {/* Title */}
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-[42px] text-stone-900 font-normal tracking-tight leading-[1.1]">
              The Rhythm of the Wooden Loom
            </h2>

            {/* Bengali subtitle */}
            <p className="font-serif-bengali text-lg sm:text-2xl text-[#A84A28] leading-snug">
              কাঠের তাঁতের ছন্দ — মানিকগঞ্জের বয়নশিল্পের জীবন্ত দলিল
            </p>
          </div>

          {/* Right-side micro label */}
          <div className="shrink-0 text-right hidden lg:block">
            <p className="text-[10px] uppercase tracking-[0.25em] text-stone-400 font-mono">
              Filmed on Location
            </p>
            <p className="text-xs text-stone-500 font-sans mt-1">
              M/S Janani Weaving Factory
            </p>
            <p className="text-xs text-stone-500 font-sans">
              Sakrail, Gorpara, Manikgonj
            </p>
          </div>
        </div>
      </div>

      {/* ── 2. Cinematic Full-Bleed Video Canvas ───────────────────────── */}
      <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 pb-0">
        <div
          onClick={togglePlay}
          className="
            relative w-full aspect-16/9 sm:aspect-[2.2/1] min-h-[300px] max-h-[700px]
            bg-stone-950 overflow-hidden
            border border-stone-200 rounded-[1px]
            cursor-pointer group select-none
            transition-all duration-500
            hover:border-[#B88E3E]/40
          "
          title={isPlaying ? "Click to pause" : "Click to play"}
        >
          {/* Video element */}
          <video
            ref={videoRef}
            src="/videos/about.mp4"
            poster="/images/about_video_poster.webp"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-[1.02]"
            aria-label="Documentary footage of traditional handloom pit-loom weaving in Manikganj"
          />

          {/* Ambient warm edge vignette */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(26,24,22,0.08) 0%, transparent 15%, transparent 80%, rgba(26,24,22,0.15) 100%)",
            }}
          />

          {/* Play/Pause indicator — subtle, museum-grade */}
          <div
            className={`
              absolute inset-0 flex items-center justify-center
              transition-opacity duration-500
              ${isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"}
            `}
          >
            <div
              className={`
                relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center
                ${!isPlaying ? "bg-black/30" : "bg-black/20"}
                backdrop-blur-[2px] border border-white/20 rounded-[1px]
                transition-all duration-500
              `}
            >
              {/* Animated corner accents */}
              <span className="absolute top-0 left-0 w-3 h-px bg-[#B88E3E]" />
              <span className="absolute top-0 left-0 w-px h-3 bg-[#B88E3E]" />
              <span className="absolute bottom-0 right-0 w-3 h-px bg-[#B88E3E]" />
              <span className="absolute bottom-0 right-0 w-px h-3 bg-[#B88E3E]" />

              {isPlaying ? (
                /* Pause icon — two vertical bars */
                <div className="flex gap-1.5">
                  <span className="block w-[3px] h-5 bg-white/90" />
                  <span className="block w-[3px] h-5 bg-white/90" />
                </div>
              ) : (
                /* Play triangle */
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-white/90 ml-1"
                >
                  <polygon
                    points="6 3 20 12 6 21"
                    fill="currentColor"
                  />
                </svg>
              )}
            </div>
          </div>

          {/* Ultra-thin progress bar at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-black/20">
            <div
              className="h-full bg-[#B88E3E]/70 transition-[width] duration-300 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Documentary tag — bottom left, outside image visually but inside container */}
          <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className="block w-1.5 h-1.5 bg-red-500 animate-pulse rounded-[1px]" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/80 font-mono">
              {isPlaying ? "Live" : "Paused"}
            </span>
          </div>
        </div>
      </div>

      {/* ── 3. Provenance Dossier Panel ────────────────────────────────── */}
      <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-6 sm:py-8 lg:py-10">
        <div className="flex flex-col xl:flex-row xl:items-start justify-between gap-6 sm:gap-8 xl:gap-12">

          {/* Left: Metadata grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 flex-1">
            {provenanceData.map((item) => (
              <div key={item.label} className="space-y-1.5 sm:space-y-2">
                <div className="flex items-center gap-2">
                  <BrassDiamond size={5} />
                  <span className="text-[10px] uppercase tracking-[0.22em] sm:tracking-[0.25em] text-[#B88E3E] font-mono font-semibold">
                    {item.label}
                  </span>
                </div>
                <p className="font-serif text-base sm:text-lg lg:text-xl text-stone-900 leading-tight">
                  {item.value}
                </p>
                <p className="text-xs text-stone-500 font-sans leading-relaxed">
                  {item.detail}
                </p>
                <p className="font-serif-bengali text-xs sm:text-sm text-[#A84A28]/70">
                  {item.bengaliLabel}
                </p>
              </div>
            ))}
          </div>

          {/* Right: Pull-quote */}
          <div className="shrink-0 xl:max-w-sm xl:pl-8 xl:border-l xl:border-stone-200">
            <div className="border-l-2 border-[#B88E3E] pl-4 sm:pl-5 py-1">
              <p className="font-serif italic text-sm sm:text-base lg:text-lg text-stone-700 leading-relaxed">
                &ldquo;Every throw of the wooden shuttle weaves human resilience into pure fabric — a dialogue between the artisan&apos;s hands and centuries of inherited knowledge.&rdquo;
              </p>
              <div className="mt-3 sm:mt-4 flex items-center gap-3">
                <span className="block w-5 h-px bg-[#A84A28]" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-stone-500 font-mono">
                  Janani Craft Philosophy
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── 4. Kantha Stitch Divider ───────────────────────────────────── */}
      <div className="px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 pb-2">
        <KanthaStitchDivider />
      </div>
    </section>
  );
}

export default AboutCinematicHeroVideo;
