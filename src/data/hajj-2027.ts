export interface HajjPackage {
  slug: string;
  title: string;
  tier: string;
  price: number;
  duration: string;
  description: string;
  highlights: string[];
}

export const hajj2027 = {
  title: "Hajj 2027",
  status: "Coming Soon",
  description: "Official Hajj 2027 packages from Gazi Tour & Travels will be announced following the Saudi Ministry of Hajj quota confirmation. Register your interest today to be the first to know.",
  countdownDate: "2027-05-26T00:00:00",
  registrationOpen: true,
  reasons: [
    {
      title: "Priority Slot Allocation",
      description: "Quota is limited early registration ensures you're first in line when packages are announced.",
    },
    {
      title: "Early Price Lock",
      description: "Register now and lock in early-bird pricing before fare increases closer to the season.",
    },
    {
      title: "Dedicated Guidance",
      description: "From day one, our team provides personalised guidance on preparation, documentation, and rituals.",
    },
  ],
  quote: {
    text: "We have guided pilgrims through Hajj since 1998. When Hajj 2027 packages are confirmed, our registered pilgrims get first access.",
    author: "Haji Zakir Mohammad Abbas",
    role: "CEO, Gazi Tour & Travels",
  },
  packages: [
    {
      slug: "hajj-shifting-package",
      title: "Hajj Shifting Package",
      tier: "Premium",
      price: 650000,
      duration: "30-40 Days",
      description: "Full Hajj package with hotel shifting between Mecca, Mina & Arafat. Includes visa, flights, accommodation & Qafila leaders.",
      highlights: [
        "Hajj Visa & Return Flights",
        "Hotel Shifting Mecca, Mina & Arafat",
        "Dedicated Kashmiri Qafila Leaders",
        "All Rituals Guidance & Transport"
      ],
    }
  ],
};
