import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import ProjectsSection from '../components/home/ProjectsSection';
import ProcessSection from '../components/home/ProcessSection';
import TeamSection from '../components/home/TeamSection';
import ContactSection from '../components/home/ContactSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <ProcessSection />
      <TeamSection />
      <ContactSection />
    </div>
  );
}