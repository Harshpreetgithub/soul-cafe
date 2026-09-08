export const MENU_TABS = [
  { id: "coffee", label: "Coffee & Drinks", icon: "coffee" },
  { id: "panouzzo", label: "Panouzzos & Sandwiches", icon: "sandwich" },
  { id: "sweet", label: "Smoothies & Desserts", icon: "ice-cream-cone" },
];

export const MENU_ITEMS = {
  coffee: [
    {
      name: "Cappuccino",
      desc: "Artisanal espresso with steamed milk foam",
      price: 195,
      veg: true,
      img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Espresso",
      desc: "Double shot, rich crema, served neat",
      price: 195,
      veg: true,
      img: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Cold Brew",
      desc: "Slow-steeped 18 hours, served over ice",
      price: 225,
      veg: true,
      img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=800&auto=format&fit=crop",
    },
  ],
  panouzzo: [
    {
      name: "Funghi Misti Panouzzo",
      desc: "Wild mushrooms, wilted spinach, bocconcini",
      price: 395,
      veg: true,
      img: "https://images.unsplash.com/photo-1550507992-eb63ffee0847?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Jain Garden Panouzzo",
      desc: "Bell peppers, zucchini, olive tapenade, no onion-garlic",
      price: 365,
      veg: true,
      jain: true,
      img: "https://images.unsplash.com/photo-1509722747041-616f39b57569?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Smoked Paneer Sandwich",
      desc: "Charred paneer, roasted pepper aioli, sourdough",
      price: 345,
      veg: true,
      img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=800&auto=format&fit=crop",
    },
  ],
  sweet: [
    {
      name: "Berry & Honey Smoothie",
      desc: "Fresh berries, yogurt, organic honey",
      price: 275,
      veg: true,
      img: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Salted Caramel Tart",
      desc: "Dark chocolate shell, house-made caramel",
      price: 245,
      veg: true,
      img: "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Mango Basil Smoothie",
      desc: "Alphonso mango, basil seeds, coconut milk",
      price: 265,
      veg: true,
      img: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?q=80&w=800&auto=format&fit=crop",
    },
  ],
};

// Real listing details pulled from the Google Maps profile.
// NOTE: only "closes 7pm" was visible on the listing at time of writing —
// confirm the full weekly hours and update below.
export const CAFE_INFO = {
  name: "Soul Cafe",
  rating: 4.4,
  reviews: 32,
  priceForTwo: "₹600–1,400",
  address: "Ground Floor, B 1/6, Ashok Vihar II, Pocket B 1, Phase 2, Ashok Vihar, New Delhi, Delhi 110052",
  phoneDisplay: "085879 02000",
  phoneE164: "+918587902000",
  hoursSummary: "Open Daily · Closes 7:00 PM",
  hoursNote: "Full weekly hours to be confirmed — update once verified.",
  lat: 28.6950907,
  lng: 77.1792194,
  mapsUrl:
    "https://www.google.com/maps/place/Soul+Cafe/@28.6950954,77.1766445,17z/data=!3m1!4b1!4m6!3m5!1s0x390d03895ba48ec5:0x68b1d738e3960fbf!8m2!3d28.6950907!4d77.1792194",
  swiggyUrl: "https://www.swiggy.com/city/delhi/soul-cafe-ashok-vihar-rest957179",
  zomatoUrl: "https://www.zomato.com/ncr/soul-cafe-ashok-vihar-phase-2-new-delhi/book",
  districtUrl: "https://www.district.in/dining/ncr/soul-cafe-ashok-vihar-phase-2-new-delhi/book?dineIn-st=%7Bavailability_slot_start_seconds%7D&ctx_covers=%7Bresources_party_size%7D&rwg_token=AE37R_gwGpjvORHC-juNYgvGyPTdupOkv9zPXEaLPo8bW2SpnNIBTLb48-A9PazAQIJODVmZ3fDJkFs-FrsHPkRBI7noHaEiXzXk0FznWLV8_OTf-l30A50%3D",
};
