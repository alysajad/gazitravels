"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TabSwitcher } from "@/components/ui/TabSwitcher";
import { PackageCard } from "@/components/packages/PackageCard";
import { umrahPackages } from "@/data/umrah-packages";
import { CTASection } from "@/components/sections/CTASection";

const filters = [
  { id: "all", label: "All Packages" },
  { id: "economy", label: "Economy" },
  { id: "standard", label: "Standard" },
  { id: "premium", label: "Premium" },
  { id: "family", label: "Family" },
  { id: "ramadan", label: "Ramadan" },
];

export default function UmrahPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredPackages =
    activeFilter === "all"
      ? umrahPackages
      : umrahPackages.filter(
          (pkg) => pkg.tier.toLowerCase() === activeFilter
        );

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-24 md:pt-32 pb-16 md:pb-20 bg-gray-100">
          <div className="absolute inset-0 bg-[url('/images/ai-makkah.png')] bg-cover bg-center grayscale opacity-30" />
          <div className="relative z-10 max-w-content mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading
                badge="Umrah"
                title="Umrah Packages"
                subtitle="Guided spiritual journeys to Makkah & Madinah trusted by thousands since 2004."
              />
            </motion.div>
          </div>
        </section>

        {/* Filter */}
        <section className="py-8 bg-surface border-b border-gray-100">
          <div className="max-w-content mx-auto px-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 w-full">
              <span className="text-label font-mono font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                Filter by:
              </span>
              <div className="w-full overflow-x-auto scrollbar-hide pb-2 -mb-2">
                <TabSwitcher
                  tabs={filters}
                  activeTab={activeFilter}
                  onTabChange={setActiveFilter}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="section">
          <div className="max-w-content mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPackages.map((pkg, index) => (
                <motion.div
                  key={pkg.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <PackageCard package={pkg} type="umrah" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
