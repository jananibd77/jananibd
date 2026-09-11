"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Input";

export function ContactClient() {
  const searchParams = useSearchParams();
  const initialInquiry = searchParams.get("inquiry") || "";
  const initialConcern = searchParams.get("concern") || "";

  const [formData, setFormData] = useState(() => {
    let concern = "M/S Janani Craft & Fashion (Exclusive Panjabi & Fatua)";
    if (initialConcern === "rapid-agro-care") {
      concern = "Rapid Agro Care (Fish Feed & Fish Cultivation)";
    } else if (initialConcern === "weaving-factory") {
      concern = "M/S Janani Weaving Factory (Endi Fabric, H/S Sharee & Orna)";
    }

    return {
      name: "",
      organization: "",
      email: "",
      phone: "",
      concern,
      inquiryType: initialInquiry ? "Bespoke Artifact Commission" : "Institutional Wholesale",
      message: initialInquiry
        ? `Inquiry regarding commissioning details for: "${initialInquiry}".`
        : "",
    };
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const facilities = [
    {
      id: "fac-weaving",
      name: "M/S Janani Weaving Factory",
      bengaliName: "মেসার্স জননী উইভিং ফ্যাক্টরি",
      role: "Traditional Pit-Loom Sheds",
      location: "Sakrail, Gorpara, Manikgonj",
      image: "/images/hero_artisan_weaver.jpg",
      focus: "Endi Silk (Than Kapor), Half-Silk Sarees & Orna",
    },
    {
      id: "fac-craft",
      name: "M/S Janani Craft & Fashion",
      bengaliName: "মেসার্স জননী ক্রাফট অ্যান্ড ফ্যাশন",
      role: "Tailoring & Embroidery Atelier",
      location: "Sakrail, Gorpara, Manikgonj",
      image: "/images/janani_craft_panjabi_atelier.png",
      focus: "Exclusive Panjabi, Fatua & Cultural Menswear",
    },
    {
      id: "fac-agro",
      name: "Rapid Agro Care",
      bengaliName: "র‍্যাপিড এগ্রো কেয়ার",
      role: "Agro Distribution Depot",
      location: "Gorpara, Manikgonj",
      image: "/images/rapid_agro_care.jpg",
      focus: "Aquaculture Feed & Commercial Fish Cultivation",
    },
  ];

  return (
    <div className="w-full space-y-16 lg:space-y-24">

      {/* ── 1. Facilities Visual Photography Spread (Zero Text on Images) ── */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="block w-6 h-px bg-[#B88E3E]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#B88E3E] font-mono font-semibold">
            Our Manikganj Facilities &amp; Production Units
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {facilities.map((fac) => (
            <div
              key={fac.id}
              className="space-y-3.5 group"
            >
              {/* Pure photo with zero text overlay, zero background, zero border */}
              <div className="relative aspect-16/11 w-full overflow-hidden rounded-[1px]">
                <Image
                  src={fac.image}
                  alt={fac.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Caption placed outside & below image */}
              <div className="space-y-1">
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#A84A28] font-mono font-semibold">
                  {fac.role}
                </p>
                <h3 className="font-serif text-xl text-stone-900 leading-snug">
                  {fac.name}
                </h3>
                <p className="text-xs text-stone-600 font-sans leading-relaxed">
                  {fac.focus}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 2. Compact Direct Contact Bar ──────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 border-y border-stone-200 py-6 sm:py-8 bg-[#FAF8F5] divide-y sm:divide-y-0 divide-stone-200">
        <div className="space-y-1 px-1 sm:px-3 pt-4 sm:pt-0 first:pt-0">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#A84A28] font-mono font-semibold block">
            Location
          </span>
          <p className="font-serif text-lg sm:text-xl text-stone-900">Manikganj</p>
          <p className="text-xs text-stone-600 font-sans">Sakrail, Gorpara, Bangladesh</p>
        </div>

        <div className="space-y-1 px-1 sm:px-3 pt-4 sm:pt-0">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#B88E3E] font-mono font-semibold block">
            Direct Calls
          </span>
          <a
            href="tel:01713574686"
            className="font-mono text-sm sm:text-base text-stone-900 font-semibold hover:text-[#A84A28] block transition-colors"
          >
            01713-574686
          </a>
          <p className="text-xs text-stone-500 font-mono">01932-605971 · 01689-703060</p>
        </div>

        <div className="space-y-1 px-1 sm:px-3 pt-4 sm:pt-0">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#192A45] font-mono font-semibold block">
            Electronic Mail
          </span>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="font-mono text-xs sm:text-sm text-stone-900 font-semibold hover:text-[#A84A28] block underline decoration-[#A84A28]/40 truncate transition-colors"
          >
            {siteConfig.contact.email}
          </a>
          <p className="text-xs text-stone-500 font-sans">Official Management Inbox</p>
        </div>

        <div className="space-y-1 px-1 sm:px-3 pt-4 sm:pt-0">
          <span className="text-[10px] uppercase tracking-[0.25em] text-stone-600 font-mono font-semibold block">
            WhatsApp
          </span>
          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\+/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm sm:text-base text-stone-900 font-semibold hover:text-[#A84A28] block transition-colors"
          >
            {siteConfig.contact.whatsapp}
          </a>
          <p className="text-xs text-stone-500 font-sans">Sat–Thu: 9AM – 8PM BST</p>
        </div>
      </div>

      {/* ── 3. Visual Split: Editorial Image + Streamlined Form ─────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

        {/* Left Column: Visual Photography Frame - Zero BG, Zero Border */}
        <div className="lg:col-span-5 space-y-4">
          <div className="relative aspect-4/5 w-full overflow-hidden rounded-[1px]">
            <Image
              src="/images/jamdani_hero_loom.jpg"
              alt="Traditional wooden pit-loom weaving in Manikganj"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover transition-transform duration-[1400ms] hover:scale-105"
            />
          </div>

          {/* Clean caption below image */}
          <div className="space-y-2 pt-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#A84A28]" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#A84A28] font-mono font-semibold">
                Sakrail Loom Sheds
              </span>
            </div>
            <p className="font-serif text-lg text-stone-900 leading-snug">
              &ldquo;Preserving traditional pit-loom weaving with uncompromised human dignity.&rdquo;
            </p>
            <ul className="text-xs text-stone-600 font-sans space-y-1 pt-1 border-t border-stone-200/80">
              <li>✦ Authentic Endi silk yardage (Than Kapor) bolts</li>
              <li>✦ Tailored Panjabis &amp; Fatuas with needle embroidery</li>
              <li>✦ Direct dispatch from master artisan handlooms</li>
            </ul>
          </div>
        </div>

        {/* Right Column: Streamlined Inquiry Form */}
        <div className="lg:col-span-7 bg-white border border-stone-200 rounded-[1px] p-5 sm:p-8 md:p-10">
          {submitted ? (
            <div className="text-center py-12 space-y-5">
              <div className="w-14 h-14 mx-auto border border-[#A84A28] rounded-[1px] flex items-center justify-center text-[#A84A28] bg-[#FAF8F5]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-[0.25em] text-[#B88E3E] font-mono font-semibold block">
                  Inquiry Dispatched
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-stone-900">
                  Thank You
                </h3>
                <p className="font-serif-bengali text-base sm:text-lg text-stone-500">
                  আপনার বার্তাটি সফলভাবে পাঠানো হয়েছে
                </p>
              </div>
              <p className="text-sm text-stone-600 font-sans max-w-sm mx-auto">
                Our management office in Sakrail, Gorpara, Manikgonj will review your inquiry within 24 to 48 business hours.
              </p>
              <div className="pt-2">
                <Button variant="outline" size="sm" onClick={() => setSubmitted(false)}>
                  Send Another Inquiry
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-1 pb-4 border-b border-stone-200">
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#B88E3E] font-mono font-semibold block">
                  Direct Dispatch
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-stone-900 font-normal">
                  Submit Institutional Inquiry
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Full Name *"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g., Tariqul Hasan"
                />
                <Input
                  label="Studio / Company"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  placeholder="e.g., Bengal Crafts"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Email *"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="tariqul@example.com"
                />
                <Input
                  label="Phone *"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="01713-000000"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="w-full space-y-1.5">
                  <label className="block text-xs uppercase tracking-[0.18em] font-semibold text-stone-700">
                    Sister Concern *
                  </label>
                  <select
                    value={formData.concern}
                    onChange={(e) => setFormData({ ...formData, concern: e.target.value })}
                    className="w-full h-12 px-3.5 bg-white text-stone-900 text-sm border border-stone-200 rounded-[1px] focus:outline-none focus:border-[#A84A28]"
                  >
                    <option value="M/S Janani Craft & Fashion (Exclusive Panjabi & Fatua)">
                      Janani Craft &amp; Fashion (Panjabi &amp; Fatua)
                    </option>
                    <option value="M/S Janani Weaving Factory (Endi Fabric, H/S Sharee & Orna)">
                      Janani Weaving Factory (Endi Fabric &amp; Sarees)
                    </option>
                    <option value="Rapid Agro Care (Fish Feed & Fish Cultivation)">
                      Rapid Agro Care (Fish Feed &amp; Fish Cultivation)
                    </option>
                    <option value="Executive Management & Chamber Matters">
                      Executive Management (General Chamber Matters)
                    </option>
                  </select>
                </div>

                <div className="w-full space-y-1.5">
                  <label className="block text-xs uppercase tracking-[0.18em] font-semibold text-stone-700">
                    Inquiry Scope *
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full h-12 px-3.5 bg-white text-stone-900 text-sm border border-stone-200 rounded-[1px] focus:outline-none focus:border-[#A84A28]"
                  >
                    <option value="Institutional Wholesale">Institutional Wholesale Order</option>
                    <option value="Bespoke Artifact Commission">Bespoke Artifact Commission</option>
                    <option value="Handloom Yardage Rolls">Handloom Yardage Bolts</option>
                    <option value="Agro Feed Dealership">Agro Dealership Inquiry</option>
                    <option value="Corporate Cultural Gifting">Corporate Cultural Menswear</option>
                  </select>
                </div>
              </div>

              <Textarea
                label="Message Details *"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Outline requirements, volume, sizing specifications, or timeline..."
              />

              <div className="pt-2">
                <Button type="submit" variant="primary" size="md" className="w-full" disabled={loading}>
                  {loading ? "Transmitting..." : "Submit"}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* ── 4. Visual Visiting & Swatch Archiving Row ─────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 items-center py-6">
        {/* Pure image with Zero BG, Zero Border */}
        <div className="md:col-span-4 relative aspect-16/10 overflow-hidden rounded-[1px]">
          <Image
            src="/images/endi_silk_orna.jpg"
            alt="Handloom Endi Silk Fabric Swatches"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
        </div>

        <div className="md:col-span-8 space-y-2.5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B88E3E]" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#B88E3E] font-mono font-semibold">
              Visiting Manikganj Campus &amp; Swatches
            </span>
          </div>
          <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-stone-900 font-normal">
            Physical Inspection &amp; Fabric Swatch Archiving
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
            Our Sakrail facility is located ~55 km from Dhaka via Dhaka-Aricha Highway. Curators, designers,
            and institutional buyers may schedule an accompanied tour of active pit-looms and inspect physical
            swatch books of pure Endi silk and half-silk yardage with 48 hours notice.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-3 text-xs font-mono text-stone-500">
            <span>📞 01713-574686</span>
            <span className="hidden sm:inline">·</span>
            <span className="break-all sm:break-normal">✉️ jananibd77@gmail.com</span>
          </div>
        </div>
      </div>

    </div>
  );
}
