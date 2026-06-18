"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TabSwitcher } from "@/components/ui/TabSwitcher";
import { CTAButton } from "@/components/ui/CTAButton";
import { hotels } from "@/data/hotels";
import { Star, MapPin } from "lucide-react";

export function HotelSection() {
  const [activeTab, setActiveTab] = useState("makkah");

  const filteredHotels = hotels.filter((hotel) => hotel.city.toLowerCase() === activeTab);

  return (
    <section className="section bg-gray-100">
      <div className="max-w-content mx-auto">
        <div className="text-center mb-12">
          <SectionHeading
            badge="Hotels"
            title="Our Featured Partner Hotels"
            subtitle="Accommodation carefully selected for proximity, comfort, and spiritual atmosphere."
            align="center"
          />

          <div className="mt-8 flex justify-center">
            <TabSwitcher
              tabs={[
                { id: "makkah", label: "Makkah" },
                { id: "madinah", label: "Madinah" },
              ]}
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredHotels.map((hotel, index) => (
            <motion.div
              key={hotel.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface rounded-card shadow-card overflow-hidden transition-all duration-normal ease-out hover:shadow-card-hover hover:-translate-y-1"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <Image
                  src={hotel.image}
                  alt={hotel.name}
                  fill
                  className="object-cover object-center transition-transform duration-slow ease-out hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              <div className="p-5">
                {/* Stars */}
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: hotel.stars }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-accent text-accent"
                    />
                  ))}
                </div>

                {/* Name */}
                <h3 className="font-body font-semibold text-body text-dark mb-2">
                  {hotel.name}
                </h3>

                {/* Distance */}
                <div className="flex items-center gap-1.5 text-body text-gray-500 mb-3">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{hotel.distanceFromHaram}</span>
                </div>

                {/* Amenities show max 2 for cleaner look */}
                <div className="flex items-center gap-2 flex-wrap">
                  {hotel.amenities.slice(0, 2).map((amenity) => (
                    <span
                      key={amenity}
                      className="px-2 py-1 text-[10px] font-mono font-medium text-gray-500 bg-gray-100 rounded-full uppercase tracking-wider"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <CTAButton href="/hotels" variant="outline">
            View All Hotels
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
