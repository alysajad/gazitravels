"use client";

import { motion } from "framer-motion";
import { founder } from "@/data/team";

export function FounderSection() {
  return (
    <section className="section">
      <div className="max-w-content mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-card overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center grayscale"
                style={{ backgroundImage: `url(${founder.image})` }}
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-1.5 rounded-button bg-gray-100 px-3 py-1 text-label font-mono font-medium text-gray-500 uppercase tracking-wider mb-6">
              Meet Our Founder
            </span>

            <h2 className="font-display font-semibold text-display-md text-dark">
              Leading Pilgrims Since 1998
            </h2>

            <div className="mt-8">
              <h3 className="font-display font-bold text-heading-lg text-dark">
                {founder.name}
              </h3>
              <p className="text-body font-body text-gray-500 mt-1">
                {founder.role}
              </p>
            </div>

            <p className="mt-6 text-body text-gray-500 leading-relaxed">
              {founder.bio}
            </p>

            <blockquote className="mt-8 pl-6 border-l-4 border-accent">
              <p className="font-display italic text-heading-md text-dark">
                &ldquo;{founder.quote}&rdquo;
              </p>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
