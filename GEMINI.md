# Janani Craft — World-Class Bengali Heritage Design System Rules

These rules are ALWAYS active across this workspace. Every component, page, layout, and style written in this repository must strictly obey these core principles.

---

## 1. Aesthetic Identity: Pure Bengali Heritage x Modern Luxury Editorial

Janani Craft celebrates the living soul of Bengal's ancestral artisanal heritage:
- **Jamdani Handloom** (UNESCO Intangible Cultural Heritage): geometric lattice motifs, sheer muslin balance, woven air delicacy.
- **Nakshi Kantha**: Stitched folk narrative, embroidered running stitch hairline borders, lotus mandalas, kalka/paisley.
- **Pora Mati (Terracotta)**: Earth-baked architectural warmth, Bishnupur temple relief textures, clay earthen tones.
- **Dhamrai Kansha & Pitoli (Bell Metal & Brass)**: Heirloom hand-cast bronze, warm burnished gold, artisanal patina.
- **Dhaka Muslin & Deshi Khadi**: Legendary superfine breathable weave, unbleached kora ivory, tactile natural fibers.
- **Bengal Indigo (Neel)**: Deep heritage river-indigo, natural botanical dye depths.
- **Shitol Pati & Golden Jute**: Fine cane weaves, sustainable golden fiber craftsmanship.

---

## 2. Geometry, Borders & Shadows: Strict Minimalism

The user mandates: **minimal, less radius, refined borders, minimal/no shadows**.

### Border Radius
- **Strict Limit**: `rounded-none` (0px) or `rounded-[1px]` / `rounded-[2px]` maximum.
- **FORBIDDEN**: Never use `rounded-xl`, `rounded-2xl`, `rounded-3xl`, or `rounded-full` for cards, buttons, dialogs, or containers (pill buttons and bubbly rounded cards are strictly prohibited).
- **Style**: Sharp, gallery-grade, architectural, editorial lines.

### Borders
- **Subtle, Hairline Borders**: Use `1px` crisp borders with muted earthy tones (`border-stone-200`, `border-[#E5DFD5]`, `border-[#3A352F]` in dark mode).
- **Divider Accents**: Use delicate borders, subtle stitched dashes (inspired by Nakshi Kantha running stitch), or hairline brass rules (`border-[#C5A059]/30`).

### Shadows & Elevation
- **Shadow Restraint**: Avoid heavy, fuzzy, or dark drop shadows (`shadow-lg`, `shadow-xl`, `shadow-2xl` are prohibited).
- **Preferred Elevation**: Rely on spatial hierarchy, contrast, hairline borders, and generous whitespace.
- If elevation is strictly required for popovers/dropdowns, use an ultra-fine diffused whisper shadow: `shadow-[0_2px_8px_rgba(0,0,0,0.04)]` or `shadow-[0_1px_3px_rgba(0,0,0,0.02)]`.

---

## 3. Curated Color Palette (Authentic Bengali Tones)

Use only curated, harmonious tones representing Bengali artisanal raw materials:

| Material / Heritage Element | Name in Bengali | Hex Code | Purpose |
| :--- | :--- | :--- | :--- |
| **Pora Mati** | পোড়ামাটি (Terracotta) | `#A84A28` / `#8B381A` | Primary accent, hero CTAs, heritage stamps |
| **Kansha / Pitoli** | কাঁসা-পিতল (Antique Brass) | `#B88E3E` / `#D4AF37` | Luxury accents, insignia, fine borders |
| **Bengal Neel** | নীল (Bengal Indigo) | `#192A45` / `#121E33` | Deep contrasting headers, midnight accents |
| **Muslin / Kora Cotton** | মসলিন / কোরা তুলা (Ivory Ecru) | `#FAF7F2` / `#F3EDE2` | Canvas backgrounds, card backgrounds |
| **Charcoal Clay / Kali** | কাঠকয়লা / কালি (Deep Ink) | `#1A1816` / `#2B2824` | Primary typography, authoritative titles |
| **Shitol Pati / Cane** | শীতলপাটি (Warm Sand) | `#E2D9CB` / `#D1C5B2` | Hairline dividers, subtle framing |
| **Padma Pink** | পদ্ম (Lotus Madder) | `#B85B66` | Subtle decorative folk highlight |

---

## 4. Typography & Editorial Tone

- **Primary Headings**: Classic high-contrast luxury serif (e.g., *Cormorant Garamond*, *Playfair Display*, or *Bodoni*) delivering the feel of a high-end heritage maison.
- **Body Text**: Clean, highly readable humanist sans-serif (*Plus Jakarta Sans*, *Geist*, or *Inter*).
- **Bengali Script Support**: Integrated bilingual grace with *Noto Serif Bengali* or *Anek Bangla* for authentic terminology and bilingual headlines (e.g., "জননী ক্রাফট" / "কারুশিল্পের ঐতিহ্য").
- **Metadata & Micro-Labels**: Uppercase, tracked wide (`tracking-[0.2em]`), small font (`text-[10px]` or `text-xs`), sharp and disciplined.

---

## 5. Craftsmanship Storytelling & Content Integrity

- Every collection must feature provenance: **Artisan cluster** (e.g., Tangail, Sonargaon, Dhamrai, Sylhet, Chapainawabganj), **craft technique**, and **raw material provenance**.
- Use authentic Bengali craft terminology:
  - *Tanti* (Handloom Weaver)
  - *Karigar* / *Shilpi* (Master Artisan)
  - *Mridshilpi* (Clay / Terracotta Potter)
  - *Kanshari* (Bell-metal Brass Smith)
  - *Nakshi Shilpi* (Kantha Embroiderer)
- Provide GI (Geographical Indication) badges and certification of 100% authentic handmade integrity.

---

## 6. Image-Heavy Visual Strategy & Zero-Copyright Custom Imagery Protocol

The user mandates an **image-heavy, highly visual website** with **100% custom-generated imagery and zero copyright infringement**:

### Zero-Copyright & Custom Generation Mandate
- **No Stock Placeholders**: Never use generic stock photos, uncredited URLs, or dummy placeholder services.
- **Custom AI Generation**: All images must be custom-generated using the `generate_image` tool specifically tailored to Janani Craft's heritage narrative. This guarantees 100% royalty-free, original, copyright-clean assets.
- **Save Location**: Generated assets must be stored cleanly in `public/images/` with descriptive naming (e.g., `jamdani_loom_macro.webp`, `terracotta_artisan_hands.webp`).

### Image-Heavy Architectural Layout
- **Visual Dominance**: The website must be rich with high-resolution editorial photography: full-bleed hero sections, dual-image comparative panels, macro textile texture close-ups, artisan workshops, and masonry galleries.
- **Tactile Material Storytelling**: Every product, collection, and story must include multiple visual angles:
  1. *Macro detail* (showing thread weave, needle stitch, chisel marks, clay grain).
  2. *Artisan context* (hands at work, traditional tools, wooden looms, kiln fires).
  3. *Finished lifestyle/editorial* (dignified luxury styling in natural light).

### Image Framing & Styling Rules
- **Strict Geometry**: All image frames must strictly obey `rounded-none` or `rounded-[1px]` / `rounded-[2px]`.
- **Hairline Framing**: Encase images in subtle `1px` borders (`border-[#E5DFD5]`) or museum-style passe-partout mats (`p-2.5 bg-[#FAF7F2] border border-[#E5DFD5]`).
- **No Heavy Shadows**: Never add drop-shadows to image containers (`shadow-none`).
- **Smooth Micro-Interaction**: On hover, use subtle smooth zoom transitions (`overflow-hidden` with `group-hover:scale-105 transition-transform duration-700 ease-out`).
- **Color Temperature**: Imagery must feature natural warm ambient lighting, earthen clay tones, warm brass reflections, and organic textures, avoiding synthetic or overly saturated plastic aesthetics.
- **CRITICAL MANDATE — ZERO TEXT ON IMAGES**: NEVER place text, floating badges, numerical index tags, watermarks, or gradient text overlays on top of or inside any image container across the entire website. All photography must remain 100% pure, clean, and unobstructed. All captions, numbers, badges, and titles must be located strictly outside and below (or beside) the image container.

---

## 7. Tactile 3D Animated Craft Experiences

The website integrates high-performance, museum-grade **3D animations and interactive 3D craft objects** that celebrate Bengal's artisanal heritage:

### Purpose & Cultural Relevance
- **Authentic Subject Matter**: 3D elements must directly represent Bengali traditional crafts:
  1. *3D Terracotta Relief & Pot*: Interactive 3D clay artifacts with tactile earthen relief, rotating with smooth mouse/touch orbit.
  2. *3D Kansha / Brass Vessel*: Real-time metallic brass reflections, hand-hammered specularity, and gold luster.
  3. *3D Muslin & Jamdani Cloth Simulation*: Interactive "woven air" cloth physics that wave and ripple softly in response to cursor movements.
  4. *3D Parallax Perspective Tilt*: Museum artifact cards that tilt smoothly in 3D space (`perspective: 1000px`) with dynamic glare and multi-layered Z-depth.
  5. *3D Nakshi Kantha Thread Stitches*: Animated continuous running stitch tracing across the canvas in 3D perspective.

### Minimalist 3D Framing Rules
- **Viewport Constraints**: All 3D canvases, interactive viewports, and perspective cards must follow strict minimalist geometry:
  - `rounded-none` or `rounded-[1px]` / `rounded-[2px]`.
  - Crisp hairline borders: `border border-[#E5DFD5]` (light) or `border-[#2E2A25]` (dark).
  - Absolutely zero heavy drop-shadows (`shadow-none`).
- **Performance & Elegance**:
  - Must achieve silky 60fps rendering without jank or CPU thrashing.
  - Subtle and contemplative: avoid frantic, noisy, or arcade-like movements. Animations must emulate the calm dignity of a cultural exhibition.
  - Automatic reduced-motion support for accessibility (`prefers-reduced-motion`).

---

## 8. STRICT RULE: NEVER OPEN BROWSER

**NEVER open the browser or call the `browser_subagent` tool under any circumstances.**
- The user has explicitly forbidden any browser opening or automated browser sessions.
- Do NOT invoke `browser_subagent`, launch Chrome/Puppeteer/Playwright, or trigger browser tabs.
- Always perform all testing, validation, and status checks through terminal/CLI tooling (`npm run build`, `npm run lint`, unit tests, `curl`, etc.).


