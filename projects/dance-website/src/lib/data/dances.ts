// Sample data for dances
export interface Dance {
  id: string;
  name: string;
  origin: string;
  description: string;
  history: string;
  imageUrl?: string;
  videoUrl?: string;
  tags: string[];
}

export const sampleDances: Dance[] = [
  {
    id: "ballet",
    name: "Ballet",
    origin: "Italy",
    description: "A classical dance form characterized by precise and graceful movements.",
    history: "Ballet originated in the Italian Renaissance courts of the 15th century and later developed into a concert dance form in France and Russia. It has since become a worldwide art form performed in dedicated academic dance schools around the globe.",
    imageUrl: "https://i.imgur.com/jFWQEEP.jpg",
    tags: ["classical", "western", "performance"]
  },
  {
    id: "salsa",
    name: "Salsa",
    origin: "Cuba",
    description: "A lively and energetic partner dance with Caribbean influences.",
    history: "Salsa evolved from earlier Cuban dance forms such as Son, Cha Cha Cha, Mambo, and others, which were influenced by African and European dance traditions. It became popular in New York City among Puerto Rican and Cuban immigrants in the 1970s.",
    imageUrl: "https://i.imgur.com/hsjVVhP.jpg",
    tags: ["latin", "partner", "social"]
  },
  {
    id: "bharatanatyam",
    name: "Bharatanatyam",
    origin: "India",
    description: "One of India's oldest classical dance forms originating from Tamil Nadu.",
    history: "Bharatanatyam traces its origins to the ancient text of Natya Shastra, written by the ancient scholar Bharata Muni. The dance form was traditionally performed in Hindu temples by Devadasis (temple dancers) and experienced a revival in the 20th century.",
    imageUrl: "https://i.imgur.com/mqs9JQg.jpg",
    tags: ["classical", "indian", "spiritual"]
  },
  {
    id: "hip-hop",
    name: "Hip Hop",
    origin: "United States",
    description: "A street dance style developed as part of hip hop culture.",
    history: "Hip hop dancing evolved as part of hip hop culture in the Bronx, New York, during the late 1970s. It includes various styles such as breaking, popping, and locking, and continues to evolve with new influences.",
    imageUrl: "https://i.imgur.com/6EGk7nV.jpg",
    tags: ["urban", "contemporary", "freestyle"]
  },
  {
    id: "flamenco",
    name: "Flamenco",
    origin: "Spain",
    description: "A soulful Spanish art form involving dance, singing, guitar playing, and handclaps.",
    history: "Flamenco emerged from the Andalusian region of Spain with influences from various cultures including Moorish, Jewish, and especially Romani cultures. It became formalized as an art form in the 18th century.",
    imageUrl: "https://i.imgur.com/5Z1Wx8G.jpg",
    tags: ["spanish", "passionate", "traditional"]
  }
];

// In-memory database simulation
let dances: Dance[] = [...sampleDances];

// Helper functions for CRUD operations
export const getAllDances = () => dances;

export const getDanceById = (id: string) => 
  dances.find(dance => dance.id === id);

export const addDance = (dance: Omit<Dance, "id">) => {
  const id = dance.name
    .toLowerCase()
    .replace(/[^\w\s]/gi, '')
    .replace(/\s+/g, '-');
    
  const newDance = { ...dance, id };
  dances.push(newDance as Dance);
  return newDance;
};

export const updateDance = (id: string, updates: Partial<Dance>) => {
  const index = dances.findIndex(dance => dance.id === id);
  if (index !== -1) {
    dances[index] = { ...dances[index], ...updates };
    return dances[index];
  }
  return null;
};

export const deleteDance = (id: string) => {
  const index = dances.findIndex(dance => dance.id === id);
  if (index !== -1) {
    const deleted = dances[index];
    dances = dances.filter(dance => dance.id !== id);
    return deleted;
  }
  return null;
};

export const searchDances = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  return dances.filter(dance => 
    dance.name.toLowerCase().includes(lowercaseQuery) || 
    dance.origin.toLowerCase().includes(lowercaseQuery) ||
    dance.description.toLowerCase().includes(lowercaseQuery) ||
    dance.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};