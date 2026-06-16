"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";

export function UmrahPackagesSection() {
  const [activeTab, setActiveTab] = useState("umrah");

  const hajjPackages = [
    {
      title: "Hajj Shifting Package",
      price: "₹6,50,000",
      description: "Full Hajj package with hotel shifting between Mecca, Mina & Arafat. Includes visa, flights, accommodation & Qafila leaders.",
      isPopular: true,
      features: [
        "Hajj Visa & Return Flights",
        "Hotel Shifting — Mecca, Mina & Arafat",
        "Dedicated Kashmiri Qafila Leaders",
        "All Rituals Guidance & Transport"
      ],
    }
  ];

  const umrahPackages = [
    {
      title: "Essential (Umrah Only)",
      price: "₹1,10,000",
      description: "Core Umrah — Mecca & Madinah with guided Ziyarat",
      isPopular: false,
      features: [
        "Standard Hotels",
        "Return Flights",
        "Umrah Visa"
      ],
    },
    {
      title: "Economy",
      price: "₹1,20,000",
      description: "Essential comfort for devout seekers",
      isPopular: false,
      features: [
        "3-Star Hotels",
        "Daily Buffet Meals",
        "Shared Transport"
      ],
    },
    {
      title: "Semi Deluxe",
      price: "₹1,30,000",
      description: "The perfect balance of comfort & price",
      isPopular: true,
      features: [
        "4-Star Hotels (Closer to Haram)",
        "Private Group Transfers",
        "Dedicated Local Guide"
      ],
    },
    {
      title: "Deluxe",
      price: "₹1,40,000",
      description: "Maximum serenity & premium care",
      isPopular: false,
      features: [
        "5-Star Front-Row Hotels",
        "VIP Private Transport",
        "Personal Concierge Guide"
      ],
    }
  ];

  const currentPackages = activeTab === "hajj" ? hajjPackages : umrahPackages;

  return (
    <section className="section bg-bg">
      <div className="max-w-content mx-auto">
        <div className="flex flex-col md:flex-row gap-8 justify-between items-end mb-16">
          <h2 className="font-display font-medium text-[clamp(32px,4vw,44px)] text-dark leading-tight tracking-tight max-w-lg">
            Tailored Pilgrimage <span className="font-bold">Packages for Every Need</span> and Budget.
          </h2>

           <div className="flex bg-gray-100 rounded-full p-1 border border-gray-200 shadow-sm">
            <button
              onClick={() => setActiveTab("umrah")}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeTab === "umrah" ? "bg-dark text-white shadow-sm" : "text-gray-500 hover:text-dark"
              }`}
            >
              Umrah Package
            </button>
            <button
              onClick={() => setActiveTab("hajj")}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeTab === "hajj" ? "bg-dark text-white shadow-sm" : "text-gray-500 hover:text-dark"
              }`}
            >
              Hajj Package
            </button>
          </div>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 ${currentPackages.length > 2 ? 'lg:grid-cols-4' : currentPackages.length === 1 ? 'lg:grid-cols-1 lg:max-w-md lg:mx-auto' : 'lg:grid-cols-3'} gap-6`}>
          {currentPackages.map((pkg, index) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-[32px] p-6 flex flex-col ${
                pkg.isPopular
                  ? "bg-dark text-white shadow-floating scale-105 z-10 border-0"
                  : "bg-gray-50 border border-gray-200 text-dark"
              }`}
            >
              <h4 className={`text-xs font-semibold mb-6 ${pkg.isPopular ? "text-accent" : "text-gray-500"}`}>
                {pkg.title}
              </h4>
              
              <div className="flex flex-col gap-1 mb-4">
                <span className="font-display font-bold text-3xl">{pkg.price}</span>
                <span className={`text-xs ${pkg.isPopular ? "text-gray-400" : "text-gray-500"}`}>/person</span>
              </div>

              <p className={`text-xs leading-relaxed mb-8 ${pkg.isPopular ? "text-gray-400" : "text-gray-500"}`}>
                {pkg.description}
              </p>

              <Link
                href="/contact"
                className={`inline-flex items-center gap-2 pl-4 pr-1 py-1 rounded-full font-medium text-xs transition-colors duration-fast w-fit mb-8 ${
                  pkg.isPopular ? "bg-white text-dark hover:bg-gray-100" : "bg-dark text-white hover:bg-dark-muted"
                }`}
              >
                Select
                <div className={`w-6 h-6 rounded-full flex items-center justify-center ml-1 ${
                  pkg.isPopular ? "bg-accent text-dark" : "bg-accent text-dark"
                }`}>
                  <ArrowUpRight className="w-3 h-3" />
                </div>
              </Link>

              <div className="mt-auto pt-8 border-t border-gray-200/20">
                <p className={`text-xs font-semibold mb-4 ${pkg.isPopular ? "text-gray-300" : "text-gray-600"}`}>
                  Includes:
                </p>
                <ul className="space-y-3">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-xs">
                      <div className="mt-0.5 w-3 h-3 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                        <Check className="w-2 h-2 text-dark" />
                      </div>
                      <span className={pkg.isPopular ? "text-gray-300" : "text-gray-600"}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
