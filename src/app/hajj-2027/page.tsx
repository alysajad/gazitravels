"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTAButton } from "@/components/ui/CTAButton";
import { CountdownTimer } from "@/components/ui/CountdownTimer";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { PackageCard } from "@/components/packages/PackageCard";
import { hajj2027 } from "@/data/hajj-2027";
import { hajjFaqs } from "@/data/faqs";

export default function Hajj2027Page() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center bg-dark overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/pilgrimage/hajj-hero.jpg')] bg-cover bg-center grayscale opacity-30" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNCkiLz48L3N2Zz4=')] bg-repeat opacity-30" />

          <div className="relative z-10 w-full max-w-content mx-auto px-6 pt-24 md:pt-32 pb-16 md:pb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <span className="inline-flex items-center gap-1.5 rounded-button bg-white/10 px-3 py-1 text-label font-mono font-medium text-white/70 uppercase tracking-wider mb-6">
                <span className="w-2 h-2 rounded-full bg-accent" />
                Pre-Registration Open
              </span>

              <h1 className="font-display font-bold text-display-xl text-white text-balance">
                Hajj 2027 Packages — Coming Soon
              </h1>

              <p className="mt-8 text-body-lg text-white/60 max-w-2xl">
                {hajj2027.description}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <CTAButton href="#register" variant="accent">
                  Pre-Register Now
                </CTAButton>
                <CTAButton
                  href="https://wa.me/917006604820?text=Assalamu%20Alaikum%2C%20I%27d%20like%20to%20enquire%20about%20Hajj%202027%20packages."
                  variant="accent-outline"
                >
                  WhatsApp for Updates
                </CTAButton>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Countdown */}
        <section className="section">
          <div className="max-w-content mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-label font-mono font-medium text-gray-500 uppercase tracking-wider mb-8">
                Expected Hajj Season Countdown
              </p>
              <CountdownTimer targetDate={hajj2027.countdownDate} />
            </motion.div>
          </div>
        </section>

        {/* Packages */}
        <section className="section bg-surface border-t border-gray-100">
          <div className="max-w-content mx-auto">
            <SectionHeading
              badge="Packages"
              title="Featured Hajj Packages"
              subtitle="Explore our expected packages for the upcoming Hajj season."
              align="center"
              className="mb-12"
            />
            <div className="flex flex-wrap justify-center gap-8">
              {hajj2027.packages.map((pkg, index) => (
                <motion.div
                  key={pkg.slug}
                  className="w-full max-w-sm"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <PackageCard package={pkg} type="hajj" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Pre-Register */}
        <section className="section bg-gray-100">
          <div className="max-w-content mx-auto">
            <SectionHeading
              badge="Why Register"
              title="Why Pre-Register for Hajj 2027?"
              align="center"
              className="mb-12"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {hajj2027.reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-surface rounded-card shadow-card p-8 text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                    <span className="font-display font-bold text-lg text-dark">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="font-body font-semibold text-body text-dark mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-body text-gray-500">{reason.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Registration Form */}
        <section className="section" id="register">
          <div className="max-w-content mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                <SectionHeading
                  badge="Pre-Register"
                  title="Secure Your Spot for Hajj 2027"
                  subtitle="Fill out the form below and we'll contact you as soon as packages are announced."
                />

                <div className="mt-8 bg-surface rounded-card shadow-card p-8">
                  <form className="space-y-6">
                    <div>
                      <label className="block mb-2 text-label font-mono font-medium text-gray-500 uppercase tracking-wider">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full rounded-lg border border-gray-300 bg-surface px-4 py-3 text-body text-dark placeholder-gray-500 transition-all duration-fast focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-label font-mono font-medium text-gray-500 uppercase tracking-wider">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        className="w-full rounded-lg border border-gray-300 bg-surface px-4 py-3 text-body text-dark placeholder-gray-500 transition-all duration-fast focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-label font-mono font-medium text-gray-500 uppercase tracking-wider">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="w-full rounded-lg border border-gray-300 bg-surface px-4 py-3 text-body text-dark placeholder-gray-500 transition-all duration-fast focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-label font-mono font-medium text-gray-500 uppercase tracking-wider">
                        Preferred Package Tier
                      </label>
                      <select className="w-full rounded-lg border border-gray-300 bg-surface px-4 py-3 text-body text-dark focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-fast">
                        <option value="">Select tier</option>
                        <option value="economy">Economy</option>
                        <option value="premium">Premium</option>
                        <option value="elite">Elite</option>
                        <option value="not-sure">Not Sure Yet</option>
                      </select>
                    </div>

                    <div>
                      <label className="block mb-2 text-label font-mono font-medium text-gray-500 uppercase tracking-wider">
                        Group Size
                      </label>
                      <select className="w-full rounded-lg border border-gray-300 bg-surface px-4 py-3 text-body text-dark focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-fast">
                        <option value="">Select group size</option>
                        <option value="solo">Solo</option>
                        <option value="couple">Couple</option>
                        <option value="family">Family</option>
                        <option value="group">Group</option>
                      </select>
                    </div>

                    <div>
                      <label className="block mb-2 text-label font-mono font-medium text-gray-500 uppercase tracking-wider">
                        Previous Hajj Experience
                      </label>
                      <select className="w-full rounded-lg border border-gray-300 bg-surface px-4 py-3 text-body text-dark focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-fast">
                        <option value="">Select</option>
                        <option value="first-time">First time</option>
                        <option value="done-before">Done before</option>
                      </select>
                    </div>

                    <div>
                      <label className="block mb-2 text-label font-mono font-medium text-gray-500 uppercase tracking-wider">
                        Message / Special Requirements
                      </label>
                      <textarea
                        rows={4}
                        className="w-full rounded-lg border border-gray-300 bg-surface px-4 py-3 text-body text-dark placeholder-gray-500 transition-all duration-fast focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 resize-none"
                        placeholder="Any special requirements or questions..."
                      />
                    </div>

                    <CTAButton href="#" variant="accent" className="w-full justify-center">
                      Submit Pre-Registration
                    </CTAButton>
                  </form>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* Trust Quote */}
                <div className="bg-surface rounded-card shadow-card p-8 mb-8">
                  <blockquote className="pl-6 border-l-4 border-accent">
                    <p className="font-display italic text-heading-md text-dark">
                      &ldquo;{hajj2027.quote.text}&rdquo;
                    </p>
                    <footer className="mt-4">
                      <p className="font-body font-medium text-body text-dark">
                        — {hajj2027.quote.author}
                      </p>
                      <p className="text-body text-gray-500">
                        {hajj2027.quote.role}
                      </p>
                    </footer>
                  </blockquote>
                </div>

                {/* FAQ */}
                <SectionHeading
                  badge="FAQ"
                  title="Hajj 2027 Questions"
                  className="mb-6"
                />
                <FAQAccordion items={hajjFaqs} />
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
