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
    name: "Manarat Misk Hotel",
    city: "Makkah",
    stars: 3,
    distanceFromHaram: "700m from Masjid al-Haram",
    amenities: ["Air-conditioning", "WiFi", "24hr reception", "Budget friendly"],
    image: "/images/hotels/manarat-misk.png",
    description: "Manarat Al Misk Hotel provides a budget-friendly and comfortable stay in Makkah. Located in the Ajyad District, it is conveniently situated approximately 700-1100 meters from the Masjid Al-Haram. It offers essential amenities such as air-conditioned rooms and free Wi-Fi, making it a suitable choice for pilgrims seeking value without compromising on comfort during their spiritual journey.",
  },
  {
    name: "Dream Zone Hotel",
    city: "Makkah",
    stars: 3,
    distanceFromHaram: "400m from Masjid al-Haram",
    amenities: ["WiFi", "24hr reception", "Room service", "Restaurant"],
    image: "/images/hotels/dream-zone.png",
    description: "Dream Zone Hotel is a popular accommodation choice for Hajj and Umrah pilgrims. Conveniently located approximately 400 to 700 meters from the Masjid al-Haram, it offers easy access to the holy mosque. The hotel provides comfortable rooms and reliable services, making it a frequent choice in various Umrah and Hajj packages.",
  },
  {
    name: "Marjan International",
    city: "Madinah",
    stars: 3,
    distanceFromHaram: "200m from Masjid Nabawi",
    amenities: ["Free WiFi", "24hr front desk", "Family rooms", "Restaurant"],
    image: "/images/hotels/marjan-intl.png",
    description: "Marjan International Hotel, also known as Hotel Al Merjan International Tower, is situated in the Central Madinah district (Markaziah). It is within a very short walking distance (approx. 170-300 meters) from the Prophet's Mosque, offering pilgrims exceptional convenience. The hotel features comfortable family rooms, an on-site restaurant, and a welcoming atmosphere.",
  },
  {
    name: "Marjan Golden",
    city: "Madinah",
    stars: 3,
    distanceFromHaram: "300m from Masjid Nabawi",
    amenities: ["Free WiFi", "Air-conditioned", "24hr reception", "On-site dining"],
    image: "/images/hotels/marjan-golden.png",
    description: "Marjan Golden Hotel is located in the central area of Madinah, offering close proximity to the Prophet's Mosque. Known for its strategic location, it allows pilgrims easy access for their daily prayers. The hotel provides essential amenities including free high-speed Wi-Fi, air-conditioned rooms, and a 24-hour front desk, ensuring a restful stay during your spiritual journey.",
  },
  {
    name: "Pullman Zamzam Makkah",
    city: "Makkah",
    stars: 5,
    distanceFromHaram: "Adjacent to Masjid al-Haram",
    amenities: ["Halal dining", "Prayer facilities", "WiFi", "Kaaba view rooms", "In-room Haram audio"],
    image: "/images/hotels/pullman-zamzam.png",
    description: "Located within the prestigious Abraj Al Bait (Clock Tower) complex, Pullman Zamzam Makkah is a 5-star sanctuary offering immediate access to the Holy Mosque. It features over 1,300 elegant rooms and suites, many providing direct views of the Kaaba. Designed for spiritual retreat, guests can listen to the Adhan directly in their rooms with adjustable volume. The hotel offers multiple on-site dining options serving local and international halal cuisine, 24-hour concierge services, and unparalleled hospitality for Hajj and Umrah pilgrims.",
  },
  {
    name: "Swissôtel Al Maqam Makkah",
    city: "Makkah",
    stars: 5,
    distanceFromHaram: "50m from Masjid al-Haram",
    amenities: ["Halal dining", "Spa", "WiFi", "Prayer facilities", "Direct Haram access"],
    image: "/images/hotels/swissotel-maqam.png",
    description: "Swissôtel Al Maqam Makkah elegantly towers above the Abraj Al Bait complex, offering breathtaking views of the Holy City and the Kaaba. It features direct access to the holy mosque through Ibrahim Al-Khalil Street and Tunnel. Guests experience a seamless blend of traditional Arabic hospitality and alpine elegance, with spacious rooms, a dedicated prayer hall, and Al Khairat restaurant serving diverse culinary delights. It is a premier choice for those seeking luxury and spiritual proximity.",
  },
  {
    name: "Hilton Suites Makkah",
    city: "Makkah",
    stars: 5,
    distanceFromHaram: "300m from Masjid al-Haram",
    amenities: ["Halal dining", "Fitness center", "WiFi", "Family suites", "Shopping mall access"],
    image: "/images/hotels/hilton-makkah.png",
    description: "Situated in the heart of Makkah overlooking the Grand Mosque, Hilton Suites Makkah offers a luxurious and convenient stay. Featuring spacious suites ideal for families, the hotel provides direct access to the Jabal Omar shopping mall and a private prayer hall with views of the Haram. Guests can enjoy exceptional dining at Alqandeel Restaurant and Al-Khalil café, 24-hour room service, and the trusted Hilton standard of comfort, making it a perfect retreat after spiritual journeys.",
  },
  {
    name: "Anjum Hotel Makkah",
    city: "Makkah",
    stars: 4,
    distanceFromHaram: "400m from Masjid al-Haram",
    amenities: ["Halal dining", "WiFi", "Prayer facilities", "24hr room service", "Kids club"],
    image: "/images/hotels/anjum-makkah.png",
    description: "The Anjum Hotel Makkah provides breathtaking views of the Holy Haram and is designed with Hijazi-inspired elegance. Known for its warm Saudi hospitality, it offers exceptional value with 1,743 spacious rooms and suites. The hotel features a vast air-conditioned prayer hall accommodating up to 2,000 worshippers, direct walking access to the Haram via a dedicated pedestrian tunnel, and extensive dining options, ensuring a serene and comfortable pilgrimage experience.",
  },
  {
    name: "Anwar Al Madinah Mövenpick",
    city: "Madinah",
    stars: 5,
    distanceFromHaram: "Adjacent to Masjid Nabawi",
    amenities: ["Halal dining", "Spa", "WiFi", "Prophet's Mosque views", "Shopping arcade"],
    image: "/images/hotels/movenpick-madinah.png",
    description: "Anwar Al Madinah Mövenpick is one of Madinah's largest and most sought-after hotels, located directly adjacent to the courtyard of the Prophet's Mosque (Masjid an-Nabawi). Offering unparalleled proximity, many of its elegantly appointed rooms and suites provide direct views of the Green Dome. The hotel is integrated with a vibrant shopping arcade and features four exceptional restaurants, providing pilgrims with the ultimate blend of spiritual convenience and premium Swiss-quality hospitality.",
  },
  {
    name: "Al Madinah Concorde Hotel",
    city: "Madinah",
    stars: 4,
    distanceFromHaram: "Near Masjid Nabawi",
    amenities: ["Halal dining", "Café", "WiFi", "Business centre", "24hr front desk"],
    image: "/images/hotels/concorde-madinah.png",
    description: "Al Madinah Concorde Hotel offers a sophisticated and comfortable stay just a short walk from the Prophet's Mosque. Known for its elegant decor and welcoming atmosphere, the hotel provides well-appointed rooms equipped with modern amenities to ensure a restful stay. Guests can enjoy international and Middle Eastern cuisine at the on-site restaurant, and benefit from the attentive 24-hour service, making it an excellent choice for a peaceful stay in the illuminated city.",
  },
  {
    name: "Dallah Taibah Hotel",
    city: "Madinah",
    stars: 4,
    distanceFromHaram: "50m from Masjid Nabawi",
    amenities: ["Halal dining", "WiFi", "Prayer facilities", "Coffee shop", "Room service"],
    image: "/images/hotels/dallah-madinah.png",
    description: "Dallah Taibah Hotel is exceptionally located just 50 meters from the Prophet's Mosque, offering pilgrims extraordinary convenience. The hotel is renowned for its warm hospitality, spacious air-conditioned rooms, and traditional Saudi charm. Guests can enjoy hot beverages and fresh pastries at the lobby café, and authentic cuisine at the main restaurant. Its strategic location near the commercial district makes it perfect for both spiritual devotion and exploring the city.",
  },
  {
    name: "Al Ansar Hotel Madinah",
    city: "Madinah",
    stars: 3,
    distanceFromHaram: "Walking distance to Masjid Nabawi",
    amenities: ["Halal dining", "WiFi", "24hr reception", "Family rooms"],
    image: "/images/hotels/ansar-madinah.png",
    description: "Al Ansar Hotel provides a budget-friendly yet highly comfortable option for pilgrims, located within a convenient walking distance to Masjid an-Nabawi. The hotel offers clean, well-maintained family rooms with essential amenities, ensuring a restful environment after daily prayers. With a 24-hour reception, complimentary WiFi in public areas, and an on-site restaurant serving hearty meals, it is an ideal choice for pilgrims seeking excellent value without compromising on spiritual access.",
  }
];