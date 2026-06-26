export interface ListingProperty {
  slug: string;
  title: string;
  shortName: string;
  priceMin: number;
  priceMax: number;
  bedrooms: string;
  bathrooms: string;
  area: string;
  city: string;
  community: string;
  completionQuarter: string;
  completionYear: string;
  developerName: string;
  aboutDescription: string;
  propertyExplainer?: string;
  amenities: string;
  propertyTypes: string;
  propertyTypes2?: string[];
  propertyHighlights2?: string[];
  propertyType: string;
  tagline?: string;
  shortDescription?: string;
  amenitiesShort: string;
  paymentPlan: string;
  paymentPlanIntro?: string;
  locationDescription: string;
  developerSummary: string;
  heroImage: string;
  galleryImages: string[];
  floorPlanImage: string;
  floorPlanUrl?: string;
  paymentPlanUrl?: string;
  logoImage: string;
  logoAlt: string;
  videoUrl?: string;
  videoCoverUrl?: string;
  googleMapLatLang?: string;
  locationList?: string;
  permitNumber?: string;
  isFeatured?: boolean;
}

export const listings: ListingProperty[] = [
  {
    slug: "damac-lagoons-mykonos-cluster",
    title: "DAMAC Lagoons - Mykonos",
    priceMin: 2470000,
    priceMax: 3280000,
    bedrooms: "4 | 5",
    bathrooms: "3 | 5",
    area: "2300 to 3400 sqft",
    city: "Dubai",
    community: "DAMAC Lagoons",
    completionQuarter: "Q4",
    completionYear: "2026",
    developerName: "DAMAC properties",
    aboutDescription:
      "<p>ISLAND LIVING</p><p>Mykonos brings Cycladic architectural features to life with a modern twist, such as clean lines and earthy bohemian exteriors that complement the community's natural beauty.</p>",
    propertyExplainer:
      "<p>While it is most known for its crazy party scene, Mykonos also offers luxury, history, top-notch cuisine, glistening beaches, and one-of-a-kind tours and activities.&nbsp;</p><p>Mykonos is also a popular island-hopping destination due to its proximity. The beaches offer a distinct ambience that is unlike any other beach you have visited.</p><p>The beach bars keep the party going with nonstop music and dancing, refreshing refreshments and amusing cocktails in open-air events directly on the beach.</p><p>At the same time, you can partake in any water-related activity that strikes your fancy, from thrilling water sports to scuba diving or even cruises to surrounding beaches and adjacent islands.</p>",
    amenities:
      "<p>WindMill Island Park |</p><p>Pool Bar &amp; Floating Garden |</p><p>Luxury Pool Floats |</p><p>Swings, Sunken Seating and Lounge at Paradise Beach |</p><p>The Volcanis Stones Park |</p><p>Beach Club and Cafés |</p><p>Open Air Glow Lounge |</p><p>Honey Bar&nbsp;</p>",
    propertyTypes:
      "<p>4 bedroom, from AED 2,470,000 |</p><p>5 bedroom, from AED 3,280,000</p>",
    propertyTypes2: ["townhouse"],
    propertyHighlights2: ["swimmingPools", "fitnessCentres", "security", "playGround", "dining"],
    propertyType: "Townhouse",
    tagline: "Beautiful Marina View",
    shortDescription:
      "Mykonos is a luxury building located in DAMAC Lagoons",
    shortName: "Mykonos",
    amenitiesShort:
      "Swimming Pools | Fitness Centres | Security | Play Ground | Dining",
    paymentPlan:
      "<p>Downpayment 20 %, On booking |<br />1st Installment 5 %, Within 3 Months of Sale |<br />2nd Installment 5 %, Within 6 Months of Sale |<br />3rd Installment 5 %, Within 9 Months of Sale |<br />4th Installment 5 %, Within 12 Months of Sale |<br />5th Installment 5 %, Within 15 Months of Sale |<br />6th Installment 5 %, Within 18 Months of Sale |<br />7th Installment 5 %, Within 21 Months of Sale |<br />8th Installment 5 %, Within 24 Months of Sale |<br />9th Installment 5 %, Within 27 Months of Sale |<br />10th Installment 5 %, Within 30 Months of Sale |<br />11th Installment 5 %, Within 33 Months of Sale |<br />12th Installment 2 %, On 70 % Completion|<br />13th Installment 2 %, On 80 % Completion|<br />14th Installment 1 %, On 90 % Completion|<br />15th Installment 20 %, On Completion|</p>",
    paymentPlanIntro: "80% During construction, 20% On completion",
    locationDescription:
      "<p>DAMAC Hills, Remraam, and Tilal Al Ghaf surround DAMAC Lagoons. Residents will be able to travel to any part of Dubai in a short amount of time thanks to the area's excellent road connections.</p><p>Thus, Downtown Dubai, Business Bay, and Dubai Marina are all within 30 minutes of the community, while Deira and Dubai International Airport are a 40-minute drive away.</p>",
    developerSummary:
      "<p>DAMAC Properties has been at the forefront of the Middle East’s luxury real estate market since 2002, delivering award-winning residential, commercial and leisure properties across the region, including the UAE, Saudi Arabia, Qatar, Jordan, Lebanon, Iraq, Maldives, Canada, the US, as well as the UK.</p>",
    heroImage: "TW_BACK.jpg",
    galleryImages: [
      "TW_BACK.jpg",
      "MYKONOS_Windmill.jpg",
      "MYKONOS_Lagoon_2.jpg",
      "MYKONOS_Lagoon.jpg",
    ],
    floorPlanImage: "LAGOONS-Mykonos-Floor-plans-pdf.jpg",
    floorPlanUrl: "/assets/listings/LAGOONS-Mykonos-Floor-plans.pdf",
    paymentPlanUrl: "/assets/listings/LAGOONS-Mykonos-Paymentplan.pdf",
    logoImage: "damac-logo-dark.svg",
    logoAlt: "DAMAC properties",
    videoUrl: "/assets/listings/Mykonos-Launch-En.mp4",
    videoCoverUrl: "/assets/listings/MYKONOS_Lagoon.jpg",
    googleMapLatLang: "25.017198578252458, 55.2437543825842",
    locationList:
      "30 minutes, Dubai Marina|30 minutes, Business bay|40 minutes, Dubai international airport|30 minutes, The Palm Jumeirah|25 minutes, The Mall of the Emirates|20 minutes, Dubai Miracle Garden",
    permitNumber: "0705888731",
    isFeatured: true,
  },
  {
    slug: "damac-hills-trump-estates-beverly-hills-drive",
    title: "DAMAC Hills - Trump Estates Beverly Hills Drive",
    priceMin: 11135000,
    priceMax: 11135000,
    bedrooms: "7",
    bathrooms: "8",
    area: "7,285 sqft",
    city: "Dubai",
    community: "DAMAC - Hills",
    completionQuarter: "Q4",
    completionYear: "2024",
    developerName: "DAMAC PROPERTIES",
    aboutDescription:
      "<p>California-style design meets luxury living in the Trump Estates enclave. Premium five and seven-bedroom villas offer a lifestyle of unprecedented luxury within Trump International Golf Club.</p>",
    amenities:
      "<p>Golf course and Trump Golf Clubhouse |<br />Private Swimming Pool |<br />Beach Waves Pool |<br />Sports Facilities |<br />Shopping &amp; Retail</p>",
    propertyTypes: "<p>7 Bedroom Villas</p>",
    propertyType: "Villa",
    tagline: "Beautiful Marina View",
    shortDescription:
      "Beverly Hills Drive is a luxury building located in DAMAC - Hills",
    shortName: "Beverly Hills Drive",
    amenitiesShort:
      "Swimming Pools | Security | Shopping | Community Center | Golf Course",
    paymentPlan:
      "<p>Downpayment 24 %, On booking |<br />1st Installment 6 %, Within 4 Months of Sale |<br />2nd Installment 6 %, Within 8 Months of Sale |<br />3rd Installment 6 %, Within 12 Months of Sale |<br />4th Installment 6 %, Within 16 Months of Sale |<br />5th Installment 6 %, Within 20 Months of Sale |<br />6th Installment 6 %, Within 24 Months of Sale |<br />Final Installment 40 %, On Completion|</p>",
    locationDescription:
      "<p>The villa sits within the exclusive Trump Estates enclave, inside the prestigious Trump International Golf Club, Dubai.</p>",
    developerSummary:
      "<p>DAMAC Properties has been at the forefront of the Middle East's luxury real estate market since 2002, delivering award-winning residential, commercial and leisure properties across the region.</p>",
    heroImage: "V51-Rear-min-scaled.jpg",
    galleryImages: [
      "V50-jacuzzi_20220719-Edited-min-scaled.jpg",
      "V50-rear-From-Golf-View-Landscape-02-B-min-1-scaled.jpg",
    ],
    floorPlanImage: "05.08.22-BH-FLOORPLAN-BROCHURE-pdf.jpg",
    logoImage: "damac-logo-dark.svg",
    logoAlt: "DAMAC PROPERTIES",
  },
  {
    slug: "damac-lagoons-venice",
    title: "DAMAC Lagoons - Venice cluster",
    priceMin: 6199700,
    priceMax: 6397000,
    bedrooms: "6",
    bathrooms: "4",
    area: "4,573 sqft",
    city: "Dubai",
    community: "DAMAC Lagoons",
    completionQuarter: "Q4",
    completionYear: "2024",
    developerName: "DAMAC PROPERTIES",
    aboutDescription:
      "<p>The Venice cluster in DAMAC Lagoons takes inspiration from one of Italy's most romantic and beautiful cities. Offering 6-bedroom villas with exquisite finishes and water-inspired features.</p>",
    amenities:
      "<p>White Sandy beaches |<br />Wave Pool |<br />Fitness &amp; wellness zone |<br />Floating cinema |<br />Observatory |<br />Music pavilion |<br />Ladies Hub |<br />Sports facilities</p>",
    propertyTypes: "<p>6 Bedroom Villas</p>",
    propertyType: "Villa",
    shortName: "Venice cluster",
    amenitiesShort:
      "Fitness Centres | Security | Shopping | Community Center | Play Ground | Dining",
    paymentPlan:
      "<p>Downpayment 20 %, On booking |<br />1st Installment 10 %, Within 5 Months of Sale |<br />2nd Installment 10 %, Within 9 Months of Sale |<br />3rd Installment 10 %, Within 13 Months of Sale |<br />4th Installment 10 %, Within 17 Months of Sale |<br />5th Installment 10 %, Within 21 Months of Sale |<br />6th Installment 10 %, Within 25 Months of Sale |<br />Final Installment 20 %, On Completion|</p>",
    locationDescription:
      "<p>DAMAC Lagoons is perfectly positioned with easy access to major highways, ensuring a smooth commute to Dubai's business hubs and leisure attractions.</p>",
    developerSummary:
      "<p>DAMAC Properties has been at the forefront of the Middle East's luxury real estate market since 2002.</p>",
    heroImage: "VRender_1_Water_View.webp",
    galleryImages: [
      "VRender_3_Glamour_Lifestyle.webp",
      "Venice-6-bedroom-Villa.webp",
      "VRender_6_Clubhouse.webp",
      "VD1-Front.webp",
    ],
    floorPlanImage: "Venice-6-bedroom-floorplan-pdf.jpg",
    logoImage: "damac-logo-dark.svg",
    logoAlt: "DAMAC PROPERTIES",
  },
  {
    slug: "verde-by-sobha",
    title: "Verde By Sobha",
    priceMin: 1600000,
    priceMax: 4200000,
    bedrooms: "1 | 1.5 | 2.0 | 2.5 | 3.0",
    bathrooms: "1 | 3",
    area: "2,277 sqft",
    city: "Dubai",
    community: "Jumeirah Lake Towers",
    completionQuarter: "Q4",
    completionYear: "2026",
    developerName: "Sobha Realty",
    aboutDescription:
      "<p>Embrace a new kind of living in one of Dubai's most coveted districts-JLT.</p><p>SOBHA Verde offers stunning views of the green meadows and the golf course. The uber-luxury homes are beautifully designed with world-class amenities. The tower consists of 1-3.5-bedroom apartments ranging from.</p>",
    amenities:
      "<p>Retail Outlets |</p><p>Gym |</p><p>Restaurants |</p><p>Swimming Pool |</p><p>Children Play Area |</p><p>BBQ Area |</p><p>Lush Green Parks |</p>",
    propertyTypes:
      "<p>1 bedroom |</p><p>2 Bedrooms |</p><p>3 bedrooms</p>",
    propertyType: "Apartment",
    shortName: "Verde By Sobha",
    amenitiesShort:
      "Fitness Centres | Shopping | Garden | Play Ground | Dining",
    paymentPlan:
      "<p>20 % on booking |</p><p>1st Installment 10 % |</p><p>2nd Installment 10 %|</p><p>3rd Installment  10 % |</p><p>4th Installment 10 % |</p><p>5th Installment  10 % |</p><p>Sixth Installment 10 % |</p><p>Final Installment 20 % |</p>",
    locationDescription:
      "<p>Verde by Sobha is located in Jumeirah Lakes Towers (JLT). one of Dubai's most popular residential and commercial areas. Just a few minutes away are Dubai Marina and Dubai Marina Mall. Verde by Sobha is situated close to Dubai Metro and Sheikh Zayed Road.</p>",
    developerSummary:
      "<p>SOBHA Realty redefines the concept of urban luxury living with a repertoire of real estate projects across Dubai. With a razor-sharp focus on quality and innovation, it has created a plethora of iconic spaces such as extravagant palaces, ornate mosques, cutting-edge campuses and ultra-luxurious communities with grand villas and apartments. Every detail in SOBHA ushers in limitless possibilities of fine living.</p>",
    heroImage: "Verde-by-Sobha.webp",
    galleryImages: [
      "sobha_verde_jlt_3.webp",
      "sobha_verde_jlt_5.webp",
    ],
    floorPlanImage: "Floorplan-1-pdf.jpg",
    logoImage: "sobha_logo.svg",
    logoAlt: "Sobha Realty",
  },
  {
    slug: "chic-tower",
    title: "Chic Tower",
    priceMin: 823000,
    priceMax: 9000000,
    bedrooms: "Studio | 1 | 2",
    bathrooms: "1 | 2",
    area: "358 sqft to 1,679 sqft",
    city: "Dubai",
    community: "Business Bay",
    completionQuarter: "Q4",
    completionYear: "2026",
    developerName: "DAMAC PROPERTIES",
    aboutDescription:
      "<p>Chic Tower is a top-class luxury destination by Damac Properties that features studio, 1 and 2-bedroom apartments located at Business Bay, Dubai. This unique tower comes with bath zones including salt and mud baths beside its 180-meter-long lazy river.</p>",
    amenities:
      "<p>Outdoor gym |<br />Infinity Pool |<br />Lazy river |<br />Juice Bar |<br />Party Zone |</p><p>Spa</p>",
    propertyTypes:
      "<p>Studio, From AED 823,000 |<br />1 Bedroom, From AED 1,503,000 | <br />2 Bedrooms, From AED 2,739,000</p>",
    propertyType: "Apartment",
    shortName: "Chic Tower",
    amenitiesShort:
      "Swimming Pools | Fitness Centres | Spa Areas | Shopping | Play Ground",
    paymentPlan:
      "<p>Down Payment — 20%,<br />On booking |<br /><br />1st to 4th Installment — 20%,<br />Within 12 months (5% Quarterly) from booking date |<br /><br />5th to 13th Installment — 20%,<br />Within 39 months (4% Quarterly) from booking date |</p><p>14th Installment — 1%,<br />On 70% construction completion |</p><p>15th Installment — 1%,<br />On 80% construction completion |</p><p>16th Installment— 1%,<br />On 90% construction completion |</p><p>17th Installment — 1%,<br />On 95% construction completion |</p><p>Final Installment — 20%,<br />On 100% Completion</p>",
    locationDescription:
      "<p>The perfect location.</p><p>Chic Tower by de GRISOGONO is a new residential complex from one of the leading developers in the emirate of Dubai – DAMAC Properties. At the moment the residential project is currently under construction with the anticipated date of completion set to be April 2026.</p>",
    developerSummary:
      "<p>DAMAC Properties has been at the forefront of the Middle East's luxury real estate market since 2002, delivering award-winning residential, commercial and leisure properties across the region, including the UAE, Saudi Arabia, Qatar, Jordan, Lebanon, Iraq, Maldives, Canada, the US, as well as the UK.</p>",
    heroImage: "chic-tower-03.webp",
    galleryImages: ["chic-tower-01.webp", "chic-tower-02.webp"],
    floorPlanImage: "CHIC-Tower-floor-plans-pdf.jpg",
    logoImage: "damac-logo-dark.svg",
    logoAlt: "DAMAC PROPERTIES",
  },
  {
    slug: "damac-canal-heights",
    title: "DAMAC Canal Heights",
    priceMin: 1250000,
    priceMax: 9000000,
    bedrooms: "Studio | 1 | 2",
    bathrooms: "1 | 2",
    area: "440 sqft to 620 sqft",
    city: "Dubai",
    community: "Business Bay",
    completionQuarter: "Q4",
    completionYear: "2026",
    developerName: "DAMAC PROPERTIES",
    aboutDescription:
      "<p>DAMAC Canal Heights is a prestigious residential development by DAMAC Properties, offering a choice of studio, 1 and 2-bedroom apartments in the heart of Business Bay. The development boasts an array of premium amenities and stunning views of the Dubai Canal.</p>",
    amenities:
      "<p>Infinity Pool |<br />Yoga Domes |<br />Underwater Pearl Museum |<br />Shell-shaped pool |<br />Kids Playgrounds |<br />Coffee &amp; juice bar |<br />Promenade Retail |<br />Spa |<br />24/7 Security</p>",
    propertyTypes:
      "<p>Studio, From AED 1,250,000 |<br />1 Bedroom, From AED 1,673,000 | <br />2 Bedrooms, From AED 3,424,000</p>",
    propertyType: "Apartment",
    shortName: "Canal Heights",
    amenitiesShort:
      "Swimming Pools | Fitness Centres | Spa Areas | Shopping | Play Ground",
    paymentPlan:
      "<p>Downpayment 20 %, On booking |<br />1st Installment 5 %, Within 4 Months of Sale |<br />2nd Installment 5 %, Within 8 Months of Sale |<br />3rd Installment 5 %, Within 12 Months of Sale |<br />4th Installment 5 %, Within 16 Months of Sale |<br />5th Installment 5 %, Within 20 Months of Sale |<br />6th Installment 5 %, Within 24 Months of Sale |<br />7th Installment 5 %, Within 28 Months of Sale |<br />8th Installment 5 %, Within 32 Months of Sale |<br />9th Installment 5 %, Within 36 Months of Sale |<br />10th Installment 5 %, Within 40 Months of Sale |<br />11th Installment 5 %, Within 44 Months of Sale |<br />12th Installment 5 %, Within 48 Months of Sale |<br />Final Installment 20 %, On Completion|</p>",
    locationDescription:
      "<p>Situated along the Dubai Canal in Business Bay, within close proximity to Downtown Dubai and major road networks.</p>",
    developerSummary:
      "<p>DAMAC Properties has been at the forefront of the Middle East's luxury real estate market since 2002, delivering award-winning residential, commercial and leisure properties across the region.</p>",
    heroImage: "V5.webp",
    galleryImages: [
      "2_Master-Bedroom_20230217-scaled.jpg",
      "Cam-02-04-1.webp",
    ],
    floorPlanImage: "Floor-plan-Canal-Heights-pdf-1.jpg",
    logoImage: "damac-logo-dark.svg",
    logoAlt: "DAMAC PROPERTIES",
  },
];

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "decimal",
    maximumFractionDigits: 0,
  }).format(price);
}
