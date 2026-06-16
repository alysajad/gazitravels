export interface UmrahPackage {
  slug: string;
  title: string;
  tier: "Economy" | "Standard" | "Premium" | "Family" | "Ramadan";
  price: number;
  duration: string;
  nightsMakkah: number;
  nightsMadinah: number;
  accommodation: string;
  meals: string;
  groupSize: string;
  highlights: string[];
  ziyarat: string[];
  description: string;
  image: string;
}

export const umrahPackages: UmrahPackage[] = [
  {
    slug: "economy-umrah-10-days",
    title: "Economy Umrah",
    tier: "Economy",
    price: 65000,
    duration: "10 Days",
    nightsMakkah: 5,
    nightsMadinah: 4,
    accommodation: "3-star shared quad, within 1km of Haram",
    meals: "Breakfast only",
    groupSize: "Up to 25 pax",
    highlights: [
      "Economy class flights from Srinagar / Delhi",
      "AC transportation throughout",
      "Urdu/Kashmiri speaking group leader",
      "Visa processing included",
    ],
    ziyarat: [
      "Cave of Hira",
      "Jabal Thawr",
      "Masjid Aisha",
      "Masjid Quba",
      "Masjid al-Qiblatayn",
      "Mount Uhud",
      "Jannatul Baqi",
    ],
    description: "An affordable pilgrimage with all essential arrangements, designed for those seeking a meaningful Umrah experience without compromise on spiritual guidance.",
    image: "/images/pilgrimage/economy-umrah.jpg",
  },
  {
    slug: "standard-umrah-14-days",
    title: "Standard Umrah",
    tier: "Standard",
    price: 95000,
    duration: "14 Days",
    nightsMakkah: 7,
    nightsMadinah: 6,
    accommodation: "4-star twin sharing, walking distance to Haram",
    meals: "Breakfast + dinner",
    groupSize: "Up to 15 pax",
    highlights: [
      "Priority check-in flights",
      "Dedicated group guide",
      "Full Makkah + Madinah Ziyarat",
      "Taif day trip included",
    ],
    ziyarat: [
      "Full Makkah Ziyarat",
      "Full Madinah Ziyarat",
      "Taif day trip",
      "Cave of Hira",
      "Jabal Thawr",
    ],
    description: "A comfortable and spiritually enriching journey with premium accommodation, dedicated guidance, and extended time in the holy cities.",
    image: "/images/pilgrimage/standard-umrah.jpg",
  },
  {
    slug: "premium-umrah-14-days",
    title: "Premium Umrah",
    tier: "Premium",
    price: 140000,
    duration: "14 Days",
    nightsMakkah: 7,
    nightsMadinah: 6,
    accommodation: "5-star single rooms — Pullman Zamzam + Mövenpick",
    meals: "Full board",
    groupSize: "Up to 10 pax",
    highlights: [
      "Haram-adjacent 5-star hotels",
      "Personal guide (1:1 or 1:5 ratio)",
      "Full board dining",
      "Zam Zam water (5L) + Ihram kit",
    ],
    ziyarat: [
      "Comprehensive Makkah Ziyarat",
      "Comprehensive Madinah Ziyarat",
      "Taif day trip",
      "Jeddah corniche visit",
    ],
    description: "The finest pilgrimage experience with luxury accommodation, personal guidance, and comprehensive spiritual programmes tailored to your pace.",
    image: "/images/pilgrimage/premium-umrah.jpg",
  },
  {
    slug: "family-umrah-14-days",
    title: "Family Umrah",
    tier: "Family",
    price: 85000,
    duration: "14 Days",
    nightsMakkah: 7,
    nightsMadinah: 6,
    accommodation: "4-star family rooms (interconnecting available)",
    meals: "Breakfast + dinner",
    groupSize: "Min 4-person family",
    highlights: [
      "Family seating on flights",
      "Family-friendly guide",
      "Child-aware itinerary pacing",
      "Stroller assistance + pediatric first-aid",
    ],
    ziyarat: [
      "Full Makkah Ziyarat",
      "Full Madinah Ziyarat",
      "Taif day trip",
    ],
    description: "Designed for families undertaking this sacred journey together, with careful attention to comfort, safety, and age-appropriate pacing.",
    image: "/images/pilgrimage/family-umrah.jpg",
  },
  {
    slug: "ramadan-umrah-10-days",
    title: "Ramadan Umrah",
    tier: "Ramadan",
    price: 180000,
    duration: "10 Days",
    nightsMakkah: 5,
    nightsMadinah: 4,
    accommodation: "5-star near Haram",
    meals: "Iftar buffet + Suhoor catering",
    groupSize: "Up to 12 pax",
    highlights: [
      "Taraweeh night session guide",
      "Dedicated prayer time scheduling",
      "Special Ramadan spiritual programme",
      "Premium accommodation near Haram",
    ],
    ziyarat: [
      "Full Makkah Ziyarat",
      "Full Madinah Ziyarat",
    ],
    description: "Experience the blessed month of Ramadan in the holy cities, with spiritual programmes designed to maximise the rewards of this sacred time.",
    image: "/images/pilgrimage/ramadan-umrah.jpg",
  },
];
