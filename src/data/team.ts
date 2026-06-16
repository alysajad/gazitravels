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
  name: "Haji Zakir Mohammad Abbas",
  role: "CEO & Founder",
  image: "/images/team/founder.jpg",
  bio: "Haji Zakir Mohammad Abbas founded Gazi Tour & Travels in 1998 with a simple mission: to make the sacred journey of Umrah and Ziyarat accessible, trustworthy, and deeply personal for every pilgrim from Kashmir. With over two decades of hands-on experience guiding thousands of pilgrims through the most important journeys of their lives, he has built a reputation rooted in integrity, spiritual care, and operational excellence. His leadership continues to guide every aspect of the company's service.",
  quote: "Every pilgrim who trusts us with their journey is placing something sacred in our hands. We never take that lightly.",
};

export const team: TeamMember[] = [
  {
    name: "Haji Zakir Mohammad Abbas",
    role: "CEO & Founder",
    image: "/images/team/founder.jpg",
  },
  {
    name: "Team Member",
    role: "Managing Director / Accountant",
    image: "/images/team/team-2.jpg",
  },
  {
    name: "Team Member",
    role: "Ticketing, Visa Head & Sales Manager",
    image: "/images/team/team-3.jpg",
  },
];
