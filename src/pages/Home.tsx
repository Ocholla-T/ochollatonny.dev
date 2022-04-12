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
      <ProjectCard
        techUsed={['Vuex', 'VueJS']}
        projectTitle="Country Info"
        projectLink="https://countryinfo-ochollat.netlify.app/"
        projectDescription="Frontend Mentor challenge that integrates with the REST Countries V2 API to pull data
              and display it like in the provided designs"
      />
    </main>
  );
}

export default Home;
