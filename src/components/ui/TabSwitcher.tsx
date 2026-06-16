"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface Tab {
  id: string;
  label: string;
}

interface TabSwitcherProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  className?: string;
}

export function TabSwitcher({
  tabs,
  activeTab,
  onTabChange,
  className,
}: TabSwitcherProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 p-1 bg-gray-100 rounded-button",
        className
      )}
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={cn(
            "relative px-5 py-2.5 text-label font-mono font-medium uppercase tracking-wider rounded-button transition-colors duration-fast",
            activeTab === tab.id ? "text-dark" : "text-gray-500 hover:text-dark"
          )}
        >
          <AnimatePresence>
            {activeTab === tab.id && (
              <motion.span
                layoutId="activeTab"
                className="absolute inset-0 bg-surface rounded-button shadow-sm"
                initial={false}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </AnimatePresence>
          <span className="relative z-10">{tab.label}</span>
        </button>
      ))}
    </div>
  );
}
