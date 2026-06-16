"use client";

import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";

export function HajjAnnouncementStrip() {
  return (
    <section className="relative bg-dark py-20 overflow-hidden">
      {/* Dot grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNCkiLz48L3N2Zz4=')] bg-repeat opacity-30" />

      <div className="relative z-10 max-w-content mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-1.5 rounded-button bg-white/10 px-3 py-1 text-label font-mono font-medium text-white/70 uppercase tracking-wider mb-6">
            Hajj 2027 — Coming Soon
          </span>

          <h2 className="font-display font-bold text-display-lg text-white text-balance">
            Hajj 2027 Packages — Coming Soon
          </h2>

          <p className="mt-6 text-body-lg text-white/60 max-w-2xl mx-auto">
            Pre-registration is now open. Secure your spot before official quota
            announcements. Be the first to know when packages are released.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <CTAButton href="/hajj-2027" variant="accent">
              Pre-Register Now
            </CTAButton>
            <CTAButton
              href="https://wa.me/917006604820?text=Assalamu%20Alaikum%2C%20I%27d%20like%20to%20enquire%20about%20Hajj%202027%20packages."
              variant="accent-outline"
            >
              WhatsApp for Details
            </CTAButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
