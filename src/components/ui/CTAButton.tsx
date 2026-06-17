"use client";

import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface CTAButtonProps {
  href: string;
  variant?: "dark" | "accent" | "outline" | "accent-outline";
  children: React.ReactNode;
  className?: string;
  showArrow?: boolean;
  target?: string;
  rel?: string;
}

export function CTAButton({
  href,
  variant = "dark",
  children,
  className,
  showArrow = true,
  target,
  rel,
}: CTAButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-button font-medium text-sm transition-all duration-fast ease-out";

  const variantStyles = {
    dark: "bg-dark text-white hover:bg-dark-muted pl-6 pr-2 py-2 gap-3",
    accent: "bg-accent text-dark hover:bg-accent-hover pl-6 pr-2 py-2 gap-3",
    outline: "border-2 border-gray-200 text-dark hover:border-dark px-6 py-3.5 gap-2",
    "accent-outline": "border-2 border-white/40 text-white hover:bg-white hover:text-dark px-6 py-3.5 gap-2",
  };

  const iconStyles = {
    dark: "bg-accent text-dark w-8 h-8",
    accent: "bg-dark text-white w-8 h-8",
    outline: "bg-gray-100 text-dark group-hover:bg-dark group-hover:text-white w-5 h-5",
    "accent-outline": "bg-white/20 text-white group-hover:bg-dark group-hover:text-white w-5 h-5",
  };

  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={cn(
        "group",
        baseStyles,
        variantStyles[variant],
        className
      )}
    >
      {children}
      {showArrow && (
        <span
          className={cn(
            "inline-flex items-center justify-center rounded-full transition-transform duration-fast group-hover:scale-105 flex-shrink-0",
            iconStyles[variant]
          )}
        >
          <ArrowUpRight className={variant === "dark" || variant === "accent" ? "w-4 h-4" : "w-3 h-3"} />
        </span>
      )}
    </Link>
  );
}
