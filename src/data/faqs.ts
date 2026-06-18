export interface FAQ {
  question: string;
  answer: string;
  category: "Umrah" | "Ziyarat" | "Hajj" | "Kashmir" | "General";
}

export const faqs: FAQ[] = [
  {
    question: "What does your Umrah package include?",
    answer: "All our Umrah packages include Umrah visa processing, return flights, airport transfers, AC transportation, guided Ziyarat in Makkah and Madinah, and accommodation near the Haram. Specific inclusions vary by package tier Economy includes breakfast only, while Premium includes full board dining.",
    category: "Umrah",
  },
  {
    question: "Do you arrange visas?",
    answer: "Yes, visa processing is included in all our packages. Our dedicated visa team handles the entire process, from application to approval. We also assist with visa requirements for Iraq and Iran Ziyarat packages.",
    category: "General",
  },
  {
    question: "Can I do Ziyarat combined with Umrah?",
    answer: "Yes, we offer combined Umrah and Ziyarat packages. Our team can customise an itinerary that covers both your Umrah in Makkah and Madinah, and Ziyarat in Iraq or Iran. Contact us for a personalised quote.",
    category: "Ziyarat",
  },
  {
    question: "Is Hajj 2027 registration open?",
    answer: "Yes, pre-registration for Hajj 2027 is now open. Official packages will be announced once the Saudi Ministry of Hajj confirms the quota. Registered pilgrims receive first access when packages are announced.",
    category: "Hajj",
  },
  {
    question: "Do you offer Kashmir family packages?",
    answer: "Yes, we have dedicated family packages for Kashmir with child-friendly activities, family-sized accommodation, and itineraries designed for all ages. Our Family Kashmir package includes pony rides, Shikara experiences, and comfortable houseboat stays.",
    category: "Kashmir",
  },
  {
    question: "How do I contact you for a custom quote?",
    answer: "You can reach us via WhatsApp at 7006604820, call our office at 7006347712, or email us at gazitravels@gmail.com. We respond to all inquiries within 24 hours and are happy to create a customised package for your needs.",
    category: "General",
  },
];

export const hajjFaqs: FAQ[] = [
  {
    question: "When will Hajj 2027 packages be announced?",
    answer: "Official Hajj 2027 packages will be announced once the Saudi Ministry of Hajj confirms the Indian quota and official dates. Based on previous years, this is typically 3-4 months before the Hajj season (expected May-June 2027).",
    category: "Hajj",
  },
  {
    question: "Is there any cost to pre-register?",
    answer: "No, pre-registration is completely free. It simply secures your place on our priority list so you receive package details and booking access as soon as they become available.",
    category: "Hajj",
  },
  {
    question: "What is included in a Hajj package?",
    answer: "Our Hajj packages typically include visa, flights, accommodation in Makkah and Mina, transportation between holy sites, meals, guided rituals, and on-ground support throughout the pilgrimage. Specific inclusions vary by package tier.",
    category: "Hajj",
  },
  {
    question: "How do Hajj quotas work for Indian pilgrims?",
    answer: "The Saudi Ministry of Hajj allocates quotas to each country based on Muslim population. India's quota is managed through the Ministry of Minority Affairs and approved operators like Gazi Tour & Travels.",
    category: "Hajj",
  },
  {
    question: "Can I combine Hajj with Umrah or Ziyarat?",
    answer: "Yes, many pilgrims combine Hajj with Umrah (Qiran or Tamattu). We can also arrange Ziyarat in Iraq or Iran before or after your Hajj journey. Contact us for combined itineraries.",
    category: "Hajj",
  },
];
