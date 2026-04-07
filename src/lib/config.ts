export const SITE = {
  name: "Clyde & Co. Removals",
  legalName: "Clyde & Co. Removals Ltd",
  tagline: "Moved with Care. Rooted in the Clyde.",
  phone: "+441698000000", // TODO: Replace with actual phone number
  phoneDisplay: "01698 000 000",
  whatsapp: "+441698000000", // TODO: Replace with actual WhatsApp number
  whatsappMessage: "Hi Clyde & Co., I'd like a quote for furniture removal.",
  email: "hello@clydeandco-removals.co.uk", // TODO: Replace with actual email
  address: {
    street: "TBD", // TODO: Replace with actual street address
    city: "Hamilton",
    region: "South Lanarkshire",
    postcode: "ML3", // TODO: Replace with full postcode
    country: "GB",
  },
  hours: "Mon–Sun, 7:00 — 21:00",
  hoursStructured: "Mo-Su 07:00-21:00",
  priceRange: "££",
  areas: [
    "Hamilton",
    "East Kilbride",
    "Rutherglen",
    "Cambuslang",
    "Blantyre",
    "Bothwell",
    "Uddingston",
    "Lanark",
    "Larkhall",
    "Carluke",
    "Strathaven",
    "Wishaw",
  ],
  services: [
    { slug: "house-removals", title: "House Removals", icon: "FiHome" },
    { slug: "flat-removals", title: "Flat Removals", icon: "FiLayers" },
    { slug: "single-item", title: "Single Item Delivery", icon: "FiPackage" },
    { slug: "office-removals", title: "Office Removals", icon: "FiBriefcase" },
    { slug: "packing-service", title: "Packing Service", icon: "FiBox" },
    { slug: "furniture-disposal", title: "Furniture Disposal", icon: "FiTrash2" },
    { slug: "man-and-van", title: "Man and Van", icon: "FiTruck" },
  ],
  social: { facebook: "", instagram: "" }, // TODO: Add social media URLs
  geo: {
    latitude: 55.7775,
    longitude: -4.0391,
  },
} as const;

export type ServiceSlug = (typeof SITE.services)[number]["slug"];
export type AreaName = (typeof SITE.areas)[number];
