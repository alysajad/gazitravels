export interface Hotel {
  name: string;
  city: "Makkah" | "Madinah";
  stars: number;
  distanceFromHaram: string;
  amenities: string[];
  image: string;
  description: string;
}

export const hotels: Hotel[] = [
  {
    name: "Pullman Zamzam Makkah",
    city: "Makkah",
    stars: 5,
    distanceFromHaram: "Adjacent to Masjid al-Haram",
    amenities: ["Halal dining", "Prayer facilities", "WiFi", "Kaaba view rooms"],
    image: "/images/hotels/pullman-zamzam.jpg",
    description: "A prestigious 5-star hotel directly adjacent to the Grand Mosque, offering unparalleled access to the Haram and Kaaba view rooms.",
  },
  {
    name: "Swissôtel Al Maqam Makkah",
    city: "Makkah",
    stars: 5,
    distanceFromHaram: "50m from Masjid al-Haram",
    amenities: ["Halal dining", "Spa", "WiFi", "Prayer facilities"],
    image: "/images/hotels/swissotel-maqam.jpg",
    description: "Modern luxury with exceptional proximity to the Holy Mosque, featuring world-class dining and wellness facilities.",
  },
  {
    name: "Hilton Suites Makkah",
    city: "Makkah",
    stars: 4,
    distanceFromHaram: "300m from Masjid al-Haram",
    amenities: ["Halal dining", "Pool", "WiFi", "Family suites"],
    image: "/images/hotels/hilton-makkah.jpg",
    description: "Spacious suites ideal for families and groups, with comfortable amenities and easy walking distance to the Haram.",
  },
  {
    name: "Anjum Hotel Makkah",
    city: "Makkah",
    stars: 4,
    distanceFromHaram: "400m from Masjid al-Haram",
    amenities: ["Halal dining", "WiFi", "Prayer facilities", "24hr room service"],
    image: "/images/hotels/anjum-makkah.jpg",
    description: "A well-appointed hotel offering comfortable accommodation and warm hospitality at an excellent value.",
  },
  {
    name: "Anwar Al Madinah Mövenpick",
    city: "Madinah",
    stars: 5,
    distanceFromHaram: "Adjacent to Masjid Nabawi",
    amenities: ["Halal dining", "Spa", "WiFi", "Prophet's Mosque views"],
    image: "/images/hotels/movenpick-madinah.jpg",
    description: "Luxury accommodation directly facing Masjid Nabawi, offering spiritual ambiance and premium comfort.",
  },
  {
    name: "Al Madinah Concorde Hotel",
    city: "Madinah",
    stars: 5,
    distanceFromHaram: "Near Masjid Nabawi",
    amenities: ["Halal dining", "Pool", "WiFi", "Business centre"],
    image: "/images/hotels/concorde-madinah.jpg",
    description: "A sophisticated hotel combining modern luxury with proximity to the Prophet's Mosque.",
  },
  {
    name: "Dallah Taibah Hotel",
    city: "Madinah",
    stars: 4,
    distanceFromHaram: "300m from Masjid Nabawi",
    amenities: ["Halal dining", "WiFi", "Prayer facilities", "Gift shop"],
    image: "/images/hotels/dallah-madinah.jpg",
    description: "A comfortable and convenient option for pilgrims, offering quality accommodation within walking distance of the Prophet's Mosque.",
  },
  {
    name: "Al Ansar Hotel Madinah",
    city: "Madinah",
    stars: 3,
    distanceFromHaram: "Walking distance to Masjid Nabawi",
    amenities: ["Halal dining", "WiFi", "24hr reception"],
    image: "/images/hotels/ansar-madinah.jpg",
    description: "A budget-friendly option with convenient access to Masjid Nabawi, ideal for pilgrims seeking value without compromising location.",
  }
];