export interface NavItem {
  label: string;
  bengaliLabel: string;
  href: string;
}

export interface SisterConcern {
  id: string;
  name: string;
  bengaliName: string;
  subtitle: string;
  bengaliSubtitle: string;
  description: string;
  products: string[];
  image: string;
  href: string;
}

export const siteConfig = {
  name: "Janani Craft & Fashion",
  bengaliName: "জননী ক্রাফট অ্যান্ড ফ্যাশন",
  tagline: "Crafted by Tradition. Made for Today.",
  bengaliTagline: "ঐতিহ্যের সৃষ্টি, আধুনিক জীবনের সঙ্গী।",
  description:
    "M/S Janani Craft & Fashion, M/S Janani Weaving Factory, and Rapid Agro Care — an enterprise dedicated to rural handloom weaving, exclusive apparel manufacturing, and agricultural distribution in Manikganj, Bangladesh.",
  url: "https://jananicraft.com",


  sisterConcerns: [
    {
      id: "janani-weaving-factory",
      name: "M/S Janani Weaving Factory",
      bengaliName: "মেসার্স জননী উইভিং ফ্যাক্টরি",
      subtitle: "A Rural hand loom project of quality Endi Fab. H/S Sharee & Orna",
      bengaliSubtitle: "উন্নত মানের এন্ডি থান, হাফ-সিল্ক শাড়ি ও ওড়না তৈরির পল্লী তাঁত প্রকল্প",
      description:
        "Our celebrated rural handloom enterprise operating traditional wooden pit-looms. Renowned across Bangladesh for superfine Endi silk fabric (Than Kapor), heirloom Half-Silk (H/S) Sarees, and delicately woven Orna / Dupatta.",
      products: [
        "Quality Endi Fabric (Than Kapor)",
        "Half-Silk (H/S) Sharee",
        "Handloom Endi Silk Orna / Dupatta",
        "Pure Silk & Cotton Handloom Yardage",
      ],
      image: "/images/sister_concern_weaving_factory.jpg",
      href: "/collections?category=weaving-factory",
    },
    {
      id: "janani-craft-fashion",
      name: "M/S Janani Craft & Fashion",
      bengaliName: "মেসার্স জননী ক্রাফট অ্যান্ড ফ্যাশন",
      subtitle: "Manufacturer of Exclusive Panjabi & Fatua",
      bengaliSubtitle: "এক্সক্লুসিভ পাঞ্জাবি ও ফতুয়া প্রস্তুতকারক",
      description:
        "Premier manufacturing house specializing in high-end men's traditional attire, handcrafted Panjabis, artisanal Fatuas, and cultural lifestyle accessories, featuring handloom textiles and exquisite collar needle embroidery.",
      products: [
        "Exclusive Hand-Embroidered Panjabi",
        "Artisanal Handloom Fatua",
        "Handcrafted Artisanal Three-Piece (থ্রি-পিস)",
        "Handcrafted Fabric Wall Mat Tapestry",
        "Festive Waistcoats & Kurtas",
        "Heritage Nakshi Kantha & Jute Curations",
      ],
      image: "/images/janani_craft_panjabi_atelier.png",
      href: "/collections?category=traditional-wear",
    },
    {
      id: "rapid-agro-care",
      name: "Rapid Agro Care",
      bengaliName: "র‍্যাপিড এগ্রো কেয়ার",
      subtitle: "Pioneer in Aquaculture, Fish Feed & Commercial Fish Cultivation",
      bengaliSubtitle: "আমদানিকারক ও উদ্যোক্তা: উন্নত মাছের খাদ্য ও আধুনিক মৎস্য চাষ প্রকল্প",
      description:
        "Driving aquaculture vitality and food security across rural Bangladesh. Leading importer of scientifically balanced fish feed and pioneer in commercial freshwater fish cultivation and modern delta aquaculture.",
      products: [
        "High-Protein Aquaculture Fish Feed",
        "Commercial Fish Cultivation & Nursery",
        "Carp & Tilapia Polyculture Projects",
        "Pond Water Quality & Aeration Solutions",
      ],
      image: "/images/rapid_agro_care.jpg",
      href: "/contact?concern=rapid-agro-care",
    },
  ] as SisterConcern[],

  contact: {
    address: "Sakrail, Gorpara, Manikgonj, Bangladesh",
    bengaliAddress: "সাকরাইল, গড়পাড়া, মানিকগঞ্জ, বাংলাদেশ",
    phoneNumbers: ["01713-574686", "01932-605971", "01689-703060"],
    primaryPhone: "01713-574686",
    phone: "01713-574686",
    email: "jananibd77@gmail.com",
    whatsapp: "+8801713574686",
    hours: "Saturday – Thursday: 9:00 AM – 8:00 PM (BST)",
  },

  relatedBrand: {
    name: "Janani Weaving Factory",
    bengaliName: "জননী উইভিং ফ্যাক্টরি",
    description:
      "Our celebrated rural handloom enterprise operating traditional wooden pit-looms. Renowned across Bangladesh for superfine Endi silk fabric (Than Kapor), heirloom Half-Silk (H/S) Sarees, and delicately woven Orna / Dupatta.",
    focus: [
      "Quality Endi Fabric (Than Kapor)",
      "Half-Silk (H/S) Sharee",
      "Handloom Endi Silk Orna / Dupatta",
      "Handloom Yardage",
    ],
  },

  navItems: [
    { label: "Home", bengaliLabel: "নীড়", href: "/" },
    { label: "Our Story", bengaliLabel: "আমাদের কথা", href: "/about" },
    { label: "Crafts", bengaliLabel: "কারুশিল্প", href: "/craftsmanship" },
    { label: "Collections", bengaliLabel: "সম্ভার", href: "/collections" },
    { label: "Journal", bengaliLabel: "সাময়িকী", href: "/journal" },
    { label: "Contact", bengaliLabel: "যোগাযোগ", href: "/contact" },
  ] as NavItem[],

  footerLinks: {
    collections: [
      { label: "Exclusive Panjabi & Fatua", href: "/collections?category=traditional-wear" },
      { label: "Artisanal Three-Piece (থ্রি-পিস)", href: "/collections/exclusive-handloom-embroidered-three-piece" },
      { label: "Janani Weaving Factory (Endi & Sarees)", href: "/collections?category=weaving-factory" },
      { label: "Nakshi Kantha", href: "/collections?category=nakshi-kantha" },
      { label: "Home Textiles", href: "/collections?category=home-textiles" },
      { label: "Bamboo & Cane", href: "/collections?category=bamboo-cane" },
      { label: "Golden Jute & Wall Art", href: "/collections?category=jute" },
      { label: "Rapid Agro Care", href: "/contact?concern=rapid-agro-care" },
    ],
    company: [
      { label: "About Janani & Heritage", href: "/about" },
      { label: "Sister Concerns", href: "/about#sister-concerns" },
      { label: "Our Craftsmanship", href: "/craftsmanship" },
      { label: "Artisan Journal", href: "/journal" },
      { label: "Corporate Inquiries", href: "/contact" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
};
