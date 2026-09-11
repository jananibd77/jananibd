"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CraftLineItem {
  id: string;
  num: string;
  bengaliNum: string;
  title: string;
  bengaliTitle: string;
  categoryTag: string;
  image: string;
  alt: string;
  detailImage?: string;
  detailAlt?: string;
  detailLabel?: string;
  detailBengaliLabel?: string;
  galleryTitle?: string;
  galleryBengaliTitle?: string;
  galleryVariants?: {
    image: string;
    title: string;
    bengaliTitle: string;
    palette: string;
    alt: string;
  }[];
  summary: string;
  bengaliSummary: string;
  materials: string[];
  dimensions: string;
  artisanCluster: string;
  href: string;
}

const craftLineItems: CraftLineItem[] = [
  {
    id: "panjabi",
    num: "01",
    bengaliNum: "০১",
    title: "Exclusive Hand-Embroidered Panjabi & Handloom Fatua",
    bengaliTitle: "সকল পাঞ্জাবি ও ঐতিহ্যবাহী ফতুয়া সম্ভার",
    categoryTag: "Atelier Menswear",
    image: "/images/panjabi_atelier_exhibition.png",
    alt: "Designer Bengali Panjabi in pure combed Adi Dhuti cotton with crimson and gold collar embroidery on tailor form",
    detailImage: "/images/panjabi_collar_focus_macro.jpg",
    detailAlt: "Macro close-up of mandarin collar hand-needlework floral vine and natural shell buttons",
    detailLabel: "COLLAR MACRO",
    detailBengaliLabel: "কলার ও বোতামের সূচিকর্ম",
    galleryTitle: "Handcrafted Panjabi & Fatua Colorway Editions",
    galleryBengaliTitle: "পাঞ্জাবি ও ফতুয়ার নান্দনিক সংস্করণ ও কালার কম্বিনেশন",
    galleryVariants: [
      {
        image: "/images/panjabi_white_maroon_mannequin.png",
        title: "Bengali Classic White & Maroon",
        bengaliTitle: "সাদা ও খয়েরি ক্লাসিক পাঞ্জাবি",
        palette: "White Cotton & Maroon Thread",
        alt: "Mannequin presentation of classic white Adi Dhuti cotton Panjabi with maroon needlework",
      },
      {
        image: "/images/panjabi_skyblue_floral_mannequin.png",
        title: "Serene Sky Blue Floral Edition",
        bengaliTitle: "আকাশী জমিনে গাঢ় নীল ফ্লোরাল এমব্রয়ডারি",
        palette: "Sky Blue & Royal Indigo",
        alt: "Sky blue combed cotton Panjabi with royal blue floral vine needlework on mannequin",
      },
      {
        image: "/images/panjabi_cuff_tailoring_focus.jpg",
        title: "Bespoke Barrel Cuffs & French Seams",
        bengaliTitle: "হাতের কাফে টোনাল স্টিচ ও নিখুঁত ফিনিশিং",
        palette: "Single-Needle Bespoke Finish",
        alt: "Precision tailoring detail of Panjabi barrel cuff and enclosed French seams",
      },
      {
        image: "/images/fatua_kora_ecru_mannequin.png",
        title: "Handloom Deshi Cotton Fatua",
        bengaliTitle: "কোরা এক্রু ও খাদি সুতির ঐতিহ্যবাহী ফতুয়া",
        palette: "Unbleached Kora & Coconut Buttons",
        alt: "Artisanal handloom cotton Fatua in unbleached kora ecru with terracotta needlework yoke and carved coconut buttons",
      },
    ],
    summary:
      "Complete menswear cultural attire lineup tailored from 100% pure combed Adi Dhuti cotton and unbleached handloom Deshi cotton. Highlights bespoke mandarin collar needlework, enclosed French seams, natural shell buttons, and breathable summer Fatuas crafted at our Sakrail atelier.",
    bengaliSummary:
      "আদি ধুতি সুতি কাপড়ে নিপুণ দর্জি কারুকাজ, কলার ও প্লাকেটে সোনালী ও খয়েরি সুঁই-সুতার নকশা, আসল মুক্তার বোতাম এবং আরামদায়ক তাঁতের ফতুয়ার সমন্বয়ে সম্পূর্ণ পুরুষদের পোশাক সম্ভার।",
    materials: ["100% Combed Adi Dhuti Cotton", "Handloom Deshi Cotton", "Antique Gold Zari & Silk Threads", "Natural Mother-of-Pearl & Coconut Buttons"],
    dimensions: "Tailored chest sizes: 38, 40, 42, 44, 46 (Panjabi & Fatua)",
    artisanCluster: "M/S Janani Craft & Fashion, Sakrail Atelier, Manikgonj",
    href: "/collections#panjabi",
  },
  {
    id: "three-piece",
    num: "02",
    bengaliNum: "০২",
    title: "Artisanal Boutique Three-Piece Collection",
    bengaliTitle: "ঐতিহ্যবাহী নকশী ও হ্যান্ডলুম থ্রি-পিস সম্ভার",
    categoryTag: "Women's Couture",
    image: "/images/threepiece_magenta_veranda_standing.png",
    alt: "Bengali model standing on garden veranda wearing handcrafted magenta-fuchsia and violet-purple three-piece with tassel orna",
    detailImage: "/images/threepiece_magenta_yoke_macro.png",
    detailAlt: "Macro close-up of intricate royal-blue and gold embroidered neckline yoke with vertical piping",
    detailLabel: "YOKE DETAIL",
    detailBengaliLabel: "বক্ষপটের সূক্ষ্ম লেইস ও সুই-সুতা",
    galleryTitle: "Handcrafted Colorways & Silhouette Editions",
    galleryBengaliTitle: "নতুন রঙ, ডিজাইন ও সিলুয়েট সম্ভার",
    galleryVariants: [
      {
        image: "/images/threepiece_magenta_model_seated.png",
        title: "Seated Heritage Drape",
        bengaliTitle: "বসা ভঙ্গিমায় ম্যাজেন্টা ও বেগুনি থ্রি-পিস",
        palette: "Vibrant Fuchsia & Deep Violet",
        alt: "Bengali model seated wearing fuchsia and violet salwar kameez with tassel dupatta",
      },
      {
        image: "/images/threepiece_emerald_jamdani_atelier.png",
        title: "Royal Emerald Jamdani",
        bengaliTitle: "পান্না সবুজ জামদানি থ্রি-পিস",
        palette: "Emerald Green & Antique Gold",
        alt: "Emerald green three-piece with gold zari Jamdani lattice work on atelier mannequin",
      },
      {
        image: "/images/threepiece_peach_couture_lifestyle.png",
        title: "Pastel Peach Cutwork",
        bengaliTitle: "পীচ-গোলাপি হ্যান্ডলুম কাটওয়ার্ক",
        palette: "Peach-Blush & Ivory",
        alt: "Bengali woman wearing pastel peach-blush three-piece with scalloped organza dupatta",
      },
      {
        image: "/images/threepiece_terracotta_indigo_mannequin.png",
        title: "Terracotta & Indigo Folk",
        bengaliTitle: "পোড়ামাটি ও নীল লোকজ থ্রি-পিস",
        palette: "Terracotta & River Indigo",
        alt: "Artisanal unstitched three-piece in terracotta and indigo with running-stitch yoke on mannequin",
      },
    ],
    summary:
      "Exclusive women's boutique ensemble pairing breathable combed Deshi cotton with intricate royal-blue and gold needlework, arched neckline yoke, and hand-knotted tassel dupatta. Encompasses jewel-tone magenta, royal emerald Jamdani, and delicate pastel cutwork.",
    bengaliSummary:
      "কোমল সুতি কাপড়ে নিপুণ সুই-সুতার কারুকাজ, নকশী গলা ও আঁচলে ঝালর যুক্ত ওড়নার সমন্বয়ে তৈরি অভিজাত পোশাক সম্ভার।",
    materials: ["Pure Combed Deshi Cotton", "Hand-Needlework Yoke Panel", "Geometric Border Tassel Dupatta", "Organza Cutwork Lace"],
    dimensions: "Unstitched fabric set / Tailored boutique regular & fitted sizes",
    artisanCluster: "Janani Women's Craft Guild, Manikganj",
    href: "/collections#three-piece",
  },
  {
    id: "dining-linens",
    num: "03",
    bengaliNum: "০৩",
    title: "Hand-Stitched Cotton Dining Table Runners & Linens Lineup",
    bengaliTitle: "নকশী সেলাই ডাইনিং রানার ও টেবিল লাইনার সম্ভার",
    categoryTag: "Dining Textiles & Linens",
    image: "/images/table_liner_dining.jpg",
    alt: "Handcrafted unbleached cotton dining table runner and placemat liners with Kantha running-stitch borders and edge tassels",
    summary:
      "Signature artisanal dining line featuring table runners and matching placemat liners crafted from durable unbleached handloom Deshi cotton. Accented with terracotta-charcoal Kantha running-stitch borders and playful hand-tied corner tassels, bringing Bengal's serene domestic warmth to modern dining tables.",
    bengaliSummary:
      "খাঁটি কোরা সুতি কাপড়ে তৈরি ডাইনিং রানার ও টেবিল লাইনার সেট; চারপাশের পাড়ে পোড়ামাটি ও কাঠকয়লা রঙের নকশী ফোঁড় এবং কোণায় হস্তনির্মিত ঝালর। আধুনিক ডাইনিং টেবিলকে বাংলার চিরায়ত ঐতিহ্যে সাজিয়ে তোলে।",
    materials: ["100% Handloom Deshi Cotton Canvas", "Kantha Running-Stitch Border (কাঁথা ফোঁড়)", "Hand-Tied Cotton Edge Tassels"],
    dimensions: "Table Runner: 72\" L × 14\" W (180x35cm); Placemat Liners: 18\" L × 12\" W (45x30cm)",
    artisanCluster: "M/S Janani Craft & Fashion, Sakrail Atelier, Manikganj",
    href: "/collections#home-textiles",
  },
  {
    id: "nakshi-kantha",
    num: "04",
    bengaliNum: "০৪",
    title: "Heirloom Lotus Mandala Nakshi Kantha & Living Stitching",
    bengaliTitle: "শতবর্ষী ঐতিহ্যবাহী পদ্ম নকশী কাঁথা ও জীবন্ত সেলাই",
    categoryTag: "Heirloom Needlecraft",
    image: "/images/nakshi_kantha_heirloom_spread.png",
    alt: "Heirloom Nakshi Kantha quilt spread out showing sacred eight-petal lotus mandala and dense running stitches",
    detailImage: "/images/artisan_women_hand_stitching_kantha.png",
    detailAlt: "Rural Bangladeshi women artisans sitting on village veranda hand-stitching Nakshi Kantha with needle and thread",
    detailLabel: "LIVING STITCHING",
    detailBengaliLabel: "গ্রামীণ নারীদের দলবদ্ধ সেলাই",
    summary:
      "Triple-layered unbleached cotton quilt unified entirely by the traditional running stitch (kantha fhor), radiating from a sacred eight-petal lotus mandala. Hand-stitched collaboratively by rural women artisans on village verandas across Jessore and Manikganj, keeping centuries of folk storytelling alive.",
    bengaliSummary:
      "তিন স্তরের কোরা সুতি কাপড়ে অবিরাম কাঁথা ফোঁড়ের ঢেউ; অষ্টদল পদ্ম, কলকা ও নদীমাতৃক বাংলার লোকজ গাথা। দাওয়ায় বসে গ্রামীণ নারী কারিগরদের দলবদ্ধ সেলাইয়ের অপরূপ দৃশ্য লোকজ শিল্পের এক জীবন্ত ঐতিহ্য।",
    materials: ["Unbleached Deshi Cotton Canvas", "Naturally Dyed Plant Threads", "100% Pure Running Stitch (কাঁথা ফোঁড়)"],
    dimensions: "7.5 ft x 5.0 ft (230 cm x 150 cm); Multi-month handwork",
    artisanCluster: "Jessore & Manikganj Master Kantha Circles",
    href: "/collections#nakshi-kantha",
  },
  {
    id: "wall-mat",
    num: "05",
    bengaliNum: "০৫",
    title: "Vibrant Folk Peacock & Riverboat Wall Mat",
    bengaliTitle: "রঙিন নকশী তরী ও ময়ূর ওয়ালমেট",
    categoryTag: "Textile Tapestry",
    image: "/images/colorful_embroidered_wall_mat.png",
    alt: "Vibrant colorful hand-embroidered fabric wall mat with riverboat and peacock motifs mounted on polished bamboo",
    summary:
      "Hand-embroidered folk tapestry depicting delta riverboats (ময়ূরপঙ্খী তরী) and royal peacocks, mounted on a seasoned natural bamboo hanging dowel with tassels.",
    bengaliSummary:
      "উজ্জ্বল রঙে হাতে সেলাই করা নদীমাতৃক তরী ও ময়ূরের প্রাচীর সজ্জা; বাঁশের দণ্ডে ঝুলানো নান্দনিক নকশী শিল্প।",
    materials: ["Layered Deshi Cotton Base", "Colorfast Mercerized Thread", "Seasoned Bamboo Hanging Dowel & Tassels"],
    dimensions: "Width: 26\" (66cm), Length: 38\" (96cm) plus fringe",
    artisanCluster: "M/S Janani Craft & Fashion, Manikganj",
    href: "/collections#wall-mat",
  },
  {
    id: "jute-bag",
    num: "06",
    bengaliNum: "০৬",
    title: "Modern Colorful Artisanal Jute Bags",
    bengaliTitle: "আধুনিক রঙিন সোনালী জুটব্যাগ",
    categoryTag: "Eco-Luxury Jute",
    image: "/images/colorful_jute_tote_bags.png",
    alt: "Colorful handcrafted golden jute tote bags with botanical prints and genuine leather handles",
    summary:
      "Premium colorful handcrafted golden jute tote bags with vibrant colorblocked panels, botanical mandalas, genuine leather handles, and water-resistant lining.",
    bengaliSummary:
      "সোনালী পাটের আধুনিক রূপান্তর—পোড়ামাটি, অলিভ ও নীল রঙের বৈচিত্র্য, মজবুত চামড়ার হাতল ও পরিবেশবান্ধব স্থায়িত্ব।",
    materials: ["Grade-A Tossa Golden Jute Fiber", "Genuine Dark Leather Handles", "Spillproof Coated Interior"],
    dimensions: "16\" width x 14\" height x 6\" base gusset",
    artisanCluster: "Janani Jute Handicrafts Workshop, Manikganj",
    href: "/collections#jute",
  },
  {
    id: "ladies-purse",
    num: "07",
    bengaliNum: "০৭",
    title: "Handcrafted Nakshi & Jute Ladies Purse",
    bengaliTitle: "মেয়েদের নকশী হ্যান্ড পার্স ও ক্লাচ",
    categoryTag: "Artisanal Purses",
    image: "/images/ladies_handcrafted_purse_clutch.png",
    alt: "Handcrafted ladies evening clutch purses combining Nakshi Kantha embroidery, golden jute, and antique brass frame",
    summary:
      "Exclusive women's evening clutch purse blending fine Nakshi Kantha embroidered silk with tightly woven golden jute and an antique brass kiss-lock metal frame.",
    bengaliSummary:
      "সিল্কের ওপর সূক্ষ্ম নকশী কাঁথা এবং সোনালী পাটের বুননে তৈরি মেয়েদের অভিজাত হ্যান্ড পার্স ও ভ্যানিটি ক্লাচ।",
    materials: ["Embroidered Nakshi Silk-Cotton", "Braided Golden Jute", "Antique Brass Kiss-Lock Metal Closure"],
    dimensions: "9.5\" length x 6.0\" height x 2.5\" depth",
    artisanCluster: "M/S Janani Craft & Fashion Atelier",
    href: "/collections#jute",
  },
  {
    id: "bamboo-cane",
    num: "08",
    bengaliNum: "০৮",
    title: "Pliant Bamboo & Cane Homeware",
    bengaliTitle: "বাঁশ ও বেতের ডাইনিং ও গৃহসজ্জা",
    categoryTag: "Pliant Fiber Craft",
    image: "/images/bamboo_cane_lifestyle_curation.png",
    alt: "Handwoven cane serving trays, bamboo fruit baskets, and dining homeware in warm honey tones",
    summary:
      "Hand-split and woven from mature riverbank bamboo and seasoned Sylhet cane. Features herringbone serving trays, deep fruit bowls, and dining organizers.",
    bengaliSummary:
      "সিলেটের খাঁটি বেত ও তিন বছরের পরিপক্ক বাঁশের সূক্ষ্ম বুননে তৈরি পরিবেশবান্ধব পরিবেশন ট্রে ও ঝুড়ি সম্ভার।",
    materials: ["Natural Sylhet Wild Cane (বেত)", "Seasoned Bengali Bamboo (বাঁশ)", "Organic Beeswax Sealant"],
    dimensions: "Tray: 18\" x 12\", Fruit Bowl: 11\" diameter",
    artisanCluster: "Janani Artisan Cooperatives, Manikganj & Sylhet",
    href: "/collections#bamboo-cane",
  },
  {
    id: "flower-vases",
    num: "09",
    bengaliNum: "০৯",
    title: "Handcrafted Cloth & Textile Flower Vases",
    bengaliTitle: "নকশী কাপড়ের নান্দনিক ফুলদানি",
    categoryTag: "Textile Vessels",
    image: "/images/cloth_and_folk_flower_vases.png",
    alt: "Artisanal handcrafted cloth flower vases with lotus needlework and cowrie shells on wooden console",
    summary:
      "Sculptural textile vases shaped from stiffened Deshi cotton canvas and golden jute, embellished with lotus needlework and sea cowrie shells for dried florals.",
    bengaliSummary:
      "সুতি ক্যানভাস ও পাটের শক্ত বুননে মাটির কলসির আদলে তৈরি ফুলদানি; কড়ি ও পদ্ম মোটিফের অপরূপ শিল্পকর্ম।",
    materials: ["Stiffened Deshi Cotton Canvas", "Natural Golden Jute Interfacing", "Genuine Sea Cowrie Shells (কড়ি)"],
    dimensions: "Cylindrical: 14\" ht, Pitcher: 13\" ht x 8.5\" width",
    artisanCluster: "M/S Janani Craft & Fashion Workshop",
    href: "/collections#cloth-vases",
  },
  {
    id: "showpieces",
    num: "10",
    bengaliNum: "১০",
    title: "Handcrafted Heritage Showpieces & Home Decor",
    bengaliTitle: "বাসা ও অফিসের ঐতিহ্যবাহী শো-পিস",
    categoryTag: "Heritage Artifacts",
    image: "/images/home_office_decorative_showpiece.png",
    alt: "Handcrafted terracotta earthenware pots, antique brass Kansha bowls, and artisanal showpieces for living room and office shelves",
    summary:
      "Artisanal decorative artifacts for home and corporate environments, combining hand-thrown clay earthenware, burnished Kansha brass, and bamboo pedestal stands.",
    bengaliSummary:
      "ঘর ও অফিসের সৌন্দর্য বর্ধনে পোড়ামাটির নান্দনিক পাত্র, কাঁসা-পিতলের শো-পিস ও ঐতিহ্যবাহী লোকজ কারুশিল্প।",
    materials: ["River Alluvial Clay (পোড়ামাটি)", "Hand-Cast Brass & Kansha (কাঁসা-পিতল)", "Treated Bamboo Display Base"],
    dimensions: "Various bespoke sizes for credenzas, desks, and consoles",
    artisanCluster: "Manikganj & Dhamrai Artisan Guilds",
    href: "/collections#showpieces",
  },
];

export function CraftAndFashionShowcase() {
  return (
    <section className="w-full bg-[#FAF8F5] border-b border-stone-200 py-16 sm:py-24 lg:py-32">
      <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 space-y-16 sm:space-y-20">
        
        {/* ── 1. Enterprise Section Header ─────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 sm:pb-12 border-b border-stone-200">
          <div className="space-y-4 max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-[#A84A28]" />
              <span className="text-xs uppercase tracking-[0.28em] font-mono font-bold text-[#A84A28]">
                ENTERPRISE DIVISION 02 &bull; মেসার্স জননী ক্রাফট অ্যান্ড ফ্যাশন
              </span>
            </div>

            <div className="space-y-2">
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-stone-950 font-normal tracking-tight leading-[1.08]">
                Janani Craft &amp; Fashion
              </h2>
              <p className="font-serif-bengali text-2xl sm:text-3xl lg:text-4xl text-[#A84A28] font-medium leading-snug">
                মেসার্স জননী ক্রাফট অ্যান্ড ফ্যাশন
              </p>
            </div>

            <p className="text-base sm:text-lg text-stone-700 font-sans leading-relaxed pt-1 max-w-2xl">
              ১০টি ঐতিহ্যবাহী পণ্যের সুবিন্যস্ত ধারাবাহিক সম্ভার: সকল পাঞ্জাবি ও ফতুয়া, থ্রি-পিস, ডাইনিং টেবিল রানার ও লাইনার, শতবর্ষী নকশী কাঁথা ও সেলাই দৃশ্য, রঙিন ওয়ালমেট, সোনালী জুটব্যাগ, মেয়েদের হ্যান্ড পার্স, বাঁশ-বেতের সামগ্রী, নকশী ফুলদানি এবং বাসা ও অফিসের শো-পিস।
            </p>
          </div>

          {/* Curation Count Badge */}
          <div className="shrink-0 border border-stone-200 bg-white rounded-[1px] p-4 sm:p-5 space-y-1.5 text-xs font-mono self-start lg:self-auto">
            <div className="flex items-center gap-2 text-[#A84A28] font-bold uppercase tracking-[0.2em]">
              <span className="w-2 h-2 bg-[#B88E3E] rotate-45 shrink-0" />
              <span>Artisanal Catalog</span>
            </div>
            <p className="text-stone-900 font-semibold text-sm">10 Handcrafted Disciplines</p>
            <p className="text-[#A84A28] font-semibold pt-0.5">100% Handmade &bull; Zero Compromise</p>
          </div>
        </div>

        {/* ── 2. Serial-by-Serial Showcase (All 10 Items Displayed Down the Page) ── */}
        <div className="space-y-16 sm:space-y-24 lg:space-y-32">
          {craftLineItems.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <article
                key={item.id}
                id={`item-${item.id}`}
                className="space-y-6 sm:space-y-8 scroll-mt-24"
              >
                {/* Item Header Strip */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-stone-200 pb-4">
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono text-[#A84A28] uppercase tracking-[0.2em] font-semibold block">
                      {item.categoryTag}
                    </span>

                    <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-stone-900 font-normal">
                      {item.title}
                    </h3>
                    <p className="font-serif-bengali text-lg sm:text-2xl text-[#B88E3E]">
                      {item.bengaliTitle}
                    </p>
                  </div>

                  <span className="text-xs font-mono text-stone-500 bg-white border border-stone-200 px-3 py-1.5 rounded-[1px] self-start sm:self-auto">
                    {item.artisanCluster.split(",")[0]}
                  </span>
                </div>

                {/* Split Photographic Grid (Zero Text on Images, Alternating Cadence) */}
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    !isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Master Image Frame (100% Clean & Pure, Zero Text on Images) */}
                  <div className={`${isEven ? "lg:col-span-6" : "lg:col-span-6 lg:order-2"}`}>
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                      <div className={`${item.detailImage ? "sm:col-span-8" : "sm:col-span-12"} relative aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden rounded-[1px]`}>
                        <Image
                          src={item.image}
                          alt={item.alt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover object-center transition-all duration-700 ease-out hover:scale-105"
                        />
                      </div>
                      {item.detailImage && (
                        <div className="sm:col-span-4 flex flex-col justify-between gap-2.5">
                          <div className="relative aspect-square sm:aspect-[4/5] w-full overflow-hidden rounded-[1px]">
                            <Image
                              src={item.detailImage}
                              alt={item.detailAlt || item.alt}
                              fill
                              sizes="(max-width: 1024px) 50vw, 20vw"
                              className="object-cover object-center transition-all duration-700 ease-out hover:scale-105"
                            />
                          </div>
                          <div className="pt-2 space-y-0.5">
                            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#A84A28] block">
                              {item.detailLabel || "DETAIL VIEW"}
                            </span>
                            <span className="font-serif-bengali text-xs text-stone-700 block">
                              {item.detailBengaliLabel || "সূক্ষ্ম কারুকাজ ও ফিনিশিং"}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Technical & Artisanal Details Dossier */}
                  <div className={`space-y-5 ${isEven ? "lg:col-span-6 lg:pl-4" : "lg:col-span-6 lg:pr-4 lg:order-1"}`}>
                    <div className="space-y-2.5">
                      <span className="text-xs uppercase tracking-[0.25em] text-[#B88E3E] font-mono font-bold block">
                        Artisanal Specification &bull; বিবরণ
                      </span>
                      <p className="text-stone-700 font-sans text-sm sm:text-base leading-relaxed">
                        {item.summary}
                      </p>
                      <div className="bg-[#FAF8F5] p-4 border-l-2 border-[#A84A28] rounded-[1px]">
                        <p className="font-serif-bengali text-stone-800 text-sm sm:text-base leading-relaxed">
                          {item.bengaliSummary}
                        </p>
                      </div>
                    </div>

                    {/* Specifications Box */}
                    <div className="border border-stone-200 rounded-[1px] bg-white divide-y divide-stone-200 text-xs sm:text-sm font-sans">
                      <div className="flex justify-between items-center px-4 py-2.5">
                        <span className="text-stone-500 font-mono text-[11px] uppercase tracking-wider">Materials Used</span>
                        <span className="text-stone-900 font-medium text-right">{item.materials.join(", ")}</span>
                      </div>
                      <div className="flex justify-between items-center px-4 py-2.5">
                        <span className="text-stone-500 font-mono text-[11px] uppercase tracking-wider">Dimensions / Sizing</span>
                        <span className="text-stone-900 font-medium text-right">{item.dimensions}</span>
                      </div>
                      <div className="flex justify-between items-center px-4 py-2.5">
                        <span className="text-stone-500 font-mono text-[11px] uppercase tracking-wider">Craftsmanship Hub</span>
                        <span className="text-[#A84A28] font-semibold text-right">{item.artisanCluster}</span>
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="pt-2 flex flex-col sm:flex-row gap-3">
                      <Link
                        href={item.href}
                        className="inline-flex justify-center items-center px-6 py-3 bg-stone-900 hover:bg-[#A84A28] text-white text-xs uppercase tracking-[0.2em] font-mono rounded-[1px] transition-colors"
                      >
                        <span>View In Archive</span>
                        <span className="ml-2">&rarr;</span>
                      </Link>
                      <Link
                        href="/contact?concern=janani-craft-fashion"
                        className="inline-flex justify-center items-center px-6 py-3 border border-stone-300 hover:border-stone-900 text-stone-900 text-xs uppercase tracking-[0.2em] font-mono rounded-[1px] transition-colors"
                      >
                        Order / Inquiry
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Optional Multi-Color & Design Variants Grid (Zero Text on Images) */}
                {item.galleryVariants && item.galleryVariants.length > 0 && (
                  <div className="pt-8 sm:pt-10 space-y-4">
                    <div className="flex items-center justify-between border-b border-stone-200 pb-2.5">
                      <div className="flex items-center gap-2">
                        <span className="w-4 h-px bg-[#B88E3E]" />
                        <h4 className="text-xs uppercase tracking-[0.2em] font-mono font-semibold text-stone-900">
                          {item.galleryTitle || "Handcrafted Colorways & Silhouette Editions"}
                        </h4>
                      </div>
                      <span className="text-[11px] font-mono text-stone-500 hidden sm:inline">
                        {item.galleryBengaliTitle || "নতুন রঙ, ডিজাইন ও সিলুয়েট সম্ভার"}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {item.galleryVariants.map((variant, vIdx) => (
                        <div key={vIdx} className="space-y-2">
                          {/* Pure Image Container (Zero Text on Image) */}
                          <div className="relative w-full aspect-[4/5] rounded-[1px] overflow-hidden">
                            <Image
                              src={variant.image}
                              alt={variant.alt}
                              fill
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                              className="object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
                            />
                          </div>

                          {/* Caption strictly OUTSIDE */}
                          <div className="space-y-0.5 pt-1">
                            <span className="inline-block text-[10px] font-mono uppercase tracking-wider text-[#A84A28] font-bold">
                              {variant.palette}
                            </span>
                            <div className="text-xs font-sans font-semibold text-stone-900">
                              {variant.title}
                            </div>
                            <div className="font-serif-bengali text-xs text-stone-600">
                              {variant.bengaliTitle}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Hairline Divider between serial items */}
                {idx < craftLineItems.length - 1 && (
                  <div className="pt-8 sm:pt-12 border-b border-stone-200/80" />
                )}
              </article>
            );
          })}
        </div>

        {/* ── 3. Bottom Callout Banner ───────────────────────────────────── */}
        <div className="w-full bg-white border border-stone-200 rounded-[1px] p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-[#A84A28] font-mono text-xs uppercase tracking-wider font-bold">
              <span>✦</span>
              <span>Bespoke Atelier Tailoring &bull; এক্সক্লুসিভ অর্ডার ও পাইকারি সরবরাহ</span>
            </div>
            <h4 className="font-serif text-2xl sm:text-3xl text-stone-900">
              Looking for Custom Sizes, Wedding Trousseau, or Corporate Gifts?
            </h4>
            <p className="text-sm sm:text-base text-stone-600 font-sans">
              Our Sakrail atelier master tailors and rural women artisans accept bespoke commissions
              for Panjabis, Fatuas, Three-Pieces, customized Nakshi Kanthas, and corporate gift showpieces.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
            <Link
              href="/collections"
              className="inline-flex justify-center items-center px-6 py-3.5 bg-stone-900 hover:bg-[#A84A28] text-white text-xs uppercase tracking-[0.2em] font-mono rounded-[1px] transition-colors text-center"
            >
              Explore Full Archive &rarr;
            </Link>
            <Link
              href="/contact?concern=janani-craft-fashion"
              className="inline-flex justify-center items-center px-6 py-3.5 border border-stone-300 hover:border-stone-900 text-stone-900 text-xs uppercase tracking-[0.2em] font-mono rounded-[1px] transition-colors text-center"
            >
              Inquire With Studio
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

export default CraftAndFashionShowcase;
