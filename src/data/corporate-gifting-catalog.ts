// src/data/corporate-gifting-catalog.ts
// Corporate Gifting & Premium Products Catalog Data
// Extracted from Corporate_Gifting___Premium.pdf

export interface ProductVariant {
  color: string;
  finish?: string;
  image?: string;
}

export interface ProductSpecification {
  height?: string;
  length?: string;
  width?: string;
  weight?: string;
  material?: string;
  thickness?: string;
  diameter?: string;
  includes?: string;
}

export interface CorporateGiftProduct {
  id: string;
  model: string;
  name: string;
  category: string;
  subcategory?: string;
  description: string;
  features: string[];
  useCases: string[];
  specifications: ProductSpecification;
  variants: ProductVariant[];
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

export const corporateGiftingProducts: CorporateGiftProduct[] = [
  // ============================================
  // METAL MOBILE STANDS
  // ============================================
  {
    id: "R-1101",
    model: "R-1101",
    name: "Metal Mobile Stand",
    category: "Mobile Stands",
    subcategory: "Basic Stands",
    description: "Premium metal mobile stand with universal compatibility for all mobiles and iPads. Features visiting card holder slot.",
    features: [
      "Universal compatibility for all mobiles & iPads",
      "Built-in visiting card holder",
      "Mirror & Gold finish options",
      "Portable for travel",
      "Logo/branding can be printed"
    ],
    useCases: ["Office", "Home", "Travel", "Reception Desks"],
    specifications: {
      height: "85 mm",
      length: "95 mm",
      width: "70 mm",
      weight: "Black-120 gm, S.S.-110 gm",
      material: "CRC & SS",
      thickness: "0.92 to 1 MM"
    },
    variants: [
      { color: "Black", finish: "Matte" },
      { color: "Silver", finish: "Mirror" },
      { color: "Gold", finish: "Mirror" }
    ],
    customization: {
      logoPrinting: true,
      branding: true
    },
    images: {
      main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80",
      lifestyle: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80",
      packaging: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80"
    },
    tags: ["mobile stand", "phone holder", "desk accessory", "corporate gift"]
  },
  {
    id: "R-1102",
    model: "R-1102",
    name: "Metal Mobile Stand with Card Holder",
    category: "Mobile Stands",
    subcategory: "Card Holder Combo",
    description: "Premium metal mobile stand with integrated card holder. Universal compatibility for all mobiles and iPads with mirror finish option.",
    features: [
      "Universal compatibility for all mobiles & iPads",
      "Integrated visiting card holder",
      "Mirror finish available",
      "Portable design",
      "Logo/branding can be printed"
    ],
    useCases: ["Office", "Home", "Travel", "Reception Desks"],
    specifications: {
      height: "85 mm",
      length: "95 mm",
      width: "70 mm",
      weight: "Black-150 gm, S.S.-140 gm",
      material: "CRC & SS",
      thickness: "0.92 to 1 MM"
    },
    variants: [
      { color: "Black", finish: "Matte" },
      { color: "Silver", finish: "Mirror" }
    ],
    customization: {
      logoPrinting: true,
      branding: true
    },
    images: {
      main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80",
      lifestyle: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80",
      packaging: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80"
    },
    tags: ["mobile stand", "card holder", "desk accessory", "corporate gift"]
  },
  {
    id: "R-1103",
    model: "R-1103",
    name: "Metal Mobile Stand with Card & Pen Holder",
    category: "Mobile Stands",
    subcategory: "Multi-Function",
    description: "3-in-1 metal mobile stand with integrated visiting card holder and pen holder. Universal compatibility for all devices.",
    features: [
      "Universal compatibility for all mobiles & iPads",
      "Integrated visiting card holder",
      "Built-in pen holder",
      "Portable design",
      "Logo/branding can be printed"
    ],
    useCases: ["Office", "Home", "Travel", "Reception Desks"],
    specifications: {
      height: "85 mm",
      length: "95 mm",
      width: "70 mm",
      weight: "180 gm",
      material: "CRC",
      thickness: "1 MM"
    },
    variants: [
      { color: "Black", finish: "Matte" },
      { color: "Silver", finish: "Mirror" }
    ],
    customization: {
      logoPrinting: true,
      branding: true
    },
    images: {
      main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80",
      lifestyle: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80",
      packaging: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80"
    },
    tags: ["mobile stand", "pen holder", "card holder", "3-in-1", "corporate gift"]
  },
  {
    id: "R-1104",
    model: "R-1104",
    name: "Metal Mobile Stand - Double Side Holder",
    category: "Mobile Stands",
    subcategory: "Double Side",
    description: "Double-sided metal mobile stand for simultaneous mobile and iPad holding. Universal compatibility with portable design.",
    features: [
      "Double side holder design",
      "Universal compatibility for all mobiles & iPads",
      "Portable for travel",
      "Logo/branding can be printed"
    ],
    useCases: ["Office", "Home", "Travel"],
    specifications: {
      height: "85 mm",
      length: "95 mm",
      width: "70 mm",
      weight: "130 gm",
      material: "CRC",
      thickness: "1 MM"
    },
    variants: [
      { color: "Black", finish: "Matte" }
    ],
    customization: {
      logoPrinting: true,
      branding: true
    },
    images: {
      main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80",
      lifestyle: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80",
      packaging: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80"
    },
    tags: ["mobile stand", "double side", "tablet stand", "corporate gift"]
  },
  {
    id: "R-1105",
    model: "R-1105",
    name: "Metal Mobile Stand with Writing Pad Holder",
    category: "Mobile Stands",
    subcategory: "Writing Pad Combo",
    description: "Premium metal mobile stand with integrated memo/writing pad holder. Includes 125 paper sheets. Perfect for trade counters and reception desks.",
    features: [
      "Universal compatibility for all mobiles & iPads",
      "Memo pad holder with 125 paper sheets included",
      "Suitable for trade counters, banks, hotels",
      "Logo/branding can be printed"
    ],
    useCases: ["Trade Counters", "Estate Agents", "Banks", "Financial Advisors", "Hotel Reception Desks"],
    specifications: {
      height: "85 mm",
      length: "95 mm",
      width: "80 mm",
      weight: "Black-210 gm, S.S.-200 gm",
      material: "CRC & SS",
      thickness: "0.92 to 1 MM",
      includes: "125 Paper Sheets"
    },
    variants: [
      { color: "Black", finish: "Matte" },
      { color: "Silver", finish: "Mirror" }
    ],
    customization: {
      logoPrinting: true,
      branding: true
    },
    images: {
      main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80",
      lifestyle: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80",
      packaging: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80"
    },
    tags: ["mobile stand", "memo pad", "writing pad", "corporate gift", "reception"]
  },
  {
    id: "R-1106",
    model: "R-1106",
    name: "Metal Mobile Stand - Compact",
    category: "Mobile Stands",
    subcategory: "Basic Stands",
    description: "Compact metal mobile stand with universal compatibility. Lightweight and portable design.",
    features: [
      "Universal compatibility for all mobiles & iPads",
      "Compact lightweight design",
      "Portable for travel",
      "Logo/branding can be printed"
    ],
    useCases: ["Office", "Home", "Travel"],
    specifications: {
      height: "90 mm",
      length: "80 mm",
      width: "70 mm",
      weight: "100 gm",
      material: "CRC",
      thickness: "1 MM"
    },
    variants: [
      { color: "Black", finish: "Matte" }
    ],
    customization: {
      logoPrinting: true,
      branding: true
    },
    images: {
      main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80",
      lifestyle: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80",
      packaging: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80"
    },
    tags: ["mobile stand", "compact", "portable", "corporate gift"]
  },
  {
    id: "R-1107",
    model: "R-1107",
    name: "Metal Mobile Stand - Premium",
    category: "Mobile Stands",
    subcategory: "Basic Stands",
    description: "Premium quality metal mobile stand with sleek design. Universal compatibility for all devices.",
    features: [
      "Universal compatibility for all mobiles & iPads",
      "Premium sleek design",
      "Portable for travel",
      "Logo/branding can be printed"
    ],
    useCases: ["Office", "Home", "Travel"],
    specifications: {
      height: "90 mm",
      length: "80 mm",
      width: "70 mm",
      weight: "100 gm",
      material: "CRC",
      thickness: "1 MM"
    },
    variants: [
      { color: "Black", finish: "Matte" }
    ],
    customization: {
      logoPrinting: true,
      branding: true
    },
    images: {
      main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80",
      lifestyle: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80",
      packaging: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80"
    },
    tags: ["mobile stand", "premium", "corporate gift"]
  },
  {
    id: "R-1108",
    model: "R-1108",
    name: "Metal iPad Stand",
    category: "Mobile Stands",
    subcategory: "iPad Stands",
    description: "Heavy-duty metal iPad stand designed for corporate offices, banks, and hotel reception desks. Universal compatibility.",
    features: [
      "Universal compatibility for all mobiles & iPads",
      "Heavy-duty construction",
      "Suitable for corporate use",
      "Logo/branding can be printed"
    ],
    useCases: ["Corporate Office", "Banks", "Home", "Hotel Reception Desks"],
    specifications: {
      height: "140 mm",
      length: "110 mm",
      width: "90 mm",
      weight: "330 gm",
      material: "CRC",
      thickness: "1.5 MM"
    },
    variants: [
      { color: "Black", finish: "Matte" },
      { color: "Silver", finish: "Mirror" }
    ],
    customization: {
      logoPrinting: true,
      branding: true
    },
    images: {
      main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80",
      lifestyle: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80",
      packaging: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80"
    },
    tags: ["ipad stand", "tablet stand", "heavy duty", "corporate gift"]
  },
  {
    id: "R-2507",
    model: "R-2507",
    name: "Metal Mobile Stand - Dual Finish",
    category: "Mobile Stands",
    subcategory: "Premium Collection",
    description: "Premium metal mobile stand available in black and mirror finish. Universal compatibility with elegant design.",
    features: [
      "Universal compatibility for all mobiles & iPads",
      "Black & Mirror finish options",
      "Portable for travel",
      "Logo/branding can be printed"
    ],
    useCases: ["Office", "Home", "Travel"],
    specifications: {
      height: "85 mm",
      length: "95 mm",
      width: "70 mm",
      weight: "Black-130 gm, S.S.-120 gm",
      material: "CRC & SS",
      thickness: "0.92 to 1 MM"
    },
    variants: [
      { color: "Black", finish: "Matte" },
      { color: "Silver", finish: "Mirror" }
    ],
    customization: {
      logoPrinting: true,
      branding: true
    },
    images: {
      main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80",
      packaging: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80"
    },
    tags: ["mobile stand", "dual finish", "premium", "corporate gift"]
  },
  {
    id: "R-1408",
    model: "R-1408",
    name: "Metal Mobile Stand with Card Holder - Premium",
    category: "Mobile Stands",
    subcategory: "Card Holder Combo",
    description: "Premium metal mobile stand with integrated visiting card holder. Available in black and mirror finish.",
    features: [
      "Universal compatibility for all mobiles & iPads",
      "Integrated visiting card holder",
      "Black & Mirror finish options",
      "Portable for travel",
      "Logo/branding can be printed"
    ],
    useCases: ["Office", "Home", "Travel"],
    specifications: {
      height: "85 mm",
      length: "95 mm",
      width: "70 mm",
      weight: "Black-160 gm, S.S.-150 gm",
      material: "CRC & SS",
      thickness: "0.92 to 1 MM"
    },
    variants: [
      { color: "Black", finish: "Matte" },
      { color: "Silver", finish: "Mirror" }
    ],
    customization: {
      logoPrinting: true,
      branding: true
    },
    images: {
      main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80",
      packaging: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80"
    },
    tags: ["mobile stand", "card holder", "premium", "corporate gift"]
  },
  {
    id: "R-1416",
    model: "R-1416",
    name: "Metal Mobile Stand with Card Holder - Triple Finish",
    category: "Mobile Stands",
    subcategory: "Card Holder Combo",
    description: "Metal mobile stand with card holder available in grey, black, and mirror finish options.",
    features: [
      "Universal compatibility for all mobiles & iPads",
      "Integrated visiting card holder",
      "Grey, Black & Mirror finish options",
      "Portable for travel",
      "Logo/branding can be printed"
    ],
    useCases: ["Office", "Home", "Travel"],
    specifications: {
      height: "85 mm",
      length: "95 mm",
      width: "70 mm",
      weight: "Black/Grey-160 gm, S.S.-150 gm",
      material: "CRC & SS",
      thickness: "0.92 to 1 MM"
    },
    variants: [
      { color: "Black", finish: "Matte" },
      { color: "Grey", finish: "Matte" },
      { color: "Silver", finish: "Mirror" }
    ],
    customization: {
      logoPrinting: true,
      branding: true
    },
    images: {
      main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80",
      packaging: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80"
    },
    tags: ["mobile stand", "card holder", "triple finish", "corporate gift"]
  },

  // ============================================
  // MULTI ANGLE ADJUSTABLE STANDS
  // ============================================
  {
    id: "R-1111",
    model: "R-1111",
    name: "Multi Angle Adjustable Stand for iPad & Mobile",
    category: "Mobile Stands",
    subcategory: "Adjustable Stands",
    description: "Multi-angle adjustable stand perfect for watching videos, viewing photos, calling, and reading. Available in black-grey and mirror finish.",
    features: [
      "Multi-angle adjustable design",
      "Universal compatibility for all mobiles & iPads",
      "Perfect for video watching, photos, calling, reading",
      "Black-Grey & Mirror finish options",
      "Logo/branding can be printed"
    ],
    useCases: ["Office", "Home", "Video Calls", "Reading"],
    specifications: {
      height: "110 mm",
      length: "84 mm",
      width: "80 mm",
      weight: "Black/Grey-175 gm, S.S.-155 gm",
      material: "CRC & SS",
      thickness: "0.92 to 1 MM"
    },
    variants: [
      { color: "Black", finish: "Matte" },
      { color: "Grey", finish: "Matte" },
      { color: "Silver", finish: "Mirror" }
    ],
    customization: {
      logoPrinting: true,
      branding: true
    },
    images: {
      main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80",
      packaging: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80"
    },
    tags: ["adjustable stand", "multi angle", "ipad stand", "corporate gift"]
  },
  {
    id: "R-1114",
    model: "R-1114",
    name: "3-in-1 Metal Mobile Stand (Mobile + Pen + Card Holder)",
    category: "Mobile Stands",
    subcategory: "Multi-Function",
    description: "Premium 3-in-1 metal stand combining mobile stand, pen stand, and business card holder. Available in black and mirror finish.",
    features: [
      "3-in-1 design: Mobile + Pen + Card Holder",
      "Universal compatibility",
      "Black & Mirror finish options",
      "Portable for travel",
      "Logo/branding can be printed"
    ],
    useCases: ["Office", "Home", "Travel"],
    specifications: {
      height: "85 mm",
      length: "95 mm",
      width: "105 mm",
      weight: "Black-180 gm, S.S.-170 gm",
      material: "CRC & SS",
      thickness: "0.92 to 1 MM"
    },
    variants: [
      { color: "Black", finish: "Matte" },
      { color: "Silver", finish: "Mirror" }
    ],
    customization: {
      logoPrinting: true,
      branding: true
    },
    images: {
      main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80",
      packaging: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80"
    },
    tags: ["3-in-1", "mobile stand", "pen holder", "card holder", "corporate gift"]
  },
  {
    id: "R-1115",
    model: "R-1115",
    name: "Multi Angle Adjustable Stand - Foldable",
    category: "Mobile Stands",
    subcategory: "Adjustable Stands",
    description: "Foldable multi-angle adjustable stand for iPad and mobile. Perfect for video watching and calling.",
    features: [
      "Multi-angle adjustable design",
      "Foldable for portability",
      "Universal compatibility",
      "Black & Mirror finish options",
      "Logo/branding can be printed"
    ],
    useCases: ["Office", "Home", "Video Calls", "Travel"],
    specifications: {
      height: "130 mm",
      length: "105 mm",
      width: "90 mm",
      weight: "Black-190 gm, S.S.-180 gm",
      material: "CRC & SS",
      thickness: "0.92 to 1 MM"
    },
    variants: [
      { color: "Black", finish: "Matte" },
      { color: "Silver", finish: "Mirror" }
    ],
    customization: {
      logoPrinting: true,
      branding: true
    },
    images: {
      main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80",
      packaging: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80"
    },
    tags: ["adjustable stand", "foldable", "portable", "corporate gift"]
  },
  {
    id: "R-2101",
    model: "R-2101",
    name: "Multi Angle Movable Metal Mobile Stand",
    category: "Mobile Stands",
    subcategory: "Adjustable Stands",
    description: "Premium multi-angle movable metal mobile stand with foldable design. Available in black, grey, white, and SS mirror finish.",
    features: [
      "Multi-angle movable design",
      "Foldable for storage",
      "Universal compatibility",
      "4 color options",
      "Logo/branding can be printed"
    ],
    useCases: ["Office", "Home", "Video Calls"],
    specifications: {
      height: "140 mm",
      length: "105 mm",
      width: "75 mm",
      weight: "Black/White/Grey-200 gm, S.S.-190 gm",
      material: "CRC & SS",
      thickness: "0.92 to 1 MM"
    },
    variants: [
      { color: "Black", finish: "Matte" },
      { color: "Grey", finish: "Matte" },
      { color: "White", finish: "Matte" },
      { color: "Silver", finish: "SS Mirror" }
    ],
    customization: {
      logoPrinting: true,
      branding: true
    },
    images: {
      main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80",
      packaging: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80"
    },
    tags: ["movable stand", "multi angle", "foldable", "corporate gift"]
  },

  // ============================================
  // 360° ROTATING STANDS
  // ============================================
  {
    id: "R-2102",
    model: "R-2102",
    name: "360° Rotating Foldable Metal Mobile & iPad Stand",
    category: "Mobile Stands",
    subcategory: "Rotating Stands",
    description: "Premium 360-degree rotating foldable stand with gold branding plate. Perfect for video watching and calling.",
    features: [
      "360° rotating base",
      "Foldable design",
      "Gold branding plate",
      "Universal compatibility",
      "Logo/branding can be printed"
    ],
    useCases: ["Office", "Home", "Video Calls", "Travel"],
    specifications: {
      height: "140 mm",
      length: "105 mm",
      width: "105 mm",
      weight: "340 gm",
      material: "CRC",
      thickness: "1 & 2 MM"
    },
    variants: [
      { color: "Black", finish: "Matte with Gold Plate" }
    ],
    customization: {
      logoPrinting: true,
      branding: true
    },
    images: {
      main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80",
      packaging: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80"
    },
    tags: ["360 rotating", "foldable", "premium", "corporate gift"]
  },
  {
    id: "R-2103",
    model: "R-2103",
    name: "180° Multi Angle Metal Mobile & iPad Stand - Pocket Size",
    category: "Mobile Stands",
    subcategory: "Adjustable Stands",
    description: "Pocket-size foldable 180-degree multi-angle stand. Compact design perfect for travel.",
    features: [
      "180° adjustable angle",
      "Pocket-size foldable design",
      "Universal compatibility",
      "Available in Black and Gold/S.S.",
      "Logo/branding can be printed"
    ],
    useCases: ["Office", "Home", "Travel"],
    specifications: {
      height: "150 mm",
      length: "110 mm",
      width: "70 mm",
      weight: "Black-170 gm, Gold/S.S.-140 gm",
      material: "CRC & SS, Alu.",
      thickness: "0.92 to 1.2 MM"
    },
    variants: [
      { color: "Black", finish: "Matte" },
      { color: "Gold", finish: "Metallic" },
      { color: "Silver", finish: "SS" }
    ],
    customization: {
      logoPrinting: true,
      branding: true
    },
    images: {
      main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80",
      packaging: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80"
    },
    tags: ["pocket size", "foldable", "180 degree", "corporate gift"]
  },
  {
    id: "R-2104",
    model: "R-2104",
    name: "360° Rotating Foldable Metal Mobile & iPad Stand - Large",
    category: "Mobile Stands",
    subcategory: "Rotating Stands",
    description: "Large 360-degree rotating foldable stand with gold branding plate. Heavy-duty construction for tablets.",
    features: [
      "360° rotating base",
      "Large foldable design",
      "Gold branding plate",
      "Universal compatibility",
      "Logo/branding can be printed"
    ],
    useCases: ["Office", "Home", "Video Calls", "Travel"],
    specifications: {
      height: "160 mm",
      length: "105 mm",
      width: "105 mm",
      weight: "280 gm",
      material: "CRC",
      thickness: "1 & 2 MM"
    },
    variants: [
      { color: "Black", finish: "Matte with Gold Plate" }
    ],
    customization: {
      logoPrinting: true,
      branding: true
    },
    images: {
      main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80",
      packaging: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80"
    },
    tags: ["360 rotating", "large", "foldable", "corporate gift"]
  },

  // ============================================
  // STATIONERY PRODUCTS HOLDER
  // ============================================
  {
    id: "R-7101",
    model: "R-7101",
    name: "Stationery Products Holder (Pen-Pencil-Marker)",
    category: "Desk Accessories",
    subcategory: "Pen Holders",
    description: "Premium stainless steel stationery holder for pens, pencils, markers, rulers, and other office supplies.",
    features: [
      "Multi-purpose stationery holder",
      "Holds pens, pencils, markers, rulers",
      "SS Mirror, Black, Grey finish options",
      "Perfect for office and home",
      "Logo/branding can be printed"
    ],
    useCases: ["School", "Office", "Bank", "Travel Agent", "Home", "Hotel Reception"],
    specifications: {
      height: "90 mm",
      length: "60 mm",
      width: "60 mm",
      weight: "Black/Grey-230 gm, S.S.-220 gm",
      material: "CRC & SS",
      thickness: "0.92 to 1 MM"
    },
    variants: [
      { color: "Black", finish: "Matte" },
      { color: "Grey", finish: "Matte" },
      { color: "Silver", finish: "SS Mirror" }
    ],
    customization: {
      logoPrinting: true,
      branding: true
    },
    images: {
      main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80",
      lifestyle: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80",
      packaging: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80"
    },
    tags: ["pen holder", "stationery holder", "desk accessory", "corporate gift"]
  },

  // ============================================
  // ATM & VISITING CARD HOLDERS
  // ============================================
  {
    id: "R-1001",
    model: "R-1001",
    name: "Premium ATM & Visiting Card Holder",
    category: "Card Holders",
    subcategory: "Card Cases",
    description: "Premium stainless steel ATM and visiting card holder. Travel wallet with high-quality material and multi-card protection.",
    features: [
      "High-quality stainless steel material",
      "Multi-card protector",
      "Travel wallet design",
      "Black, Gold, Rose Gold & SS Matte finish",
      "Logo/branding can be printed"
    ],
    useCases: ["Business", "Travel", "Corporate Gift"],
    specifications: {
      height: "7 mm",
      length: "56 mm",
      width: "92 mm",
      weight: "55 gm (all finishes)",
      material: "SS",
      thickness: "0.45 to 0.55 MM"
    },
    variants: [
      { color: "Black", finish: "Matte" },
      { color: "Gold", finish: "Metallic" },
      { color: "Rose Gold", finish: "Metallic" },
      { color: "Silver", finish: "SS Matte" }
    ],
    customization: {
      logoPrinting: true,
      branding: true
    },
    images: {
      main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80",
      packaging: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80"
    },
    tags: ["card holder", "atm card", "visiting card", "travel wallet", "corporate gift"]
  },
  {
    id: "R-1002",
    model: "R-1002",
    name: "Envelope Steel Table Card Holder",
    category: "Card Holders",
    subcategory: "Table Card Holders",
    description: "Elegant envelope-style steel table card holder. Perfect for trade counters, estate agents, banks, and hotel reception desks.",
    features: [
      "Envelope design with angled open access",
      "Easy card access",
      "Ideal for brand display",
      "Perfect for reception areas",
      "Logo/branding can be printed"
    ],
    useCases: ["Trade Counters", "Estate Agents", "Banks", "Financial Advisors", "Hotel Reception Desks"],
    specifications: {
      height: "65 mm",
      length: "16 mm",
      width: "100 mm",
      weight: "55 gm",
      material: "SS",
      thickness: "0.45 to 0.5 MM"
    },
    variants: [
      { color: "Silver", finish: "SS Mirror" }
    ],
    customization: {
      logoPrinting: true,
      branding: true
    },
    images: {
      main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80",
      packaging: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80"
    },
    tags: ["card holder", "table card", "envelope design", "reception", "corporate gift"]
  },

  // ============================================
  // TEA COASTERS
  // ============================================
  {
    id: "R-5101",
    model: "R-5101",
    name: "Premium Stainless Steel Tea Coaster - Set of 6",
    category: "Desk Accessories",
    subcategory: "Tea Coasters",
    description: "Premium stainless steel tea coaster set with 6 plates. Features anti-slip pad on bottom. Perfect for brand promotions.",
    features: [
      "Set of 6 plates",
      "Anti-slip pad on bottom",
      "Gold finish with stand",
      "Perfect for catering events",
      "Logo/branding can be printed"
    ],
    useCases: ["Trade Counters", "Estate Agents", "Banks", "Financial Advisors", "Hotel Reception Desks", "Catering Events", "Special Occasions"],
    specifications: {
      diameter: "Container: 105 mm, Plate: 87 mm",
      weight: "210 gm",
      material: "SS",
      thickness: "0.55 to 0.75 MM"
    },
    variants: [
      { color: "Gold", finish: "Metallic with Black Holder" }
    ],
    customization: {
      logoPrinting: true,
      branding: true
    },
    images: {
      main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80",
      packaging: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80"
    },
    tags: ["tea coaster", "set of 6", "premium", "corporate gift"]
  },
  {
    id: "R-5102",
    model: "R-5102",
    name: "Stainless Steel Tea Coaster - Set of 4",
    category: "Desk Accessories",
    subcategory: "Tea Coasters",
    description: "Elegant stainless steel tea coaster set with 4 plates and holder. Perfect for home, office, and coffee lounges.",
    features: [
      "Set of 4 plates with holder",
      "Square and round options",
      "Accommodates cups, glasses, mugs",
      "Ideal for brand promotion",
      "Logo/branding can be printed"
    ],
    useCases: ["Home", "Coffee Lounge", "Garden", "Patio", "Office"],
    specifications: {
      diameter: "Container: 100 mm, Plate: 85 mm",
      weight: "Square-160 gm, Round-140 gm",
      material: "SS",
      thickness: "0.45 to 0.6 MM"
    },
    variants: [
      { color: "Silver", finish: "SS Mirror" }
    ],
    customization: {
      logoPrinting: true,
      branding: true
    },
    images: {
      main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80",
      packaging: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80"
    },
    tags: ["tea coaster", "set of 4", "corporate gift"]
  },
  {
    id: "R-5103",
    model: "R-5103",
    name: "Stainless Steel Tea Coaster - Set of 6 Premium",
    category: "Desk Accessories",
    subcategory: "Tea Coasters",
    description: "Premium 6-piece tea coaster set with elegant holder. Available in gold and black finishes.",
    features: [
      "Set of 6 plates with holder",
      "Premium design",
      "Gold and Black finish options",
      "Ideal for brand promotion",
      "Logo/branding can be printed"
    ],
    useCases: ["Home", "Coffee Lounge", "Garden", "Patio", "Office"],
    specifications: {
      diameter: "Container: 100 mm, Plate: 85 mm",
      weight: "190 gm",
      material: "SS",
      thickness: "0.45 to 0.6 MM"
    },
    variants: [
      { color: "Gold", finish: "Metallic" },
      { color: "Black", finish: "Matte" }
    ],
    customization: {
      logoPrinting: true,
      branding: true
    },
    images: {
      main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80",
      packaging: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80"
    },
    tags: ["tea coaster", "set of 6", "premium", "corporate gift"]
  },

  // ============================================
  // METAL PAPER WEIGHT
  // ============================================
  {
    id: "R-201",
    model: "R-201",
    name: "Metal Paper Weight",
    category: "Desk Accessories",
    subcategory: "Paper Weights",
    description: "Premium zinc metal paper weight with multi-color print capability. Perfect for pharma companies, banks, and offices.",
    features: [
      "Premium zinc construction",
      "Multi-color print option",
      "Silver and Gold rim options",
      "Perfect for brand display",
      "Logo/branding can be printed"
    ],
    useCases: ["Pharma Company", "Estate Agents", "Banks", "Financial Advisors", "Office", "Hotel Reception Desks"],
    specifications: {
      diameter: "60 mm",
      weight: "95 gm",
      material: "Zinc",
      thickness: "5 MM"
    },
    variants: [
      { color: "Silver", finish: "Chrome with Black Center" },
      { color: "Gold", finish: "Gold with Black Center" }
    ],
    customization: {
      logoPrinting: true,
      branding: true
    },
    images: {
      main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80",
      lifestyle: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80",
      packaging: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80"
    },
    tags: ["paper weight", "desk accessory", "premium", "corporate gift"]
  },

  // ============================================
  // STEEL LIFETIME CALENDARS
  // ============================================
  {
    id: "R-124",
    model: "R-124",
    name: "Steel Life Time Calendar with Clock and Month Plate - Small",
    category: "Desk Calendars",
    subcategory: "With Clock",
    description: "Compact steel lifetime calendar with integrated clock and adjustable month plate. Perfect for office and home use.",
    features: [
      "Lifetime calendar with adjustable date",
      "Integrated clock",
      "Adjustable month plate",
      "Small size for desk",
      "Logo/branding can be printed"
    ],
    useCases: ["School", "Office", "Pharma Company", "Bank", "Financial Advisors", "Home", "Hotel Reception"],
    specifications: {
      height: "100 mm",
      length: "40 mm",
      width: "105 mm",
      weight: "Without Clock-75 gm, With Clock-90 gm",
      material: "SS",
      thickness: "0.55 to 0.6 MM"
    },
    variants: [
      { color: "Silver", finish: "SS" }
    ],
    customization: {
      logoPrinting: true,
      branding: true
    },
    images: {
      main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80",
      lifestyle: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80",
      packaging: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80"
    },
    tags: ["lifetime calendar", "desk calendar", "with clock", "corporate gift"]
  },
  {
    id: "R-125",
    model: "R-125",
    name: "Steel Life Time Calendar with Month Plate - Small",
    category: "Desk Calendars",
    subcategory: "Basic",
    description: "Compact steel lifetime calendar with adjustable month plate. Clean design without clock.",
    features: [
      "Lifetime calendar with adjustable date",
      "Adjustable month plate",
      "Small size for desk",
      "Clean minimalist design",
      "Logo/branding can be printed"
    ],
    useCases: ["School", "Office", "Pharma Company", "Bank", "Financial Advisors", "Home", "Hotel Reception"],
    specifications: {
      height: "100 mm",
      length: "40 mm",
      width: "105 mm",
      weight: "80 gm",
      material: "SS",
      thickness: "0.55 to 0.6 MM"
    },
    variants: [
      { color: "Silver", finish: "SS" }
    ],
    customization: {
      logoPrinting: true,
      branding: true
    },
    images: {
      main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80",
      packaging: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80"
    },
    tags: ["lifetime calendar", "desk calendar", "compact", "corporate gift"]
  },
  {
    id: "R-126",
    model: "R-126",
    name: "Steel Life Time Calendar with Pen Holder",
    category: "Desk Calendars",
    subcategory: "Multi-Function",
    description: "Steel lifetime calendar with integrated pen holder. Available in multiple color and finish options.",
    features: [
      "Lifetime calendar with adjustable date",
      "Integrated pen holder",
      "Black, Gold, Rose Gold & Silver finish",
      "Logo/branding can be printed"
    ],
    useCases: ["School", "Office", "Pharma Company", "Bank", "Financial Advisors", "Home", "Hotel Reception"],
    specifications: {
      height: "100 mm",
      length: "42 mm",
      width: "120 mm",
      weight: "110 gm",
      material: "CRS & SS",
      thickness: "0.55 to 0.6 MM"
    },
    variants: [
      { color: "Black", finish: "Matte" },
      { color: "Gold", finish: "Metallic" },
      { color: "Rose Gold", finish: "Metallic" },
      { color: "Silver", finish: "SS" }
    ],
    customization: {
      logoPrinting: true,
      branding: true
    },
    images: {
      main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80",
      lifestyle: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80",
      packaging: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80"
    },
    tags: ["lifetime calendar", "pen holder", "multi-function", "corporate gift"]
  },
  {
    id: "R-129",
    model: "R-129",
    name: "Steel Life Time Calendar with Month Plate - Big",
    category: "Desk Calendars",
    subcategory: "Basic",
    description: "Large steel lifetime calendar with adjustable month plate. Prominent display for executive desks.",
    features: [
      "Large lifetime calendar",
      "Adjustable month plate",
      "Prominent executive display",
      "Logo/branding can be printed"
    ],
    useCases: ["School", "Office", "Pharma Company", "Bank", "Financial Advisors", "Home", "Hotel Reception"],
    specifications: {
      height: "140 mm",
      length: "48 mm",
      width: "155 mm",
      weight: "155 gm",
      material: "SS",
      thickness: "0.55 to 0.6 MM"
    },
    variants: [
      { color: "Silver", finish: "SS" }
    ],
    customization: {
      logoPrinting: true,
      branding: true
    },
    images: {
      main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80",
      packaging: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80"
    },
    tags: ["lifetime calendar", "big size", "executive", "corporate gift"]
  },
  {
    id: "R-130",
    model: "R-130",
    name: "Steel Life Time Calendar with Clock and Month Plate - Big",
    category: "Desk Calendars",
    subcategory: "With Clock",
    description: "Large steel lifetime calendar with integrated clock and adjustable month plate. Premium executive gift.",
    features: [
      "Large lifetime calendar",
      "Integrated clock",
      "Adjustable month plate",
      "Premium executive design",
      "Logo/branding can be printed"
    ],
    useCases: ["School", "Office", "Pharma Company", "Bank", "Financial Advisors", "Home", "Hotel Reception"],
    specifications: {
      height: "140 mm",
      length: "48 mm",
      width: "155 mm",
      weight: "Without Clock-150 gm, With Clock-175 gm",
      material: "SS",
      thickness: "0.55 to 0.6 MM"
    },
    variants: [
      { color: "Silver", finish: "SS" }
    ],
    customization: {
      logoPrinting: true,
      branding: true
    },
    images: {
      main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80",
      packaging: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80"
    },
    tags: ["lifetime calendar", "with clock", "big size", "executive", "corporate gift"]
  },
  {
    id: "R-1301",
    model: "R-1301",
    name: "Steel Life Time Calendar with Month Plate - Small Premium",
    category: "Desk Calendars",
    subcategory: "Premium Collection",
    description: "Premium small steel lifetime calendar available in black, gold, rose gold, and silver finish.",
    features: [
      "Lifetime calendar with adjustable date",
      "Multiple premium finishes",
      "Compact desk size",
      "Logo/branding can be printed"
    ],
    useCases: ["School", "Office", "Pharma Company", "Bank", "Financial Advisors", "Home", "Hotel Reception"],
    specifications: {
      height: "100 mm",
      length: "40 mm",
      width: "105 mm",
      weight: "90 gm",
      material: "CRC & SS",
      thickness: "0.55 to 0.6 MM"
    },
    variants: [
      { color: "Black", finish: "Matte" },
      { color: "Gold", finish: "Metallic" },
      { color: "Rose Gold", finish: "Metallic" },
      { color: "Silver", finish: "SS" }
    ],
    customization: {
      logoPrinting: true,
      branding: true
    },
    images: {
      main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80",
      lifestyle: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80",
      packaging: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80"
    },
    tags: ["lifetime calendar", "premium", "multi-color", "corporate gift"]
  },
  {
    id: "R-1302",
    model: "R-1302",
    name: "Steel Life Time Calendar with Month Plate - Big Premium",
    category: "Desk Calendars",
    subcategory: "Premium Collection",
    description: "Premium large steel lifetime calendar available in black, gold, rose gold, and silver finish.",
    features: [
      "Large lifetime calendar",
      "Multiple premium finishes",
      "Executive desk size",
      "Logo/branding can be printed"
    ],
    useCases: ["School", "Office", "Pharma Company", "Bank", "Financial Advisors", "Home", "Hotel Reception"],
    specifications: {
      height: "140 mm",
      length: "48 mm",
      width: "155 mm",
      weight: "170 gm",
      material: "CRC & SS",
      thickness: "0.55 to 0.6 MM"
    },
    variants: [
      { color: "Black", finish: "Matte" },
      { color: "Gold", finish: "Metallic" },
      { color: "Rose Gold", finish: "Metallic" },
      { color: "Silver", finish: "SS" }
    ],
    customization: {
      logoPrinting: true,
      branding: true
    },
    images: {
      main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80",
      packaging: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80"
    },
    tags: ["lifetime calendar", "big size", "premium", "corporate gift"]
  },
  {
    id: "R-1303",
    model: "R-1303",
    name: "Steel Life Time Calendar with Watch and Month Display - Big",
    category: "Desk Calendars",
    subcategory: "With Clock",
    description: "Premium large steel lifetime calendar with integrated watch/clock and month display. Golden plate accent.",
    features: [
      "Large lifetime calendar",
      "Integrated watch/clock",
      "Adjustable golden month plate",
      "Side view visible",
      "Logo/branding can be printed"
    ],
    useCases: ["School", "Office", "Pharma Company", "Bank", "Financial Advisors", "Home", "Hotel Reception"],
    specifications: {
      height: "140 mm",
      length: "48 mm",
      width: "155 mm",
      weight: "Without Clock-160 gm, With Clock-190 gm",
      material: "CRS & SS",
      thickness: "0.55 to 0.6 MM"
    },
    variants: [
      { color: "Black", finish: "Matte with Gold Accents" }
    ],
    customization: {
      logoPrinting: true,
      branding: true
    },
    images: {
      main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80",
      lifestyle: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80",
      packaging: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80"
    },
    tags: ["lifetime calendar", "with watch", "premium", "executive", "corporate gift"]
  },
  {
    id: "R-1304",
    model: "R-1304",
    name: "Steel Life Time Calendar with Month Display - Big Glass",
    category: "Desk Calendars",
    subcategory: "Glass Collection",
    description: "Large steel lifetime calendar with glass-like white/silver finish. Modern minimalist design.",
    features: [
      "Large lifetime calendar",
      "Glass-like white/silver finish",
      "Modern minimalist design",
      "Logo/branding can be printed"
    ],
    useCases: ["School", "Office", "Pharma Company", "Bank", "Financial Advisors", "Home", "Hotel Reception"],
    specifications: {
      height: "140 mm",
      length: "48 mm",
      width: "155 mm",
      weight: "170 gm",
      material: "CRC",
      thickness: "0.55 to 0.6 MM"
    },
    variants: [
      { color: "White", finish: "Glass-like" },
      { color: "Silver", finish: "Metallic" }
    ],
    customization: {
      logoPrinting: true,
      branding: true
    },
    images: {
      main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80",
      lifestyle: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80",
      packaging: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80"
    },
    tags: ["lifetime calendar", "glass finish", "modern", "corporate gift"]
  },
  {
    id: "R-1305",
    model: "R-1305",
    name: "Steel Life Time Calendar with Sliding Month Display - Big",
    category: "Desk Calendars",
    subcategory: "Sliding Month",
    description: "Large steel lifetime calendar with sliding month display feature. Available in 4 premium finishes.",
    features: [
      "Large lifetime calendar",
      "Sliding month display mechanism",
      "4 color options",
      "Logo/branding can be printed"
    ],
    useCases: ["School", "Office", "Pharma Company", "Bank", "Financial Advisors", "Home", "Hotel Reception"],
    specifications: {
      height: "140 mm",
      length: "48 mm",
      width: "155 mm",
      weight: "170 gm",
      material: "CRC & SS",
      thickness: "0.55 to 0.6 MM"
    },
    variants: [
      { color: "Black & Gold", finish: "Matte with Gold Accent" },
      { color: "White", finish: "Matte" },
      { color: "Grey & Steel", finish: "Matte with SS" },
      { color: "Silver", finish: "SS" }
    ],
    customization: {
      logoPrinting: true,
      branding: true
    },
    images: {
      main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80",
      packaging: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80"
    },
    tags: ["lifetime calendar", "sliding month", "premium", "corporate gift"]
  },
  {
    id: "R-3101",
    model: "R-3101",
    name: "Premium Steel Jula Calendar",
    category: "Desk Calendars",
    subcategory: "Jula Calendar",
    description: "Premium steel jula (swing) calendar with paper calendar pages. Elegant design with SS stand.",
    features: [
      "Swing/Jula style design",
      "Paper calendar with steel stand",
      "Premium SS construction",
      "Logo/branding can be printed"
    ],
    useCases: ["School", "Office", "Pharma Company", "Bank", "Financial Advisors", "Home", "Hotel Reception"],
    specifications: {
      height: "195 mm",
      length: "50 mm",
      width: "200 mm",
      weight: "330 gm with Paper Calendar",
      material: "SS",
      thickness: "0.8 MM"
    },
    variants: [
      { color: "Silver", finish: "SS with Black Accent" }
    ],
    customization: {
      logoPrinting: true,
      branding: true
    },
    images: {
      main: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80",
      lifestyle: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80",
      packaging: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80"
    },
    tags: ["jula calendar", "swing calendar", "premium", "corporate gift"]
  }
];

// Category definitions for filtering
export const productCategories = [
  {
    id: "mobile-stands",
    name: "Mobile Stands",
    subcategories: [
      "Basic Stands",
      "Card Holder Combo", 
      "Multi-Function",
      "Double Side",
      "Writing Pad Combo",
      "iPad Stands",
      "Premium Collection",
      "Adjustable Stands",
      "Rotating Stands"
    ]
  },
  {
    id: "desk-accessories",
    name: "Desk Accessories",
    subcategories: [
      "Pen Holders",
      "Tea Coasters",
      "Paper Weights"
    ]
  },
  {
    id: "card-holders",
    name: "Card Holders",
    subcategories: [
      "Card Cases",
      "Table Card Holders"
    ]
  },
  {
    id: "desk-calendars",
    name: "Desk Calendars",
    subcategories: [
      "Basic",
      "With Clock",
      "Multi-Function",
      "Premium Collection",
      "Glass Collection",
      "Sliding Month",
      "Jula Calendar"
    ]
  }
];

// Helper function to get products by category
export const getProductsByCategory = (categoryId: string) => {
  const category = productCategories.find(c => c.id === categoryId);
  if (!category) return [];
  return corporateGiftingProducts.filter(p => 
    p.category.toLowerCase().replace(/\s+/g, '-') === categoryId ||
    p.category === category.name
  );
};

// Helper function to get products by subcategory
export const getProductsBySubcategory = (subcategory: string) => {
  return corporateGiftingProducts.filter(p => p.subcategory === subcategory);
};

// Helper function to search products
export const searchProducts = (query: string) => {
  const lowerQuery = query.toLowerCase();
  return corporateGiftingProducts.filter(p => 
    p.name.toLowerCase().includes(lowerQuery) ||
    p.model.toLowerCase().includes(lowerQuery) ||
    p.description.toLowerCase().includes(lowerQuery) ||
    p.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
};

export default corporateGiftingProducts;