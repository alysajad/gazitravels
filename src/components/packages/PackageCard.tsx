"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { formatPrice } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { UmrahPackage } from "@/data/umrah-packages";
import { ZiyaratPackage } from "@/data/ziyarat-packages";

interface PackageCardProps {
  package: UmrahPackage | ZiyaratPackage;
  type: "umrah" | "ziyarat" | "kashmir";
  className?: string;
}

export function PackageCard({ package: pkg, type, className }: PackageCardProps) {
  const href = type === "ziyarat" ? `/ziyarat/${pkg.slug}` : `/${type}/${pkg.slug}`;

  return (
    <Link
      href={href}
      className={cn(
        "group block bg-surface rounded-card shadow-card overflow-hidden transition-all duration-normal ease-out hover:shadow-card-hover hover:-translate-y-1",
        className
      )}
    >
      {/* Image */}
      <div className="aspect-[16/10] overflow-hidden relative">
        <Image
          src={pkg.image}
          alt={pkg.title}
          fill
          className="object-cover object-center transition-transform duration-slow ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Tier Badge */}
        <div className="flex items-center justify-between mb-3">
          <span className="inline-flex items-center px-3 py-1 text-label font-mono font-medium text-dark bg-accent rounded-full uppercase tracking-wider">
            {"tier" in pkg ? pkg.tier : pkg.country}
          </span>
          <span className="text-body font-body font-medium text-gray-500">
            {pkg.duration}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display font-semibold text-heading-lg text-dark mb-2 group-hover:text-gray-500 transition-colors duration-fast">
          {pkg.title}
        </h3>

        {/* Description */}
        <p className="text-body text-gray-500 line-clamp-2 mb-4">
          {pkg.description}
        </p>

        {/* Price + CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <span className="text-label font-mono font-medium text-gray-500 uppercase tracking-wider">
              From
            </span>
            <div className="font-display font-bold text-heading-lg text-dark">
              {formatPrice(pkg.price)}
            </div>
          </div>

          <span className="inline-flex items-center gap-2 text-body font-body font-medium text-dark group-hover:text-accent-hover transition-colors duration-fast">
            Details
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 group-hover:bg-accent/10 transition-colors duration-fast">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}
