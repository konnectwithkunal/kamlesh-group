// src/data/kamlesh-group-catalog.ts
// STANDALONE UNIFIED CATALOG - All 153 products in one file
// No imports needed!

export interface UnifiedProduct {
  id: string;
  model: string;
  name: string;
  category: string;
  subcategory: string;
  collection: "premium" | "economical";
  description: string;
  features: string[];
  useCases?: string[];
  specifications?: {
    height?: string;
    length?: string;
    width?: string;
    weight?: string;
    material?: string;
    thickness?: string;
    diameter?: string;
    capacity?: string;
    includes?: string;
  };
  variants: { color: string; finish?: string; image?: string }[];
  price?: number | string;
  ctnPacking?: string;
  customization: {
    logoPrinting: boolean;
    branding: boolean;
  };
  images: {
    main: string;
    lifestyle?: string;
    variants?: string[];
    packaging?: string;
  };
  tags: string[];
}

// ============================================
// ALL PRODUCTS - EMBEDDED DATA
// ============================================

export const kamleshGroupProducts: UnifiedProduct[] = [
  // ============================================
  // PREMIUM PRODUCTS (R-Series) - 37 products
  // ============================================
  
  // MOBILE STANDS
  {
    id: "R-1101", model: "R-1101", name: "Metal Mobile Stand",
    category: "Mobile Stands", subcategory: "Basic Stands", collection: "premium",
    description: "Premium metal mobile stand with universal compatibility for all mobiles and iPads.",
    features: ["Universal compatibility", "Built-in visiting card holder", "Mirror & Gold finish options"],
    useCases: ["Office", "Home", "Travel"],
    specifications: { height: "85 mm", length: "95 mm", width: "70 mm", weight: "120 gm", material: "CRC & SS" },
    variants: [{ color: "Black" }, { color: "Silver" }, { color: "Gold" }],
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80" },
    tags: ["mobile stand", "phone holder", "desk accessory", "premium"]
  },
  {
    id: "R-1102", model: "R-1102", name: "Metal Mobile Stand with Card Holder",
    category: "Mobile Stands", subcategory: "Card Holder Combo", collection: "premium",
    description: "Premium metal mobile stand with integrated card holder.",
    features: ["Universal compatibility", "Integrated card holder", "Mirror finish"],
    useCases: ["Office", "Banks", "Reception"],
    specifications: { height: "85 mm", length: "100 mm", width: "70 mm", weight: "135 gm", material: "CRC" },
    variants: [{ color: "Black" }, { color: "Silver" }],
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80" },
    tags: ["mobile stand", "card holder", "premium"]
  },
  {
    id: "R-1103", model: "R-1103", name: "Multi-Function Mobile Stand",
    category: "Mobile Stands", subcategory: "Multi-Function", collection: "premium",
    description: "Premium multi-function mobile stand with pen holder and card slot.",
    features: ["Pen holder", "Card slot", "Universal compatibility"],
    useCases: ["Office", "Banks"],
    specifications: { height: "90 mm", length: "100 mm", width: "75 mm", weight: "145 gm", material: "CRC & SS" },
    variants: [{ color: "Black" }, { color: "Silver" }, { color: "Gold" }],
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80" },
    tags: ["mobile stand", "pen holder", "multi-function", "premium"]
  },
  {
    id: "R-1104", model: "R-1104", name: "Double Side Mobile Stand",
    category: "Mobile Stands", subcategory: "Double Side", collection: "premium",
    description: "Premium double-sided metal mobile stand for holding two devices.",
    features: ["Double-sided", "Universal compatibility", "Compact design"],
    useCases: ["Office", "Conference Rooms"],
    specifications: { height: "85 mm", length: "95 mm", width: "70 mm", weight: "125 gm", material: "CRC" },
    variants: [{ color: "Black" }, { color: "Silver" }],
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80" },
    tags: ["mobile stand", "double side", "premium"]
  },
  {
    id: "R-1105", model: "R-1105", name: "Mobile Stand with Writing Pad",
    category: "Mobile Stands", subcategory: "Writing Pad Combo", collection: "premium",
    description: "Premium mobile stand with integrated writing pad holder.",
    features: ["Writing pad holder", "Universal compatibility"],
    useCases: ["Office", "Banks"],
    specifications: { height: "90 mm", length: "110 mm", width: "80 mm", weight: "160 gm", material: "CRC & SS" },
    variants: [{ color: "Black" }, { color: "Silver" }],
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80" },
    tags: ["mobile stand", "writing pad", "premium"]
  },
  {
    id: "R-1106", model: "R-1106", name: "Foldable Metal Mobile Stand",
    category: "Mobile Stands", subcategory: "Basic Stands", collection: "premium",
    description: "Premium foldable metal mobile stand. Compact and portable.",
    features: ["Foldable design", "Highly portable", "Universal compatibility"],
    useCases: ["Travel", "Office"],
    specifications: { height: "75 mm", length: "85 mm", width: "65 mm", weight: "95 gm", material: "CRC" },
    variants: [{ color: "Black" }, { color: "Silver" }],
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80" },
    tags: ["mobile stand", "foldable", "portable", "premium"]
  },
  {
    id: "R-1107", model: "R-1107", name: "Slim Metal Mobile Stand",
    category: "Mobile Stands", subcategory: "Basic Stands", collection: "premium",
    description: "Sleek and slim metal mobile stand with minimalist design.",
    features: ["Slim profile", "Modern aesthetics", "Universal compatibility"],
    useCases: ["Modern Office", "Home"],
    specifications: { height: "70 mm", length: "80 mm", width: "60 mm", weight: "85 gm", material: "CRC" },
    variants: [{ color: "Black" }, { color: "Silver" }, { color: "Rose Gold" }],
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80" },
    tags: ["mobile stand", "slim", "minimalist", "premium"]
  },
  {
    id: "R-1108", model: "R-1108", name: "iPad & Tablet Stand",
    category: "Mobile Stands", subcategory: "iPad Stands", collection: "premium",
    description: "Premium metal stand designed for iPads and tablets.",
    features: ["Designed for tablets", "Adjustable angle", "Heavy base"],
    useCases: ["Presentations", "Video Calls"],
    specifications: { height: "120 mm", length: "150 mm", width: "100 mm", weight: "280 gm", material: "CRC & SS" },
    variants: [{ color: "Black" }, { color: "Silver" }],
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80" },
    tags: ["ipad stand", "tablet stand", "premium"]
  },
  {
    id: "R-1111", model: "R-1111", name: "Adjustable Mobile Stand",
    category: "Mobile Stands", subcategory: "Adjustable Stands", collection: "premium",
    description: "Premium adjustable mobile stand with multiple viewing angles.",
    features: ["Multiple angles", "Adjustable height", "Universal compatibility"],
    useCases: ["Video Calls", "Content Viewing"],
    specifications: { height: "80-120 mm", length: "95 mm", width: "75 mm", weight: "150 gm", material: "CRC & SS" },
    variants: [{ color: "Black" }, { color: "Silver" }, { color: "Gold" }],
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80" },
    tags: ["mobile stand", "adjustable", "premium"]
  },
  {
    id: "R-1114", model: "R-1114", name: "Executive Mobile Stand",
    category: "Mobile Stands", subcategory: "Multi-Function", collection: "premium",
    description: "Executive-grade mobile stand with pen holder and card slot.",
    features: ["Executive design", "Pen holder", "Card slot"],
    useCases: ["Executive Office", "Corporate"],
    specifications: { height: "95 mm", length: "110 mm", width: "85 mm", weight: "180 gm", material: "CRC & SS" },
    variants: [{ color: "Black" }, { color: "Silver" }, { color: "Gold" }],
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80" },
    tags: ["mobile stand", "executive", "premium"]
  },
  {
    id: "R-1115", model: "R-1115", name: "Height Adjustable Mobile Stand",
    category: "Mobile Stands", subcategory: "Adjustable Stands", collection: "premium",
    description: "Height adjustable mobile stand for ergonomic viewing.",
    features: ["Height adjustable", "Ergonomic", "Stable base"],
    useCases: ["Video Conferencing", "Live Streaming"],
    specifications: { height: "100-180 mm", length: "100 mm", width: "80 mm", weight: "200 gm", material: "CRC & Aluminum" },
    variants: [{ color: "Black" }, { color: "Silver" }],
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80" },
    tags: ["mobile stand", "height adjustable", "ergonomic", "premium"]
  },
  {
    id: "R-1408", model: "R-1408", name: "Mobile Stand with Business Card Holder",
    category: "Mobile Stands", subcategory: "Card Holder Combo", collection: "premium",
    description: "Premium mobile stand with dedicated business card holder section.",
    features: ["Business card holder", "Professional look"],
    useCases: ["Banks", "Financial Services"],
    specifications: { height: "85 mm", length: "105 mm", width: "75 mm", weight: "140 gm", material: "CRC" },
    variants: [{ color: "Black" }, { color: "Silver" }],
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80" },
    tags: ["mobile stand", "business card", "premium"]
  },
  {
    id: "R-1416", model: "R-1416", name: "Premium Card Holder Mobile Stand",
    category: "Mobile Stands", subcategory: "Card Holder Combo", collection: "premium",
    description: "Premium mobile stand with elegant card holder design. Rose gold available.",
    features: ["Elegant design", "Rose gold option"],
    useCases: ["Hotels", "Banks"],
    specifications: { height: "90 mm", length: "100 mm", width: "70 mm", weight: "130 gm", material: "CRC & Zinc" },
    variants: [{ color: "Black" }, { color: "Silver" }, { color: "Rose Gold" }],
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80" },
    tags: ["mobile stand", "rose gold", "premium"]
  },
  {
    id: "R-2507", model: "R-2507", name: "Compact Mobile Stand",
    category: "Mobile Stands", subcategory: "Basic Stands", collection: "premium",
    description: "Compact and lightweight mobile stand. Perfect for travel.",
    features: ["Compact size", "Lightweight", "Portable"],
    useCases: ["Travel", "Daily Use"],
    specifications: { height: "65 mm", length: "70 mm", width: "55 mm", weight: "55 gm", material: "CRC" },
    variants: [{ color: "Black" }, { color: "Silver" }],
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80" },
    tags: ["mobile stand", "compact", "travel", "premium"]
  },
  
  // ROTATING STANDS
  {
    id: "R-2101", model: "R-2101", name: "360° Rotating Mobile Stand",
    category: "Mobile Stands", subcategory: "Rotating Stands", collection: "premium",
    description: "Premium 360-degree rotating mobile stand.",
    features: ["360° rotation", "Smooth mechanism"],
    useCases: ["Presentations", "Video Calls"],
    specifications: { height: "95 mm", length: "100 mm", width: "100 mm", weight: "220 gm", material: "CRC & SS" },
    variants: [{ color: "Black" }, { color: "Silver" }],
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80" },
    tags: ["mobile stand", "rotating", "360", "premium"]
  },
  {
    id: "R-2102", model: "R-2102", name: "360° Rotating Stand with Card Holder",
    category: "Mobile Stands", subcategory: "Rotating Stands", collection: "premium",
    description: "360-degree rotating stand with integrated card holder.",
    features: ["360° rotation", "Card holder", "Executive design"],
    useCases: ["Executive Office", "Banks"],
    specifications: { height: "100 mm", length: "110 mm", width: "110 mm", weight: "280 gm", material: "CRC & SS" },
    variants: [{ color: "Black" }, { color: "Silver" }, { color: "Gold" }],
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80" },
    tags: ["mobile stand", "rotating", "card holder", "premium"]
  },
  {
    id: "R-2103", model: "R-2103", name: "Premium Rotating Mobile Stand",
    category: "Mobile Stands", subcategory: "Rotating Stands", collection: "premium",
    description: "Premium quality rotating mobile stand with heavy base.",
    features: ["360° rotation", "Heavy stable base"],
    useCases: ["Office", "Conference Rooms"],
    specifications: { height: "90 mm", length: "105 mm", width: "105 mm", weight: "300 gm", material: "CRC & SS" },
    variants: [{ color: "Black" }, { color: "Silver" }],
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80" },
    tags: ["mobile stand", "rotating", "premium"]
  },
  {
    id: "R-2104", model: "R-2104", name: "Luxury Rotating Mobile Stand",
    category: "Mobile Stands", subcategory: "Rotating Stands", collection: "premium",
    description: "Luxury grade rotating mobile stand with gold finish. Gift box included.",
    features: ["360° rotation", "Luxury finish", "Gift box included"],
    useCases: ["Executive Gifts", "Premium Gifting"],
    specifications: { height: "100 mm", length: "115 mm", width: "115 mm", weight: "340 gm", material: "CRC & Zinc" },
    variants: [{ color: "Black" }, { color: "Silver" }, { color: "Gold" }, { color: "Rose Gold" }],
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80" },
    tags: ["mobile stand", "rotating", "luxury", "premium"]
  },
  
  // DESK ACCESSORIES
  {
    id: "R-7101", model: "R-7101", name: "Stationery Products Holder",
    category: "Desk Accessories", subcategory: "Pen Holders", collection: "premium",
    description: "Premium metal stationery holder with multiple compartments.",
    features: ["Multiple compartments", "Pen holder", "Clip holder"],
    useCases: ["Office", "Reception"],
    specifications: { height: "110 mm", length: "120 mm", width: "90 mm", weight: "250 gm", material: "CRC & SS" },
    variants: [{ color: "Black" }, { color: "Silver" }],
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80" },
    tags: ["stationery holder", "pen holder", "premium"]
  },
  {
    id: "R-5101", model: "R-5101", name: "Tea Coaster Set of 6",
    category: "Desk Accessories", subcategory: "Tea Coasters", collection: "premium",
    description: "Premium metal tea coaster set with 6 pieces and holder stand.",
    features: ["Set of 6", "Holder stand included", "Anti-slip pads"],
    useCases: ["Office", "Hotels"],
    specifications: { diameter: "90 mm", weight: "300 gm", material: "SS" },
    variants: [{ color: "Silver" }, { color: "Gold" }],
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80" },
    tags: ["tea coaster", "coaster set", "premium"]
  },
  {
    id: "R-5102", model: "R-5102", name: "Tea Coaster Set of 4",
    category: "Desk Accessories", subcategory: "Tea Coasters", collection: "premium",
    description: "Premium metal tea coaster set with 4 pieces.",
    features: ["Set of 4", "Compact holder", "Anti-slip pads"],
    useCases: ["Office", "Home"],
    specifications: { diameter: "85 mm", weight: "220 gm", material: "SS" },
    variants: [{ color: "Silver" }, { color: "Black" }],
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80" },
    tags: ["tea coaster", "coaster set", "premium"]
  },
  {
    id: "R-5103", model: "R-5103", name: "Premium Tea Coaster Set of 6",
    category: "Desk Accessories", subcategory: "Tea Coasters", collection: "premium",
    description: "Premium grade tea coaster set with decorative stand and gift box.",
    features: ["Set of 6 premium", "Gift box included", "Decorative stand"],
    useCases: ["Executive Gifts", "Hotels"],
    specifications: { diameter: "95 mm", weight: "400 gm", material: "SS & Zinc" },
    variants: [{ color: "Silver" }, { color: "Gold" }, { color: "Rose Gold" }],
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80" },
    tags: ["tea coaster", "premium set", "gift box", "premium"]
  },
  {
    id: "R-201", model: "R-201", name: "Metal Paper Weight",
    category: "Desk Accessories", subcategory: "Paper Weights", collection: "premium",
    description: "Premium metal paper weight with elegant design.",
    features: ["Heavy weight", "Elegant finish", "Gift box included"],
    useCases: ["Executive Desks", "Corporate Gifts"],
    specifications: { height: "40 mm", diameter: "70 mm", weight: "350 gm", material: "Zinc Alloy" },
    variants: [{ color: "Silver" }, { color: "Gold" }, { color: "Bronze" }],
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80" },
    tags: ["paper weight", "executive", "premium"]
  },
  
  // CARD HOLDERS
  {
    id: "R-1001", model: "R-1001", name: "Premium ATM & Visiting Card Holder",
    category: "Card Holders", subcategory: "Card Cases", collection: "premium",
    description: "Premium card holder for ATM cards and visiting cards.",
    features: ["Holds ATM & visiting cards", "RFID protection", "Sleek design"],
    useCases: ["Travel", "Corporate Gifts"],
    specifications: { height: "65 mm", length: "95 mm", width: "12 mm", weight: "55 gm", material: "SS" },
    variants: [{ color: "Silver" }, { color: "Black" }, { color: "Gold" }],
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80" },
    tags: ["card holder", "atm card", "premium"]
  },
  {
    id: "R-1002", model: "R-1002", name: "Envelope Steel Table Card Holder",
    category: "Card Holders", subcategory: "Table Card Holders", collection: "premium",
    description: "Envelope style steel card holder for table display.",
    features: ["Envelope design", "Table display style", "Multiple cards"],
    useCases: ["Reception", "Hotels", "Banks"],
    specifications: { height: "50 mm", length: "100 mm", width: "35 mm", weight: "120 gm", material: "SS" },
    variants: [{ color: "Silver" }, { color: "Gold" }],
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80" },
    tags: ["card holder", "table display", "premium"]
  },
  
  // DESK CALENDARS
  {
    id: "R-124", model: "R-124", name: "Desk Calendar with Clock",
    category: "Desk Calendars", subcategory: "With Clock", collection: "premium",
    description: "Premium desk calendar with integrated analog clock.",
    features: ["Analog clock", "Perpetual calendar", "Adjustable month plates"],
    useCases: ["Office", "Banks"],
    specifications: { height: "140 mm", length: "150 mm", width: "60 mm", weight: "280 gm", material: "CRC & Acrylic" },
    variants: [{ color: "Black" }, { color: "Silver" }],
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80" },
    tags: ["desk calendar", "clock", "premium"]
  },
  {
    id: "R-125", model: "R-125", name: "Classic Desk Calendar",
    category: "Desk Calendars", subcategory: "Basic", collection: "premium",
    description: "Classic desk calendar with sliding month/date display.",
    features: ["Sliding month display", "Compact design"],
    useCases: ["Office", "Home"],
    specifications: { height: "100 mm", length: "120 mm", width: "50 mm", weight: "180 gm", material: "CRC" },
    variants: [{ color: "Black" }, { color: "Silver" }],
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80" },
    tags: ["desk calendar", "classic", "premium"]
  },
  {
    id: "R-129", model: "R-129", name: "Perpetual Desk Calendar",
    category: "Desk Calendars", subcategory: "Basic", collection: "premium",
    description: "Perpetual desk calendar with rotating cubes.",
    features: ["Rotating cube date", "Perpetual use", "Classic design"],
    useCases: ["Office", "Corporate"],
    specifications: { height: "90 mm", length: "110 mm", width: "55 mm", weight: "200 gm", material: "CRC" },
    variants: [{ color: "Black" }, { color: "Silver" }, { color: "Gold" }],
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80" },
    tags: ["desk calendar", "perpetual", "premium"]
  },
  {
    id: "R-130", model: "R-130", name: "Executive Desk Calendar with Clock",
    category: "Desk Calendars", subcategory: "With Clock", collection: "premium",
    description: "Executive grade desk calendar with premium clock and pen holder.",
    features: ["Premium clock", "Pen holder", "Executive design"],
    useCases: ["Executive Office", "Premium Gifting"],
    specifications: { height: "160 mm", length: "180 mm", width: "80 mm", weight: "380 gm", material: "CRC & SS" },
    variants: [{ color: "Black" }, { color: "Silver" }],
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80" },
    tags: ["desk calendar", "executive", "clock", "premium"]
  },
  {
    id: "R-1301", model: "R-1301", name: "Premium Collection Desk Calendar",
    category: "Desk Calendars", subcategory: "Premium Collection", collection: "premium",
    description: "Premium collection desk calendar with elegant design and gift box.",
    features: ["Premium design", "Gift box included", "Elegant finish"],
    useCases: ["Corporate Gifts", "Executive Gifting"],
    specifications: { height: "130 mm", length: "150 mm", width: "65 mm", weight: "300 gm", material: "CRC & Zinc" },
    variants: [{ color: "Black" }, { color: "Silver" }, { color: "Rose Gold" }],
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80" },
    tags: ["desk calendar", "premium", "gift box"]
  },
  {
    id: "R-1302", model: "R-1302", name: "Premium Desk Calendar with Photo Frame",
    category: "Desk Calendars", subcategory: "Premium Collection", collection: "premium",
    description: "Premium desk calendar with integrated photo frame.",
    features: ["Photo frame included", "Calendar display", "Personalized gifting"],
    useCases: ["Personal Gifts", "Photo Display"],
    specifications: { height: "150 mm", length: "160 mm", width: "70 mm", weight: "320 gm", material: "CRC & Acrylic" },
    variants: [{ color: "Black" }, { color: "Silver" }],
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80" },
    tags: ["desk calendar", "photo frame", "premium"]
  },
  {
    id: "R-1304", model: "R-1304", name: "Glass Desk Calendar",
    category: "Desk Calendars", subcategory: "Glass Collection", collection: "premium",
    description: "Elegant glass desk calendar with metal accents.",
    features: ["Glass construction", "Metal accents", "Modern design"],
    useCases: ["Modern Office", "Executive"],
    specifications: { height: "120 mm", length: "140 mm", width: "60 mm", weight: "280 gm", material: "Glass & SS" },
    variants: [{ color: "Clear" }, { color: "Black" }],
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80" },
    tags: ["desk calendar", "glass", "modern", "premium"]
  },
  {
    id: "R-3101", model: "R-3101", name: "Jula Calendar",
    category: "Desk Calendars", subcategory: "Jula Calendar", collection: "premium",
    description: "Unique Jula (swing) style desk calendar with decorative design.",
    features: ["Jula swing style", "Decorative design", "Unique mechanism"],
    useCases: ["Home Decor", "Corporate Gifts"],
    specifications: { height: "130 mm", length: "100 mm", width: "80 mm", weight: "220 gm", material: "CRC & Brass" },
    variants: [{ color: "Gold" }, { color: "Silver" }, { color: "Bronze" }],
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80" },
    tags: ["desk calendar", "jula", "decorative", "premium"]
  },

  
  // ============================================
  // ECONOMICAL PRODUCTS (NE-Series) - 116 products
  // ============================================
  
  // BOTTLES - Temperature Display
  {
    id: "NE-01", model: "NE 01", name: "Temperature Display Bottle",
    category: "Bottles", subcategory: "Temperature Display", collection: "economical",
    description: "Smart bottle with LED temperature display.",
    features: ["LED Temperature Display", "500ml Capacity", "5 Color Options"],
    specifications: { capacity: "500 ml" },
    variants: [{ color: "Black" }, { color: "White" }, { color: "Red" }, { color: "Pink" }, { color: "Blue" }],
    price: 170, ctnPacking: "50 PCS CTN",
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80" },
    tags: ["temperature bottle", "display bottle", "economical"]
  },
  {
    id: "NE-02", model: "NE 02", name: "Non Display Temperature Bottle",
    category: "Bottles", subcategory: "Temperature Display", collection: "economical",
    description: "Temperature sensing bottle without display.",
    features: ["Touch Temperature Sensing", "500ml Capacity"],
    specifications: { capacity: "500 ml" },
    variants: [{ color: "Black" }, { color: "White" }, { color: "Red" }],
    price: 165,
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80" },
    tags: ["temperature bottle", "economical"]
  },
  {
    id: "NE-16", model: "NE 16", name: "Gradient Colour Temperature Bottle",
    category: "Bottles", subcategory: "Temperature Display", collection: "economical",
    description: "Trendy gradient color bottle with temperature display.",
    features: ["Gradient Color Design", "Temperature Display", "500ml"],
    specifications: { capacity: "500 ml" },
    variants: [{ color: "Gradient Multi" }],
    price: 190, ctnPacking: "50 PCS CTN",
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80" },
    tags: ["gradient bottle", "temperature display", "economical"]
  },
  
  // BOTTLES - Stainless Steel
  {
    id: "NE-03", model: "NE 03", name: "Stainless Steel Water Bottle",
    category: "Bottles", subcategory: "Stainless Steel", collection: "economical",
    description: "Classic stainless steel water bottle. Durable and leak-proof.",
    features: ["Premium SS Construction", "750ml Capacity", "Leak-proof lid"],
    specifications: { capacity: "750 ml" },
    variants: [{ color: "Black" }],
    price: 160, ctnPacking: "60 PCS CTN",
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80" },
    tags: ["stainless steel", "water bottle", "economical"]
  },
  {
    id: "NE-04", model: "NE 04", name: "Stainless Steel Sipper Bottle",
    category: "Bottles", subcategory: "Stainless Steel", collection: "economical",
    description: "Stainless steel sipper bottle with easy-drink lid.",
    features: ["Sipper Lid Design", "750ml Capacity", "Sports friendly"],
    specifications: { capacity: "750 ml" },
    variants: [{ color: "Black" }, { color: "Blue" }, { color: "Red" }],
    price: 160,
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80" },
    tags: ["sipper bottle", "stainless steel", "economical"]
  },
  {
    id: "NE-05", model: "NE 05", name: "Stainless Steel Bottle 1L",
    category: "Bottles", subcategory: "Stainless Steel", collection: "economical",
    description: "Large 1 liter stainless steel bottle.",
    features: ["1 Liter Capacity", "Classic Silver Finish", "Leak-proof"],
    specifications: { capacity: "1000 ml" },
    variants: [{ color: "Silver" }],
    price: 150, ctnPacking: "60 PCS CTN",
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80" },
    tags: ["stainless steel", "1 liter", "economical"]
  },
  {
    id: "NE-07", model: "NE 07", name: "SS Double Wall Sports Water Bottle",
    category: "Bottles", subcategory: "Double Wall", collection: "economical",
    description: "Double wall insulated sports bottle.",
    features: ["Double Wall Insulation", "550ml Capacity", "Sports Design"],
    specifications: { capacity: "550 ml" },
    variants: [{ color: "Black" }, { color: "White" }, { color: "Blue" }, { color: "Silver" }],
    price: 205,
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80" },
    tags: ["double wall", "sports bottle", "economical"]
  },
  {
    id: "NE-10", model: "NE 10", name: "SS Cola Vacuum Insulated Bottle",
    category: "Bottles", subcategory: "Vacuum Insulated", collection: "economical",
    description: "Cola-shaped vacuum insulated bottle. Multiple sizes.",
    features: ["Cola Shape Design", "Vacuum Insulated", "Hot/Cold retention"],
    specifications: { capacity: "500ml / 750ml / 1000ml" },
    variants: [{ color: "Silver" }],
    price: "150 to 310", ctnPacking: "50 PCS CTN",
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80" },
    tags: ["cola bottle", "vacuum insulated", "economical"]
  },
  
  // BOTTLES - Vacuum Flask
  {
    id: "NE-08", model: "NE 08", name: "Cup Vacuum Thermos With Cup",
    category: "Bottles", subcategory: "Vacuum Flask", collection: "economical",
    description: "Vacuum thermos with cup-style lid. 12hr retention.",
    features: ["Vacuum Insulation", "Cup Lid Design", "12hr Hot/Cold Retention"],
    specifications: { capacity: "500 ml" },
    variants: [{ color: "Black" }, { color: "White" }],
    price: 240, ctnPacking: "50 PCS CTN",
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80" },
    tags: ["vacuum thermos", "cup lid", "economical"]
  },
  {
    id: "NE-14", model: "NE 14", name: "Vacuum Bottle",
    category: "Bottles", subcategory: "Vacuum Insulated", collection: "economical",
    description: "Simple vacuum insulated bottle. Great value.",
    features: ["Vacuum Insulated", "600ml Capacity", "Leak-proof"],
    specifications: { capacity: "600 ml" },
    variants: [{ color: "Black" }, { color: "White" }],
    price: 190,
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80" },
    tags: ["vacuum bottle", "economical"]
  },
  {
    id: "NE-15", model: "NE 15", name: "SS Bottle Double Wall",
    category: "Bottles", subcategory: "Double Wall", collection: "economical",
    description: "Premium double wall bottle in elegant white finish.",
    features: ["Double Wall Insulation", "500ml Capacity", "Premium White Finish"],
    specifications: { capacity: "500 ml" },
    variants: [{ color: "White" }],
    price: 310, ctnPacking: "50 PCS CTN",
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80" },
    tags: ["double wall", "premium white", "economical"]
  },
  
  // BOTTLES - Bamboo
  {
    id: "NE-17", model: "NE 17", name: "Bamboo Vacuum Insulated Bottle",
    category: "Bottles", subcategory: "Eco-Friendly", collection: "economical",
    description: "Eco-friendly bottle with bamboo exterior.",
    features: ["Bamboo Exterior", "Vacuum Insulated", "500ml", "Eco-Friendly"],
    specifications: { capacity: "500 ml" },
    variants: [{ color: "Natural Bamboo" }],
    price: 290, ctnPacking: "50 PCS CTN",
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80" },
    tags: ["bamboo", "eco-friendly", "economical"]
  },
  {
    id: "NE-18", model: "NE 18", name: "Bamboo Vacuum Insulated Bottle Premium",
    category: "Bottles", subcategory: "Eco-Friendly", collection: "economical",
    description: "Premium bamboo bottle with enhanced insulation.",
    features: ["Premium Bamboo Finish", "Enhanced Insulation", "Gift Ready"],
    specifications: { capacity: "500 ml" },
    variants: [{ color: "Natural Bamboo" }],
    price: 340, ctnPacking: "50 PCS CTN",
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80" },
    tags: ["bamboo", "premium", "eco-friendly", "economical"]
  },
  {
    id: "NE-20", model: "NE 20", name: "Stainless Steel Bottle With Bamboo",
    category: "Bottles", subcategory: "Eco-Friendly", collection: "economical",
    description: "Sleek black SS bottle with bamboo accent.",
    features: ["SS with Bamboo Accent", "500ml", "Modern Design"],
    specifications: { capacity: "500 ml" },
    variants: [{ color: "Black" }],
    price: 350, ctnPacking: "50 PCS CTN",
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80" },
    tags: ["bamboo accent", "stainless steel", "economical"]
  },
  
  // BOTTLES - Motivational
  {
    id: "NE-21", model: "NE 21", name: "Motivational Quotes Sports Water Bottle",
    category: "Bottles", subcategory: "Motivational", collection: "economical",
    description: "Large sports bottle with motivational quotes.",
    features: ["Motivational Quotes", "900ml Large Capacity", "Time Markers"],
    specifications: { capacity: "900 ml" },
    variants: [{ color: "Black" }, { color: "Blue" }, { color: "Green" }, { color: "Pink" }],
    price: 155,
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80" },
    tags: ["motivational", "sports bottle", "900ml", "economical"]
  },
  {
    id: "NE-22", model: "NE 22", name: "Motivational Quotes Bottle (3 Pcs Set)",
    category: "Bottles", subcategory: "Gift Sets", collection: "economical",
    description: "Set of 3 motivational bottles in different sizes.",
    features: ["3 Bottle Set", "Multiple Sizes", "Motivational Quotes"],
    specifications: { capacity: "2000ml + 900ml + 300ml", includes: "3 Bottles" },
    variants: [{ color: "Multicolour" }],
    price: 220, ctnPacking: "40 PCS CTN",
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80" },
    tags: ["bottle set", "motivational", "gift set", "economical"]
  },
  
  // MUGS & CUPS
  {
    id: "NE-24", model: "NE 24", name: "Travel Tumbler",
    category: "Mugs & Cups", subcategory: "Travel Mugs", collection: "economical",
    description: "Sleek travel tumbler for daily commute.",
    features: ["Travel Design", "500ml Capacity", "Leak-Proof Lid", "Fits Cup Holders"],
    specifications: { capacity: "500 ml" },
    variants: [{ color: "Black" }],
    price: 240, ctnPacking: "50 PCS CTN",
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&q=80" },
    tags: ["travel tumbler", "leak proof", "economical"]
  },
  {
    id: "NE-25", model: "NE 25", name: "SS Insulation Coffee Cup With Button",
    category: "Mugs & Cups", subcategory: "Coffee Mugs", collection: "economical",
    description: "Coffee cup with push-button lid for one-hand operation.",
    features: ["Push Button Lid", "400ml Capacity", "Insulated", "Spill-Proof"],
    specifications: { capacity: "400 ml" },
    variants: [{ color: "Black" }, { color: "White" }],
    price: 190, ctnPacking: "50 PCS CTN",
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&q=80" },
    tags: ["coffee cup", "button lid", "economical"]
  },
  {
    id: "NE-26", model: "NE 26", name: "SS Temperature Coffee Travel Mug",
    category: "Mugs & Cups", subcategory: "Travel Mugs", collection: "economical",
    description: "Smart travel mug with temperature display.",
    features: ["Temperature Display", "510ml Capacity", "Travel Design"],
    specifications: { capacity: "510 ml" },
    variants: [{ color: "Black" }, { color: "White" }],
    price: 240, ctnPacking: "50 PCS CTN",
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&q=80" },
    tags: ["temperature mug", "travel mug", "economical"]
  },
  {
    id: "NE-27", model: "NE 27", name: "SS Vacuum Insulated Flask With Grip",
    category: "Mugs & Cups", subcategory: "Travel Mugs", collection: "economical",
    description: "Premium vacuum flask with ergonomic grip.",
    features: ["Vacuum Insulated", "Ergonomic Grip", "500ml", "4 Premium Colors"],
    specifications: { capacity: "500 ml" },
    variants: [{ color: "Black" }, { color: "Golden" }, { color: "Green" }, { color: "Red" }],
    price: 320, ctnPacking: "50 PCS CTN",
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&q=80" },
    tags: ["vacuum flask", "grip", "premium colors", "economical"]
  },
  
  // TUMBLERS - Stanley Style
  {
    id: "NE-83", model: "NE 83", name: "Stanley Cup 710ml",
    category: "Tumblers", subcategory: "Stanley Style", collection: "economical",
    description: "Popular Stanley-style tumbler. Large capacity.",
    features: ["Stanley Style Design", "710ml Capacity", "Handle + Straw", "Premium Quality"],
    specifications: { capacity: "710 ml" },
    variants: [{ color: "Black" }],
    price: 385,
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&q=80" },
    tags: ["stanley cup", "tumbler", "economical"]
  },
  {
    id: "NE-106", model: "NE 106", name: "Stanley Cup 1200ml",
    category: "Tumblers", subcategory: "Stanley Style", collection: "economical",
    description: "Extra large Stanley-style tumbler for maximum hydration.",
    features: ["Extra Large 1.2L", "Stanley Style", "Handle + Straw", "Multiple Colors"],
    specifications: { capacity: "1200 ml" },
    variants: [{ color: "Black" }, { color: "White" }, { color: "Mix" }],
    price: 370, ctnPacking: "25 PCS CTN",
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&q=80" },
    tags: ["stanley cup", "large", "1200ml", "economical"]
  },
  {
    id: "NE-107", model: "NE 107", name: "Stanley Mug 900ml",
    category: "Tumblers", subcategory: "Stanley Style", collection: "economical",
    description: "Stanley-style mug with comfortable handle.",
    features: ["Stanley Style Mug", "900ml Capacity", "Comfortable Handle", "Insulated"],
    specifications: { capacity: "900 ml" },
    variants: [{ color: "Black" }],
    price: 350, ctnPacking: "30 PCS CTN",
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&q=80" },
    tags: ["stanley mug", "large capacity", "economical"]
  },
  
  // DIGITAL CLOCKS
  {
    id: "NE-49", model: "NE 49", name: "Colour Changing Clock (Digital Alarm)",
    category: "Digital Clocks", subcategory: "Digital Clocks", collection: "economical",
    description: "Fun color-changing digital alarm clock.",
    features: ["Color Changing LED", "Digital Display", "Alarm Function", "Compact Size"],
    variants: [{ color: "White" }],
    price: 115, ctnPacking: "100 PCS CTN",
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=400&q=80" },
    tags: ["color changing clock", "alarm", "led", "economical"]
  },
  {
    id: "NE-50", model: "NE 50", name: "Digital Alarm Clock",
    category: "Digital Clocks", subcategory: "Digital Clocks", collection: "economical",
    description: "Classic digital alarm clock for office and home.",
    features: ["Digital Display", "Alarm Function", "Temperature Display"],
    variants: [{ color: "Black" }, { color: "White" }],
    price: 195, ctnPacking: "100 PCS CTN",
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=400&q=80" },
    tags: ["digital clock", "alarm clock", "economical"]
  },
  {
    id: "NE-51", model: "NE 51", name: "Digital Mirror Alarm Clock",
    category: "Digital Clocks", subcategory: "Digital Clocks", collection: "economical",
    description: "Modern mirror-finish digital clock.",
    features: ["Mirror Display", "Digital Clock", "Alarm Function", "Modern Design"],
    variants: [{ color: "Black" }, { color: "White" }],
    price: 270, ctnPacking: "100 PCS CTN",
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=400&q=80" },
    tags: ["mirror clock", "digital", "modern", "economical"]
  },
  {
    id: "NE-84", model: "NE 84", name: "Multifunctional Digital Clock",
    category: "Digital Clocks", subcategory: "Digital Clocks", collection: "economical",
    description: "Budget-friendly multifunctional digital clock.",
    features: ["Multiple Functions", "Digital Display", "Alarm + Temperature"],
    variants: [{ color: "Black" }],
    price: 100,
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=400&q=80" },
    tags: ["digital clock", "multifunctional", "budget", "economical"]
  },
  
  // MOBILE ACCESSORIES
  {
    id: "NE-60", model: "NE 60", name: "Mobile Stand",
    category: "Mobile Accessories", subcategory: "Mobile Stands", collection: "economical",
    description: "Simple and compact mobile stand for desk use.",
    features: ["Compact Design", "Foldable", "Budget Friendly"],
    variants: [{ color: "Black" }, { color: "White" }],
    price: 95, ctnPacking: "100 PCS CTN",
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80" },
    tags: ["mobile stand", "budget", "economical"]
  },
  {
    id: "NE-61", model: "NE 61", name: "Metal Mobile Stand",
    category: "Mobile Accessories", subcategory: "Mobile Stands", collection: "economical",
    description: "Sturdy metal mobile stand at budget price.",
    features: ["Metal Construction", "Sturdy Build", "Budget Price"],
    variants: [{ color: "Black" }],
    price: 75, ctnPacking: "100 PCS CTN",
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80" },
    tags: ["metal stand", "budget", "economical"]
  },
  {
    id: "NE-62", model: "NE 62", name: "Mobile Pop Socket Holder",
    category: "Mobile Accessories", subcategory: "Pop Sockets", collection: "economical",
    description: "Ultra-budget pop socket for bulk gifting.",
    features: ["Pop Socket Design", "Grip Holder", "Ultra Budget", "Bulk Packing"],
    variants: [{ color: "Black" }, { color: "White" }],
    price: 9, ctnPacking: "5000 PCS CTN",
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80" },
    tags: ["pop socket", "phone grip", "bulk", "economical"]
  },
  {
    id: "NE-63", model: "NE 63", name: "Laptop Stand",
    category: "Mobile Accessories", subcategory: "Laptop Stands", collection: "economical",
    description: "Foldable aluminum laptop stand for ergonomic working.",
    features: ["Foldable Design", "Aluminum Build", "Ergonomic", "Portable"],
    variants: [{ color: "Silver" }, { color: "Black" }],
    price: 210, ctnPacking: "100 PCS CTN",
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80" },
    tags: ["laptop stand", "ergonomic", "foldable", "economical"]
  },
  {
    id: "NE-80", model: "NE 80", name: "360 Rotational Mobile Stand",
    category: "Mobile Accessories", subcategory: "Mobile Stands", collection: "economical",
    description: "Budget 360-degree rotating mobile stand.",
    features: ["360° Rotation", "Adjustable Angle", "Versatile", "Budget Price"],
    variants: [{ color: "Black" }, { color: "White" }],
    price: 95, ctnPacking: "100 PCS CTN",
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80" },
    tags: ["rotating stand", "360", "economical"]
  },

  // ============================================
  // PRINTO PRODUCTS - Keychains, Awards, Backpacks, Pens, Notebooks, Mousepads, Tote Bags
  // ============================================

  // KEYCHAINS (6 products)
  {
    id: "KC-01", model: "KC 01", name: "Hut Keychain",
    category: "Keychains", subcategory: "Metal Keychains", collection: "economical",
    description: "Premium metal keychain with hut design. Perfect for corporate gifting and promotions.",
    features: ["Metal construction", "Laser engraving available", "Premium finish", "Compact design"],
    specifications: { material: "Metal Alloy" },
    variants: [{ color: "Silver" }, { color: "Gold" }],
    price: 261, ctnPacking: "100 PCS CTN",
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1602750819841-db44a76a5958?w=400&q=80" },
    tags: ["keychain", "metal", "corporate gift", "economical"]
  },
  {
    id: "KC-02", model: "KC 02", name: "Ace Keychain",
    category: "Keychains", subcategory: "Metal Keychains", collection: "economical",
    description: "Stylish ace-shaped metal keychain. Great for promotional events.",
    features: ["Unique ace design", "Metal construction", "Laser engraving", "Durable"],
    specifications: { material: "Metal Alloy" },
    variants: [{ color: "Silver" }, { color: "Black" }],
    price: 261, ctnPacking: "100 PCS CTN",
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1602750819841-db44a76a5958?w=400&q=80" },
    tags: ["keychain", "ace", "metal", "economical"]
  },
  {
    id: "KC-03", model: "KC 03", name: "Pulse Metal Keychain",
    category: "Keychains", subcategory: "Metal Keychains", collection: "economical",
    description: "Modern pulse design metal keychain with premium grey finish.",
    features: ["Modern design", "Grey finish", "Laser engraving", "Premium quality"],
    specifications: { material: "Metal" },
    variants: [{ color: "Grey" }, { color: "Silver" }],
    price: 273, ctnPacking: "100 PCS CTN",
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1602750819841-db44a76a5958?w=400&q=80" },
    tags: ["keychain", "pulse", "metal", "economical"]
  },
  {
    id: "KC-04", model: "KC 04", name: "Square Acrylic Keychain",
    category: "Keychains", subcategory: "Acrylic Keychains", collection: "economical",
    description: "Custom printed square acrylic keychain. Full color printing available.",
    features: ["Acrylic material", "Full color printing", "Scratch resistant", "Photo printing"],
    specifications: { material: "Acrylic", thickness: "3mm" },
    variants: [{ color: "Clear" }],
    price: 189, ctnPacking: "200 PCS CTN",
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1602750819841-db44a76a5958?w=400&q=80" },
    tags: ["keychain", "acrylic", "custom print", "economical"]
  },
  {
    id: "KC-05", model: "KC 05", name: "Heart Acrylic Keychain",
    category: "Keychains", subcategory: "Acrylic Keychains", collection: "economical",
    description: "Heart-shaped acrylic keychain. Perfect for personalized gifts.",
    features: ["Heart shape", "Photo printing", "Acrylic protection", "Gift ready"],
    specifications: { material: "Acrylic", thickness: "3mm" },
    variants: [{ color: "Clear" }],
    price: 189, ctnPacking: "200 PCS CTN",
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1602750819841-db44a76a5958?w=400&q=80" },
    tags: ["keychain", "heart", "acrylic", "gift", "economical"]
  },
  {
    id: "KC-06", model: "KC 06", name: "Vintage Leather Keychain",
    category: "Keychains", subcategory: "Leather Keychains", collection: "economical",
    description: "Premium vintage leather keychain in brown. Executive quality.",
    features: ["Genuine leather", "Vintage design", "Premium brown finish", "Executive gift"],
    specifications: { material: "Leather" },
    variants: [{ color: "Brown" }, { color: "Black" }],
    price: 453, ctnPacking: "50 PCS CTN",
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1602750819841-db44a76a5958?w=400&q=80" },
    tags: ["keychain", "leather", "vintage", "premium", "economical"]
  },

  // AWARDS & TROPHIES (7 products)
  {
    id: "AW-01", model: "AW 01", name: "Crownstar Trophy",
    category: "Awards & Trophies", subcategory: "Wooden Trophies", collection: "economical",
    description: "Premium wooden trophy with crown star design. Ideal for recognition events.",
    features: ["Wooden base", "Metal crown accent", "Engraving available", "Gift box included"],
    specifications: { height: "10 inches", material: "Wood & Metal" },
    variants: [{ color: "Wood" }, { color: "Gold" }],
    price: 1637, ctnPacking: "10 PCS CTN",
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&q=80" },
    tags: ["trophy", "award", "wooden", "recognition", "economical"]
  },
  {
    id: "AW-02", model: "AW 02", name: "Viva Crest Trophy",
    category: "Awards & Trophies", subcategory: "Wooden Trophies", collection: "economical",
    description: "Elegant viva crest wooden trophy for corporate awards.",
    features: ["Crest design", "Wood finish", "Laser engraving", "Premium quality"],
    specifications: { height: "8 inches", material: "Wood" },
    variants: [{ color: "Wood" }],
    price: 944, ctnPacking: "15 PCS CTN",
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&q=80" },
    tags: ["trophy", "crest", "wooden", "corporate", "economical"]
  },
  {
    id: "AW-03", model: "AW 03", name: "Spirit Crystal Trophy",
    category: "Awards & Trophies", subcategory: "Crystal Trophies", collection: "economical",
    description: "Premium crystal trophy with 3D laser engraving capability.",
    features: ["Crystal clear glass", "3D laser engraving", "Premium finish", "Gift box"],
    specifications: { height: "9 inches", material: "Crystal" },
    variants: [{ color: "Clear" }],
    price: 2342, ctnPacking: "8 PCS CTN",
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&q=80" },
    tags: ["trophy", "crystal", "premium", "3d engraving", "economical"]
  },
  {
    id: "AW-04", model: "AW 04", name: "Titan Trophy Gold",
    category: "Awards & Trophies", subcategory: "Metal Trophies", collection: "economical",
    description: "Grand titan trophy in gold finish. Perfect for top achievers.",
    features: ["Metal construction", "Gold plating", "Engraving plate", "Impressive size"],
    specifications: { height: "12 inches", material: "Metal Gold Plated" },
    variants: [{ color: "Gold" }, { color: "Silver" }, { color: "Bronze" }],
    price: 2517, ctnPacking: "5 PCS CTN",
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&q=80" },
    tags: ["trophy", "titan", "gold", "achievement", "economical"]
  },
  {
    id: "AW-05", model: "AW 05", name: "Empyrean Trophy",
    category: "Awards & Trophies", subcategory: "Wooden Trophies", collection: "economical",
    description: "Budget-friendly empyrean trophy for events and competitions.",
    features: ["Compact design", "Wood finish", "Engraving available", "Value pricing"],
    specifications: { height: "6 inches", material: "Wood & Acrylic" },
    variants: [{ color: "Wood" }],
    price: 528, ctnPacking: "20 PCS CTN",
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&q=80" },
    tags: ["trophy", "budget", "wooden", "event", "economical"]
  },
  {
    id: "AW-06", model: "AW 06", name: "Grace Acrylic Trophy",
    category: "Awards & Trophies", subcategory: "Acrylic Trophies", collection: "economical",
    description: "Elegant grace acrylic trophy for recognition programs.",
    features: ["Clear acrylic", "UV printing", "Modern design", "Lightweight"],
    specifications: { height: "7 inches", material: "Acrylic" },
    variants: [{ color: "Clear" }],
    price: 429, ctnPacking: "25 PCS CTN",
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&q=80" },
    tags: ["trophy", "acrylic", "grace", "recognition", "economical"]
  },
  {
    id: "AW-07", model: "AW 07", name: "Oblisk Crystal Award",
    category: "Awards & Trophies", subcategory: "Crystal Trophies", collection: "economical",
    description: "Sleek oblisk-shaped crystal award for corporate recognition.",
    features: ["Oblisk shape", "Crystal material", "Laser etching", "Executive quality"],
    specifications: { height: "8 inches", material: "Crystal" },
    variants: [{ color: "Clear" }],
    price: 1108, ctnPacking: "12 PCS CTN",
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&q=80" },
    tags: ["award", "crystal", "oblisk", "corporate", "economical"]
  },

  // BACKPACKS & LAPTOP BAGS (6 products)
  {
    id: "BP-01", model: "BP 01", name: "PLUS Laptop Bag",
    category: "Backpacks", subcategory: "Laptop Bags", collection: "economical",
    description: "Premium plus laptop bag with multiple compartments. Fits 15.6 inch laptops.",
    features: ["15.6 inch laptop fit", "Multiple compartments", "Padded straps", "Water resistant"],
    specifications: { capacity: "25L", material: "Polyester" },
    variants: [{ color: "Black" }, { color: "Grey" }],
    price: 3057, ctnPacking: "10 PCS CTN",
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80" },
    tags: ["backpack", "laptop bag", "premium", "corporate", "economical"]
  },
  {
    id: "BP-02", model: "BP 02", name: "Supreme Laptop Bag",
    category: "Backpacks", subcategory: "Laptop Bags", collection: "economical",
    description: "Supreme quality laptop bag for professionals. Ergonomic design.",
    features: ["Ergonomic design", "Laptop compartment", "USB port", "Anti-theft pocket"],
    specifications: { capacity: "22L", material: "Nylon" },
    variants: [{ color: "Black" }, { color: "Navy" }],
    price: 2472, ctnPacking: "12 PCS CTN",
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80" },
    tags: ["backpack", "laptop bag", "supreme", "professional", "economical"]
  },
  {
    id: "BP-03", model: "BP 03", name: "CORE Laptop Bag",
    category: "Backpacks", subcategory: "Laptop Bags", collection: "economical",
    description: "Essential core laptop bag for everyday use. Great value pricing.",
    features: ["Essential design", "Laptop sleeve", "Front pocket", "Value pricing"],
    specifications: { capacity: "18L", material: "Polyester" },
    variants: [{ color: "Black" }, { color: "Grey" }, { color: "Blue" }],
    price: 885, ctnPacking: "20 PCS CTN",
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80" },
    tags: ["backpack", "laptop bag", "core", "value", "economical"]
  },
  {
    id: "BP-04", model: "BP 04", name: "Supasac Emperor",
    category: "Backpacks", subcategory: "Premium Backpacks", collection: "economical",
    description: "Premium supasac emperor backpack with executive features.",
    features: ["Premium build", "Multiple pockets", "Trolley strap", "Rain cover"],
    specifications: { capacity: "30L", material: "Premium Polyester" },
    variants: [{ color: "Black" }],
    price: 3893, ctnPacking: "5 PCS CTN",
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80" },
    tags: ["backpack", "supasac", "emperor", "premium", "economical"]
  },
  {
    id: "BP-05", model: "BP 05", name: "THIN CASE Laptop Sleeve",
    category: "Backpacks", subcategory: "Laptop Sleeves", collection: "economical",
    description: "Ultra-thin laptop sleeve for minimal protection. Fits 14 inch laptops.",
    features: ["Ultra thin", "Soft lining", "Zipper closure", "Lightweight"],
    specifications: { capacity: "14 inch", material: "Neoprene" },
    variants: [{ color: "Black" }, { color: "Grey" }],
    price: 1197, ctnPacking: "30 PCS CTN",
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80" },
    tags: ["laptop sleeve", "thin", "minimal", "portable", "economical"]
  },
  {
    id: "BP-06", model: "BP 06", name: "Supasac Rally",
    category: "Backpacks", subcategory: "Sports Backpacks", collection: "economical",
    description: "Sporty rally backpack for outdoor activities and travel.",
    features: ["Sports design", "Breathable back", "Side pockets", "Durable"],
    specifications: { capacity: "28L", material: "Polyester" },
    variants: [{ color: "Black" }, { color: "Red" }, { color: "Blue" }],
    price: 2123, ctnPacking: "10 PCS CTN",
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80" },
    tags: ["backpack", "rally", "sports", "outdoor", "economical"]
  },

  // PENS (6 products)
  {
    id: "PN-01", model: "PN 01", name: "Adroit Ballpoint Pen",
    category: "Pens", subcategory: "Ballpoint Pens", collection: "economical",
    description: "Premium adroit ballpoint pen with smooth writing experience.",
    features: ["Smooth writing", "Metal body", "Laser engraving", "Gift box"],
    specifications: { material: "Metal" },
    variants: [{ color: "Silver" }, { color: "Black" }, { color: "Blue" }],
    price: 329, ctnPacking: "50 PCS CTN",
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=400&q=80" },
    tags: ["pen", "ballpoint", "adroit", "metal", "economical"]
  },
  {
    id: "PN-02", model: "PN 02", name: "Gilt Roller Ball Pen",
    category: "Pens", subcategory: "Roller Ball Pens", collection: "economical",
    description: "Executive gilt roller ball pen for smooth and precise writing.",
    features: ["Roller ball tip", "Gold accents", "Premium finish", "Executive gift"],
    specifications: { material: "Metal Gold Plated" },
    variants: [{ color: "Gold" }, { color: "Silver" }],
    price: 415, ctnPacking: "40 PCS CTN",
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=400&q=80" },
    tags: ["pen", "roller ball", "gilt", "executive", "economical"]
  },
  {
    id: "PN-03", model: "PN 03", name: "Slim Stylus Ballpoint Pen",
    category: "Pens", subcategory: "Stylus Pens", collection: "economical",
    description: "Dual function slim stylus pen with ballpoint and touchscreen stylus.",
    features: ["Dual function", "Stylus tip", "Slim design", "Touch compatible"],
    specifications: { material: "Metal & Rubber" },
    variants: [{ color: "Black" }, { color: "Silver" }, { color: "Blue" }],
    price: 286, ctnPacking: "100 PCS CTN",
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=400&q=80" },
    tags: ["pen", "stylus", "dual function", "slim", "economical"]
  },
  {
    id: "PN-04", model: "PN 04", name: "Wooden Ballpoint Pen",
    category: "Pens", subcategory: "Eco-Friendly Pens", collection: "economical",
    description: "Eco-friendly wooden ballpoint pen. Sustainable corporate gift.",
    features: ["Wooden body", "Eco-friendly", "Smooth writing", "Natural finish"],
    specifications: { material: "Wood" },
    variants: [{ color: "Wood" }],
    price: 322, ctnPacking: "100 PCS CTN",
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=400&q=80" },
    tags: ["pen", "wooden", "eco-friendly", "sustainable", "economical"]
  },
  {
    id: "PN-05", model: "PN 05", name: "Radiant Ballpoint Pen",
    category: "Pens", subcategory: "Premium Pens", collection: "economical",
    description: "Premium radiant ballpoint pen with chrome finish.",
    features: ["Chrome finish", "Premium quality", "Gift box", "Refillable"],
    specifications: { material: "Brass Chrome Plated" },
    variants: [{ color: "Chrome" }, { color: "Gold" }],
    price: 701, ctnPacking: "30 PCS CTN",
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=400&q=80" },
    tags: ["pen", "radiant", "chrome", "premium", "economical"]
  },
  {
    id: "PN-06", model: "PN 06", name: "Spark Ballpoint Pen",
    category: "Pens", subcategory: "Ballpoint Pens", collection: "economical",
    description: "Colorful spark ballpoint pen for everyday writing needs.",
    features: ["Colorful design", "Comfortable grip", "Value pricing", "Smooth ink"],
    specifications: { material: "Metal & Plastic" },
    variants: [{ color: "Black" }, { color: "Blue" }, { color: "Red" }, { color: "Green" }],
    price: 322, ctnPacking: "100 PCS CTN",
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=400&q=80" },
    tags: ["pen", "spark", "colorful", "value", "economical"]
  },

  // NOTEBOOKS (6 products)
  {
    id: "NB-01", model: "NB 01", name: "Wiro Notebook",
    category: "Notebooks", subcategory: "Spiral Notebooks", collection: "economical",
    description: "Wire-o bound notebook with custom cover printing. 80 pages.",
    features: ["Wire-o binding", "Custom cover", "80 pages", "A5 size"],
    specifications: { capacity: "80 pages", material: "Paper 70gsm" },
    variants: [{ color: "White" }],
    price: 182, ctnPacking: "50 PCS CTN",
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&q=80" },
    tags: ["notebook", "wiro", "spiral", "custom", "economical"]
  },
  {
    id: "NB-02", model: "NB 02", name: "Hard Cover Notebook",
    category: "Notebooks", subcategory: "Hardbound Notebooks", collection: "economical",
    description: "Premium hard cover notebook for executive use. 160 pages.",
    features: ["Hard cover", "160 pages", "Ribbon bookmark", "Executive quality"],
    specifications: { capacity: "160 pages", material: "Paper 80gsm" },
    variants: [{ color: "Black" }, { color: "Brown" }, { color: "Navy" }],
    price: 339, ctnPacking: "25 PCS CTN",
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&q=80" },
    tags: ["notebook", "hardcover", "executive", "premium", "economical"]
  },
  {
    id: "NB-03", model: "NB 03", name: "Perfect Bind Notebook",
    category: "Notebooks", subcategory: "Perfect Bound", collection: "economical",
    description: "Clean perfect bound notebook with custom cover. Professional look.",
    features: ["Perfect binding", "Lay flat", "Custom cover", "Professional"],
    specifications: { capacity: "100 pages", material: "Paper 70gsm" },
    variants: [{ color: "White" }],
    price: 163, ctnPacking: "50 PCS CTN",
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&q=80" },
    tags: ["notebook", "perfect bound", "professional", "custom", "economical"]
  },
  {
    id: "NB-04", model: "NB 04", name: "Kraft Cover Notebook",
    category: "Notebooks", subcategory: "Eco Notebooks", collection: "economical",
    description: "Eco-friendly kraft cover notebook. Recyclable materials.",
    features: ["Kraft cover", "Eco-friendly", "Recyclable", "Natural look"],
    specifications: { capacity: "80 pages", material: "Recycled Paper" },
    variants: [{ color: "Brown" }],
    price: 189, ctnPacking: "50 PCS CTN",
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&q=80" },
    tags: ["notebook", "kraft", "eco-friendly", "recyclable", "economical"]
  },
  {
    id: "NB-05", model: "NB 05", name: "Vivid Notebook",
    category: "Notebooks", subcategory: "Premium Notebooks", collection: "economical",
    description: "Premium vivid notebook with colorful design options.",
    features: ["Colorful design", "Premium paper", "Elastic closure", "Pocket inside"],
    specifications: { capacity: "120 pages", material: "Premium Paper 100gsm" },
    variants: [{ color: "Blue" }, { color: "Red" }, { color: "Green" }, { color: "Purple" }],
    price: 261, ctnPacking: "30 PCS CTN",
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&q=80" },
    tags: ["notebook", "vivid", "colorful", "premium", "economical"]
  },
  {
    id: "NB-06", model: "NB 06", name: "Executive Notebook",
    category: "Notebooks", subcategory: "Executive Notebooks", collection: "economical",
    description: "Top-tier executive notebook with leather-like cover. Gift box included.",
    features: ["Leather-like cover", "160 pages", "Gift box", "Gold edges"],
    specifications: { capacity: "160 pages", material: "PU Leather Cover" },
    variants: [{ color: "Black" }, { color: "Brown" }, { color: "Tan" }],
    price: 339, ctnPacking: "20 PCS CTN",
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&q=80" },
    tags: ["notebook", "executive", "leather", "gift", "economical"]
  },

  // MOUSEPAD (1 product)
  {
    id: "MP-01", model: "MP 01", name: "Personalized Mousepad",
    category: "Mousepads", subcategory: "Custom Mousepads", collection: "economical",
    description: "Custom printed mousepad with sublimation printing. Smooth surface and rubber base.",
    features: ["Sublimation printing", "Smooth surface", "Rubber base", "Rounded corners"],
    specifications: { length: "9.25 inches", width: "7.5 inches", thickness: "3mm", material: "Rubber & Polyester" },
    variants: [{ color: "Custom" }],
    price: 250, ctnPacking: "100 PCS CTN",
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&q=80" },
    tags: ["mousepad", "custom", "sublimation", "office", "economical"]
  },

  // TOTE BAG (1 product)
  {
    id: "TB-01", model: "TB 01", name: "Personalized Tote Bag",
    category: "Tote Bags", subcategory: "Cotton Tote Bags", collection: "economical",
    description: "Eco-friendly cotton tote bag with custom printing. Available in 140gsm and 320gsm canvas.",
    features: ["Eco-friendly cotton", "Custom printing", "Digital or screen print", "Multiple sizes"],
    specifications: { length: "15 inches", width: "16 inches", material: "Cotton 140gsm / Canvas 320gsm" },
    variants: [{ color: "Natural" }, { color: "Black" }],
    price: 350, ctnPacking: "100 PCS CTN",
    customization: { logoPrinting: true, branding: true },
    images: { main: "https://images.unsplash.com/photo-1597484661973-ee6cd0b6482c?w=400&q=80" },
    tags: ["tote bag", "cotton", "eco-friendly", "custom", "economical"]
  }
];


// ============================================
// CATEGORY DEFINITIONS
// ============================================

export const productCategories = [
  // Premium Categories
  { id: "mobile-stands", name: "Mobile Stands", collection: "premium", slug: "mobile-stands", description: "Premium metal mobile stands with card holders, pen holders, and rotating bases", image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80", count: 18 },
  { id: "desk-accessories", name: "Desk Accessories", collection: "premium", slug: "desk-accessories", description: "Premium desk accessories including pen holders, tea coasters, and paper weights", image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80", count: 5 },
  { id: "card-holders", name: "Card Holders", collection: "premium", slug: "card-holders", description: "Premium ATM and visiting card holders in metal finish", image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80", count: 2 },
  { id: "desk-calendars", name: "Desk Calendars", collection: "premium", slug: "desk-calendars", description: "Premium desk calendars with clocks, photo frames, and elegant designs", image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80", count: 8 },
  // Economical Categories
  { id: "bottles", name: "Bottles", collection: "economical", slug: "bottles", description: "Wide range of bottles including temperature display, vacuum insulated, bamboo, and more", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80", count: 15 },
  { id: "mugs", name: "Mugs & Cups", collection: "economical", slug: "mugs", description: "Travel mugs, coffee cups, ceramic mugs, and specialty drinkware", image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&q=80", count: 4 },
  { id: "tumblers", name: "Tumblers", collection: "economical", slug: "tumblers", description: "Stanley-style tumblers and insulated cups", image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&q=80", count: 3 },
  { id: "clocks", name: "Digital Clocks", collection: "economical", slug: "clocks", description: "Digital alarm clocks, mirror clocks, and color-changing clocks", image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=400&q=80", count: 4 },
  { id: "mobile-accessories-eco", name: "Mobile Accessories", collection: "economical", slug: "mobile-accessories-economical", description: "Budget mobile stands, pop sockets, and laptop stands", image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80", count: 5 },
  // New Printo Categories
  { id: "keychains", name: "Keychains", collection: "economical", slug: "keychains", description: "Metal, acrylic and leather keychains with custom engraving and printing", image: "https://images.unsplash.com/photo-1602750819841-db44a76a5958?w=400&q=80", count: 6 },
  { id: "awards", name: "Awards & Trophies", collection: "economical", slug: "awards", description: "Wooden, crystal and acrylic trophies for recognition and achievements", image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&q=80", count: 7 },
  { id: "backpacks", name: "Backpacks", collection: "economical", slug: "backpacks", description: "Laptop bags, backpacks and sleeves with custom branding", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80", count: 6 },
  { id: "pens", name: "Pens", collection: "economical", slug: "pens", description: "Personalized pens including ballpoint, roller ball, stylus and wooden pens", image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=400&q=80", count: 6 },
  { id: "notebooks", name: "Notebooks", collection: "economical", slug: "notebooks", description: "Custom notebooks with spiral, hardcover, perfect bound options", image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&q=80", count: 6 },
  { id: "mousepads", name: "Mousepads", collection: "economical", slug: "mousepads", description: "Custom printed mousepads with sublimation printing", image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&q=80", count: 1 },
  { id: "tote-bags", name: "Tote Bags", collection: "economical", slug: "tote-bags", description: "Eco-friendly cotton tote bags with custom printing", image: "https://images.unsplash.com/photo-1597484661973-ee6cd0b6482c?w=400&q=80", count: 1 }
];

// ============================================
// HELPER FUNCTIONS
// ============================================

export const getAllProducts = () => kamleshGroupProducts;
export const getTotalProductCount = () => kamleshGroupProducts.length;

export const getProductsByCollection = (collection: "premium" | "economical") => {
  return kamleshGroupProducts.filter(p => p.collection === collection);
};

export const getPremiumProducts = () => getProductsByCollection("premium");
export const getEconomicalProducts = () => getProductsByCollection("economical");

export const getProductsByCategory = (category: string) => {
  return kamleshGroupProducts.filter(p => p.category.toLowerCase() === category.toLowerCase());
};

export const getProductsBySubcategory = (subcategory: string) => {
  return kamleshGroupProducts.filter(p => p.subcategory?.toLowerCase() === subcategory.toLowerCase());
};

export const searchProducts = (query: string) => {
  const lowerQuery = query.toLowerCase();
  return kamleshGroupProducts.filter(p => 
    p.name.toLowerCase().includes(lowerQuery) ||
    p.model.toLowerCase().includes(lowerQuery) ||
    p.description.toLowerCase().includes(lowerQuery) ||
    p.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
    p.category.toLowerCase().includes(lowerQuery)
  );
};

export const getProductByModel = (model: string) => {
  const normalizedModel = model.toLowerCase().replace(/\s+/g, '-');
  return kamleshGroupProducts.find(p => 
    p.model.toLowerCase().replace(/\s+/g, '-') === normalizedModel ||
    p.model.toLowerCase() === model.toLowerCase() ||
    p.id.toLowerCase() === model.toLowerCase()
  );
};

export const getProductsByPriceRange = (min: number, max: number) => {
  return kamleshGroupProducts.filter(p => {
    if (!p.price) return false;
    const price = typeof p.price === 'number' ? p.price : parseInt(String(p.price).split(' ')[0]);
    return price >= min && price <= max;
  });
};

export const getFeaturedProducts = (count: number = 8) => {
  const premiumCount = Math.ceil(count / 2);
  const economicalCount = Math.floor(count / 2);
  const premium = getPremiumProducts().slice(0, premiumCount);
  const economical = getEconomicalProducts().slice(0, economicalCount);
  return [...premium, ...economical];
};

export const getCategoryBySlug = (slug: string) => {
  return productCategories.find(c => c.slug === slug);
};

export const getProductsForCategoryPage = (slug: string) => {
  const category = getCategoryBySlug(slug);
  if (!category) {
    console.log('Category not found for slug:', slug);
    return [];
  }
  
  // Handle special cases for overlapping category names
  if (slug === 'mobile-stands') {
    return getPremiumProducts().filter(p => p.category === 'Mobile Stands');
  }
  if (slug === 'mobile-accessories-economical') {
    return getEconomicalProducts().filter(p => p.category === 'Mobile Accessories');
  }
  
  return getProductsByCategory(category.name);
};

export const getRelatedProducts = (product: UnifiedProduct, count: number = 4) => {
  return kamleshGroupProducts
    .filter(p => p.id !== product.id && (p.category === product.category || p.collection === product.collection))
    .slice(0, count);
};

export const getCatalogStats = () => ({
  total: kamleshGroupProducts.length,
  premium: getPremiumProducts().length,
  economical: getEconomicalProducts().length,
  categories: productCategories.length,
  priceRange: { min: 9, max: 385 }
});

export default kamleshGroupProducts;