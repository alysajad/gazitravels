"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTAButton } from "@/components/ui/CTAButton";
import { Phone, Mail, MapPin } from "lucide-react";

const contactInfo: Array<{
  icon: React.ReactNode;
  title: string;
  details: Array<{ label: string; value: string; href?: string }>;
}> = [
  {
    icon: <Phone className="w-5 h-5" />,
    title: "Phone",
    details: [
      { label: "Mobile", value: "7006604820", href: "tel:7006604820" },
      { label: "Office", value: "7006347712", href: "tel:7006347712" },
    ],
  },
  {
    icon: <Mail className="w-5 h-5" />,
    title: "Email",
    details: [
      { label: "General", value: "gazitravels@gmail.com", href: "mailto:gazitravels@gmail.com" },
    ],
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    title: "Offices",
    details: [
      { label: "Head Office", value: "Magam, Budgam, Kashmir" },
      { label: "Branch", value: "Narbal, Dombail" },
    ],
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 bg-gray-100">
          <div className="relative z-10 max-w-content mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <SectionHeading
                badge="Contact"
                title="Get in Touch"
                subtitle="Have questions about our packages? We're here to help you plan your sacred journey."
              />
            </motion.div>
          </div>
        </section>

        {/* Contact Form + Info */}
        <section className="section">
          <div className="max-w-content mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-display font-semibold text-heading-lg text-dark mb-8">
                  Send Us a Message
                </h2>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block mb-2 text-label font-mono font-medium text-gray-500 uppercase tracking-wider">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full rounded-lg border border-gray-300 bg-surface px-4 py-3 text-body text-dark placeholder-gray-500 transition-all duration-fast focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-label font-mono font-medium text-gray-500 uppercase tracking-wider">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        className="w-full rounded-lg border border-gray-300 bg-surface px-4 py-3 text-body text-dark placeholder-gray-500 transition-all duration-fast focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 text-label font-mono font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full rounded-lg border border-gray-300 bg-surface px-4 py-3 text-body text-dark placeholder-gray-500 transition-all duration-fast focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-label font-mono font-medium text-gray-500 uppercase tracking-wider">
                      Journey Type
                    </label>
                    <select className="w-full rounded-lg border border-gray-300 bg-surface px-4 py-3 text-body text-dark focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-fast">
                      <option value="">Select journey type</option>
                      <option value="umrah">Umrah</option>
                      <option value="ziyarat">Ziyarat</option>
                      <option value="hajj">Hajj 2027</option>
                      <option value="kashmir">Kashmir Tours</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block mb-2 text-label font-mono font-medium text-gray-500 uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      className="w-full rounded-lg border border-gray-300 bg-surface px-4 py-3 text-body text-dark placeholder-gray-500 transition-all duration-fast focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 resize-none"
                      placeholder="Tell us about your travel plans or questions..."
                    />
                  </div>

                  <CTAButton href="#" variant="accent" className="w-full justify-center">
                    Send Message
                  </CTAButton>
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="font-display font-semibold text-heading-lg text-dark mb-8">
                  Contact Information
                </h2>

                <div className="space-y-8">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 text-dark">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-body font-semibold text-body text-dark mb-2">
                          {info.title}
                        </h3>
                        <div className="space-y-1">
                          {info.details.map((detail) => (
                            <div key={detail.label}>
                              <span className="text-label font-mono font-medium text-gray-500 uppercase tracking-wider">
                                {detail.label}:
                              </span>
                              {detail.href ? (
                                <a
                                  href={detail.href}
                                  className="ml-2 text-body text-dark hover:text-accent-hover transition-colors duration-fast"
                                >
                                  {detail.value}
                                </a>
                              ) : (
                                <span className="ml-2 text-body text-dark">
                                  {detail.value}
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* WhatsApp CTA */}
                <div className="mt-12 bg-surface rounded-card shadow-card p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-body font-semibold text-body text-dark">
                        Chat on WhatsApp
                      </h3>
                      <p className="text-body text-gray-500">
                        Quick response for urgent inquiries
                      </p>
                    </div>
                  </div>
                  <CTAButton
                    href="https://wa.me/917006604820?text=Assalamu%20Alaikum%2C%20I%27d%20like%20to%20enquire%20about%20packages."
                    variant="accent"
                    className="w-full justify-center"
                  >
                    WhatsApp Us
                  </CTAButton>
                </div>

                {/* Map */}
                <div className="mt-8 rounded-card overflow-hidden shadow-card">
                  <div className="aspect-video bg-gray-200 flex items-center justify-center">
                    <p className="text-body text-gray-500">Google Maps embed — Head Office, Magam, Budgam, Kashmir</p>
                  </div>
                </div>
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
