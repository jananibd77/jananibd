---
name: heritage-imagery-director
description: >-
  Generate, curate, categorize, and integrate world-class, zero-copyright, custom
  artisanal photography for Janani Craft using the generate_image tool. Enforces
  image-heavy luxury editorial standards, macro craft textures, artisan
  workspaces, and hairline museum framing.
---

# Heritage Imagery Director — Zero-Copyright Custom Visuals

Use this skill whenever you need to produce, organize, or embed imagery for the Janani Craft website.

---

## 1. Zero-Copyright & Custom Generation Mandate

- **Strict Ban on External Stock**: Never use external stock photos, dummy placeholder URLs (like placeholder.com, unsplash, pexels, etc.).
- **100% Original Custom Generation**: Every single visual asset must be generated using the built-in `generate_image` tool.
- **Copyright Integrity**: Generating custom imagery guarantees 100% original, copyright-clean, royalty-free assets uniquely crafted for Janani Craft.
- **Storage Location**: Save all generated images into the project's public folder:
  `public/images/<category>/<descriptive_name>.webp` (or `png`).

---

## 2. Image-Heavy Editorial Layout Strategy

The website is designed to be **visually abundant and immersive**:
- **Full-Bleed Hero Visuals**: Dramatic wide shots showing the craft atmosphere (e.g., sun-dappled pit looms, fiery brass forges).
- **Tactile Macro Close-Ups**: Extreme close-up photography revealing raw threads, running stitches, clay grain, and hand-chiseled bronze.
- **Artisan Process Spreads**: Dignified portraits of master artisans (*Karigar*, *Tanti*, *Mridshilpi*, *Kanshari*) in authentic workshop settings.
- **Comparative Dual-Panels**: Raw material / process on the left, finished luxury artifact on the right.
- **Masonry Visual Archives**: Photo essays exploring heritage clusters across Bangladesh (Sonargaon, Tangail, Dhamrai, Jessore, Panchmura).

---

## 3. Image Framing & Architectural Rules

All images must obey Janani Craft's strict minimalist aesthetic:
- **Sharp Geometry**: `rounded-none` or `rounded-[1px]` / `rounded-[2px]`.
- **Hairline Framing**: Encase image containers with `1px` subtle borders: `border border-[#E5DFD5]`.
- **Museum Passe-Partout Mat**: For featured artifacts, frame the image with an ivory border mat:
  ```tsx
  <div className="p-2.5 bg-[#FAF7F2] border border-[#E5DFD5] rounded-[1px]">
    <div className="relative aspect-[4/5] overflow-hidden">
      <Image src="..." alt="..." fill className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
    </div>
  </div>
  ```
- **Zero Heavy Shadows**: Never add drop-shadows to image containers (`shadow-none`).
- **Aspect Ratios**:
  - Hero & Full-Width Banners: `aspect-[16/9]` or `aspect-[21/9]`
  - Editorial Portraits & Product Cards: `aspect-[4/5]` or `aspect-[3/4]`
  - Macro Detail Squares: `aspect-square`

---

## 4. Prompt Engineering Playbooks for Bengali Crafts

When calling `generate_image`, always adhere to these authentic aesthetic directions:

### A. Jamdani Handloom (Sonargaon & Rupganj)
- **Prompt Formulation**:
  > "High-end luxury editorial photography of an authentic antique wooden pit-loom in Sonargaon, Bangladesh. Morning natural golden sunlight streaming through bamboo window slats. On the loom is a sheer, diaphanous Dhaka Jamdani textile with intricate geometric floral motifs (panna hazar and kalka) handwoven in fine unbleached ivory cotton with antique gold thread accents. Master weaver's experienced weathered hands visible guiding a slender bamboo shuttle. Tactile fiber details, shallow depth of field, warm earthen atmosphere, magazine editorial quality, 8k resolution, photorealistic."

### B. Nakshi Kantha Embroidery (Jessore & Chapainawabganj)
- **Prompt Formulation**:
  > "Macro editorial photograph of an authentic traditional Nakshi Kantha quilt being embroidered by hand. Close-up on the tactile running stitch ripples across layers of soft vintage cotton cloth. Vibrant yet natural plant-dyed threads in terracotta red, deep river indigo, and mustard yellow forming a traditional sacred lotus mandala motif. Natural soft sidelight showing the three-dimensional stitched ridges, artisanal texture, museum textile archive style, ultra high definition."

### C. Bishnupur Terracotta Earthenware (পোড়ামাটি)
- **Prompt Formulation**:
  > "Architectural fine-art photograph of ancient Bengali terracotta temple tile relief carving. Rich burnt sienna and clay terracotta earthen hues. Intricate bas-relief depictions of rural riverboats, lotus flowers, and mythical patterns carved into baked clay. Raking natural afternoon light casting gentle delicate shadows across the sculpted earthen tile. Authentic artisanal texture, warm museum lighting, razor sharp detail."

### D. Dhamrai Kansha & Antique Brass (কাঁসা-পিতল)
- **Prompt Formulation**:
  > "Luxury still-life editorial photograph of authentic hand-cast Dhamrai bell metal (Kansha) and burnished brass heritage vessels. Warm burnished golden patina with subtle hand-hammered indentations and traditional engraved floral bands. Placed on an unpolished slate stone surface with soft directional studio light creating luminous metallic highlights. Timeless antique heirloom, minimalist museum presentation, ultra-realistic."

### E. Bengal Neel / River Indigo (নীল)
- **Prompt Formulation**:
  > "Atmospheric documentary photograph of traditional natural indigo fabric dyeing in rural Bengal. Deep circular earthen fermentation vats filled with rich midnight-blue indigo dye. Cotton textile dripping vibrant river indigo being lifted by artisan hands, with dyed blue fabrics hanging in the background on rustic bamboo frames drying in the warm breeze. Soft haze, cinematic depth, rich indigo blue tones, National Geographic documentary aesthetic."
