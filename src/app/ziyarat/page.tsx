"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TabSwitcher } from "@/components/ui/TabSwitcher";
import { PackageCard } from "@/components/packages/PackageCard";
import { ziyaratPackages } from "@/data/ziyarat-packages";
import { CTASection } from "@/components/sections/CTASection";

const countries = [
  { id: "all", label: "All" },
  { id: "iraq", label: "Iraq" },
  { id: "iran", label: "Iran" },
  { id: "combined", label: "Combined" },
  { id: "arbaeen", label: "Arbaeen" },
];

export default function ZiyaratPage() {
  const [activeCountry, setActiveCountry] = useState("all");

  const filteredPackages =
    activeCountry === "all"
      ? ziyaratPackages
      : ziyaratPackages.filter(
          (pkg) => pkg.country.toLowerCase() === activeCountry
        );

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-24 md:pt-32 pb-16 md:pb-20 bg-gray-100">
          <div className="absolute inset-0 bg-[url('/images/pilgrimage/ziyarat-hero.jpg')] bg-cover bg-center grayscale opacity-30" />
          <div className="relative z-10 max-w-content mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading
                badge="Ziyarat"
                title="Sacred Ziyarat Journeys"
                subtitle="Guided pilgrimages to the holy shrines of Iraq & Iran — for those who seek closeness to the Ahlul Bayt."
              />
            </motion.div>
          </div>
        </section>

        {/* Country Filter */}
        <section className="py-8 bg-surface border-b border-gray-100">
          <div className="max-w-content mx-auto px-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 w-full">
              <span className="text-label font-mono font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                Destination:
              </span>
              <div className="w-full overflow-x-auto scrollbar-hide pb-2 -mb-2">
                <TabSwitcher
                  tabs={countries}
                  activeTab={activeCountry}
                  onTabChange={setActiveCountry}
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
                  <PackageCard package={pkg} type="ziyarat" />
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
