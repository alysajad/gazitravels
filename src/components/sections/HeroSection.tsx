"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";
import { Star } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex flex-col items-center bg-bg">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-gray-100 to-transparent rounded-full opacity-50 blur-3xl -z-10" />

      <div className="relative z-10 w-full max-w-content mx-auto px-6 flex flex-col items-center text-center">
        {/* Trustpilot Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 mb-8 bg-surface border border-gray-100 rounded-full px-4 py-1.5 shadow-sm"
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
            <span className="text-xs font-semibold">Trustpilot</span>
          </div>
          <span className="text-xs text-gray-500 font-medium ml-1">Trusted by 40k+ clients</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-medium text-[clamp(40px,5vw,56px)] text-gray-500 leading-tight tracking-tight mb-2"
        >
          Discover the <span className="font-bold text-dark text-[clamp(48px,6vw,64px)]">Majesty of</span>
          <br />
          <span className="font-bold text-dark text-[clamp(48px,6vw,64px)]">Hajj & Umrah</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-body text-gray-500 max-w-lg"
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
          className="relative mt-12 w-full max-w-5xl h-[500px] md:h-[600px] flex items-end justify-center"
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
            className="hidden md:flex absolute left-0 bottom-32 bg-gray-50/90 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-gray-100 max-w-[200px] items-start gap-3"
          >
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm flex-shrink-0">
               <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
               </svg>
            </div>
            <div>
              <p className="text-xs font-medium text-gray-600 leading-snug">
                123 Organic Street, <span className="font-bold text-dark">Green Town</span>, New York, USA
              </p>
            </div>
          </motion.div>

          {/* Floating Affiliate Hotel Card (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="hidden md:flex absolute right-0 bottom-40 flex-col items-center gap-2"
          >
            <span className="text-xs font-semibold text-gray-500">Our Affiliate Hotel</span>
            <div className="flex items-center gap-2">
               <div className="w-12 h-16 rounded-xl overflow-hidden relative shadow-sm border border-white">
                  <Image src="/images/hotels/swissotel-maqam.jpg" unoptimized alt="Hotel 1" fill className="object-cover" />
               </div>
               <div className="w-12 h-16 rounded-xl overflow-hidden relative shadow-sm border border-white -translate-y-4">
                  <Image src="/images/hotels/pullman-zamzam.jpg" unoptimized alt="Hotel 2" fill className="object-cover" />
               </div>
               <div className="w-12 h-16 rounded-xl overflow-hidden relative shadow-sm border border-white">
                  <Image src="/images/hotels/concorde-madinah.jpg" unoptimized alt="Hotel 3" fill className="object-cover" />
               </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
