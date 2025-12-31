// src/data/giftority-economical-catalog.ts
// Giftority Private Limited - Bottles, Mugs, Clocks & Economical Ranges Catalog
// 116+ products extracted from PDF catalog

export interface EconomicalProduct {
  id: string;
  model: string;
  name: string;
  category: string;
  subcategory: string;
  capacity?: string;
  colors: string[];
  price: number | string; // Can be range like "150 to 310"
  ctnPacking?: string;
  description?: string;
  features?: string[];
  image: string;
  tags: string[];
}

export const giftorityEconomicalProducts: EconomicalProduct[] = [
  // ============================================
  // TEMPERATURE & DISPLAY BOTTLES
  // ============================================
  {
    id: "NE-01",
    model: "NE 01",
    name: "Temperature Display Bottle",
    category: "Bottles",
    subcategory: "Temperature Display",
    capacity: "500 ml",
    colors: ["Black", "White", "Red", "Pink", "Blue"],
    price: 170,
    ctnPacking: "50 PCS CTN",
    features: ["LED Temperature Display", "500ml Capacity", "5 Color Options"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["temperature bottle", "display bottle", "smart bottle", "corporate gift"]
  },
  {
    id: "NE-02",
    model: "NE 02",
    name: "Non Display Temperature Bottle",
    category: "Bottles",
    subcategory: "Temperature Display",
    capacity: "500 ml",
    colors: ["Black", "White", "Red"],
    price: 165,
    features: ["Touch Temperature Sensing", "500ml Capacity"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["temperature bottle", "smart bottle", "corporate gift"]
  },
  {
    id: "NE-16",
    model: "NE 16",
    name: "Gradient Colour Temperature Bottle",
    category: "Bottles",
    subcategory: "Temperature Display",
    capacity: "500 ml",
    colors: ["Gradient Multi"],
    price: 190,
    ctnPacking: "50 PCS CTN",
    features: ["Gradient Color Design", "Temperature Display", "500ml"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["gradient bottle", "temperature display", "trendy bottle"]
  },
  {
    id: "NE-81",
    model: "NE-81",
    name: "Temperature Bottle with 2 Cup Set",
    category: "Bottles",
    subcategory: "Temperature Display",
    capacity: "500 ml",
    colors: ["Black", "White", "Blue"],
    price: 230,
    features: ["Temperature Display", "Includes 2 Cups", "Gift Set"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["bottle set", "gift set", "temperature bottle", "cups included"]
  },
  {
    id: "NE-94",
    model: "NE-94",
    name: "Temperature Display Bottle With Grip",
    category: "Bottles",
    subcategory: "Temperature Display",
    capacity: "500 ml",
    colors: ["Black", "White"],
    price: 250,
    ctnPacking: "50 PCS CTN",
    features: ["Temperature Display", "Ergonomic Grip", "500ml"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["temperature bottle", "grip bottle", "ergonomic"]
  },

  // ============================================
  // STAINLESS STEEL BOTTLES
  // ============================================
  {
    id: "NE-03",
    model: "NE 03",
    name: "Stainless Steel Water Bottle",
    category: "Bottles",
    subcategory: "Stainless Steel",
    capacity: "750 ml",
    colors: ["Black"],
    price: 160,
    ctnPacking: "60 PCS CTN",
    features: ["Premium SS Construction", "750ml Capacity"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["stainless steel", "water bottle", "750ml"]
  },
  {
    id: "NE-04",
    model: "NE 04",
    name: "Stainless Steel Sipper Bottle",
    category: "Bottles",
    subcategory: "Stainless Steel",
    capacity: "750 ml",
    colors: ["Black", "Blue", "Red"],
    price: 160,
    features: ["Sipper Lid", "750ml Capacity", "SS Construction"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["sipper bottle", "stainless steel", "sports bottle"]
  },
  {
    id: "NE-05",
    model: "NE 05",
    name: "Stainless Steel Bottle 1L",
    category: "Bottles",
    subcategory: "Stainless Steel",
    capacity: "1000 ml",
    colors: ["Silver"],
    price: 150,
    ctnPacking: "60 PCS CTN",
    features: ["1 Liter Capacity", "Classic Silver Finish"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["stainless steel", "1 liter", "silver bottle"]
  },
  {
    id: "NE-07",
    model: "NE 07",
    name: "SS Double Wall Sports Water Bottle",
    category: "Bottles",
    subcategory: "Double Wall",
    capacity: "550 ml",
    colors: ["Black", "White", "Blue", "Silver"],
    price: 205,
    features: ["Double Wall Insulation", "Sports Design", "4 Colors"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["double wall", "sports bottle", "insulated"]
  },
  {
    id: "NE-10",
    model: "NE 10",
    name: "SS Cola Vacuum Insulated Bottle",
    category: "Bottles",
    subcategory: "Vacuum Insulated",
    capacity: "500ml, 750ml, 1000ml",
    colors: ["Silver"],
    price: "150 to 310",
    ctnPacking: "50 PCS CTN",
    features: ["Cola Shape Design", "Multiple Sizes", "Vacuum Insulated"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["cola bottle", "vacuum insulated", "multiple sizes"]
  },
  {
    id: "NE-11",
    model: "NE 11",
    name: "Stainless Steel Bottle (Single Wall)",
    category: "Bottles",
    subcategory: "Stainless Steel",
    capacity: "750ml - 1000ml",
    colors: ["Silver"],
    price: 150,
    ctnPacking: "60 PCS CTN",
    features: ["Single Wall", "Multiple Sizes Available"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["single wall", "stainless steel", "basic bottle"]
  },
  {
    id: "NE-12",
    model: "NE 12",
    name: "Stainless Steel Bottle 1L Single Wall",
    category: "Bottles",
    subcategory: "Stainless Steel",
    capacity: "1000 ml",
    colors: ["Silver"],
    price: 150,
    features: ["Single Wall", "1 Liter Capacity"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["single wall", "1 liter", "stainless steel"]
  },
  {
    id: "NE-13",
    model: "NE 13",
    name: "SS Single Wall Water Bottle",
    category: "Bottles",
    subcategory: "Stainless Steel",
    capacity: "750 ml",
    colors: ["Black", "Blue", "Silver"],
    price: 150,
    ctnPacking: "60 PCS CTN",
    features: ["Single Wall", "3 Color Options", "750ml"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["single wall", "water bottle", "750ml"]
  },
  {
    id: "NE-77",
    model: "NE 77",
    name: "SS Bottle With Wooden Lid And Handle",
    category: "Bottles",
    subcategory: "Premium Bottles",
    capacity: "750 ml",
    colors: ["Black", "White", "Silver"],
    price: 195,
    features: ["Wooden Lid", "Carry Handle", "Premium Design"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["wooden lid", "premium bottle", "handle bottle"]
  },
  {
    id: "NE-91",
    model: "NE-91",
    name: "Vacuum Insulated Sports Water Bottle",
    category: "Bottles",
    subcategory: "Vacuum Insulated",
    capacity: "500 ml",
    colors: ["Black"],
    price: 350,
    ctnPacking: "50 PCS CTN",
    features: ["Vacuum Insulated", "Sports Design", "Premium Quality"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["vacuum insulated", "sports bottle", "premium"]
  },

  // ============================================
  // ALUMINUM BOTTLES
  // ============================================
  {
    id: "NE-06",
    model: "NE 06",
    name: "Aluminum Bottle With Clip",
    category: "Bottles",
    subcategory: "Aluminum",
    capacity: "750 ml",
    colors: ["White", "Black", "Red", "Blue"],
    price: 140,
    ctnPacking: "60 PCS CTN",
    features: ["Lightweight Aluminum", "Carabiner Clip", "4 Colors"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["aluminum bottle", "clip bottle", "lightweight", "outdoor"]
  },

  // ============================================
  // VACUUM BOTTLES & FLASKS
  // ============================================
  {
    id: "NE-08",
    model: "NE 08",
    name: "Cup Vacuum Thermos With Cup",
    category: "Bottles",
    subcategory: "Vacuum Flask",
    capacity: "500 ml",
    colors: ["Black", "White"],
    price: 240,
    ctnPacking: "50 PCS CTN",
    features: ["Vacuum Insulation", "Cup Lid Design", "Hot/Cold Retention"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["vacuum thermos", "cup lid", "hot cold"]
  },
  {
    id: "NE-14",
    model: "NE 14",
    name: "Vacuum Bottle",
    category: "Bottles",
    subcategory: "Vacuum Insulated",
    capacity: "600 ml",
    colors: ["Black", "White"],
    price: 190,
    features: ["Vacuum Insulated", "600ml Capacity"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["vacuum bottle", "insulated", "600ml"]
  },
  {
    id: "NE-15",
    model: "NE 15",
    name: "SS Bottle Double Wall",
    category: "Bottles",
    subcategory: "Double Wall",
    capacity: "500 ml",
    colors: ["White"],
    price: 310,
    ctnPacking: "50 PCS CTN",
    features: ["Double Wall Insulation", "Premium White Finish"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["double wall", "premium", "white bottle"]
  },
  {
    id: "NE-19",
    model: "NE 19",
    name: "Vacuum Travel Bottle With Strap",
    category: "Bottles",
    subcategory: "Travel Bottles",
    capacity: "500 ml",
    colors: ["Black", "White"],
    price: 290,
    ctnPacking: "50 PCS CTN",
    features: ["Carry Strap", "Vacuum Insulated", "Travel Friendly"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["travel bottle", "strap", "vacuum insulated"]
  },
  {
    id: "NE-27",
    model: "NE 27",
    name: "SS Vacuum Insulated Flask With Grip",
    category: "Bottles",
    subcategory: "Vacuum Flask",
    capacity: "500 ml",
    colors: ["Black", "Golden", "Green", "Red"],
    price: 320,
    ctnPacking: "50 PCS CTN",
    features: ["Vacuum Insulated", "Ergonomic Grip", "4 Premium Colors"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["vacuum flask", "grip", "premium colors"]
  },
  {
    id: "NE-74",
    model: "NE 74",
    name: "Cup Vacuum Thermos With Curve Handle",
    category: "Bottles",
    subcategory: "Vacuum Flask",
    capacity: "500 ml",
    colors: ["Black", "White"],
    price: 210,
    ctnPacking: "50 PCS CTN",
    features: ["Curved Handle Design", "Cup Lid", "Vacuum Insulated"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["thermos", "curve handle", "vacuum"]
  },
  {
    id: "NE-82",
    model: "NE-82",
    name: "Vacuum Bottle with 2 Cup Set",
    category: "Bottles",
    subcategory: "Gift Sets",
    capacity: "500 ml",
    colors: ["Black", "White"],
    price: 350,
    features: ["Vacuum Insulated", "2 Cups Included", "Gift Ready"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["gift set", "vacuum bottle", "cups included"]
  },
  {
    id: "NE-99",
    model: "NE-99",
    name: "Vacuum Cup",
    category: "Bottles",
    subcategory: "Vacuum Insulated",
    capacity: "550 ml",
    colors: ["White"],
    price: 290,
    ctnPacking: "50 PCS CTN",
    features: ["Vacuum Insulated", "Cup Design", "550ml"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["vacuum cup", "insulated", "white"]
  },
  {
    id: "NE-100",
    model: "NE-100",
    name: "Vacuum Bottle With Rubber Coating",
    category: "Bottles",
    subcategory: "Vacuum Insulated",
    capacity: "500 ml",
    colors: ["Multi Colours"],
    price: 285,
    ctnPacking: "50 PCS CTN",
    features: ["Rubber Coating", "Soft Touch", "Vacuum Insulated"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["rubber coating", "soft touch", "vacuum bottle"]
  },
  {
    id: "NE-115",
    model: "NE-115",
    name: "SS Flask",
    category: "Bottles",
    subcategory: "Vacuum Flask",
    capacity: "800 ml",
    colors: ["Black", "White"],
    price: 410,
    features: ["Large 800ml Capacity", "Stainless Steel Flask"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["flask", "800ml", "large capacity"]
  },

  // ============================================
  // BAMBOO BOTTLES
  // ============================================
  {
    id: "NE-17",
    model: "NE 17",
    name: "Bamboo Vacuum Insulated Bottle",
    category: "Bottles",
    subcategory: "Eco-Friendly",
    capacity: "500 ml",
    colors: ["Natural Bamboo"],
    price: 290,
    ctnPacking: "50 PCS CTN",
    features: ["Bamboo Exterior", "Vacuum Insulated", "Eco-Friendly"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["bamboo", "eco-friendly", "vacuum insulated"]
  },
  {
    id: "NE-18",
    model: "NE 18",
    name: "Bamboo Vacuum Insulated Bottle Premium",
    category: "Bottles",
    subcategory: "Eco-Friendly",
    capacity: "500 ml",
    colors: ["Natural Bamboo"],
    price: 340,
    ctnPacking: "50 PCS CTN",
    features: ["Premium Bamboo Finish", "Vacuum Insulated"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["bamboo", "premium", "eco-friendly"]
  },
  {
    id: "NE-20",
    model: "NE 20",
    name: "Stainless Steel Bottle With Bamboo",
    category: "Bottles",
    subcategory: "Eco-Friendly",
    capacity: "500 ml",
    colors: ["Black"],
    price: 350,
    ctnPacking: "50 PCS CTN",
    features: ["SS with Bamboo Accent", "Premium Design"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["bamboo accent", "stainless steel", "premium"]
  },

  // ============================================
  // MOTIVATIONAL & SPORTS BOTTLES
  // ============================================
  {
    id: "NE-21",
    model: "NE 21",
    name: "Motivational Quotes Sports Water Bottle",
    category: "Bottles",
    subcategory: "Motivational",
    capacity: "900 ml",
    colors: ["Black", "Blue", "Green", "Pink"],
    price: 155,
    features: ["Motivational Quotes", "Large 900ml", "Sports Design"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["motivational", "sports bottle", "quotes", "900ml"]
  },
  {
    id: "NE-22",
    model: "NE 22",
    name: "Motivational Quotes Bottle (3 Pcs Set)",
    category: "Bottles",
    subcategory: "Gift Sets",
    capacity: "2000ml, 900ml, 300ml",
    colors: ["Multicolour"],
    price: 220,
    ctnPacking: "40 PCS CTN",
    features: ["3 Bottle Set", "Multiple Sizes", "Motivational Design"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["bottle set", "motivational", "3 piece", "gift set"]
  },
  {
    id: "NE-30",
    model: "NE-30",
    name: "Glass Motivational Bottle",
    category: "Bottles",
    subcategory: "Glass Bottles",
    capacity: "1000 ml",
    colors: ["Clear Glass"],
    price: 280,
    features: ["Glass Construction", "1 Liter", "Motivational Design"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["glass bottle", "motivational", "1 liter"]
  },

  // ============================================
  // SPECIALTY BOTTLES
  // ============================================
  {
    id: "NE-09",
    model: "NE 09",
    name: "Metal Water Bottle",
    category: "Bottles",
    subcategory: "Metal Bottles",
    capacity: "600 ml",
    colors: ["Multicolor"],
    price: 140,
    features: ["Metal Construction", "600ml", "Multiple Colors"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["metal bottle", "colorful", "600ml"]
  },
  {
    id: "NE-23",
    model: "NE 23",
    name: "Tea Separation Bottle",
    category: "Bottles",
    subcategory: "Specialty",
    capacity: "500 ml",
    colors: ["Black", "Red", "White", "Green"],
    price: 295,
    features: ["Tea Infuser/Separator", "4 Colors", "Multi-purpose"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["tea bottle", "infuser", "separation bottle"]
  },
  {
    id: "NE-71",
    model: "NE-71",
    name: "Glass Bottle With Silicone Sleeves",
    category: "Bottles",
    subcategory: "Glass Bottles",
    capacity: "500 ml",
    colors: ["Multicolour"],
    price: 250,
    ctnPacking: "50 PCS CTN",
    features: ["Glass Construction", "Protective Silicone Sleeve"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["glass bottle", "silicone sleeve", "protective"]
  },
  {
    id: "NE-92",
    model: "NE-92",
    name: "Glass Layer Bottle",
    category: "Bottles",
    subcategory: "Glass Bottles",
    capacity: "400 ml",
    colors: ["Blue", "Pink", "Green", "Cream"],
    price: 90,
    ctnPacking: "80 PCS CTN",
    features: ["Double Layer Glass", "Budget Friendly", "4 Colors"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["glass bottle", "budget", "colorful"]
  },
  {
    id: "NE-93",
    model: "NE-93",
    name: "Glass Tumbler With Lid And Straw",
    category: "Bottles",
    subcategory: "Glass Bottles",
    capacity: "400 ml",
    colors: ["Black", "Brown"],
    price: 60,
    ctnPacking: "48 PCS CTN",
    features: ["Glass Tumbler", "Lid & Straw Included", "Budget Friendly"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["glass tumbler", "straw", "budget"]
  },
  {
    id: "NE-98",
    model: "NE-98",
    name: "Hot & Cold Sports Bottle",
    category: "Bottles",
    subcategory: "Sports Bottles",
    capacity: "500 ml",
    colors: ["Black"],
    price: 320,
    ctnPacking: "50 PCS CTN",
    features: ["Hot & Cold Retention", "Sports Design"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["hot cold", "sports bottle", "insulated"]
  },
  {
    id: "NE-116",
    model: "NE-116",
    name: "Glass Bottle With Jute Bag",
    category: "Bottles",
    subcategory: "Eco-Friendly",
    capacity: "500 ml",
    colors: ["Clear with Jute"],
    price: 190,
    ctnPacking: "50 PCS CTN",
    features: ["Glass Bottle", "Jute Carry Bag", "Eco-Friendly"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["glass bottle", "jute bag", "eco-friendly"]
  },

  // ============================================
  // PLASTIC BOTTLES
  // ============================================
  {
    id: "NE-110",
    model: "NE-110",
    name: "Plastic Bottle 700ml",
    category: "Bottles",
    subcategory: "Plastic Bottles",
    capacity: "700 ml",
    colors: ["Multicolor"],
    price: 140,
    ctnPacking: "50 PCS CTN",
    features: ["Lightweight", "Budget Friendly", "700ml"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["plastic bottle", "budget", "700ml"]
  },
  {
    id: "NE-111",
    model: "NE-111",
    name: "Plastic Bottle 500ml",
    category: "Bottles",
    subcategory: "Plastic Bottles",
    capacity: "500 ml",
    colors: ["Multicolor"],
    price: 120,
    ctnPacking: "50 PCS CTN",
    features: ["Lightweight", "Budget Friendly", "500ml"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["plastic bottle", "budget", "500ml"]
  },
  {
    id: "NE-112",
    model: "NE-112",
    name: "Water Bottle",
    category: "Bottles",
    subcategory: "Plastic Bottles",
    capacity: "500 ml",
    colors: ["White"],
    price: 120,
    ctnPacking: "100 PCS CTN",
    features: ["Simple Design", "White Color", "500ml"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["water bottle", "basic", "white"]
  },
  {
    id: "NE-113",
    model: "NE-113",
    name: "Kids Bottle",
    category: "Bottles",
    subcategory: "Kids",
    capacity: "400 ml",
    colors: ["Multicolor"],
    price: 120,
    features: ["Kid-Friendly Design", "Safe Materials"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["kids bottle", "children", "safe"]
  },

  // ============================================
  // STANLEY CUPS & TUMBLERS
  // ============================================
  {
    id: "NE-83",
    model: "NE-83",
    name: "Stanley Cup 710ml",
    category: "Tumblers",
    subcategory: "Stanley Style",
    capacity: "710 ml",
    colors: ["Black"],
    price: 385,
    features: ["Stanley Style", "710ml Capacity", "Premium Quality"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["stanley cup", "tumbler", "premium"]
  },
  {
    id: "NE-101",
    model: "NE-101",
    name: "Bamboo Lid Tumbler With Straw",
    category: "Tumblers",
    subcategory: "Eco-Friendly",
    capacity: "550 ml",
    colors: ["Clear"],
    price: 220,
    ctnPacking: "50 PCS CTN",
    features: ["Bamboo Lid", "Straw Included", "Eco-Friendly"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["bamboo lid", "tumbler", "straw", "eco-friendly"]
  },
  {
    id: "NE-106",
    model: "NE-106",
    name: "Stanley Cup 1200ml",
    category: "Tumblers",
    subcategory: "Stanley Style",
    capacity: "1200 ml",
    colors: ["Black", "White", "Mix"],
    price: 370,
    ctnPacking: "25 PCS CTN",
    features: ["Extra Large 1.2L", "Stanley Style", "Multiple Colors"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["stanley cup", "large", "1200ml"]
  },
  {
    id: "NE-107",
    model: "NE-107",
    name: "Stanley Mug 900ml",
    category: "Tumblers",
    subcategory: "Stanley Style",
    capacity: "900 ml",
    colors: ["Black"],
    price: 350,
    ctnPacking: "30 PCS CTN",
    features: ["Stanley Style Mug", "900ml", "Handle Design"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["stanley mug", "large capacity", "handle"]
  },

  // ============================================
  // TRAVEL MUGS & COFFEE CUPS
  // ============================================
  {
    id: "NE-24",
    model: "NE-24",
    name: "Travel Tumbler",
    category: "Mugs",
    subcategory: "Travel Mugs",
    capacity: "500 ml",
    colors: ["Black"],
    price: 240,
    ctnPacking: "50 PCS CTN",
    features: ["Travel Design", "Leak-Proof Lid", "500ml"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["travel tumbler", "leak proof", "commuter"]
  },
  {
    id: "NE-25",
    model: "NE 25",
    name: "SS Insulation Coffee Cup With Button",
    category: "Mugs",
    subcategory: "Coffee Mugs",
    capacity: "400 ml",
    colors: ["Black", "White"],
    price: 190,
    ctnPacking: "50 PCS CTN",
    features: ["Push Button Lid", "Insulated", "Spill-Proof"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["coffee cup", "button lid", "insulated"]
  },
  {
    id: "NE-26",
    model: "NE 26",
    name: "SS Temperature Coffee Travel Mug",
    category: "Mugs",
    subcategory: "Travel Mugs",
    capacity: "510 ml",
    colors: ["Black", "White"],
    price: 240,
    ctnPacking: "50 PCS CTN",
    features: ["Temperature Display", "Travel Mug", "510ml"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["temperature mug", "travel mug", "smart mug"]
  },
  {
    id: "NE-28",
    model: "NE 28",
    name: "SS Vacuum Insulated Travel Mug with Grip",
    category: "Mugs",
    subcategory: "Travel Mugs",
    capacity: "510 ml",
    colors: ["Black", "White", "Blue", "Green", "Red"],
    price: 240,
    features: ["Vacuum Insulated", "Grip Design", "5 Colors"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["travel mug", "grip", "insulated", "colorful"]
  },
  {
    id: "NE-31",
    model: "NE 31",
    name: "SS Vacuum Insulated Travel Mug Push Button",
    category: "Mugs",
    subcategory: "Travel Mugs",
    capacity: "400 ml",
    colors: ["Black", "White"],
    price: 220,
    features: ["Push Button Lid", "Vacuum Insulated"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["travel mug", "push button", "insulated"]
  },
  {
    id: "NE-32",
    model: "NE 32",
    name: "Stainless Steel Insulated Coffee Cup",
    category: "Mugs",
    subcategory: "Coffee Mugs",
    capacity: "400 ml",
    colors: ["Black", "White"],
    price: 240,
    ctnPacking: "50 PCS CTN",
    features: ["Insulated", "Coffee Cup Style", "400ml"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["coffee cup", "insulated", "stainless steel"]
  },
  {
    id: "NE-33",
    model: "NE 33",
    name: "SS Coffee Travel Mug",
    category: "Mugs",
    subcategory: "Travel Mugs",
    capacity: "510 ml",
    colors: ["Black", "White"],
    price: 230,
    ctnPacking: "50 PCS CTN",
    features: ["Travel Design", "510ml Capacity"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["coffee mug", "travel", "510ml"]
  },
  {
    id: "NE-34",
    model: "NE 34",
    name: "Stainless Steel Double Wall Mug",
    category: "Mugs",
    subcategory: "Coffee Mugs",
    capacity: "350 ml",
    colors: ["Black", "White", "Blue"],
    price: 330,
    ctnPacking: "50 PCS CTN",
    features: ["Double Wall", "Premium Quality", "3 Colors"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["double wall mug", "premium", "insulated"]
  },
  {
    id: "NE-37",
    model: "NE 37",
    name: "SS Coffee Mug",
    category: "Mugs",
    subcategory: "Coffee Mugs",
    capacity: "300 ml",
    colors: ["White", "Black", "Green"],
    price: 170,
    ctnPacking: "60 PCS CTN",
    features: ["Compact Size", "3 Colors", "Budget Friendly"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["coffee mug", "compact", "budget"]
  },
  {
    id: "NE-39",
    model: "NE 39",
    name: "Stainless Steel Insulated Cup With Handle Lid",
    category: "Mugs",
    subcategory: "Coffee Mugs",
    capacity: "350 ml",
    colors: ["Black", "White", "Red", "Golden"],
    price: 250,
    ctnPacking: "50 PCS CTN",
    features: ["Handle Design", "Lid Included", "Insulated"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["insulated cup", "handle", "lid"]
  },
  {
    id: "NE-96",
    model: "NE-96",
    name: "Auto Self Stirring Electric Coffee Mug",
    category: "Mugs",
    subcategory: "Electric Mugs",
    capacity: "380 ml",
    colors: ["Grey"],
    price: 295,
    ctnPacking: "60 PCS CTN",
    features: ["Self Stirring", "Electric", "Automatic Mixing"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["self stirring", "electric mug", "automatic"]
  },

  // ============================================
  // SPECIALTY MUGS
  // ============================================
  {
    id: "NE-29",
    model: "NE 29",
    name: "Bamboo Mug With Leak Proof Lid",
    category: "Mugs",
    subcategory: "Eco-Friendly",
    capacity: "350 ml",
    colors: ["Natural Bamboo"],
    price: 280,
    features: ["Bamboo Construction", "Leak-Proof Lid", "Eco-Friendly"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["bamboo mug", "eco-friendly", "leak proof"]
  },
  {
    id: "NE-35",
    model: "NE 35",
    name: "Plastic Suction Mug",
    category: "Mugs",
    subcategory: "Specialty",
    capacity: "420 ml",
    colors: ["Black", "White", "Blue", "Grey"],
    price: 290,
    ctnPacking: "50 PCS CTN",
    features: ["Suction Base", "Won't Tip Over", "4 Colors"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["suction mug", "no spill", "stable"]
  },
  {
    id: "NE-36",
    model: "NE 36",
    name: "Ceramic Coffee Mug With Cork Bottom",
    category: "Mugs",
    subcategory: "Ceramic",
    capacity: "380 ml",
    colors: ["White", "Black"],
    price: 190,
    ctnPacking: "40 PCS CTN",
    features: ["Ceramic Construction", "Cork Bottom", "Non-Slip"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["ceramic mug", "cork bottom", "non-slip"]
  },
  {
    id: "NE-38",
    model: "NE 38",
    name: "Stainless Steel Wine Tumbler With Lid",
    category: "Mugs",
    subcategory: "Wine Tumblers",
    capacity: "350 ml",
    colors: ["White", "Black"],
    price: 190,
    ctnPacking: "50 PCS CTN",
    features: ["Wine Glass Shape", "Lid Included", "Stainless Steel"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["wine tumbler", "stemless wine", "lid"]
  },
  {
    id: "NE-78",
    model: "NE 78",
    name: "Bamboo Vacuum Flask Coffee Cup",
    category: "Mugs",
    subcategory: "Eco-Friendly",
    capacity: "350 ml",
    colors: ["Natural Bamboo"],
    price: 360,
    ctnPacking: "50 PCS CTN",
    features: ["Bamboo Exterior", "Vacuum Insulated", "Premium"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["bamboo cup", "vacuum", "eco-friendly"]
  },
  {
    id: "NE-79",
    model: "NE 79",
    name: "Bamboo Coffee Cup",
    category: "Mugs",
    subcategory: "Eco-Friendly",
    capacity: "500 ml",
    colors: ["Natural Bamboo"],
    price: 290,
    features: ["Bamboo Design", "500ml", "Eco-Friendly"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["bamboo cup", "large", "eco-friendly"]
  },
  {
    id: "NE-109",
    model: "NE-109",
    name: "Sublimation Mug",
    category: "Mugs",
    subcategory: "Sublimation",
    capacity: "400 ml",
    colors: ["White"],
    price: 250,
    ctnPacking: "50 PCS CTN",
    features: ["Sublimation Ready", "Custom Printing", "White Ceramic"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["sublimation mug", "custom print", "ceramic"]
  },
  {
    id: "NE-114",
    model: "NE-114",
    name: "Double Wall Glass Cup",
    category: "Mugs",
    subcategory: "Glass",
    capacity: "250 ml",
    colors: ["Clear Glass"],
    price: 155,
    ctnPacking: "72 PCS CTN",
    features: ["Double Wall Glass", "Heat Resistant", "Modern Design"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["double wall glass", "heat resistant", "modern"]
  },

  // ============================================
  // FLASK GIFT SETS
  // ============================================
  {
    id: "NE-40",
    model: "NE 40",
    name: "Vacuum Flask Gift Set",
    category: "Gift Sets",
    subcategory: "Flask Sets",
    capacity: "500 ml",
    colors: ["Black", "White", "Blue", "Pink", "Grey", "Green"],
    price: 215,
    ctnPacking: "24/30 PCS CTN",
    features: ["Flask + Cups Set", "Gift Box", "6 Color Options"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["gift set", "flask set", "corporate gift"]
  },
  {
    id: "NE-41",
    model: "NE 41",
    name: "Vacuum Flask Set New",
    category: "Gift Sets",
    subcategory: "Flask Sets",
    capacity: "650 ml",
    colors: ["Mix Colour"],
    price: 360,
    ctnPacking: "24 PCS CTN",
    features: ["650ml Flask", "Cup Set", "Premium Gift Box"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["gift set", "vacuum flask", "premium"]
  },

  // ============================================
  // ELECTRIC APPLIANCES
  // ============================================
  {
    id: "NE-42",
    model: "NE 42",
    name: "Electric Cup Warmer",
    category: "Electronics",
    subcategory: "Kitchen Electronics",
    capacity: "350 ml",
    colors: ["Green", "Pink", "Black", "White"],
    price: 290,
    ctnPacking: "24 PCS CTN",
    features: ["USB Powered", "Keep Drinks Warm", "4 Colors"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["cup warmer", "electric", "usb powered"]
  },
  {
    id: "NE-43",
    model: "NE 43",
    name: "Scarlett Electric Kettle",
    category: "Electronics",
    subcategory: "Kitchen Electronics",
    capacity: "1.8 Liter",
    colors: ["Black", "White"],
    price: 300,
    ctnPacking: "16 PCS CTN",
    features: ["1.8L Capacity", "Fast Boiling", "Auto Shut-Off"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["electric kettle", "kitchen", "fast boil"]
  },
  {
    id: "NE-44",
    model: "NE 44",
    name: "Electric Food Chopper",
    category: "Electronics",
    subcategory: "Kitchen Electronics",
    capacity: "N/A",
    colors: ["Pink"],
    price: 200,
    ctnPacking: "60 PCS CTN",
    features: ["Electric Chopper", "Compact Design"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["food chopper", "electric", "kitchen"]
  },
  {
    id: "NE-45",
    model: "NE 45",
    name: "Portable Blender Bottle Juicer",
    category: "Electronics",
    subcategory: "Blenders",
    capacity: "350 ml",
    colors: ["White", "Pink", "Green"],
    price: 250,
    ctnPacking: "30 PCS CTN",
    features: ["Portable", "USB Rechargeable", "Personal Blender"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["portable blender", "juicer", "usb"]
  },
  {
    id: "NE-46",
    model: "NE 46",
    name: "Portable Juice Blender",
    category: "Electronics",
    subcategory: "Blenders",
    capacity: "380 ml",
    colors: ["White", "Pink", "Green"],
    price: 250,
    ctnPacking: "30 PCS CTN",
    features: ["Portable", "Rechargeable", "380ml"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["juice blender", "portable", "rechargeable"]
  },

  // ============================================
  // LUNCH BOXES
  // ============================================
  {
    id: "NE-47",
    model: "NE 47",
    name: "Vacuum Insulated SS Lunch Box - 3 Compartment",
    category: "Lunch Boxes",
    subcategory: "Insulated",
    capacity: "3 Compartment",
    colors: ["Pink", "White", "Blue"],
    price: 500,
    ctnPacking: "48 PCS CTN",
    features: ["3 Compartments", "Vacuum Insulated", "Hot/Cold"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["lunch box", "vacuum insulated", "3 compartment"]
  },
  {
    id: "NE-48",
    model: "NE 48",
    name: "Vacuum Insulated SS Lunch Box - 4 Compartment",
    category: "Lunch Boxes",
    subcategory: "Insulated",
    capacity: "4 Compartment",
    colors: ["Blue", "Pink", "White"],
    price: 550,
    ctnPacking: "48 PCS CTN",
    features: ["4 Compartments", "Vacuum Insulated", "Large Capacity"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["lunch box", "vacuum insulated", "4 compartment"]
  },

  // ============================================
  // CLOCKS & ALARMS
  // ============================================
  {
    id: "NE-49",
    model: "NE 49",
    name: "Colour Changing Clock (Digital Alarm)",
    category: "Clocks",
    subcategory: "Digital Clocks",
    colors: ["White"],
    price: 115,
    ctnPacking: "100 PCS CTN",
    features: ["Color Changing LED", "Digital Display", "Alarm Function"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["color changing clock", "alarm", "led"]
  },
  {
    id: "NE-50",
    model: "NE 50",
    name: "Digital Alarm Clock",
    category: "Clocks",
    subcategory: "Digital Clocks",
    colors: ["Black", "White"],
    price: 195,
    ctnPacking: "100 PCS CTN",
    features: ["Digital Display", "Alarm", "2 Colors"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["digital clock", "alarm clock", "desk clock"]
  },
  {
    id: "NE-51",
    model: "NE 51",
    name: "Digital Mirror Alarm Clock",
    category: "Clocks",
    subcategory: "Digital Clocks",
    colors: ["Black", "White"],
    price: 270,
    ctnPacking: "100 PCS CTN",
    features: ["Mirror Display", "Digital Clock", "Modern Design"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["mirror clock", "digital", "modern"]
  },
  {
    id: "NE-84",
    model: "NE-84",
    name: "Multifunctional Digital Clock",
    category: "Clocks",
    subcategory: "Digital Clocks",
    colors: ["Black"],
    price: 100,
    features: ["Multiple Functions", "Digital Display", "Budget Friendly"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["digital clock", "multifunctional", "budget"]
  },

  // ============================================
  // SPEAKERS & AUDIO
  // ============================================
  {
    id: "NE-52",
    model: "NE 52",
    name: "Touch Lamp Bluetooth Speaker",
    category: "Electronics",
    subcategory: "Speakers",
    colors: ["White"],
    price: 215,
    features: ["Touch Lamp", "Bluetooth Speaker", "2-in-1"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["bluetooth speaker", "lamp", "touch"]
  },
  {
    id: "NE-53",
    model: "NE 53",
    name: "G-Wireless Bluetooth Speaker",
    category: "Electronics",
    subcategory: "Speakers",
    colors: ["Black"],
    price: 390,
    ctnPacking: "24 PCS CTN",
    features: ["Wireless", "Bluetooth", "Premium Sound"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["bluetooth speaker", "wireless", "premium"]
  },
  {
    id: "NE-54",
    model: "NE 54",
    name: "Bluetooth Speaker With Pen Stand",
    category: "Electronics",
    subcategory: "Speakers",
    colors: ["White"],
    price: 350,
    features: ["Bluetooth Speaker", "Pen Stand", "Desk Accessory"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["bluetooth speaker", "pen stand", "desk"]
  },

  // ============================================
  // LAMPS & LIGHTING
  // ============================================
  {
    id: "NE-55",
    model: "NE 55",
    name: "Crystal Touch Table Lamp",
    category: "Lighting",
    subcategory: "Table Lamps",
    colors: ["Mix Color"],
    price: 290,
    features: ["Crystal Design", "Touch Control", "Ambient Lighting"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["crystal lamp", "touch lamp", "table lamp"]
  },
  {
    id: "NE-56",
    model: "NE 56",
    name: "Crystal LED Night Lamp",
    category: "Lighting",
    subcategory: "Night Lamps",
    colors: ["Crystal Clear"],
    price: 450,
    features: ["Crystal Design", "LED", "Night Light"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["crystal lamp", "night lamp", "led"]
  },
  {
    id: "NE-57",
    model: "NE 57",
    name: "3D Creative Note Board Visualization Lamp",
    category: "Lighting",
    subcategory: "Creative Lamps",
    colors: ["Clear"],
    price: 215,
    features: ["3D Effect", "Note Board", "Creative Design"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["3d lamp", "note board", "creative"]
  },
  {
    id: "NE-58",
    model: "NE 58",
    name: "3D Moon LED Light Lamp",
    category: "Lighting",
    subcategory: "Creative Lamps",
    colors: ["Multicolor"],
    price: 290,
    features: ["Moon Shape", "3D Printed", "Color Changing"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["moon lamp", "3d lamp", "color changing"]
  },
  {
    id: "NE-59",
    model: "NE 59",
    name: "LED Study Table Lamp",
    category: "Lighting",
    subcategory: "Study Lamps",
    colors: ["White", "Pink"],
    price: 155,
    ctnPacking: "100 PCS CTN",
    features: ["LED", "Study Lamp", "Adjustable"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["study lamp", "led lamp", "desk lamp"]
  },
  {
    id: "NE-89",
    model: "NE-89",
    name: "Intelligent Sensor Light",
    category: "Lighting",
    subcategory: "Sensor Lights",
    colors: ["White"],
    price: 120,
    ctnPacking: "200 PCS CTN",
    features: ["Motion Sensor", "Auto On/Off", "Energy Efficient"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["sensor light", "motion sensor", "auto"]
  },

  // ============================================
  // MOBILE STANDS & ACCESSORIES
  // ============================================
  {
    id: "NE-60",
    model: "NE 60",
    name: "Mobile Stand",
    category: "Mobile Accessories",
    subcategory: "Mobile Stands",
    colors: ["Black", "White"],
    price: 95,
    ctnPacking: "100 PCS CTN",
    features: ["Compact", "Foldable", "Budget Friendly"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["mobile stand", "phone stand", "budget"]
  },
  {
    id: "NE-61",
    model: "NE 61",
    name: "Metal Mobile Stand",
    category: "Mobile Accessories",
    subcategory: "Mobile Stands",
    colors: ["Black"],
    price: 75,
    ctnPacking: "100 PCS CTN",
    features: ["Metal Construction", "Sturdy", "Budget"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["metal stand", "mobile stand", "budget"]
  },
  {
    id: "NE-62",
    model: "NE 62",
    name: "Mobile Pop Socket Holder",
    category: "Mobile Accessories",
    subcategory: "Pop Sockets",
    colors: ["Black", "White"],
    price: 9,
    ctnPacking: "5000 PCS CTN",
    features: ["Pop Socket", "Grip Holder", "Ultra Budget"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["pop socket", "phone grip", "bulk"]
  },
  {
    id: "NE-63",
    model: "NE 63",
    name: "Laptop Stand",
    category: "Mobile Accessories",
    subcategory: "Laptop Stands",
    colors: ["Silver", "Black"],
    price: 210,
    ctnPacking: "100 PCS CTN",
    features: ["Foldable", "Aluminum", "Ergonomic"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["laptop stand", "ergonomic", "foldable"]
  },
  {
    id: "NE-75",
    model: "NE 75",
    name: "Mobile Stand Foldable",
    category: "Mobile Accessories",
    subcategory: "Mobile Stands",
    colors: ["Black", "White", "Pink"],
    price: 80,
    ctnPacking: "200 PCS CTN",
    features: ["Foldable", "Portable", "3 Colors"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["foldable stand", "portable", "mobile stand"]
  },
  {
    id: "NE-76",
    model: "NE 76",
    name: "Metal Mobile Stand With Card Holder",
    category: "Mobile Accessories",
    subcategory: "Mobile Stands",
    colors: ["Black"],
    price: 75,
    ctnPacking: "100 PCS CTN",
    features: ["Card Holder", "Metal Stand", "2-in-1"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["mobile stand", "card holder", "metal"]
  },
  {
    id: "NE-80",
    model: "NE-80",
    name: "360 Rotational Mobile Stand",
    category: "Mobile Accessories",
    subcategory: "Mobile Stands",
    colors: ["Black", "White"],
    price: 95,
    ctnPacking: "100 PCS CTN",
    features: ["360° Rotation", "Adjustable", "Versatile"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["rotating stand", "360", "adjustable"]
  },
  {
    id: "NE-88",
    model: "NE-88",
    name: "Foldable Phone Stand Holder",
    category: "Mobile Accessories",
    subcategory: "Mobile Stands",
    colors: ["Mix Colour"],
    price: 60,
    ctnPacking: "500 PCS CTN",
    features: ["Foldable", "Compact", "Budget"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["phone stand", "foldable", "budget"]
  },
  {
    id: "NE-108",
    model: "NE-108",
    name: "Adhesive Cell Phone Pocket",
    category: "Mobile Accessories",
    subcategory: "Phone Accessories",
    colors: ["Black"],
    price: 60,
    ctnPacking: "1000 PCS CTN",
    features: ["Adhesive Back", "Card Pocket", "Stick-On"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["phone pocket", "card holder", "adhesive"]
  },

  // ============================================
  // UMBRELLAS
  // ============================================
  {
    id: "NE-66",
    model: "NE 66",
    name: "Capsule Umbrella",
    category: "Umbrellas",
    subcategory: "Compact",
    colors: ["Multicolour"],
    price: 260,
    ctnPacking: "60 PCS CTN",
    features: ["Capsule Case", "Ultra Compact", "Travel Friendly"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["capsule umbrella", "compact", "travel"]
  },
  {
    id: "NE-67",
    model: "NE 67",
    name: "Wine Shaped Bottle Umbrella",
    category: "Umbrellas",
    subcategory: "Novelty",
    colors: ["Multicolours"],
    price: 195,
    ctnPacking: "60 PCS CTN",
    features: ["Wine Bottle Shape", "Creative Design", "Gift Worthy"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["wine umbrella", "novelty", "creative"]
  },
  {
    id: "NE-68",
    model: "NE 68",
    name: "Reverse Umbrella",
    category: "Umbrellas",
    subcategory: "Reverse Open",
    colors: ["Multicolours"],
    price: 260,
    ctnPacking: "50 PCS CTN",
    features: ["Reverse Folding", "No Drip Design", "Hands Free"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["reverse umbrella", "inverted", "no drip"]
  },

  // ============================================
  // TORCHES & TOOLS
  // ============================================
  {
    id: "NE-64",
    model: "NE 64",
    name: "Torch",
    category: "Tools",
    subcategory: "Torches",
    colors: ["Black"],
    price: 120,
    ctnPacking: "240 PCS CTN",
    features: ["LED Torch", "Compact", "Bright Light"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["torch", "flashlight", "led"]
  },
  {
    id: "NE-65",
    model: "NE-65",
    name: "LED 3W Torch",
    category: "Tools",
    subcategory: "Torches",
    colors: ["Black"],
    price: 110,
    ctnPacking: "160 PCS CTN",
    features: ["3W LED", "Powerful", "Compact"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["led torch", "3w", "powerful"]
  },

  // ============================================
  // STATIONERY & OFFICE
  // ============================================
  {
    id: "NE-69",
    model: "NE 69",
    name: "Pen with Mobile Stand",
    category: "Stationery",
    subcategory: "Pens",
    colors: ["Multicolour"],
    price: 50,
    ctnPacking: "1200 PCS CTN",
    features: ["Pen + Mobile Stand", "2-in-1", "Bulk Gifting"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["pen", "mobile stand", "2-in-1"]
  },
  {
    id: "NE-70",
    model: "NE 70",
    name: "Digital LCD E-Note Pad",
    category: "Stationery",
    subcategory: "Writing Pads",
    colors: ["Black"],
    price: 120,
    ctnPacking: "100 PCS CTN",
    features: ["LCD Screen", "Erasable", "Eco-Friendly"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["e-note pad", "lcd", "digital"]
  },
  {
    id: "NE-85",
    model: "NE-85",
    name: "Sank Magic Book",
    category: "Stationery",
    subcategory: "Kids",
    colors: ["Multi"],
    price: 140,
    ctnPacking: "100 PCS CTN",
    features: ["Practice Writing", "Reusable", "Kids Learning"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["magic book", "kids", "learning"]
  },

  // ============================================
  // TECH ACCESSORIES
  // ============================================
  {
    id: "NE-72",
    model: "NE 72",
    name: "Mirror Keychain",
    category: "Accessories",
    subcategory: "Keychains",
    colors: ["Multicolour"],
    price: 150,
    ctnPacking: "300 PCS CTN",
    features: ["Mirror + Keychain", "Compact", "Gift Item"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["keychain", "mirror", "accessory"]
  },
  {
    id: "NE-73",
    model: "NE 73",
    name: "Timing Charger",
    category: "Electronics",
    subcategory: "Chargers",
    colors: ["White"],
    price: 350,
    features: ["Timer Function", "Auto Cut-Off", "Safe Charging"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["charger", "timer", "safe"]
  },
  {
    id: "NE-86",
    model: "NE-86",
    name: "Multifunctional Cable Kit",
    category: "Electronics",
    subcategory: "Cables",
    colors: ["Black", "White", "Blue"],
    price: 95,
    ctnPacking: "500 PCS CTN",
    features: ["Multiple Connectors", "Compact Kit", "Travel Friendly"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["cable kit", "multi cable", "travel"]
  },

  // ============================================
  // HUMIDIFIERS
  // ============================================
  {
    id: "NE-90",
    model: "NE-90",
    name: "Portable Colorful Mini Humidifier",
    category: "Electronics",
    subcategory: "Humidifiers",
    colors: ["Mix"],
    price: 150,
    ctnPacking: "100 PCS CTN",
    features: ["Mini Size", "Colorful LED", "USB Powered"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["humidifier", "mini", "colorful"]
  },
  {
    id: "NE-102",
    model: "NE-102",
    name: "Anti-Gravity Humidifier With Rechargeable",
    category: "Electronics",
    subcategory: "Humidifiers",
    colors: ["Mix"],
    price: 830,
    ctnPacking: "24 PCS CTN",
    features: ["Anti-Gravity Water Drop", "Rechargeable", "Premium"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["anti-gravity", "humidifier", "premium"]
  },
  {
    id: "NE-103",
    model: "NE-103",
    name: "Wooden Humidifier",
    category: "Electronics",
    subcategory: "Humidifiers",
    colors: ["Wood"],
    price: 190,
    ctnPacking: "60 PCS CTN",
    features: ["Wooden Design", "Aroma Diffuser", "Natural Look"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["wooden humidifier", "aroma", "natural"]
  },
  {
    id: "NE-104",
    model: "NE-104",
    name: "USB Electric Aroma Air Humidifier",
    category: "Electronics",
    subcategory: "Humidifiers",
    colors: ["White"],
    price: 190,
    ctnPacking: "60 PCS CTN",
    features: ["USB Powered", "Aroma Diffuser", "Air Humidifier"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["usb humidifier", "aroma", "electric"]
  },
  {
    id: "NE-105",
    model: "NE-105",
    name: "Rose Shape Humidifier",
    category: "Electronics",
    subcategory: "Humidifiers",
    colors: ["Pink"],
    price: 190,
    ctnPacking: "60 PCS CTN",
    features: ["Rose Shape", "Decorative", "Humidifier"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["rose humidifier", "decorative", "gift"]
  },

  // ============================================
  // SPECIALTY ITEMS
  // ============================================
  {
    id: "NE-87",
    model: "NE-87",
    name: "Water Sensor Diya (Big & Small)",
    category: "Decor",
    subcategory: "Diyas",
    colors: ["Brown"],
    price: "35 to 45",
    ctnPacking: "960 PCS CTN",
    features: ["Water Activated", "LED Diya", "Festival Item"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["diya", "water sensor", "festival", "diwali"]
  },
  {
    id: "NE-97",
    model: "NE-97",
    name: "Kids Water Bottle With Sling And Handle",
    category: "Bottles",
    subcategory: "Kids",
    colors: ["Mix Colour"],
    price: 140,
    features: ["Kids Design", "Sling Strap", "Handle"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    tags: ["kids bottle", "sling", "handle"]
  }
];

// ============================================
// CATEGORY DEFINITIONS
// ============================================
export const giftorityCategories = [
  {
    id: "bottles",
    name: "Bottles",
    subcategories: [
      "Temperature Display",
      "Stainless Steel",
      "Double Wall",
      "Vacuum Insulated",
      "Vacuum Flask",
      "Aluminum",
      "Eco-Friendly",
      "Motivational",
      "Glass Bottles",
      "Plastic Bottles",
      "Sports Bottles",
      "Travel Bottles",
      "Premium Bottles",
      "Kids",
      "Gift Sets"
    ],
    count: 45
  },
  {
    id: "mugs",
    name: "Mugs & Cups",
    subcategories: [
      "Travel Mugs",
      "Coffee Mugs",
      "Eco-Friendly",
      "Ceramic",
      "Wine Tumblers",
      "Electric Mugs",
      "Glass",
      "Sublimation",
      "Specialty"
    ],
    count: 22
  },
  {
    id: "tumblers",
    name: "Tumblers",
    subcategories: [
      "Stanley Style",
      "Eco-Friendly"
    ],
    count: 5
  },
  {
    id: "gift-sets",
    name: "Gift Sets",
    subcategories: [
      "Flask Sets",
      "Bottle Sets"
    ],
    count: 4
  },
  {
    id: "electronics",
    name: "Electronics",
    subcategories: [
      "Kitchen Electronics",
      "Blenders",
      "Speakers",
      "Chargers",
      "Cables",
      "Humidifiers"
    ],
    count: 15
  },
  {
    id: "clocks",
    name: "Clocks",
    subcategories: [
      "Digital Clocks"
    ],
    count: 4
  },
  {
    id: "lighting",
    name: "Lighting",
    subcategories: [
      "Table Lamps",
      "Night Lamps",
      "Creative Lamps",
      "Study Lamps",
      "Sensor Lights"
    ],
    count: 6
  },
  {
    id: "mobile-accessories",
    name: "Mobile Accessories",
    subcategories: [
      "Mobile Stands",
      "Pop Sockets",
      "Laptop Stands",
      "Phone Accessories"
    ],
    count: 10
  },
  {
    id: "lunch-boxes",
    name: "Lunch Boxes",
    subcategories: [
      "Insulated"
    ],
    count: 2
  },
  {
    id: "umbrellas",
    name: "Umbrellas",
    subcategories: [
      "Compact",
      "Novelty",
      "Reverse Open"
    ],
    count: 3
  },
  {
    id: "stationery",
    name: "Stationery",
    subcategories: [
      "Pens",
      "Writing Pads",
      "Kids"
    ],
    count: 3
  },
  {
    id: "tools",
    name: "Tools",
    subcategories: [
      "Torches"
    ],
    count: 2
  }
];

// ============================================
// HELPER FUNCTIONS
// ============================================
export const getGiftorityProductsByCategory = (category: string) => {
  return giftorityEconomicalProducts.filter(p => 
    p.category.toLowerCase() === category.toLowerCase()
  );
};

export const getGiftorityProductsBySubcategory = (subcategory: string) => {
  return giftorityEconomicalProducts.filter(p => 
    p.subcategory.toLowerCase() === subcategory.toLowerCase()
  );
};

export const searchGiftorityProducts = (query: string) => {
  const lowerQuery = query.toLowerCase();
  return giftorityEconomicalProducts.filter(p => 
    p.name.toLowerCase().includes(lowerQuery) ||
    p.model.toLowerCase().includes(lowerQuery) ||
    p.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
    p.category.toLowerCase().includes(lowerQuery) ||
    p.subcategory.toLowerCase().includes(lowerQuery)
  );
};

export const getGiftorityProductByModel = (model: string) => {
  return giftorityEconomicalProducts.find(p => 
    p.model.toLowerCase().replace(/\s+/g, '-') === model.toLowerCase() ||
    p.model.toLowerCase() === model.toLowerCase() ||
    p.id.toLowerCase() === model.toLowerCase()
  );
};

export const getGiftorityProductsByPriceRange = (min: number, max: number) => {
  return giftorityEconomicalProducts.filter(p => {
    const price = typeof p.price === 'number' ? p.price : parseInt(p.price.split(' ')[0]);
    return price >= min && price <= max;
  });
};

export default giftorityEconomicalProducts;