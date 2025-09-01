import { useEffect } from 'react';
import { 
  Navbar,
  Hero,
  Features,
  Services,
  Process,
  Team,
  Testimonials,
  ContactSection,
  CTA,
  Footer
} from '@/components/LandingPage';

const Home = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <Process />
      <Team />
      <Testimonials />
      <CTA />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;