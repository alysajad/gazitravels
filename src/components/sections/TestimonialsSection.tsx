"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";
import { Star } from "lucide-react";

export function TestimonialsSection() {
  // Show max 3 testimonials for cleaner layout
  const featured = testimonials.slice(0, 3);

  return (
    <section className="section bg-gray-100">
      <div className="max-w-content mx-auto">
        <SectionHeading
          badge="Testimonials"
          title="What Our Pilgrims Say"
          subtitle="Real stories from pilgrims who trusted us with their sacred journeys."
          align="center"
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-surface rounded-card shadow-card p-6 h-full transition-all duration-normal ease-out hover:shadow-card-hover hover:-translate-y-1">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-accent text-accent"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-body text-gray-500 italic mb-6 line-clamp-4">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden relative">
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${testimonial.avatar})` }}
                    />
                  </div>
                  <div>
                    <p className="font-body font-medium text-body text-dark">
                      {testimonial.name}
                    </p>
                    <p className="text-label font-mono font-medium text-gray-500 uppercase tracking-wider">
                      {testimonial.journeyType}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
