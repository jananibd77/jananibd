import React, { Suspense } from "react";
import type { Metadata } from "next";
import { ContactClient } from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact & Institutional Inquiries | Janani Enterprise",
  description:
    "Connect with M/S Janani Craft & Fashion, M/S Janani Weaving Factory, and Rapid Agro Care at Sakrail, Gorpara, Manikgonj for handloom textiles, exclusive Panjabi tailoring, and agro distribution.",
};

export default function ContactPage() {
  return (
    <div className="w-full bg-[#FAF8F5] pt-24 sm:pt-32 lg:pt-36 pb-12 sm:pb-20 lg:pb-24 border-b border-stone-200">
      <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 space-y-10 sm:space-y-16">
        {/* Page Header */}
        <div className="w-full lg:w-3/4 space-y-2.5 sm:space-y-3">
          <div className="flex items-center gap-3">
            <span className="block w-6 sm:w-8 h-px bg-[#B88E3E]" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#B88E3E] font-mono font-semibold">
              Official Communications
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-7xl text-stone-900 font-normal tracking-tight leading-[1.05]">
            Connect With Janani Enterprise
          </h1>
          <p className="font-serif-bengali text-xl sm:text-2xl md:text-3xl text-[#A84A28]">
            যোগাযোগ ও প্রাতিষ্ঠানিক অনুসন্ধান · সাকরাইল, গড়পাড়া, মানিকগঞ্জ
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-stone-600 leading-relaxed font-sans pt-1 max-w-3xl">
            Direct management access for handloom fabric bolts, tailored menswear collections, and agricultural distribution in Manikganj.
          </p>
        </div>

        {/* Client Interactive Filter & Form inside Suspense */}
        <Suspense
          fallback={
            <div className="py-24 text-center text-sm sm:text-base font-mono text-stone-500">
              Loading corporate communication portal...
            </div>
          }
        >
          <ContactClient />
        </Suspense>
      </div>
    </div>
  );
}
