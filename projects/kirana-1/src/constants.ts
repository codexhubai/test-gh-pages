// Mock data for DataSheet Connect

export const featuredDatasets = [
  {
    id: "ds001",
    title: "US Tech Startups 2023",
    description: "List of 500+ tech startups in the USA, including funding rounds and key personnel.",
    price: 49.99,
    category: "Technology",
    location: "USA",
    sampleData: [
      { company: "Quantum AI", founded: 2020, funding: "$12M", employees: 45 },
      { company: "DataFlow Systems", founded: 2021, funding: "$8M", employees: 32 },
      { company: "CloudNative Solutions", founded: 2019, funding: "$15M", employees: 78 },
      { company: "BlockSync", founded: 2022, funding: "$4M", employees: 18 },
      { company: "AeroEdge Computing", founded: 2018, funding: "$22M", employees: 103 }
    ],
    fullSize: { rows: 512, columns: 18 },
    author: "TechInsights Research",
    publishDate: "2023-11-15",
    updatedDate: "2024-06-10",
    downloads: 245
  },
  {
    id: "ds002",
    title: "Global E-commerce Trends 2024",
    description: "Comprehensive analysis of e-commerce performance across 30 countries with growth metrics and market share data.",
    price: 79.99,
    category: "E-commerce",
    location: "Global",
    sampleData: [
      { country: "USA", growth: "12%", market_size: "$875B", mobile_share: "67%" },
      { country: "China", growth: "18%", market_size: "$1.2T", mobile_share: "82%" },
      { country: "UK", growth: "9%", market_size: "$180B", mobile_share: "71%" },
      { country: "Germany", growth: "11%", market_size: "$140B", mobile_share: "63%" },
      { country: "India", growth: "28%", market_size: "$95B", mobile_share: "88%" }
    ],
    fullSize: { rows: 384, columns: 22 },
    author: "Market Analysis Partners",
    publishDate: "2024-01-22",
    updatedDate: "2024-07-05",
    downloads: 387
  },
  {
    id: "ds003",
    title: "Healthcare Industry Leaders 2024",
    description: "Detailed profiles of 200+ healthcare companies, including revenue, R&D spending, and key products.",
    price: 59.99,
    category: "Healthcare",
    location: "Global",
    sampleData: [
      { company: "MedTech Innovations", revenue: "$1.2B", r_and_d: "$240M", employees: 3500 },
      { company: "BioGenesis", revenue: "$890M", r_and_d: "$178M", employees: 2200 },
      { company: "HealthCore Systems", revenue: "$2.1B", r_and_d: "$315M", employees: 8700 },
      { company: "PharmaPlus", revenue: "$5.4B", r_and_d: "$1.1B", employees: 22000 },
      { company: "VitalCare", revenue: "$780M", r_and_d: "$124M", employees: 1900 }
    ],
    fullSize: { rows: 235, columns: 16 },
    author: "Healthcare Market Insights",
    publishDate: "2024-02-18",
    updatedDate: "2024-05-30",
    downloads: 156
  },
  {
    id: "ds004",
    title: "Renewable Energy Projects 2023-2024",
    description: "Database of 1,200+ renewable energy projects worldwide with investment details and capacity information.",
    price: 69.99,
    category: "Energy",
    location: "Global",
    sampleData: [
      { project: "SolarWinds Farm", country: "Spain", capacity: "450MW", investment: "$520M" },
      { project: "GreenWave Tidal", country: "UK", capacity: "120MW", investment: "$310M" },
      { project: "DesertSun Solar", country: "UAE", capacity: "1.2GW", investment: "$1.4B" },
      { project: "WindPower Atlantic", country: "Portugal", capacity: "380MW", investment: "$480M" },
      { project: "HydroNext", country: "Canada", capacity: "520MW", investment: "$680M" }
    ],
    fullSize: { rows: 1243, columns: 24 },
    author: "CleanEnergy Research Group",
    publishDate: "2023-12-05",
    updatedDate: "2024-06-28",
    downloads: 203
  },
  {
    id: "ds005",
    title: "Financial Services Competitive Analysis",
    description: "Detailed competitive analysis of the top 100 financial service providers with market share and growth metrics.",
    price: 89.99,
    category: "Finance",
    location: "Global",
    sampleData: [
      { company: "GlobalBank", market_share: "8.2%", growth: "4.5%", assets: "$2.1T" },
      { company: "InvestCorp", market_share: "5.7%", growth: "6.8%", assets: "$1.4T" },
      { company: "SecureFinance", market_share: "3.9%", growth: "9.2%", assets: "$980B" },
      { company: "WealthPartners", market_share: "2.8%", growth: "11.5%", assets: "$750B" },
      { company: "TrustCapital", market_share: "4.1%", growth: "5.3%", assets: "$1.1T" }
    ],
    fullSize: { rows: 128, columns: 20 },
    author: "Financial Market Analysis",
    publishDate: "2024-03-10",
    updatedDate: "2024-07-15",
    downloads: 312
  },
  {
    id: "ds006",
    title: "Retail Industry Consumer Trends",
    description: "Consumer behavior analysis across retail segments with demographic breakdowns and spending patterns.",
    price: 54.99,
    category: "Retail",
    location: "North America",
    sampleData: [
      { segment: "Apparel", growth: "7.2%", online_share: "62%", avg_spend: "$840" },
      { segment: "Electronics", growth: "12.8%", online_share: "78%", avg_spend: "$1240" },
      { segment: "Home Goods", growth: "9.5%", online_share: "54%", avg_spend: "$1850" },
      { segment: "Beauty", growth: "14.2%", online_share: "48%", avg_spend: "$620" },
      { segment: "Sports & Outdoor", growth: "8.7%", online_share: "51%", avg_spend: "$930" }
    ],
    fullSize: { rows: 320, columns: 28 },
    author: "Consumer Insights Research",
    publishDate: "2024-01-08",
    updatedDate: "2024-07-02",
    downloads: 178
  }
];

export const categories = [
  "All Categories",
  "Technology",
  "E-commerce",
  "Healthcare",
  "Energy",
  "Finance",
  "Retail",
  "Real Estate",
  "Marketing",
  "Education",
  "Transportation"
];

export const locations = [
  "All Locations",
  "Global",
  "North America",
  "USA",
  "Europe",
  "Asia",
  "Middle East",
  "Africa",
  "Australia",
  "Latin America"
];

export const priceRanges = [
  "All Prices",
  "Under $50",
  "$50 - $100",
  "$100 - $200",
  "Over $200"
];

export const recentSales = [
  {
    dataset: "US Tech Startups 2023",
    purchaser: "user_7842",
    date: "2024-07-25",
    price: "$49.99",
    status: "Completed"
  },
  {
    dataset: "Global E-commerce Trends 2024",
    purchaser: "user_5931",
    date: "2024-07-24",
    price: "$79.99",
    status: "Completed"
  },
  {
    dataset: "Healthcare Industry Leaders 2024",
    purchaser: "user_3215",
    date: "2024-07-23",
    price: "$59.99",
    status: "Completed"
  },
  {
    dataset: "Financial Services Competitive Analysis",
    purchaser: "user_6478",
    date: "2024-07-21",
    price: "$89.99",
    status: "Completed"
  },
  {
    dataset: "Retail Industry Consumer Trends",
    purchaser: "user_2190",
    date: "2024-07-19",
    price: "$54.99",
    status: "Completed"
  },
  {
    dataset: "Renewable Energy Projects 2023-2024",
    purchaser: "user_8346",
    date: "2024-07-18",
    price: "$69.99",
    status: "Processing"
  },
  {
    dataset: "US Tech Startups 2023",
    purchaser: "user_4127",
    date: "2024-07-17",
    price: "$49.99",
    status: "Completed"
  }
];

export const testimonials = [
  {
    quote: "DataSheet Connect transformed how we source market data. The previews are invaluable, and the purchase process is incredibly smooth!",
    author: "Sarah Chen",
    role: "Lead Data Analyst at InnovateCo",
    avatar: "https://storage.googleapis.com/fenado-ai-farm-public/generated/a1a3b90c-5754-47c0-9045-45abff015444.webp"
  },
  {
    quote: "Uploading my proprietary datasets was so easy. I've already made several sales, unlocking a new revenue stream for my business.",
    author: "Mark Johnson",
    role: "Founder of BusinessInsights Inc.",
    avatar: "https://storage.googleapis.com/fenado-ai-farm-public/generated/8dd7d7aa-36e8-443f-aa2c-ce9a05426956.webp"
  }
];