"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { formatPrice } from "@/lib/utils";
import { ArrowUpRight, Check } from "lucide-react";
import { UmrahPackage } from "@/data/umrah-packages";
import { ZiyaratPackage } from "@/data/ziyarat-packages";
import { HajjPackage } from "@/data/hajj-2027";

interface PackageCardProps {
  package: UmrahPackage | ZiyaratPackage | HajjPackage;
  type: "umrah" | "ziyarat" | "hajj" | "kashmir";
  className?: string;
}

export function PackageCard({ package: pkg, type, className }: PackageCardProps) {
  const href = type === "ziyarat" ? `/ziyarat/${pkg.slug}` : type === "hajj" ? `/hajj-2027` : `/${type}/${pkg.slug}`;
  
  // Determine if it should be highlighted (popular) based on tier
  const isPopular = "tier" in pkg && (pkg.tier === "Premium" || pkg.tier === "Standard") || ("tiers" in pkg && pkg.slug === "grand-ziyarat-iraq-iran");

  return (
    <div
      className={cn(
        "rounded-[32px] p-6 flex flex-col h-full transition-all duration-normal ease-out",
        isPopular
          ? "bg-dark text-white shadow-floating md:scale-105 z-10 border-0"
          : "bg-gray-50 border border-gray-200 text-dark hover:shadow-card-hover",
        className
      )}
    >
      <div className="flex items-center justify-between mb-6">
        <h4 className={cn("text-xs font-semibold", isPopular ? "text-accent" : "text-gray-500")}>
          {pkg.title}
        </h4>
        <span className={cn("px-2 py-0.5 text-[10px] font-mono font-medium rounded-full uppercase tracking-wider", isPopular ? "bg-white/10 text-white" : "bg-gray-200 text-gray-600")}>
          {pkg.duration}
        </span>
      </div>
      
      <div className="flex flex-col gap-1 mb-4">
        <span className="font-display font-bold text-3xl">{formatPrice(pkg.price)}</span>
        <span className={cn("text-xs", isPopular ? "text-gray-400" : "text-gray-500")}>/person</span>
      </div>

      <p className={cn("text-xs leading-relaxed mb-8", isPopular ? "text-gray-400" : "text-gray-500")}>
        {pkg.description}
      </p>

      <Link
        href={href}
        className={cn(
          "inline-flex items-center gap-2 pl-4 pr-1 py-1 rounded-full font-medium text-xs transition-colors duration-fast w-fit mb-8",
          isPopular ? "bg-white text-dark hover:bg-gray-100" : "bg-dark text-white hover:bg-dark-muted"
        )}
      >
        Select
        <div className={cn(
          "w-6 h-6 rounded-full flex items-center justify-center ml-1",
          isPopular ? "bg-accent text-dark" : "bg-accent text-dark"
        )}>
          <ArrowUpRight className="w-3 h-3" />
        </div>
      </Link>

      <div className="mt-auto pt-8 border-t border-gray-200/20">
        <p className={cn("text-xs font-semibold mb-4", isPopular ? "text-gray-300" : "text-gray-600")}>
          Includes:
        </p>
        <ul className="space-y-3">
          {pkg.highlights.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-xs">
              <div className="mt-0.5 w-3 h-3 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                <Check className="w-2 h-2 text-dark" />
              </div>
              <span className={isPopular ? "text-gray-300" : "text-gray-600"}>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
