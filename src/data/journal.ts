export type JournalCategory =
  | "Craft Heritage"
  | "Material Sourcing"
  | "Living Guilds"
  | "Sustainable Luxury"
  | "Artisan Voices";

export interface JournalArticle {
  id: string;
  slug: string;
  title: string;
  bengaliTitle: string;
  category: JournalCategory;
  publishedDate: string;
  readTime: string;
  author: string;
  image: string;
  location: string;
  archivalPlate?: string;
  excerpt: string;
  content: {
    intro: string;
    sections: {
      heading: string;
      body: string;
    }[];
    pullQuote?: string;
  };
}

export const journalArticles: JournalArticle[] = [
  {
    id: "art-01",
    slug: "living-rhythm-of-running-stitch-nakshi-kantha",
    title: "The Living Rhythm of the Running Stitch: Inside Bengal's Nakshi Kantha",
    bengaliTitle: "নকশিকাঁথার সেলাইয়ে গ্রামীণ বাংলার জীবনগাঁথা",
    category: "Craft Heritage",
    publishedDate: "October 14, 2025",
    readTime: "5 min read",
    author: "Janani Craft Field Editorial",
    image: "/images/journal_nakshi_kantha_story.jpg",
    location: "Jessore & Chapainawabganj",
    archivalPlate: "Plate I · Running Stitch Quilt on Deshi Cotton · Lotus Core",
    excerpt:
      "Across rural courtyards in Jessore and Chapainawabganj, women stitch layered cotton into diaries of hope, mythology, and familial memories with zero-waste patience.",
    content: {
      intro:
        "In rural Bengal, the creation of a Nakshi Kantha has never been a hurried task. It unfolds across quiet monsoon afternoons and calm winter mornings, as two or three artisans sit together on woven mats, unspooling naturally dyed cotton threads and whispering village folklore over taut layers of cloth.",
      sections: [
        {
          heading: "A Diary of Needle and Thread",
          body:
            "Unlike industrial embroidery that follows rigid machine vectors, every Nakshi Kantha bears the subtle irregularity of the human hand. The foundational stitch is deceptively humble—a continuous running stitch known as the 'fhor'. Repeated thousands of times in concentric rings, it transforms multiple layers of soft unbleached cotton into a durable, textured textile that ripples under fingertips like river currents.",
        },
        {
          heading: "The Sacred Lotus: Astadala Padma",
          body:
            "At the heart of most heirloom kanthas rests the lotus mandala. Symbolizing spiritual balance and regeneration across the delta, the petals radiate outward to meet tree-of-life vines (kalka), swimming fish, and agricultural harvest motifs. It is an art form rooted in zero-waste domestic reverence.",
        },
        {
          heading: "Caring for an Heirloom",
          body:
            "Because each stitch is an integral anchor of the textile's tension, authentic hand-stitched kanthas should be treated with quiet reverence. Hand washing in cool water with gentle, pH-neutral soaps ensures that natural plant-derived dyes remain vibrant for decades.",
        },
      ],
      pullQuote:
        "The kantha is not merely an embroidered cloth; it is the heartbeat of rural artisan women given physical form.",
    },
  },
  {
    id: "art-02",
    slug: "resilient-art-of-bamboo-and-cane",
    title: "From Delta Riverbanks to Tableware: The Resilient Art of Bamboo & Cane",
    bengaliTitle: "বাঁশ ও বেতের চিরন্তন কারুশিল্প",
    category: "Material Sourcing",
    publishedDate: "November 02, 2025",
    readTime: "4 min read",
    author: "Janani Craft Field Editorial",
    image: "/images/journal_bamboo_cane_artisan.jpg",
    location: "Sylhet & Srimangal",
    archivalPlate: "Plate II · Split Cane Architectural Weave · Natural Saline Bath",
    excerpt:
      "How mature mooli bamboo and flexible cane are sustainably harvested and transformed into enduring serving trays and architectural homeware.",
    content: {
      intro:
        "In the lush river valleys of Sylhet and Chittagong, bamboo and cane grow with astonishing speed. For centuries, rural craftspeople have harnessed this fibrous strength to construct homes, river boats, fishing traps, and ceremonial trays.",
      sections: [
        {
          heading: "The Mastery of Splitting and Seasoning",
          body:
            "Working with bamboo requires an intimate understanding of grain and tension. Artisans select three-year-old culms that have achieved peak density. Using specialized hand draw-knives (dao), they split the cylindrical canes into uniform ribbons as thin as paper, seasoning them in natural saline baths to resist humidity.",
        },
        {
          heading: "Weaving Everyday Utility",
          body:
            "The tight herringbone and hexagonal patterns found on Janani serving trays are not merely decorative—they distribute weight evenly across the surface, ensuring the tray never sags even when loaded with heavy brass tableware. Finished with raw beeswax, each piece celebrates the unadorned beauty of the plant.",
        },
      ],
      pullQuote:
        "In a world flooded with disposable plastic, bamboo offers an architectural lesson in flexibility, grace, and endurance.",
    },
  },
  {
    id: "art-03",
    slug: "golden-thread-bangladeshi-jute-sustainable-luxury",
    title: "The Golden Thread: How Bangladeshi Jute is Shaping Sustainable Luxury",
    bengaliTitle: "সোনালী আঁশ: ঐতিহ্যের পাট থেকে আধুনিক টেকসই বিলাসিতা",
    category: "Sustainable Luxury",
    publishedDate: "December 18, 2025",
    readTime: "6 min read",
    author: "Janani Craft Field Editorial",
    image: "/images/journal_jute_harvest_river.jpg",
    location: "Faridpur & Brahmaputra Basin",
    archivalPlate: "Plate III · Unbleached Tossa Jute Harvest · River Retting",
    excerpt:
      "Exploring the ecological resurgence of the golden fiber of Bengal and its rebirth into structured tote bags, home decor, and minimalist lifestyle goods.",
    content: {
      intro:
        "The Brahmaputra and Padma river systems deposit mineral-rich silt that nourishes the finest Corchorus capsularis (white jute) and Corchorus olitorius (tossa jute) on Earth. Long considered the industrial workhorse of sacks and ropes, jute is now experiencing an overdue renaissance in high-end design.",
      sections: [
        {
          heading: "The Carbon-Negative Marvel",
          body:
            "Jute absorbs more carbon dioxide per hectare during its 120-day growth cycle than most forests, requiring minimal water and zero synthetic pesticides. When harvested, the stalks undergo 'retting' in slow-moving fresh river water, where microbial action gently loosens the lustrous golden strands.",
        },
        {
          heading: "Artisanal Braiding & Hand-Finishing",
          body:
            "At Janani Craft & Fashion, we reject chemical bleaching that weakens the fiber. Instead, we preserve the unbleached oatmeal and warm camel tones of natural jute, blending it with traditional hand-braiding techniques to craft timeless, structured carryalls built to outlast seasonal trends.",
        },
      ],
      pullQuote:
        "Bengal's golden fiber is nature's answer to conscious living: strong, biodegradable, and dignified.",
    },
  },
  {
    id: "art-04",
    slug: "wooden-pit-loom-manikganj-handloom-weaving",
    title: "The Wooden Pit-Loom of Manikganj: Weaving Air, Silk & Handloom Cotton",
    bengaliTitle: "মানিকগঞ্জের পিট-লুম: মাটিতে বসে বাতাস আর সুতো বোনার প্রাচীন বিদ্যা",
    category: "Living Guilds",
    publishedDate: "January 10, 2026",
    readTime: "7 min read",
    author: "Janani Craft Field Editorial",
    image: "/images/craft_step_pit_loom.jpg",
    location: "Manikganj Weaving Guilds",
    archivalPlate: "Plate IV · Traditional Subterranean Pit-Loom · Bamboo Reed Warp",
    excerpt:
      "Deep inside our Manikganj weaving clusters, master tantis operate earthen pit-looms where subterranean humidity keeps fine counts of cotton and silk perfectly supple.",
    content: {
      intro:
        "Step down into an artisan weaver's cottage in Manikganj and the first detail that strikes you is the earth. Unlike modern industrial power looms that shudder on concrete factory floors, Bengal's traditional pit-loom is anchored directly into the ground—a shallow pit dug beneath the pedals to harness soil humidity.",
      sections: [
        {
          heading: "Subterranean Humidity and Fine Count Weaving",
          body:
            "This earthen moisture is not an incidental quirk; it is an ingenious ancestral climate control system. High-count cotton and delicate mulberry silk threads are prone to snapping under dry heat. By working in a subterranean trench, the weaver ensures thread elasticity, allowing warp counts of 80s to 120s to be woven without artificial sizing chemicals.",
        },
        {
          heading: "The Synced Choreography of Hands and Feet",
          body:
            "Watching a master tanti at work is akin to witnessing a classical musical performance. The feet depress wooden treadles that part the shed, while the right hand jerks the shuttle cord and the left beats the bamboo sley reed with calibrated force. Each yard requires over 4,000 rhythmic shuttle passes.",
        },
        {
          heading: "Janani Craft's Commitment to the Loom",
          body:
            "In an age of hyper-fast polyester fashion, Janani Craft guarantees guaranteed monthly patronage to our Manikganj pit-loom weavers, safeguarding their ancestral skills and giving their families dignity, fair remuneration, and artistic autonomy.",
        },
      ],
      pullQuote:
        "The pit-loom does not compete with industrial speed; it exists in a different dimension of time where patience is the primary ingredient.",
    },
  },
  {
    id: "art-05",
    slug: "ahimsa-endi-silk-ancient-castor-forests",
    title: "The Ahimsa Cocoon: Endi Peace Silk & The Ancient Castor Forests",
    bengaliTitle: "অহিংস এন্ডি সিল্ক: প্রকৃতির ক্ষতি না করে জন্ম নেওয়া রাজকীয় রেশম",
    category: "Sustainable Luxury",
    publishedDate: "January 28, 2026",
    readTime: "5 min read",
    author: "Janani Craft Field Editorial",
    image: "/images/endi_cocoon_spinning_macro.jpg",
    location: "Rangpur & Greater Rajshahi",
    archivalPlate: "Plate V · Samia Cynthia Ricini Empty Cocoon · Hand-Spun Takli",
    excerpt:
      "Discover the compassionate poetry of Endi (Eri) silk, spun by hand only after the silkworm has naturally emerged and flown free into the delta skies.",
    content: {
      intro:
        "Silk has long been synonymous with opulence, but conventional sericulture involves boiling cocoons with the chrysalis inside. In Bengal's indigenous Endi tradition, a compassionate alternative has thrived for over a millennium: Ahimsa, or non-violent peace silk.",
      sections: [
        {
          heading: "The Natural Emergence of the Moth",
          body:
            "The Endi silkworm (Samia cynthia ricini) feeds exclusively on castor leaves (Erandi). Unlike mulberry cocoons which are reeled in continuous filaments, the Endi moth pierces its cocoon and flies away freely. The hollowed silk shell is then gathered gently from the wild undergrowth.",
        },
        {
          heading: "Takli Hand-Spinning & Earthen Texture",
          body:
            "Because the open cocoon cannot be reeled like ordinary silk, it must be carded and hand-spun on a handheld brass spindle known as the takli, much like fine cotton. This yields a textile with a rich, matte luster, irregular slubs, and an uncanny thermal property—warming in winter and cooling in summer humidity.",
        },
        {
          heading: "A Living Heirloom That Softens With Age",
          body:
            "Janani Craft Endi silk stoles and than kapor bolts are prized as generational heirlooms. The more an Endi garment is worn and washed, the softer and more luminous its natural unbleached ivory fibers become.",
        },
      ],
      pullQuote:
        "In Endi silk, beauty is never purchased at the cost of living breath. It is luxury with a clean conscience.",
    },
  },
  {
    id: "art-06",
    slug: "lost-wax-dhamrai-bell-metal-bronze",
    title: "The 2,000-Year Flame: Dhamrai's Lost-Wax Kansha & Bell Metal Smiths",
    bengaliTitle: "ধামরাইয়ের কাঁসা-পিতল: দুই সহস্রাব্দের মোম-ছাঁচ ঢালাই শিল্প",
    category: "Craft Heritage",
    publishedDate: "February 15, 2026",
    readTime: "6 min read",
    author: "Janani Craft Field Editorial",
    image: "/images/dhamrai_brass_heirloom.jpg",
    location: "Dhamrai, Dhaka",
    archivalPlate: "Plate VI · Cire-Perdue Beeswax Core · Hand-Hammered Bell Metal",
    excerpt:
      "Tracing the embers of Dhamrai's master kanshari brass-smiths who sculpt heirloom bell-metal vessels using the ancient cire-perdue lost-wax casting method.",
    content: {
      intro:
        "Just thirty kilometers northwest of Dhaka along the Bangshi River lies Dhamrai, an ancient hub of metallurgical art where furnaces have burned uninterrupted for centuries. Here, the Banik and Kanshari guilds practice the lost-wax casting technique that once furnished the royal courts of the Pala Empire.",
      sections: [
        {
          heading: "Cire-Perdue: Sculpting with Pure Beeswax",
          body:
            "Every bronze or brass vessel begins not in metal, but in raw beeswax blended with aromatic tree resin (dhuna). The karigar sculpts every flare, spout, and rim entirely by hand. A mantle of river clay mixed with rice husk is then built layer by layer over the wax sculpture and dried in the Bengal sun.",
        },
        {
          heading: "The Fiery Crucible Pour",
          body:
            "When heated in earthen pit furnaces, the inner wax melts and drains away, leaving a hollow negative chamber. Into this red-hot clay mold, the smith pours molten kansha (an acoustic alloy of copper and tin) at over 1,000°C. Once cooled, the earthen mold is deliberately shattered to reveal the one-of-a-kind cast object.",
        },
        {
          heading: "Hand Chiseled and Burnished",
          body:
            "Each Janani Craft Kansha bowl and decanter undergoes hours of rhythmic hand-chiniseling and manual leather buffing, bringing out the distinct golden gleam and bell-metal resonance that machine pressings can never duplicate.",
        },
      ],
      pullQuote:
        "When you strike an authentic Kansha vessel, the note rings pure and sustained for nearly ten seconds—the acoustic soul of Dhamrai.",
    },
  },
];

