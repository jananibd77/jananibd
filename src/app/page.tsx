import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { WeavingFactoryShowcase } from "@/components/home/WeavingFactoryShowcase";
import { CraftAndFashionShowcase } from "@/components/home/CraftAndFashionShowcase";
import { RapidAgroCareShowcase } from "@/components/home/RapidAgroCareShowcase";
import { BrandStory } from "@/components/home/BrandStory";
import { JournalTeaser } from "@/components/home/JournalTeaser";
import { ContactTeaser } from "@/components/home/ContactTeaser";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section: Sovereign Overture */}
      <HeroSection />

      {/* 2. PART 1: জননী উইভিং ফ্যাক্টরি (Janani Weaving Factory) — প্রথমে থাকবে */}
      {/* Features: তাঁত ফ্যাক্টরি ছবি, থান কাপড়, সুতার ছবি, তারপর শাড়ি পড়া ছবি */}
      <div id="weaving-factory" className="w-full scroll-mt-20">
        <WeavingFactoryShowcase />
      </div>

      {/* 3. PART 2: জননী ক্রাফট এন্ড ফ্যাশন (Janani Craft & Fashion) — এরপর থাকবে */}
      {/* Features: সকল পাঞ্জাবি ও ফতুয়া এক সাথে, এরপর থ্রি পিস, ডাইনিং টেবিল রানার ও লাইনার সম্ভার, শতবর্ষী নকশী কাঁথা ও সেলাই দৃশ্য, রঙিন ওয়ালমেট, রঙিন জুটব্যাগ, মেয়েদের হ্যান্ড পার্স, বাঁশ-বেতের জিনিস, ফুলদানি, বাসা ও অফিসের শো-পিস */}
      <div id="craft-fashion" className="w-full scroll-mt-20">
        <CraftAndFashionShowcase />
      </div>

      {/* 4. PART 3: র‍্যাপিড এগ্রো কেয়ার (Rapid Agro Care) — তৃতীয় উইং */}
      {/* Features: মৎস্য খাদ্য ও একোয়াকালচার, ভেটেরিনারি ওষুধ ও প্রাণিসম্পদ সুরক্ষা, আঞ্চলিক সরবরাহ নেটওয়ার্ক */}
      <div id="rapid-agro" className="w-full scroll-mt-20">
        <RapidAgroCareShowcase />
      </div>

      {/* 5. Brand Story ("From the hands of artisans") */}
      <BrandStory />

      {/* 6. Editorial Artisan Journal Preview */}
      <JournalTeaser />

      {/* 7. Corporate Contact & Inquiries (Sakrail, Gorpara, Manikgonj) */}
      <ContactTeaser />
    </div>
  );
}
