"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TabSwitcher } from "@/components/ui/TabSwitcher";
import { hotels } from "@/data/hotels";
import { Star, MapPin } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";

export default function HotelsPage() {
  const [activeCity, setActiveCity] = useState("makkah");

  const filteredHotels = hotels.filter(
    (hotel) => hotel.city.toLowerCase() === activeCity
  );

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 bg-gray-100">
          <div className="absolute inset-0 bg-[url('/images/hotels/hotels-hero.jpg')] bg-cover bg-center grayscale opacity-30" />
          <div className="relative z-10 max-w-content mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <SectionHeading
                badge="Hotels"
                title="Our Featured Partner Hotels"
                subtitle="Accommodation carefully selected for proximity, comfort, and spiritual atmosphere."
              />
            </motion.div>
          </div>
        </section>

        {/* City Filter */}
        <section className="py-8 bg-surface border-b border-gray-100">
          <div className="max-w-content mx-auto px-6">
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-label font-mono font-medium text-gray-500 uppercase tracking-wider">
                City:
              </span>
              <TabSwitcher
                tabs={[
                  { id: "makkah", label: "Makkah" },
                  { id: "madinah", label: "Madinah" },
                ]}
                activeTab={activeCity}
                onTabChange={setActiveCity}
              />
            </div>
          </div>
        </section>

        {/* Hotels */}
        <section className="section">
          <div className="max-w-content mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredHotels.map((hotel, index) => (
                <motion.div
                  key={hotel.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-surface rounded-card shadow-card overflow-hidden transition-all duration-normal ease-out hover:shadow-card-hover hover:-translate-y-1"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <div
                      className="w-full h-full bg-cover bg-center transition-transform duration-slow ease-out hover:scale-105"
                      style={{ backgroundImage: `url(${hotel.image})` }}
                    />
                  </div>

                  <div className="p-6">
                    {/* Stars */}
                    <div className="flex items-center gap-1 mb-3">
                      {Array.from({ length: hotel.stars }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-accent text-accent"
                        />
                      ))}
                    </div>

                    {/* Name */}
                    <h3 className="font-display font-semibold text-heading-md text-dark mb-2">
                      {hotel.name}
                    </h3>

                    {/* Distance */}
                    <div className="flex items-center gap-1.5 text-body text-gray-500 mb-4">
                      <MapPin className="w-4 h-4" />
                      <span>{hotel.distanceFromHaram}</span>
                    </div>

                    {/* Description */}
                    <p className="text-body text-gray-500 mb-4 line-clamp-2">
                      {hotel.description}
                    </p>

                    {/* Amenities */}
                    <div className="flex flex-wrap gap-2">
                      {hotel.amenities.map((amenity) => (
                        <span
                          key={amenity}
                          className="px-3 py-1 text-[11px] font-mono font-medium text-gray-500 bg-gray-100 rounded-full uppercase tracking-wider"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>
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
