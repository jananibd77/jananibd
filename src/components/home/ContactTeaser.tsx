import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export function ContactTeaser() {
  return (
    <section className="w-full bg-white py-12 sm:py-20 lg:py-28 border-b border-stone-200">
      <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center border border-stone-200 p-5 sm:p-10 lg:p-14 rounded-[1px] bg-[#FAF7F2]">
          
          <div className="lg:col-span-8 space-y-3.5 sm:space-y-4">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <span className="block w-6 sm:w-8 h-px bg-[#B88E3E]" />
              <span className="text-[11px] sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.28em] text-[#B88E3E] font-mono font-semibold">
                ATELIER INQUIRIES &amp; BESPOKE WEAVING
              </span>
            </div>
            
            <div className="space-y-1.5 sm:space-y-2">
              <h3 className="font-serif text-2xl sm:text-4xl lg:text-[54px] text-stone-950 font-normal leading-[1.12] sm:leading-[1.08] tracking-tight">
                Have questions regarding custom crafting, yardage, or availability?
              </h3>
              <p className="font-serif-bengali text-xl sm:text-2xl md:text-3xl text-[#A84A28] font-medium pt-0.5 leading-snug">
                বিশেষ অর্ডার, থান কাপড় ও পাইকারি সরবরাহের জন্য যোগাযোগ করুন
              </p>
            </div>

            <p className="text-sm sm:text-base md:text-lg text-stone-700 leading-relaxed font-sans max-w-2xl pt-1">
              We welcome custom commissions from private collectors, interior architects, bridal houses, and
              institutional buyers. Visit our Manikganj weaving sheds or consult directly with our studio karigars.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-4 sm:gap-x-6 text-xs sm:text-sm font-mono text-stone-600">
              <span><strong>Head Office:</strong> {siteConfig.contact.address}</span>
              <span className="text-stone-300">·</span>
              <span><strong>Direct:</strong> {siteConfig.contact.phoneNumbers[0]}</span>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5 sm:gap-4 justify-center lg:items-end w-full">
            <Link
              href="/contact"
              className="h-12 sm:h-14 px-7 sm:px-9 bg-[#111827] hover:bg-[#A84A28] text-white text-xs sm:text-sm uppercase tracking-[0.22em] font-mono font-semibold transition-colors duration-300 rounded-[1px] inline-flex items-center justify-center gap-3 text-center group w-full sm:w-auto"
            >
              <span>Contact Studio</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
            <div className="text-center lg:text-right space-y-1">
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-stone-400 block">
                Official Inquiries
              </span>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-xs sm:text-base font-mono text-stone-800 hover:text-[#A84A28] transition-colors font-semibold block break-all sm:break-normal"
              >
                {siteConfig.contact.email}
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
