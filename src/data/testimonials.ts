export interface Testimonial {
  name: string;
  journeyType: "Umrah" | "Ziyarat" | "Kashmir" | "Hajj";
  rating: number;
  quote: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Abdul Rashid",
    journeyType: "Umrah",
    rating: 5,
    quote: "Gazi Tour & Travels made our Umrah experience truly seamless. From visa processing to the guided Ziyarat in Makkah and Madinah, every detail was handled with care. The group leader was knowledgeable and supportive throughout.",
    avatar: "/images/team/default-avatar.jpg",
  },
  {
    name: "Farooq Ahmad",
    journeyType: "Ziyarat",
    rating: 5,
    quote: "The Iraq Ziyarat package exceeded our expectations. The scholar who accompanied us provided deep spiritual context at every shrine. The accommodation was comfortable and the food was excellent. Highly recommend for anyone seeking a meaningful Ziyarat experience.",
    avatar: "/images/team/default-avatar.jpg",
  },
  {
    name: "Naseema Banoo",
    journeyType: "Umrah",
    rating: 5,
    quote: "As a first-time pilgrim, I was nervous about the journey. The Gazi Tour team walked me through every step, from Ihram preparation to the rituals at the Haram. Their patience and guidance made all the difference.",
    avatar: "/images/team/default-avatar.jpg",
  },
  {
    name: "Mohammad Yousuf",
    journeyType: "Kashmir",
    rating: 5,
    quote: "We booked the Family Kashmir package and it was perfect for our children. The houseboat on Dal Lake was beautiful, and the activities were well-planned for all ages. We created memories that will last a lifetime.",
    avatar: "/images/team/default-avatar.jpg",
  },
  {
    name: "Ghulam Hassan",
    journeyType: "Ziyarat",
    rating: 5,
    quote: "The Arbaeen Walk was a life-changing experience. Walking from Najaf to Karbala with millions of other pilgrims, guided by Gazi Tour's experienced team, was something I will never forget. They handled all logistics perfectly.",
    avatar: "/images/team/default-avatar.jpg",
  },
  {
    name: "Aisha Begum",
    journeyType: "Umrah",
    rating: 5,
    quote: "The Premium Umrah package was worth every rupee. The 5-star hotels near the Haram, personal guide, and full board dining made the journey comfortable and spiritually enriching. JazakAllahu Khairan to the entire team.",
    avatar: "/images/team/default-avatar.jpg",
  },
];
