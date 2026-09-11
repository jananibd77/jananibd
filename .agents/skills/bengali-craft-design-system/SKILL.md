---
name: bengali-craft-design-system
description: >-
  Build, style, and review UI components and pages for the Janani Craft website
  using authentic Bengali artisanal heritage aesthetics paired with modern luxury
  minimalist design principles (sharp/subtle border radius, hairline borders,
  zero/minimal shadows, and curated earthy tones).
---

# Bengali Craft Design System

Use this skill when designing or implementing UI components, pages, sections, typography, or styling for the Janani Craft website.

## Core Architectural Rules

### 1. Geometry: Sharp, Crisp, Non-Rounded
- Always apply `rounded-none` (0px) or `rounded-[1px]` / `rounded-[2px]`.
- **NEVER** use pill shapes (`rounded-full`) or bubbly cards (`rounded-xl`, `rounded-2xl`, etc.).
- Buttons must be crisp rectangular frames with hairline borders and tracked uppercase typography.

### 2. Hairline Borders & Restrained Shadows
- Borders: `1px` subtle borders using `border-[#E5DFD5]` or `border-stone-200` in light mode, and `border-[#322F2A]` in dark mode.
- Dividers: Subtle solid hairlines or dashed running stitch lines (`border-dashed border-stone-300`).
- Shadows: Use `shadow-none` for standard elements. Use subtle border highlight on hover (`hover:border-[#B88E3E]`). For overlays, use ultra-diffused micro-elevation: `shadow-[0_2px_8px_rgba(0,0,0,0.04)]`.

### 3. Traditional Bengali Color Palette
- **Pora Mati (Terracotta)**: `#A84A28` (Primary brand accent, artisan stamps, highlight CTAs)
- **Kansha / Pitoli (Antique Brass)**: `#B88E3E` (Luxury badges, delicate metallic lines, insignia)
- **Bengal Neel (Indigo)**: `#192A45` (Midnight contrast, deep headers, river-inspired depth)
- **Muslin / Kora Cotton (Ivory Ecru)**: `#FAF7F2` (Warm background canvas, card fills)
- **Charcoal Clay / Kali (Deep Ink)**: `#1A1816` (Primary text, authority headings)
- **Shitol Pati Cane (Warm Sand)**: `#E2D9CB` (Secondary borders, subtle chips)

### 4. Typography Hierarchy & Bilingual Layout
- **Hero & Section Headings**: High-contrast luxury serif (Cormorant Garamond, Playfair Display) paired with authentic Bengali font (Noto Serif Bengali).
- **Body & Controls**: Refined humanist sans (Geist, Plus Jakarta Sans, Inter).
- **Metadata Trackers**: `text-[10px] md:text-xs tracking-[0.25em] uppercase font-mono` or `font-sans font-medium`.

## Component Patterns

### Button Patterns
```tsx
// Primary Luxury Action Button
<button className="h-11 px-8 rounded-[1px] bg-[#1A1816] hover:bg-[#A84A28] text-[#FAF7F2] text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300 flex items-center justify-center gap-3">
  <span>Explore Collection</span>
  <span className="text-[#B88E3E]">→</span>
</button>

// Hairline Border Outline Button
<button className="h-11 px-8 rounded-[1px] border border-[#1A1816] hover:border-[#A84A28] hover:text-[#A84A28] text-[#1A1816] text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300">
  View Provenance
</button>
```

### Heritage Card Pattern
```tsx
<div className="group relative bg-[#FAF7F2] border border-[#E5DFD5] rounded-[1px] p-6 transition-colors duration-300 hover:border-[#B88E3E]">
  <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#ECE5D8] mb-5">
    {/* Image with subtle zoom */}
    <div className="absolute top-3 left-3 bg-[#FAF7F2]/90 backdrop-blur-sm px-2.5 py-1 text-[9px] uppercase tracking-[0.2em] text-[#A84A28] border border-[#E5DFD5] rounded-[1px]">
      Sonargaon Loom · GI Tagged
    </div>
  </div>
  <div className="text-[10px] uppercase tracking-[0.25em] text-[#B88E3E] mb-1 font-mono">
    UNESCO Heritage Weave
  </div>
  <h3 className="font-serif text-xl text-[#1A1816] group-hover:text-[#A84A28] transition-colors">
    Nilambari Jamdani Sari
  </h3>
  <p className="mt-2 text-xs text-stone-600 line-clamp-2 leading-relaxed">
    Woven with 100-count fine organic cotton over 84 days by master weaver Alauddin.
  </p>
  <div className="mt-4 pt-3 border-t border-[#E5DFD5] flex items-center justify-between text-xs">
    <span className="font-serif text-base text-[#1A1816]">৳ 38,500</span>
    <span className="text-[11px] text-stone-500 uppercase tracking-wider group-hover:text-[#A84A28] transition-colors">
      Acquire Piece →
    </span>
  </div>
</div>
```

## References
- [Color Tokens and Material Meaning](./references/colors_and_tokens.md)
- [Typography & Bilingual Rules](./references/typography_and_bilingual.md)
