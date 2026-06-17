"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { team } from "@/data/team";

export function TeamSection() {
  return (
    <section className="section bg-gray-100">
      <div className="max-w-content mx-auto">
        <SectionHeading
          badge="Our Team"
          title="The People Behind Your Journey"
          subtitle="Dedicated professionals committed to making your pilgrimage seamless and meaningful."
          align="center"
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface rounded-card shadow-card overflow-hidden transition-all duration-normal ease-out hover:shadow-card-hover hover:-translate-y-1"
            >
              <div className="aspect-[3/4] overflow-hidden group/img">
                <div
                  className="w-full h-full bg-cover bg-center grayscale group-hover/img:grayscale-0 transition-all duration-slow ease-out group-hover/img:scale-105"
                  style={{ backgroundImage: `url(${member.image})` }}
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-display font-semibold text-heading-md text-dark">
                  {member.name}
                </h3>
                <p className="mt-2 text-body font-body text-gray-500">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
