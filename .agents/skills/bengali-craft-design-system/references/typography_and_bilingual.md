# Typography & Bilingual Rules — Janani Craft

## Typography Philosophy
Janani Craft presents authentic Bengali artisanal heritage with the poise of an international museum publication. Typography is respectful, legible, balanced, and uncompromising in quality.

## Font Stacks

### 1. Luxury Editorial Serif (Headlines & Statements)
- **Primary**: `Cormorant Garamond`, `Playfair Display`, or `Instrument Serif`
- **Fallback**: `Georgia`, `Baskerville`, `serif`
- **Role**: Main titles, hero statements, artisan quotes, collection names.
- **Classes**: `font-serif tracking-tight font-normal leading-[1.15]`

### 2. Bengali Script Typography (Bilingual Headings & Cultural Accents)
- **Primary**: `Noto Serif Bengali`, `Anek Bangla`, `Tiro Bangla`
- **Fallback**: `Kalpurush`, `SolaimanLipi`, `serif`
- **Role**: Bengali translations, cultural titles, artisan quotes in original language.
- **Classes**: `font-serif-bengali tracking-normal font-normal`

### 3. Humanist Clean Sans-Serif (Body & Narrative)
- **Primary**: `Plus Jakarta Sans`, `Geist Sans`, `Inter`
- **Fallback**: `system-ui`, `sans-serif`
- **Role**: Long-form storytelling, provenance details, descriptions, navigation, buttons.
- **Classes**: `font-sans leading-relaxed text-stone-700`

### 4. Technical / Metadata Trackers
- **Primary**: `Geist Mono`, `JetBrains Mono`
- **Role**: Dimensions, artisan hours, geographical coordinates, GI certification codes.
- **Classes**: `font-mono text-[10px] uppercase tracking-[0.25em] text-stone-500`

## Bilingual Best Practices
- Present bilingual headings gracefully: English primary with subtle Bengali subtitle, or vice versa.
  ```tsx
  <div className="space-y-1">
    <span className="text-[10px] uppercase tracking-[0.3em] text-[#B88E3E] font-mono block">
      ঐতিহ্যবাহী জামদানি শিল্প · Dhakai Jamdani
    </span>
    <h2 className="font-serif text-3xl md:text-5xl text-[#1A1816]">
      Woven Air of Sonargaon
    </h2>
  </div>
  ```
