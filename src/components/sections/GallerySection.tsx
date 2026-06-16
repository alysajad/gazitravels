"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

const galleryImages = [
  { src: "/images/pilgrimage/departure.jpg", alt: "Pilgrim departure", type: "grayscale" as const },
  { src: "/images/pilgrimage/tawaf.jpg", alt: "Tawaf at Masjid al-Haram", type: "grayscale" as const },
  { src: "/images/pilgrimage/hajj.jpg", alt: "Pilgrims during Hajj", type: "color" as const },
  { src: "/images/pilgrimage/masjid-nabawi.jpg", alt: "Masjid Nabawi", type: "grayscale" as const },
  { src: "/images/pilgrimage/kaaba.png", alt: "The Holy Kaaba", type: "color" as const },
  { src: "/images/pilgrimage/karbala.jpg", alt: "Karbala", type: "grayscale" as const },
];

export function GallerySection() {
  return (
    <section className="section">
      <div className="max-w-content mx-auto">
        <SectionHeading
          badge="Gallery"
          title="Memories from Sacred Journeys"
          subtitle="Moments captured across our pilgrimages and spiritual tours."
          align="center"
          className="mb-12"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.src + index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`relative rounded-[32px] overflow-hidden group border border-gray-100 ${
                index === 0 ? "md:col-span-2 md:row-span-2 aspect-square" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className={`object-cover object-center transition-transform duration-slow ease-out group-hover:scale-105 ${
                  image.type === "grayscale" ? "grayscale" : "bg-gray-50 object-contain"
                }`}
                sizes={index === 0 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 50vw, 33vw"}
              />
              {/* Hover caption overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-normal flex items-end p-6">
                <p className="text-sm font-medium text-white">
                  {image.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
