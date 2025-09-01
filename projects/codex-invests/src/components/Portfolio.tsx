import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

export const Portfolio = () => {
  const portfolioCompanies = [
    {
      id: 1,
      name: "NexaCore AI",
      description: "Enterprise-grade artificial intelligence solutions for predictive analytics and process automation.",
      category: "Artificial Intelligence",
      stage: "Series B",
      amount: "$22M",
      year: 2023,
      logo: "bg-indigo-600"
    },
    {
      id: 2,
      name: "QuantumLeap",
      description: "Quantum computing platform making advanced computation accessible to businesses of all sizes.",
      category: "Quantum Computing",
      stage: "Series A",
      amount: "$14M",
      year: 2023,
      logo: "bg-blue-600"
    },
    {
      id: 3,
      name: "BlockForge",
      description: "Next-generation blockchain infrastructure enabling secure, scalable decentralized applications.",
      category: "Blockchain",
      stage: "Series A",
      amount: "$18M",
      year: 2022,
      logo: "bg-emerald-600"
    },
    {
      id: 4,
      name: "MediSync",
      description: "Healthcare platform leveraging AI to improve diagnostics and patient outcomes.",
      category: "HealthTech",
      stage: "Series B",
      amount: "$35M",
      year: 2022,
      logo: "bg-rose-600"
    },
    {
      id: 5,
      name: "EcoSphere",
      description: "Sustainable technology solutions for businesses committed to reducing their carbon footprint.",
      category: "CleanTech",
      stage: "Seed",
      amount: "$7M",
      year: 2023,
      logo: "bg-green-600"
    },
    {
      id: 6,
      name: "CyberShield",
      description: "Advanced cybersecurity platform protecting enterprises against emerging digital threats.",
      category: "Cybersecurity",
      stage: "Series A",
      amount: "$12M",
      year: 2022,
      logo: "bg-amber-600"
    }
  ];

  return (
    <div id="portfolio" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400">
            Our Portfolio
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Investing in Tomorrow's Technology Leaders
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We partner with exceptional founders building transformative companies across various technology sectors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioCompanies.map((company, index) => (
            <motion.div
              key={company.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-md flex items-center justify-center text-white ${company.logo}`}>
                      {company.name.charAt(0)}
                    </div>
                    <Badge variant="outline" className="text-xs font-medium">
                      {company.stage}
                    </Badge>
                  </div>
                  <CardTitle className="mt-4 text-xl">{company.name}</CardTitle>
                  <CardDescription className="text-sm text-gray-500 dark:text-gray-400">
                    {company.category} • Invested {company.year}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-600 dark:text-gray-300">{company.description}</p>
                </CardContent>
                <CardFooter className="pt-3 border-t border-gray-100 dark:border-gray-800 flex justify-between">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Investment</p>
                    <p className="font-medium">{company.amount}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900 transition-colors">
                    <ArrowUpRight className="w-4 h-4 text-gray-600 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" />
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            Interested in seeing more of our investments?
          </p>
          <a 
            href="#" 
            className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-700 dark:hover:text-indigo-300"
          >
            View our complete portfolio
            <ArrowUpRight className="ml-2 w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};