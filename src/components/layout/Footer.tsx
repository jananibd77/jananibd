import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full text-stone-900 border-t border-stone-200">

      {/* ── Main Footer Links — bg-6 background ── */}
      <div className="relative w-full overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/bg-6.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
          aria-hidden="true"
        />
        {/* Warm white scrim — keeps text readable without hiding the image */}
        <div className="absolute inset-0 bg-white/25 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-3.5 sm:space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl sm:text-4xl tracking-tight text-stone-900 block font-semibold">
                JANANI
              </span>
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-stone-500 font-mono mt-0.5 block">
                Craft &amp; Fashion · Weaving Factory · Agro Care
              </span>
            </Link>

            <p className="text-stone-900 text-xs sm:text-sm leading-relaxed max-w-md font-medium">
              M/S Janani Craft &amp; Fashion, M/S Janani Weaving Factory, and Rapid Agro Care.
              Dedicated to rural handloom weaving empowerment, exclusive menswear tailoring,
              and sustainable agricultural distribution in Manikganj.
            </p>

            <div className="pt-2 text-stone-900 text-xs font-mono space-y-1.5 border-t border-stone-400">
              <p>
                <strong className="text-stone-700 uppercase">Head Office:</strong> {siteConfig.contact.address}
              </p>
              <p className="break-words">
                <strong className="text-stone-700 uppercase">Direct Cells:</strong>{" "}
                {siteConfig.contact.phoneNumbers.join(" · ")}
              </p>
              <p className="break-all sm:break-normal">
                <strong className="text-stone-700 uppercase">Official Email:</strong> {siteConfig.contact.email}
              </p>
            </div>
          </div>

          {/* Sister Concerns Column */}
          <div className="space-y-3.5">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#B88E3E] font-mono font-semibold">
              Sister Concerns
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-800">
              <li>
                <Link
                  href="/collections?category=traditional-wear"
                  className="hover:text-[#A84A28] transition-colors font-semibold text-stone-950"
                >
                  M/S Janani Craft &amp; Fashion
                </Link>
                <span className="block text-[11px] text-stone-700">Exclusive Panjabi &amp; Fatua</span>
              </li>
              <li className="pt-1">
                <Link
                  href="/collections?category=weaving-factory"
                  className="hover:text-[#A84A28] transition-colors font-medium text-stone-800"
                >
                  M/S Janani Weaving Factory
                </Link>
                <span className="block text-[11px] text-stone-500">Quality Endi Fab, H/S Sharee &amp; Orna</span>
              </li>
              <li className="pt-1">
                <Link
                  href="/contact?concern=rapid-agro-care"
                  className="hover:text-[#A84A28] transition-colors font-medium text-stone-800"
                >
                  Rapid Agro Care
                </Link>
                <span className="block text-[11px] text-stone-700">Fish Feed &amp; Fish Cultivation</span>
              </li>
            </ul>
          </div>

          {/* Collections Links */}
          <div className="space-y-3.5">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#B88E3E] font-mono font-semibold">
              Collections &amp; Craft
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-900 font-medium">
              {siteConfig.footerLinks.collections.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-[#A84A28] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Leadership */}
          <div className="space-y-3.5">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#B88E3E] font-mono font-semibold">
              Leadership &amp; Office
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-900 font-medium">
              {siteConfig.footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-[#A84A28] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom Copyright Bar — clean white ── */}
      <div className="border-t border-stone-200 py-5 sm:py-6 bg-white">
        <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs text-stone-600 font-mono text-center sm:text-left">
          <p>
            © {currentYear} Janani Enterprise. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-stone-800 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-stone-300" aria-hidden="true">·</span>
            <Link href="/terms" className="hover:text-stone-800 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
