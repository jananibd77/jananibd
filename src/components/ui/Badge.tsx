import React from "react";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "terracotta" | "brass" | "charcoal" | "neutral";
  className?: string;
}

export function Badge({ children, variant = "neutral", className = "" }: BadgeProps) {
  const variantStyles = {
    neutral: "bg-stone-100 text-stone-900 border-stone-200",
    terracotta: "bg-[#A84A28]/10 text-[#A84A28] border-[#A84A28]/30",
    brass: "bg-[#B88E3E]/10 text-[#8A6626] border-[#B88E3E]/30",
    charcoal: "bg-stone-900 text-white border-stone-900",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1.5 text-xs sm:text-sm uppercase tracking-[0.2em] font-mono font-semibold border rounded-[1px] ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

export function ImagePlaceholder({
  label = "Product Photography — Janani Craft",
  aspectRatio = "aspect-4/5",
  className = "",
}: {
  label?: string;
  aspectRatio?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative w-full ${aspectRatio} bg-stone-50 border border-stone-200 rounded-[1px] flex flex-col items-center justify-center p-6 text-center text-stone-500 overflow-hidden ${className}`}
    >
      <div className="w-10 h-10 border border-stone-300 rounded-[1px] flex items-center justify-center mb-3">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <rect x="3" y="3" width="18" height="18" rx="1" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
      </div>
      <p className="text-xs sm:text-sm uppercase tracking-[0.2em] font-mono text-stone-600 leading-relaxed font-semibold">
        {label}
      </p>
      <span className="text-xs text-stone-400 mt-2 font-mono tracking-wider">
        [Pending Authentic Shoot]
      </span>
    </div>
  );
}
