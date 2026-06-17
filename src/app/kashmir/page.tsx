"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { TabSwitcher } from "@/components/ui/TabSwitcher";
import { kashmirPackages } from "@/data/kashmir-packages";
import Link from "next/link";
import { CTASection } from "@/components/sections/CTASection";

const seasons = [
  { id: "all", label: "All" },
  { id: "summer", label: "Summer" },
  { id: "winter", label: "Winter" },
  { id: "honeymoon", label: "Honeymoon" },
  { id: "adventure", label: "Adventure" },
  { id: "family", label: "Family" },
];

export default function KashmirPage() {
  const [activeSeason, setActiveSeason] = useState("all");

  const filteredPackages =
    activeSeason === "all"
      ? kashmirPackages
      : kashmirPackages.filter(
          (pkg) => pkg.season.toLowerCase() === activeSeason.toLowerCase() || 
                   pkg.tier.toLowerCase() === activeSeason.toLowerCase()
        );

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[55vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/kashmir/kashmir-hero.jpg')] bg-cover bg-center grayscale opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

          <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 py-24 sm:py-32 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <span className="inline-flex items-center gap-1.5 rounded-button bg-white/20 backdrop-blur-sm px-3 py-1 text-label font-mono font-medium text-white uppercase tracking-wider mb-4 sm:mb-6">
                Kashmir Tours
              </span>

              <h1 className="font-display font-bold text-[clamp(32px,5vw,72px)] leading-tight text-white text-balance">
                Explore the Paradise on Earth — Kashmir
              </h1>

              <p className="mt-4 sm:mt-8 text-sm sm:text-body-lg text-white/80 max-w-2xl">
                Discover the natural beauty of Kashmir with our carefully curated tour
                packages. From the serene Dal Lake to the majestic Gulmarg gondola.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter */}
        <section className="py-6 sm:py-8 bg-surface border-b border-gray-100">
          <div className="max-w-content mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide pb-1">
              <span className="text-label font-mono font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap flex-shrink-0">
                Season:
              </span>
              <TabSwitcher
                tabs={seasons}
                activeTab={activeSeason}
                onTabChange={setActiveSeason}
              />
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="section">
          <div className="max-w-content mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
              {filteredPackages.map((pkg, index) => (
                <motion.div
                  key={pkg.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <Link
                    href={`/kashmir/${pkg.slug}`}
                    className="group block bg-white rounded-md shadow-sm border border-gray-100 overflow-hidden transition-all duration-normal ease-out hover:shadow-md hover:-translate-y-1"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-slow ease-out group-hover:scale-105"
                        style={{ backgroundImage: `url(${pkg.image})` }}
                      />
                      {/* Top Badges */}
                      <div className="absolute top-3 left-3">
                        <span className="inline-flex items-center px-2 py-1 text-[10px] font-bold text-white bg-green-500 rounded uppercase tracking-wider">
                          {pkg.tier}
                        </span>
                      </div>
                      <div className="absolute top-3 right-3 flex flex-col items-end gap-1">
                        {pkg.popular && (
                          <span className="inline-flex items-center px-2 py-1 text-[10px] font-bold text-white bg-orange-500 rounded uppercase tracking-wider">
                            ★ Popular
                          </span>
                        )}
                        <span className="inline-flex items-center px-2 py-1 text-[10px] font-bold text-white bg-emerald-500 rounded uppercase tracking-wider">
                          Save ₹{pkg.save}
                        </span>
                      </div>
                      {/* Bottom Info over Image */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white drop-shadow-md">
                        <div className="flex items-center gap-1.5 text-xs font-semibold">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                          {pkg.duration}
                        </div>
                        <div className="flex items-center text-orange-400 text-sm">
                          ★★★★★
                        </div>
                      </div>
                    </div>

                    <div className="p-4 sm:p-6">
                      <h3 className="font-display font-bold text-base sm:text-lg text-[#2A3546] mb-1 group-hover:text-gray-600 transition-colors duration-fast uppercase">
                        {pkg.title}
                      </h3>
                      <p className="text-sm text-gray-500 mb-3 sm:mb-4">{pkg.route}</p>

                      <div className="flex items-center justify-between pt-3 pb-3 sm:pt-4 sm:pb-4 border-y border-gray-100">
                        <div>
                          <span className="text-xs font-medium text-gray-400 uppercase tracking-wider block mb-0.5">
                            Starting <span className="line-through">₹{pkg.originalPrice.toLocaleString('en-IN')}</span>
                          </span>
                          <div className="font-display font-bold text-xl sm:text-2xl text-orange-500">
                            ₹{pkg.price.toLocaleString('en-IN')}
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-[10px] font-bold text-gray-800 uppercase block">Per Pax</span>
                          <span className="text-[10px] text-gray-500">{pkg.minPax}</span>
                        </div>
                      </div>

                      <div className="py-3 sm:py-4 space-y-1.5 sm:space-y-2">
                        {pkg.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <svg className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-xs sm:text-sm text-gray-600">{highlight}</span>
                          </div>
                        ))}
                      </div>

                      <div className="grid grid-cols-2 gap-2 sm:gap-3 pt-2">
                        <div className="flex items-center justify-center w-full py-2.5 bg-[#1B2A3B] hover:bg-[#2A3546] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors">
                          View Details →
                        </div>
                        <div className="flex items-center justify-center w-full py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold uppercase tracking-wider rounded transition-colors">
                          Book Now
                        </div>
                      </div>
                    </div>
                  </Link>
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
