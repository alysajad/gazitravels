"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface StatCardProps {
  number: number | string;
  suffix?: string;
  label: string;
  className?: string;
}

export function StatCard({ number, suffix = "", label, className }: StatCardProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const isNumeric = typeof number === "number";

  useEffect(() => {
    if (!isInView || !isNumeric) return;

    const duration = 2000;
    const steps = 60;
    const increment = number / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= number) {
        setCount(number);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, number, isNumeric]);

  return (
    <div
      ref={ref}
      className={cn(
        "bg-surface rounded-card p-8 shadow-card transition-all duration-normal ease-out hover:shadow-card-hover hover:-translate-y-1",
        className
      )}
    >
      <div className="font-display font-bold text-4xl md:text-5xl text-dark">
        {isNumeric ? count.toLocaleString("en-IN") : number}
        {suffix}
      </div>
      <div className="mt-2 text-label font-mono font-medium text-gray-500 uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}
