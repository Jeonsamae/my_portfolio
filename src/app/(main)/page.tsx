import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <main className="bg-gray-50 dark:bg-[#080508] min-h-screen overflow-x-hidden transition-colors duration-300">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ServicesSection />
      <ContactSection />
      <footer className="border-t border-gray-200 dark:border-white/5 py-8 text-center text-gray-400 dark:text-white/20 text-sm">
        <p>
          © {new Date().getFullYear()} Lissa Mae P. Degamo. Built with Next.js &amp; Tailwind CSS.
        </p>
      </footer>
    </main>
  );
}
