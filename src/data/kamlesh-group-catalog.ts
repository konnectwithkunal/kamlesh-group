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
  { id: "mobile-accessories-eco", name: "Mobile Accessories", collection: "economical", slug: "mobile-accessories-economical", description: "Budget mobile stands, pop sockets, and laptop stands", image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80", count: 5 }
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