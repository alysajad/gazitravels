"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";
import { Star } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-24 md:pt-32 pb-16 md:pb-20 overflow-hidden flex flex-col items-center bg-bg">
      {/* Background Hero Image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/pilgrimage/hero-bg.jpg"
          alt="Hajj and Umrah pilgrimage"
          fill
          priority
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-white" />
      </div>

      <div className="relative z-10 w-full flex-1 max-w-content mx-auto px-6 flex flex-col items-center text-center">
        {/* Trustpilot Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 mb-8 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-1.5 shadow-sm"
        >
          <div className="flex -space-x-1">
            <div className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center overflow-hidden">
               <Image src="/images/pilgrimage/about-pilgrim.jpg" unoptimized alt="User" width={24} height={24} className="object-cover" />
            </div>
            <div className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center overflow-hidden">
               <Image src="/images/pilgrimage/about-pilgrim-new.jpg" unoptimized alt="User" width={24} height={24} className="object-cover" />
            </div>
            <div className="w-6 h-6 rounded-full bg-gray-400 border-2 border-white flex items-center justify-center overflow-hidden">
               <Image src="/images/pilgrimage/about-image.jpg" unoptimized alt="User" width={24} height={24} className="object-cover" />
            </div>
          </div>
          <div className="flex items-center gap-1 ml-1 text-[#00B67A]">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span className="text-xs font-semibold">Gazi Travels</span>
          </div>
          <span className="text-xs text-gray-700 font-medium ml-1">Trusted by 25k+ clients</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-medium text-[clamp(40px,5vw,56px)] text-dark leading-tight tracking-tight mb-2"
        >
          Discover the <span className="font-bold text-[clamp(48px,6vw,64px)]">Majesty of</span>
          <br />
          <span className="font-bold text-[clamp(48px,6vw,64px)]">Hajj & Umrah</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-body text-gray-700 max-w-lg"
        >
          Book your Hajj or Umrah pilgrimage with trusted services & package.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8"
        >
          <CTAButton href="/umrah" variant="accent">
            Book Hajj Journey
          </CTAButton>
        </motion.div>

        {/* Kaaba Image Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="relative mt-8 md:mt-12 w-full max-w-5xl flex-1 min-h-[250px] sm:min-h-[300px] md:min-h-[500px] flex items-end justify-center"
        >
          <Image
            src="/images/pilgrimage/kaaba.png"
            alt="Majesty of Kaaba"
            fill
            unoptimized
            className="object-contain object-bottom"
            priority
          />

          {/* Floating Address Card (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="hidden md:flex absolute left-0 bottom-32 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-md border border-gray-200 max-w-[200px] items-start gap-3"
          >
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm flex-shrink-0">
               <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
               </svg>
            </div>
            <div>
              <p className="text-xs font-medium text-gray-700 leading-snug">
                Masjid al-Haram, <span className="font-bold text-dark">Makkah</span>, Saudi Arabia
              </p>
            </div>
          </motion.div>

          {/* Floating Affiliate Hotel Card (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="hidden md:flex absolute right-0 bottom-40 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-md border border-gray-200 flex-col items-center gap-3"
          >
            <span className="text-xs font-semibold text-gray-700">Our Affiliate Hotels</span>
            <div className="flex items-center gap-2">
               <Link href="/hotels" className="w-12 h-12 rounded-xl overflow-hidden relative shadow-sm group cursor-pointer block">
                  <Image src="/images/hotels/swissotel-maqam.png" unoptimized alt="Swissôtel Al Maqam" fill className="object-cover grayscale transition-all duration-normal group-hover:grayscale-0 group-hover:scale-110" />
               </Link>
               <Link href="/hotels" className="w-12 h-12 rounded-xl overflow-hidden relative shadow-sm group cursor-pointer block">
                  <Image src="/images/hotels/pullman-zamzam.png" unoptimized alt="Pullman Zamzam" fill className="object-cover grayscale transition-all duration-normal group-hover:grayscale-0 group-hover:scale-110" />
               </Link>
               <Link href="/hotels" className="w-12 h-12 rounded-xl overflow-hidden relative shadow-sm group cursor-pointer block">
                  <Image src="/images/hotels/concorde-madinah.png" unoptimized alt="Concorde Madinah" fill className="object-cover grayscale transition-all duration-normal group-hover:grayscale-0 group-hover:scale-110" />
               </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
