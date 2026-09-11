"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/siteConfig";

export interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenInquiry?: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Subtle Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Museum-Grade Editorial Side Drawer */}
      <div className="fixed inset-y-0 right-0 w-full sm:w-95 max-w-full bg-[#FAF8F5] p-5 sm:p-7 flex flex-col justify-between border-l border-stone-200 shadow-[0_0_40px_rgba(0,0,0,0.1)] animate-slide-in overflow-y-auto">
        <div className="space-y-6">
          {/* Header & Close */}
          <div className="flex items-center justify-between pb-4 border-b border-stone-200">
            <div className="flex items-center gap-2.5">
              <span className="font-serif text-xl sm:text-2xl tracking-tight text-stone-900 font-semibold">
                Janani
              </span>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 border border-stone-300 rounded-[1px] flex items-center justify-center text-stone-600 hover:text-stone-950 hover:border-stone-900 transition-all active:scale-95"
              aria-label="Close navigation menu"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Primary Navigation Links */}
          <nav className="flex flex-col divide-y divide-stone-200/60">
            {siteConfig.navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={`group flex items-baseline justify-between py-3.5 transition-colors ${
                    isActive
                      ? "text-[#A84A28] font-bold"
                      : "text-stone-800 hover:text-[#A84A28]"
                  }`}
                >
                  <span className="text-sm sm:text-base uppercase tracking-[0.2em] font-semibold">
                    {item.label}
                  </span>
                  <span className="text-xs sm:text-sm text-stone-400 font-serif-bengali tracking-normal group-hover:text-[#A84A28]/70 transition-colors">
                    {item.bengaliLabel}
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}
