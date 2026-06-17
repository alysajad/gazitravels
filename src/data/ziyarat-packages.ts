export interface ZiyaratPackage {
  slug: string;
  title: string;
  country: "Iraq" | "Iran" | "Combined" | "Arbaeen";
  destinations: string[];
  shrines: string[];
  price: number;
  duration: string;
  description: string;
  highlights: string[];
  image: string;
  tiers?: {
    name: string;
    price: number;
    popular?: boolean;
  }[];
}

export const ziyaratPackages: ZiyaratPackage[] = [
  {
    slug: "grand-ziyarat-iraq-iran",
    title: "Grand Ziyarat — Iraq + Iran",
    country: "Combined",
    destinations: ["Karbala", "Najaf", "Kadhimiya", "Samarra", "Mashhad", "Qom"],
    shrines: [
      "Shrine of Imam Hussain (AS) — Karbala",
      "Shrine of Hazrat Abbas (AS) — Karbala",
      "Shrine of Imam Ali (AS) — Najaf",
      "Shrine of Imam Musa al-Kadhim (AS) — Kadhimiya",
      "Shrine of Imam Ali al-Hadi (AS) — Samarra",
      "Shrine of Imam Hasan al-Askari (AS) — Samarra",
      "Shrine of Imam Reza (AS) — Mashhad",
      "Shrine of Hazrat Fatima al-Masumah (SA) — Qom",
    ],
    price: 120000,
    duration: "18 Days",
    description: "A complete spiritual journey covering the holy shrines of Iraq (Karbala, Najaf, Kadhimiya, Samarra) and Iran (Mashhad, Qom). Kashmiri group Qafila leaders and scheduled Majalis & spiritual sessions throughout.",
    highlights: [
      "Iraq: Karbala, Najaf, Kadhimiya, Samarra",
      "Iran: Mashhad, Qom",
      "Kashmiri Group Qafila leaders",
      "Scheduled Majalis & spiritual sessions",
      "Full board halal meals",
      "AC transportation throughout",
    ],
    image: "/images/pilgrimage/karbala.jpg",
    tiers: [
      { name: "Economy", price: 120000 },
      { name: "Semi Deluxe", price: 130000, popular: true },
      { name: "Deluxe", price: 150000 },
    ],
  },
  {
    slug: "arbaeen-walk-15-days",
    title: "Arbaeen Walk — 15 Days",
    country: "Arbaeen",
    destinations: ["Najaf", "Karbala"],
    shrines: [
      "Shrine of Imam Ali (AS) — Najaf",
      "Shrine of Imam Hussain (AS) — Karbala",
      "Arbaeen Walk (80km Najaf to Karbala)",
    ],
    price: 115000,
    duration: "15 Days",
    description: "The world's largest annual peaceful gathering — the sacred 80km walk from Najaf to Karbala, honouring Imam Hussain (AS). Limited slots available for Arbaeen 2026.",
    highlights: [
      "The 80km Najaf to Karbala walk",
      "15 Days full itinerary",
      "Full logistical support & baggage transport",
      "Dedicated medical aid & onsite guides",
      "Mawkib arrangements & spiritual Majalis",
      "Early registration essential",
    ],
    image: "/images/pilgrimage/arbaeen.jpg",
  },
  {
    slug: "iraq-ziyarat-7-days",
    title: "Iraq Ziyarat — 7 Days",
    country: "Iraq",
    destinations: ["Najaf", "Karbala", "Baghdad"],
    shrines: [
      "Shrine of Imam Ali (AS) — Najaf",
      "Shrine of Imam Hussain (AS) — Karbala",
      "Shrine of Hazrat Abbas (AS) — Karbala",
      "Shrine of Imam Musa al-Kadhim (AS) — Baghdad",
    ],
    price: 75000,
    duration: "7 Days",
    description: "A focused pilgrimage to Iraq's most sacred Shia shrines, guided by qualified Islamic scholars and experienced local guides.",
    highlights: [
      "Flights ex-Delhi to Najaf",
      "Certified local Ziyarat guide",
      "Qualified Islamic scholar accompaniment",
      "Halal Indian food throughout",
    ],
    image: "/images/pilgrimage/ziyarat-hero.jpg",
  },
  {
    slug: "iraq-ziyarat-extended-10-days",
    title: "Iraq Ziyarat Extended — 10 Days",
    country: "Iraq",
    destinations: ["Najaf", "Karbala", "Baghdad", "Samarra"],
    shrines: [
      "Shrine of Imam Ali (AS) — Najaf",
      "Shrine of Imam Hussain (AS) — Karbala",
      "Shrine of Hazrat Abbas (AS) — Karbala",
      "Shrine of Imam Musa al-Kadhim (AS) — Baghdad",
      "Shrine of Imam Ali al-Hadi (AS) — Samarra",
      "Shrine of Imam Hasan al-Askari (AS) — Samarra",
    ],
    price: 95000,
    duration: "10 Days",
    description: "An extended journey through Iraq's sacred cities, including the rarely visited shrines of Samarra and personal time for reflection in Karbala.",
    highlights: [
      "4-star hotel accommodation",
      "Full board meals",
      "Free day in Karbala for ibadah",
      "Samarra shrines visit",
    ],
    image: "/images/pilgrimage/iraq-ziyarat.jpg",
  },
  {
    slug: "iran-ziyarat-mashhad-7-days",
    title: "Iran Ziyarat — Mashhad — 7 Days",
    country: "Iran",
    destinations: ["Mashhad"],
    shrines: [
      "Shrine of Imam Ali ibn Musa al-Reza (AS)",
      "Goharshad Mosque",
      "Imam Reza Museum",
      "Qadamgah (footprint shrine)",
    ],
    price: 70000,
    duration: "7 Days",
    description: "An immersive pilgrimage to Mashhad, centred on the grand shrine complex of Imam Reza (AS) — one of the largest mosque complexes in the world.",
    highlights: [
      "Flights ex-Delhi to Mashhad",
      "4-star hotel near shrine",
      "Private AC vehicle for city Ziyarat",
      "Full board halal meals",
    ],
    image: "/images/pilgrimage/mashhad.jpg",
  },
  {
    slug: "iran-ziyarat-mashhad-qom-10-days",
    title: "Iran Ziyarat — Mashhad + Qom — 10 Days",
    country: "Iran",
    destinations: ["Mashhad", "Qom"],
    shrines: [
      "Shrine of Imam Reza (AS) — Mashhad",
      "Goharshad Mosque — Mashhad",
      "Shrine of Hazrat Fatima al-Masumah (SA) — Qom",
      "Jamkaran Mosque — Qom",
    ],
    price: 90000,
    duration: "10 Days",
    description: "A comprehensive Iran pilgrimage covering Mashhad and Qom, with train travel between cities and stays near both major shrine complexes.",
    highlights: [
      "Train Mashhad to Qom",
      "4-star accommodation near shrines",
      "Full board halal meals",
      "Jamkaran Mosque visit",
    ],
    image: "/images/pilgrimage/iran-qom.jpg",
  },
];
