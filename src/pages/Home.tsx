import Navbar from '../layouts/Navbar';
import '../styles/pages/_home.scss';
import SocialIcons from '../layouts/SocialIcons';
import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import HeroSection from '../layouts/HeroSection';

function Home(): JSX.Element {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const getIsMobileMenuOpenState: Function = (stateOfMobileMenu: boolean): void => {
    setIsMobileMenuOpen(stateOfMobileMenu);
  };
  return (
    <main className="flex flex-fd-c ">
      <Navbar getIsMobileMenuOpenState={getIsMobileMenuOpenState} />
      <HeroSection isMobileMenuOpen={isMobileMenuOpen} />
      <SocialIcons />
      <ProjectCard />
    </main>
  );
}

export default Home;
