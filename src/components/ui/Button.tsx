import React from "react";
import Link from "next/link";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  isExternal,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium uppercase tracking-[0.2em] transition-all duration-300 rounded-[1px] select-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#A84A28]";

  const sizeStyles = {
    sm: "text-xs sm:text-sm h-10 px-5 gap-2 font-semibold",
    md: "text-sm sm:text-base h-12 px-8 gap-3 font-semibold",
    lg: "text-base sm:text-lg h-14 px-10 gap-4 font-semibold",
  };

  const variantStyles = {
    primary:
      "bg-stone-900 text-white hover:bg-[#A84A28] active:bg-[#8B381A] border border-stone-900 hover:border-[#A84A28]",
    outline:
      "bg-transparent text-stone-900 border border-stone-900 hover:border-[#A84A28] hover:text-[#A84A28] active:bg-stone-100",
    secondary:
      "bg-stone-100 text-stone-900 border border-stone-200 hover:border-[#B88E3E] hover:bg-white",
    ghost:
      "bg-transparent text-stone-900 hover:text-[#A84A28] hover:bg-stone-100 border border-transparent",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClasses}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
