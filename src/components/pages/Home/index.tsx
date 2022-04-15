/* Dependencies */
import { useState } from 'react';

/* Components */
import Navbar from '@layouts/NavBar';
import SocialIcons from '@layouts/SocialIcons';
import HeroSection from '@layouts/HeroSection';
import Projects from '@layouts/Projects';

/* Styling */
import './styles.scss';

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
      <Projects />
    </main>
  );
}

export default Home;
