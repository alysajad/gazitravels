"use client";

import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";

export function CTASection() {
  return (
    <section className="relative bg-dark py-24 overflow-hidden">
      {/* Dot grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNCkiLz48L3N2Zz4=')] bg-repeat opacity-30" />

      <div className="relative z-10 max-w-content mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-bold text-display-lg text-white text-balance">
            Ready to Begin Your Sacred Journey?
          </h2>

          <p className="mt-6 text-body-lg text-white/60 max-w-2xl mx-auto">
            Speak with our team today we have served pilgrims since 1998.
            Your journey begins with a conversation.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <CTAButton href="/contact" variant="accent">
              Book Now
            </CTAButton>
            <CTAButton
              href="https://wa.me/917006604820?text=Assalamu%20Alaikum%2C%20I%27d%20like%20to%20enquire%20about%20packages."
              variant="accent-outline"
            >
              WhatsApp Us
            </CTAButton>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-body text-white/40">
            <span>7006604820</span>
            <span className="hidden sm:inline">|</span>
            <span>gazitravels@gmail.com</span>
            <span className="hidden sm:inline">|</span>
            <span>info@gazitourandtravels.com</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
