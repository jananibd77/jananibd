"use client";

import React, { useMemo, useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { products, Product } from "@/data/products";

// Historical and anthropological narratives for each craft discipline
const historicalNarratives: Record<string, { lineage: string; techniqueDepth: string; detailImage?: string }> = {
  "prod-panjabi-01": {
    lineage:
      "The Bengali Panjabi evolved from the royal angarakha court attire of the Nawabs of Bengal, where fine cotton meets high tailoring. In Manikganj, M/S Janani Craft & Fashion preserves this sartorial heritage through 100% pure combed Adi Dhuti cotton, hand-finished with antique gold and crimson maroon floral collar needlework.",
    techniqueDepth:
      "Constructed from 100% combed Adi Dhuti cotton cut with single-needle French seams. Artisans hand-embroider the mandarin collar, chest placket, and matching sleeve cuffs before securing genuine mother-of-pearl shell buttons.",
    detailImage: "/images/panjabi_white_maroon_mannequin.png",
  },
  "prod-panjabi-02": {
    lineage:
      "The serene sky-blue Panjabi represents Bengal's celebration of riverine sky and delta breezes. Tailored by M/S Janani Craft & Fashion for modern festive occasions, harmonizing cool cotton texture with vibrant royal-blue floral embroidery.",
    techniqueDepth:
      "Crafted from fine combed cotton with dense royal blue floral vine needlework along the structured mandarin collar and vertical button placket, finished with gold-rimmed metallic buttons and matching floral cuff borders.",
    detailImage: "/images/panjabi_skyblue_floral_mannequin.png",
  },
  "prod-fatua-01": {
    lineage:
      "A quintessential garment of delta riverine life, the Fatua represents rural Bengal's answer to tropical warmth and manual ease. Adopted during the Swadeshi self-reliance movements of the early 20th century, the short tunic symbolizes agrarian dignity and breathable comfort.",
    techniqueDepth:
      "Constructed from 100% Deshi cotton woven on traditional wooden looms, embellished with intricate hand-needle embroidery (হাতের কাজ) across the notched collar and chest yoke, reinforced side vents for movement, and buttons hand-carved from seasoned coconut shells.",
    detailImage: "/images/fatua_kora_ecru_yoke_macro.png",
  },
  "prod-fatua-02": {
    lineage:
      "Bengal river-indigo dyeing has a profound heritage across Manikganj and the delta floodplains. Woven into breathable khadi cotton, this deep botanical blue Fatua connects ancient natural dye chemistry with modern casual cultural poise.",
    techniqueDepth:
      "Yarn is dip-dyed multiple times in natural indigo vats before weaving on hand-operated khadi looms. Hand-needle embroidered along the neckline and placket with unbleached cotton threads and dark coconut shell buttons.",
    detailImage: "/images/fatua_indigo_khadi_mannequin.png",
  },
  "prod-fatua-03": {
    lineage:
      "Celebrating Bengal's fertile alluvial soil and lush vegetation, the olive and terracotta Fatua reflects organic earthen tones. Tailored for comfort in humid delta climates with short sleeves and relaxed ease.",
    techniqueDepth:
      "Handwoven from combed Deshi cotton yarns dyed in natural plant pigments. Features geometric folk needlework across the notched collar and placket with carved coconut-shell button closures.",
    detailImage: "/images/fatua_olive_earth_mannequin.png",
  },
  "prod-endi-01": {
    lineage:
      "Endi (or Eri) silk is revered across Bengal and the Brahmaputra valley as the 'Ahimsa' or ethical peace silk. In delta folklore, Eri sericulture allows the moth to emerge naturally from its cocoon before the silk filaments are harvested, creating a thermal fiber that breathes in humid heat and insulates in delta winter dampness.",
    techniqueDepth:
      "Woven exclusively on traditional wooden pit-looms by senior master tantis at M/S Janani Weaving Factory in Sakrail, Manikganj. The yarn is hand-reeled to maintain its distinctive organic slub texture, producing continuous rolls of 30-meter Than Kapor.",
    detailImage: "/images/hero_artisan_weaver.jpg",
  },
  "prod-saree-01": {
    lineage:
      "Tant cotton sarees embody the soul of Bengal's handloom heritage. Master weavers in Manikganj interweave fine combed cotton warps with vibrant horizontal bands and traditional floral star boutis, delivering an airy, breathable drape tuned to the delta climate.",
    techniqueDepth:
      "Crafted with extra-weft metallic zari temple borders (mandir par) and horizontal geometric bands hand-thrown on shuttle pit-looms. Finished with delicate hand-knotted dual-tone tassel fringe along the pallu edge.",
    detailImage: "/images/saree_pallu_tassel_macro_detail.png",
  },
  "prod-saree-02": {
    lineage:
      "The geometric mosaic tile border represents Bengal's confluence of delta folk geometry and festive coloration. Woven by M/S Janani Weaving Factory, this radiant magenta-pink saree features micro-bandhani textures framed by contrasting royal purple, emerald, and gold mosaic blocks.",
    techniqueDepth:
      "Weavers hand-control extra-weft shuttles across the border channels to lay continuous multi-colored geometric diamonds. Finished with matching tailored blouse fabric with mirrored border cuffs.",
    detailImage: "/images/saree_magenta_mosaic_mannequin.png",
  },
  "prod-saree-03": {
    lineage:
      "Drawing inspiration from ancestral riverine tribal and folk weaving patterns, this deep violet-indigo cotton saree celebrates natural earthen tones. Terracotta-dyed yarns form intricate diamond lattice (জাফরি) panels across the anchal.",
    techniqueDepth:
      "Woven on reinforced wooden pit-looms over 9 days, balancing warp tension across dense geometric border bands and teardrop boutis. Accompanied by a chevron-patterned handloom blouse.",
    detailImage: "/images/saree_indigo_diamond_mannequin.png",
  },
  "prod-saree-04": {
    lineage:
      "A contemporary heritage synthesis uniting serene slate-grey with vibrant madder ruby pink. Styled for modern boutique elegance, featuring rhythmic architectural arches, polka dots, and folk floral panels.",
    techniqueDepth:
      "Crafted with combed cotton yarns and natural plant-derived madder dyes. Master tantis coordinate shuttle flight to achieve crisp geometric definitions and fluid drape.",
    detailImage: "/images/saree_grey_ruby_geometric_mannequin.png",
  },
  "prod-orna-01": {
    lineage:
      "The Orna (or Dupatta) carries centuries of cultural symbolism in rural Bengal, worn as a shield against the river breeze, ceremonial modesty, and festive adornment. The Endi silk orna showcases the unbleached, golden-ivory sheen of wild riverine silk.",
    techniqueDepth:
      "Woven on specialized pit-looms in Manikganj with fine golden zari selvedge borders. Each end is finished with hand-knotted tassel fringe created by women artisans who roll and tie individual warp threads by hand.",
    detailImage: "/images/endi_silk_orna.jpg",
  },
  "prod-agro-01": {
    lineage:
      "The alluvial floodplain of Manikganj and the Dhaleshwari river basin has sustained inland fisheries for millennia. Rapid Agro Care was established to modernize rural aquaculture, importing scientifically formulated feeds that fortify local fish farmers and community ponds.",
    techniqueDepth:
      "Formulated with balanced marine proteins, essential amino acids, and fortified vitamins. Extruded under certified quality controls to guarantee high water stability and optimal feed conversion ratio (FCR) for Rohu, Katla, and Tilapia.",
    detailImage: "/images/rapid_agro_care.jpg",
  },
  "prod-agro-02": {
    lineage:
      "Fish cultivation and commercial aquaculture form the economic heartbeat of rural livelihoods across Manikganj and the delta floodplains. Rapid Agro Care operates modern freshwater fish farming projects, carp polyculture, and nursery management to elevate aquaculture productivity.",
    techniqueDepth:
      "Implementation of scientific pond preparation, optimal stocking density, dissolved oxygen aeration management, and balanced nutrition that ensure rapid, healthy fish growth and superior harvest yield for local fisheries.",
    detailImage: "/images/rapid_agro_fish_cultivation.jpg",
  },
  "prod-kantha-01": {
    lineage:
      "Mentioned in 16th-century Bengali epics and folk songs, Nakshi Kantha originated as a domestic art where rural women recycled worn cotton saris into embroidered quilts. Stitched during monsoon afternoons, each quilt served as a living textile diary of folk mythology, delta flora, and family blessings.",
    techniqueDepth:
      "Built from four layers of unbleached Deshi cotton unified entirely by the traditional running stitch (kantha fhor). Master embroiderers stitch concentric circles radiating from a central eight-petal sacred lotus (Astadala Padma), taking 6 to 8 weeks per heirloom quilt.",
    detailImage: "/images/nakshi_kantha_macro.jpg",
  },
  "prod-bamboo-01": {
    lineage:
      "Bengal's riverbed bamboo groves and wild cane forests have furnished rural homesteads with pliant, architectural homeware for hundreds of years. The craft demands intimate knowledge of harvest cycles—artisans cut mature three-year-old culms during the dry winter to resist insect boring.",
    techniqueDepth:
      "Bamboo poles are split into paper-thin ribbons using traditional hand draw-knives (dao) and seasoned in saline water. The base is hand-plaited into a dense herringbone weave that distributes heavy loads, secured with bent cane handles and natural beeswax sealant.",
    detailImage: "/images/bamboo_cane_tray.jpg",
  },
  "prod-jute-01": {
    lineage:
      "Known as the 'Golden Fiber' (Sonali Aash), Bangladeshi jute flourished along the silt-rich banks of the Padma and Brahmaputra rivers. While historically treated as industrial sackcloth, Janani restores jute to its rightful place in sustainable luxury, celebrating its carbon-negative, biodegradable pedigree.",
    techniqueDepth:
      "Unbleached Grade-A tossa jute fiber is hand-braided into continuous multi-strand cords before being coil-stitched on heavy frame machines. Finished with reinforced interior cotton linings and vegetable-tanned leather trim.",
    detailImage: "/images/jute_colorblock_dualpocket_totes.png",
  },
  "prod-jute-wall-01": {
    lineage:
      "Jute wall art represents the evolution of Bengal's golden fiber from utilitarian sackcloth to decorative heritage craft. Rural artisans in Faridpur and Narsingdi have transformed jute into sculptural wall hangings that celebrate delta mythology — lotus blossoms, swimming fish, and geometric folk borders — all rendered in the warm amber tones of natural jute fiber.",
    techniqueDepth:
      "Master jute craftspersons hand-braid Grade-A tossa jute into continuous cords, then coil and weave them into intricate folk motif patterns. Each layer is secured with natural cotton thread before mounting onto a seasoned timber dowel with cotton cord suspension. Finished with hand-knotted jute tassel fringe along the bottom edge.",
    detailImage: "/images/jute_wall_hanging_main.png",
  },
  "prod-runner-01": {
    lineage:
      "Table textiles in Bengal have long combined utilitarian dining protection with folk textile embroidery. This runner set brings the unhurried cadence of rural women's stitching circles to contemporary dining spaces.",
    techniqueDepth:
      "Woven on handlooms using combed Deshi cotton, then hand-embroidered with terracotta and charcoal running-stitch borders. Finished with hand-tied tassel fringe along both ends.",
    detailImage: "/images/table_liner_dining.jpg",
  },
  "prod-wallmat-01": {
    lineage:
      "Embroidered fabric wall hangings (নকশী ওয়ালমেট) have adorned Bengali heritage homes for generations as cultural talismans celebrating delta life. The motif of the traditional riverboat (নকশী তরী) sailing on river ripples signifies prosperous journeys, riverine commerce, and delta poetry.",
    techniqueDepth:
      "Stitched with authentic Nakshi Kantha running stitch (হাতের কাজ) across layered unbleached cotton fabric. Artisans meticulously craft the contours of the wooden dinghy, aquatic lotus blooms, swimming fish, and geometric borders before mounting it onto a polished timber hanging rod.",
    detailImage: "/images/fabric_wall_mat_macro_detail.jpg",
  },
  "prod-threepiece-01": {
    lineage:
      "The Pakistani and Bengali inspired boutique Three-Piece (Kameez, Salwar, and Dupatta / থ্রি-পিস) is celebrated for its ethereal, graceful silhouette. In Manikganj, M/S Janani Craft & Fashion crafts this pastel blush-pink ensemble pairing breathable combed Deshi cotton with delicate hand-stitched floral needlework and scalloped organdy cutwork lace.",
    techniqueDepth:
      "Crafted with double-fused notched V-mandarin collars, hand-stitched running floral vines, and precision cutwork lace inserts along the placket, cuffs, and hem. Accompanied by a sheer organdy dupatta with embroidered scalloped borders and hand-knotted tassels.",
    detailImage: "/images/threepiece_pastel_pink_yoke_macro.png",
  },
  "prod-threepiece-02": {
    lineage:
      "Digital and block-printed ethnic cotton ensembles (এসি কটন থ্রি-পিস) provide vibrant everyday comfort while celebrating traditional delta textile motifs. Produced by M/S Janani Craft & Fashion, this rose-pink and charcoal edition combines modern geometric symmetry with vintage paisley floral borders.",
    techniqueDepth:
      "Printed using precision natural pigment dyes across high-density combed cotton yardage. Finished with tailored single-needle French seams, a structured printed chest placket, and a lightweight drape-friendly cotton dupatta.",
    detailImage: "/images/threepiece_printed_black_rose_mannequin.png",
  },
  "prod-threepiece-03": {
    lineage:
      "Rooted in Bengal's handloom tapestry tradition, this regal royal-indigo and magenta ensemble bridges royal court aesthetic with contemporary boutique tailoring. Woven in collaboration with Janani Weaving Factory pit-looms in Manikganj.",
    techniqueDepth:
      "Features hand-thrown extra-weft Jamdani geometric boutis and temple borders woven with antique metallic zari threads. Complemented by a sheer dual-tone dupatta accented with hand-tied silk tassels.",
    detailImage: "/images/threepiece_royal_blue_jamdani_mannequin.png",
  },
  "prod-vase-01": {
    lineage:
      "Originating from Bengal's pastoral domestic traditions where textile scraps and handloom canvas are repurposed into decorative vessel sculptures (কাপড়ের ফুলদানি). Janani Handicrafts bridges domestic Nakshi Kantha needlecraft with sculptural interior design, celebrating the timeless eight-petal lotus (পদ্ম) motif across reinforced Deshi cotton canvas.",
    techniqueDepth:
      "Crafted from layered unbleached Deshi cotton canvas stiffened with natural jute fiber interfacing. Rural women artisans painstakingly execute dense running stitches (হাতের কাঁথা ফোঁড়) with vegetable-dyed terracotta and indigo threads before mounting the canvas onto a stable weighted base ring.",
    detailImage: "/images/cloth_vase_needlework_macro.png",
  },
  "prod-vase-02": {
    lineage:
      "Inspired by the ancestral Bengali earthen water pitcher (কলসি / ঘট), this sculptural cloth vessel captures the grace of riverine domestic life. Embellished with genuine sea cowrie shells (কড়ি) — ancient currency and symbols of prosperity and protective blessings across rural Bengal.",
    techniqueDepth:
      "Patterned into curved pitcher gores from botanical indigo-dyed cotton canvas, hand-joined with French corded seams. Rolled fabric handles are reinforced with braided jute cords, and cowrie shells are individually cross-stitched along the flared rim with polished brass needlework.",
    detailImage: "/images/cloth_vase_workshop_stilllife.png",
  },
  "prod-purse-01": {
    lineage:
      "Bengali women's evening purses unite delicate needlecraft with durable golden jute. Crafted by M/S Janani Craft & Fashion in Manikganj, this clutch preserves authentic Nakshi Kantha silk embroidery framed in antique brass metalwork.",
    techniqueDepth:
      "Hand-embroidered silk-cotton fabric bonded to reinforced natural jute lining. Fitted with an antique brass kiss-lock closure frame, interior card slots, and detachable gold-toned link shoulder chain.",
    detailImage: "/images/ladies_handcrafted_purse_clutch.png",
  },
  "prod-showpiece-01": {
    lineage:
      "Delta riverine mythology honors the legendary Mayurpankhi boat (ময়ূরপঙ্খী তরী) as an emblem of voyage and agrarian prosperity. Hand-carved in Manikganj from seasoned teakwood and complemented by lost-wax cast antique brass artifacts.",
    techniqueDepth:
      "Sculpted using traditional hand gouges and chisels from seasoned Burma teakwood, polished with organic beeswax and vegetable lacquer. Accompanied by hand-cast Dhamrai brass desk weights.",
    detailImage: "/images/home_office_decorative_showpiece.png",
  },
  "prod-saree-05": {
    lineage:
      "Woven on traditional wooden pit-looms in Sakrail, Manikgonj, this heritage drape edition Tant saree embodies the airy grace and featherlight breathability of Bengal's riverine handloom tradition.",
    techniqueDepth:
      "Warp-tensioned combed Deshi cotton interworked with hand-thrown extra-weft shuttle motifs, geometric temple borders (mandir par), and hand-knotted pallu fringe.",
    detailImage: "/images/saree_lifestyle_woman_drape_02.png",
  },
};


interface CategoryTab {
  id: string;
  name: string;
  bengaliName: string;
  hash: string;
}

const categoryTabs: CategoryTab[] = [
  { id: "all", name: "All Works", bengaliName: "সকল সম্ভার", hash: "all" },
  { id: "panjabi", name: "Panjabi & Fatua", bengaliName: "পাঞ্জাবি ও ফতুয়া", hash: "panjabi" },
  { id: "three-piece", name: "Three-Piece", bengaliName: "থ্রি-পিস", hash: "three-piece" },
  { id: "sarees", name: "Handloom Sarees", bengaliName: "তাঁতের শাড়ি", hash: "sarees" },
  { id: "cloth-vases", name: "Cloth Vases", bengaliName: "কাপড়ের ফুলদানি", hash: "cloth-vases" },
  { id: "nakshi-kantha", name: "Nakshi Kantha & Wall Art", bengaliName: "নকশিকাঁথা ও তরী", hash: "nakshi-kantha" },
  { id: "jute", name: "Golden Jute", bengaliName: "সোনালী পাট", hash: "jute" },
  { id: "endi-silk", name: "Endi Silk", bengaliName: "এন্ডি রেশম", hash: "endi-silk" },
  { id: "bamboo-cane", name: "Bamboo & Cane", bengaliName: "বাঁশ ও বেত", hash: "bamboo-cane" },
];

function getProductAliases(product: Product): string[] {
  const aliases: string[] = [product.id, product.slug];

  if (product.slug.includes("panjabi")) {
    aliases.push("panjabi", "traditional-wear", "menswear");
  }
  if (product.slug.includes("fatua")) {
    aliases.push("fatua", "traditional-wear", "menswear");
  }
  if (product.slug.includes("three-piece")) {
    aliases.push("three-piece", "threepiece", "womenswear");
  }
  if (product.slug.includes("sharee") || product.slug.includes("saree")) {
    aliases.push("sarees", "saree", "tant-saree", "weaving-factory");
  }
  if (product.slug.includes("vase")) {
    aliases.push("cloth-vases", "cloth-vase", "vases", "vase", "home-textiles");
  }
  if (product.slug.includes("wall-mat")) {
    aliases.push("wall-mat", "fabric-wall-mat", "nakshi-kantha");
  }
  if (product.slug.includes("jute-wall")) {
    aliases.push("jute-wall-hanging", "jute-wall", "jute");
  }
  if (product.slug.includes("jamdani") || product.description.toLowerCase().includes("jamdani")) {
    aliases.push("jamdani");
  }
  if (product.slug.includes("endi")) {
    aliases.push("endi-silk", "endi", "weaving-factory");
  }
  if (product.category === "nakshi-kantha" || product.slug.includes("kantha")) {
    aliases.push("nakshi-kantha", "kantha");
  }
  if (product.category === "bamboo-cane") {
    aliases.push("bamboo-cane", "cane", "bamboo");
  }
  if (product.category === "jute") {
    aliases.push("jute", "golden-jute");
  }
  if (product.category === "home-textiles") {
    aliases.push("home-textiles");
  }
  if (product.slug.includes("purse")) {
    aliases.push("ladies-purse", "purse", "jute");
  }
  if (product.slug.includes("showpiece")) {
    aliases.push("showpieces", "showpiece", "home-decor");
  }

  return Array.from(new Set(aliases));
}

export function CollectionsClient() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const [activeTab, setActiveTab] = useState<string>("all");
  const scrollTrackRef = useRef<HTMLDivElement>(null);

  const filteredProducts = useMemo(() => {
    // Exclude non-craft agro products
    const craftProducts = products.filter((p) => p.sisterConcern !== "Rapid Agro Care");

    if (!categoryParam || categoryParam === "all") {
      return craftProducts;
    }

    // Support subcategory aliases and craft queries
    if (categoryParam === "three-piece" || categoryParam === "threepiece") {
      return craftProducts.filter((p) => p.slug.includes("three-piece"));
    }
    if (categoryParam === "cloth-vases" || categoryParam === "cloth-vase" || categoryParam === "vase") {
      return craftProducts.filter((p) => p.slug.includes("vase"));
    }
    if (categoryParam === "sarees" || categoryParam === "saree") {
      return craftProducts.filter((p) => p.slug.includes("sharee") || p.slug.includes("saree"));
    }
    if (categoryParam === "panjabi") {
      return craftProducts.filter((p) => p.slug.includes("panjabi"));
    }
    if (categoryParam === "fatua") {
      return craftProducts.filter((p) => p.slug.includes("fatua"));
    }
    if (categoryParam === "jamdani") {
      return craftProducts.filter((p) => p.slug.includes("jamdani") || p.description.toLowerCase().includes("jamdani"));
    }
    if (categoryParam === "endi-silk" || categoryParam === "endi") {
      return craftProducts.filter((p) => p.slug.includes("endi"));
    }
    if (categoryParam === "wall-mat") {
      return craftProducts.filter((p) => p.slug.includes("wall-mat"));
    }
    if (categoryParam === "jute-wall-hanging") {
      return craftProducts.filter((p) => p.slug.includes("jute-wall"));
    }
    if (categoryParam === "ladies-purse" || categoryParam === "purse") {
      return craftProducts.filter((p) => p.slug.includes("purse"));
    }
    if (categoryParam === "showpieces" || categoryParam === "showpiece") {
      return craftProducts.filter((p) => p.slug.includes("showpiece"));
    }

    return craftProducts.filter((product) => product.category === categoryParam);
  }, [categoryParam]);

  // Robust, reliable smooth scroll to target hash accounting for the fixed navbar
  const scrollToTarget = (hashName: string) => {
    if (typeof window === "undefined") return;
    const cleanHash = hashName.replace("#", "").trim();
    if (!cleanHash || cleanHash === "all") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const target =
      document.getElementById(cleanHash) ||
      document.querySelector(`[data-id="${cleanHash}"]`) ||
      document.querySelector(`[data-slug="${cleanHash}"]`) ||
      document.querySelector(`[data-aliases~="${cleanHash}"]`);

    if (target) {
      const headerOffset = 96; // Offset for pinned fixed navbar + tab bar
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleHash = () => {
      if (typeof window === "undefined") return;
      const currentHash = window.location.hash.replace("#", "").trim();
      if (currentHash) {
        setActiveTab(currentHash);
        scrollToTarget(currentHash);
      }
    };

    // Staggered triggers to account for Next.js hydration, image layout, and Suspense mount
    handleHash();
    const t1 = setTimeout(handleHash, 150);
    const t2 = setTimeout(handleHash, 500);

    window.addEventListener("hashchange", handleHash);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener("hashchange", handleHash);
    };
  }, [categoryParam]);

  return (
    <div className="w-full space-y-12 lg:space-y-16">
      {/* ── Sticky Quick-Jump Category Navigation Tabs ─────────────── */}
      <div className="sticky top-[64px] sm:top-[68px] z-30 -mx-5 sm:-mx-8 md:-mx-12 lg:-mx-16 xl:-mx-20 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-3 bg-[#FAF8F5]/95 backdrop-blur-md border-y border-stone-200">
        <div
          ref={scrollTrackRef}
          className="flex items-center gap-2 overflow-x-auto pb-1 pt-0.5 scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {categoryTabs.map((tab) => {
            const isActive =
              (tab.hash === "all" && (!activeTab || activeTab === "all") && !categoryParam) ||
              activeTab === tab.hash ||
              (tab.id === "panjabi" && (activeTab === "fatua" || activeTab === "traditional-wear")) ||
              (categoryParam && (categoryParam === tab.id || categoryParam === tab.hash));

            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.hash);
                  scrollToTarget(tab.hash);
                  if (tab.hash === "all") {
                    history.replaceState(null, "", "/collections");
                  } else {
                    history.replaceState(null, "", `/collections#${tab.hash}`);
                  }
                }}
                className={`shrink-0 px-3.5 sm:px-4 py-2 rounded-[1px] text-xs font-mono uppercase tracking-[0.14em] transition-all border ${
                  isActive
                    ? "bg-[#182822] text-white border-[#182822] font-semibold"
                    : "bg-white/80 text-stone-700 border-stone-200 hover:border-stone-400 hover:bg-white"
                }`}
              >
                <span>{tab.name}</span>
                <span className="font-serif-bengali ml-1.5 text-[11px] opacity-75 font-normal">
                  {tab.bengaliName}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {categoryParam && categoryParam !== "all" && (
        <div className="flex items-center justify-between pb-4 border-b border-stone-200 text-xs font-mono">
          <span className="text-stone-600">
            Filtered Archive · <strong className="text-stone-900">{filteredProducts.length}</strong> Works
          </span>
          <Link
            href="/collections"
            onClick={() => setActiveTab("all")}
            className="text-[#A84A28] hover:underline font-semibold uppercase tracking-wider"
          >
            ← View All Works
          </Link>
        </div>
      )}

      {/* ── Dedicated Full-Width Sections for Each Product ───────────── */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-24 space-y-4 border border-stone-200 rounded-[1px] bg-[#FAF8F5]">
          <p className="font-serif text-2xl text-stone-900">No Historical Works Found</p>
          <p className="text-sm text-stone-600 font-sans">
            No archival works matched your search query.
          </p>
          <Link
            href="/collections"
            onClick={() => setActiveTab("all")}
            className="inline-block px-6 py-2.5 bg-stone-900 text-white text-xs uppercase tracking-[0.2em] font-mono rounded-[1px] hover:bg-[#A84A28] transition-colors"
          >
            Show All Works
          </Link>
        </div>
      ) : (
        <div className="w-full divide-y divide-stone-200">
          {filteredProducts.map((product, idx) => {
            const isEven = idx % 2 === 0;
            const narrative = historicalNarratives[product.id];
            const aliases = getProductAliases(product);

            return (
              <section
                key={product.id}
                id={product.slug}
                data-id={product.id}
                data-slug={product.slug}
                data-aliases={aliases.join(" ")}
                className="w-full py-10 sm:py-16 lg:py-24 group/section scroll-mt-28 sm:scroll-mt-36 relative"
              >
                {/* Discrete invisible anchor targets for all matching aliases */}
                {aliases.map((alias) => (
                  <span
                    key={alias}
                    id={alias}
                    className="absolute -top-28 sm:-top-36 left-0 pointer-events-none opacity-0"
                    aria-hidden="true"
                  />
                ))}
                <div
                  className={`flex flex-col ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-8 sm:gap-10 lg:gap-16 items-center`}
                >
                  {/* ── Left/Right: Pure Photographic Imagery Viewport ── */}
                  <div className="w-full lg:w-[52%] xl:w-[54%] flex-shrink-0 space-y-3">
                    {/* Primary Photo Frame — natural aspect ratio, full width, no cropping */}
                    <div className="w-full overflow-hidden rounded-[1px]">
                      <Image
                        src={product.images.main}
                        alt={product.name}
                        width={1200}
                        height={900}
                        sizes="(max-width: 1024px) 100vw, 54vw"
                        className="w-full h-auto transition-transform duration-[1400ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover/section:scale-[1.03]"
                        priority={idx < 2}
                      />
                    </div>

                    {/* Detail & Lifestyle Thumbnails (only if different from main) */}
                    {(product.images.detail && product.images.detail !== product.images.main) ||
                     (product.images.lifestyle && product.images.lifestyle !== product.images.main && product.images.lifestyle !== product.images.detail) ? (
                      <div className="grid grid-cols-2 gap-2.5">
                        {product.images.detail && product.images.detail !== product.images.main && (
                          <div className="relative aspect-4/3 w-full overflow-hidden rounded-[1px]">
                            <Image
                              src={product.images.detail}
                              alt={`${product.name} macro detail`}
                              fill
                              sizes="(max-width: 1024px) 50vw, 27vw"
                              className="object-cover"
                            />
                          </div>
                        )}
                        {product.images.lifestyle && product.images.lifestyle !== product.images.main && product.images.lifestyle !== product.images.detail && (
                          <div className="relative aspect-4/3 w-full overflow-hidden rounded-[1px]">
                            <Image
                              src={product.images.lifestyle}
                              alt={`${product.name} lifestyle context`}
                              fill
                              sizes="(max-width: 1024px) 50vw, 27vw"
                              className="object-cover"
                            />
                          </div>
                        )}
                      </div>
                    ) : null}
                  </div>

                  {/* ── Right/Left: Deep Historical & Editorial Dossier ── */}
                  <div className="w-full lg:flex-1 space-y-5 sm:space-y-6">
                    {/* Bilingual Titles */}
                    <div className="space-y-1">
                      <p className="font-serif-bengali text-xl sm:text-2xl md:text-3xl text-stone-400 leading-snug">
                        {product.bengaliName}
                      </p>
                      <h2 className="font-serif text-2xl sm:text-3xl lg:text-[42px] text-stone-900 font-normal leading-[1.12] sm:leading-[1.1]">
                        {product.name}
                      </h2>
                    </div>

                    {/* Historical Lineage Narrative */}
                    <div className="border-l-2 border-[#A84A28] pl-3.5 sm:pl-4 py-1 sm:py-1.5 space-y-1">
                      <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] font-mono text-[#A84A28] font-semibold">
                        Historical Lineage &amp; Heritage
                      </p>
                      <p className="text-sm sm:text-base text-stone-700 font-sans leading-relaxed">
                        {narrative?.lineage || product.description}
                      </p>
                    </div>

                    {/* Technique & Making Depth */}
                    <div className="space-y-1 text-sm text-stone-600 font-sans leading-relaxed">
                      <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] font-mono text-stone-400 font-semibold">
                        Artisanal Technique &amp; Crafting
                      </p>
                      <p>
                        {narrative?.techniqueDepth || product.craftInfo.technique}
                      </p>
                    </div>

                    {/* 4-Point Provenance Metadata Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-3.5 sm:pt-4 pb-3.5 sm:pb-4 border-y border-stone-200 text-xs font-sans">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-mono mb-0.5">
                          Artisan Cluster
                        </p>
                        <p className="font-semibold text-stone-800 leading-snug">
                          {product.craftInfo.origin}
                        </p>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-mono mb-0.5">
                          Master Karigar Role
                        </p>
                        <p className="font-semibold text-stone-800 leading-snug">
                          {product.craftInfo.artisanRole}
                        </p>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-mono mb-0.5">
                          Crafting Duration
                        </p>
                        <p className="font-semibold text-stone-800 leading-snug">
                          {product.craftInfo.craftingDuration}
                        </p>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-mono mb-0.5">
                          Raw Materials
                        </p>
                        <p className="font-semibold text-stone-800 leading-snug line-clamp-2">
                          {product.materials.join(", ")}
                        </p>
                      </div>
                    </div>

                    {/* Direct Institutional Commission / Inquiry Link (NO PRICES) */}
                    <div className="pt-2">
                      <Link
                        href={`/contact?inquiry=${encodeURIComponent(product.name)}`}
                        className="group/cta inline-flex items-center gap-2.5 sm:gap-3"
                      >
                        <span className="text-xs sm:text-sm uppercase tracking-[0.18em] sm:tracking-[0.22em] font-semibold text-stone-900 group-hover/cta:text-[#A84A28] transition-colors duration-300">
                          Commission an Archival Inquiry for this Work
                        </span>
                        <span className="h-[1.5px] w-6 sm:w-8 bg-stone-300 group-hover/cta:w-12 sm:group-hover/cta:w-14 group-hover/cta:bg-[#A84A28] transition-all duration-300 rounded-full" />
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      )}

      {/* ── 4. Archival Provenance & Inquiries Bottom Strip ───────────── */}
      <div className="border border-stone-200 rounded-[1px] p-5 sm:p-10 lg:p-12 bg-[#FAF8F5] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8">
        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B88E3E]" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#B88E3E] font-mono font-semibold">
              Institutional Archiving &amp; Commissions
            </span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-stone-900 font-normal leading-snug">
            Bespoke Atelier Orders &amp; Handloom Yardage
          </h3>
          <p className="text-sm sm:text-base text-stone-600 font-sans leading-relaxed">
            All pieces in this permanent archive are produced on authentic wooden pit-looms or hand-embroidered by
            rural artisans in Sakrail, Gorpara, Manikgonj. Connect directly with our management for museum commissions,
            curated exhibitions, and bespoke corporate attire.
          </p>
        </div>

        <Link
          href="/contact"
          className="w-full md:w-auto shrink-0 px-7 sm:px-8 py-3.5 sm:py-4 bg-stone-900 hover:bg-[#A84A28] text-white text-xs sm:text-sm uppercase tracking-[0.22em] font-semibold rounded-[1px] transition-colors duration-300 text-center"
        >
          Connect With Management →
        </Link>
      </div>

    </div>
  );
}
