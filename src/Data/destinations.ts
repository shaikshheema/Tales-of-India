export interface Destination {
  id: string;
  name: string;
  state: string;
  description: string;
  shortDescription: string;
  imageUrl: string;
  location: {
    latitude: number;
    longitude: number;
  };
  videoId: string; // YouTube video ID
  bestTimeToVisit: string;
  thingsToSee: string[];
  bookingInfo: {
    priceRange: string;
    availableDates: string;
    ticketTypes: {
      name: string;
      price: number;
    }[];
  };
}

export const allStatesAndUTs: string[] = [
  // States
  "Andhra Pradesh", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra",
  "Meghalaya", "Odisha", "Punjab",
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
  "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Jammu & Kashmir", "Ladakh",
];


export const destinations: Destination[] = [
  {
    id: "taj-mahal",
    name: "Taj Mahal",
    state: "Uttar Pradesh",
    description: "The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his favorite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself. The tomb is the centerpiece of a 17-hectare complex, which includes a mosque and a guest house, and is set in formal gardens bounded on three sides by a crenellated wall.",
    shortDescription: "An ivory-white marble mausoleum and UNESCO World Heritage Site, built by Emperor Shah Jahan in memory of his beloved wife.",
    imageUrl: "/images/tajmahal.jpg",
    location: {
      latitude: 27.1751,
      longitude: 78.0421
    },
    videoId: "49HTIoCccDY",
    bestTimeToVisit: "October to March",
    thingsToSee: [
      "Main Mausoleum",
      "Gardens",
      "Mosque",
      "Yamuna River View"
    ],
    bookingInfo: {
      priceRange: "₹250 - ₹1300",
      availableDates: "All year round",
      ticketTypes: [
        {
          name: "Indian Nationals",
          price: 250
        },
        {
          name: "Foreign Tourists",
          price: 1300
        }
      ]
    }
  },
  {
    id: "jaipur",
    name: "Jaipur",
    state: "Rajasthan",
    description: "Jaipur, the capital of India's Rajasthan state, is known as the Pink City due to the distinctive color of its buildings. It was founded in 1727 by Maharaja Sawai Jai Singh II, who was the ruler of Amber. The city today has expanded far beyond the original Pink City boundaries but the original city retains its charm with wide streets, lined with pink-color buildings, grid pattern roads and unique architecture.",
    shortDescription: "Known as the 'Pink City' for its distinctive pink-hued buildings, Jaipur is famous for its majestic palaces and vibrant culture.",
    imageUrl: "/images/jaipur.jpg",
    location: {
      latitude: 26.9124,
      longitude: 75.7873
    },
    videoId: "kRZLUCWswlw",
    bestTimeToVisit: "October to March",
    thingsToSee: [
      "Hawa Mahal",
      "Amber Fort",
      "City Palace",
      "Jantar Mantar"
    ],
    bookingInfo: {
      priceRange: "₹100 - ₹1000",
      availableDates: "All year round",
      ticketTypes: [
        {
          name: "City Tour",
          price: 800
        },
        {
          name: "Heritage Sites Pass",
          price: 1000
        }
      ]
    }
  },
  {
    id: "varanasi",
    name: "Varanasi",
    state: "Uttar Pradesh",
    description: "Varanasi, also known as Kashi or Banaras, is a city on the banks of the river Ganges in Uttar Pradesh, India. A major religious hub in India, it is the holiest of the seven sacred cities in Hinduism and Jainism. The city draws Hindu pilgrims who bathe in the Ganges River's sacred waters and perform funeral rites. Along the city's winding streets are some 2,000 temples, including Kashi Vishwanath, the 'Golden Temple,' dedicated to the Hindu god Shiva.",
    shortDescription: "One of the world's oldest continuously inhabited cities and a spiritual center of Hinduism on the banks of the sacred Ganges.",
    imageUrl: "/images/varanasi.jpg",
    location: {
      latitude: 25.3176,
      longitude: 82.9739
    },
    videoId: "2lUkBy4UgLQ&t=22s",
    bestTimeToVisit: "October to March",
    thingsToSee: [
      "Ganges River Ghats",
      "Kashi Vishwanath Temple",
      "Sarnath",
      "Evening Ganga Aarti"
    ],
    bookingInfo: {
      priceRange: "₹100 - ₹5000",
      availableDates: "All year round",
      ticketTypes: [
        {
          name: "Boat Ride",
          price: 500
        },
        {
          name: "Spiritual Tour",
          price: 1500
        }
      ]
    }
  },
  {
    id: "goa",
    name: "Goa",
    state: "Goa",
    description: "Goa is a state on India's southwestern coast known for its beaches, cuisine, and Portuguese colonial architecture. Goa's most popular beaches include Baga, Calangute, Anjuna, and Vagator in the north, and Colva and Palolem in the south. The state's interior is rich with spice plantations, waterfalls, and wildlife sanctuaries. Goa's cuisine is a unique blend of Indian and Portuguese influences, making it distinct from the rest of India.",
    shortDescription: "India's smallest state known for its beaches, nightlife, and Portuguese influence, offering a perfect blend of relaxation and adventure.",
    imageUrl: "/images/goa.jpg",
    location: {
      latitude: 15.2993,
      longitude: 74.1240
    },
    videoId: "jU7ZyViNu2U",
    bestTimeToVisit: "November to February",
    thingsToSee: [
      "Calangute Beach",
      "Fort Aguada",
      "Basilica of Bom Jesus",
      "Dudhsagar Falls"
    ],
    bookingInfo: {
      priceRange: "₹500 - ₹10000",
      availableDates: "All year round",
      ticketTypes: [
        {
          name: "Beach Tour",
          price: 1500
        },
        {
          name: "Heritage Tour",
          price: 1200
        }
      ]
    }
  },
  {
    id: "kerala",
    name: "Kerala Backwaters",
    state: "Kerala",
    description: "The Kerala backwaters are a network of interconnected canals, rivers, lakes, and inlets formed by more than 900 km of waterways. The backwaters of Kerala are a self-supporting eco-system and an attractive tourist destination. The major portion of this backwater area is in the Kuttanad region, also known as the 'Rice Bowl of Kerala' because of its picturesque paddy fields.",
    shortDescription: "A network of serene canals, lagoons, and lakes nestled between the Western Ghats and Arabian Sea, offering houseboats and natural beauty.",
    imageUrl: "/images/kerala.jpg",
    location: {
      latitude: 9.4981,
      longitude: 76.3388
    },
    videoId: "3qPGPJzscro",
    bestTimeToVisit: "September to March",
    thingsToSee: [
      "Alleppey",
      "Kumarakom",
      "Vembanad Lake",
      "Houseboat Cruise"
    ],
    bookingInfo: {
      priceRange: "₹5000 - ₹15000",
      availableDates: "All year round",
      ticketTypes: [
        {
          name: "Houseboat Day Cruise",
          price: 5000
        },
        {
          name: "Overnight Houseboat Stay",
          price: 12000
        }
      ]
    }
  },
  {
    id: "ladakh",
    name: "Ladakh",
    state: "Ladakh",
    description: "Ladakh is a region in northern India that's part of the larger Kashmir region. It's known for its remote mountain beauty, culture and history connected to Tibet. Leh, the capital, features a historic old town and the towering, 17th-century Leh Palace. The region's Buddhist sites include the elaborate, multilevel Hemis monastery, Likir monastery, Thiksey monastery, and several others.",
    shortDescription: "A high-altitude desert region known for breathtaking landscapes, Buddhist monasteries, and adventure activities in the Himalayas.",
    imageUrl: "/images/ladak.jpeg",
    location: {
      latitude: 34.1526,
      longitude: 77.5771
    },
    videoId: "C1x1Vix17Y8",
    bestTimeToVisit: "June to September",
    thingsToSee: [
      "Pangong Lake",
      "Nubra Valley",
      "Magnetic Hill",
      "Hemis Monastery"
    ],
    bookingInfo: {
      priceRange: "₹10000 - ₹25000",
      availableDates: "May to October",
      ticketTypes: [
        {
          name: "Adventure Tour",
          price: 15000
        },
        {
          name: "Monastery Tour",
          price: 12000
        }
      ]
    }
  },
  {
    id: "udaipur",
    name: "Udaipur",
    state: "Rajasthan",
    description: "Known as the 'City of Lakes', Udaipur is famed for its romantic palaces set against backdrop of shimmering lakes and Aravalli Hills.",
    shortDescription: "Venice of the East: lakes, palaces & culture.",
    imageUrl: "/images/udaipur.jpg",
    location: { latitude: 24.5854, longitude: 73.7125 },
    videoId: "6oxYvj8s2Tg&t=21s",
    bestTimeToVisit: "October to March",
    thingsToSee: [
      "City Palace",
      "Lake Pichola boat ride",
      "Saheliyon-ki-Bari",
      "Monsoon Palace"
    ],
    bookingInfo: {
      priceRange: "₹300 - ₹1500",
      availableDates: "All year round",
      ticketTypes: [
        { name: "City Palace Entry", price: 250 },
        { name: "Boat Ride on Pichola", price: 500 }
      ]
    }
  },
  {
    id: "amritsar",
    name: "Amritsar",
    state: "Punjab",
    description: "Amritsar is the spiritual and cultural center of the Sikh faith, renowned for the gilded Golden Temple (Sri Harmandir Sahib), a stunning shrine set in a sacred pool, hosting the world's largest free community kitchen.",
    shortDescription: "Heart of Sikhism, known for its Golden Temple and langar traditions.",
    imageUrl: "/images/amritsar.jpg",
    location: {
      latitude: 31.6200,
      longitude: 74.8764
    },
    videoId: "4UZeKMufy9o",
    bestTimeToVisit: "November to March",
    thingsToSee: [
      "Golden Temple",
      "Jallianwala Bagh",
      "Wagah Border Ceremony",
      "Partition Museum"
    ],
    bookingInfo: {
      priceRange: "₹0 - ₹200",
      availableDates: "All year round",
      ticketTypes: [
        {
          name: "Temple Visit",
          price: 0
        },
        {
          name: "Wagah Border Tour",
          price: 500
        }
      ]
    }
  },

  {
    id: "mysuru",
    name: "Mysuru",
    state: "Karnataka",
    description: "Mysuru (Mysore) is famed for its majestic Mysore Palace, vibrant Dasara festival and serene Chamundi Hills.",
    shortDescription: "Royal city of palaces & cultural heritage.",
    imageUrl: "/images/mysuru.jpg",
    location: { latitude: 12.2958, longitude: 76.6394 },
    videoId: "wIxGJqwdy9g",
    bestTimeToVisit: "September to February",
    thingsToSee: [
      "Mysore Palace",
      "Chamundi Hill & Temple",
      "Brindavan Gardens",
      "Mysore Zoo"
    ],
    bookingInfo: {
      priceRange: "₹100 - ₹800",
      availableDates: "All year round",
      ticketTypes: [
        { name: "Palace Entry", price: 200 },
        { name: "Brindavan Gardens Light Show", price: 150 }
      ]
    }
  },
  {
    id: "rishikesh",
    name: "Rishikesh",
    state: "Uttarakhand",
    description: "A spiritual & adventure hub on the Ganges, Rishikesh is called the 'Yoga Capital' and also draws thrill-seekers for rafting and trekking.",
    shortDescription: "Yoga, rafting & spiritual retreats by the Ganges.",
    imageUrl: "/images/rishikesh.jpg",
    location: { latitude: 30.0869, longitude: 78.2676 },
    videoId: "8vWf9FJRlx4",
    bestTimeToVisit: "September to May",
    thingsToSee: [
      "Lakshman Jhula",
      "Yoga Ashrams",
      "River Rafting",
      "Beatles Ashram"
    ],
    bookingInfo: {
      priceRange: "₹0 - ₹2000",
      availableDates: "All year round",
      ticketTypes: [
        { name: "Rafting Trip", price: 1200 },
        { name: "Ganga Aarti Seat", price: 0 }
      ]
    }
  },
  {
    id: "hampi",
    name: "Hampi",
    state: "Karnataka",
    description: "Once the capital of Vijayanagara Empire, Hampi is a UNESCO World Heritage site with stunning temple ruins amid rocky landscapes.",
    shortDescription: "Ancient ruins among boulder-strewn plains.",
    imageUrl: "/images/hampi.jpg",
    location: { latitude: 15.3350, longitude: 76.4600 },
    videoId: "OKCkLFVl80U",
    bestTimeToVisit: "October to March",
    thingsToSee: [
      "Virupaksha Temple",
      "Vittala Temple & Stone Chariot",
      "Matanga Hill Sunrise",
      "Elephant Stables"
    ],
    bookingInfo: {
      priceRange: "₹50 - ₹800",
      availableDates: "All year round",
      ticketTypes: [
        { name: "Hampi Group Entry", price: 300 },
        { name: "Rock Cart Ride", price: 200 }
      ]
    }
  },
  {
    id: "darjeeling",
    name: "Darjeeling",
    state: "West Bengal",
    description: "Nestled in the Himalayas, Darjeeling is known for its tea gardens, the UNESCO Darjeeling Himalayan Railway, and stunning mountain views.",
    shortDescription: "Tea hills, toy train & Himalayan sunrise.",
    imageUrl: "/images/darjeeling.jpg",
    location: { latitude: 27.0360, longitude: 88.2627 },
    videoId: "jpCQsEh920E",
    bestTimeToVisit: "March to May & October to November",
    thingsToSee: [
      "Tiger Hill Sunrise",
      "Toy Train Ride",
      "Batasia Loop",
      "Tea Estate Tour"
    ],
    bookingInfo: {
      priceRange: "₹150 - ₹2000",
      availableDates: "All year round",
      ticketTypes: [
        { name: "Toy Train Ticket", price: 200 },
        { name: "Tea Garden Tour", price: 150 }
      ]
    }
  },
  {
    id: "pondicherry",
    name: "Pondicherry",
    state: "Tamil Nadu",
    description: "A former French colony with distinct Franco-Tamil architecture, serene beaches, spiritual Ashrams, and a laid-back vibe.",
    shortDescription: "French quarter, beaches & spiritual ashrams.",
    imageUrl: "/images/pondicherry.jpg",
    location: { latitude: 11.9416, longitude: 79.8083 },
    videoId: "p7TtHzyQA8o",
    bestTimeToVisit: "November to February",
    thingsToSee: [
      "Promenade Beach",
      "Auroville & Matrimandir",
      "French Quarter",
      "Sri Aurobindo Ashram"
    ],
    bookingInfo: {
      priceRange: "₹200 - ₹1000",
      availableDates: "All year round",
      ticketTypes: [
        { name: "Auroville Entry", price: 100 },
        { name: "Boat Ride", price: 300 }
      ]
    }
  },
  {
    id: "coorg",
    name: "Coorg",
    state: "Karnataka",
    description: "Also known as Kodagu, Coorg is a misty hill station renowned for coffee plantations, lush green hills, waterfalls and Kodava culture.",
    shortDescription: "Coffee hills, waterfalls & Kodava heritage.",
    imageUrl: "/images/coorg.jpg",
    location: { latitude: 12.3375, longitude: 75.8069 },
    videoId: "YvF1U2XRfrQ",
    bestTimeToVisit: "October to March",
    thingsToSee: [
      "Abbey & Iruppu Falls",
      "Coffee Plantation Tour",
      "Raja's Seat",
      "Nagarhole Wildlife Reserve"
    ],
    bookingInfo: {
      priceRange: "₹300 - ₹2000",
      availableDates: "All year round",
      ticketTypes: [
        { name: "Plantation Visit", price: 500 },
        { name: "Wildlife Safari", price: 1500 }
      ]
    }
  },
  {
    id: "shimla",
    name: "Shimla",
    state: "Himachal Pradesh",
    description: "A charming colonial-era hill station nestled in the Himalayas, known for its scenic views, Victorian buildings, and toy train.",
    shortDescription: "Himalayan hill station with British heritage & mountain walks.",
    imageUrl: "/images/shimla.jpg",
    location: { latitude: 31.1048, longitude: 77.1734 },
    videoId: "_1Ei5I7qqoI_",
    bestTimeToVisit: "March to June & September to December",
    thingsToSee: [
      "The Ridge & Mall Road",
      "Jakhoo Temple",
      "Kufri day trip",
      "Shimla Toy Train"
    ],
    bookingInfo: {
      priceRange: "₹200 - ₹2000",
      availableDates: "All year round",
      ticketTypes: [
        { name: "Toy Train Ticket", price: 150 },
        { name: "Kufri Entry/Walk", price: 100 }
      ]
    }
  },
  {
    id: "jaisalmer",
    name: "Jaisalmer",
    state: "Rajasthan",
    description: "The 'Golden City' in the heart of the Thar Desert, renowned for its sandstone fort, desert safaris, and havelis.",
    shortDescription: "Desert fort, camel safaris & sandstone architecture.",
    imageUrl: "/images/Jaisalmer.jpg",
    location: { latitude: 26.9157, longitude: 70.9083 },
    videoId: "mNVYLYkdp2Q",
    bestTimeToVisit: "October to February",
    thingsToSee: [
      "Jaisalmer Fort",
      "Sam Sand Dunes",
      "Patwon Ki Haveli",
      "Camel Safari & Desert Camp"
    ],
    bookingInfo: {
      priceRange: "₹300 - ₹4000",
      availableDates: "All year round",
      ticketTypes: [
        { name: "Fort Entry", price: 100 },
        { name: "Desert Camp Package", price: 2500 }
      ]
    }
  },
  {
    id: "sikkim",
    name: "Sikkim",
    state: "Sikkim",
    description: "A tranquil Himalayan state bordering Nepal, Bhutan & Tibet—renowned for its alpine beauty, Buddhist monasteries, and the majestic Kanchenjunga.",
    shortDescription: "Mountain vistas, monasteries & alpine trekking.",
    imageUrl: "/images/sikhim.jpg",
    location: { latitude: 27.5330, longitude: 88.5122 },
    videoId: "K7IYGNxwzQA",
    bestTimeToVisit: "March to June & September to December",
    thingsToSee: [
      "Tsomgo Lake",
      "Rumtek Monastery",
      "Pelling & Rathong Glacier",
      "Kanchenjunga viewpoint"
    ],
    bookingInfo: {
      priceRange: "₹300 - ₹4000",
      availableDates: "All year round",
      ticketTypes: [
        { name: "Tsomgo Lake Excursion", price: 600 },
        { name: "Monastery Tour", price: 200 }
      ]
    }
  },
  {
    id: "mumbai",
    name: "Mumbai",
    state: "Maharashtra",
    description: "The 'City of Dreams' is India's financial powerhouse, known for Bollywood, colonial architecture, bustling bazaars & Marine Drive.",
    shortDescription: "Bollywood, beaches & city nightlife.",
    imageUrl: "/images/mumbai.jpg",
    location: { latitude: 19.0760, longitude: 72.8777 },
    videoId: "3_gNrZv6gKI",
    bestTimeToVisit: "November to February",
    thingsToSee: [
      "Gateway of India",
      "Marine Drive",
      "Elephanta Caves",
      "Bollywood tour"
    ],
    bookingInfo: {
      priceRange: "₹100 - ₹3000",
      availableDates: "All year round",
      ticketTypes: [
        { name: "Ferry to Elephanta", price: 400 },
        { name: "Heritage Walk", price: 500 }
      ]
    }
  },
  {
    id: "sunderbans",
    name: "Sunderbans",
    state: "West Bengal",
    description: "The largest mangrove forest in the world, home to Bengal tigers, estuarine waterways & unique wildlife.",
    shortDescription: "Mangrove wilderness & Royal Bengal Tigers.",
    imageUrl: "/images/Sundarbans.jpg",
    location: { latitude: 21.9497, longitude: 88.9550 },
    videoId: "5zqCChpY5Ng",
    bestTimeToVisit: "November to March",
    thingsToSee: [
      "Tiger Safari Boat Ride",
      "Sajnekhali Watch Tower",
      "Mangrove creek tours",
      "Gajoldoba wildlife walk"
    ],
    bookingInfo: {
      priceRange: "₹1000 - ₹6000",
      availableDates: "October to April",
      ticketTypes: [
        { name: "Boat Safari (per boat)", price: 4000 },
        { name: "Park Entry", price: 200 }
      ]
    }
  },
  {
    id: "nubra_valley",
    name: "Nubra Valley",
    state: "Ladakh",
    description: "A breathtaking high-altitude cold desert carved by the Shyok and Nubra rivers, dotted with sand dunes, double-humped Bactrian camels and ancient monasteries.",
    shortDescription: "High-altitude desert, camel rides & remote monasteries.",
    imageUrl: "/images/Nubra Valley.jpg",
    location: { latitude: 34.9279, longitude: 77.7380 },
    videoId: "MUfLMWS1EPA",
    bestTimeToVisit: "June to September",
    thingsToSee: [
      "Diskit Monastery & Maitreya Buddha statue",
      "Hunder sand dunes & camel safari",
      "Khardung La pass drive",
      "Turtuk village visit"
    ],
    bookingInfo: {
      priceRange: "₹300 - ₹4000",
      availableDates: "June to September",
      ticketTypes: [
        { name: "Camel Safari", price: 800 },
        { name: "Monastery Entry", price: 100 }
      ]
    }
  },
  {
    id: "khajuraho",
    name: "Khajuraho",
    state: "Madhya Pradesh",
    description: "Home to the UNESCO-listed Khajuraho Group of Monuments—intricately carved Hindu and Jain temples renowned for their erotic sculptures and exquisite architecture.",
    shortDescription: "Temple masterpieces, erotic sculptures & dance festival.",
    imageUrl: "/images/Khajuraho.jpg",
    location: { latitude: 24.8510, longitude: 79.9190 },
    videoId: "gWN_SiTKRtk",
    bestTimeToVisit: "October to March",
    thingsToSee: [
      "Kandariya Mahadeva Temple",
      "Western Temple Group sound & light show",
      "Khajuraho Dance Festival",
      "Raneh Falls & Panna National Park"
    ],
    bookingInfo: {
      priceRange: "₹40 - ₹2000",
      availableDates: "All year round",
      ticketTypes: [
        { name: "Temple Entry (Indian/Foreigner)", price: 40 },
        { name: "Sound & Light Show", price: 350 }
      ]
    }
  },
  {
    id: "kodaikanal",
    name: "Kodaikanal",
    state: "Tamil Nadu",
    description: "A serene hill station in the Palani Hills, famed for its star-shaped lake, misty valleys, pine forests, and viewpoints like Coaker’s Walk and Dolphin’s Nose.",
    shortDescription: "Misty hills, tranquil lakes & scenic viewpoints.",
    imageUrl: "/images/Kodaikanal.jpg",
    location: { latitude: 10.2381, longitude: 77.4894 },
    videoId: "jHpHt6ZeU_s",
    bestTimeToVisit: "April to June & September to December",
    thingsToSee: [
      "Kodaikanal Lake (pedal boating)",
      "Coaker's Walk",
      "Pillar Rocks",
      "Dolphin's Nose",
      "Bryant Park",
      "Guna Caves"
    ],
    bookingInfo: {
      priceRange: "₹0 - ₹500",
      availableDates: "All year round",
      ticketTypes: [
        { name: "Boat Ride", price: 150 },
        { name: "Park Entry", price: 30 }
      ]
    }
  },
  {
    id: "ooty",
    name: "Ooty",
    state: "Tamil Nadu",
    description: "Also called Udagamandalam, Ooty is the 'Queen of the Nilgiris', known for its tea gardens, colonial architecture, lakes, and winding toy train.",
    shortDescription: "Tea hills, lakes & toy-train nostalgia.",
    imageUrl: "/images/ooty.jpg",
    location: { latitude: 11.4064, longitude: 76.6950 },
    videoId: "C-cAjRQWCDY",
    bestTimeToVisit: "October to June",
    thingsToSee: [
      "Nilgiri Mountain Railway (toy train)",
      "Ooty Lake & Boat House",
      "Botanical & Rose Gardens",
      "Doddabetta Peak",
      "Pine Forest & Emerald Lake"
    ],
    bookingInfo: {
      priceRange: "₹150 - ₹1000",
      availableDates: "All year round",
      ticketTypes: [
        { name: "Toy Train Ticket", price: 150 },
        { name: "Boat Ride", price: 200 }
      ]
    }
  },
  {
    id: "munnar",
    name: "Munnar",
    state: "Kerala",
    description: "Nestled in the Western Ghats, Munnar is famed for sprawling tea plantations, misty hills, sparkling waterfalls and rich biodiversity.",
    shortDescription: "Tea-clad hills, waterfalls & wildlife.",
    imageUrl: "/images/munnar.jpg",
    location: { latitude: 10.0889, longitude: 77.0595 },
    videoId: "BORNLlknFKU",
    bestTimeToVisit: "September to March",
    thingsToSee: [
      "Tea Plantations & Kolukkumalai Sunrise",
      "Eravikulam National Park (Nilgiri Tahr)",
      "Mattupetty Dam & Echo Point",
      "Marayoor Dolmens & Kanthalloor",
      "Lakkom & Erachilpara Waterfalls"
    ],
    bookingInfo: {
      priceRange: "₹200 - ₹1500",
      availableDates: "All year round",
      ticketTypes: [
        { name: "National Park Entry", price: 400 },
        { name: "Boat Ride Mattupetty", price: 150 }
      ]
    }
  },
  {
    id: "golconda_fort",
    name: "Golconda Fort",
    state: "Telangana",
    description: "Once the powerful capital of the Qutb Shahi dynasty, this massive granite citadel features impressive acoustics, royal palaces, mosques, stables, and the famed Fateh Darwaza gate.",
    shortDescription: "Historic hill-top fort, diamonds & acoustic wonders.",
    imageUrl: "/images/golconda.jpg",
    location: { latitude: 17.3831, longitude: 78.4011 },
    videoId: "xpyfcdGfpPI",
    bestTimeToVisit: "November to February",
    thingsToSee: [
      "Fateh Darwaza with its echo",
      "Jami Masjid & royal halls",
      "Panoramic views from the top pavilion",
      "Light & Sound show in evenings"
    ],
    bookingInfo: {
      priceRange: "₹25 - ₹100",
      availableDates: "All year round",
      ticketTypes: [
        { name: "Fort Entry", price: 25 },
        { name: "Sound & Light Show", price: 100 }
      ]
    }
  },
  {
    id: "chowmahalla_palace",
    name: "Chowmahalla Palace",
    state: "Telangana",
    description: "The regal seat of the Nizams of Hyderabad, this restored palace complex features elegant halls, courtyards, vintage cars and cultural richness centered near Charminar.",
    shortDescription: "Opulent Nizam palace with heritage museum & grand halls.",
    imageUrl: "/images/Chowmahalla Palace.jpg",
    location: { latitude: 17.3611, longitude: 78.4775 },
    videoId: "rnLrIAg07To",
    bestTimeToVisit: "October to March",
    thingsToSee: [
      "Khilwat (Durbar) Hall & fountains",
      "Vintage car collection",
      "Nazri Bagh gardens",
      "Royal kitchens & ceremonial courts"
    ],
    bookingInfo: {
      priceRange: "₹40 - ₹200",
      availableDates: "All year round",
      ticketTypes: [
        { name: "Palace Entry", price: 40 },
        { name: "Combo (Cars + Palace)", price: 200 }
      ]
    }
  },
  {
    id: "bikaner",
    name: "Bikaner",
    state: "Rajasthan",
    description: "A historic desert city on the edge of the Thar, famed for camel safaris, palaces, temples and the famous Karni Mata 'Rat Temple.'",
    shortDescription: "Camel safaris, forts, rat temple & desert heritage.",
    imageUrl: "/images/Bikaner fort.jpg",
    location: { latitude: 28.0229, longitude: 73.3119 },
    videoId: "xgp87rszW3c",
    bestTimeToVisit: "October to February",
    thingsToSee: [
      "Camel safari in Raisar / Khuri dunes",
      "Junagarh Fort & Laxmi Niwas Palace",
      "Karni Mata Temple (Deshnoke)",
      "Gajner Wildlife Sanctuary"
    ],
    bookingInfo: {
      priceRange: "₹150 - ₹6000",
      availableDates: "All year round",
      ticketTypes: [
        { name: "Camel Safari (half-day)", price: 1200 },
        { name: "Desert Camp + Folk Dinner", price: 2000 }
      ]
    }
  },
  {
    id: "osian",
    name: "Osian",
    state: "Rajasthan",
    description: "A desert oasis near Jodhpur, Osian is known for its ancient temples, dunes, traditional camel safari camps and evening cultural performances.",
    shortDescription: "Temple ruins, camel dunes & cultural desert camps.",
    imageUrl: "/images/Osian.jpg",
    location: { latitude: 26.7319, longitude: 72.8723 },
    videoId: "AHdkokXcKXg",
    bestTimeToVisit: "October to March",
    thingsToSee: [
      "Sachiya Mata & Mahavira temples",
      "Camel safari on sand dunes",
      "Sunset cultural camp with folk music",
      "Ancient step wells & village walks"
    ],
    bookingInfo: {
      priceRange: "₹300 - ₹2500",
      availableDates: "All year round",
      ticketTypes: [
        { name: "Temple Entry & Tour", price: 200 },
        { name: "Camel Safari + Camp Dinner", price: 1800 }
      ]
    }
  },
  {
    id: "thar_desert",
    name: "Thar Desert",
    state: "Rajasthan",
    description: "India's largest desert—also called the Great Indian Desert—spanning northwest India and eastern Pakistan, famous for rolling dunes, camel safaris, vibrant culture and desert wildlife.",
    shortDescription: "Golden dunes, camel safaris & vibrant Rajasthani traditions.",
    imageUrl: "/images/thar desert.jpg",
    location: { latitude: 27.0, longitude: 71.0 },
    videoId: "sfLj95upL9c",
    bestTimeToVisit: "October to February",
    thingsToSee: [
      "Camel & jeep safaris (Sam, Khuri dunes)",
      "Jaisalmer Desert Festival",
      "Kuldhara ghost village",
      "Desert National Park & Tal Chhapar sanctuary",
      "Rann of Kutch (salt desert extension)"
    ],
    bookingInfo: {
      priceRange: "₹500 - ₹6000",
      availableDates: "All year round (best Oct-Feb)",
      ticketTypes: [
        { name: "Camel Safari (half-day)", price: 1200 },
        { name: "Desert Camp + Folk Dinner", price: 2000 }
      ]
    }
  },

  {
    id: "spiti-valley",
    name: "Spiti Valley",
    state: "Himachal Pradesh",
    description: "High-altitude cold desert valley with remote monasteries and rugged mountain scenery.",
    shortDescription: "Skies of Spiti — remote high-altitude desert.",
    imageUrl: "/images/spiti-valley.jpeg",
    location: { latitude: 32.2257, longitude: 78.0795 },
    videoId: "ch-qA5gqyHE",
    bestTimeToVisit: "June to September",
    thingsToSee: ["Key Monastery", "Chandratal Lake", "Kaza town", "Dhankar Gompa"],
    bookingInfo: {
      priceRange: "₹100 - ₹2000",
      availableDates: "June to September",
      ticketTypes: [
        { name: "Monastery Entry", price: 100 },
        { name: "Camping at Chandratal", price: 2000 }
      ]
    }
  },
  {
    id: "ajanta-ellora-caves",
    name: "Ajanta & Ellora Caves",
    state: "Maharashtra",
    description: "Ancient rock-cut cave monuments dating from the 2nd century BCE to about 600 CE, showcasing magnificent Buddhist, Hindu and Jain art and architecture.",
    shortDescription: "UNESCO-listed rock-cut cave temples near Aurangabad.",
    imageUrl: "/images/ajanta-ellora.jpg",
    location: { latitude: 20.5530, longitude: 75.7033 },
    videoId: "y6IzT8qTcNI",
    bestTimeToVisit: "October to March",
    thingsToSee: ["Ajanta Caves", "Ellora Caves", "Karla Caves", "Daulatabad Fort"],
    bookingInfo: {
      priceRange: "₹40 - ₹600",
      availableDates: "All year (closed on Mondays)",
      ticketTypes: [
        { name: "Ajanta Domestic Ticket", price: 40 },
        { name: "Ajanta Foreign Ticket", price: 600 },
        { name: "Ellora Site Entry", price: 40 }
      ]
    }
  },
  {
    id: "qutub-minar",
    name: "Qutub Minar",
    state: "Delhi",
    description: "An iconic 73‑m‑tall tapering minaret built in 1193 by Qutb‑ud‑din Aibak, it's surrounded by important medieval ruins.",
    shortDescription: "Tallest brick minaret in the world, UNESCO site.",
    imageUrl: "/images/qutub-minar.jpg",
    location: { latitude: 28.5244, longitude: 77.1855 },
    videoId: "3LIdjVTAqQk",
    bestTimeToVisit: "October to March",
    thingsToSee: ["Qutub Minar", "Iron Pillar", "Quwwat ul Islam Mosque", "Alai Darwaza"],
    bookingInfo: {
      priceRange: "₹30 - ₹550",
      availableDates: "All year",
      ticketTypes: [
        { name: "Indian Entry", price: 30 },
        { name: "Foreign Entry", price: 550 }
      ]
    }
  },
  {
    id: "sanchi-stupa",
    name: "Sanchi Stupa",
    state: "Madhya Pradesh",
    description: "One of the oldest stone structures in India, commissioned by Emperor Ashoka in the 3rd century BCE — a key Buddhist pilgrimage site.",
    shortDescription: "Ashokan Buddhist stupa with spectacular gateways.",
    imageUrl: "/images/sanchi-stupa.jpg",
    location: { latitude: 23.4855, longitude: 77.7357 },
    videoId: " ZrZtiP5_jUk",
    bestTimeToVisit: "October to March",
    thingsToSee: ["Great Stupa", "Ashoka Pillar", "Smaller Stupas", "Archaeological Museum"],
    bookingInfo: {
      priceRange: "₹10 - ₹200",
      availableDates: "All year (closed on Fridays)",
      ticketTypes: [
        { name: "Domestic Entry", price: 10 },
        { name: "Foreign Entry", price: 200 }
      ]
    }
  },
  {
    id: "valley-of-flowers",
    name: "Valley of Flowers",
    state: "Uttarakhand",
    description: "A high‑altitude Himalayan valley in full bloom during the summer, a UNESCO‑listed national park with a riot of alpine flowers.",
    shortDescription: "Spectacular Himalayan wildflower valley.",
    imageUrl: "/images/valley-of-flowers.jpg",
    location: { latitude: 30.7280, longitude: 79.6026 },
    videoId: "aljJo0o6Kg4",
    bestTimeToVisit: "July to September",
    thingsToSee: ["Rhododendron Forest", "Hemkund Sahib", "Ghangaria", "Alpine Flowers"],
    bookingInfo: {
      priceRange: "₹100 - ₹2000",
      availableDates: "July to September",
      ticketTypes: [
        { name: "Entry + Trek Permit", price: 1000 },
        { name: "Hemkund Sahib Entry", price: 200 }
      ]
    }
  },
  {
    id: "gokarna",
    name: "Gokarna",
    state: "Karnataka",
    description: "A laid-back coastal town known for gorgeous beaches, temples and as a tranquil alternative to Goa.",
    shortDescription: "Tranquil beach town & pilgrim destination.",
    imageUrl: "/images/gokarna.jpg",
    location: { latitude: 14.5486, longitude: 74.3188 },
    videoId: "jVomAVZcuxM",
    bestTimeToVisit: "October to March",
    thingsToSee: ["Om Beach", "Kudle Beach", "Mahabaleshwar Temple", "Half Moon Beach"],
    bookingInfo: {
      priceRange: "₹0 - ₹500",
      availableDates: "All year",
      ticketTypes: [
        { name: "Beach Access", price: 0 },
        { name: "Boat Ride", price: 300 }
      ]
    }
  },
  {
    id: "mahabalipuram",
    name: "Mahabalipuram",
    state: "Tamil Nadu",
    description: "Coastal town famous for its 7th-century Pallava rock-cut temples and shore temples overlooking the Bay of Bengal.",
    shortDescription: "Ancient rock-cut temples by the sea.",
    imageUrl: "/images/mahabalipuram.jpg",
    location: { latitude: 12.6208, longitude: 80.1930 },
    videoId: "xdArSf1eM3Q",
    bestTimeToVisit: "October to February",
    thingsToSee: ["Shore Temple", "Pancha Rathas", "Arjuna's Penance", "Mahabalipuram Beach"],
    bookingInfo: {
      priceRange: "₹0 - ₹200",
      availableDates: "All year",
      ticketTypes: [
        { name: "Site Entry", price: 100 },
        { name: "Combined Pass", price: 200 }
      ]
    }
  },
  {
    id: "bhopal",
    name: "Bhopal",
    state: "Madhya Pradesh",
    description: "The City of Lakes — a blend of history, tribal culture, and modern urban landscapes, with both UNESCO heritage and scenic lakes.",
    shortDescription: "City of lakes and historical forts.",
    imageUrl: "/images/bhopal.jpg",
    location: { latitude: 23.2599, longitude: 77.4126 },
    videoId: "lpNsRRT6y0k",
    bestTimeToVisit: "October to March",
    thingsToSee: ["Upper Lake", "Taj-ul-Masajid", "Bhimbetka Caves", "Van Vihar"],
    bookingInfo: {
      priceRange: "₹0 - ₹500",
      availableDates: "All year",
      ticketTypes: [
        { name: "Cave Site Entry", price: 200 },
        { name: "Lake Boating", price: 100 }
      ]
    }
  },
  {
    id: "rameswaram",
    name: "Rameswaram",
    state: "Tamil Nadu",
    description: "One of India’s holiest towns, located on Pamban Island, famous for the Ramanathaswamy Temple and 22 holy wells.",
    shortDescription: "Pilgrim town on Pamban Island.",
    imageUrl: "/images/rameswaram.jpg",
    location: { latitude: 9.2765, longitude: 79.3129 },
    videoId: "mVvUx482v0A",
    bestTimeToVisit: "October to March",
    thingsToSee: ["Ramanathaswamy Temple", "Agni Theertham", "Pamban Bridge", "Dhanushkodi"],
    bookingInfo: {
      priceRange: "₹0 - ₹300",
      availableDates: "All year",
      ticketTypes: [
        { name: "Temple Entry", price: 0 },
        { name: "Bridge Viewpoint", price: 50 }
      ]
    }
  },
  {
    id: "shirdi",
    name: "Shirdi",
    state: "Maharashtra",
    description: "Small town and spiritual centre, home to the legendary Sai Baba, attracting millions of devotees annually.",
    shortDescription: "Sai Baba pilgrimage town.",
    imageUrl: "/images/shirdi.jpg",
    location: { latitude: 19.7667, longitude: 74.4794 },
    videoId: "0vF19kG9Mr8",
    bestTimeToVisit: "October to February",
    thingsToSee: ["Sai Baba Temple", "Samadhi Mandir", "Dwarkamai", "Chavadi"],
    bookingInfo: {
      priceRange: "₹0 - ₹100",
      availableDates: "All year",
      ticketTypes: [
        { name: "Darshan", price: 0 },
        { name: "Chavadi Purse Prasad", price: 100 }
      ]
    }
  },
  {
    id: "puri",
    name: "Puri",
    state: "Odisha",
    description: "Coastal town best known for the Jagannath Temple and the annual Rath Yatra festival, along with scenic golden-sand beaches.",
    shortDescription: "Temple town & beach destination.",
    imageUrl: "/images/puri.jpg",
    location: { latitude: 19.8135, longitude: 85.8312 },
    videoId: "KH-8dQ6_q9Q",
    bestTimeToVisit: "October to February",
    thingsToSee: ["Jagannath Temple", "Puri Beach", "Konark Sun Temple", "Marine Drive"],
    bookingInfo: {
      priceRange: "₹0 - ₹200",
      availableDates: "All year",
      ticketTypes: [
        { name: "Temple Darshan", price: 0 },
        { name: "Beach Access", price: 20 }
      ]
    }
  },

  {
    id: "lonavala-khandala",
    name: "Lonavala & Khandala",
    state: "Maharashtra",
    description: "Twin hill stations in the Western Ghats, known for monsoon waterfalls, scenic viewpoints, and caves.",
    shortDescription: "Monsoon hill duo near Mumbai & Pune.",
    imageUrl: "/images/lonavala-khandala.jpg",
    location: { latitude: 18.7669, longitude: 73.4169 },
    videoId: "9cqJ4wG1RlI",
    bestTimeToVisit: "June to September",
    thingsToSee: ["Bhushi Dam", "Kune Falls", "Tiger's Leap", "Karla & Bhaja Caves"],
    bookingInfo: {
      priceRange: "₹0 - ₹500",
      availableDates: "All year",
      ticketTypes: [
        { name: "Viewpoint Entry", price: 0 },
        { name: "Cave Entry", price: 100 }
      ]
    }
  },
  {
    id: "panchmarhi",
    name: "Panchmarhi",
    state: "Madhya Pradesh",
    description: "Bhopal’s only hill station, known for waterfalls, caves, and dense forests in the Satpura range.",
    shortDescription: "Satpura hill station with nature trails.",
    imageUrl: "/images/panchmarhi.jpg",
    location: { latitude: 22.4677, longitude: 78.2542 },
    videoId: "8BHX4c4bvbQ",
    bestTimeToVisit: "October to February",
    thingsToSee: ["Bee Falls", "Pandav Caves", "Rajendra Giri", "Dhupgarh Sunsets"],
    bookingInfo: {
      priceRange: "₹0 - ₹400",
      availableDates: "All year",
      ticketTypes: [
        { name: "Park Entry", price: 0 },
        { name: "Guide Fees", price: 400 }
      ]
    }
  },
  {
    id: "bhitarkanika",
    name: "Bhitarkanika National Park",
    state: "Odisha",
    description: "A vast mangrove wetland, famous for its saltwater crocodiles, birdlife, and serene creeks.",
    shortDescription: "Odisha’s mangrove & crocodile sanctuary.",
    imageUrl: "/images/bhitarkanika.jpg",
    location: { latitude: 20.6516, longitude: 86.9187 },
    videoId: "kt0rH3rRVBs",
    bestTimeToVisit: "October to May",
    thingsToSee: ["Crocodile Spotting", "Boat Safari", "Bird Wildlife", "Mangrove Creeks"],
    bookingInfo: {
      priceRange: "₹50 - ₹1500",
      availableDates: "October to May",
      ticketTypes: [
        { name: "Park Entry", price: 50 },
        { name: "Boat Safari", price: 300 }
      ]
    }
  },
  {
    id: "kedarnath",
    name: "Kedarnath Temple",
    state: "Uttarakhand",
    description: "Kedarnath is one of the most revered temples in India, dedicated to Lord Shiva and part of the Chota Char Dham pilgrimage. Located in the Garhwal Himalayan range near the Mandakini River, it stands at an altitude of 3,583 meters and is accessible by a trek from Gaurikund.",
    shortDescription: "A sacred Himalayan temple dedicated to Lord Shiva, part of Chota Char Dham.",
    imageUrl: "/images/kedarnath.jpg",
    location: { latitude: 30.7352, longitude: 79.0669 },
    videoId: "cxlIUOMUrS4",
    bestTimeToVisit: "May to June, September to October",
    thingsToSee: ["Kedarnath Temple", "Mandakini River", "Bhairavnath Temple", "Vasuki Tal"],
    bookingInfo: {
      priceRange: "₹0 - ₹1500",
      availableDates: "May to October (closed in winter)",
      ticketTypes: [
        { name: "Temple Entry", price: 0 },
        { name: "Helicopter Ride (One-way)", price: 3500 }
      ]
    }
  },
  {
    id: "dawki",
    name: "Dawki & Umngot River",
    state: "Meghalaya",
    description: "Crystal-clear emerald river near Dawki, famed for its glass boat rides and border views with Bangladesh.",
    shortDescription: "Clear rivers & cross-border lake views.",
    imageUrl: "/images/dawki.jpg",
    location: { latitude: 25.4852, longitude: 92.3197 },
    videoId: "keFwUFJ8FEs",
    bestTimeToVisit: "October to April",
    thingsToSee: ["Umngot River", "Boat Ride", "Living Root Bridges", "Local Market"],
    bookingInfo: {
      priceRange: "₹100 - ₹500",
      availableDates: "All year",
      ticketTypes: [
        { name: "Boat Ride", price: 100 },
        { name: "Park Fee", price: 50 }
      ]
    }
  },
  {
    id: "maheshwar",
    name: "Maheshwar",
    state: "Madhya Pradesh",
    description: "Historic riverside town on the Narmada, known for ornate temples and the production of Maheshwari sarees.",
    shortDescription: "Narmada-side town famed for silk weaving.",
    imageUrl: "/images/maheshwar.jpg",
    location: { latitude: 22.6297, longitude: 76.0045 },
    videoId: "T26tqGXkr8g",
    bestTimeToVisit: "October to March",
    thingsToSee: ["Maheshwar Fort", "Bateshwar Temples", "Ahilya Ghat", "Silk Weaving Workshops"],
    bookingInfo: {
      priceRange: "₹0 - ₹300",
      availableDates: "All year",
      ticketTypes: [
        { name: "Ghat Access", price: 0 },
        { name: "Workshop Visit", price: 300 }
      ]
    }
  },
  {
    id: "patan",
    name: "Patan",
    state: "Gujarat",
    description: "Historic town famous for Patola silk sarees, the UNESCO-listed Rani ki Vav stepwell, and Hindu archaeological sites.",
    shortDescription: "Silk, stepwell & heritage in Gujarat.",
    imageUrl: "/images/patan.jpg",
    location: { latitude: 23.8496, longitude: 72.1266 },
    videoId: "S6SyNu0mT_Y",
    bestTimeToVisit: "October to March",
    thingsToSee: ["Rani ki Vav", "Patan Patola Museum", "Hindu Temples", "Silk Weaving"],
    bookingInfo: {
      priceRange: "₹20 - ₹500",
      availableDates: "All year",
      ticketTypes: [
        { name: "Stepwell Entry", price: 20 },
        { name: "Museum Entry", price: 100 }
      ]
    }
  },
  {
    id: "manali",
    name: "Manali",
    state: "Himachal Pradesh",
    description: "A popular hill station in the Kullu Valley, known for trout streams, apple orchards and snow-capped mountains.",
    shortDescription: "Mountain retreat for adventure and relaxation.",
    imageUrl: "/images/manali.jpg",
    location: { latitude: 32.2396, longitude: 77.1887 },
    videoId: "Qipxi1Qn8iE",
    bestTimeToVisit: "October to February",
    thingsToSee: ["Hadimba Temple", "Solang Valley", "Rohtang Pass", "Old Manali"],
    bookingInfo: {
      priceRange: "₹0 - ₹1000",
      availableDates: "All year",
      ticketTypes: [
        { name: "Solang Ropeway", price: 600 },
        { name: "Rohtang Permit", price: 1000 }
      ]
    }
  },
  {
    id: "araku-valley",
    name: "Araku Valley",
    state: "Andhra Pradesh",
    description: "A picturesque hill station in the Eastern Ghats, Araku Valley is known for its coffee plantations, waterfalls, and tribal culture.",
    shortDescription: "Scenic hill station with coffee estates and waterfalls.",
    imageUrl: "/images/araku.jpg",
    location: { latitude: 18.3270, longitude: 82.8777 },
    videoId: "Aa48X9bO1Ho",
    bestTimeToVisit: "October to March",
    thingsToSee: ["Borra Caves", "Coffee Museum", "Katiki Waterfalls", "Tribal Museum"],
    bookingInfo: {
      priceRange: "₹50 - ₹500",
      availableDates: "All year",
      ticketTypes: [
        { name: "Train Ride (Vizag to Araku)", price: 300 },
        { name: "Cave Entry", price: 50 }
      ]
    }
  },
  {
    id: "ahobilam",
    name: "Ahobilam",
    state: "Andhra Pradesh",
    description: "A sacred site dedicated to Lord Narasimha, located in the Nallamala Hills, known for its temples and scenic treks.",
    shortDescription: "Spiritual and trekking destination in forested hills.",
    imageUrl: "/images/ahobilam.jpg",
    location: { latitude: 15.1371, longitude: 78.6436 },
    videoId: "J-qLJDtPpy4",
    bestTimeToVisit: "November to February",
    thingsToSee: ["Upper Ahobilam", "Lower Ahobilam", "Ugra Sthambam", "Malola Temple"],
    bookingInfo: {
      priceRange: "Free - ₹200",
      availableDates: "All year",
      ticketTypes: [
        { name: "Temple Entry", price: 0 },
        { name: "Trekking Guide", price: 200 }
      ]
    }
  },
  {
    id: "srikalahasti",
    name: "Srikalahasti",
    state: "Andhra Pradesh",
    description: "A prominent Shiva temple town near Tirupati, known for Rahu-Ketu Pooja and unique Vayu Linga.",
    shortDescription: "Spiritual hub near Tirupati famous for Rahu-Ketu dosha remedies.",
    imageUrl: "/images/srikalahasti.jpg",
    location: { latitude: 13.7498, longitude: 79.6995 },
    videoId: "OuI5ti4WIAw",
    bestTimeToVisit: "October to March",
    thingsToSee: ["Srikalahasti Temple", "Veyilingala Kona Falls", "Temple Car Street"],
    bookingInfo: {
      priceRange: "₹50 - ₹1500",
      availableDates: "All year",
      ticketTypes: [
        { name: "Temple Entry", price: 50 },
        { name: "Rahu-Ketu Pooja", price: 1500 }
      ]
    }
  },
  {
    id: "yadagirigutta",
    name: "Yadagirigutta",
    state: "Telangana",
    description: "Known as Yadadri, this hill temple dedicated to Lord Narasimha has been newly renovated into a grand architectural marvel.",
    shortDescription: "Sacred hill temple near Hyderabad recently revamped.",
    imageUrl: "/images/yadadri.jpg",
    location: { latitude: 17.5711, longitude: 78.9445 },
    videoId: "g_NDF-sSsPA",
    bestTimeToVisit: "October to March",
    thingsToSee: ["Main Temple", "Queue Complex", "Pushkarini", "Hill Views"],
    bookingInfo: {
      priceRange: "₹0 - ₹500",
      availableDates: "All year",
      ticketTypes: [
        { name: "Darshan Ticket", price: 100 },
        { name: "Special Entry", price: 300 }
      ]
    }
  },
  {
    id: "bhadrachalam",
    name: "Bhadrachalam",
    state: "Telangana",
    description: "Located on the banks of Godavari, this town is famous for the grand temple of Lord Rama and spiritual atmosphere.",
    shortDescription: "Holy riverside town devoted to Lord Rama.",
    imageUrl: "/images/bhadrachalam.jpg",
    location: { latitude: 17.6686, longitude: 80.8880 },
    videoId: "AUf7l_dyQTk&",
    bestTimeToVisit: "November to March",
    thingsToSee: ["Bhadrachalam Temple", "River Godavari", "Parnasala", "Temple Street"],
    bookingInfo: {
      priceRange: "₹50 - ₹300",
      availableDates: "All year",
      ticketTypes: [
        { name: "Temple Entry", price: 50 },
        { name: "VIP Darshan", price: 300 }
      ]
    }
  },
  {
    id: "papikondalu",
    name: "Papikondalu",
    state: "Andhra Pradesh",
    description: "A stunning range of hills and river gorge along the Godavari, best experienced via a scenic boat journey.",
    shortDescription: "Gorgeous Godavari gorge & hill boat trip.",
    imageUrl: "/images/papikondalu.jpg",
    location: { latitude: 17.0333, longitude: 81.7500 },
    videoId: "HymTCjEyE0k",
    bestTimeToVisit: "October to March",
    thingsToSee: [
      "Godavari River Gorge (Papi Hills)",
      "Gandi Pochamma Temple",
      "Perantapalli Village",
      "Jammalapuram Temple",
      "Kolluru Bamboo Huts"
    ],
    bookingInfo: {
      priceRange: "₹500 - ₹1500",
      availableDates: "October to March",
      ticketTypes: [
        { name: "Boat Ride (One-day)", price: 500 },
        { name: "Boat + Camping Package", price: 1500 }
      ]
    }
  },
  {
    id: "warangal",
    name: "Warangal",
    state: "Telangana",
    description: "Warangal was once the capital of the Kakatiya dynasty and is home to ancient temples, forts, and a rich cultural heritage.",
    shortDescription: "Historic city known for the Kakatiya dynasty's architectural marvels.",
    imageUrl: "/images/warangal.jpg",
    location: { latitude: 17.9784, longitude: 79.5941 },
    videoId: "ETpLjooo248",
    bestTimeToVisit: "October to March",
    thingsToSee: ["Warangal Fort", "Thousand Pillar Temple", "Bhadrakali Temple", "Ramappa Temple"],
    bookingInfo: {
      priceRange: "₹20 - ₹200",
      availableDates: "All year",
      ticketTypes: [
        { name: "Monument Entry", price: 50 },
        { name: "Full Day Tour", price: 200 }
      ]
    }
  },
  {
    id: "nagarjuna-sagar",
    name: "Nagarjuna Sagar",
    state: "Telangana",
    description: "Home to one of the world's largest masonry dams, Nagarjuna Sagar is a scenic destination with historical Buddhist significance.",
    shortDescription: "Massive dam and serene getaway with Buddhist island site.",
    imageUrl: "/images/nagarjuna_sagar.jpg",
    location: { latitude: 16.5667, longitude: 79.3167 },
    videoId: "cVeZIXgF5RY",
    bestTimeToVisit: "October to February",
    thingsToSee: ["Nagarjuna Sagar Dam", "Ethipothala Waterfalls", "Buddhist Museum", "Nagarjunakonda"],
    bookingInfo: {
      priceRange: "₹30 - ₹150",
      availableDates: "All year",
      ticketTypes: [
        { name: "Boat Ride to Nagarjunakonda", price: 150 },
        { name: "Dam View Point Entry", price: 30 }
      ]
    }
  },
  {
    id: "lepakshi",
    name: "Lepakshi",
    state: "Andhra Pradesh",
    description: "A culturally rich village known for the hanging pillar, Veerabhadra temple, and intricate Vijayanagara architecture.",
    shortDescription: "Temple town with mysterious architecture and history.",
    imageUrl: "/images/lepakshi.jpg",
    location: { latitude: 13.8050, longitude: 77.6084 },
    videoId: "qyiPJ0Orsk0",
    bestTimeToVisit: "October to February",
    thingsToSee: ["Veerabhadra Temple", "Hanging Pillar", "Nandi Statue", "Murals"],
    bookingInfo: {
      priceRange: "Free - ₹100",
      availableDates: "All year",
      ticketTypes: [
        { name: "Temple Entry", price: 0 },
        { name: "Guided Tour", price: 100 }
      ]
    }
  },
  {
    id: "belum-caves",
    name: "Belum Caves",
    state: "Andhra Pradesh",
    description: "Belum Caves are the second longest caves in India and are known for their stalactite and stalagmite formations.",
    shortDescription: "India’s longest accessible caves with underground pathways.",
    imageUrl: "/images/belum_caves.jpg",
    location: { latitude: 15.1000, longitude: 78.1167 },
    videoId: "TabPdG_sqiw",
    bestTimeToVisit: "November to February",
    thingsToSee: ["Stalactites & Stalagmites", "Meditation Hall", "Pathala Ganga", "Banyan Tree Hall"],
    bookingInfo: {
      priceRange: "₹50 - ₹100",
      availableDates: "All year",
      ticketTypes: [
        { name: "Cave Entry (Adult)", price: 60 },
        { name: "Entry (Child)", price: 40 }
      ]
    }
  },
  {
    id: "tirupati",
    name: "Tirupati",
    state: "Andhra Pradesh",
    description: "Home to the Tirumala Venkateswara Temple, one of the richest and most visited religious shrines in the world.",
    shortDescription: "Famous for the Tirumala Venkateswara Temple.",
    imageUrl: "/images/tirupati.jpg",
    location: { latitude: 13.6288, longitude: 79.4192 },
    videoId: "-Dqp_V1yh0c",
    bestTimeToVisit: "September to February",
    thingsToSee: ["Tirumala Temple", "Akasaganga Teertham", "Srivari Museum"],
    bookingInfo: {
      priceRange: "Free - ₹300",
      availableDates: "All year round",
      ticketTypes: [
        { name: "Darshan Ticket", price: 300 },
        { name: "Free Darshan", price: 0 }
      ]
    }
  },
  {
    id: "srisailam",
    name: "Srisailam",
    state: "Andhra Pradesh",
    description: "A prominent Shaivite pilgrimage site with one of the twelve Jyotirlinga temples dedicated to Lord Shiva.",
    shortDescription: "Sacred hill temple dedicated to Lord Shiva.",
    imageUrl: "/images/srisailam.jpg",
    location: { latitude: 16.0728, longitude: 78.8686 },
    videoId: "JF12QLtNVmE",
    bestTimeToVisit: "October to March",
    thingsToSee: ["Mallikarjuna Temple", "Srisailam Dam", "Pathala Ganga"],
    bookingInfo: {
      priceRange: "₹100 - ₹500",
      availableDates: "All year round",
      ticketTypes: [
        { name: "Darshan", price: 100 },
        { name: "Abhishekam", price: 500 }
      ]
    }
  },
  {
    id: "tiruvannamalai",
    name: "Tiruvannamalai (Arunachalam)",
    state: "Tamil Nadu",
    description: "Spiritual town famous for Arunachaleswarar Temple and the sacred Arunachala hill, center for Advaita Vedanta teachings.",
    shortDescription: "Home to the grand Arunachaleswarar Shiva temple.",
    imageUrl: "/images/arunachalam.jpg",
    location: { latitude: 12.2253, longitude: 79.0747 },
    videoId: "WXDuhnVqEPs",
    bestTimeToVisit: "November to March",
    thingsToSee: ["Arunachaleswarar Temple", "Girivalam Path", "Ramana Ashram"],
    bookingInfo: {
      priceRange: "Free - ₹500",
      availableDates: "All year round",
      ticketTypes: [
        { name: "Darshan", price: 0 },
        { name: "Special Pooja", price: 500 }
      ]
    }
  },
  {
    id: "mahanandi",
    name: "Mahanandi",
    state: "Andhra Pradesh",
    description: "A serene temple town on the banks of the Mahanadi River, renowned for its ancient cave temple and aquamarine spring water tanks.",
    shortDescription: "Holy temple with refreshing water tanks.",
    imageUrl: "/images/mahanandi.jpg",
    location: { latitude: 15.5400, longitude: 77.4700 },
    videoId: "AQemx772E58",
    bestTimeToVisit: "October to March",
    thingsToSee: ["Mahanandi Temple", "Sacred Tanks", "Rock-cut Caves"],
    bookingInfo: {
      priceRange: "Free - ₹100",
      availableDates: "All year round",
      ticketTypes: [
        { name: "Darshan", price: 0 },
        { name: "Water Tank Visit", price: 100 }
      ]
    }
  },
  {
    id: "kanipakam",
    name: "Kanipakam",
    state: "Andhra Pradesh",
    description: "Ancient temple dedicated to Lord Ganesha, famous for its self-manifested growing idol submerged in water.",
    shortDescription: "Temple featuring a self-growing Ganesh idol.",
    imageUrl: "/images/kanipakam.jpg",
    location: { latitude: 13.3539, longitude: 79.1984 },
    videoId: "AyVw63X1Ddg",
    bestTimeToVisit: "October to March",
    thingsToSee: ["Kanipakam Temple", "Sacred Spring", "Temple Tank"],
    bookingInfo: {
      priceRange: "Free - ₹50",
      availableDates: "All year round",
      ticketTypes: [
        { name: "Darshan", price: 0 },
        { name: "Abhishekam", price: 50 }
      ]
    }
  },
  {
    id: "ramappa-temple",
    name: "Ramappa Temple",
    state: "Telangana",
    description: "13th-century temple built under the Kakatiya dynasty, recognized for its floating bricks and intricate sculptures, now a UNESCO World Heritage site.",
    shortDescription: "Kakatiya temple with floating bricks & superb carvings.",
    imageUrl: "/images/ramappa.jpg",
    location: { latitude: 17.9250, longitude: 79.8050 },
    videoId: "3LqFmr9jr-g",
    bestTimeToVisit: "October to March",
    thingsToSee: ["Main Temple", "Sculptured Pillars", "Museum", "Temple Complex"],
    bookingInfo: {
      priceRange: "₹20 - ₹300",
      availableDates: "All year round",
      ticketTypes: [
        { name: "Indian Entry", price: 20 },
        { name: "Foreign Entry", price: 300 }
      ]
    }
  },
  {
    id: "pagidipalli",
    name: "Sri Yaganti Uma Maheswara Temple",
    state: "Andhra Pradesh",
    description: "Known for its self-manifested idols and the floating Lingam, dedicated to Lord Shiva and Parvati.",
    shortDescription: "Temple of floating lingam in Kurnool district.",
    imageUrl: "/images/yaganti.jpg",
    location: { latitude: 15.2194, longitude: 78.1542 },
    videoId: "uJWaP_xuHx0",
    bestTimeToVisit: "October to March",
    thingsToSee: ["Floating Lingam", "Temple Caves", "Pilgrim Walkways"],
    bookingInfo: {
      priceRange: "Free",
      availableDates: "All year round",
      ticketTypes: [
        { name: "Darshan", price: 0 }
      ]
    }
  },
  {
    id: "simhachalam",
    name: "Simhachalam Temple",
    state: "Andhra Pradesh",
    description: "Located near Visakhapatnam, Simhachalam is a Hindu temple dedicated to Lord Narasimha. The architecture is a blend of Orissan and Chalukyan styles.",
    shortDescription: "Ancient Narasimha temple with unique architecture.",
    imageUrl: "/images/simhachalam.jpg",
    location: { latitude: 17.7825, longitude: 83.2917 },
    videoId: "zHZLAEcikB4",
    bestTimeToVisit: "October to February",
    thingsToSee: ["Simhachalam Temple", "Narasimha Idol", "Festivals"],
    bookingInfo: {
      priceRange: "Free - ₹200",
      availableDates: "All year round",
      ticketTypes: [
        { name: "Darshan", price: 0 },
        { name: "Special Entry", price: 200 }
      ]
    }
  },
  {
    id: "maredumilli",
    name: "Maredumilli Forest",
    state: "Andhra Pradesh",
    description: "Maredumilli is a serene forest destination known for waterfalls, bamboo huts, and rich tribal culture. It's a hidden eco-tourism gem in the Eastern Ghats.",
    shortDescription: "Eco-tourism hub with waterfalls, streams, and tribal experiences.",
    imageUrl: "/images/maredumilli.jpg",
    location: { latitude: 17.5695, longitude: 81.6662 },
    videoId: "R5P_40sSCQU",
    bestTimeToVisit: "October to March",
    thingsToSee: ["Amruthadhara Waterfalls", "Jalatarangini Falls", "Tribal Cottages", "Nature Trails"],
    bookingInfo: {
      priceRange: "₹50 - ₹2000",
      availableDates: "All year round",
      ticketTypes: [
        { name: "Forest Entry", price: 50 },
        { name: "Eco Stay", price: 2000 }
      ]
    }
  },
  {
    id: "bogatha-waterfalls",
    name: "Bogatha Waterfalls",
    state: "Telangana",
    description: "Located in the Mulugu district, Bogatha is one of the largest waterfalls in Telangana. It is accessible via a short forest trek and is surrounded by lush greenery.",
    shortDescription: "Stunning wide waterfall nestled in dense forest.",
    imageUrl: "/images/bogatha.jpg",
    location: { latitude: 18.1437, longitude: 80.2794 },
    videoId: "kc6FdejxlFU",
    bestTimeToVisit: "July to December",
    thingsToSee: ["Main Waterfall", "Trekking Trail", "Bridge Viewpoint"],
    bookingInfo: {
      priceRange: "₹30 - ₹100",
      availableDates: "Monsoon & post-monsoon",
      ticketTypes: [
        { name: "Entry Fee", price: 30 }
      ]
    }
  },
  {
    id: "medak-fort",
    name: "Medak Fort",
    state: "Telangana",
    description: "Built by the Kakatiya kings, Medak Fort is a massive structure that offers historical ruins, panoramic views, and colonial-era cannons.",
    shortDescription: "Ancient hilltop fort with historical ruins and views.",
    imageUrl: "/images/medakfort.jpg",
    location: { latitude: 18.0500, longitude: 78.2606 },
    videoId: "RKNPkiZcnBM",
    bestTimeToVisit: "October to February",
    thingsToSee: ["Fort Ruins", "Panoramic View", "Cannon", "Medak Church Nearby"],
    bookingInfo: {
      priceRange: "₹20 - ₹50",
      availableDates: "All year round",
      ticketTypes: [
        { name: "Entry", price: 20 }
      ]
    }
  },
  {
    id: "kakinada-beach",
    name: "Kakinada Beach",
    state: "Andhra Pradesh",
    description: "Kakinada Beach is a clean, lesser-known beach destination in East Godavari district. It's famous for its seafood, boating, and the nearby Coringa Wildlife Sanctuary.",
    shortDescription: "Peaceful beach with seafood, boating, and nearby mangrove sanctuary.",
    imageUrl: "/images/kakinada.jpg",
    location: { latitude: 16.9891, longitude: 82.2475 },
    videoId: "BY-r6FcHiOA",
    bestTimeToVisit: "November to February",
    thingsToSee: [
      "Uppada Beach",
      "Coringa Wildlife Sanctuary",
      "Haritha Beach Resort"
    ],
    bookingInfo: {
      priceRange: "Free - ₹1500",
      availableDates: "All year round",
      ticketTypes: [
        { name: "Beach Resort Day Pass", price: 200 },
        { name: "Coringa Entry", price: 20 }
      ]
    }
  },
  {
    id: "rajahmundry",
    name: "Rajahmundry",
    state: "Andhra Pradesh",
    description: "Rajahmundry is a cultural city on the banks of the Godavari River, known for boat rides, Pushkaralu, and poetic legacy. It’s often called the 'Cultural Capital of Andhra'.",
    shortDescription: "River city famous for its Godavari bridge, temples, and boat cruises.",
    imageUrl: "/images/rajahmundry.jpg",
    location: { latitude: 17.0046, longitude: 81.7833 },
    videoId: "S1l3xkpyWUw",
    bestTimeToVisit: "October to February",
    thingsToSee: [
      "Godavari River Boating",
      "Iskcon Temple",
      "Dowleswaram Barrage",
      "Pushkar Ghat"
    ],
    bookingInfo: {
      priceRange: "₹100 - ₹3000",
      availableDates: "All year round",
      ticketTypes: [
        { name: "Boat Ride", price: 300 },
        { name: "Godavari Cruise", price: 2000 }
      ]
    }
  },
  {
    id: "suryalanka",
    name: "Suryalanka Beach",
    state: "Andhra Pradesh",
    description: "Located near Bapatla, Suryalanka Beach is a peaceful and uncrowded beach offering stunning sunsets and Haritha Resort stay by APTDC.",
    shortDescription: "Tranquil beach with seaside stay options and gentle waves.",
    imageUrl: "/images/suryalanka.jpg",
    location: { latitude: 15.8498, longitude: 80.4600 },
    videoId: "yO7tJHI8LLg",
    bestTimeToVisit: "October to February",
    thingsToSee: [
      "Beachside Sunset",
      "Haritha Beach Resort",
      "Shallow Swimming Zones"
    ],
    bookingInfo: {
      priceRange: "₹500 - ₹2000",
      availableDates: "All year round",
      ticketTypes: [
        { name: "Beach Access", price: 0 },
        { name: "Resort Stay", price: 1500 }
      ]
    }
  },
  {
    id: "hyderabad",
    name: "Hyderabad",
    state: "Telangana",
    description: "Hyderabad, the capital of Telangana, is a vibrant blend of history and modernity. Known for its Mughal architecture, IT industry, and world-famous biryani, the city offers everything from royal palaces to tech hubs. The iconic Charminar, Golconda Fort, and Hussain Sagar Lake are among its must-visit landmarks.",
    shortDescription: "City of Pearls, famous for its rich heritage, Charminar, biryani, and tech culture.",
    imageUrl: "/images/hyderabad.jpg",
    location: {
      latitude: 17.3850,
      longitude: 78.4867
    },
    videoId: "uKqry2YItz8",
    bestTimeToVisit: "October to February",
    thingsToSee: [
      "Charminar",
      "Golconda Fort",
      "Ramoji Film City",
      "Hussain Sagar Lake",
      "Salar Jung Museum",
      "Chowmahalla Palace",
      "Birla Planetarium",
      "Laad Bazaar"
    ],
    bookingInfo: {
      priceRange: "₹100 - ₹1500",
      availableDates: "All year round",
      ticketTypes: [
        {
          name: "City Heritage Tour",
          price: 1200
        },
        {
          name: "Golconda + Charminar Combo Pass",
          price: 500
        },
        {
          name: "Ramoji Film City Entry",
          price: 1350
        }
      ]
    }
  },
  {
    id: "adiyogi",
    name: "Adiyogi Shiva Statue",
    state: "Tamil Nadu",
    description: "The Adiyogi Shiva Statue, located at the Isha Yoga Center near Coimbatore, is a 112-foot steel bust of Lord Shiva, recognized by the Guinness World Records. It symbolizes inner well-being and yogic wisdom, attracting spiritual seekers and tourists alike.",
    shortDescription: "112-ft statue of Lord Shiva symbolizing yoga and spiritual awakening.",
    imageUrl: "/images/adiyogi.jpg",
    location: {
      latitude: 11.0606,
      longitude: 76.7399
    },
    videoId: "yImOLtLnQXY",
    bestTimeToVisit: "October to March",
    thingsToSee: [
      "Adiyogi Statue",
      "Isha Yoga Center",
      "Dhyanalinga Temple",
      "Nandi Statue"
    ],
    bookingInfo: {
      priceRange: "Free - ₹500",
      availableDates: "All year round",
      ticketTypes: [
        {
          name: "General Visit",
          price: 0
        },
        {
          name: "Guided Meditation Tour",
          price: 300
        },
        {
          name: "Inner Engineering Retreat",
          price: 500
        }
      ]
    }
  },
  {
    id: "omkareshwar",
    name: "Omkareshwar Temple",
    state: "Madhya Pradesh",
    description: "An important pilgrimage island in the Narmada River, with a Jyotirlinga temple dedicated to Lord Shiva on the holy 'ॐ' shaped island.",
    shortDescription: "Shiva Jyotirlinga temple on the Om‑shaped Narmada island.",
    imageUrl: "/images/omkareshwar.jpg",
    location: { latitude: 22.2390, longitude: 76.1911 },
    videoId: "VhXMQ_dpmis",
    bestTimeToVisit: "October to March",
    thingsToSee: [
      "Omkareshwar Jyotirlinga",
      "Mamleshwar Temple",
      "River Narmada Ghats",
      "Island Boat Ride"
    ],
    bookingInfo: {
      priceRange: "₹0 - ₹200",
      availableDates: "All year",
      ticketTypes: [
        { name: "Darshan", price: 0 },
        { name: "Boat Trip", price: 200 }
      ]
    }
  },
  {
    id: "meenakshi-temple-gulabi",
    name: "Gulabi Meenakshi Temple",
    state: "Tamil Nadu",
    description: "Not to be confused with the famed Madurai temple, this lesser-known 'Pink Meenakshi Temple' in Coimbatore is dedicated to Goddess Meenakshi in a stunning pink marble structure.",
    shortDescription: "Beautiful pink marble Meenakshi temple in Coimbatore.",
    imageUrl: "/images/gulabi_meenakshi.jpg",
    location: { latitude: 10.9350, longitude: 77.0360 },
    videoId: "tE0TkzhSLJc",
    bestTimeToVisit: "October to March",
    thingsToSee: [
      "Pink Marble Architecture",
      "Meenakshi Shrine",
      "Temple Festivals",
      "Peaceful Ambience"
    ],
    bookingInfo: {
      priceRange: "Free",
      availableDates: "All year",
      ticketTypes: [
        { name: "Darshan", price: 0 }
      ]
    }
  },
  {
    id: "saarjilla-falls",
    name: "Saarjilla Waterfalls",
    state: "Chhattisgarh",
    description: "A hidden gem in Bastar region—tall cascades amidst dense forest, local tribal culture, and serene jungle vibes.",
    shortDescription: "Off-beat waterfall in Bastar’s tribal forests.",
    imageUrl: "/images/saarjilla_falls.jpg",
    location: { latitude: 18.3500, longitude: 81.9000 },
    videoId: "ogwk4r5aYNg",
    bestTimeToVisit: "July to October",
    thingsToSee: ["Upper Falls", "Rock Pools", "Local Tribal Villages"],
    bookingInfo: {
      priceRange: "₹50 - ₹200",
      availableDates: "All year",
      ticketTypes: [
        { name: "Entry Fee", price: 50 }
      ]
    }
  },
  {
    id: "dhanushkodi",
    name: "Dhanushkodi",
    state: "Tamil Nadu",
    description: "A hauntingly beautiful ghost‑town on India’s southeastern tip—destroyed by the 1964 cyclone—featuring an abandoned railway station, jetty ruins, and views of the Ram Setu shoals.",
    shortDescription: "Ghost‑town ruins & Ram Setu views by the sea.",
    imageUrl: "/images/dhanushkodi.jpg",
    location: { latitude: 9.1900, longitude: 79.1090 },
    videoId: "QI5x8PPAzx8",
    bestTimeToVisit: "October to February",
    thingsToSee: ["Railway Station Ruins", "Abandoned Jetty", "Ram Setu Viewpoint"],
    bookingInfo: {
      priceRange: "Free - ₹150",
      availableDates: "All year",
      ticketTypes: [
        { name: "Entry/Beach Access", price: 0 },
        { name: "Boat Ride to Ram Setu View", price: 150 }
      ]
    }
  },
  {
    id: "lonar-crater",
    name: "Lonar Crater Lake",
    state: "Maharashtra",
    description: "A 52,000-year-old lake formed by a meteorite impact, surrounded by unique flora, temples, and basalt rock formations, making it a geo-heritage site.",
    shortDescription: "Meteorite-formed lake with ancient temples.",
    imageUrl: "/images/lonar_crater.jpg",
    location: { latitude: 19.9833, longitude: 76.5167 },
    videoId: "9QiUM0mb3UU",
    bestTimeToVisit: "October to March",
    thingsToSee: ["Crater Lake", "Daitya Sudhan Temple", "Bird Watching"],
    bookingInfo: {
      priceRange: "₹20 - ₹500",
      availableDates: "All year",
      ticketTypes: [
        { name: "Lake Entry", price: 20 },
        { name: "Guided Nature Walk", price: 200 }
      ]
    }
  },

  {
    id: "tso-moriri",
    name: "Tso Moriri Lake",
    state: "Ladakh",
    description: "A high-altitude lake in Changthang Plateau, Tso Moriri is less commercialized than Pangong and is a UNESCO designated Wetland Reserve.",
    shortDescription: "Remote high-altitude lake surrounded by mountains.",
    imageUrl: "/images/tso_moriri.jpg",
    location: { latitude: 32.9956, longitude: 78.2514 },
    videoId: "o8iKiWqMERw",
    bestTimeToVisit: "May to September",
    thingsToSee: ["Lake View", "Changpa Nomads", "Wildlife Watching"],
    bookingInfo: {
      priceRange: "₹0 - ₹1000",
      availableDates: "May to September",
      ticketTypes: [
        { name: "Permit Access", price: 0 },
        { name: "Homestay", price: 1000 }
      ]
    }
  },
  {
    id: "sandakphu",
    name: "Sandakphu",
    state: "West Bengal",
    description: "At 11,930 ft, Sandakphu is the highest point in West Bengal and offers panoramic views of Everest, Kanchenjunga, Lhotse, and Makalu during the famous trek.",
    shortDescription: "Trekking destination with views of 4 of the 5 tallest peaks.",
    imageUrl: "/images/sandakphu.jpg",
    location: { latitude: 27.1167, longitude: 88.0000 },
    videoId: "VF8zYb4qM_U",
    bestTimeToVisit: "April to May & October to December",
    thingsToSee: ["Sleeping Buddha View", "Himalayan Flora", "Trekking"],
    bookingInfo: {
      priceRange: "₹500 - ₹5000",
      availableDates: "April–May & Oct–Dec",
      ticketTypes: [
        { name: "Trekking Package", price: 4000 },
        { name: "Guide Fee", price: 1000 }
      ]
    }
  },
  {
    id: "bhimbetka",
    name: "Bhimbetka Rock Shelters",
    state: "Madhya Pradesh",
    description: "A UNESCO site with prehistoric cave paintings dating back over 30,000 years, showcasing early human life and art in India.",
    shortDescription: "Ancient caves with 30,000-year-old rock art.",
    imageUrl: "/images/bhimbetka.jpg",
    location: { latitude: 22.9383, longitude: 77.6115 },
    videoId: "g94JIwcxgco",
    bestTimeToVisit: "October to March",
    thingsToSee: ["Cave Paintings", "Rock Formations", "Archaeology"],
    bookingInfo: {
      priceRange: "₹25 - ₹250",
      availableDates: "All year",
      ticketTypes: [
        { name: "Entry Ticket", price: 25 },
        { name: "Guide Service", price: 200 }
      ]
    }
  },
  {
    id: "bodh-gaya",
    name: "Bodh Gaya",
    state: "Bihar",
    description: "Site where Buddha attained enlightenment under the Bodhi Tree; includes the majestic Mahabodhi Temple and Great Buddha Statue.",
    shortDescription: "UNESCO World Heritage site and a revered Buddhist pilgrimage center.",
    imageUrl: "/images/bodhgaya.jpg",
    location: { latitude: 24.6950, longitude: 84.9925 },
    videoId: "_AZgz_-Bi7A",
    bestTimeToVisit: "October to March",
    thingsToSee: ["Mahabodhi Temple", "Bodhi Tree", "Great Buddha Statue", "Thai & Japanese Monasteries"],
    bookingInfo: {
      priceRange: "Free entry; guided tours ₹200–₹500",
      availableDates: "All year",
      ticketTypes: [{ name: "Guided Tour", price: 300 }]
    }
  },
  {
    id: "nalanda",
    name: "Nalanda University Ruins",
    state: "Bihar",
    description: "Ancient seat of learning founded in the 5th century CE; its ruins include monasteries, temples and a museum.",
    shortDescription: "UNESCO‑recognized archaeological site of one of the oldest universities in the world.",
    imageUrl: "/images/nalanda.jpg",
    location: { latitude: 25.1369, longitude: 85.4432 },
    videoId: "O67m2k70JLA",
    bestTimeToVisit: "October to March",
    thingsToSee: ["Nalanda ruins", "Nalanda Archaeological Museum", "Stupas", "Ancient monasteries"],
    bookingInfo: {
      priceRange: "₹20–₹500",
      availableDates: "All year",
      ticketTypes: [{ name: "Indian", price: 20 }, { name: "Foreigner", price: 500 }]
    }
  },
  {
    id: "kurukshetra",
    name: "Kurukshetra",
    state: "Haryana",
    description: "Ancient battlefield and birthplace of the Bhagavad Gita; visit Brahma Sarovar, Jyotisar, and historic temples.",
    shortDescription: "Historical and spiritual site linked to the Mahabharata and the Gita.",
    imageUrl: "/images/kurukshetra.jpg",
    location: { latitude: 29.9699, longitude: 76.8783 },
    videoId: "6J8cOBo9YFo",
    bestTimeToVisit: "October to March",
    thingsToSee: ["Brahma Sarovar", "Jyotisar", "Kurukshetra Panorama", "Sheikh Chilli Tomb"],
    bookingInfo: {
      priceRange: "Free–₹100",
      availableDates: "All year",
      ticketTypes: [{ name: "Entry", price: 20 }]
    }
  },
  {
    id: "ranchi-waterfalls",
    name: "Ranchi Waterfalls & Pahari Mandir",
    state: "Jharkhand",
    description: "Experience the beauty of Ranchi's famed waterfalls—Dassam, Hundru, Jonha—and visit Pahari Mandir atop the hill for panoramic city views.",
    shortDescription: "A scenic combo of cascading waterfalls and a hilltop temple in Ranchi.",
    imageUrl: "/images/ranchi_waterfalls.jpg",
    location: { latitude: 23.3560, longitude: 85.3340 },
    videoId: "ys9PO7a-jyY",
    bestTimeToVisit: "October to March",
    thingsToSee: ["Dassam Falls", "Hundru Falls", "Jonha Falls", "Pahari Mandir"],
    bookingInfo: {
      priceRange: "Free–₹50",
      availableDates: "All year",
      ticketTypes: [{ name: "Entry", price: 0 }]
    }
  },
  {
    id: "dal-lake",
    name: "Dal Lake & Mughal Gardens",
    state: "Jammu & Kashmir",
    description: "Shikara rides on iconic Dal Lake with floating gardens and houseboats. Nearby Mughal Gardens—Shalimar Bagh, Nishat Bagh—showcase timeless landscaping.",
    shortDescription: "Kashmir’s iconic shikara rides & heritage gardens.",
    imageUrl: "/images/dal_lake.jpg",
    location: { latitude: 34.0837, longitude: 74.7973 },
    videoId: "-jrFyE3HLFQ",
    bestTimeToVisit: "March to October",
    thingsToSee: ["Shikara boat ride", "Houseboats", "Mughal Gardens"],
    bookingInfo: {
      priceRange: "Free–₹500",
      availableDates: "All year",
      ticketTypes: [{ name: "Boat Ride", price: 300 }]
    }
  },
]