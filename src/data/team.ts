export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface FounderData {
  name: string;
  role: string;
  image: string;
  bio: string;
  quote: string;
}

export const founder: FounderData = {
  name: "HAJI ZAKIR MOHAMMAD ABAS",
  role: "CEO & OWNER - TRUSTED SINCE 2004",
  image: "/images/team/founder.jpeg",
  bio: "HAJI ZAKIR MOHAMMAD ABAS founded Gazi Tour & Travels in 2004 with a simple mission: to make the sacred journey of Umrah and Ziyarat accessible, trustworthy, and deeply personal for every pilgrim from Kashmir. With over two decades of hands-on experience guiding thousands of pilgrims through the most important journeys of their lives, he has built a reputation rooted in integrity, spiritual care, and operational excellence. His leadership continues to guide every aspect of the company's service.",
  quote: "Every pilgrim who trusts us with their journey is placing something sacred in our hands. We never take that lightly.",
};

export const team: TeamMember[] = [
  {
    name: "HAJI ZAKIR MOHAMMAD ABAS",
    role: "CEO & OWNER - TRUSTED SINCE 2004",
    image: "/images/team/founder.jpeg",
  },
  {
    name: "Qammar abass",
    role: "Managing Director & Accountant",
    image: "/images/team/managing_director.jpeg",
  },
  {
    name: "Syed sajad mosvi",
    role: "Ticketing and Visa head",
    image: "/images/team/Ticketing_and_visa_head.jpeg",
  },
];
