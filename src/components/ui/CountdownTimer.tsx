"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface CountdownTimerProps {
  targetDate: string;
  className?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownTimer({ targetDate, className }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate).getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className={cn("flex items-center gap-6", className)}>
      {units.map((unit, index) => (
        <div key={unit.label} className="text-center">
          <div className="relative">
            <div className="w-20 h-20 bg-surface rounded-card shadow-card flex items-center justify-center">
              <span className="font-display font-bold text-4xl text-dark">
                {String(unit.value).padStart(2, "0")}
              </span>
            </div>
            {index < units.length - 1 && (
              <span className="absolute top-1/2 -right-4 -translate-y-1/2 text-2xl font-display text-gray-300">
                :
              </span>
            )}
          </div>
          <span className="mt-2 block text-label font-mono font-medium text-gray-500 uppercase tracking-wider">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}
