export interface KashmirPackage {
  id?: string;
  slug: string;
  title: string;
  tier: string;
  season: string;
  price: number;
  originalPrice: number;
  save: string;
  duration: string;
  minPax: string;
  route: string;
  image: string;
  popular?: boolean;
  highlights: string[];
  overview: string;
  itinerary: { day: number; title: string; desc: string }[];
  inclusions: string[];
  exclusions: string[];
}

export const kashmirPackages: KashmirPackage[] = [
  {
    "id": "s1",
    "slug": "kashmir-paradise-tour",
    "title": "Kashmir Paradise Tour",
    "tier": "Budget",
    "season": "Summer",
    "price": 16900,
    "originalPrice": 20000,
    "save": "3,100",
    "duration": "6D / 5N",
    "minPax": "Min. 2 Pax",
    "route": "Srinagar – Gulmarg – Pahalgam",
    "image": "/images/kashmir/valley-explorer.jpg",
    "highlights": [
      "Shikara ride on Dal Lake",
      "Gulmarg meadow & gondola option",
      "Pahalgam — Valley of Shepherds",
      "Mughal Gardens of Srinagar"
    ],
    "overview": "Kashmir is a divine paradise on earth — undulating meadows, twisting rivers and majestic snow-capped peaks. This six-day journey covers the three classics every first-time traveller dreams of: the houseboats and gardens of Srinagar, the alpine meadow of Gulmarg, and the pine-wrapped Valley of Shepherds at Pahalgam. Enough time to soak it in, without stretching the trip too thin.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival in Srinagar",
        "desc": "Met on arrival and transferred to your houseboat / hotel. Evening Shikara ride on Dal Lake past the floating gardens, lotus beds and Char Chinar island. Overnight in Srinagar."
      },
      {
        "day": 2,
        "title": "Srinagar – Gulmarg – Srinagar",
        "desc": "Full-day excursion to Gulmarg, the meadow of flowers. Optional Gondola cable car to Kongdoori / Khilanmarg, or a pony ride to the seven springs. Return to Srinagar for the night."
      },
      {
        "day": 3,
        "title": "Srinagar – Pahalgam",
        "desc": "Drive (approx. 3 hrs) to Pahalgam, the Valley of Shepherds, en route through saffron fields and the Avantipura ruins. Evening at leisure by the Lidder river. Overnight in Pahalgam."
      },
      {
        "day": 4,
        "title": "Pahalgam Sightseeing",
        "desc": "Explore Pahalgam at leisure — Chandanwari, Aru and Betaab valley (by local cab) or a relaxed riverside walk. Overnight in Pahalgam."
      },
      {
        "day": 5,
        "title": "Pahalgam – Srinagar",
        "desc": "Return to Srinagar. Afternoon tour of the Mughal Gardens — Nishat, Shalimar and Chashme Shahi — and the Shankaracharya hill viewpoint. Overnight in Srinagar."
      },
      {
        "day": 6,
        "title": "Departure",
        "desc": "After breakfast, time for last-minute handicraft shopping before your transfer to the airport."
      }
    ],
    "inclusions": [
      "Wildlife & environmental entry fees",
      "5 breakfasts & 5 dinners (as per itinerary)",
      "Private AC vehicle (Innova / Xylo / Scorpio) for all transfers & sightseeing",
      "All sightseeing and transfers as per the itinerary",
      "Driver allowance, fuel, parking, toll & road taxes",
      "5 nights accommodation on double-sharing basis (2 adults)",
      "Airport / bus-stand pick-up and drop",
      "24×7 on-trip assistance from True Valley Travels"
    ],
    "exclusions": [
      "5% GST",
      "Any airfare or train fare to & from Kashmir",
      "Lunches and any meals not specified in the itinerary",
      "Entry fees to gardens, monuments & parks",
      "Gondola cable car, pony rides, shikara & adventure-activity charges",
      "Travel insurance of any kind",
      "Personal expenses — tips, laundry, telephone, medical",
      "Anything not mentioned under inclusions",
      "Costs arising from circumstances beyond our control (weather, landslides, road blocks)"
    ]
  },
  {
    "id": "s2",
    "slug": "best-of-kashmir-tour",
    "title": "Best of Kashmir Tour",
    "tier": "Premium",
    "season": "Summer",
    "price": 20900,
    "originalPrice": 25000,
    "save": "4,100",
    "duration": "6D / 5N",
    "minPax": "Min. 2 Pax",
    "route": "Srinagar – Sonamarg – Gulmarg – Pahalgam",
    "image": "/images/kashmir/classic-kashmir.jpg",
    "popular": true,
    "highlights": [
      "All four valleys in one trip",
      "Sonamarg — Thajiwas Glacier",
      "Gulmarg gondola & Pahalgam",
      "Houseboat stay on Dal Lake"
    ],
    "overview": "The complete Kashmir — majestic snow-clad mountains and verdant valleys across all four headline destinations. From romantic boat rides on Dal Lake to the glacier meadows of Sonamarg, the ski slopes of Gulmarg and the shepherds' valley of Pahalgam, this is the itinerary for travellers who want to see it all in one unhurried week.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival in Srinagar",
        "desc": "Transfer to a deluxe houseboat on Dal Lake. Leisurely Shikara ride with a chance to shop for Kashmiri handicrafts. Overnight on the houseboat."
      },
      {
        "day": 2,
        "title": "Srinagar – Sonamarg – Srinagar",
        "desc": "Drive ~84 km to Sonamarg, the Meadow of Gold, at ~9,000 ft. Optional pony trek to the Thajiwas Glacier or trout fishing in the Sindh river. Return to Srinagar. Overnight in Srinagar."
      },
      {
        "day": 3,
        "title": "Srinagar – Pahalgam",
        "desc": "Drive to Pahalgam, the Valley of Shepherds. Walk along the Lidder river and explore the surrounding pine forests. Overnight in Pahalgam."
      },
      {
        "day": 4,
        "title": "Pahalgam – Srinagar",
        "desc": "Return to Srinagar with stops at the Avantipura ruins and Mattan. Afternoon visit to the Mughal Gardens — Nishat & Shalimar. Overnight in Srinagar."
      },
      {
        "day": 5,
        "title": "Srinagar – Gulmarg – Srinagar",
        "desc": "Day excursion to Gulmarg (~8,700 ft). Ride the Gondola cable car for panoramic views or try the slopes. Return to Srinagar. Overnight in Srinagar."
      },
      {
        "day": 6,
        "title": "Departure",
        "desc": "Breakfast and transfer to Srinagar airport."
      }
    ],
    "inclusions": [
      "Wildlife & environmental entry fees",
      "5 breakfasts & 5 dinners (as per itinerary)",
      "Private AC vehicle (Innova / Xylo / Scorpio) for all transfers & sightseeing",
      "All sightseeing and transfers as per the itinerary",
      "Driver allowance, fuel, parking, toll & road taxes",
      "5 nights accommodation on double-sharing basis (2 adults)",
      "Airport / bus-stand pick-up and drop",
      "24×7 on-trip assistance from True Valley Travels"
    ],
    "exclusions": [
      "5% GST",
      "Any airfare or train fare to & from Kashmir",
      "Lunches and any meals not specified in the itinerary",
      "Entry fees to gardens, monuments & parks",
      "Gondola cable car, pony rides, shikara & adventure-activity charges",
      "Travel insurance of any kind",
      "Personal expenses — tips, laundry, telephone, medical",
      "Anything not mentioned under inclusions",
      "Costs arising from circumstances beyond our control (weather, landslides, road blocks)"
    ]
  },
  {
    "id": "s3",
    "slug": "kashmir-honeymoon-tour",
    "title": "Kashmir Honeymoon Tour",
    "tier": "Luxury",
    "season": "Summer",
    "price": 27900,
    "originalPrice": 30000,
    "save": "2,100",
    "duration": "7D / 6N",
    "minPax": "Min. 2 Pax",
    "route": "Srinagar – Pahalgam – Gulmarg – Sonamarg",
    "image": "/images/kashmir/family-kashmir.jpg",
    "highlights": [
      "Romantic deluxe houseboat stay",
      "Candlelit dinner & Shikara ride",
      "Gulmarg gondola for two",
      "Sonamarg glacier excursion"
    ],
    "overview": "Kashmir is the most romantic way to begin a new life together. This seven-day honeymoon pairs a deluxe houseboat on Dal Lake with the meadows of Gulmarg, the pine valleys of Pahalgam and the glaciers of Sonamarg — candlelit dinners, private transfers and unhurried moments crafted just for two.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival in Srinagar",
        "desc": "Welcome transfer to a deluxe houseboat. Romantic evening Shikara ride on Dal Lake with a demonstration of papier-mâché and walnut-wood craft. Candlelit dinner on board. Overnight on the houseboat."
      },
      {
        "day": 2,
        "title": "Srinagar Sightseeing",
        "desc": "Visit the Mughal Gardens — Nishat Bagh and Shalimar Bagh — and a traditional carpet-weaving atelier. Evening at leisure. Overnight on the houseboat."
      },
      {
        "day": 3,
        "title": "Srinagar – Pahalgam (90 km / ~2.5 hrs)",
        "desc": "Drive to Pahalgam via the Avantipura ruins and Mattan. Optional pony ride to Baisaran or Mamleshwar. Overnight in Pahalgam."
      },
      {
        "day": 4,
        "title": "Pahalgam – Gulmarg (~4 hrs)",
        "desc": "Scenic drive to Gulmarg. Ride the Gondola, try skiing / snowboarding (seasonal), or stroll the world's highest 18-hole golf course. Overnight in Gulmarg."
      },
      {
        "day": 5,
        "title": "Gulmarg – Srinagar",
        "desc": "Return to Srinagar visiting the Shankaracharya viewpoint and the local markets. Overnight in Srinagar."
      },
      {
        "day": 6,
        "title": "Sonamarg Excursion",
        "desc": "Full-day excursion to Sonamarg, the Gateway of Ladakh. Horse ride to the Thajiwas Glacier. Return to Srinagar. Overnight in Srinagar."
      },
      {
        "day": 7,
        "title": "Departure",
        "desc": "Breakfast and transfer to the airport for your onward journey."
      }
    ],
    "inclusions": [
      "Wildlife & environmental entry fees",
      "6 breakfasts & 6 dinners (as per itinerary)",
      "Private AC vehicle (Innova / Xylo / Scorpio) for all transfers & sightseeing",
      "All sightseeing and transfers as per the itinerary",
      "Driver allowance, fuel, parking, toll & road taxes",
      "6 nights accommodation on double-sharing basis (2 adults)",
      "Airport / bus-stand pick-up and drop",
      "24×7 on-trip assistance from True Valley Travels"
    ],
    "exclusions": [
      "5% GST",
      "Any airfare or train fare to & from Kashmir",
      "Lunches and any meals not specified in the itinerary",
      "Entry fees to gardens, monuments & parks",
      "Gondola cable car, pony rides, shikara & adventure-activity charges",
      "Travel insurance of any kind",
      "Personal expenses — tips, laundry, telephone, medical",
      "Anything not mentioned under inclusions",
      "Costs arising from circumstances beyond our control (weather, landslides, road blocks)"
    ]
  },
  {
    "id": "s4",
    "slug": "charismatic-kashmir-tour",
    "title": "Charismatic Kashmir Tour",
    "tier": "Ultra-Luxury",
    "season": "Summer",
    "price": 29900,
    "originalPrice": 35000,
    "save": "5,100",
    "duration": "6D / 5N",
    "minPax": "Min. 2 Pax",
    "route": "Srinagar – Pahalgam – Betaab & Aru Valley – Sonamarg",
    "image": "/images/kashmir/honeymoon-kashmir.jpg",
    "highlights": [
      "Betaab & Aru Valley exploration",
      "Premium stays throughout",
      "Gulmarg gondola & Khilanmarg",
      "Sonamarg, the Valley of Gold"
    ],
    "overview": "Nature's youthful, timeless beauty across Kashmir's most charismatic corners. This premium circuit goes beyond the classics — adding the celebrated Betaab Valley, Aru Valley and forest trails along the Sheshnag river to the gardens of Srinagar, the slopes of Gulmarg and the golden meadows of Sonamarg. Crafted for travellers who want depth, comfort and the very best views.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival in Srinagar",
        "desc": "Transfer to a houseboat, a traditional Kashmiri Wazwan lunch and free time to settle in. Evening Shikara ride on Dal Lake. Overnight on the houseboat."
      },
      {
        "day": 2,
        "title": "Srinagar – Gulmarg – Srinagar",
        "desc": "Excursion to Gulmarg (~2,690 m). Aerial Gondola to Khilanmarg, skiing and scenic viewpoints. Return to Srinagar. Overnight in Srinagar."
      },
      {
        "day": 3,
        "title": "Srinagar – Pahalgam",
        "desc": "Drive ~150 km to Pahalgam through saffron fields and apple orchards. Evening at leisure by the Lidder. Overnight in Pahalgam."
      },
      {
        "day": 4,
        "title": "Pahalgam – Betaab & Aru Valley",
        "desc": "Visit Chandanwari, the famous Betaab Valley and Aru Valley. Leisurely forest walk along the Sheshnag / Lidder river. Overnight in Pahalgam."
      },
      {
        "day": 5,
        "title": "Pahalgam – Srinagar",
        "desc": "Return to Srinagar. Mughal Gardens, Shankaracharya hill and time for market shopping. Overnight in Srinagar."
      },
      {
        "day": 6,
        "title": "Sonamarg & Departure",
        "desc": "Early excursion to Sonamarg, the Valley of Gold, through dramatic mountain terrain — before your departure transfer to the airport."
      }
    ],
    "inclusions": [
      "Wildlife & environmental entry fees",
      "5 breakfasts & 5 dinners (as per itinerary)",
      "Private AC vehicle (Innova / Xylo / Scorpio) for all transfers & sightseeing",
      "All sightseeing and transfers as per the itinerary",
      "Driver allowance, fuel, parking, toll & road taxes",
      "5 nights accommodation on double-sharing basis (2 adults)",
      "Airport / bus-stand pick-up and drop",
      "24×7 on-trip assistance from True Valley Travels"
    ],
    "exclusions": [
      "5% GST",
      "Any airfare or train fare to & from Kashmir",
      "Lunches and any meals not specified in the itinerary",
      "Entry fees to gardens, monuments & parks",
      "Gondola cable car, pony rides, shikara & adventure-activity charges",
      "Travel insurance of any kind",
      "Personal expenses — tips, laundry, telephone, medical",
      "Anything not mentioned under inclusions",
      "Costs arising from circumstances beyond our control (weather, landslides, road blocks)"
    ]
  },
  {
    "id": "s5",
    "slug": "kashmir-angling-tour",
    "title": "Kashmir Angling Tour",
    "tier": "Premium",
    "season": "Summer",
    "price": 20900,
    "originalPrice": 25000,
    "save": "4,100",
    "duration": "6D / 5N",
    "minPax": "Min. 2 Pax",
    "route": "Srinagar – Pahalgam – Sonamarg",
    "image": "/images/kashmir/adventure-kashmir.jpg",
    "highlights": [
      "Brown-trout angling, Lidder valley",
      "Sindh valley fishing at Sonamarg",
      "Deluxe houseboat stays",
      "Trout season Apr–Sep"
    ],
    "overview": "Cast a line in the cold, clear streams of the Himalayas. The Kashmir valley — fed by the Jhelum, Dal and Nagin lakes and eight glacial valleys — is famous for its brown trout. This six-day angling expedition pairs the upper and lower Lidder valley at Pahalgam with the Sindh valley at Sonamarg, between gardens, houseboats and the calm of Dal Lake.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival in Srinagar",
        "desc": "Transfer to a deluxe houseboat. Evening visit to the Mughal Gardens; dinner on board. Overnight on the houseboat."
      },
      {
        "day": 2,
        "title": "Srinagar – Pahalgam",
        "desc": "Drive to the Upper Lidder valley near Pahalgam for a day of trout angling. Overnight in Pahalgam."
      },
      {
        "day": 3,
        "title": "Pahalgam – Srinagar",
        "desc": "Morning angling in the lower Lidder valley, then return to Srinagar. Overnight on the houseboat."
      },
      {
        "day": 4,
        "title": "Srinagar – Sonamarg",
        "desc": "Drive to the Upper Sindh valley at Sonamarg for a full day of trout fishing. Overnight in Sonamarg."
      },
      {
        "day": 5,
        "title": "Sonamarg – Srinagar",
        "desc": "Final session in the lower Sindh valley, then return to Srinagar. Overnight on the houseboat."
      },
      {
        "day": 6,
        "title": "Departure",
        "desc": "Morning Shikara ride on Dal Lake and transfer to the airport. Note: angling permits arranged on request; trout season runs April–September."
      }
    ],
    "inclusions": [
      "Wildlife & environmental entry fees",
      "5 breakfasts & 5 dinners (as per itinerary)",
      "Private AC vehicle (Innova / Xylo / Scorpio) for all transfers & sightseeing",
      "All sightseeing and transfers as per the itinerary",
      "Driver allowance, fuel, parking, toll & road taxes",
      "5 nights accommodation on double-sharing basis (2 adults)",
      "Airport / bus-stand pick-up and drop",
      "24×7 on-trip assistance from True Valley Travels",
      "Assistance arranging angling permits (on request)"
    ],
    "exclusions": [
      "5% GST",
      "Any airfare or train fare to & from Kashmir",
      "Lunches and any meals not specified in the itinerary",
      "Entry fees to gardens, monuments & parks",
      "Gondola cable car, pony rides, shikara & adventure-activity charges",
      "Travel insurance of any kind",
      "Personal expenses — tips, laundry, telephone, medical",
      "Anything not mentioned under inclusions",
      "Costs arising from circumstances beyond our control (weather, landslides, road blocks)",
      "Fishing tackle, bait & angling-beat permit fees"
    ]
  },
  {
    "id": "s6",
    "slug": "kashmir-family-tour",
    "title": "Kashmir Family Tour",
    "tier": "Luxury",
    "season": "Summer",
    "price": 35900,
    "originalPrice": 40000,
    "save": "4,100",
    "duration": "7D / 6N",
    "minPax": "Min. 2 Pax",
    "route": "Srinagar – Sonamarg – Pahalgam – Gulmarg",
    "image": "/images/kashmir/winter-wonderland.jpg",
    "highlights": [
      "All-ages friendly itinerary",
      "Sonamarg glacier & Thajiwas",
      "Betaab Valley & Baisaran meadows",
      "Gulmarg gondola & horse riding"
    ],
    "overview": "Kashmir — heaven on earth — is made for family holidays. This relaxed seven-day tour blends breathtaking scenery with activities for every age group: a Shikara ride on Dal Lake, a glacier trek at Sonamarg, the grasslands of Pahalgam and the gondola at Gulmarg, with plenty of free time, Kashmiri cuisine and handicraft shopping along the way.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival in Srinagar",
        "desc": "Met on arrival and a scenic drive through New Srinagar across the Abdullah Bridge over the Jhelum. Check in to your hotel / houseboat, followed by a one-hour Shikara ride on Dal Lake. Overnight in Srinagar."
      },
      {
        "day": 2,
        "title": "Srinagar – Sonamarg – Srinagar",
        "desc": "Day trip to Sonamarg via Kangan and Gagangir. Trek or horse-ride to the Thajiwas Glacier and explore the town market. Return to Srinagar. Overnight in Srinagar."
      },
      {
        "day": 3,
        "title": "Srinagar – Pahalgam (97 km / 3–4 hrs)",
        "desc": "Drive via Pampore's saffron fields, the Avantipura ruins and Bijbehara along the Lidder river. Evening at leisure. Overnight in Pahalgam."
      },
      {
        "day": 4,
        "title": "Pahalgam Sightseeing",
        "desc": "Explore Betaab Valley and Chandanwari; horse-ride to the Baisaran grasslands. Free time for the family. Overnight in Pahalgam."
      },
      {
        "day": 5,
        "title": "Pahalgam – Gulmarg (152 km / 4–5 hrs)",
        "desc": "Scenic drive via Tangmarg to Gulmarg. Check in and relax in the meadow of flowers. Overnight in Gulmarg."
      },
      {
        "day": 6,
        "title": "Gulmarg Sightseeing",
        "desc": "Gondola cable-car excursion and horse riding across the meadows. Overnight in Gulmarg."
      },
      {
        "day": 7,
        "title": "Departure",
        "desc": "Breakfast and transfer to the airport."
      }
    ],
    "inclusions": [
      "Wildlife & environmental entry fees",
      "6 breakfasts & 6 dinners (as per itinerary)",
      "Private AC vehicle (Innova / Xylo / Scorpio) for all transfers & sightseeing",
      "All sightseeing and transfers as per the itinerary",
      "Driver allowance, fuel, parking, toll & road taxes",
      "6 nights accommodation on double-sharing basis (2 adults)",
      "Airport / bus-stand pick-up and drop",
      "24×7 on-trip assistance from True Valley Travels"
    ],
    "exclusions": [
      "5% GST",
      "Any airfare or train fare to & from Kashmir",
      "Lunches and any meals not specified in the itinerary",
      "Entry fees to gardens, monuments & parks",
      "Gondola cable car, pony rides, shikara & adventure-activity charges",
      "Travel insurance of any kind",
      "Personal expenses — tips, laundry, telephone, medical",
      "Anything not mentioned under inclusions",
      "Costs arising from circumstances beyond our control (weather, landslides, road blocks)"
    ]
  },
  {
    "id": "s7",
    "slug": "srinagar-gulmarg-getaway",
    "title": "Srinagar Gulmarg Getaway",
    "tier": "Budget",
    "season": "Summer",
    "price": 11900,
    "originalPrice": 14000,
    "save": "2,100",
    "duration": "4D / 3N",
    "minPax": "Min. 2 Pax",
    "route": "Srinagar – Gulmarg",
    "image": "/images/kashmir/dal-lake.jpg",
    "highlights": [
      "Perfect short weekend break",
      "Dal Lake shikara ride",
      "Mughal Gardens of Srinagar",
      "Gulmarg meadow & gondola"
    ],
    "overview": "Short on days, big on Kashmir. This four-day getaway covers the two crowd-favourites — the lakes and gardens of Srinagar and the alpine meadow of Gulmarg — at an easy pace. Ideal for a long-weekend escape or a quick first taste of the valley.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival in Srinagar",
        "desc": "Airport transfer and check-in. Evening Shikara ride on Dal Lake past the floating gardens and Char Chinar island. Overnight in Srinagar."
      },
      {
        "day": 2,
        "title": "Srinagar Sightseeing",
        "desc": "The Mughal Gardens — Nishat, Shalimar and Chashme Shahi — the Shankaracharya viewpoint and the old-city markets. Overnight in Srinagar."
      },
      {
        "day": 3,
        "title": "Srinagar – Gulmarg – Srinagar",
        "desc": "Full-day excursion to Gulmarg, the meadow of flowers. Optional Gondola cable car and pony rides. Return to Srinagar. Overnight in Srinagar."
      },
      {
        "day": 4,
        "title": "Departure",
        "desc": "Breakfast and transfer to the airport."
      }
    ],
    "inclusions": [
      "Wildlife & environmental entry fees",
      "3 breakfasts & 3 dinners (as per itinerary)",
      "Private AC vehicle (Innova / Xylo / Scorpio) for all transfers & sightseeing",
      "All sightseeing and transfers as per the itinerary",
      "Driver allowance, fuel, parking, toll & road taxes",
      "3 nights accommodation on double-sharing basis (2 adults)",
      "Airport / bus-stand pick-up and drop",
      "24×7 on-trip assistance from True Valley Travels"
    ],
    "exclusions": [
      "5% GST",
      "Any airfare or train fare to & from Kashmir",
      "Lunches and any meals not specified in the itinerary",
      "Entry fees to gardens, monuments & parks",
      "Gondola cable car, pony rides, shikara & adventure-activity charges",
      "Travel insurance of any kind",
      "Personal expenses — tips, laundry, telephone, medical",
      "Anything not mentioned under inclusions",
      "Costs arising from circumstances beyond our control (weather, landslides, road blocks)"
    ]
  },
  {
    "id": "s8",
    "slug": "grand-kashmir-tour",
    "title": "Grand Kashmir Tour",
    "tier": "Ultra-Luxury",
    "season": "Summer",
    "price": 34900,
    "originalPrice": 40000,
    "save": "5,100",
    "duration": "8D / 7N",
    "minPax": "Min. 2 Pax",
    "route": "Srinagar – Sonamarg – Gulmarg – Pahalgam – Doodhpathri",
    "image": "/images/kashmir/gulmarg.jpg",
    "highlights": [
      "All four valleys + Doodhpathri",
      "Full 7-night grand itinerary",
      "Houseboat + premium hotels",
      "Gondola, glaciers & meadows"
    ],
    "overview": "The most complete Kashmir experience. Across eight days, you'll travel through Srinagar's water networks, Sonamarg's glaciers, Gulmarg's slopes, Pahalgam's valleys and the off-beat 'Valley of Milk' at Doodhpathri. The ultimate itinerary for those who want to leave no stone unturned.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival in Srinagar",
        "desc": "Transfer to a deluxe houseboat. Shikara ride on Dal Lake and a traditional Kashmiri dinner. Overnight on the houseboat."
      },
      {
        "day": 2,
        "title": "Srinagar – Sonamarg – Srinagar",
        "desc": "Full-day excursion to Sonamarg. Thajiwas Glacier pony ride and free time in the Meadow of Gold. Return to Srinagar. Overnight in Srinagar."
      },
      {
        "day": 3,
        "title": "Srinagar – Doodhpathri – Srinagar",
        "desc": "Excursion to the pristine Doodhpathri (Valley of Milk) — a quiet, bowl-shaped meadow framed by pine forests. Return to Srinagar. Overnight in Srinagar."
      },
      {
        "day": 4,
        "title": "Srinagar – Pahalgam",
        "desc": "Drive to Pahalgam via the Avantipura ruins and saffron fields. Check in and relax by the Lidder river. Overnight in Pahalgam."
      },
      {
        "day": 5,
        "title": "Pahalgam Sightseeing",
        "desc": "Explore Betaab Valley, Aru Valley and Chandanwari. Free evening to walk through the town. Overnight in Pahalgam."
      },
      {
        "day": 6,
        "title": "Pahalgam – Gulmarg",
        "desc": "Drive to Gulmarg. Afternoon at leisure or a pony ride across the meadows. Overnight in Gulmarg."
      },
      {
        "day": 7,
        "title": "Gulmarg – Srinagar",
        "desc": "Morning Gondola ride to Kongdoori / Khilanmarg. Return to Srinagar in the afternoon. Visit the Mughal Gardens. Overnight in Srinagar."
      },
      {
        "day": 8,
        "title": "Departure",
        "desc": "Breakfast and transfer to the airport."
      }
    ],
    "inclusions": [
      "Wildlife & environmental entry fees",
      "7 breakfasts & 7 dinners (as per itinerary)",
      "Private AC vehicle (Innova / Xylo / Scorpio) for all transfers & sightseeing",
      "All sightseeing and transfers as per the itinerary",
      "Driver allowance, fuel, parking, toll & road taxes",
      "7 nights accommodation on double-sharing basis (2 adults)",
      "Airport / bus-stand pick-up and drop",
      "24×7 on-trip assistance from True Valley Travels"
    ],
    "exclusions": [
      "5% GST",
      "Any airfare or train fare to & from Kashmir",
      "Lunches and any meals not specified in the itinerary",
      "Entry fees to gardens, monuments & parks",
      "Gondola cable car, pony rides, shikara & adventure-activity charges",
      "Travel insurance of any kind",
      "Personal expenses — tips, laundry, telephone, medical",
      "Anything not mentioned under inclusions",
      "Costs arising from circumstances beyond our control (weather, landslides, road blocks)"
    ]
  }
];
