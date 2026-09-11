---
name: craft-motif-svg-generator
description: >-
  Generate clean, accessible, hairline-precise SVG vector patterns, ornamental
  dividers, and traditional Bengali craft motifs (Jamdani geometric boutis,
  Nakshi Kantha running stitches, Alpona flourishes, and Terracotta friezes)
  without fuzzy drop-shadows or clumsy styling.
---

# Craft Motif SVG Generator

Use this skill whenever you need to render authentic Bengali decorative elements, textile dividers, heirloom seals, or background motifs for Janani Craft.

## Core Rules
1. **Hairline Vector Precision**: Use `stroke-width="1"` or `1.5` for delicate craft motifs. Never use heavy strokes or blurry dropshadows (`filter: drop-shadow` is prohibited).
2. **Authentic Geometry**:
   - **Jamdani**: Crisp diagonal lattices, 45-degree diamond boutis (*kalka*, *terchi*, *panna hazar*).
   - **Nakshi Kantha**: Dashed running stitches, radiating lotus petals (*astadala padma*), fish (*machh*), and paisley vine (*kalmilata*).
   - **Alpona**: Symmetric rice-paste spirals, conch-inspired curves, sacred floral mandalas.
   - **Terracotta Relief**: Stepped temple tooth borders (*danta*), clay tablet frames.
3. **Color Compliance**: Use design tokens (`#A84A28` Terracotta, `#B88E3E` Antique Brass, `#1A1816` Charcoal, `#FAF7F2` Muslin).

---

## SVG Templates

### 1. Nakshi Kantha Running-Stitch Divider
A delicate horizontal thread divider with a central lotus motif:
```tsx
export function KanthaDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full flex items-center justify-center gap-4 ${className}`}>
      <div className="h-[1px] flex-1 border-t border-dashed border-stone-300 dark:border-stone-700" />
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#A84A28] shrink-0"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="2" fill="currentColor" />
        <path
          d="M12 4C12 7 10 10 7 12C10 14 12 17 12 20C12 17 14 14 17 12C14 10 12 7 12 4Z"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
        />
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="0.75" strokeDasharray="2 2" />
      </svg>
      <div className="h-[1px] flex-1 border-t border-dashed border-stone-300 dark:border-stone-700" />
    </div>
  );
}
```

### 2. Jamdani Bouti Motif (Geometric Diamond)
```tsx
export function JamdaniBouti({ size = 32, className = "text-[#B88E3E]" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer Diamond */}
      <path d="M16 2L30 16L16 30L2 16Z" stroke="currentColor" strokeWidth="1" />
      {/* Inner Lattice */}
      <path d="M16 7L25 16L16 25L7 16Z" stroke="currentColor" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
      {/* Center Core */}
      <circle cx="16" cy="16" r="2.5" fill="currentColor" />
      {/* Cardinal Points */}
      <circle cx="16" cy="10" r="1" fill="currentColor" />
      <circle cx="16" cy="22" r="1" fill="currentColor" />
      <circle cx="10" cy="16" r="1" fill="currentColor" />
      <circle cx="22" cy="16" r="1" fill="currentColor" />
    </svg>
  );
}
```

### 3. Geographical Indication (GI) & Heritage Stamp
```tsx
export function GIHeritageSeal({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2 border border-[#B88E3E]/40 px-3 py-1.5 rounded-[1px] bg-[#FAF7F2] text-[#1A1816] ${className}`}>
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-[#A84A28]">
        <rect x="1" y="1" width="14" height="14" stroke="currentColor" strokeWidth="1" />
        <path d="M8 3L13 8L8 13L3 8Z" stroke="#B88E3E" strokeWidth="1" />
        <circle cx="8" cy="8" r="1.5" fill="currentColor" />
      </svg>
      <span className="text-[9px] uppercase tracking-[0.2em] font-mono text-stone-700">
        GI Certified · 100% Handcrafted Bengal
      </span>
    </div>
  );
}
```
