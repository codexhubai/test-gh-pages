import { motion } from "framer-motion";
import Navbar from "@/components/agency/Navbar";
import Hero from "@/components/agency/Hero";
import Services from "@/components/agency/Services";
import About from "@/components/agency/About";
import Portfolio from "@/components/agency/Portfolio";
import Testimonials from "@/components/agency/Testimonials";
import Team from "@/components/agency/Team";
import Contact from "@/components/agency/Contact";
import Footer from "@/components/agency/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Testimonials />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;