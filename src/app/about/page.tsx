"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FounderSection } from "@/components/sections/FounderSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { CTASection } from "@/components/sections/CTASection";

const milestones = [
  { year: "1998", event: "Gazi Tour & Travels founded by Haji Zakir Mohammad Abbas in Magam, Budgam" },
  { year: "2005", event: "Expanded services to include Iraq & Iran Ziyarat packages" },
  { year: "2010", event: "Crossed 10,000 pilgrims guided milestone" },
  { year: "2015", event: "Launched Kashmir tourism vertical" },
  { year: "2020", event: "Adapted to virtual consultations during pandemic" },
  { year: "2023", event: "Crossed 25,000 pilgrims guided milestone" },
  { year: "2027", event: "Hajj 2027 pre-registration opens" },
];

const credentials = [
  { title: "Ministry of Hajj", description: "Registered Hajj operator" },
  { title: "J&K Tourism", description: "Licensed tour operator" },
  { title: "Since 1998", description: "25+ years of experience" },
  { title: "25,000+", description: "Pilgrims guided" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-24 md:pt-32 pb-16 md:pb-20 bg-gray-100">
          <div className="absolute inset-0 bg-[url('/images/pilgrimage/about-hero.jpg')] bg-cover bg-center grayscale opacity-30" />
          <div className="relative z-10 max-w-content mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <SectionHeading
                badge="About Us"
                title="About Gazi Tour & Travels"
                subtitle="A story of faith, dedication, and two decades of guiding pilgrims on their most sacred journeys."
              />
            </motion.div>
          </div>
        </section>

        {/* Our Story */}
        <section className="section">
          <div className="max-w-content mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                <SectionHeading
                  badge="Our Story"
                  title="From Kashmir to the Holy Cities"
                />

                <div className="mt-8 space-y-4 text-body text-gray-500">
                    <p>
                    In 1998, Haji Zakir Mohammad Abbas founded Gazi Tour &amp; Travels with
                    a simple vision: to make the sacred journey of Umrah and Ziyarat
                    accessible, trustworthy, and deeply personal for every pilgrim from Kashmir.
                  </p>
                  <p>
                    What began as a small operation in Magam, Budgam has grown into one of
                    Kashmir&apos;s most trusted pilgrimage and travel companies. Over two decades,
                    we have guided more than 25,000 pilgrims through the most important
                    journeys of their lives — from the holy cities of Makkah and Madinah to
                    the sacred shrines of Iraq and Iran.
                  </p>
                  <p>
                    Our strength lies in our personal approach. Every pilgrim who travels with
                    us is not just a booking number — they are a guest entrusted to our care.
                    From visa processing to on-ground guidance, we handle every detail with the
                    same care we would want for our own families.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-[4/5] rounded-card overflow-hidden">
                  <div className="w-full h-full bg-[url('/images/pilgrimage/story-image.jpg')] bg-cover bg-center grayscale" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Credentials */}
        <section className="section bg-gray-100">
          <div className="max-w-content mx-auto">
            <SectionHeading
              badge="Credentials"
              title="Our Trust Credentials"
              align="center"
              className="mb-12"
            />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {credentials.map((cred, index) => (
                <motion.div
                  key={cred.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-surface rounded-card shadow-card p-6 text-center"
                >
                  <div className="font-display font-bold text-heading-lg text-dark">
                    {cred.title}
                  </div>
                  <p className="mt-2 text-body text-gray-500">{cred.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section">
          <div className="max-w-content mx-auto">
            <SectionHeading
              badge="Milestones"
              title="Our Journey Through the Years"
              align="center"
              className="mb-12"
            />

            <div className="relative max-w-2xl mx-auto">
              {/* Line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-300" />

              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-20 pb-12 last:pb-0"
                >
                  {/* Year circle */}
                  <div className="absolute left-0 w-16 h-16 rounded-full bg-surface border-4 border-gray-100 flex items-center justify-center shadow-card">
                    <span className="font-display font-bold text-body text-dark">
                      {milestone.year}
                    </span>
                  </div>

                  <p className="text-body text-gray-500 pt-4">{milestone.event}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <FounderSection />
        <TeamSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
