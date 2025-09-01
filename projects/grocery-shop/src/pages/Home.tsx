import RootLayout from "../components/layout/RootLayout";
import HeroSection from "../components/home/HeroSection";
import FeaturesSection from "../components/home/FeaturesSection";
import ProductsSection from "../components/home/ProductsSection";
import CTASection from "../components/home/CTASection";
import TestimonialsSection from "../components/home/TestimonialsSection";

const Home = () => {
  return (
    <RootLayout>
      <HeroSection />
      <FeaturesSection />
      <ProductsSection />
      <TestimonialsSection />
      <CTASection />
    </RootLayout>
  );
};

export default Home;