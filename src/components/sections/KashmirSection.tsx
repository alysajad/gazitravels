"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTAButton } from "@/components/ui/CTAButton";
import { kashmirPackages } from "@/data/kashmir-packages";
import Link from "next/link";

export function KashmirSection() {
  const featured = kashmirPackages.slice(0, 3);

  return (
    <section className="section">
      <div className="max-w-content mx-auto">
        <SectionHeading
          badge="Kashmir Tours"
          title="Explore the Paradise on Earth"
          subtitle="Discover the natural beauty of Kashmir with our carefully curated tour packages."
          align="center"
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((pkg, index) => (
            <motion.div
              key={pkg.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`/kashmir/${pkg.slug}`}
                className="group block bg-white rounded-md shadow-sm border border-gray-100 overflow-hidden transition-all duration-normal ease-out hover:shadow-md hover:-translate-y-1"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover object-center transition-transform duration-slow ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="inline-flex items-center px-2 py-1 text-[10px] font-bold text-white bg-green-500 rounded uppercase tracking-wider">
                      {pkg.tier}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 flex items-center gap-2">
                    {pkg.popular && (
                      <span className="inline-flex items-center px-2 py-1 text-[10px] font-bold text-white bg-orange-500 rounded uppercase tracking-wider">
                        ★ Most Popular
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

                <div className="p-6">
                  <h3 className="font-display font-bold text-lg text-[#2A3546] mb-1 group-hover:text-gray-600 transition-colors duration-fast uppercase">
                    {pkg.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">{pkg.route}</p>

                  <div className="flex items-center justify-between pt-4 pb-4 border-y border-gray-100">
                    <div>
                      <span className="text-xs font-medium text-gray-400 uppercase tracking-wider block mb-0.5">
                        Starting <span className="line-through">₹{pkg.originalPrice.toLocaleString('en-IN')}</span>
                      </span>
                      <div className="font-display font-bold text-2xl text-orange-500">
                        ₹{pkg.price.toLocaleString('en-IN')}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-bold text-gray-800 uppercase block">Per Pax</span>
                      <span className="text-[10px] text-gray-500">{pkg.minPax}</span>
                    </div>
                  </div>

                  <div className="py-4 space-y-2">
                    {pkg.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-600">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
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

        <div className="mt-12 text-center">
          <CTAButton href="/kashmir" variant="outline">
            Explore All Kashmir Packages
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
