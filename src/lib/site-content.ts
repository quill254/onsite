export const COMPANY = {
  legalName: "Onsite Internet Solutions",
  email: "hello@example.com",
  phone: "+254 700 000 000",
  whatsapp: "+254 700 000 000",
  address: "Thika Town, Kiambu County, Kenya",
  hours: "Mon–Sat, 8:00am – 8:00pm · Emergency support 24/7",
};

export type Plan = {
  name: string;
  speed: string;
  price: string;
  audience: string;
  features: string[];
  featured?: boolean;
};

export const HOME_PLANS: Plan[] = [
  {
    name: "Starter Home",
    speed: "8 Mbps",
    price: "2,500",
    audience: "Browsing, WhatsApp, 1–2 devices",
    features: ["Unlimited data", "Free router on 6-month term", "Next-day installation"],
  },
  {
    name: "Family",
    speed: "20 Mbps",
    price: "3,500",
    audience: "Streaming and study for a full household",
    features: ["Unlimited data", "HD streaming on 3 screens", "Free router", "Priority support"],
    featured: true,
  },
  {
    name: "Power Home",
    speed: "40 Mbps",
    price: "5,000",
    audience: "Gaming, remote work, heavy streaming",
    features: ["Unlimited data", "Low-latency routing", "Free router", "Same-day fault response"],
  },
];

export const BUSINESS_PLANS: Plan[] = [
  {
    name: "Small Business",
    speed: "30 Mbps",
    price: "8,000",
    audience: "Shops, salons, small offices",
    features: ["Business-grade uptime", "Static IP option", "4-hour fault response"],
  },
  {
    name: "Office Pro",
    speed: "60 Mbps",
    price: "14,000",
    audience: "Offices of 10–30 staff",
    features: ["Dedicated bandwidth", "Static IP included", "Managed Wi-Fi", "SLA-backed support"],
    featured: true,
  },
  {
    name: "Institution",
    speed: "100 Mbps+",
    price: "Custom",
    audience: "Schools, colleges, hospitals",
    features: ["Campus-wide coverage", "Content filtering", "Bandwidth scheduling", "On-site engineer"],
  },
];

export const COVERAGE_AREAS = [
  { area: "Thika Town", status: "Live" },
  { area: "Makongeni", status: "Live" },
  { area: "Section 9", status: "Live" },
  { area: "Kiganjo", status: "Live" },
  { area: "Landless", status: "Live" },
  { area: "Ngoingwa", status: "Live" },
  { area: "Kisii Estate", status: "Live" },
  { area: "Gatuanyaga", status: "Planned" },
  { area: "Juja", status: "Planned" },
  { area: "Ruiru", status: "Planned" },
  { area: "Kenol", status: "Survey required" },
  { area: "Githurai", status: "Survey required" },
] as const;

export const FAQS = [
  {
    q: "How long does installation take?",
    a: "Once you place your order we set you up within two working days. Where a survey or extra pole work is needed, we confirm a date within one working day.",
  },
  {
    q: "What payment methods do you accept?",
    a: "M-Pesa Paybill, bank transfer and cash at the office. Business and institution accounts can be invoiced monthly.",
  },
  {
    q: "Are the packages truly unlimited?",
    a: "Yes — home and business packages have no data caps. We apply fair-usage management only to protect network quality during peak hours.",
  },
  {
    q: "What happens when the connection goes down?",
    a: "Call or WhatsApp support and a local technician is dispatched. Home plans get same or next-day response; business plans are SLA-backed.",
  },
  {
    q: "Can I upgrade or downgrade my plan?",
    a: "Yes, once per billing cycle. Changes take effect from your next invoice date and there is no upgrade fee.",
  },
  {
    q: "Do you cover my area?",
    a: "Check the coverage page and send your area name. If we are not live there yet, we log the request — new areas are prioritised by demand.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Installation was done the same morning I paid. Six months later I have not had to call support once.",
    name: "James",
    area: "Makongeni",
  },
  {
    quote:
      "Our shop runs card payments and CCTV on the connection. It has been steady even during heavy rain.",
    name: "Wanjiru",
    area: "Thika Town",
  },
  {
    quote:
      "We moved our computer lab to Onsite last term. Bandwidth scheduling keeps the classes usable all day.",
    name: "Mr. Otieno",
    area: "Section 9",
  },
];
