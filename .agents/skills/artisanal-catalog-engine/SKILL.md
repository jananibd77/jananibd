---
name: artisanal-catalog-engine
description: >-
  Architect and implement luxury craft showcases, artisan master profiles,
  provenance records, and ethical supply-chain displays adhering to Janani Craft's
  minimalist geometry and editorial standards.
---

# Artisanal Catalog Engine

Use this skill when building product lists, catalog filters, artisan spotlights, craft heritage dossiers, or collection displays.

## Catalog Architecture & Data Schema

Every artisanal craft artifact in the Janani Craft catalog must carry strict provenance metadata:

```typescript
export interface CraftArtifact {
  id: string;
  title: string;
  bengaliTitle: string;
  category: "jamdani" | "kantha" | "terracotta" | "brass" | "muslin" | "jute";
  artisan: {
    name: string;
    role: "Master Weaver (তাঁতি)" | "Potter (মৃৎশিল্পী)" | "Embroiderer (নকশী কারিগর)" | "Kanshari (কাঁসারি)";
    region: string; // e.g. "Rupganj, Narayanganj" or "Dhamrai, Dhaka"
    experienceYears: number;
    portraitUrl?: string;
  };
  provenance: {
    creationTime: string; // e.g., "72 Days on Traditional Taant"
    materials: string[]; // e.g., ["100s Count Organic Phuti Karpas", "Botanical Madder"]
    giCertified: boolean;
    giRegistrationNumber?: string;
  };
  price: {
    amount: number;
    currency: "BDT" | "USD";
  };
  images: {
    main: string;
    detail: string;
    inProgress: string;
  };
  techniqueSummary: string;
}
```

## Presentation Rules
1. **No Drop Shadows**: Use `shadow-none` across cards and grids. Distinction comes from `1px` subtle borders (`border-[#E5DFD5]`), pristine padding, and curated color palettes.
2. **Sharp Corners**: Cards and interactive elements must feature `rounded-none` or `rounded-[1px]`.
3. **Pacing & Layout**:
   - Asymmetric 2-column or 3-column editorial grid.
   - High-contrast typography with generous whitespace.
   - Micro-badges positioned in corners with hairline frames and transparent parchment backdrops (`bg-[#FAF7F2]/90 backdrop-blur-sm`).
4. **Artisan Credit Above Commercialism**: Always celebrate the human hands that created the piece before showing price or commercial triggers.
5. **Zero-Copyright Custom Imagery**: Every artifact must feature all three image viewpoints (`main`, `detail`, `inProgress`) generated via `generate_image`, framed with hairline borders (`border-[#E5DFD5]`), sharp corners (`rounded-[1px]`), and zero drop-shadows. Never use stock placeholders.


## Filter Bar Pattern (Minimalist Architectural Tabs)
```tsx
<div className="flex flex-wrap items-center gap-2 border-b border-[#E5DFD5] pb-4 mb-8">
  {categories.map((cat) => (
    <button
      key={cat.id}
      className={`px-4 py-2 text-xs uppercase tracking-[0.2em] transition-all rounded-[1px] ${
        activeCategory === cat.id
          ? "bg-[#1A1816] text-[#FAF7F2]"
          : "bg-transparent text-stone-600 hover:text-[#1A1816] hover:bg-[#E5DFD5]/40"
      }`}
    >
      {cat.label}
    </button>
  ))}
</div>
```
