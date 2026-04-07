/**
 * Detailed content for each service page.
 */
export interface ServiceContent {
  intro: string;
  features: string[];
  process: string;
  pricing: string;
}

export const serviceContent: Record<string, ServiceContent> = {
  "house-removals": {
    intro: `Moving home is one of life's biggest undertakings, and our house removal service is designed to take the weight off your shoulders. Whether you're moving from a two-bedroom semi in Hamilton to a family home in Bothwell, or relocating across South Lanarkshire, our experienced team handles every aspect with care and precision. We've moved everything from first homes to multi-generational households, and we treat every item—from the family piano to the china tea set—as if it were our own.`,
    features: [
      "Full house removals for properties of all sizes",
      "Careful handling of furniture, appliances, and fragile items",
      "Dismantling and reassembly of beds, wardrobes, and flat-pack furniture",
      "Floor and doorframe protection throughout the move",
      "Flexible scheduling including weekends and evenings",
      "Optional packing and unpacking services",
    ],
    process: `Every house removal starts with a conversation. We'll discuss your needs, the size of your home, any access challenges, and your ideal timeline. For larger moves, we offer a free home visit to provide an accurate quote with no surprises. On moving day, we arrive on time with the right-sized van and crew. Your belongings are carefully loaded, transported, and placed exactly where you want them in your new home.`,
    pricing: `We provide fixed, transparent quotes based on the volume of items, distance, and any special requirements. No hidden charges, no hourly surprises. What we quote is what you pay.`,
  },
  "flat-removals": {
    intro: `Flat removals come with their own unique challenges—tight stairwells, narrow corridors, limited parking, and sometimes no lift in sight. Our team has navigated countless tenement flats across South Lanarkshire, from the Victorian sandstone buildings of Rutherglen to modern apartment complexes in East Kilbride. We know how to manoeuvre awkward furniture through difficult spaces, and we come prepared with the right equipment and know-how.`,
    features: [
      "Specialists in tenement and high-rise moves",
      "Stair-climbing equipment for properties without lifts",
      "Furniture manoeuvring through tight spaces",
      "Knowledge of parking and loading restrictions",
      "Protection for communal areas and stairwells",
      "Quick, efficient service to minimise disruption",
    ],
    process: `We'll ask about your floor level, lift access, stairwell width, and any parking restrictions before providing a quote. This ensures no surprises on the day. Our team arrives with protective materials for bannisters and walls, and we work efficiently to complete your move with minimal disruption to neighbours.`,
    pricing: `Flat removals are quoted based on floor level, access challenges, and volume of belongings. Moves without lift access include stair-climbing in the fixed price.`,
  },
  "single-item": {
    intro: `Sometimes you don't need a full house move—just a single piece of furniture collected or delivered. Perhaps you've found the perfect sofa on Gumtree, purchased an antique dresser from an auction, or need to send a chest of drawers to a family member across town. Our single item delivery service provides the same careful handling as our larger moves, at a price that reflects the smaller scale.`,
    features: [
      "Collection and delivery of individual items",
      "Careful handling of valuable and fragile pieces",
      "Blanket wrapping and strapping for secure transport",
      "Same-day service often available",
      "Ideal for purchases, gifts, or inheritance items",
      "Competitive rates for the Lanarkshire area",
    ],
    process: `Simply tell us what you need moved, where it's coming from, and where it's going. We'll provide a quick quote over the phone or WhatsApp. Once confirmed, we collect the item, wrap it securely, and deliver it to its destination—placing it exactly where you want it.`,
    pricing: `Single item pricing depends on size, weight, distance, and floor access. Most local deliveries are surprisingly affordable. Get in touch for a quick quote.`,
  },
  "office-removals": {
    intro: `Relocating your business requires planning, efficiency, and minimal disruption to your operations. Our office removal service is designed to get you up and running in your new premises as quickly as possible. We've moved solicitors' practices, dental surgeries, small retailers, and corporate offices throughout South Lanarkshire—handling everything from filing cabinets to server racks with professional care.`,
    features: [
      "Out-of-hours and weekend moves to reduce business disruption",
      "IT equipment handling with anti-static protection",
      "Secure handling of confidential documents",
      "Dismantling and reassembly of modular furniture",
      "Labelling system for efficient unpacking",
      "Project management for larger relocations",
    ],
    process: `We'll meet with you to survey your current premises and understand your requirements. A detailed plan outlines the timeline, responsibilities, and logistics. On moving day, our team executes the plan efficiently while you focus on business continuity. We can work overnight or over weekends to ensure Monday morning starts smoothly in your new location.`,
    pricing: `Office moves are quoted based on the scope of work, equipment involved, and timing requirements. We provide detailed written quotes with no hidden extras.`,
  },
  "packing-service": {
    intro: `Packing is often the most time-consuming and stressful part of any move. Let our team handle it for you. We supply quality packing materials and use professional techniques to protect your belongings during transit. From fragile glassware to bulky bedding, we pack systematically and label clearly so unpacking is straightforward at the other end.`,
    features: [
      "Professional packing using quality materials",
      "Full or partial packing options",
      "Specialist packing for fragile and valuable items",
      "Clear labelling system for organised unpacking",
      "Packing materials included in the price",
      "Unpacking service also available",
    ],
    process: `You choose the level of service you need—full house packing, fragile items only, or specific rooms. We arrive the day before or morning of your move with all materials. Your belongings are packed efficiently and loaded ready for transport. At your new home, we can unpack and remove all packing materials if required.`,
    pricing: `Packing service pricing depends on the extent of service and volume of items. We include all boxes, tape, bubble wrap, and tissue paper in our quotes.`,
  },
  "furniture-disposal": {
    intro: `When you're moving or decluttering, unwanted furniture can become a real headache. Our furniture disposal service provides responsible removal and disposal of items you no longer need. We'll collect sofas, beds, wardrobes, and appliances—recycling and donating where possible to minimise landfill waste. It's an environmentally conscious way to clear space.`,
    features: [
      "Collection of unwanted furniture and appliances",
      "Responsible disposal with recycling prioritised",
      "Donation to local charities where appropriate",
      "Single item or full house clearance",
      "Same-day service often available",
      "Licensed waste carrier documentation",
    ],
    process: `Tell us what needs collecting and where it is. We'll provide a quote based on volume and access. Our team collects the items, loads them carefully to avoid damage to your property, and ensures they're disposed of responsibly. You'll receive confirmation that items have been handled in accordance with waste regulations.`,
    pricing: `Disposal pricing is based on volume and type of items. We charge fairly and transparently, with no nasty surprises once we arrive.`,
  },
  "man-and-van": {
    intro: `Our man and van service offers the flexibility of professional help without the scale of a full house move. Whether you're collecting purchases, moving a few items between properties, or clearing a room, we provide reliable assistance with a capable vehicle and an experienced pair of hands. It's the practical solution for smaller jobs that still need doing right.`,
    features: [
      "Flexible hourly or fixed-rate options",
      "Spacious, clean van with blankets and straps",
      "Helpful, experienced driver",
      "Ideal for small moves and collections",
      "Last-minute availability often possible",
      "Coverage across South Lanarkshire and beyond",
    ],
    process: `Call or WhatsApp with details of what you need. We'll agree a time, rate, and any specific requirements. Our man and van arrives ready to help—loading, transporting, and unloading your items wherever they need to go. Simple, straightforward, and stress-free.`,
    pricing: `Man and van services can be charged hourly or as a fixed price for defined jobs. We'll recommend the best option based on your specific needs.`,
  },
};

export function getServiceContent(slug: string): ServiceContent | null {
  return serviceContent[slug] ?? null;
}
