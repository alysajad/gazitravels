"use client";

import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {badge && (
        <span className="inline-flex items-center gap-1.5 rounded-button bg-gray-100 px-3 py-1 text-label font-mono font-medium text-gray-500 uppercase tracking-wider mb-6">
          {badge}
        </span>
      )}
      <h2 className="font-display font-semibold text-display-md text-dark text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-body-lg text-gray-500 max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
