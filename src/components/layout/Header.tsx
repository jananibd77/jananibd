"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileNav } from "./MobileNav";

// Authentic Bengali Jamdani Knot Emblem
function JananiEmblem({ className = "w-9 h-9 text-[#B88E3E]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Central Diamond Core */}
      <rect x="17" y="17" width="6" height="6" fill="currentColor" transform="rotate(45 20 20)" />
      {/* 4 Radiating Interlocking Lotus Loops / Sacred Knots */}
      <path
        d="M20 6C16.5 6 13.5 9 13.5 12.5C13.5 16 16.5 19 20 19C23.5 19 26.5 16 26.5 12.5C26.5 9 23.5 6 20 6Z"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path
        d="M20 21C16.5 21 13.5 24 13.5 27.5C13.5 31 16.5 34 20 34C23.5 34 26.5 31 26.5 27.5C26.5 24 23.5 21 20 21Z"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path
        d="M6 20C6 16.5 9 13.5 12.5 13.5C16 13.5 19 16.5 19 20C19 23.5 16 26.5 12.5 26.5C9 26.5 6 23.5 6 20Z"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path
        d="M21 20C21 16.5 24 13.5 27.5 13.5C31 13.5 34 16.5 34 20C34 23.5 31 26.5 27.5 26.5C24 26.5 21 23.5 21 20Z"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      {/* Diagonal Weave Accents */}
      <path d="M14 14L26 26" stroke="currentColor" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
      <path d="M26 14L14 26" stroke="currentColor" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
      {/* Cardinal Dots */}
      <circle cx="20" cy="3" r="1" fill="currentColor" />
      <circle cx="20" cy="37" r="1" fill="currentColor" />
      <circle cx="3" cy="20" r="1" fill="currentColor" />
      <circle cx="37" cy="20" r="1" fill="currentColor" />
    </svg>
  );
}

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Dynamic scroll listener with requestAnimationFrame for 60fps/120Hz smooth tracking
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 30);
          ticking = false;
        });
        ticking = true;
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Dynamic Floating -> Pinned Navbar with Butter-Smooth Morphing Animation */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 w-full pointer-events-none transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled
            ? "pt-0 px-0"
            : "pt-2 sm:pt-3 lg:pt-5 px-3 sm:px-6 lg:px-8"
        }`}
      >
        <div
          className={`pointer-events-auto mx-auto transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] relative overflow-hidden ${
            isScrolled
              ? "w-full max-w-full rounded-none bg-[#FAF8F5]/92 backdrop-blur-md border-t-transparent border-x-transparent border-b border-stone-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.03)] h-[64px] sm:h-[68px]"
              : "w-full max-w-6xl rounded-[1px] lg:rounded-[40px] bg-[#FAF8F5]/85 sm:bg-white/[0.06] backdrop-blur-[2px] border border-stone-300/60 shadow-[0_2px_12px_rgba(0,0,0,0.02)] h-[68px] sm:h-[78px]"
          }`}
        >
          <div
            className="w-full h-full max-w-6xl mx-auto px-4 sm:px-8 lg:px-10 flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          >
            {/* LEFT: Janani Brand Logo with Jamdani Emblem */}
            <Link href="/" className="flex items-center gap-2.5 sm:gap-3.5 group shrink-0">
              <JananiEmblem className="w-7 h-7 sm:w-9 sm:h-9 text-[#B88E3E] group-hover:text-[#A84A28] transition-all duration-500 group-hover:rotate-45 group-hover:scale-110 drop-shadow-[0_1px_2px_rgba(255,255,255,0.7)]" />
              <div className="flex flex-col transition-transform duration-300 group-hover:translate-x-0.5">
                <span className="font-serif text-xl sm:text-[28px] md:text-3xl tracking-[-0.01em] text-[#A84A28] group-hover:text-[#8E3B1C] font-semibold leading-none transition-colors drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]">
                  Janani
                </span>
                <span className="text-[9px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.22em] text-[#B88E3E] group-hover:text-[#A84A28] font-sans font-bold mt-0.5 sm:mt-1 transition-colors duration-300 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
                  CRAFT &amp; FASHION
                </span>
              </div>
            </Link>

            {/* CENTER: Navigation Links with Elegant Underline on Hover (No Background Pill) */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm uppercase tracking-[0.16em] font-bold font-sans">
              {[
                { href: "/", label: "Home", exact: true },
                { href: "/about", label: "Our Story" },
                { href: "/craftsmanship", label: "Crafts" },
                { href: "/collections", label: "Collections" },
                { href: "/journal", label: "Journal" },
                { href: "/contact", label: "Contact" },
              ].map((item) => {
                const isActive = item.exact
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`group relative px-3.5 sm:px-4 py-2 transition-colors duration-300 ${
                      isActive
                        ? "text-[#A84A28] font-bold drop-shadow-[0_1px_2px_rgba(255,255,255,0.85)]"
                        : "text-[#736356] hover:text-[#A84A28] font-semibold drop-shadow-[0_1px_2px_rgba(255,255,255,0.85)]"
                    }`}
                  >
                    <span className="relative z-10 inline-block transition-transform duration-300 group-hover:-translate-y-0.5">
                      {item.label}
                    </span>
                    <span
                      className={`absolute bottom-1 left-3.5 right-3.5 h-[2.5px] bg-[#A84A28] rounded-full transition-all duration-300 ease-out origin-center ${
                        isActive
                          ? "scale-x-100 opacity-100"
                          : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* RIGHT: Mobile Menu Trigger (Mobile only) */}
            <div className="lg:hidden flex items-center text-stone-800">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="w-11 h-11 border border-stone-300/80 bg-white/60 backdrop-blur-xs rounded-[1px] flex items-center justify-center text-stone-900 hover:text-[#A84A28] hover:border-[#A84A28] focus:outline-none transition-all active:scale-95"
                title="Open Navigation Menu"
                aria-label="Open Navigation Menu"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <line x1="3" y1="7" x2="21" y2="7" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="17" x2="21" y2="17" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Slide Drawer Navigation */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
