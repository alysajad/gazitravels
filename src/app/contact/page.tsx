"use client";

import { Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTAButton } from "@/components/ui/CTAButton";
import { Phone, Mail, MapPin } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { umrahPackages } from "@/data/umrah-packages";
import { ziyaratPackages } from "@/data/ziyarat-packages";
import { kashmirPackages } from "@/data/kashmir-packages";

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
      { label: "Primary", value: "info@gazitourandtravels.com", href: "mailto:info@gazitourandtravels.com" },
      { label: "General", value: "gazitravels@gmail.com", href: "mailto:gazitravels@gmail.com" },
    ],
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    title: "Offices",
    details: [
      { label: "Head Office", value: "Magam, Budgam, Kashmir" },
      { label: "Branch", value: "Narbal, Dombail" },
      { label: "Branch", value: "Wavoora Lolab, Kupwara" },
    ],
  },
];

function ContactForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    journeyType: "",
    packageName: "",
    duration: "",
    date: "",
    travelers: "",
    message: "",
  });

  useEffect(() => {
    const journeyParam = searchParams.get("journey") || "";
    let initialCategory = "";
    let initialPackage = "";

    if (journeyParam) {
      if (journeyParam.startsWith("Umrah")) {
        initialCategory = "Umrah";
        const matched = umrahPackages.find(p => journeyParam.includes(p.title));
        if (matched) initialPackage = matched.title;
      } else if (journeyParam.startsWith("Ziyarat")) {
        initialCategory = "Ziyarat";
        const matched = ziyaratPackages.find(p => journeyParam.includes(p.title));
        if (matched) initialPackage = matched.title;
      } else if (journeyParam.startsWith("Kashmir")) {
        initialCategory = "Kashmir";
        const matched = kashmirPackages.find(p => journeyParam.includes(p.title));
        if (matched) initialPackage = matched.title;
      } else if (journeyParam.includes("Hajj")) {
        initialCategory = "Hajj 2027";
      }
    }

    let messageText = "";
    if (initialPackage && journeyParam !== initialCategory && journeyParam !== initialPackage) {
        // Automatically append the tier / extra details to the message
        messageText = `I am interested in: ${journeyParam}`;
    }

    setFormData(prev => ({
      ...prev,
      journeyType: initialCategory,
      packageName: initialPackage,
      duration: searchParams.get("duration") || "",
      date: searchParams.get("date") || "",
      travelers: searchParams.get("travelers") || "",
      message: messageText
    }));
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      // Serialize form data to URL parameters
      const params = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        if (value) params.append(key, value);
      });

      router.push(`/thank-you?${params.toString()}`);
    } catch (error) {
      console.error(error);
      alert('There was an error sending your message. Please try again or contact us directly.');
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-2 text-label font-mono font-medium text-gray-500 uppercase tracking-wider">
            Name *
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
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
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
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
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 bg-surface px-4 py-3 text-body text-dark placeholder-gray-500 transition-all duration-fast focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          placeholder="your@email.com"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-2 text-label font-mono font-medium text-gray-500 uppercase tracking-wider">
            Journey Category
          </label>
          <select 
            name="journeyType"
            value={formData.journeyType}
            onChange={(e) => {
              handleChange(e);
              setFormData(prev => ({ ...prev, packageName: "" }));
            }}
            className="w-full rounded-lg border border-gray-300 bg-surface px-4 py-3 text-body text-dark focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-fast"
          >
            <option value="">Select category</option>
            <option value="Umrah">Umrah Package</option>
            <option value="Hajj 2027">Hajj 2027</option>
            <option value="Ziyarat">Ziyarat Tour</option>
            <option value="Kashmir">Kashmir Tour</option>
          </select>
        </div>
        
        {formData.journeyType && formData.journeyType !== "Hajj 2027" ? (
          <div>
            <label className="block mb-2 text-label font-mono font-medium text-gray-500 uppercase tracking-wider">
              Package Options
            </label>
            <select
              name="packageName"
              value={formData.packageName}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 bg-surface px-4 py-3 text-body text-dark focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-fast"
            >
              <option value="">Select package</option>
              {formData.journeyType === "Umrah" && umrahPackages.map(p => (
                <option key={p.slug} value={p.title}>{p.title}</option>
              ))}
              {formData.journeyType === "Ziyarat" && ziyaratPackages.map(p => (
                <option key={p.slug} value={p.title}>{p.title}</option>
              ))}
              {formData.journeyType === "Kashmir" && kashmirPackages.map(p => (
                <option key={p.slug} value={p.title}>{p.title}</option>
              ))}
            </select>
          </div>
        ) : (
          <div className="hidden md:block"></div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-2 text-label font-mono font-medium text-gray-500 uppercase tracking-wider">
            Duration
          </label>
          <input
            type="text"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 bg-surface px-4 py-3 text-body text-dark placeholder-gray-500 transition-all duration-fast focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
            placeholder="e.g. 14 Days"
          />
        </div>
        <div>
          <label className="block mb-2 text-label font-mono font-medium text-gray-500 uppercase tracking-wider">
            Preferred Date
          </label>
          <input
            type="date"
            name="date"
            min={new Date().toISOString().split('T')[0]}
            value={formData.date}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 bg-surface px-4 py-3 text-body text-dark placeholder-gray-500 transition-all duration-fast focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-2 text-label font-mono font-medium text-gray-500 uppercase tracking-wider">
            Travelers
          </label>
          <input
            type="text"
            name="travelers"
            value={formData.travelers}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 bg-surface px-4 py-3 text-body text-dark placeholder-gray-500 transition-all duration-fast focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
            placeholder="e.g. 2 People"
          />
        </div>
      </div>

      <div>
        <label className="block mb-2 text-label font-mono font-medium text-gray-500 uppercase tracking-wider">
          Message
        </label>
        <textarea
          rows={5}
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 bg-surface px-4 py-3 text-body text-dark placeholder-gray-500 transition-all duration-fast focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 resize-none"
          placeholder="Tell us about your travel plans or questions..."
        />
      </div>

      <button type="submit" disabled={isSubmitting} className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 font-medium text-dark hover:bg-accent-hover transition-colors duration-fast w-full disabled:opacity-70 disabled:cursor-not-allowed">
        {isSubmitting ? "Sending..." : "Send Message"}
        {!isSubmitting && (
          <div className="w-8 h-8 rounded-full bg-dark flex items-center justify-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 transition-transform group-hover:scale-110"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
          </div>
        )}
      </button>
    </form>
  );
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-24 md:pt-32 pb-16 md:pb-20 bg-gray-100">
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

                <Suspense fallback={<div className="h-64 flex items-center justify-center">Loading form...</div>}>
                  <ContactForm />
                </Suspense>
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
                    <iframe
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      loading="lazy"
                      allowFullScreen
                      src="https://www.google.com/maps?q=Gazi+Tours+%26+Travels%2C+3HVW%2BRJX%2C+Main+Market%2C+Gulmarg+Road%2C+Magam%2C+Jammu+and+Kashmir+193401&output=embed"
                      title="Gazi Tours & Travels Office Location"
                    ></iframe>
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
