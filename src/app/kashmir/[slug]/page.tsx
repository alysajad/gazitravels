"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { kashmirPackages } from "@/data/kashmir-packages";
import { CTAButton } from "@/components/ui/CTAButton";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle, Clock, MapPin, Users } from "lucide-react";

export default function PackageDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  const pkg = kashmirPackages.find((p) => p.slug === params.slug);

  if (!pkg) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-end pb-16 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={pkg.image}
              alt={pkg.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto w-full px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-accent text-dark text-xs font-bold uppercase tracking-wider rounded-sm">
                  {pkg.tier}
                </span>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider rounded-sm">
                  {pkg.season} Season
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
                {pkg.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-white/90 font-medium">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  {pkg.duration}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  {pkg.route}
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  {pkg.minPax}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-surface">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Left Column: Overview & Itinerary */}
              <div className="lg:col-span-2 space-y-12">
                {/* Overview */}
                <div>
                  <h2 className="text-3xl font-display font-bold text-dark mb-6">Overview</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {pkg.overview}
                  </p>
                </div>

                {/* Itinerary */}
                <div>
                  <h2 className="text-3xl font-display font-bold text-dark mb-8">Day-by-Day Itinerary</h2>
                  <div className="space-y-8">
                    {pkg.itinerary.map((day) => (
                      <div key={day.day} className="flex gap-6">
                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 flex items-center justify-center bg-accent text-dark font-display font-bold text-xl rounded-full shrink-0">
                            {day.day}
                          </div>
                          <div className="w-0.5 h-full bg-gray-200 my-2" />
                        </div>
                        <div className="pb-8">
                          <h3 className="text-xl font-display font-bold text-dark mb-3">
                            {day.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {day.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Pricing & Book */}
              <div className="space-y-8">
                {/* Price Card */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 sticky top-32">
                  <div className="mb-2">
                    <span className="text-sm font-bold text-gray-400 uppercase tracking-wider block">
                      Starting From
                    </span>
                    <span className="text-lg text-gray-400 line-through">
                      ₹{pkg.originalPrice.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 mb-8">
                    <span className="text-3xl lg:text-5xl font-display font-bold text-orange-500 break-words">
                      ₹{pkg.price.toLocaleString("en-IN")}
                    </span>
                    <span className="text-gray-500 font-medium">/ person</span>
                  </div>

                  <div className="space-y-4 mb-8">
                    {pkg.highlights.slice(0, 3).map((h, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                        <span className="text-gray-700 font-medium">{h}</span>
                      </div>
                    ))}
                  </div>

                  <CTAButton 
                    href="https://wa.me/919999999999" 
                    className="w-full justify-center bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/30 text-lg py-4"
                  >
                    Book Now
                  </CTAButton>
                  <p className="text-center text-sm text-gray-500 mt-4">
                    No booking fees. Instant confirmation.
                  </p>
                </div>

                {/* Inclusions */}
                <div className="bg-green-50 rounded-xl p-8 border border-green-100">
                  <h3 className="text-xl font-display font-bold text-green-900 mb-6 flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                    What&apos;s Included
                  </h3>
                  <ul className="space-y-4">
                    {pkg.inclusions.map((inc, i) => (
                      <li key={i} className="flex items-start gap-3 text-green-800">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                        <span className="text-sm leading-relaxed">{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Exclusions */}
                <div className="bg-red-50 rounded-xl p-8 border border-red-100">
                  <h3 className="text-xl font-display font-bold text-red-900 mb-6 flex items-center gap-2">
                    <XCircle className="w-6 h-6 text-red-600" />
                    What&apos;s Excluded
                  </h3>
                  <ul className="space-y-4">
                    {pkg.exclusions.map((exc, i) => (
                      <li key={i} className="flex items-start gap-3 text-red-800">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                        <span className="text-sm leading-relaxed">{exc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
