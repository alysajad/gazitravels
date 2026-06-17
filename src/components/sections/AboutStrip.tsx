"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function AboutStrip() {
  return (
    <section className="section bg-bg relative">
      <div className="max-w-content mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <span className="inline-flex items-center rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-dark mb-6">
              About Gazi
            </span>

            <h2 className="font-display font-medium text-[clamp(32px,4vw,44px)] text-gray-500 leading-tight tracking-tight">
              Performing <span className="font-bold text-dark">Hajj or Umrah</span> is one of the <span className="font-bold text-dark">Most important</span> journeys of a Lifetime. Make that journey smooth.
            </h2>
          </motion.div>

          {/* Pill Shaped Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-end relative"
          >
            {/* Background decoration shape like in screenshot (optional soft circle) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gray-100 rounded-full blur-3xl opacity-50 -z-10" />
            
            <div className="relative w-full max-w-[300px] md:max-w-[350px] aspect-[2/3] rounded-[200px] overflow-hidden border-8 border-white shadow-floating mx-auto lg:mx-0">
              <Image
                src="/images/pilgrimage/about-image.jpg"
                alt="Pilgrim praying"
                fill
                unoptimized
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
