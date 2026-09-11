# Minimalist Luxury UI Principles — No Rounded Pills, Sharp Hairlines, Zero Drop-Shadows

## 1. Border Radius Rules (Strict Enforcement)
- **Primary Rule**: Use crisp, architectural, minimal radius: `rounded-none` (0px) or `rounded-[1px]` / `rounded-[2px]`.
- **Prohibited**:
  - `rounded-full` (NO circular or pill buttons anywhere)
  - `rounded-xl`, `rounded-2xl`, `rounded-3xl`
  - Bubbly cards or bubbly input fields
- **Rationale**: World-class heritage luxury (Hermès, Bottega Veneta, Christie's, Aesop) relies on architectural precision, clean planar geometry, and sharp editorial frames. Rounded pill shapes cheapen the artisanal heritage feeling.

---

## 2. Border Rules (Hairline & Refined)
- **Default Border Width**: `1px` crisp hairlines.
- **Border Colors**:
  - Light mode: `border-[#E5DFD5]`, `border-stone-200`, `border-[#DCD5C9]`
  - Dark mode: `border-stone-800`, `border-[#322F2A]`
  - Accent borders: Hairline Terracotta (`border-[#A84A28]/20`) or Antique Kansha Brass (`border-[#B88E3E]/30`)
- **Stitched Borders**: Where appropriate for Nakshi Kantha aesthetic, use `border-dashed` or `border-dotted` with `border-stone-300` at `1px`.

---

## 3. Shadow Rules (Restraint & Subtlety)
- **Standard UI Cards**: `shadow-none` (rely exclusively on `1px` subtle borders and generous padding).
- **Interactive Hover State**: Do NOT apply heavy drop shadows. Instead, subtly adjust border color (`hover:border-stone-400` or `hover:border-[#B88E3E]`) or subtle contrast shift (`hover:bg-[#F4EFE6]/50`).
- **Overlays / Menus**: If floating elevation is strictly required, use micro-shadows:
  - `shadow-[0_1px_3px_rgba(0,0,0,0.03),0_4px_12px_rgba(0,0,0,0.02)]`
  - Never use standard heavy blur drop shadows (`shadow-lg`, `shadow-xl`).

---

## 4. Layout & Spacing
- **Generous Editorial Whitespace**: Ample padding (`py-20`, `py-32`, `px-6 md:px-12`).
- **Asymmetric & Museum Layouts**: Use staggered grids, alternating split columns, and large imagery paired with focused editorial excerpts.
- **High-Contrast Typographic Scale**:
  - Small uppercase trackers: `text-[10px]` or `text-xs tracking-[0.25em] uppercase`
  - Hero Display: `text-4xl md:text-6xl lg:text-7xl font-serif font-normal leading-[1.1]`
- **Subtle Micro-Interactions**:
  - Smooth transitions (`duration-300 ease-out`)
  - Image gentle zoom (`scale-105 transition-transform duration-700 ease-out` inside `overflow-hidden`)
  - Subtle underline animation for links (`underline-offset-8 decoration-1`)

---

## 5. Image-Heavy Strategy & Zero-Copyright Asset Production
- **Image-Abundant Storytelling**: Visual weight takes precedence. Prioritize tactile macro close-ups, full-bleed artisan portraits, and archival craft grids over dry text blocks.
- **Strict Zero-Copyright Protocol**: All imagery MUST be custom-generated via the `generate_image` tool specifically prompted for Bengali heritage disciplines. Stock photos and placeholder URLs are prohibited.
- **Museum Frame Styling**:
  - Encapsulate images in sharp `rounded-none` or `rounded-[1px]` frames.
  - Subtle hairline borders: `border border-stone-200`.
  - Zero drop shadows: `shadow-none`.
  - Passe-partout framing: `p-2.5 bg-white border border-stone-200`.

---

## 6. Prohibited Browser Automation & Opening
- **CRITICAL RULE**: NEVER open the browser or call `browser_subagent` under any circumstances.
- All testing, linting, route verification, and builds must be performed using terminal CLI commands only (`npm run build`, `npm run lint`, `curl`, etc.).

