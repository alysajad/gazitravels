"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowUpRight } from "lucide-react";

const reels = [
  { src: "/images/pilgrimage/reel-1.jpg", caption: "Tawaf at Masjid al-Haram" },
  { src: "/images/pilgrimage/reel-2.jpg", caption: "Madinah light show" },
  { src: "/images/kashmir/reel-3.jpg", caption: "Dal Lake sunset" },
  { src: "/images/pilgrimage/reel-4.jpg", caption: "Karbala ziyarat" },
  { src: "/images/kashmir/reel-5.jpg", caption: "Gulmarg gondola" },
  { src: "/images/pilgrimage/reel-6.jpg", caption: "Masjid Nabawi" },
];

export function InstagramFeed() {
  return (
    <section className="section bg-gray-100">
      <div className="max-w-content mx-auto">
        <SectionHeading
          badge="Social"
          title="Follow Our Journey"
          subtitle="@gazitourandtravels"
          align="center"
          className="mb-12"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {reels.map((reel, index) => (
            <motion.a
              key={index}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative aspect-square rounded-card overflow-hidden"
            >
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-slow ease-out group-hover:scale-110"
                style={{ backgroundImage: `url(${reel.src})` }}
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/60 transition-colors duration-normal flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-normal transform translate-y-2 group-hover:translate-y-0">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                    <ArrowUpRight className="w-5 h-5 text-dark" />
                  </div>
                </div>
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-normal">
                <p className="text-body font-body text-white line-clamp-1">
                  {reel.caption}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
