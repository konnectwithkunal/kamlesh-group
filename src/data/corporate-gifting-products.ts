// Corporate Gifting Product Data for Kamlesh Group
// Each category has 5-6 products

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  priceUnit: string;
  minOrderQty: number;
  images: string[];
  description: string;
  shortDescription: string;
  specs: ProductSpec[];
  features: string[];
  category: string;
  categorySlug: string;
  inStock: boolean;
  isNew?: boolean;
  isFeatured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  productCount: number;
}

// Categories
export const giftingCategories: Category[] = [
  {
    id: "employee-engagement-kits",
    name: "Employee Engagement Kits",
    slug: "employee-engagement-kits",
    description: "Curated kits to boost team morale, celebrate milestones, and show appreciation to your valued employees.",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80",
    productCount: 6
  },
  {
    id: "welcome-kits",
    name: "Welcome Kits",
    slug: "welcome-kits",
    description: "Make a great first impression with thoughtfully curated welcome kits for new employees and clients.",
    image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=800&q=80",
    productCount: 5
  },
  {
    id: "sublimation-mugs",
    name: "Sublimation Mugs",
    slug: "sublimation-mugs",
    description: "Premium ceramic mugs with vibrant sublimation printing. Perfect for corporate gifting and promotional events.",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800&q=80",
    productCount: 6
  },
  {
    id: "drinkware",
    name: "Drinkware",
    slug: "drinkware",
    description: "Custom bottles, sippers, and tumblers with your brand. Practical gifts that keep your brand visible.",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&q=80",
    productCount: 6
  },
  {
    id: "apparel",
    name: "Apparel",
    slug: "apparel",
    description: "Branded t-shirts, polo shirts, and caps with sublimation printing for team uniforms and promotional wear.",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
    productCount: 6
  },
  {
    id: "gift-sets",
    name: "Gift Sets",
    slug: "gift-sets",
    description: "Premium combo gift sets perfect for festivals, anniversaries, and special occasions.",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&q=80",
    productCount: 5
  }
];

// Employee Engagement Kits Products
export const employeeEngagementProducts: Product[] = [
  {
    id: "eek-001",
    name: "Premium Achievement Kit",
    slug: "premium-achievement-kit",
    price: 2499,
    priceUnit: "kit",
    minOrderQty: 5,
    images: [
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80",
      "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=600&q=80",
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&q=80"
    ],
    shortDescription: "Celebrate team achievements with this premium kit featuring branded merchandise.",
    description: "The Premium Achievement Kit is designed to recognize and celebrate outstanding employee performance. This thoughtfully curated kit includes a personalized trophy, branded notebook, premium pen, and a ceramic mug - all customized with your company logo. Perfect for quarterly awards, work anniversaries, and milestone celebrations.",
    specs: [
      { label: "Kit Contents", value: "Trophy, Notebook, Pen, Mug" },
      { label: "Customization", value: "Logo printing on all items" },
      { label: "Box Size", value: "12\" x 10\" x 6\"" },
      { label: "Box Material", value: "Premium Kraft with ribbon" },
      { label: "Personalization", value: "Name & message card included" },
      { label: "Delivery", value: "5-7 business days" }
    ],
    features: [
      "Premium quality acrylic trophy with laser engraving",
      "A5 hardbound notebook with 160 pages",
      "Metal body pen with your logo",
      "11oz ceramic sublimation mug",
      "Elegant gift box with ribbon closure",
      "Personalized message card included"
    ],
    category: "Employee Engagement Kits",
    categorySlug: "employee-engagement-kits",
    inStock: true,
    isFeatured: true
  },
  {
    id: "eek-002",
    name: "Work Anniversary Box",
    slug: "work-anniversary-box",
    price: 1999,
    priceUnit: "kit",
    minOrderQty: 5,
    images: [
      "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=600&q=80",
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80"
    ],
    shortDescription: "Mark employee milestones with this special anniversary celebration kit.",
    description: "Celebrate your team members' work anniversaries with this specially curated box. Includes a personalized photo frame, branded t-shirt, premium diary, and sweet treats. Each item can be customized with the employee's name and years of service.",
    specs: [
      { label: "Kit Contents", value: "Photo Frame, T-Shirt, Diary, Chocolates" },
      { label: "T-Shirt Sizes", value: "S, M, L, XL, XXL" },
      { label: "Frame Size", value: "6\" x 8\"" },
      { label: "Diary Type", value: "Wiro-bound, 200 pages" },
      { label: "Customization", value: "Name & years of service" },
      { label: "Delivery", value: "5-7 business days" }
    ],
    features: [
      "Wooden photo frame with laser engraving",
      "Polyester sublimation t-shirt (180 GSM)",
      "Premium wiro-bound diary",
      "Gourmet chocolate box",
      "Magnetic closure gift box"
    ],
    category: "Employee Engagement Kits",
    categorySlug: "employee-engagement-kits",
    inStock: true,
    isNew: true
  },
  {
    id: "eek-003",
    name: "Team Spirit Hamper",
    slug: "team-spirit-hamper",
    price: 1499,
    priceUnit: "kit",
    minOrderQty: 10,
    images: [
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&q=80",
      "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=600&q=80"
    ],
    shortDescription: "Build team bonding with matching branded merchandise for your entire team.",
    description: "Foster team unity with this coordinated merchandise hamper. Perfect for team outings, retreats, or department celebrations. Each kit includes a branded cap, t-shirt, water bottle, and keychain - all matching in your company colors.",
    specs: [
      { label: "Kit Contents", value: "Cap, T-Shirt, Bottle, Keychain" },
      { label: "T-Shirt Fabric", value: "Polyester 180 GSM" },
      { label: "Bottle Capacity", value: "750ml Stainless Steel" },
      { label: "Cap Style", value: "Baseball cap with buckle" },
      { label: "Branding", value: "Sublimation & embroidery" },
      { label: "Delivery", value: "7-10 business days" }
    ],
    features: [
      "Color-coordinated merchandise",
      "High-quality sublimation printing",
      "Embroidered cap with logo",
      "Insulated steel bottle",
      "Acrylic keychain with photo insert",
      "Eco-friendly packaging"
    ],
    category: "Employee Engagement Kits",
    categorySlug: "employee-engagement-kits",
    inStock: true
  },
  {
    id: "eek-004",
    name: "Wellness Appreciation Kit",
    slug: "wellness-appreciation-kit",
    price: 1799,
    priceUnit: "kit",
    minOrderQty: 5,
    images: [
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80",
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&q=80"
    ],
    shortDescription: "Show you care about employee wellness with this health-focused gift kit.",
    description: "Demonstrate your commitment to employee wellbeing with this wellness-focused kit. Includes a yoga mat, resistance band, infuser bottle, and wellness journal. Perfect for health initiatives, fitness challenges, or wellness month celebrations.",
    specs: [
      { label: "Kit Contents", value: "Yoga Mat, Bottle, Band, Journal" },
      { label: "Mat Size", value: "6mm thick, 68\" x 24\"" },
      { label: "Bottle Type", value: "Glass with infuser, 500ml" },
      { label: "Journal", value: "A5 wellness tracker, 120 pages" },
      { label: "Branding", value: "Logo on all items" },
      { label: "Delivery", value: "5-7 business days" }
    ],
    features: [
      "Anti-slip yoga mat with logo print",
      "Glass infuser bottle for detox drinks",
      "Resistance band set (3 levels)",
      "Goal-tracking wellness journal",
      "Cotton drawstring bag included"
    ],
    category: "Employee Engagement Kits",
    categorySlug: "employee-engagement-kits",
    inStock: true
  },
  {
    id: "eek-005",
    name: "Star Performer Box",
    slug: "star-performer-box",
    price: 2999,
    priceUnit: "kit",
    minOrderQty: 3,
    images: [
      "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=600&q=80",
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80"
    ],
    shortDescription: "Premium recognition kit for your top performers with luxury items.",
    description: "Reserve this premium kit for your star performers. Features a crystal trophy, premium leather portfolio, branded polo t-shirt, and a luxury pen set. The ultimate way to recognize excellence and motivate continued high performance.",
    specs: [
      { label: "Kit Contents", value: "Crystal Trophy, Portfolio, Polo, Pen Set" },
      { label: "Trophy Material", value: "K9 Crystal with 3D engraving" },
      { label: "Portfolio", value: "PU Leather, A4 size" },
      { label: "Polo Fabric", value: "Cotton-Poly blend, 200 GSM" },
      { label: "Pen Set", value: "Metal body, gift box" },
      { label: "Delivery", value: "7-10 business days" }
    ],
    features: [
      "Premium K9 crystal trophy with 3D laser engraving",
      "Professional leather portfolio with notepad",
      "Premium polo t-shirt with embroidered logo",
      "Executive pen set in velvet box",
      "Premium rigid gift box with magnetic closure",
      "Certificate of achievement included"
    ],
    category: "Employee Engagement Kits",
    categorySlug: "employee-engagement-kits",
    inStock: true,
    isFeatured: true
  },
  {
    id: "eek-006",
    name: "Remote Worker Kit",
    slug: "remote-worker-kit",
    price: 1299,
    priceUnit: "kit",
    minOrderQty: 10,
    images: [
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&q=80",
      "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=600&q=80"
    ],
    shortDescription: "Essential kit for work-from-home employees with branded desk accessories.",
    description: "Keep your remote team connected to your brand with this home office essentials kit. Includes a branded mousepad, webcam cover, desk organizer, and coffee mug. Perfect for onboarding remote employees or refreshing their home workspace.",
    specs: [
      { label: "Kit Contents", value: "Mousepad, Webcam Cover, Organizer, Mug" },
      { label: "Mousepad Size", value: "9\" x 7\" with wrist rest" },
      { label: "Organizer", value: "3-compartment desk caddy" },
      { label: "Mug Capacity", value: "330ml ceramic" },
      { label: "Branding", value: "Full color printing" },
      { label: "Delivery", value: "5-7 business days" }
    ],
    features: [
      "Ergonomic mousepad with gel wrist rest",
      "Sliding webcam privacy cover",
      "Multi-compartment desk organizer",
      "Ceramic mug with full-wrap print",
      "Compact mailer box for easy shipping"
    ],
    category: "Employee Engagement Kits",
    categorySlug: "employee-engagement-kits",
    inStock: true,
    isNew: true
  }
];

// Welcome Kits Products
export const welcomeKitsProducts: Product[] = [
  {
    id: "wk-001",
    name: "Executive Onboarding Kit",
    slug: "executive-onboarding-kit",
    price: 3499,
    priceUnit: "kit",
    minOrderQty: 5,
    images: [
      "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=600&q=80",
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80",
      "https://images.unsplash.com/photo-1549465220-1a8b9238bd345a?w=600&q=80"
    ],
    shortDescription: "Premium welcome kit for senior hires with luxury branded items.",
    description: "Make a powerful first impression with this executive-level welcome kit. Designed for senior hires and leadership roles, it includes a premium laptop bag, leather portfolio, branded polo, executive pen, and a personalized name plate. Sets the tone for a premium employer brand.",
    specs: [
      { label: "Kit Contents", value: "Laptop Bag, Portfolio, Polo, Pen, Name Plate" },
      { label: "Bag Type", value: "15.6\" laptop backpack" },
      { label: "Portfolio", value: "A4 PU Leather with notepad" },
      { label: "Polo Fabric", value: "Premium cotton, 200 GSM" },
      { label: "Name Plate", value: "Acrylic desk stand" },
      { label: "Delivery", value: "7-10 business days" }
    ],
    features: [
      "Premium laptop backpack with multiple compartments",
      "Professional leather portfolio",
      "High-quality embroidered polo shirt",
      "Executive metal pen in gift box",
      "Personalized acrylic desk name plate",
      "Welcome letter and company handbook",
      "Premium rigid box packaging"
    ],
    category: "Welcome Kits",
    categorySlug: "welcome-kits",
    inStock: true,
    isFeatured: true
  },
  {
    id: "wk-002",
    name: "Standard Joining Kit",
    slug: "standard-joining-kit",
    price: 1499,
    priceUnit: "kit",
    minOrderQty: 10,
    images: [
      "https://images.unsplash.com/photo-1549465220-1a8b9238bd345a?w=600&q=80",
      "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=600&q=80"
    ],
    shortDescription: "Essential welcome kit with all the basics for new team members.",
    description: "The perfect welcome for every new hire. This comprehensive kit includes a branded t-shirt, notebook, pen, lanyard with ID holder, coffee mug, and welcome card. Everything a new employee needs on day one.",
    specs: [
      { label: "Kit Contents", value: "T-Shirt, Notebook, Pen, Lanyard, Mug" },
      { label: "T-Shirt", value: "Polyester 180 GSM, sublimation" },
      { label: "Notebook", value: "A5 soft cover, 100 pages" },
      { label: "Mug", value: "11oz ceramic with logo" },
      { label: "Lanyard", value: "20mm with card holder" },
      { label: "Delivery", value: "5-7 business days" }
    ],
    features: [
      "Comfortable sublimation t-shirt",
      "Soft-touch notebook with ribbon",
      "Quality ballpoint pen",
      "Durable lanyard with ID holder",
      "Ceramic coffee mug",
      "Welcome card with company values",
      "Kraft box with tissue paper"
    ],
    category: "Welcome Kits",
    categorySlug: "welcome-kits",
    inStock: true
  },
  {
    id: "wk-003",
    name: "Tech Starter Kit",
    slug: "tech-starter-kit",
    price: 1999,
    priceUnit: "kit",
    minOrderQty: 10,
    images: [
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&q=80",
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&q=80"
    ],
    shortDescription: "Tech-focused welcome kit with useful gadgets and accessories.",
    description: "Perfect for tech companies and IT teams. This kit includes a laptop sleeve, wireless mouse, USB hub, cable organizer, and branded stickers. Practical items that new hires will use every day.",
    specs: [
      { label: "Kit Contents", value: "Laptop Sleeve, Mouse, USB Hub, Organizer" },
      { label: "Sleeve Size", value: "14-15.6\" compatible" },
      { label: "Mouse", value: "Wireless optical, 2.4GHz" },
      { label: "USB Hub", value: "4-port USB 3.0" },
      { label: "Branding", value: "Laser engraving & printing" },
      { label: "Delivery", value: "7-10 business days" }
    ],
    features: [
      "Padded neoprene laptop sleeve",
      "Ergonomic wireless mouse",
      "Compact USB hub",
      "Travel-friendly cable organizer",
      "Vinyl sticker pack",
      "Tech-themed gift box"
    ],
    category: "Welcome Kits",
    categorySlug: "welcome-kits",
    inStock: true,
    isNew: true
  },
  {
    id: "wk-004",
    name: "Eco-Friendly Welcome Box",
    slug: "eco-friendly-welcome-box",
    price: 1799,
    priceUnit: "kit",
    minOrderQty: 10,
    images: [
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=80",
      "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=600&q=80"
    ],
    shortDescription: "Sustainable welcome kit made with eco-conscious materials.",
    description: "Show your commitment to sustainability from day one. This eco-friendly kit includes a bamboo pen, recycled notebook, cotton tote bag, seed paper card, and a steel water bottle. All items are sustainably sourced.",
    specs: [
      { label: "Kit Contents", value: "Bamboo Pen, Notebook, Tote, Bottle, Seed Card" },
      { label: "Notebook", value: "A5 recycled paper, 120 pages" },
      { label: "Tote Bag", value: "Organic cotton, 12oz" },
      { label: "Bottle", value: "750ml stainless steel" },
      { label: "Packaging", value: "100% recycled kraft box" },
      { label: "Delivery", value: "5-7 business days" }
    ],
    features: [
      "Bamboo ballpoint pen",
      "Stone paper notebook (tree-free)",
      "Organic cotton tote with logo",
      "Reusable steel water bottle",
      "Plantable seed paper welcome card",
      "Zero-plastic packaging"
    ],
    category: "Welcome Kits",
    categorySlug: "welcome-kits",
    inStock: true
  },
  {
    id: "wk-005",
    name: "Intern Welcome Pack",
    slug: "intern-welcome-pack",
    price: 899,
    priceUnit: "kit",
    minOrderQty: 15,
    images: [
      "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=600&q=80",
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&q=80"
    ],
    shortDescription: "Budget-friendly welcome kit perfect for internship programs.",
    description: "Make interns feel part of the team without breaking the budget. This compact kit includes a branded t-shirt, notepad, pen, and sticker set. Simple but thoughtful welcome for your internship program.",
    specs: [
      { label: "Kit Contents", value: "T-Shirt, Notepad, Pen, Stickers" },
      { label: "T-Shirt", value: "Polyester 150 GSM" },
      { label: "Notepad", value: "A6 pocket size, 50 pages" },
      { label: "Pen", value: "Plastic body with logo" },
      { label: "Packaging", value: "Polybag with card" },
      { label: "Delivery", value: "3-5 business days" }
    ],
    features: [
      "Comfortable t-shirt with sublimation print",
      "Handy pocket notepad",
      "Branded ballpoint pen",
      "Fun branded sticker pack",
      "Welcome card with intern guide"
    ],
    category: "Welcome Kits",
    categorySlug: "welcome-kits",
    inStock: true
  }
];

// Sublimation Mugs Products
export const sublimationMugsProducts: Product[] = [
  {
    id: "mug-001",
    name: "Classic White Ceramic Mug",
    slug: "classic-white-ceramic-mug",
    price: 149,
    priceUnit: "piece",
    minOrderQty: 12,
    images: [
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&q=80",
      "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=600&q=80"
    ],
    shortDescription: "Standard 11oz white ceramic mug with full-wrap sublimation printing.",
    description: "Our bestselling ceramic mug with vibrant sublimation printing. The 11oz capacity is perfect for coffee, tea, or hot chocolate. Full-wrap printing allows your design to cover the entire mug surface. Dishwasher and microwave safe.",
    specs: [
      { label: "Capacity", value: "11oz (330ml)" },
      { label: "Material", value: "AAA Grade Ceramic" },
      { label: "Print Area", value: "Full wrap (8\" x 3.5\")" },
      { label: "Print Type", value: "Sublimation" },
      { label: "Care", value: "Dishwasher & microwave safe" },
      { label: "Delivery", value: "3-5 business days" }
    ],
    features: [
      "Premium AAA grade ceramic",
      "Glossy finish for vivid colors",
      "Full-wrap print area",
      "Comfortable C-handle",
      "Scratch-resistant coating",
      "Individual box packaging available"
    ],
    category: "Sublimation Mugs",
    categorySlug: "sublimation-mugs",
    inStock: true,
    isFeatured: true
  },
  {
    id: "mug-002",
    name: "Magic Color Changing Mug",
    slug: "magic-color-changing-mug",
    price: 249,
    priceUnit: "piece",
    minOrderQty: 12,
    images: [
      "https://images.unsplash.com/photo-1577937927133-66ef06acdf18?w=600&q=80",
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&q=80"
    ],
    shortDescription: "Heat-sensitive mug that reveals your design when hot liquid is added.",
    description: "Create a magical experience with our color-changing mug. The matte black exterior transforms to reveal your printed design when hot liquid is poured in. Perfect for personalized gifts, promotional items, and special occasions.",
    specs: [
      { label: "Capacity", value: "11oz (330ml)" },
      { label: "Material", value: "Ceramic with heat-reactive coating" },
      { label: "Base Color", value: "Matte Black" },
      { label: "Reveal Temp", value: ">40°C (104°F)" },
      { label: "Care", value: "Hand wash recommended" },
      { label: "Delivery", value: "5-7 business days" }
    ],
    features: [
      "Heat-reactive color changing effect",
      "Matte black to full color reveal",
      "High-definition sublimation print",
      "Surprise element for gifts",
      "Individual gift box included"
    ],
    category: "Sublimation Mugs",
    categorySlug: "sublimation-mugs",
    inStock: true,
    isNew: true
  },
  {
    id: "mug-003",
    name: "Inner Color Mug",
    slug: "inner-color-mug",
    price: 179,
    priceUnit: "piece",
    minOrderQty: 12,
    images: [
      "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=600&q=80",
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&q=80"
    ],
    shortDescription: "White mug with colored interior and handle - 6 colors available.",
    description: "Add a pop of color to your branded mugs with our inner color collection. White exterior with colored interior and matching handle. Available in Red, Blue, Green, Yellow, Orange, and Pink. Perfect for color-coded departments or vibrant branding.",
    specs: [
      { label: "Capacity", value: "11oz (330ml)" },
      { label: "Material", value: "AAA Grade Ceramic" },
      { label: "Colors", value: "Red, Blue, Green, Yellow, Orange, Pink" },
      { label: "Print Area", value: "White exterior area" },
      { label: "Care", value: "Dishwasher safe" },
      { label: "Delivery", value: "3-5 business days" }
    ],
    features: [
      "Vibrant colored interior",
      "Matching colored handle",
      "6 color options",
      "Premium sublimation quality",
      "Great for team/department gifts"
    ],
    category: "Sublimation Mugs",
    categorySlug: "sublimation-mugs",
    inStock: true
  },
  {
    id: "mug-004",
    name: "Large 15oz Coffee Mug",
    slug: "large-15oz-coffee-mug",
    price: 199,
    priceUnit: "piece",
    minOrderQty: 12,
    images: [
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80",
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&q=80"
    ],
    shortDescription: "Extra large 15oz mug for those who need more coffee.",
    description: "For coffee lovers who need more! Our 15oz mug offers 36% more capacity than standard mugs. Same premium quality sublimation printing with a larger canvas for your designs. Ideal for home office gifts and serious coffee drinkers.",
    specs: [
      { label: "Capacity", value: "15oz (450ml)" },
      { label: "Material", value: "AAA Grade Ceramic" },
      { label: "Dimensions", value: "4.5\" H x 3.4\" Diameter" },
      { label: "Print Area", value: "Full wrap (9\" x 4\")" },
      { label: "Care", value: "Dishwasher & microwave safe" },
      { label: "Delivery", value: "3-5 business days" }
    ],
    features: [
      "36% more capacity than 11oz",
      "Larger print area for designs",
      "Sturdy comfortable handle",
      "Premium ceramic quality",
      "Perfect for WFH gifts"
    ],
    category: "Sublimation Mugs",
    categorySlug: "sublimation-mugs",
    inStock: true
  },
  {
    id: "mug-005",
    name: "Heart Handle Mug",
    slug: "heart-handle-mug",
    price: 219,
    priceUnit: "piece",
    minOrderQty: 12,
    images: [
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&q=80",
      "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=600&q=80"
    ],
    shortDescription: "Unique mug with heart-shaped handle - perfect for Valentine's gifts.",
    description: "Show some love with our heart-shaped handle mug. The unique handle design makes this mug perfect for Valentine's Day gifts, wedding favors, or appreciation gifts. Available in white and inner color variants.",
    specs: [
      { label: "Capacity", value: "11oz (330ml)" },
      { label: "Material", value: "Premium Ceramic" },
      { label: "Handle", value: "Heart-shaped cutout" },
      { label: "Variants", value: "White, Inner Red, Inner Pink" },
      { label: "Print Area", value: "Full wrap" },
      { label: "Delivery", value: "5-7 business days" }
    ],
    features: [
      "Unique heart-shaped handle",
      "Romantic gift option",
      "Premium sublimation quality",
      "Available in 3 variants",
      "Gift box packaging available"
    ],
    category: "Sublimation Mugs",
    categorySlug: "sublimation-mugs",
    inStock: true
  },
  {
    id: "mug-006",
    name: "Frosted Glass Mug",
    slug: "frosted-glass-mug",
    price: 279,
    priceUnit: "piece",
    minOrderQty: 12,
    images: [
      "https://images.unsplash.com/photo-1577937927133-66ef06acdf18?w=600&q=80",
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&q=80"
    ],
    shortDescription: "Premium frosted glass mug with elegant sublimation printing.",
    description: "Elevate your gifting with our frosted glass mug. The textured frosted finish gives a premium look while providing excellent sublimation print results. Perfect for upscale corporate gifts and premium merchandise.",
    specs: [
      { label: "Capacity", value: "11oz (330ml)" },
      { label: "Material", value: "Frosted Borosilicate Glass" },
      { label: "Finish", value: "Matte frosted texture" },
      { label: "Print", value: "Sublimation on frosted surface" },
      { label: "Care", value: "Hand wash recommended" },
      { label: "Delivery", value: "5-7 business days" }
    ],
    features: [
      "Premium frosted glass finish",
      "Elegant matte texture",
      "Borosilicate glass (heat resistant)",
      "Unique upscale look",
      "Premium gift box included"
    ],
    category: "Sublimation Mugs",
    categorySlug: "sublimation-mugs",
    inStock: true,
    isFeatured: true
  }
];

// Drinkware Products
export const drinkwareProducts: Product[] = [
  {
    id: "dw-001",
    name: "Stainless Steel Sipper Bottle",
    slug: "stainless-steel-sipper-bottle",
    price: 399,
    priceUnit: "piece",
    minOrderQty: 10,
    images: [
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&q=80",
      "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=600&q=80"
    ],
    shortDescription: "750ml insulated stainless steel bottle with sublimation coating.",
    description: "Our premium stainless steel bottle keeps beverages cold for 24 hours or hot for 12 hours. The sublimation-coated surface allows for vibrant full-color printing. Perfect for corporate gifts, sports teams, and promotional events.",
    specs: [
      { label: "Capacity", value: "750ml" },
      { label: "Material", value: "304 Stainless Steel, Double Wall" },
      { label: "Insulation", value: "24hrs cold / 12hrs hot" },
      { label: "Print", value: "Full wrap sublimation" },
      { label: "Lid Type", value: "Leak-proof screw cap" },
      { label: "Delivery", value: "5-7 business days" }
    ],
    features: [
      "Double-wall vacuum insulation",
      "BPA-free materials",
      "Leak-proof design",
      "Full-color sublimation printing",
      "Sweat-free exterior",
      "Individual box packaging"
    ],
    category: "Drinkware",
    categorySlug: "drinkware",
    inStock: true,
    isFeatured: true
  },
  {
    id: "dw-002",
    name: "Aluminum Sports Bottle",
    slug: "aluminum-sports-bottle",
    price: 249,
    priceUnit: "piece",
    minOrderQty: 20,
    images: [
      "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=600&q=80",
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&q=80"
    ],
    shortDescription: "Lightweight aluminum bottle perfect for sports and outdoor activities.",
    description: "Lightweight yet durable aluminum bottle ideal for sports events, gym giveaways, and outdoor promotions. Features a secure screw cap with carabiner attachment. Available in multiple metallic colors.",
    specs: [
      { label: "Capacity", value: "600ml" },
      { label: "Material", value: "Aluminum with BPA-free liner" },
      { label: "Weight", value: "Light (100g empty)" },
      { label: "Colors", value: "Silver, Blue, Red, Black, Green" },
      { label: "Print", value: "Sublimation wrap" },
      { label: "Delivery", value: "3-5 business days" }
    ],
    features: [
      "Ultra-lightweight aluminum",
      "Carabiner clip included",
      "Food-grade BPA-free liner",
      "Multiple color options",
      "Great for sports events"
    ],
    category: "Drinkware",
    categorySlug: "drinkware",
    inStock: true
  },
  {
    id: "dw-003",
    name: "Glass Infuser Bottle",
    slug: "glass-infuser-bottle",
    price: 349,
    priceUnit: "piece",
    minOrderQty: 10,
    images: [
      "https://images.unsplash.com/photo-1570831739435-6601aa3fa4fb?w=600&q=80",
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&q=80"
    ],
    shortDescription: "Borosilicate glass bottle with fruit/tea infuser insert.",
    description: "Premium glass bottle with removable infuser for fruit-infused water or loose-leaf tea. Borosilicate glass is thermal shock resistant. Includes protective neoprene sleeve with your branding.",
    specs: [
      { label: "Capacity", value: "550ml" },
      { label: "Material", value: "Borosilicate Glass" },
      { label: "Infuser", value: "Stainless steel basket" },
      { label: "Sleeve", value: "Neoprene with logo print" },
      { label: "Lid", value: "Bamboo with silicone seal" },
      { label: "Delivery", value: "5-7 business days" }
    ],
    features: [
      "Thermal shock resistant glass",
      "Removable stainless infuser",
      "Eco-friendly bamboo lid",
      "Protective neoprene sleeve",
      "Perfect for wellness programs"
    ],
    category: "Drinkware",
    categorySlug: "drinkware",
    inStock: true,
    isNew: true
  },
  {
    id: "dw-004",
    name: "Insulated Travel Tumbler",
    slug: "insulated-travel-tumbler",
    price: 449,
    priceUnit: "piece",
    minOrderQty: 10,
    images: [
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80",
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&q=80"
    ],
    shortDescription: "Double-wall insulated tumbler with slide lid - car cup holder compatible.",
    description: "The perfect travel companion for commuters. This insulated tumbler fits standard car cup holders and features a slide-open lid for easy sipping. Double-wall construction keeps drinks at the right temperature.",
    specs: [
      { label: "Capacity", value: "500ml" },
      { label: "Material", value: "Stainless Steel, Double Wall" },
      { label: "Lid", value: "Slide-open BPA-free plastic" },
      { label: "Base", value: "Car cup holder compatible" },
      { label: "Print", value: "Full wrap sublimation" },
      { label: "Delivery", value: "5-7 business days" }
    ],
    features: [
      "Car cup holder friendly",
      "Slide-open drinking lid",
      "Double-wall insulation",
      "Sweat-proof design",
      "Full-color branding"
    ],
    category: "Drinkware",
    categorySlug: "drinkware",
    inStock: true
  },
  {
    id: "dw-005",
    name: "Copper Coated Bottle",
    slug: "copper-coated-bottle",
    price: 549,
    priceUnit: "piece",
    minOrderQty: 10,
    images: [
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&q=80",
      "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=600&q=80"
    ],
    shortDescription: "Premium copper-toned bottle with superior vacuum insulation.",
    description: "Make a statement with our copper-finish vacuum bottle. Superior insulation technology keeps beverages at optimal temperature. The elegant metallic finish adds premium appeal to your corporate gifts.",
    specs: [
      { label: "Capacity", value: "500ml" },
      { label: "Material", value: "Stainless Steel with Copper Coating" },
      { label: "Insulation", value: "Vacuum sealed, 48hrs cold/24hrs hot" },
      { label: "Finish", value: "Metallic copper" },
      { label: "Print", value: "Laser engraving" },
      { label: "Delivery", value: "7-10 business days" }
    ],
    features: [
      "Premium copper metallic finish",
      "Superior vacuum insulation",
      "Elegant executive look",
      "Laser engraved logo",
      "Gift box included"
    ],
    category: "Drinkware",
    categorySlug: "drinkware",
    inStock: true,
    isFeatured: true
  },
  {
    id: "dw-006",
    name: "Kids Sipper Bottle",
    slug: "kids-sipper-bottle",
    price: 199,
    priceUnit: "piece",
    minOrderQty: 20,
    images: [
      "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=600&q=80",
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&q=80"
    ],
    shortDescription: "Fun and colorful sipper bottle designed for kids - school & events.",
    description: "Colorful and fun sipper bottles perfect for school events, kids' programs, and family days. Features a flip-top straw lid for easy drinking. Available in bright colors with full-wrap printing.",
    specs: [
      { label: "Capacity", value: "400ml" },
      { label: "Material", value: "Tritan BPA-free plastic" },
      { label: "Lid", value: "Flip-top with built-in straw" },
      { label: "Colors", value: "Blue, Pink, Green, Orange" },
      { label: "Print", value: "Full color sublimation" },
      { label: "Delivery", value: "3-5 business days" }
    ],
    features: [
      "Kid-friendly design",
      "Built-in flip straw",
      "Shatterproof Tritan plastic",
      "Bright color options",
      "Great for school events"
    ],
    category: "Drinkware",
    categorySlug: "drinkware",
    inStock: true
  }
];

// Apparel Products
export const apparelProducts: Product[] = [
  {
    id: "app-001",
    name: "Sublimation Polyester T-Shirt",
    slug: "sublimation-polyester-t-shirt",
    price: 299,
    priceUnit: "piece",
    minOrderQty: 10,
    images: [
      "https://5.imimg.com/data5/SELLER/Default/2022/9/FZ/NP/ZP/13813473/sublimation-polyester-t-shirts-500x500.png",
      "https://5.imimg.com/data5/SELLER/Default/2022/9/PQ/LH/EA/13813473/sublimation-polyester-t-shirts-500x500.png"
    ],
    shortDescription: "Premium 180 GSM polyester t-shirt for vibrant all-over sublimation printing.",
    description: "Our flagship sublimation t-shirt made from 180 GSM polyester fabric. Perfect for full-color, edge-to-edge printing with exceptional vibrancy and durability. Ideal for corporate events, sports teams, and promotional wear.",
    specs: [
      { label: "Fabric", value: "100% Polyester, 180 GSM" },
      { label: "Sizes", value: "XS, S, M, L, XL, XXL, XXXL" },
      { label: "Neck", value: "Round neck" },
      { label: "Sleeves", value: "Half sleeves" },
      { label: "Print", value: "All-over sublimation" },
      { label: "Delivery", value: "5-7 business days" }
    ],
    features: [
      "Vibrant all-over printing",
      "Moisture-wicking fabric",
      "Colorfast - won't fade",
      "Soft hand feel",
      "Wide size range available"
    ],
    category: "Apparel",
    categorySlug: "apparel",
    inStock: true,
    isFeatured: true
  },
  {
    id: "app-002",
    name: "Polo Collar T-Shirt",
    slug: "polo-collar-t-shirt",
    price: 449,
    priceUnit: "piece",
    minOrderQty: 10,
    images: [
      "https://5.imimg.com/data5/SELLER/Default/2025/1/482994330/GV/RI/HF/13813473/sublimation-t-shirt-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2025/1/482995072/KG/HL/SU/13813473/sublimation-t-shirt-500x500.jpeg"
    ],
    shortDescription: "Professional polo t-shirt with collar - ideal for corporate uniforms.",
    description: "Professional looking polo t-shirt perfect for corporate uniforms and business casual wear. Features a classic collar and button placket. Available in multiple colors with logo placement options.",
    specs: [
      { label: "Fabric", value: "Polyester Matty, 180 GSM" },
      { label: "Sizes", value: "S, M, L, XL, XXL" },
      { label: "Collar", value: "Polo with buttons" },
      { label: "Colors", value: "White, Black, Grey, Navy, Maroon" },
      { label: "Print", value: "Sublimation + Embroidery option" },
      { label: "Delivery", value: "7-10 business days" }
    ],
    features: [
      "Professional polo collar",
      "Multiple color options",
      "Embroidery-ready",
      "Corporate-friendly look",
      "Durable construction"
    ],
    category: "Apparel",
    categorySlug: "apparel",
    inStock: true
  },
  {
    id: "app-003",
    name: "Cotton Feel T-Shirt",
    slug: "cotton-feel-t-shirt",
    price: 349,
    priceUnit: "piece",
    minOrderQty: 10,
    images: [
      "https://5.imimg.com/data5/SELLER/Default/2024/2/394647934/JM/WO/AI/13813473/whatsapp-image-2024-02-09-at-3-30-18-pm-1-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2024/2/394647942/IF/PB/UG/13813473/whatsapp-image-2024-02-09-at-3-30-18-pm-500x500.jpeg"
    ],
    shortDescription: "Soft cotton-feel sublimation t-shirt with comfort and print quality.",
    description: "Get the comfort of cotton with sublimation print capability. Our cotton-feel t-shirts use special fabric that feels soft like cotton but accepts sublimation printing beautifully. Available in pastel colors.",
    specs: [
      { label: "Fabric", value: "Cotton Feel Polyester, 160 GSM" },
      { label: "Sizes", value: "S, M, L, XL, XXL" },
      { label: "Colors", value: "White, Pink, Blue, Green, Yellow" },
      { label: "Neck", value: "Round neck" },
      { label: "Print", value: "Full sublimation" },
      { label: "Delivery", value: "5-7 business days" }
    ],
    features: [
      "Soft cotton-like feel",
      "Sublimation compatible",
      "Pastel color options",
      "Breathable fabric",
      "All-day comfort"
    ],
    category: "Apparel",
    categorySlug: "apparel",
    inStock: true,
    isNew: true
  },
  {
    id: "app-004",
    name: "Sublimation Cap",
    slug: "sublimation-cap",
    price: 199,
    priceUnit: "piece",
    minOrderQty: 20,
    images: [
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&q=80",
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=600&q=80"
    ],
    shortDescription: "Baseball cap with sublimation panel for full-color printing.",
    description: "Classic baseball cap with white sublimation-ready front panel. Perfect for event giveaways, sports teams, and promotional campaigns. Adjustable strap fits all sizes.",
    specs: [
      { label: "Style", value: "5-panel baseball cap" },
      { label: "Material", value: "Polyester front, mesh back" },
      { label: "Print Area", value: "Front panel 4\" x 3\"" },
      { label: "Closure", value: "Adjustable buckle strap" },
      { label: "Colors", value: "White front, various back colors" },
      { label: "Delivery", value: "3-5 business days" }
    ],
    features: [
      "Full-color front panel print",
      "Breathable mesh back",
      "One size fits all",
      "Pre-curved bill",
      "Great for events"
    ],
    category: "Apparel",
    categorySlug: "apparel",
    inStock: true
  },
  {
    id: "app-005",
    name: "Sublimation Hoodie",
    slug: "sublimation-hoodie",
    price: 799,
    priceUnit: "piece",
    minOrderQty: 10,
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80",
      "https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?w=600&q=80"
    ],
    shortDescription: "Premium hoodie with all-over sublimation printing capability.",
    description: "Stay warm with style! Our sublimation hoodie allows for stunning all-over prints including the hood and sleeves. Perfect for teams, events, and fashion merchandise.",
    specs: [
      { label: "Fabric", value: "Polyester fleece, 280 GSM" },
      { label: "Sizes", value: "S, M, L, XL, XXL" },
      { label: "Features", value: "Kangaroo pocket, drawstring hood" },
      { label: "Print", value: "All-over sublimation" },
      { label: "Care", value: "Machine washable" },
      { label: "Delivery", value: "10-12 business days" }
    ],
    features: [
      "All-over print including hood",
      "Warm fleece lining",
      "Kangaroo pocket",
      "Drawstring hood",
      "Statement merchandise piece"
    ],
    category: "Apparel",
    categorySlug: "apparel",
    inStock: true
  },
  {
    id: "app-006",
    name: "Baby Romper",
    slug: "baby-romper",
    price: 249,
    priceUnit: "piece",
    minOrderQty: 10,
    images: [
      "https://5.imimg.com/data5/SELLER/Default/2025/1/481847271/CQ/SU/AC/13813473/sublimation-baby-romper-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2021/3/TC/HY/UR/13813473/03-500x500.jpg"
    ],
    shortDescription: "Adorable baby romper for custom baby gifts and announcements.",
    description: "Create adorable custom baby gifts with our sublimation baby rompers. Perfect for birth announcements, baby showers, and personalized gifts. Soft poly-cotton blend is gentle on baby skin.",
    specs: [
      { label: "Fabric", value: "Poly-Cotton blend" },
      { label: "Sizes", value: "0-3m, 3-6m, 6-12m, 12-18m" },
      { label: "Closure", value: "Snap buttons at bottom" },
      { label: "Colors", value: "White, Pink, Blue, Red" },
      { label: "Print", value: "Front panel sublimation" },
      { label: "Delivery", value: "5-7 business days" }
    ],
    features: [
      "Baby-soft fabric",
      "Easy diaper change snaps",
      "Customizable front panel",
      "Multiple size options",
      "Popular gift item"
    ],
    category: "Apparel",
    categorySlug: "apparel",
    inStock: true
  }
];

// Gift Sets Products
export const giftSetsProducts: Product[] = [
  {
    id: "gs-001",
    name: "Executive Combo Gift Set",
    slug: "executive-combo-gift-set",
    price: 1499,
    priceUnit: "set",
    minOrderQty: 5,
    images: [
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&q=80",
      "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=600&q=80"
    ],
    shortDescription: "Premium 3-piece set with diary, pen, and card holder in elegant box.",
    description: "Impress clients and partners with this sophisticated executive gift set. Includes a premium leather-bound diary, metal body pen, and business card holder - all in a beautiful gift box with your branding.",
    specs: [
      { label: "Contents", value: "Diary, Pen, Card Holder" },
      { label: "Diary", value: "A5 PU Leather, 200 pages" },
      { label: "Pen", value: "Metal body, twist mechanism" },
      { label: "Card Holder", value: "Stainless steel, 15 card capacity" },
      { label: "Box", value: "Rigid box with magnetic closure" },
      { label: "Delivery", value: "5-7 business days" }
    ],
    features: [
      "Premium PU leather diary",
      "Executive metal pen",
      "Sleek business card holder",
      "Elegant gift box packaging",
      "Ideal for client gifting"
    ],
    category: "Gift Sets",
    categorySlug: "gift-sets",
    inStock: true,
    isFeatured: true
  },
  {
    id: "gs-002",
    name: "Drinkware Duo Set",
    slug: "drinkware-duo-set",
    price: 799,
    priceUnit: "set",
    minOrderQty: 10,
    images: [
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&q=80",
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&q=80"
    ],
    shortDescription: "Matching mug and bottle combo - perfect everyday use set.",
    description: "A practical gift set featuring a matching ceramic mug and stainless steel bottle. Both items feature coordinated branding for a cohesive look. Great for employee appreciation and client gifts.",
    specs: [
      { label: "Contents", value: "Ceramic Mug + Steel Bottle" },
      { label: "Mug", value: "11oz ceramic, sublimation" },
      { label: "Bottle", value: "500ml stainless steel" },
      { label: "Print", value: "Matching design on both" },
      { label: "Box", value: "Kraft gift box" },
      { label: "Delivery", value: "5-7 business days" }
    ],
    features: [
      "Coordinated design pair",
      "Practical daily use items",
      "Quality drinkware",
      "Gift-ready packaging",
      "Popular choice for all occasions"
    ],
    category: "Gift Sets",
    categorySlug: "gift-sets",
    inStock: true
  },
  {
    id: "gs-003",
    name: "Diwali Special Hamper",
    slug: "diwali-special-hamper",
    price: 2499,
    priceUnit: "set",
    minOrderQty: 5,
    images: [
      "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=600&q=80",
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&q=80"
    ],
    shortDescription: "Festive Diwali gift hamper with sweets, dry fruits, and branded items.",
    description: "Celebrate the festival of lights with this premium Diwali hamper. Includes traditional dry fruits, premium chocolates, a decorative diya, and your branded merchandise. Packed in a beautiful festive box.",
    specs: [
      { label: "Contents", value: "Dry Fruits, Chocolates, Diya, Branded Item" },
      { label: "Dry Fruits", value: "Almonds, Cashews, Raisins (300g)" },
      { label: "Chocolates", value: "Premium assorted (200g)" },
      { label: "Diya", value: "Decorative brass diya" },
      { label: "Branded Item", value: "Choice of mug/bottle/diary" },
      { label: "Delivery", value: "3-5 business days (seasonal)" }
    ],
    features: [
      "Premium dry fruits assortment",
      "Quality chocolates",
      "Traditional decorative diya",
      "Customizable branded item",
      "Festive packaging with ribbon"
    ],
    category: "Gift Sets",
    categorySlug: "gift-sets",
    inStock: true,
    isNew: true
  },
  {
    id: "gs-004",
    name: "Tech Essentials Gift Set",
    slug: "tech-essentials-gift-set",
    price: 1299,
    priceUnit: "set",
    minOrderQty: 10,
    images: [
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&q=80",
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&q=80"
    ],
    shortDescription: "Modern tech gift set with useful gadgets and accessories.",
    description: "Perfect for tech-savvy teams and clients. This set includes a wireless charging pad, USB hub, cable organizer, and branded mousepad. All items come in a sleek tech-themed gift box.",
    specs: [
      { label: "Contents", value: "Charger, USB Hub, Organizer, Mousepad" },
      { label: "Charger", value: "10W wireless Qi charger" },
      { label: "USB Hub", value: "4-port USB 3.0" },
      { label: "Mousepad", value: "Large with wrist rest" },
      { label: "Branding", value: "Laser engraving + printing" },
      { label: "Delivery", value: "7-10 business days" }
    ],
    features: [
      "Useful tech gadgets",
      "Modern design aesthetic",
      "Mix of print + engraving",
      "Tech-forward gift box",
      "Great for IT teams"
    ],
    category: "Gift Sets",
    categorySlug: "gift-sets",
    inStock: true
  },
  {
    id: "gs-005",
    name: "Wellness & Self-Care Set",
    slug: "wellness-self-care-set",
    price: 1099,
    priceUnit: "set",
    minOrderQty: 10,
    images: [
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80",
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&q=80"
    ],
    shortDescription: "Thoughtful wellness gift set promoting health and relaxation.",
    description: "Show you care about wellbeing with this wellness-themed gift set. Includes an aromatherapy candle, green tea set, stress ball, and wellness journal. Perfect for employee appreciation programs.",
    specs: [
      { label: "Contents", value: "Candle, Tea Set, Stress Ball, Journal" },
      { label: "Candle", value: "Soy wax, lavender scent, 150g" },
      { label: "Tea", value: "Premium green tea sachets (10 pcs)" },
      { label: "Journal", value: "A6 gratitude/wellness journal" },
      { label: "Box", value: "Eco-friendly kraft box" },
      { label: "Delivery", value: "5-7 business days" }
    ],
    features: [
      "Promotes relaxation",
      "Premium aromatherapy candle",
      "Quality tea selection",
      "Branded stress ball",
      "Thoughtful packaging"
    ],
    category: "Gift Sets",
    categorySlug: "gift-sets",
    inStock: true
  }
];

// Export all products by category
export const allGiftingProducts = {
  "employee-engagement-kits": employeeEngagementProducts,
  "welcome-kits": welcomeKitsProducts,
  "sublimation-mugs": sublimationMugsProducts,
  "drinkware": drinkwareProducts,
  "apparel": apparelProducts,
  "gift-sets": giftSetsProducts
};

// Get products by category slug
export const getProductsByCategory = (categorySlug: string): Product[] => {
  return allGiftingProducts[categorySlug as keyof typeof allGiftingProducts] || [];
};

// Get product by slug
export const getProductBySlug = (categorySlug: string, productSlug: string): Product | undefined => {
  const products = getProductsByCategory(categorySlug);
  return products.find(p => p.slug === productSlug);
};

// Get category by slug
export const getCategoryBySlug = (slug: string): Category | undefined => {
  return giftingCategories.find(c => c.slug === slug);
};

export default allGiftingProducts;