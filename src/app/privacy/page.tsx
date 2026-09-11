import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { KanthaDivider } from "@/components/ui/KanthaDivider";

export const metadata: Metadata = {
  title: "Privacy Policy & Patron Data Integrity | Janani Craft",
  description:
    "Review Janani Craft & Fashion's privacy policy, institutional data standards, and ethical digital commitments for patrons, corporate clients, and museum partners.",
  openGraph: {
    title: "Privacy Policy | Janani Craft & Fashion",
    description:
      "Patron data governance, fair-trade confidentiality, and privacy standards.",
  },
};

const SECTIONS = [
  { id: "commitment", title: "1. Institutional Commitment & Ethical Scope", bengali: "প্রাতিষ্ঠানিক অঙ্গীকার ও পরিধি" },
  { id: "collection", title: "2. Information We Collect & Archival Inquiries", bengali: "তথ্য সংগ্রহ ও অনুসন্ধান বিবরণ" },
  { id: "usage", title: "3. Operational Use & Guild Coordination", bengali: "তথ্যের ব্যবহার ও কারিগর সমন্বয়" },
  { id: "artisan-rights", title: "4. Artisan Likeness & Cultural Heritage Integrity", bengali: "কারিগরদের অধিকার ও সাংস্কৃতিক মর্যাদা" },
  { id: "telemetry", title: "5. Digital Telemetry & Cookie Governance", bengali: "ডিজিটাল টেলিমেট্রি ও কুকি নীতি" },
  { id: "retention", title: "6. Data Retention, Storage & Security", bengali: "তথ্য সংরক্ষণ ও নিরাপত্তা প্রটোকল" },
  { id: "rights", title: "7. Patron Rights, Correction & Erasure", bengali: "গ্রাহকের অধিকার ও তথ্য সংশোধন" },
  { id: "contact", title: "8. Data Protection Officer & Legal Domicile", bengali: "যোগাযোগ ও আইনি তথ্য" },
];

export default function PrivacyPage() {
  return (
    <div className="w-full bg-[#FAF8F5] pt-24 sm:pt-32 lg:pt-36 pb-12 sm:pb-20 lg:pb-28 border-b border-stone-200">
      <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 space-y-10 sm:space-y-16">
        {/* ─────────────────────────────────────────────────────────────
            1. EDITORIAL HEADER & METADATA MASTHEAD
        ───────────────────────────────────────────────────────────── */}
        <header className="space-y-4 sm:space-y-6 border-b border-stone-200 pb-8 sm:pb-12">
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.28em] text-[#B88E3E] font-mono font-semibold">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#A84A28] rounded-[1px] inline-block shrink-0" />
            <span>Legal Directives & Patron Data Governance · Janani Enterprise</span>
          </div>

          <div className="space-y-2 sm:space-y-3">
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-stone-950 font-normal tracking-tight leading-[1.12]">
              Privacy Policy & Patron Data Integrity<span className="text-[#A84A28]">.</span>
            </h1>
            <p className="font-serif-bengali text-xl sm:text-2xl md:text-3xl text-[#A84A28] font-normal leading-relaxed">
              গোপনীয়তা নীতি ও গ্রাহক তথ্য সুরক্ষা বিধান
            </p>
          </div>

          <p className="text-sm sm:text-base lg:text-lg text-stone-700 leading-relaxed font-sans pt-1">
            Janani Craft & Fashion operates under strict ethical standards of artisanal transparency, patron confidentiality, and fair-trade integrity. This charter outlines our obligations in handling patron inquiries, wholesale specifications, and cultural research interactions.
          </p>

          {/* Policy Vital Signs Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4 border-t border-stone-200/80 font-mono text-[11px] sm:text-xs">
            <div className="space-y-0.5 sm:space-y-1">
              <span className="text-stone-400 block text-[9px] sm:text-[10px] uppercase tracking-wider">Effective Date</span>
              <span className="text-stone-900 font-medium">October 15, 2025</span>
            </div>
            <div className="space-y-0.5 sm:space-y-1">
              <span className="text-stone-400 block text-[9px] sm:text-[10px] uppercase tracking-wider">Document Version</span>
              <span className="text-stone-900 font-medium">v2.4 (Enterprise & Retail)</span>
            </div>
            <div className="space-y-0.5 sm:space-y-1">
              <span className="text-stone-400 block text-[9px] sm:text-[10px] uppercase tracking-wider">Regulatory Alignment</span>
              <span className="text-stone-900 font-medium">GDPR & BD Data Act</span>
            </div>
            <div className="space-y-0.5 sm:space-y-1">
              <span className="text-stone-400 block text-[9px] sm:text-[10px] uppercase tracking-wider">Governing Office</span>
              <span className="text-stone-900 font-medium">Manikganj Secretariat</span>
            </div>
          </div>
        </header>

        {/* ─────────────────────────────────────────────────────────────
            2. THREE CORE PRIVACY PILLARS
        ───────────────────────────────────────────────────────────── */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="p-5 sm:p-6 bg-white border border-stone-200 rounded-[1px] space-y-2.5 sm:space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A84A28] font-semibold block">
              Pillar I · Zero Marketing Sale
            </span>
            <h3 className="font-serif text-lg sm:text-xl text-stone-950 font-normal">
              Zero Commercial Data Brokering
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
              We never monetize, rent, or sell patron contact lists, design inquiries, or institutional purchasing orders to third-party ad networks or data aggregators.
            </p>
          </div>

          <div className="p-5 sm:p-6 bg-white border border-stone-200 rounded-[1px] space-y-2.5 sm:space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#B88E3E] font-semibold block">
              Pillar II · Cultural Dignity
            </span>
            <h3 className="font-serif text-lg sm:text-xl text-stone-950 font-normal">
              Artisan & Guild Protection
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
              Documentation of indigenous weavers and metal-casters is conducted solely with free, prior, and informed consent, safeguarding oral histories and artisan dignity.
            </p>
          </div>

          <div className="p-5 sm:p-6 bg-white border border-stone-200 rounded-[1px] space-y-2.5 sm:space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#192A45] font-semibold block">
              Pillar III · Strict Security
            </span>
            <h3 className="font-serif text-lg sm:text-xl text-stone-950 font-normal">
              Encrypted Inquiry Channels
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
              All bespoke commissions, measurements, and corporate procurement inquiries are transmitted via encrypted TLS 1.3 channels and archived in secure, restricted repositories.
            </p>
          </div>
        </section>

        {/* Running Stitch Divider */}
        <KanthaDivider />

        {/* ─────────────────────────────────────────────────────────────
            3. QUICK TABLE OF CONTENTS
        ───────────────────────────────────────────────────────────── */}
        <nav className="p-5 sm:p-6 bg-white border border-stone-200 rounded-[1px] space-y-3 sm:space-y-4">
          <span className="text-xs uppercase tracking-[0.2em] font-mono font-semibold text-[#A84A28] block">
            Table of Governance Clauses
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 text-xs font-mono">
            {SECTIONS.map((sec) => (
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
            4. DETAILED POLICY CLAUSES
        ───────────────────────────────────────────────────────────── */}
        <div className="space-y-10 sm:space-y-12 text-stone-800 font-sans leading-relaxed text-sm sm:text-base lg:text-lg">
          {/* Section 1 */}
          <section id="commitment" className="space-y-4 pt-4 scroll-mt-32">
            <div className="border-b border-stone-200 pb-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#A84A28] block">Clause 01</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-stone-950 font-normal">
                1. Institutional Commitment & Ethical Scope
              </h2>
              <span className="font-serif-bengali text-lg text-stone-500">
                প্রাতিষ্ঠানিক অঙ্গীকার ও পরিধি
              </span>
            </div>
            <p className="text-stone-700 leading-relaxed">
              Janani Craft & Fashion (“Janani Craft”, “we”, “our”, or “us”) operates artisanal workshops and distribution facilities headquartered in Manikganj, Bangladesh, with corporate coordination offices in Dhaka. We are committed to maintaining the highest ethical benchmarks regarding personal information submitted through our website (<Link href="/" className="text-[#A84A28] underline underline-offset-4">jananicraft.com</Link>), field exhibitions, and bespoke craft dispatches.
            </p>
            <p className="text-stone-700 leading-relaxed">
              This policy governs interactions across all digital channels, direct artisan inquiry modals, corporate catalog requests, and educational partnerships involving our sister enterprises including <em>Rapid Agro Care Limited</em>.
            </p>
          </section>

          {/* Section 2 */}
          <section id="collection" className="space-y-4 pt-4 scroll-mt-32">
            <div className="border-b border-stone-200 pb-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#A84A28] block">Clause 02</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-stone-950 font-normal">
                2. Information We Collect & Archival Inquiries
              </h2>
              <span className="font-serif-bengali text-lg text-stone-500">
                তথ্য সংগ্রহ ও অনুসন্ধান বিবরণ
              </span>
            </div>
            <p className="text-stone-700 leading-relaxed">
              We collect information solely when voluntarily transmitted by patrons and institutional clients seeking handcrafted goods or cultural documentation:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-stone-700">
              <li>
                <strong>Direct Dispatch & Inquiry Details:</strong> Full legal name, studio or corporate affiliation, professional email address, telephone contact, and geographical shipping jurisdiction.
              </li>
              <li>
                <strong>Bespoke Craft Specifications:</strong> Custom sizing measurements for handloom panjabi or fatua garments, bolt lengths for Endi silk than kapor, and specific hand-cast alloy requirements for Dhamrai Kansha brassware.
              </li>
              <li>
                <strong>Institutional & Wholesale Procurement:</strong> Quantity demands, delivery timelines, and tax registration identifiers necessary for formal commercial billing and export compliance.
              </li>
            </ul>
            <div className="p-4 bg-white border-l-2 border-[#A84A28] border border-stone-200 rounded-[1px] text-xs sm:text-sm font-mono text-stone-600">
              Note: We do not store sensitive payment card numbers on our local servers; all financial transactions are processed through authorized commercial banking institutions under bilateral escrow agreements.
            </div>
          </section>

          {/* Section 3 */}
          <section id="usage" className="space-y-4 pt-4 scroll-mt-32">
            <div className="border-b border-stone-200 pb-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#A84A28] block">Clause 03</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-stone-950 font-normal">
                3. Operational Use & Guild Coordination
              </h2>
              <span className="font-serif-bengali text-lg text-stone-500">
                তথ্যের ব্যবহার ও কারিগর সমন্বয়
              </span>
            </div>
            <p className="text-stone-700 leading-relaxed">
              The information you provide is utilized exclusively for genuine artisanal, logistic, and communicative operations:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-stone-700">
              <li>To schedule loom allocation and hand-spinning schedules with our Manikganj master tantis (weavers).</li>
              <li>To generate verifiable certificates of provenance, GI badges, and handcraft authenticity seals attached to your bespoke order.</li>
              <li>To transmit order status dispatches, courier tracking credentials, and delivery confirmations.</li>
              <li>To respond directly to academic inquiries from curators, ethnographers, and textile researchers.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section id="artisan-rights" className="space-y-4 pt-4 scroll-mt-32">
            <div className="border-b border-stone-200 pb-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#A84A28] block">Clause 04</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-stone-950 font-normal">
                4. Artisan Likeness & Cultural Heritage Integrity
              </h2>
              <span className="font-serif-bengali text-lg text-stone-500">
                কারিগরদের অধিকার ও সাংস্কৃতিক মর্যাদা
              </span>
            </div>
            <p className="text-stone-700 leading-relaxed">
              As custodians of Bengali heritage, Janani Craft protects the human rights and privacy of our artisan partners:
            </p>
            <p className="text-stone-700 leading-relaxed">
              All documentary recordings, workshop photographs, and artisan quotes featured on Janani Craft digital platforms are created under transparent community agreements. Artisans retain rights to their names, family legacy narratives, and cultural techniques. External parties are strictly prohibited from scraping, re-publishing, or commercially exploiting artisan photographs without bilateral legal consent.
            </p>
          </section>

          {/* Section 5 */}
          <section id="telemetry" className="space-y-4 pt-4 scroll-mt-32">
            <div className="border-b border-stone-200 pb-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#A84A28] block">Clause 05</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-stone-950 font-normal">
                5. Digital Telemetry & Cookie Governance
              </h2>
              <span className="font-serif-bengali text-lg text-stone-500">
                ডিজিটাল টেলিমেট্রি ও কুকি নীতি
              </span>
            </div>
            <p className="text-stone-700 leading-relaxed">
              Our web infrastructure is engineered for minimal digital footprint and uncompromising speed. We do not employ intrusive cross-site tracking pixels, keystroke loggers, or behavioral advertisement cookies.
            </p>
            <p className="text-stone-700 leading-relaxed">
              Essential session cookies may be utilized strictly to preserve inquiry draft states, manage interface preferences, and guarantee cryptographic CSRF safety during form transmission. Patrons may configure browser preferences to decline non-essential cookies without losing access to our craft catalog.
            </p>
          </section>

          {/* Section 6 */}
          <section id="retention" className="space-y-4 pt-4 scroll-mt-32">
            <div className="border-b border-stone-200 pb-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#A84A28] block">Clause 06</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-stone-950 font-normal">
                6. Data Retention, Storage & Security
              </h2>
              <span className="font-serif-bengali text-lg text-stone-500">
                তথ্য সংরক্ষণ ও নিরাপত্তা প্রটোকল
              </span>
            </div>
            <p className="text-stone-700 leading-relaxed">
              Patron inquiry records and transaction histories are retained in secure, access-controlled archival databases for a duration reasonably necessary to fulfill warranty obligations, provenance validation, and statutory tax audits under Bangladesh enterprise law (typically up to seven calendar years).
            </p>
            <p className="text-stone-700 leading-relaxed">
              Physical documents and fabric swatch archives maintained at our Manikganj workshop are safeguarded under 24/7 security protocols, climate control, and strict departmental need-to-know access limitations.
            </p>
          </section>

          {/* Section 7 */}
          <section id="rights" className="space-y-4 pt-4 scroll-mt-32">
            <div className="border-b border-stone-200 pb-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#A84A28] block">Clause 07</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-stone-950 font-normal">
                7. Patron Rights, Correction & Erasure
              </h2>
              <span className="font-serif-bengali text-lg text-stone-500">
                গ্রাহকের অধিকার ও তথ্য সংশোধন
              </span>
            </div>
            <p className="text-stone-700 leading-relaxed">
              Regardless of your citizenship or geographic location, Janani Craft extends comprehensive patron data rights:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white border border-stone-200 rounded-[1px] space-y-1">
                <span className="font-mono text-xs text-[#A84A28] uppercase font-semibold">Right to Inspect</span>
                <p className="text-sm text-stone-600">Request a complete transcript of all personal and commercial records stored under your profile.</p>
              </div>
              <div className="p-4 bg-white border border-stone-200 rounded-[1px] space-y-1">
                <span className="font-mono text-xs text-[#A84A28] uppercase font-semibold">Right to Rectify</span>
                <p className="text-sm text-stone-600">Update incomplete, outdated, or inaccurate studio address and billing details at any time.</p>
              </div>
              <div className="p-4 bg-white border border-stone-200 rounded-[1px] space-y-1">
                <span className="font-mono text-xs text-[#A84A28] uppercase font-semibold">Right to Erasure</span>
                <p className="text-sm text-stone-600">Request the permanent purging of your contact records from active inquiry databases.</p>
              </div>
              <div className="p-4 bg-white border border-stone-200 rounded-[1px] space-y-1">
                <span className="font-mono text-xs text-[#A84A28] uppercase font-semibold">Right to Portability</span>
                <p className="text-sm text-stone-600">Obtain an export of your customized tailoring specifications and historical order archives.</p>
              </div>
            </div>
          </section>

          {/* Section 8 */}
          <section id="contact" className="space-y-4 pt-4 scroll-mt-32">
            <div className="border-b border-stone-200 pb-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#A84A28] block">Clause 08</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-stone-950 font-normal">
                8. Data Protection Officer & Legal Domicile
              </h2>
              <span className="font-serif-bengali text-lg text-stone-500">
                যোগাযোগ ও আইনি তথ্য
              </span>
            </div>
            <p className="text-stone-700 leading-relaxed">
              To exercise any statutory privacy rights, submit a data audit request, or report a governance concern, please contact our appointed Data Protection Secretariat directly:
            </p>
          </section>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            5. OFFICIAL LEGAL REGISTRATION & CONTACT DOSSIER
        ───────────────────────────────────────────────────────────── */}
        <div className="p-5 sm:p-10 lg:p-12 bg-white border border-stone-200 rounded-[1px] space-y-6 sm:space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
            <div className="md:col-span-7 space-y-3">
              <span className="text-xs font-mono uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#B88E3E] font-semibold block">
                Official Corporate Domicile
              </span>
              <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-stone-950 font-normal">
                Janani Craft & Fashion Secretariat
              </h3>
              <p className="text-xs sm:text-base text-stone-600 leading-relaxed font-sans">
                A sister concern of Rapid Agro Care Limited. Dedicated to the preservation, ethical manufacture, and international patronage of traditional Bengali handcrafts.
              </p>
              <div className="pt-2 font-mono text-xs text-stone-600 space-y-1.5 sm:space-y-1">
                <p><strong className="text-stone-900">Registered Workshop:</strong> Sakrail, Manikganj, Dhaka Division, Bangladesh</p>
                <p className="break-all sm:break-normal"><strong className="text-stone-900">Direct Inquiries:</strong> info@jananicraft.com / +880 1713-000000</p>
                <p><strong className="text-stone-900">Corporate Portal:</strong> rapidagrocare.com / jananicraft.com</p>
              </div>
            </div>

            <div className="md:col-span-5 flex flex-col gap-2.5 sm:gap-3 justify-center">
              <Link
                href="/contact"
                className="w-full text-center px-4 py-3.5 sm:px-6 bg-stone-950 text-white hover:bg-[#A84A28] transition-colors rounded-[1px] font-mono text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] font-semibold"
              >
                Transmit Privacy Request →
              </Link>
              <Link
                href="/terms"
                className="w-full text-center px-4 py-3.5 sm:px-6 bg-[#FAF8F5] text-stone-800 border border-stone-300 hover:border-stone-900 transition-colors rounded-[1px] font-mono text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] font-semibold"
              >
                Review Terms of Service →
              </Link>
              <Link
                href="/about"
                className="w-full text-center px-4 py-3.5 sm:px-6 bg-white text-[#A84A28] border border-[#A84A28]/30 hover:border-[#A84A28] transition-colors rounded-[1px] font-mono text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] font-semibold"
              >
                Explore Living Guilds Heritage →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
