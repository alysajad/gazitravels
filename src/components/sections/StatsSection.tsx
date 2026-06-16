"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";
import Link from "next/link";

export function StatsSection() {
  return (
    <section className="section bg-bg">
      <div className="max-w-content mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3 flex flex-col justify-center"
          >
            <p className="text-body text-gray-500 mb-12 max-w-sm">
              With over <span className="font-bold text-dark">15 years of experience</span> in organizing Hajj and Umrah pilgrimages, we have helped thousands of pilgrims fulfill their spiritual obligations with comfort.
            </p>
            
            <div>
              <h3 className="font-display font-bold text-[80px] leading-none text-dark tracking-tighter">
                540+
              </h3>
              <p className="text-sm font-semibold text-gray-500 mt-2 uppercase tracking-wide">
                Successfully <span className="text-dark">Happy Pilgrims</span>
              </p>
            </div>
          </motion.div>

          {/* Right Column */}
          <div className="lg:w-2/3">
            {/* Top Image & Excellence Card */}
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="relative w-full md:w-[400px] aspect-[4/3] rounded-[32px] overflow-hidden"
              >
                <Image
                  src="/images/pilgrimage/hajj.jpg"
                  alt="Pilgrims at Kaaba"
                  fill
                  unoptimized
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-[32px] p-8 shadow-floating w-full md:w-[300px] border border-gray-100"
              >
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="font-display font-semibold text-xl text-dark mb-3">Excellence</h4>
                <p className="text-xs text-gray-500 leading-relaxed mb-6">
                  With over 15 years of experience in organizing Hajj and Umrah pilgrimages, we have helped.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-dark text-white pl-4 pr-1 py-1 rounded-full font-medium text-xs hover:bg-dark-muted transition-colors duration-fast w-fit"
                >
                  Book a Free Call
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-dark ml-1">
                    <ArrowUpRight className="w-3 h-3" />
                  </div>
                </Link>
              </motion.div>
            </div>

            {/* Bottom Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="font-display font-medium text-3xl text-gray-500 text-center md:text-left mb-10">
                Trusted by <span className="font-bold text-dark">Thousands</span><br /> of Pilgrims
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {/* Gray Card */}
                <div className="bg-gray-100 rounded-3xl p-6 flex flex-col justify-between aspect-square">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center self-end">
                    <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-3xl text-dark mb-1">25k+</h4>
                    <p className="text-[10px] font-medium text-gray-500 uppercase">Successful Pilgrims Served</p>
                  </div>
                </div>

                {/* Dark Card */}
                <div className="bg-dark rounded-3xl p-6 flex flex-col justify-between aspect-square">
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center self-end">
                    <Star className="w-4 h-4 fill-dark text-dark" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-3xl text-white mb-1">98%</h4>
                    <p className="text-[10px] font-medium text-gray-400 uppercase">Pilgrim Satisfaction Rate</p>
                  </div>
                </div>

                {/* White Card */}
                <div className="bg-white border border-gray-100 shadow-sm rounded-3xl p-6 flex flex-col justify-between aspect-square">
                  <div className="w-8 h-8 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center self-end">
                    <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-2xl text-dark mb-1">15+ Years</h4>
                    <p className="text-[10px] font-medium text-gray-500 uppercase">Experience In Hajj Services</p>
                  </div>
                </div>

                {/* White Card 2 */}
                <div className="bg-white border border-gray-100 shadow-sm rounded-3xl p-6 flex flex-col justify-between aspect-square">
                  <div className="w-8 h-8 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center self-end">
                    <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-2xl text-dark mb-1">24/7</h4>
                    <p className="text-[10px] font-medium text-gray-500 uppercase">On-Ground Support</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
