export interface Product {
  id: string;
  slug: string;
  name: string;
  bengaliName: string;
  sisterConcern: "Janani Craft & Fashion" | "Janani Weaving Factory" | "Rapid Agro Care" | "Janani Handicrafts";
  category:
    | "nakshi-kantha"
    | "home-textiles"
    | "bamboo-cane"
    | "jute"
    | "traditional-wear"
    | "weaving-factory"
    | "agro-care";
  categoryLabel: string;
  shortDescription: string;
  description: string;
  images: {
    main: string;
    detail?: string;
    lifestyle?: string;
  };
  materials: string[];
  dimensions: string;
  colors: string[];
  availability:
    | "Permanent Archive"
    | "Handcrafted on Commission"
    | "Active Craft Practice"
    | "Studio Masterpiece"
    | "Active Handloom Production"
    | "Direct Distribution";
  featured?: boolean;
  newArrival?: boolean;
  handmade: boolean;
  craftInfo: {
    origin: string;
    technique: string;
    artisanRole: string;
    craftingDuration: string;
  };
  careInstructions: string[];
}

export const products: Product[] = [
  // 1. Janani Craft & Fashion: Exclusive White Adi Dhuti Embroidered Panjabi
  {
    id: "prod-panjabi-01",
    slug: "exclusive-handloom-embroidered-panjabi",
    name: "M/S Janani 100% Adi Dhuti Cotton Embroidered Panjabi",
    bengaliName: "মেসার্স জননী আদি ধুতি সুতি এমব্রয়ডারি পাঞ্জাবি",
    sisterConcern: "Janani Craft & Fashion",
    category: "traditional-wear",
    categoryLabel: "Exclusive Panjabi & Fatua",
    shortDescription:
      "Signature men's Panjabi tailored from 100% pure Adi Dhuti combed cotton, embellished with antique gold and crimson maroon collar needlework.",
    description:
      "Manufactured exclusively by M/S Janani Craft & Fashion in Manikganj. Tailored from premium 100% combed Adi Dhuti cotton fabric (আদি ধুতি কাপড়) offering superlative breathability in delta climates. Features a structured mandarin collar and vertical chest placket with intricate antique gold zari and crimson needle embroidery, finished with natural mother-of-pearl buttons and matching embroidered sleeve cuffs.",
    images: {
      main: "/images/panjabi_white_maroon_mannequin.png",
      detail: "/images/panjabi_collar_focus_macro.jpg",
      lifestyle: "/images/panjabi_cuff_tailoring_focus.jpg",
    },
    materials: ["100% Combed Adi Dhuti Cotton", "Antique Gold Zari & Maroon Embroidery", "Mother-of-Pearl Shell Buttons"],
    dimensions: "Tailored to client specifications; regular & fitted silhouettes",
    colors: ["Pure White with Gold & Maroon", "Classic Ivory"],
    availability: "Active Handloom Production",
    featured: true,
    newArrival: true,
    handmade: true,
    craftInfo: {
      origin: "M/S Janani Craft & Fashion, Sakrail, Gorpara, Manikgonj",
      technique: "Fine cotton garment tailoring with dense collar and placket needlework",
      artisanRole: "Master Karigar & Cutter (প্রধান কারিগর ও দর্জি)",
      craftingDuration: "5 days per garment",
    },
    careInstructions: [
      "Gentle dry clean or cold hand wash with mild pH-neutral detergent",
      "Warm iron on reverse side while slightly damp",
      "Do not bleach or wring",
    ],
  },

  // 1b. Janani Craft & Fashion: Sky Blue Floral Embroidered Panjabi
  {
    id: "prod-panjabi-02",
    slug: "sky-blue-cotton-floral-embroidered-panjabi",
    name: "M/S Janani Sky Blue Floral Embroidered Panjabi",
    bengaliName: "মেসার্স জননী আকাশী সুতি ফ্লোরাল এমব্রয়ডারি পাঞ্জাবি",
    sisterConcern: "Janani Craft & Fashion",
    category: "traditional-wear",
    categoryLabel: "Exclusive Panjabi & Fatua",
    shortDescription:
      "100% pure combed cotton Panjabi in serene sky blue, adorned with rich royal blue floral vine collar, placket, and cuff needlework.",
    description:
      "Tailored exclusively by M/S Janani Craft & Fashion in Manikganj. Crafted from 100% combed cotton in a calm sky-blue shade (কোড ১০২). Features dense royal blue floral embroidery along the mandarin collar, chest button placket, and cuffs, accented with metallic gold-rimmed buttons.",
    images: {
      main: "/images/panjabi_skyblue_floral_mannequin.png",
      detail: "/images/panjabi_collar_focus_macro.jpg",
      lifestyle: "/images/panjabi_cuff_tailoring_focus.jpg",
    },
    materials: ["100% Combed Deshi Cotton", "Metallic Gold-Rimmed Buttons", "Mercerized Embroidery Threads"],
    dimensions: "Tailored to client specifications; regular & slim-fit silhouettes",
    colors: ["Sky Blue with Royal Blue Embroidery", "Serene Azure"],
    availability: "Active Handloom Production",
    featured: true,
    newArrival: true,
    handmade: true,
    craftInfo: {
      origin: "M/S Janani Craft & Fashion, Sakrail, Gorpara, Manikgonj",
      technique: "Fine cotton tailoring with artisanal floral vine embroidery",
      artisanRole: "Master Cutter & Needlework Karigar (দর্জি ও সূচিশিল্পী)",
      craftingDuration: "4 days per garment",
    },
    careInstructions: [
      "Machine wash gentle cold or hand wash with mild liquid soap",
      "Do not bleach or tumble dry",
      "Warm iron on reverse side",
    ],
  },

  // 2. Janani Craft & Fashion: Exclusive Kora Ecru Handloom Fatua
  {
    id: "prod-fatua-01",
    slug: "exclusive-handloom-cotton-fatua",
    name: "M/S Janani Kora Ecru Handloom Cotton Fatua",
    bengaliName: "মেসার্স জননী কোরা এক্রু তাঁতের ফতুয়া",
    sisterConcern: "Janani Craft & Fashion",
    category: "traditional-wear",
    categoryLabel: "Exclusive Panjabi & Fatua",
    shortDescription:
      "Relaxed cultural short tunic tailored from breathable unbleached handloom Deshi cotton, embellished with terracotta-indigo needlework (হাতের কাজ) and carved coconut buttons.",
    description:
      "A signature cultural staple produced by M/S Janani Craft & Fashion in Manikganj. Tailored for comfort in warm delta climates, featuring an open round notched collar, prominent artisanal hand-needlework (হাতের কাজ) across the chest yoke, placket, and sleeve borders, handcrafted coconut-shell buttons, and clean side slits. Woven on traditional wooden looms using unbleached natural cotton yarn that grows softer with every wear.",
    images: {
      main: "/images/fatua_kora_ecru_mannequin.png",
      detail: "/images/fatua_kora_ecru_yoke_macro.png",
      lifestyle: "/images/fatua_kora_ecru_mannequin.png",
    },
    materials: [
      "100% Handloom Deshi Cotton",
      "Natural Coconut Shell Buttons",
      "Hand-Embroidered Natural Cotton Threads (হাতের কাজ)",
    ],
    dimensions: "Standard tailored proportions; relaxed silhouette",
    colors: ["Unbleached Ecru with Terracotta & Indigo Needlework"],
    availability: "Active Handloom Production",
    featured: true,
    newArrival: true,
    handmade: true,
    craftInfo: {
      origin: "M/S Janani Craft & Fashion, Manikgonj",
      technique: "Traditional frame loom weaving, bespoke tailoring, and artisanal hand-needlework embroidery (হাতের কাজ)",
      artisanRole: "Master Tanti, Tailor & Needlework Karigar (তাঁতি, দরজি ও নকশী কারিগর)",
      craftingDuration: "4 days per piece",
    },
    careInstructions: [
      "Hand wash gently in cool water",
      "Line dry in natural shade",
      "Warm iron as needed",
    ],
  },

  // 2b. Janani Craft & Fashion: Bengal River Indigo Khadi Fatua
  {
    id: "prod-fatua-02",
    slug: "bengal-river-indigo-khadi-fatua",
    name: "M/S Janani Bengal River Indigo Khadi Fatua",
    bengaliName: "মেসার্স জননী রিভার ইন্ডিগো খাদি ফতুয়া",
    sisterConcern: "Janani Craft & Fashion",
    category: "traditional-wear",
    categoryLabel: "Exclusive Panjabi & Fatua",
    shortDescription:
      "Deep botanical indigo-dyed handloom khadi cotton Fatua with fine ivory needlework along the notched placket and natural coconut buttons.",
    description:
      "Woven from hand-spun khadi cotton dyed in rich botanical river-indigo vats. Features delicate floral vine needlework in ecru thread running down the mandarin notched collar and front placket, fastened with dark coconut-shell buttons and relaxed side comfort vents.",
    images: {
      main: "/images/fatua_indigo_khadi_mannequin.png",
      detail: "/images/fatua_indigo_khadi_mannequin.png",
      lifestyle: "/images/fatua_indigo_khadi_mannequin.png",
    },
    materials: [
      "100% Hand-Spun Indigo Khadi Cotton",
      "Hand-Carved Coconut Buttons",
      "Plant-Based Botanical Indigo Dyes",
    ],
    dimensions: "Tailored relaxed silhouette (Chest: 38\"-46\", Length: 31\")",
    colors: ["Deep Botanical River Indigo"],
    availability: "Active Handloom Production",
    featured: true,
    newArrival: true,
    handmade: true,
    craftInfo: {
      origin: "M/S Janani Craft & Fashion, Manikgonj",
      technique: "Khadi handloom spinning, vat indigo dyeing, and bespoke tailoring",
      artisanRole: "Master Dyer & Tailor (রং শিল্পী ও দর্জি)",
      craftingDuration: "5 days per piece",
    },
    careInstructions: [
      "Gentle cold hand wash separately for initial washes",
      "Do not bleach; shade dry",
      "Medium steam iron",
    ],
  },

  // 2c. Janani Craft & Fashion: Earthy Olive & Terracotta Handloom Fatua
  {
    id: "prod-fatua-03",
    slug: "earthy-olive-terracotta-handloom-fatua",
    name: "M/S Janani Earthy Olive & Terracotta Handloom Fatua",
    bengaliName: "মেসার্স জননী অলিভ ও পোড়ামাটি তাঁতের ফতুয়া",
    sisterConcern: "Janani Craft & Fashion",
    category: "traditional-wear",
    categoryLabel: "Exclusive Panjabi & Fatua",
    shortDescription:
      "Short-sleeve casual cultural Fatua in earthy olive cotton with terracotta geometric folk embroidery panels and coconut-shell buttons.",
    description:
      "A casual short-sleeve silhouette tailored from breathable olive-green handloom cotton. Accented with geometric terracotta folk needlework panels framing the notched collar and chest placket, finished with side ease slits for warm weather comfort.",
    images: {
      main: "/images/fatua_olive_earth_mannequin.png",
      detail: "/images/fatua_olive_earth_mannequin.png",
      lifestyle: "/images/fatua_olive_earth_mannequin.png",
    },
    materials: [
      "100% Combed Deshi Cotton",
      "Terracotta Embroidery Floss",
      "Dark Coconut Shell Buttons",
    ],
    dimensions: "Short-sleeve tailored fit (Chest: 38\"-46\", Length: 30\")",
    colors: ["Earthy Olive Green with Terracotta Needlework"],
    availability: "Active Handloom Production",
    featured: true,
    newArrival: true,
    handmade: true,
    craftInfo: {
      origin: "M/S Janani Craft & Fashion, Sakrail, Manikgonj",
      technique: "Traditional frame loom weaving and geometric folk needlework",
      artisanRole: "Master Tailor & Needlecraft Karigar (দর্জি ও কারিগর)",
      craftingDuration: "4 days per piece",
    },
    careInstructions: [
      "Machine wash gentle cold or hand wash with mild soap",
      "Line dry in shade",
      "Warm iron as needed",
    ],
  },

  // 3. Janani Weaving Factory: Quality Endi Fabric (Than Kapor)
  {
    id: "prod-endi-01",
    slug: "quality-endi-fabric-than-kapor",
    name: "M/S Janani Weaving Factory Quality Endi Fabric (Than Kapor)",
    bengaliName: "মেসার্স জননী উইভিং ফ্যাক্টরি উন্নত মানের এন্ডি থান কাপড়",
    sisterConcern: "Janani Weaving Factory",
    category: "weaving-factory",
    categoryLabel: "Janani Weaving Factory",
    shortDescription:
      "Authentic rural handloom project Endi silk fabric running yardage for bespoke couture, sherwanis, and luxury drapery.",
    description:
      "Woven under the flagship rural handloom project of M/S Janani Weaving Factory in Manikganj. Endi (Eri) silk is renowned as the ethical silk of Bengal—warm in winter, cool in summer, and endowed with an organic slub texture. Produced as continuous yardage (Than Kapor) for high-end tailoring, bespoke kurtas, and luxury interior upholstery.",
    images: {
      main: "/images/endi_than_kapor_bolts.jpg",
      detail: "/images/endi_loom_shuttle_action.jpg",
      lifestyle: "/images/endi_fabric_sunlight_drape.jpg",
    },
    materials: ["100% Handloom Endi Silk / Cotton-Silk Warp"],
    dimensions: "Continuous bolt roll (Width: 44 inches)",
    colors: ["Natural Raw Silk Ecru", "Earthy Sand", "Madder Clay", "Indigo Wash"],
    availability: "Active Handloom Production",
    featured: true,
    newArrival: true,
    handmade: true,
    craftInfo: {
      origin: "M/S Janani Weaving Factory, Sakrail, Gorpara, Manikgonj",
      technique: "Wooden shuttle pit-loom continuous yardage weaving",
      artisanRole: "Senior Silk Weaver (রেশম ও এন্ডি প্রধান তাঁতি)",
      craftingDuration: "Woven in artisan rolls of 30 meters",
    },
    careInstructions: [
      "Dry clean recommended for couture longevity",
      "Gentle cold hand wash with silk-safe liquid detergent",
      "Steam iron at medium temperature",
    ],
  },

  // 4. Janani Weaving Factory: Royal Blue & Magenta Tant Cotton Saree
  {
    id: "prod-saree-01",
    slug: "half-silk-handloom-sharee",
    name: "M/S Janani Royal Blue & Magenta Tant Handloom Saree",
    bengaliName: "মেসার্স জননী রয়্যাল ব্লু ও ম্যাজেন্টা তাঁতের শাড়ি",
    sisterConcern: "Janani Weaving Factory",
    category: "weaving-factory",
    categoryLabel: "Janani Weaving Factory",
    shortDescription:
      "Traditional royal blue handloom Tant saree with cyan star boutis, horizontal magenta-cyan geometric borders, gold zari highlights, and hand-tied tassels.",
    description:
      "A crowning specialty of M/S Janani Weaving Factory in Manikganj. Woven on traditional shuttle pit-looms from fine breathable cotton, this saree features delicate cyan floral star motifs sprinkled across a vibrant royal blue field. The wide borders and pallu are framed by geometric horizontal bands in magenta and cyan, accented with subtle antique gold threadwork and handcrafted tassel fringes.",
    images: {
      main: "/images/saree_royalblue_tant_mannequin.png",
      detail: "/images/saree_pallu_tassel_macro_detail.png",
      lifestyle: "/images/saree_royalblue_tant_mannequin.png",
    },
    materials: ["100% Combed Deshi Cotton", "Extra-Weft Zari Accents", "Hand-Tied Dual-Tone Tassels"],
    dimensions: "5.5 meters length with 80cm matching unstitched blouse fabric",
    colors: ["Royal Blue with Magenta & Cyan", "Gold Zari Accents"],
    availability: "Handcrafted on Commission",
    featured: true,
    newArrival: true,
    handmade: true,
    craftInfo: {
      origin: "M/S Janani Weaving Factory, Manikgonj handloom sheds",
      technique: "Traditional shuttle pit-loom with extra-weft motif borders",
      artisanRole: "Master Handloom Saree Artisan (কারিগর তাঁতি)",
      craftingDuration: "8 to 12 days on the loom",
    },
    careInstructions: [
      "Dry clean recommended for initial washes",
      "Gentle cold hand wash with mild liquid soap",
      "Store folded neatly in breathable cotton wrap",
      "Warm steam iron on reverse side",
    ],
  },

  // 4b. Janani Weaving Factory: Vibrant Magenta Pink Geometric Mosaic Saree
  {
    id: "prod-saree-02",
    slug: "magenta-pink-geometric-mosaic-saree",
    name: "M/S Janani Magenta Pink Geometric Mosaic Handloom Saree",
    bengaliName: "মেসার্স জননী ম্যাজেন্টা পিঙ্ক জ্যামিতিক মোজাইক তাঁতের শাড়ি",
    sisterConcern: "Janani Weaving Factory",
    category: "weaving-factory",
    categoryLabel: "Janani Weaving Factory",
    shortDescription:
      "Vibrant magenta-pink fine cotton saree featuring micro-bandhani textures, an ornate multi-colored geometric mosaic tile border, and contrast purple piping.",
    description:
      "A festive boutique masterwork from M/S Janani Weaving Factory. Crafted on wooden pit-looms using premium fine cotton yarn, this saree pairs an energetic magenta-pink field adorned with micro-bandhani dots with a multi-colored geometric mosaic border in royal purple, emerald green, and amber gold. Includes matching blouse fabric with identical border detailing.",
    images: {
      main: "/images/saree_magenta_mosaic_mannequin.png",
      detail: "/images/saree_magenta_mosaic_mannequin.png",
      lifestyle: "/images/saree_magenta_mosaic_mannequin.png",
    },
    materials: ["100% Breathable Combed Cotton", "Natural Pigment Dyes", "Contrast Piping Selvedge"],
    dimensions: "5.5 meters length with 80cm matching unstitched blouse fabric",
    colors: ["Magenta Pink with Multi-Color Mosaic Border", "Royal Purple Trim"],
    availability: "Active Handloom Production",
    featured: true,
    newArrival: true,
    handmade: true,
    craftInfo: {
      origin: "M/S Janani Weaving Factory, Manikgonj",
      technique: "Handloom weaving with multi-colored extra-weft geometric mosaic borders",
      artisanRole: "Master Tanti (তাঁতি কারিগর)",
      craftingDuration: "7 days per saree",
    },
    careInstructions: [
      "Gentle cold hand wash separately",
      "Do not wring or twist; shade dry",
      "Medium steam iron on reverse side",
    ],
  },

  // 4c. Janani Weaving Factory: Deep Violet-Indigo Ethnic Diamond Weave Saree
  {
    id: "prod-saree-03",
    slug: "deep-violet-indigo-ethnic-diamond-saree",
    name: "M/S Janani Deep Violet-Indigo Ethnic Diamond Weave Saree",
    bengaliName: "মেসার্স জননী গাঢ় ভায়োলেট-ইন্ডিগো এথনিক ডায়মন্ড শাড়ি",
    sisterConcern: "Janani Weaving Factory",
    category: "weaving-factory",
    categoryLabel: "Janani Weaving Factory",
    shortDescription:
      "Artisanal handloom cotton saree in deep violet-indigo, featuring ethnic geometric diamond lattice borders and teardrop boutis in terracotta and unbleached cotton.",
    description:
      "Honoring delta tribal and folk textile traditions, this saree by M/S Janani Weaving Factory is woven on heavy wooden frame looms. Features an earthy geometric diamond lattice pattern (জাফরি) in warm terracotta and natural ivory along the anchal, accented with arrow motifs and a chevron-weave blouse.",
    images: {
      main: "/images/saree_indigo_diamond_mannequin.png",
      detail: "/images/saree_indigo_diamond_mannequin.png",
      lifestyle: "/images/saree_indigo_diamond_mannequin.png",
    },
    materials: ["100% Organic Handloom Cotton", "Terracotta Natural Dyes", "Hand-Twisted Fringe"],
    dimensions: "5.5 meters length with 80cm matching chevron blouse fabric",
    colors: ["Deep Violet-Indigo with Terracotta & Ivory"],
    availability: "Active Handloom Production",
    featured: true,
    newArrival: true,
    handmade: true,
    craftInfo: {
      origin: "M/S Janani Weaving Factory, Manikgonj handloom sheds",
      technique: "Pit-loom extra-warp diamond lattice weaving",
      artisanRole: "Senior Master Tanti (প্রবীণ তাঁত শিল্পী)",
      craftingDuration: "9 days on the loom",
    },
    careInstructions: [
      "Gentle cold hand wash with mild natural detergent",
      "Line dry in shade to preserve deep indigo hues",
      "Warm iron as needed",
    ],
  },

  // 4d. Janani Weaving Factory: Slate Grey & Ruby Pink Geometric Saree
  {
    id: "prod-saree-04",
    slug: "slate-grey-ruby-contemporary-geometric-saree",
    name: "M/S Janani Slate Grey & Ruby Pink Geometric Handloom Saree",
    bengaliName: "মেসার্স জননী স্লেট গ্রে ও রুবি পিঙ্ক জ্যামিতিক শাড়ি",
    sisterConcern: "Janani Weaving Factory",
    category: "weaving-factory",
    categoryLabel: "Janani Weaving Factory",
    shortDescription:
      "Contemporary handloom cotton saree in soft slate-grey and lavender, adorned with geometric arches, polka dots, and ruby-pink floral folk pallu panels.",
    description:
      "A modern heritage synthesis by M/S Janani Weaving Factory. The cool, serene slate-grey body is filled with rhythmic geometric arches and polka dots, sharply contrasted by rich ruby-pink floral borders and pallu folk motifs. Accompanied by solid ruby-pink blouse fabric.",
    images: {
      main: "/images/saree_grey_ruby_geometric_mannequin.png",
      detail: "/images/saree_grey_ruby_geometric_mannequin.png",
      lifestyle: "/images/saree_grey_ruby_geometric_mannequin.png",
    },
    materials: ["100% Fine Combed Cotton", "Natural Madder Ruby Dyes", "Single-Needle Selvedge"],
    dimensions: "5.5 meters length with 80cm contrast ruby blouse fabric",
    colors: ["Slate Grey & Ruby Pink", "Soft Lavender Accents"],
    availability: "Active Handloom Production",
    featured: true,
    newArrival: true,
    handmade: true,
    craftInfo: {
      origin: "M/S Janani Weaving Factory, Manikgonj",
      technique: "Handloom weaving with geometric block-inspired extra-weft borders",
      artisanRole: "Master Handloom Artisan (কারিগর তাঁতি)",
      craftingDuration: "6 days per piece",
    },
    careInstructions: [
      "Machine wash gentle cold or hand wash with mild soap",
      "Do not bleach; shade dry",
      "Warm iron on reverse",
    ],
  },

  // 5. Janani Weaving Factory: Handloom Endi Silk Orna / Dupatta
  {
    id: "prod-orna-01",
    slug: "handloom-endi-silk-orna-dupatta",
    name: "M/S Janani Weaving Factory Handloom Endi Silk Orna",
    bengaliName: "মেসার্স জননী উইভিং ফ্যাক্টরি হাতে বোনা এন্ডি সিল্ক ওড়না",
    sisterConcern: "Janani Weaving Factory",
    category: "weaving-factory",
    categoryLabel: "Janani Weaving Factory",
    shortDescription:
      "Ultra-fine handcrafted Endi silk orna (dupatta) featuring antique zari borders and hand-knotted tassel fringe.",
    description:
      "Handcrafted as part of M/S Janani Weaving Factory's rural handloom project in Manikganj. This exquisite orna (dupatta) showcases the natural organic luster of pure Endi silk, accented with intricate golden zari paisley borders and delicate selvedge. Drapes weightlessly while offering timeless warmth and texture.",
    images: {
      main: "/images/endi_silk_orna.jpg",
      detail: "/images/endi_fabric_sunlight_drape.jpg",
      lifestyle: "/images/endi_silk_orna.jpg",
    },
    materials: ["100% Handloom Endi Silk", "Antique Gold Zari Thread"],
    dimensions: "2.5 meters L × 38 inches W",
    colors: ["Natural Golden Ecru", "Temple Red Border", "Raw Silk Cream"],
    availability: "Active Handloom Production",
    featured: true,
    newArrival: true,
    handmade: true,
    craftInfo: {
      origin: "M/S Janani Weaving Factory, Sakrail, Gorpara, Manikgonj",
      technique: "Delicate pit-loom weave with jacquard border patterning",
      artisanRole: "Master Weaving Artisan (তাঁত শিল্পী)",
      craftingDuration: "4 days per orna",
    },
    careInstructions: [
      "Gentle dry clean or delicate cold hand wash",
      "Roll gently in cotton towel to remove moisture",
      "Iron on silk setting with protective cloth",
    ],
  },

  // 6. Rapid Agro Care: Aqua Culture Fish Feed
  {
    id: "prod-agro-01",
    slug: "rapid-agro-care-fish-feed",
    name: "Rapid Agro Care Premium Aqua Culture Fish Feed",
    bengaliName: "র‍্যাপিড এগ্রো কেয়ার উন্নত মানের মাছের খাদ্য",
    sisterConcern: "Rapid Agro Care",
    category: "agro-care",
    categoryLabel: "Rapid Agro Care",
    shortDescription:
      "Scientifically balanced, high-protein floating and sinking fish feed imported and distributed for commercial fisheries.",
    description:
      "Imported and distributed by Rapid Agro Care, sister concern of Janani Craft. Formulated with optimal amino acid profiles, fortified vitamins, and essential minerals to promote fast growth, immune health, and high feed conversion ratio (FCR) for Rohu, Katla, Tilapia, Pangas, and shrimp aquaculture throughout Manikganj and Bangladesh.",
    images: {
      main: "/images/rapid_agro_fish_feed.jpg",
      detail: "/images/rapid_agro_fish_feed.jpg",
      lifestyle: "/images/rapid_agro_fish_feed.jpg",
    },
    materials: ["High-Grade Marine Protein Meal", "Soybean Concentrate", "Vitamins & Trace Minerals"],
    dimensions: "Available in 25 kg & 50 kg Moisture-Proof Sealed Sacks",
    colors: ["Standard Feed Pellets"],
    availability: "Direct Distribution",
    featured: true,
    newArrival: false,
    handmade: false,
    craftInfo: {
      origin: "Rapid Agro Care, Sakrail, Gorpara, Manikgonj (Imported & Distributed)",
      technique: "Extruded pelleting with certified quality testing",
      artisanRole: "Agricultural & Aquaculture Specialist Team",
      craftingDuration: "Continuous distribution across regional agro networks",
    },
    careInstructions: [
      "Store in a cool, dry, well-ventilated warehouse",
      "Keep elevated on wooden pallets away from damp floors and walls",
      "Protect from direct sunlight and pests",
    ],
  },

  // 7. Rapid Agro Care: Veterinary Medicine & Livestock Care
  {
    id: "prod-agro-02",
    slug: "rapid-agro-care-veterinary-medicine",
    name: "Rapid Agro Care Veterinary & Livestock Healthcare Solutions",
    bengaliName: "র‍্যাপিড এগ্রো কেয়ার ভেটেরিনারি ও পশুচিকিৎসা ওষুধ",
    sisterConcern: "Rapid Agro Care",
    category: "agro-care",
    categoryLabel: "Rapid Agro Care",
    shortDescription:
      "Comprehensive veterinary medicines, vitamins, and supplements ensuring dairy, cattle, and poultry welfare.",
    description:
      "Distributed by Rapid Agro Care to support farmers, commercial dairies, and rural cattle keepers in Manikganj and neighboring districts. Offering certified antibiotics, anthelmintics, liver tonics, and electrolyte solutions that safeguard animal health and elevate rural agricultural productivity.",
    images: {
      main: "/images/rapid_agro_veterinary.jpg",
      detail: "/images/rapid_agro_veterinary.jpg",
      lifestyle: "/images/rapid_agro_veterinary.jpg",
    },
    materials: ["Veterinary Grade Formulations", "Pharmaceutical Packaging"],
    dimensions: "Standard Institutional & Farm Dosages (Liquid, Powder, Bolus)",
    colors: ["Standard Clinical Packaging"],
    availability: "Direct Distribution",
    featured: false,
    newArrival: false,
    handmade: false,
    craftInfo: {
      origin: "Rapid Agro Care, Sakrail, Gorpara, Manikgonj",
      technique: "Certified pharmaceutical distribution and cold-chain compliance",
      artisanRole: "Veterinary Care & Distribution Team",
      craftingDuration: "Reliable year-round farmer support",
    },
    careInstructions: [
      "Store below 30°C in a dry place",
      "Keep out of reach of children",
      "Administer as prescribed by registered veterinary professionals",
    ],
  },

  // 8. Heritage Nakshi Kantha
  {
    id: "prod-kantha-01",
    slug: "padma-mandala-nakshi-kantha",
    name: "Padma Mandala Heritage Nakshi Kantha",
    bengaliName: "পদ্ম মণ্ডল নকশিকাঁথা",
    sisterConcern: "Janani Handicrafts",
    category: "nakshi-kantha",
    categoryLabel: "Nakshi Kantha",
    shortDescription:
      "Centuries-old running stitch quilt featuring an eight-petal sacred lotus mandala.",
    description:
      "This heirloom Nakshi Kantha quilt is hand-stitched by skilled rural artisans using layers of soft unbleached cotton cloth. The central design showcases the sacred lotus (Padma), framed with traditional folk motifs, fish scales, and protective geometric borders. Each stitch is laid with rhythmic precision using naturally dyed cotton threads.",
    images: {
      main: "/images/nakshi_kantha_padma_mandala.png",
      detail: "/images/nakshi_kantha_detail.jpg",
      lifestyle: "/images/nakshi_kantha_lifestyle.jpg",
    },
    materials: ["100% Unbleached Cotton", "Natural Plant-Dyed Cotton Threads"],
    dimensions: "90\" × 60\" (Standard Queen Quilt)",
    colors: ["Madder Terracotta", "River Indigo", "Raw Cotton Ecru", "Mustard Yellow"],
    availability: "Studio Masterpiece",
    featured: true,
    newArrival: true,
    handmade: true,
    craftInfo: {
      origin: "Jessore & Chapainawabganj artisan clusters",
      technique: "Traditional running stitch (Kantha fhor) and concentric folk embroidery",
      artisanRole: "Master Nakshi Shilpi (নকশী শিল্পী)",
      craftingDuration: "6 to 8 weeks of dedicated hand-stitching",
    },
    careInstructions: [
      "Dry clean recommended for initial cleaning",
      "Gentle hand wash in cold water with mild organic detergent",
      "Do not wring or twist; roll in a towel to absorb excess moisture",
      "Dry in shade away from direct intense sunlight",
    ],
  },

  // 9. Bamboo & Cane Tray
  {
    id: "prod-bamboo-01",
    slug: "bamboo-cane-artisan-serving-tray",
    name: "Handwoven Bamboo & Cane Serving Tray",
    bengaliName: "হাতে বোনা বাঁশ ও বেতের পরিবেশন ডালা",
    sisterConcern: "Janani Handicrafts",
    category: "bamboo-cane",
    categoryLabel: "Bamboo & Cane",
    shortDescription:
      "Architectural rectangular serving tray with fine herringbone cane weave and bent bamboo handles.",
    description:
      "Meticulously shaped from mature Bengal bamboo and flexible natural cane, this serving tray combines everyday durability with artisanal warmth. The base features a tight herringbone weave that resists sagging, secured with split-bamboo borders and reinforced hand-wrapped joints.",
    images: {
      main: "/images/bamboo_cane_tray.jpg",
      detail: "/images/bamboo_cane_tray.jpg",
      lifestyle: "/images/bamboo_cane_tray.jpg",
    },
    materials: ["Treated Wild Bamboo", "Natural Cane (Bet)", "Organic Beeswax Seal"],
    dimensions: "18\" L × 12\" W × 2.5\" H",
    colors: ["Natural Cane Honey", "Smoked Bamboo"],
    availability: "Permanent Archive",
    featured: true,
    newArrival: false,
    handmade: true,
    craftInfo: {
      origin: "Sylhet & Tangail craft belts",
      technique: "Hand-split bamboo frame with woven cane lattice and mortise joints",
      artisanRole: "Master Cane & Bamboo Artisan (বেত ও বাঁশ কারিগর)",
      craftingDuration: "3 days per piece",
    },
    careInstructions: [
      "Wipe clean with a damp cotton cloth",
      "Dry thoroughly before storing",
      "Avoid prolonged immersion in water or dishwasher use",
      "Apply light mineral oil or beeswax once a year to preserve natural luster",
    ],
  },

  // 10. Golden Jute Tote
  {
    id: "prod-jute-01",
    slug: "golden-jute-herringbone-tote",
    name: "M/S Janani Printed Mandala & Dual-Pocket Golden Jute Tote",
    bengaliName: "মেসার্স জননী প্রিন্টেড আলপনা ও পকেটযুক্ত পাটের ব্যাগ",
    sisterConcern: "Janani Handicrafts",
    category: "jute",
    categoryLabel: "Golden Jute",
    shortDescription:
      "Eco-friendly artisanal tote bags handcrafted from premium Bangladeshi golden jute, featuring screen-printed lotus mandala and functional dual-pocket utility design.",
    description:
      "Crafted from 100% biodegradable golden jute — the pride of Bengal's alluvial riverbanks. Available in our signature emerald green screen-printed lotus mandala motif with natural jute framing, as well as a high-utility dual-pocket navy design with secure flap closures. Finished with reinforced tubular handles for enduring everyday sustainability.",
    images: {
      main: "/images/jute_bag_green_mandala.png",
      detail: "/images/jute_colorblock_dualpocket_totes.png",
      lifestyle: "/images/jute_bag_green_mandala.png",
    },
    materials: ["100% Grade-A Bangladeshi Golden Jute", "Natural Plant Dyes", "Reinforced Jute Webbing Handles"],
    dimensions: "16\" W × 14\" H × 5\" D (Strap Drop: 10\")",
    colors: ["Emerald Green Mandala", "Navy Blue Dual-Pocket", "Color-Blocked Red & Green"],
    availability: "Active Craft Practice",
    featured: true,
    newArrival: true,
    handmade: true,
    craftInfo: {
      origin: "Faridpur & Narsingdi jute craft communities",
      technique: "Hand-spun braided jute cord weaving with edge binding",
      artisanRole: "Jute Craftsperson (পাট শিল্পী)",
      craftingDuration: "2 days per bag",
    },
    careInstructions: [
      "Spot clean with mild soap and cold water",
      "Do not machine wash or soak",
      "Air dry flat in an airy shaded spot",
      "Store in a dry, ventilated environment",
    ],
  },

  // 11. Home Textiles Table Runner
  {
    id: "prod-runner-01",
    slug: "kantha-stitched-dining-table-runner",
    name: "Hand-Stitched Cotton Dining Table Runner & Liners",
    bengaliName: "নকশী সেলাই ডাইনিং রানার ও লাইনার",
    sisterConcern: "Janani Handicrafts",
    category: "home-textiles",
    categoryLabel: "Home Textiles",
    shortDescription:
      "Natural handloom cotton dining runner with Kantha running stitch borders and tassel fringe.",
    description:
      "Elevate your dining space with the quiet dignity of handmade textiles. This runner and matching liner set are crafted from durable unbleached handloom cotton, accented with terracotta and charcoal running-stitch borders and playful hand-tied edge fringes.",
    images: {
      main: "/images/table_liner_dining.jpg",
      detail: "/images/table_liner_dining.jpg",
      lifestyle: "/images/table_liner_dining.jpg",
    },
    materials: ["100% Handloom Cotton", "Hand-Dyed Embroidery Thread"],
    dimensions: "Runner: 72\" L × 14\" W; Liners: 18\" L × 12\" W",
    colors: ["Raw Cotton Natural", "Terracotta Stitch", "Charcoal Stitch"],
    availability: "Permanent Archive",
    featured: false,
    newArrival: false,
    handmade: true,
    craftInfo: {
      origin: "Rural artisan cooperatives in Rajshahi",
      technique: "Deshi handloom weave with Nakshi Kantha running stitch bordering",
      artisanRole: "Women's Embroidery Cooperative (কারিগর দল)",
      craftingDuration: "4 days per set",
    },
    careInstructions: [
      "Machine wash gentle on cold cycle or hand wash",
      "Line dry in shade",
      "Steam iron for crisp presentation",
    ],
  },

  // 12. Janani Craft & Fashion: Handcrafted Fabric Wall Mat Tapestry (কাপড়ের তরী ওয়ালমেট)
  {
    id: "prod-wallmat-01",
    slug: "hand-stitched-fabric-wall-mat-tapestry",
    name: "M/S Janani Handcrafted Fabric Wall Mat Tapestry",
    bengaliName: "মেসার্স জননী হাতে সেলাই কাপড়ের নকশী ওয়ালমেট (নকশী তরী)",
    sisterConcern: "Janani Craft & Fashion",
    category: "nakshi-kantha",
    categoryLabel: "Handcrafted Wall Mat & Tapestry",
    shortDescription:
      "Heirloom fabric wall hanging meticulously embroidered with traditional Bengali hand stitch (হাতের কাজ), featuring heritage riverboat (নকশী তরী) and blooming lotus motifs.",
    description:
      "An authentic decorative textile masterwork tailored exclusively by rural women artisans at M/S Janani Craft & Fashion. This handcrafted cloth wall hanging tapestry (কাপড়ের তৈরি নকশী ওয়ালমেট) utilizes heritage kantha running-stitch needlework to portray the timeless rhythm of riverine delta life—a traditional sailing boat (নকশী তরী) navigating gentle ripples, surrounded by blooming lotuses, aquatic flora, and intricate geometric running-stitch borders. Mounted on multi-layered unbleached deshi cotton fabric with natural seasoned timber hanging dowel and artisan tassel fringes.",
    images: {
      main: "/images/fabric_wall_mat_tapestry_main.jpg",
      detail: "/images/fabric_wall_mat_macro_detail.jpg",
      lifestyle: "/images/fabric_wall_mat_artisan_stitching.jpg",
    },
    materials: [
      "Layered Handloom Deshi Cotton Fabric",
      "Hand-Dyed Natural Cotton Embroidery Threads (হাতের কাজ)",
      "Seasoned Natural Timber Hanging Dowel",
      "Hand-Knotted Cotton Tassel Fringes",
    ],
    dimensions: "36\" Height × 24\" Width (Custom commission sizing available)",
    colors: ["Madder Terracotta", "Bengal River Indigo", "Unbleached Kora Ecru", "Antique Gold Thread"],
    availability: "Active Craft Practice",
    featured: true,
    newArrival: true,
    handmade: true,
    craftInfo: {
      origin: "M/S Janani Craft & Fashion, Sakrail, Gorpara, Manikgonj",
      technique: "Multi-layered cloth framing with authentic Nakshi Kantha hand-needlework (হাতের কাজ)",
      artisanRole: "Senior Kantha & Needlework Shilpi (প্রধান নকশী ও সুই-সুতার কারিগর)",
      craftingDuration: "14 days of dedicated hand embroidery per piece",
    },
    careInstructions: [
      "Dry clean recommended for heirloom preservation",
      "Gentle surface dusting with a soft natural bristle brush",
      "Protect from direct excessive delta moisture and persistent dampness",
      "Warm iron from the reverse side with a clean cotton pressing cloth",
    ],
  },

  // 13. Heritage Jute Decorative Wall Hanging
  {
    id: "prod-jute-wall-01",
    slug: "heritage-jute-decorative-wall-hanging",
    name: "Heritage Jute Decorative Wall Hanging",
    bengaliName: "ঐতিহ্যবাহী পাটের নকশী দেয়াল ঝুলন্ত",
    sisterConcern: "Janani Handicrafts",
    category: "jute",
    categoryLabel: "Golden Jute",
    shortDescription:
      "Artistic wall art handcrafted from premium Bangladeshi golden jute fiber, featuring traditional folk motifs and natural tassel fringe.",
    description:
      "A striking decorative wall hanging crafted entirely from 100% biodegradable golden jute — the pride of Bengal's alluvial riverbanks. Master artisans braid, coil, and weave the jute fibers into intricate folk patterns inspired by delta life: lotus blossoms, swimming fish, and geometric running-stitch borders. Mounted on a natural timber dowel with cotton cord suspension and finished with hand-knotted jute tassel fringe. Each piece is a sustainable celebration of Bengal's golden fiber heritage.",
    images: {
      main: "/images/jute_wall_hanging_main.png",
    },
    materials: ["100% Grade-A Bangladeshi Golden Jute Fiber", "Natural Cotton Cord", "Seasoned Timber Dowel"],
    dimensions: "24\" H × 18\" W (Custom sizing available)",
    colors: ["Golden Jute Natural", "Warm Ecru", "Earthy Sand"],
    availability: "Active Craft Practice",
    featured: true,
    newArrival: true,
    handmade: true,
    craftInfo: {
      origin: "Faridpur & Narsingdi jute craft communities",
      technique: "Hand-braided jute cord weaving with folk motif patterning and edge binding",
      artisanRole: "Jute Craftsperson (পাট শিল্পী)",
      craftingDuration: "5 days per piece",
    },
    careInstructions: [
      "Gentle surface dusting with a soft natural bristle brush",
      "Avoid prolonged exposure to direct sunlight",
      "Keep in a dry, well-ventilated environment",
      "Do not wash or immerse in water",
    ],
  },

  // 14. Janani Craft & Fashion: Exclusive Handloom Embroidered Three-Piece (Pastel Pink)
  {
    id: "prod-threepiece-01",
    slug: "exclusive-handloom-embroidered-three-piece",
    name: "M/S Janani Pastel Pink Lace & Embroidered Cotton Three-Piece",
    bengaliName: "মেসার্স জননী প্যাস্টেল পিঙ্ক লেস ও এমব্রয়ডারি থ্রি-পিস",
    sisterConcern: "Janani Craft & Fashion",
    category: "traditional-wear",
    categoryLabel: "Exclusive Artisanal Three-Piece (থ্রি-পিস)",
    shortDescription:
      "Handcrafted women's three-piece ensemble in soft blush pink fine cotton, embellished with delicate white threadwork, cutwork lace, and sheer scalloped dupatta.",
    description:
      "A flagship women's boutique masterwork tailored by M/S Janani Craft & Fashion in Manikganj. Crafted from premium breathable combed cotton in a serene blush pink palette, this ensemble features intricate white cotton threadwork and cutwork lace along the notched V-neckline yoke, sleeve cuffs, and lower hem. Accompanied by straight tailored cotton trousers and a lightweight sheer organdy dupatta with scalloped embroidered borders and hand-knotted tassel fringe.",
    images: {
      main: "/images/threepiece_pastel_pink_mannequin.png",
      detail: "/images/threepiece_pastel_pink_yoke_macro.png",
      lifestyle: "/images/threepiece_ensemble_flatlay_stilllife.png",
    },
    materials: [
      "100% Breathable Combed Deshi Cotton",
      "Sheer Organdy Dupatta with Scalloped Lace",
      "Natural Mother-of-Pearl Shell Buttons",
      "Fine White Cotton Embroidery Thread",
    ],
    dimensions: "Tailored 3-Piece Ensemble: Kameez (L: 46\", Chest: 36\"-44\"), Salwar (L: 39\"), Dupatta (2.5m × 40\")",
    colors: ["Pastel Blush Pink with White Lace", "Natural Ecru Stitch"],
    availability: "Active Handloom Production",
    featured: true,
    newArrival: true,
    handmade: true,
    craftInfo: {
      origin: "M/S Janani Craft & Fashion, Sakrail, Gorpara, Manikgonj",
      technique: "Fine needlework embroidery, cutwork lace joining, and bespoke French seam tailoring",
      artisanRole: "Master Cutter, Needlework Shilpi & Lace Artisan (দর্জি ও সূচিকর্ম কারিগর)",
      craftingDuration: "5 days of dedicated handcrafting per ensemble",
    },
    careInstructions: [
      "Gentle cold hand wash with mild liquid detergent",
      "Do not bleach or tumble dry",
      "Dry flat in natural shade to protect delicate lace work",
      "Medium steam iron on reverse side",
    ],
  },

  // 15. Janani Craft & Fashion: Rose Pink & Black Heritage Printed Three-Piece
  {
    id: "prod-threepiece-02",
    slug: "heritage-printed-black-rose-three-piece",
    name: "M/S Janani Rose Pink & Charcoal Black Printed Three-Piece",
    bengaliName: "মেসার্স জননী রোজ পিঙ্ক ও চারকোল ব্ল্যাক প্রিন্টেড থ্রি-পিস",
    sisterConcern: "Janani Craft & Fashion",
    category: "traditional-wear",
    categoryLabel: "Exclusive Artisanal Three-Piece (থ্রি-পিস)",
    shortDescription:
      "Contemporary ethnic cotton three-piece in dual-tone rose and charcoal black, featuring traditional geometric textures, floral neck panel, and matching printed dupatta.",
    description:
      "A stylish ethnic cotton ensemble produced by M/S Janani Craft & Fashion for sophisticated everyday wear. Features an intricate floral printed neck placket panel, geometric body textures, and ornate paisley daman borders along the hemline. Paired with solid black tailored cotton trousers and a lightweight drape-friendly printed cotton dupatta.",
    images: {
      main: "/images/threepiece_printed_black_rose_mannequin.png",
      detail: "/images/threepiece_printed_black_rose_mannequin.png",
      lifestyle: "/images/threepiece_ensemble_flatlay_stilllife.png",
    },
    materials: [
      "100% Premium AC Cotton Fabric",
      "Breathable Combed Weft Trousers",
      "Eco-Friendly Natural Pigment Dyes",
    ],
    dimensions: "Tailored 3-Piece Ensemble: Kameez (L: 45\", Chest: 36\"-44\"), Salwar (L: 38\"), Dupatta (2.5m × 38\")",
    colors: ["Rose Pink & Charcoal Black", "Vintage Floral Accents"],
    availability: "Active Handloom Production",
    featured: true,
    newArrival: true,
    handmade: true,
    craftInfo: {
      origin: "M/S Janani Craft & Fashion, Sakrail, Manikgonj",
      technique: "Ethnic precision block & screen printing with single-needle tailoring",
      artisanRole: "Print Karigar & Master Tailor (প্রিন্ট কারিগর ও দর্জি)",
      craftingDuration: "3 days per ensemble",
    },
    careInstructions: [
      "Machine wash gentle cold or hand wash with mild detergent",
      "Wash dark colors separately",
      "Line dry in shade",
      "Warm iron as needed",
    ],
  },

  // 16. Janani Craft & Fashion: Royal Blue & Magenta Jamdani Three-Piece
  {
    id: "prod-threepiece-03",
    slug: "royal-blue-magenta-jamdani-three-piece",
    name: "M/S Janani Royal Indigo & Magenta Jamdani Three-Piece",
    bengaliName: "মেসার্স জননী রয়্যাল ব্লু ও ম্যাজেন্টা জামদানি থ্রি-পিস",
    sisterConcern: "Janani Craft & Fashion",
    category: "traditional-wear",
    categoryLabel: "Exclusive Artisanal Three-Piece (থ্রি-পিস)",
    shortDescription:
      "Regal royal blue handloom cotton-silk three-piece with vibrant magenta-pink and antique gold Jamdani geometric motifs, sheer dual-tone dupatta, and tassel fringe.",
    description:
      "An heirloom festive ensemble crafted by M/S Janani Craft & Fashion in partnership with Janani Weaving Factory. Tailored from lustrous royal blue cotton-silk, embellished with intricate geometric Jamdani-style floral motifs across the chest yoke and hem in magenta and burnished gold. Includes a dual-tone sheer dupatta with hand-knotted tassels and tailored straight trousers.",
    images: {
      main: "/images/threepiece_royal_blue_jamdani_mannequin.png",
      detail: "/images/threepiece_royal_blue_jamdani_mannequin.png",
      lifestyle: "/images/threepiece_royal_blue_jamdani_mannequin.png",
    },
    materials: [
      "Handloom Cotton-Mulberry Silk Blend",
      "Dual-Tone Magenta & Navy Sheer Dupatta",
      "Antique Gold Metallic Zari Accents",
    ],
    dimensions: "Tailored 3-Piece Ensemble: Kameez (L: 47\", Chest: 36\"-44\"), Salwar (L: 39\"), Dupatta (2.5m × 42\")",
    colors: ["Royal Blue with Magenta & Antique Gold"],
    availability: "Handcrafted on Commission",
    featured: true,
    newArrival: true,
    handmade: true,
    craftInfo: {
      origin: "M/S Janani Weaving Factory & Craft Atelier, Manikgonj",
      technique: "Pit-loom extra-weft motif weaving and bespoke tailoring",
      artisanRole: "Master Handloom Weaver & Tailor (তাঁতি ও দর্জি)",
      craftingDuration: "6 days per piece",
    },
    careInstructions: [
      "Dry clean recommended for initial cleaning",
      "Gentle cold hand wash with mild silk-safe wash",
      "Do not wring; dry flat in shade",
      "Cool steam iron on reverse side",
    ],
  },

  // 17. Janani Handicrafts: Handcrafted Nakshi Kantha Cloth Flower Vase
  {
    id: "prod-vase-01",
    slug: "handcrafted-nakshi-kantha-cloth-flower-vase",
    name: "M/S Janani Cylindrical Lotus Nakshi Kantha Cloth Vase",
    bengaliName: "মেসার্স জননী পদ্ম নকশী কাপড়ের ফুলদানি",
    sisterConcern: "Janani Handicrafts",
    category: "home-textiles",
    categoryLabel: "Artisanal Cloth Vases (কাপড়ের ফুলদানি)",
    shortDescription:
      "Sculptural upright cloth flower vase handcrafted from stiffened unbleached Deshi cotton canvas with dense terracotta and indigo Nakshi Kantha running-stitch embroidery.",
    description:
      "A celebrated cultural decor innovation by Janani Handicrafts. Rural women artisans reinforce thick layers of unbleached Deshi cotton with natural jute canvas interfacing, then meticulously hand-embroider traditional eight-petal lotus blooms (Padma) and geometric diamonds with dense running stitches (হাতের কাজ). Holds dried delta reeds, pampas grass, and wild cotton branches for sustainable heritage interiors.",
    images: {
      main: "/images/cloth_vase_cylindrical_lotus.png",
      detail: "/images/cloth_vase_needlework_macro.png",
      lifestyle: "/images/cloth_vase_trio_cluster.png",
    },
    materials: [
      "100% Unbleached Deshi Cotton Canvas",
      "Natural Jute Interfacing",
      "Vegetable-Dyed Cotton Thread",
      "Protective Internal Base Ring",
    ],
    dimensions: "Height: 14\" (35cm), Diameter: 4.5\" (11.5cm)",
    colors: ["Unbleached Ecru with Terracotta & Indigo Stitches", "Mustard Yellow Accents"],
    availability: "Active Craft Practice",
    featured: true,
    newArrival: true,
    handmade: true,
    craftInfo: {
      origin: "Manikganj & Jessore artisan clusters",
      technique: "Textile stiffening, cylindrical shaping, and dense Nakshi Kantha running-stitch embroidery",
      artisanRole: "Master Nakshi Shilpi & Canvas Assembler (নকশী শিল্পী ও কারুশিল্পী)",
      craftingDuration: "4 days of dedicated handcrafting per vase",
    },
    careInstructions: [
      "Spot clean gently with a soft dry or slightly damp cotton cloth",
      "Suitable for dried reeds, artificial flowers, or glass container inserts",
      "Do not immerse directly in water",
      "Keep away from prolonged intense direct sunlight to protect natural dye hues",
    ],
  },

  // 18. Janani Handicrafts: Kalshi Pitcher Cloth Vase with Cowrie Shells
  {
    id: "prod-vase-02",
    slug: "pitcher-shaped-kalshi-textile-cloth-vase",
    name: "M/S Janani Kalshi Pitcher Cloth Vase with Cowrie Shells",
    bengaliName: "মেসার্স জননী কলসি আকৃতির কড়িযুক্ত কাপড়ের ফুলদানি",
    sisterConcern: "Janani Handicrafts",
    category: "home-textiles",
    categoryLabel: "Artisanal Cloth Vases (কাপড়ের ফুলদানি)",
    shortDescription:
      "Artisanal amphora-shaped cloth vase inspired by traditional Bengali earthenware pitchers (কলসি), crafted from indigo cotton and natural jute with cowrie shell neck trim.",
    description:
      "Sculpted into the iconic silhouette of Bengal's riverine water pitcher (মাটির কলসি). Hand-shaped by Janani Handicrafts using structured indigo-dyed cotton canvas and golden jute, accented with rolled fabric handles, delicate cowrie shells (কড়ি) hand-sewn along the rim, and geometric diamond running stitches.",
    images: {
      main: "/images/cloth_vase_pitcher_kalshi.png",
      detail: "/images/cloth_vase_needlework_macro.png",
      lifestyle: "/images/cloth_vase_workshop_stilllife.png",
    },
    materials: [
      "Indigo-Dyed Handloom Cotton Canvas",
      "Natural Golden Jute Cord",
      "Genuine Sea Cowrie Shells (কড়ি)",
      "Reinforced Linen Lining",
    ],
    dimensions: "Height: 13\" (33cm), Width across handles: 8.5\" (21.5cm)",
    colors: ["Deep River Indigo with Natural Jute & White Cowrie"],
    availability: "Active Craft Practice",
    featured: true,
    newArrival: true,
    handmade: true,
    craftInfo: {
      origin: "Sakrail, Manikgonj artisan sheds",
      technique: "Canvas molding, rolled handle joining, and cowrie shell beadwork",
      artisanRole: "Master Textile Sculptor & Folk Artisan (বস্ত্র ভাস্কর ও কারিগর)",
      craftingDuration: "5 days per piece",
    },
    careInstructions: [
      "Dust periodically with a feather duster or soft brush",
      "Designed for dried botanical stems and dried wheat stalks",
      "Store in a dry, ventilated indoor setting",
    ],
  },

  // 19. Janani Craft & Fashion: Handcrafted Nakshi Kantha & Jute Ladies Purse
  {
    id: "prod-purse-01",
    slug: "handcrafted-nakshi-kantha-jute-ladies-purse",
    name: "M/S Janani Handcrafted Nakshi & Jute Ladies Clutch Purse",
    bengaliName: "মেসার্স জননী নকশী ও পাট লেডিস হ্যান্ড পার্স ও ক্লাচ",
    sisterConcern: "Janani Craft & Fashion",
    category: "jute",
    categoryLabel: "Ladies Hand Purse (মেয়েদের হ্যান্ড পার্স)",
    shortDescription:
      "Exclusive women's evening clutch purse crafted from fine Nakshi Kantha embroidered silk and tightly woven golden jute with antique brass kiss-lock frame.",
    description:
      "Designed and crafted by M/S Janani Craft & Fashion in Manikganj. Blends two of Bengal's greatest artisanal legacies: intricate Nakshi Kantha needlework and eco-conscious golden jute. Features an antique brass kiss-lock closure, silk interior lining with slip pockets, and a detachable braided strap for versatile styling.",
    images: {
      main: "/images/ladies_handcrafted_purse_clutch.png",
      detail: "/images/ladies_handcrafted_purse_clutch.png",
      lifestyle: "/images/ladies_handcrafted_purse_clutch.png",
    },
    materials: [
      "Hand-Embroidered Nakshi Kantha Silk-Cotton",
      "Natural Riverine Golden Jute Fiber",
      "Antique Brass Kiss-Lock Metal Frame",
      "Handloom Cotton Interior Lining",
    ],
    dimensions: "Length: 9.5\" (24cm), Height: 6\" (15cm), Depth: 2.5\" (6.5cm)",
    colors: ["Natural Golden Jute with Crimson & Indigo Needlework", "Warm Earth Brown"],
    availability: "Active Craft Practice",
    featured: true,
    newArrival: true,
    handmade: true,
    craftInfo: {
      origin: "M/S Janani Craft & Fashion, Sakrail, Gorpara, Manikgonj",
      technique: "Fine needlework kantha stitching, jute weaving, and bespoke clutch metal framing",
      artisanRole: "Master Kantha Shilpi & Leatherette Artisan (নকশী শিল্পী ও কারিগর)",
      craftingDuration: "3 days per clutch",
    },
    careInstructions: [
      "Spot clean with a soft dry or slightly damp micro-fiber cloth",
      "Store in the provided breathable cotton dust bag",
      "Keep away from direct water contact and extreme dampness",
    ],
  },

  // 20. Janani Craft & Fashion: Colorful Modern Jute Tote Bags
  {
    id: "prod-jute-02",
    slug: "colorful-botanical-geometric-jute-tote-bags",
    name: "M/S Janani Colorful Artisanal Jute Tote Bags",
    bengaliName: "মেসার্স জননী রঙিন সোনালী জুটব্যাগ সম্ভার",
    sisterConcern: "Janani Craft & Fashion",
    category: "jute",
    categoryLabel: "Colorful Jute Bags (রঙিন জুটব্যাগ)",
    shortDescription:
      "Premium colorful handcrafted golden jute tote bags featuring vibrant botanical prints, geometric colorblocking, and reinforced dark leather handles.",
    description:
      "A celebration of Bengal's golden fiber (সোনালী আঁশ) reinvented for modern sustainable luxury. Crafted from Grade-A tossa jute fiber with vibrant colorblocked panels in terracotta, forest green, and river indigo, adorned with geometric mandalas. Built with heavy-duty genuine leather handles secured by solid brass rivets and water-resistant coated interior.",
    images: {
      main: "/images/colorful_jute_tote_bags.png",
      detail: "/images/jute_bag_green_mandala.png",
      lifestyle: "/images/colorful_jute_tote_bags.png",
    },
    materials: [
      "Grade-A Natural Bangladeshi Tossa Jute",
      "Organic Eco-Dyes (Terracotta, Ochre, Indigo)",
      "Genuine Leather Handles with Brass Rivets",
      "Water-Resistant Spillproof Interior Laminate",
    ],
    dimensions: "Width: 16\" (40cm), Height: 14\" (35cm), Gusset: 6\" (15cm)",
    colors: ["Terracotta & Olive Green Colorblock", "Royal Indigo & Amber Gold"],
    availability: "Active Craft Practice",
    featured: true,
    newArrival: true,
    handmade: true,
    craftInfo: {
      origin: "Janani Handicrafts & Jute Guilds, Manikgonj",
      technique: "Heavy-gauge jute weaving, precision block printing, and reinforced saddle stitching",
      artisanRole: "Master Jute Weaver & Leather Stitcher (পাট শিল্পী ও দর্জি)",
      craftingDuration: "2 days per tote",
    },
    careInstructions: [
      "Wipe clean with a damp cloth and mild soapy water",
      "Do not machine wash or submerge in water",
      "Air dry in a shaded, well-ventilated area",
    ],
  },

  // 21. Janani Craft & Fashion: Vibrant Colorful Embroidered Wall Mat
  {
    id: "prod-wallmat-02",
    slug: "vibrant-colorful-peacock-riverboat-embroidered-wall-mat",
    name: "M/S Janani Vibrant Folk Peacock & Riverboat Wall Mat",
    bengaliName: "মেসার্স জননী রঙিন নকশী তরী ও ময়ূর ওয়ালমেট",
    sisterConcern: "Janani Craft & Fashion",
    category: "nakshi-kantha",
    categoryLabel: "Colorful Wall Mat (রঙিন ওয়ালমেট)",
    shortDescription:
      "Vibrant hand-embroidered textile tapestry mounted on polished bamboo, depicting royal delta peacocks and traditional riverboats in rich folk colors.",
    description:
      "A vibrant folk celebration of Bengal's riverine mythology and birdlife. Master women embroiderers spend weeks laying dense Kantha running stitches in vivid crimson, royal blue, emerald green, and gold across triple-layered Deshi cotton. Suspended from a seasoned natural bamboo hanging rod with hand-knotted tassel fringe along the bottom edge.",
    images: {
      main: "/images/colorful_embroidered_wall_mat.png",
      detail: "/images/fabric_wall_mat_macro_detail.jpg",
      lifestyle: "/images/artisan_women_hand_stitching_kantha.png",
    },
    materials: [
      "100% Combed Deshi Cotton Base Fabric",
      "Mercerized Colorfast Embroidery Floss",
      "Seasoned Natural Bamboo Hanging Rod",
      "Hand-Knotted Cotton Tassel Fringe",
    ],
    dimensions: "Width: 26\" (66cm), Length: 38\" (96cm) plus 4\" fringe",
    colors: ["Multicolor Folk Palette on Off-White Canvas"],
    availability: "Active Craft Practice",
    featured: true,
    newArrival: true,
    handmade: true,
    craftInfo: {
      origin: "M/S Janani Craft & Fashion, Sakrail, Gorpara, Manikgonj",
      technique: "Traditional Nakshi Kantha running-stitch embroidery (হাতের সূচিকর্ম)",
      artisanRole: "Senior Nakshi Shilpi & Folk Artist (প্রধান নকশী কারিগর)",
      craftingDuration: "14 days of patient hand-needlework",
    },
    careInstructions: [
      "Dry clean recommended to preserve crisp stitch tension and bright dye hues",
      "Gentle vacuuming with a soft upholstery brush attachment",
      "Avoid continuous exposure to intense direct sunlight",
    ],
  },

  // 22. Janani Craft & Fashion: Pliant Bamboo & Cane Homeware Collection
  {
    id: "prod-bamboo-02",
    slug: "artisanal-sylhet-cane-bamboo-homeware-collection",
    name: "M/S Janani Artisanal Cane & Bamboo Homeware Set",
    bengaliName: "মেসার্স জননী বেত ও বাঁশের ডাইনিং ও গৃহসজ্জা সম্ভার",
    sisterConcern: "Janani Craft & Fashion",
    category: "bamboo-cane",
    categoryLabel: "Bamboo & Cane (বাঁশ-বেতের জিনিস)",
    shortDescription:
      "Curated collection of pliant cane and seasoned bamboo homeware: handwoven serving trays, fruit baskets, and bread holders in warm honey tones.",
    description:
      "Hand-split and woven from mature three-year-old riverbank bamboo and seasoned Sylhet cane. Includes a rectangular herringbone serving tray with bent cane handles, a deep spherical fruit bowl, and round woven coasters. Each piece is treated naturally with saline seasoning and sealed with pure bee wax for enduring resistance to delta humidity.",
    images: {
      main: "/images/bamboo_cane_lifestyle_curation.png",
      detail: "/images/bamboo_cane_tray.jpg",
      lifestyle: "/images/bamboo_cane_lifestyle_curation.png",
    },
    materials: [
      "Natural Sylhet Wild Cane (বেত)",
      "Seasoned Mature Bengali Bamboo (বাঁশ)",
      "Natural Saline Anti-Borer Treatment",
      "Organic Beeswax Protective Sealant",
    ],
    dimensions: "Tray: 18\" x 12\" (45x30cm), Fruit Basket: 11\" dia x 5\" ht (28x12cm)",
    colors: ["Warm Honey Natural Cane", "Golden Amber Bamboo"],
    availability: "Active Craft Practice",
    featured: true,
    newArrival: true,
    handmade: true,
    craftInfo: {
      origin: "Janani Artisan Cooperatives, Manikganj & Sylhet",
      technique: "Hand draw-knife splitting, tension herringbone plaiting, and heat-bent cane rims",
      artisanRole: "Master Cane Craftsman & Bamboo Plaiter (বেত ও বাঁশ শিল্পী)",
      craftingDuration: "4 days per complete collection set",
    },
    careInstructions: [
      "Wipe clean with a dry or lightly damp cotton cloth",
      "Do not soak or put in automatic dishwashers",
      "Occasional light polish with coconut oil or beeswax restores natural golden sheen",
    ],
  },

  // 23. Janani Craft & Fashion: Home & Office Heritage Decorative Showpieces
  {
    id: "prod-showpiece-01",
    slug: "heritage-teakwood-mayurpankhi-brass-showpiece",
    name: "M/S Janani Heritage Mayurpankhi & Brass Office Showpieces",
    bengaliName: "মেসার্স জননী কাঠের ময়ূরপঙ্খী তরী ও পিতল শো-পিস",
    sisterConcern: "Janani Craft & Fashion",
    category: "home-textiles",
    categoryLabel: "Home & Office Showpieces (বাসা ও অফিসের শো-পিস)",
    shortDescription:
      "Curated artisanal tabletop showpieces for home and executive office: hand-carved polished teakwood riverboat sculpture and antique brass desk artifacts.",
    description:
      "Designed for dignified Bengali living spaces and corporate executive desks. Features a masterfully hand-carved polished teakwood Mayurpankhi boat (ময়ূরপঙ্খী তরী) celebrating Bengal's riverine heritage, alongside a hand-cast antique brass elephant paperweight and an artisanal bamboo desktop organizer. An heirloom expression of cultural gravitas and craftsmanship.",
    images: {
      main: "/images/home_office_decorative_showpiece.png",
      detail: "/images/home_office_decorative_showpiece.png",
      lifestyle: "/images/home_office_decorative_showpiece.png",
    },
    materials: [
      "Seasoned Teakwood (সেগুন কাঠ)",
      "Hand-Cast Dhamrai Antique Brass (পিতল)",
      "Woven Golden Jute Trim",
      "Natural Lacquer Finish",
    ],
    dimensions: "Riverboat sculpture: Length 14\" (35cm), Brass artifact: 4.5\" x 3\" (11x8cm)",
    colors: ["Polished Deep Walnut Teak", "Burnished Antique Gold Brass"],
    availability: "Studio Masterpiece",
    featured: true,
    newArrival: true,
    handmade: true,
    craftInfo: {
      origin: "M/S Janani Craft & Fashion, Sakrail, Gorpara, Manikgonj",
      technique: "Chisel wood-carving, lost-wax brass sand casting, and hand polishing",
      artisanRole: "Master Wood Sculptor & Brass Karigar (ভাস্কর ও পিতল শিল্পী)",
      craftingDuration: "7 days of precision artisanal crafting",
    },
    careInstructions: [
      "Dust lightly with a dry camel-hair brush or micro-fiber cloth",
      "Polish brass occasionally with a brass-polishing cloth to maintain warm luster",
      "Keep away from excessive moisture",
    ],
  },

  // 24. Janani Weaving Factory: Handloom Tant Saree — Heritage Lifestyle Edition
  {
    id: "prod-saree-05",
    slug: "handloom-tant-saree-heritage-lifestyle-edition",
    name: "M/S Janani Weaving Factory Tant Saree — Heritage Drape Edition",
    bengaliName: "মেসার্স জননী উইভিং ফ্যাক্টরি তাঁতের শাড়ি — হেরিটেজ ড্র্যাপ সংস্করণ",
    sisterConcern: "Janani Weaving Factory",
    category: "weaving-factory",
    categoryLabel: "Handloom Tant Saree (তাঁতের শাড়ি)",
    shortDescription:
      "Celebrated handloom Tant cotton saree woven on wooden pit-looms in Manikganj, featuring vibrant geometric borders and exquisite pallu drape.",
    description:
      "Woven with pride at M/S Janani Weaving Factory in Sakrail, Manikgonj. Crafted on traditional wooden pit-looms using combed Deshi cotton warp and weft. Features vibrant geometric temple borders (মন্দির পাড়), fine all-over bouti field motifs, and hand-knotted tassel fringe along the anchal. Celebrated for its featherlight breathability in tropical delta climates.",
    images: {
      main: "/images/saree_lifestyle_woman_drape_01.png",
      detail: "/images/saree_lifestyle_woman_drape_02.png",
      lifestyle: "/images/saree_lifestyle_woman_drape_01.png",
    },
    materials: [
      "100% Combed Deshi Handloom Cotton",
      "Natural Plant-Derived Indigo & Terracotta Dyes",
      "Antique Metallic Zari Weft Threads",
      "Hand-Knotted Pallu Tassels",
    ],
    dimensions: "Standard Bengali length: 12 Haat (approx. 5.5m), width: 46 inches",
    colors: ["Deep River Indigo with Terracotta & Brass Gold Border", "Serene Ivory with Crimson"],
    availability: "Active Handloom Production",
    featured: true,
    newArrival: true,
    handmade: true,
    craftInfo: {
      origin: "M/S Janani Weaving Factory, Sakrail, Gorpara, Manikgonj",
      technique: "Traditional shuttle pit-loom weaving with supplementary extra-weft border throw",
      artisanRole: "Master Tanti & Warp Reel Specialist (প্রধান তাঁতি)",
      craftingDuration: "6 days per saree",
    },
    careInstructions: [
      "Cold hand wash separately using mild pH-neutral detergent or baby shampoo",
      "Do not wring; roll gently in a towel and line dry in the shade",
      "Warm iron on reverse side while slightly damp",
    ],
  },
];

