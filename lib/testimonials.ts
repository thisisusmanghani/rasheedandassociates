export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    name: "Hassan Rai",
    role: "Business Owner, Lahore",
    rating: 5,
    quote:
      "Rasheed & Associates handled our business dispute with absolute professionalism. The strategy was sharp, the communication clear, and the outcome better than we hoped for.",
  },
  {
    name: "Dr. Ayesha Khan",
    role: "Consultant Physician",
    rating: 5,
    quote:
      "I consulted Mr. Bhatti for a property matter that had dragged for years. Within months he resolved it. Rare blend of integrity and command over the law.",
  },
  {
    name: "Imran Sheikh",
    role: "Director, Textile Exports",
    rating: 5,
    quote:
      "Our company relies on the firm for taxation and contract work. Their drafting is precise and their advice is commercial — not just legal. Highly recommended.",
  },
  {
    name: "Fatima Yousaf",
    role: "Overseas Pakistani, London",
    rating: 5,
    quote:
      "Managing inheritance in Pakistan from abroad seemed impossible. The team kept me informed at every step and delivered results without me ever boarding a flight.",
  },
  {
    name: "Bilal Ahmed",
    role: "Startup Founder",
    rating: 5,
    quote:
      "From incorporation to shareholder agreements, they have been a steady partner to our company. Responsive, modern, and deeply experienced.",
  },
];
