import React from "react";

interface KanthaDividerProps {
  light?: boolean;
  className?: string;
}

/**
 * Nakshi Kantha running-stitch SVG threadline divider with traditional lotus knot.
 * Adheres strictly to Janani Craft hairline minimalist geometry.
 */
export function KanthaDivider({ light = false, className = "" }: KanthaDividerProps) {
  const color = light ? "#E5DFD5" : "#A84A28";
  return (
    <div
      className={`w-full flex items-center gap-3 py-1 select-none ${className}`}
      aria-hidden="true"
    >
      <span className="flex-1 h-px bg-stone-200" />
      <svg
        width="180"
        height="10"
        viewBox="0 0 180 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        {/* Running stitch — Nakshi Kantha thread line */}
        {Array.from({ length: 18 }).map((_, i) => (
          <rect
            key={i}
            x={i * 10 + 1}
            y={4}
            width={6}
            height={1.5}
            rx={0.5}
            fill={color}
            opacity={0.65}
          />
        ))}
        {/* Centre lotus knot */}
        <circle cx={90} cy={5} r={2.5} fill="none" stroke={color} strokeWidth={1} opacity={0.7} />
        <circle cx={90} cy={5} r={1} fill={color} opacity={0.5} />
      </svg>
      <span className="flex-1 h-px bg-stone-200" />
    </div>
  );
}

export default KanthaDivider;
