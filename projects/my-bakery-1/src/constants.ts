// Bakery website constants

export const bakeryName = "My Bakery";

export const navigationLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Process", href: "#process" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export const heroContent = {
  title: "Fresh Baked Goodness Every Day",
  subtitle: "Artisan breads, pastries, and cakes made with love and the finest ingredients",
  cta: "View Our Products",
  ctaLink: "#products"
};

export const aboutContent = {
  title: "About Our Bakery",
  description: "Founded in 2010, My Bakery has been serving the community with freshly baked goods made from scratch daily. Our passionate team of bakers combines traditional techniques with innovative flavors to create memorable treats that bring joy to every occasion.",
  mission: "Our mission is to create exceptional baked goods that bring people together and create moments of happiness through the simple pleasure of enjoying something delicious.",
  values: [
    "Quality ingredients sourced locally whenever possible",
    "Traditional baking methods passed down through generations",
    "Innovation and creativity in our recipes and products",
    "Sustainability in our practices and packaging"
  ]
};

export const productCategories = [
  {
    id: "breads",
    title: "Artisan Breads",
    description: "Handcrafted sourdough, baguettes, and specialty loaves baked fresh daily",
    image: "/breads.webp",
    featured: [
      { name: "Classic Sourdough", price: "$6.50" },
      { name: "Rustic Baguette", price: "$4.00" },
      { name: "Multigrain Loaf", price: "$7.50" },
      { name: "Olive Focaccia", price: "$8.00" }
    ]
  },
  {
    id: "pastries",
    title: "Delicate Pastries",
    description: "Flaky croissants, Danish pastries, and sweet treats to brighten your day",
    image: "/pastries.webp",
    featured: [
      { name: "Butter Croissant", price: "$3.75" },
      { name: "Pain au Chocolat", price: "$4.25" },
      { name: "Fruit Danish", price: "$4.50" },
      { name: "Cinnamon Roll", price: "$4.00" }
    ]
  },
  {
    id: "cakes",
    title: "Celebration Cakes",
    description: "Beautiful custom cakes for birthdays, weddings, and special moments",
    image: "/cakes.webp",
    featured: [
      { name: "Classic Vanilla (8\")", price: "$38.00" },
      { name: "Chocolate Ganache (8\")", price: "$42.00" },
      { name: "Red Velvet (8\")", price: "$40.00" },
      { name: "Carrot Cake (8\")", price: "$39.00" }
    ]
  }
];

export const processSteps = [
  {
    title: "Quality Ingredients",
    description: "We source the finest organic flour, European butter, and local produce to ensure exceptional flavor in every bite.",
    icon: "Wheat"
  },
  {
    title: "Traditional Methods",
    description: "Our bakers use time-honored techniques, allowing dough to develop naturally for the perfect texture and flavor.",
    icon: "Clock"
  },
  {
    title: "Handcrafted Care",
    description: "Each item is shaped and decorated by hand with attention to detail that makes our products special.",
    icon: "Hands"
  },
  {
    title: "Fresh Daily",
    description: "We bake throughout the day to ensure you always get the freshest possible products when you visit.",
    icon: "Sun"
  }
];

export const testimonials = [
  {
    quote: "The sourdough from My Bakery is absolutely the best I've ever tasted. The crust is perfect and the flavor is incredible!",
    author: "Sarah Johnson",
    location: "Local Customer"
  },
  {
    quote: "I ordered a birthday cake and it was not only beautiful but so delicious. Everyone at the party was asking where I got it.",
    author: "Michael Chen",
    location: "Repeat Customer"
  },
  {
    quote: "My morning isn't complete without stopping by for a fresh croissant. They're consistently amazing!",
    author: "Emma Rodriguez",
    location: "Daily Visitor"
  }
];

export const contactInfo = {
  address: "123 Main Street, Bakerytown, BT 12345",
  phone: "(555) 123-4567",
  email: "hello@mybakery.com",
  hours: [
    { days: "Monday - Friday", hours: "7:00 AM - 6:00 PM" },
    { days: "Saturday", hours: "7:00 AM - 4:00 PM" },
    { days: "Sunday", hours: "8:00 AM - 2:00 PM" }
  ]
};

export const socialLinks = [
  { name: "Instagram", url: "https://instagram.com/mybakery" },
  { name: "Facebook", url: "https://facebook.com/mybakery" },
  { name: "Twitter", url: "https://twitter.com/mybakery" }
];