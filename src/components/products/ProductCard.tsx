import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/data/products";

export interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group flex flex-col justify-between space-y-4">
      <div className="space-y-4">
        {/* Craft Artifact Image Frame - Pure Photography, Zero BG & Border */}
        <Link
          href={`/collections/${product.slug}`}
          className="relative block aspect-3/4 w-full overflow-hidden rounded-[1px]"
        >
          <Image
            src={product.images.main}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </Link>

        {/* Artifact Title */}
        <Link href={`/collections/${product.slug}`}>
          <h3 className="font-serif text-xl sm:text-[26px] text-stone-900 leading-snug line-clamp-1 font-normal hover:text-[#A84A28] transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Short Description */}
        <p className="text-sm sm:text-base text-stone-600 line-clamp-2 leading-relaxed font-sans">
          {product.shortDescription}
        </p>

        {/* Material Provenance */}
        <div className="text-xs sm:text-sm font-mono text-stone-600">
          <span className="text-stone-500 font-medium">Materials: </span>
          <span>{product.materials.join(", ")}</span>
        </div>
      </div>

      {/* Card Footer with Link */}
      <div className="pt-3 sm:pt-4 border-t border-stone-200 flex items-center justify-end">
        <Link
          href={`/collections/${product.slug}`}
          className="text-xs sm:text-sm uppercase tracking-[0.18em] font-semibold text-[#A84A28] hover:text-stone-900 transition-colors inline-flex items-center gap-1.5 group-hover:translate-x-0.5 duration-200"
        >
          <span>View Artifact</span>
          <span>→</span>
        </Link>
      </div>
    </article>
  );
}
