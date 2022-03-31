import Navbar from '../layouts/Navbar';
import '../styles/pages/_home.scss';
import ArrowIcon from '../images/arrow-outline.svg';
import ScrollIcon from '../images/arrow-down-outline.svg';
import SocialIcons from '../layouts/SocialIcons';
import Resume from '../images/Ocholla Tonny Resume.pdf';
import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';

function Home(): JSX.Element {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const getIsMobileMenuOpenState: Function = (stateOfMobileMenu: boolean): void => {
    setIsMobileMenuOpen(stateOfMobileMenu);
  };

  return (
    <main className="flex flex-fd-c ">
      <Navbar getIsMobileMenuOpenState={getIsMobileMenuOpenState} />
      <section className={`hero flex flex-fd-c ${isMobileMenuOpen && 'blur'} `}>
        <h4>Hi there &#128075;, I'm</h4>
        <h1>Ocholla Tonny.</h1>
        <p>
          <span>Frontend web developer</span> specializing in delivering digital experiences for the
          web.
        </p>
        <p>
          I'm always focused on continuous growth when learning & creating accessible, user-centred
          products.
        </p>
        <a
          href={Resume}
          className="hero__button button flex flex-ai-c flex-jc-c"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
          <img className="hero__button__icon " src={ArrowIcon} alt="next" />
        </a>
      </section>
      <SocialIcons />
      <img className="scroll-icon hide-for-mobile" src={ScrollIcon} alt="scroll" />
      <ProjectCard />
    </main>
  );
}

export default Home;
