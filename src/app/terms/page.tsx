import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { KanthaDivider } from "@/components/ui/KanthaDivider";

export const metadata: Metadata = {
  title: "Terms of Service & Artisanal Charter | Janani Craft",
  description:
    "Review the Terms of Service, craftsmanship standards, handloom authenticity certifications, and institutional policies of Janani Craft & Fashion.",
  openGraph: {
    title: "Terms of Service | Janani Craft & Fashion",
    description:
      "Handcrafted integrity, bespoke commission terms, and institutional purchasing policies.",
  },
};

const TERMS_SECTIONS = [
  { id: "handcrafted-nature", title: "1. Nature of Handcrafted Goods & Natural Variation", bengali: "হস্তশিল্পের স্বাভাবিক বৈশিষ্ট্য ও স্বকীয়তা" },
  { id: "provenance-authenticity", title: "2. Provenance Guarantee & GI Certification", bengali: "উৎপত্তি ও জিআই সনদের নিশ্চয়তা" },
  { id: "intellectual-property", title: "3. Intellectual Property & Cultural Heritage Rights", bengali: "বুদ্ধিবৃত্তিক সম্পদ ও ঐতিহ্য সংরক্ষণ" },
  { id: "bespoke-commissions", title: "4. Bespoke Commissions & Institutional Wholesale", bengali: "কাস্টম অর্ডার ও পাইকারি সরবরাহ চুক্তি" },
  { id: "shipping-fulfillment", title: "5. Artisanal Timelines, Shipping & Escrow", bengali: "উৎপাদন সময়সীমা, ডেলিভারি ও এসক্রো" },
  { id: "returns-exchanges", title: "6. Inspection, Returns & Ethical Exchange", bengali: "পণ্য পরিদর্শন ও ফেরত নীতিমালা" },
  { id: "liability-governance", title: "7. Limitation of Liability & Applicable Law", bengali: "দায়বদ্ধতার সীমাবদ্ধতা ও আইনি বিধান" },
];

export default function TermsPage() {
  return (
    <div className="w-full bg-[#FAF8F5] pt-24 sm:pt-32 lg:pt-36 pb-12 sm:pb-20 lg:pb-28 border-b border-stone-200">
      <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 space-y-10 sm:space-y-16">
        {/* ─────────────────────────────────────────────────────────────
            1. EDITORIAL HEADER & METADATA MASTHEAD
        ───────────────────────────────────────────────────────────── */}
        <header className="space-y-4 sm:space-y-6 border-b border-stone-200 pb-8 sm:pb-12">
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.28em] text-[#B88E3E] font-mono font-semibold">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#A84A28] rounded-[1px] inline-block shrink-0" />
            <span>Artisanal Standards & Commercial Charter · Janani Enterprise</span>
          </div>

          <div className="space-y-2 sm:space-y-3">
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-stone-950 font-normal tracking-tight leading-[1.12]">
              Terms of Service & Craft Charter<span className="text-[#A84A28]">.</span>
            </h1>
            <p className="font-serif-bengali text-xl sm:text-2xl md:text-3xl text-[#A84A28] font-normal leading-relaxed">
              সেবার শর্তাবলী ও হস্তশিল্প সনদ
            </p>
          </div>

          <p className="text-sm sm:text-base lg:text-lg text-stone-700 leading-relaxed font-sans pt-1">
            Every object produced under the Janani Craft & Fashion maison is a testament to human patience, unhurried time, and ancestral technique. These terms govern the acquisition, custom commissioning, and institutional distribution of our artisanal masterworks.
          </p>

          {/* Policy Vital Signs Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4 border-t border-stone-200/80 font-mono text-[11px] sm:text-xs">
            <div className="space-y-0.5 sm:space-y-1">
              <span className="text-stone-400 block text-[9px] sm:text-[10px] uppercase tracking-wider">Effective Date</span>
              <span className="text-stone-900 font-medium">October 15, 2025</span>
            </div>
            <div className="space-y-0.5 sm:space-y-1">
              <span className="text-stone-400 block text-[9px] sm:text-[10px] uppercase tracking-wider">Charter Version</span>
              <span className="text-stone-900 font-medium">v2.4 (Artisanal & Wholesale)</span>
            </div>
            <div className="space-y-0.5 sm:space-y-1">
              <span className="text-stone-400 block text-[9px] sm:text-[10px] uppercase tracking-wider">Governing Legal Venue</span>
              <span className="text-stone-900 font-medium">High Court Division, Dhaka</span>
            </div>
            <div className="space-y-0.5 sm:space-y-1">
              <span className="text-stone-400 block text-[9px] sm:text-[10px] uppercase tracking-wider">Sister Enterprise</span>
              <span className="text-stone-900 font-medium">Rapid Agro Care Limited</span>
            </div>
          </div>
        </header>

        {/* ─────────────────────────────────────────────────────────────
            2. THREE ARTISANAL PILLARS
        ───────────────────────────────────────────────────────────── */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="p-5 sm:p-6 bg-white border border-stone-200 rounded-[1px] space-y-2.5 sm:space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A84A28] font-semibold block">
              Standard I · 100% Handmade
            </span>
            <h3 className="font-serif text-lg sm:text-xl text-stone-950 font-normal">
              Authentic Human Mastery
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
              All Janani creations are fashioned manually by rural craftspeople. Subtle variations in thread density, grain, and dye depth are the hallmark of real craft.
            </p>
          </div>

          <div className="p-5 sm:p-6 bg-white border border-stone-200 rounded-[1px] space-y-2.5 sm:space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#B88E3E] font-semibold block">
              Standard II · Fair Remuneration
            </span>
            <h3 className="font-serif text-lg sm:text-xl text-stone-950 font-normal">
              Ethical Karigar Equity
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
              Every wholesale acquisition and bespoke commission directly funds fair monthly living compensation for our Manikganj and Dhamrai artisan guilds.
            </p>
          </div>

          <div className="p-5 sm:p-6 bg-white border border-stone-200 rounded-[1px] space-y-2.5 sm:space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#192A45] font-semibold block">
              Standard III · Zero Industrial Synthetic
            </span>
            <h3 className="font-serif text-lg sm:text-xl text-stone-950 font-normal">
              Alluvial Raw Materials
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
              We exclusively employ deshi kora cotton, unboiled Ahimsa Endi peace silk, golden tossa jute, mature bamboo cane, and hand-cast bell metal alloys.
            </p>
          </div>
        </section>

        {/* Running Stitch Divider */}
        <KanthaDivider />

        {/* ─────────────────────────────────────────────────────────────
            3. TABLE OF CONTENTS
        ───────────────────────────────────────────────────────────── */}
        <nav className="p-5 sm:p-6 bg-white border border-stone-200 rounded-[1px] space-y-3 sm:space-y-4">
          <span className="text-xs uppercase tracking-[0.2em] font-mono font-semibold text-[#A84A28] block">
            Table of Terms & Clauses
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 text-xs font-mono">
            {TERMS_SECTIONS.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                className="p-2.5 bg-[#FAF8F5] border border-stone-200 rounded-[1px] text-stone-700 hover:text-[#A84A28] hover:border-[#A84A28] transition-colors truncate block"
              >
                {sec.title}
              </a>
            ))}
          </div>
        </nav>

        {/* ─────────────────────────────────────────────────────────────
            4. DETAILED TERMS CLAUSES
        ───────────────────────────────────────────────────────────── */}
        <div className="space-y-10 sm:space-y-12 text-stone-800 font-sans leading-relaxed text-sm sm:text-base lg:text-lg">
          {/* Section 1 */}
          <section id="handcrafted-nature" className="space-y-4 pt-4 scroll-mt-32">
            <div className="border-b border-stone-200 pb-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#A84A28] block">Clause 01</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-stone-950 font-normal">
                1. Nature of Handcrafted Goods & Natural Variation
              </h2>
              <span className="font-serif-bengali text-lg text-stone-500">
                হস্তশিল্পের স্বাভাবিক বৈশিষ্ট্য ও স্বকীয়তা
              </span>
            </div>
            <p className="text-stone-700 leading-relaxed">
              All artifacts and garments presented by Janani Craft & Fashion are created by master artisans using traditional pit-looms, needlework frames, lost-wax crucibles, and manual draw-knives.
            </p>
            <p className="text-stone-700 leading-relaxed">
              Subtle nuances in botanical madder dye shade, minor irregularities in handloom slub texture, and natural grain variations in cane or bamboo are recognized worldwide as intrinsic signatures of authentic human craft, distinguishing them from sterile machine uniformity. Such variations do not constitute flaws or grounds for rejection under our quality charter.
            </p>
          </section>

          {/* Section 2 */}
          <section id="provenance-authenticity" className="space-y-4 pt-4 scroll-mt-32">
            <div className="border-b border-stone-200 pb-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#A84A28] block">Clause 02</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-stone-950 font-normal">
                2. Provenance Guarantee & GI Certification
              </h2>
              <span className="font-serif-bengali text-lg text-stone-500">
                উৎপত্তি ও জিআই সনদের নিশ্চয়তা
              </span>
            </div>
            <p className="text-stone-700 leading-relaxed">
              Janani Craft guarantees that all Jamdani, Nakshi Kantha, Endi silk, and Kansha bell-metal goods originate directly from verified artisanal cooperatives in Tangail, Sonargaon, Chapainawabganj, Dhamrai, and Manikganj. Each masterwork is accompanied by an archival provenance certificate detailing the weaver’s guild, production hours, and raw material lineage.
            </p>
          </section>

          {/* Section 3 */}
          <section id="intellectual-property" className="space-y-4 pt-4 scroll-mt-32">
            <div className="border-b border-stone-200 pb-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#A84A28] block">Clause 03</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-stone-950 font-normal">
                3. Intellectual Property & Cultural Heritage Rights
              </h2>
              <span className="font-serif-bengali text-lg text-stone-500">
                বুদ্ধিবৃত্তিক সম্পদ ও ঐতিহ্য সংরক্ষণ
              </span>
            </div>
            <p className="text-stone-700 leading-relaxed">
              The editorial essays, architectural photography, curated color palettes, video reels, and bespoke garment cuts featured on this website are the proprietary property of Janani Craft & Fashion and its holding enterprise, Rapid Agro Care Limited.
            </p>
            <p className="text-stone-700 leading-relaxed">
              Traditional craft motifs (such as the Astadala Padma lotus mandala and Jamdani geometric boutis) are respected as the intangible cultural heritage of the Bengali people. Any commercial exploitation, digital duplication, or unauthorized trademarking of our archival presentations without written consent is strictly prohibited.
            </p>
          </section>

          {/* Section 4 */}
          <section id="bespoke-commissions" className="space-y-4 pt-4 scroll-mt-32">
            <div className="border-b border-stone-200 pb-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#A84A28] block">Clause 04</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-stone-950 font-normal">
                4. Bespoke Commissions & Institutional Wholesale
              </h2>
              <span className="font-serif-bengali text-lg text-stone-500">
                কাস্টম অর্ডার ও পাইকারি সরবরাহ চুক্তি
              </span>
            </div>
            <p className="text-stone-700 leading-relaxed">
              Corporate gifts, bespoke ceremonial ensembles, institutional museum acquisitions, and bulk than kapor fabric allocations are subject to customized bilateral contracts:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-stone-700">
              <li>Custom orders require an agreed initial retainer to secure artisanal loom time and raw fiber sourcing.</li>
              <li>Production timelines are established in harmony with natural weather rhythms (monsoon retting for jute, winter sun-drying for terracotta).</li>
              <li>Wholesale patrons receive milestone photography and fiber inspection reports directly from our Manikganj workshop directors.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section id="shipping-fulfillment" className="space-y-4 pt-4 scroll-mt-32">
            <div className="border-b border-stone-200 pb-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#A84A28] block">Clause 05</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-stone-950 font-normal">
                5. Artisanal Timelines, Shipping & Escrow
              </h2>
              <span className="font-serif-bengali text-lg text-stone-500">
                উৎপাদন সময়সীমা, ডেলিভারি ও এসক্রো
              </span>
            </div>
            <p className="text-stone-700 leading-relaxed">
              Domestic shipments across Bangladesh are fulfilled via secure courier directly from our Manikganj facility. International export consignments are handled under formal bill-of-lading and export clearance protocols. We package all goods in sustainable jute mailers, unbleached cotton dust bags, and recyclable cartons.
            </p>
          </section>

          {/* Section 6 */}
          <section id="returns-exchanges" className="space-y-4 pt-4 scroll-mt-32">
            <div className="border-b border-stone-200 pb-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#A84A28] block">Clause 06</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-stone-950 font-normal">
                6. Inspection, Returns & Ethical Exchange
              </h2>
              <span className="font-serif-bengali text-lg text-stone-500">
                পণ্য পরিদর্শন ও ফেরত নীতিমালা
              </span>
            </div>
            <p className="text-stone-700 leading-relaxed">
              Patrons have seven (7) calendar days from receipt to inspect non-custom items. In the rare event of structural damage incurred during transit, Janani Craft will promptly repair the artifact at our workshop or provide an authentic artisan replacement. Custom-tailored garments and specially commissioned guild masterworks are non-refundable once loom warp setup has commenced.
            </p>
          </section>

          {/* Section 7 */}
          <section id="liability-governance" className="space-y-4 pt-4 scroll-mt-32">
            <div className="border-b border-stone-200 pb-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#A84A28] block">Clause 07</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-stone-950 font-normal">
                7. Limitation of Liability & Applicable Law
              </h2>
              <span className="font-serif-bengali text-lg text-stone-500">
                দায়বদ্ধতার সীমাবদ্ধতা ও আইনি বিধান
              </span>
            </div>
            <p className="text-stone-700 leading-relaxed">
              These terms are governed exclusively by the laws of the People’s Republic of Bangladesh. Any dispute arising under these terms shall be resolved primarily through collaborative mediation, failing which the courts of Dhaka, Bangladesh shall hold exclusive jurisdiction.
            </p>
          </section>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            5. CORPORATE DOMICILE & INQUIRY CARD
        ───────────────────────────────────────────────────────────── */}
        <div className="p-5 sm:p-10 lg:p-12 bg-white border border-stone-200 rounded-[1px] space-y-6 sm:space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
            <div className="md:col-span-7 space-y-3">
              <span className="text-xs font-mono uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#B88E3E] font-semibold block">
                Artisanal Inquiries & Contract Secretariat
              </span>
              <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-stone-950 font-normal">
                Janani Craft & Fashion Legal Office
              </h3>
              <p className="text-xs sm:text-base text-stone-600 leading-relaxed font-sans">
                Operating in direct partnership with Rapid Agro Care Limited to promote sustainable agricultural fibers, handloom weaving, and ethical supply-chain transparency.
              </p>
              <div className="pt-2 font-mono text-xs text-stone-600 space-y-1.5 sm:space-y-1">
                <p><strong className="text-stone-900">Headquarters:</strong> Sakrail, Manikganj, Dhaka Division, Bangladesh</p>
                <p className="break-all sm:break-normal"><strong className="text-stone-900">Commercial Secretariat:</strong> info@jananicraft.com / +880 1713-000000</p>
              </div>
            </div>

            <div className="md:col-span-5 flex flex-col gap-2.5 sm:gap-3 justify-center">
              <Link
                href="/contact"
                className="w-full text-center px-4 py-3.5 sm:px-6 bg-stone-950 text-white hover:bg-[#A84A28] transition-colors rounded-[1px] font-mono text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] font-semibold"
              >
                Inquire About Wholesale Terms →
              </Link>
              <Link
                href="/privacy"
                className="w-full text-center px-4 py-3.5 sm:px-6 bg-[#FAF8F5] text-stone-800 border border-stone-300 hover:border-stone-900 transition-colors rounded-[1px] font-mono text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] font-semibold"
              >
                Review Privacy Policy →
              </Link>
              <Link
                href="/collections"
                className="w-full text-center px-4 py-3.5 sm:px-6 bg-white text-[#A84A28] border border-[#A84A28]/30 hover:border-[#A84A28] transition-colors rounded-[1px] font-mono text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] font-semibold"
              >
                Explore Handcrafted Collections →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
