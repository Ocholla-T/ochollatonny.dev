import { ReactComponent as OpenLink } from '../images/open-outline.svg';

import { ReactComponent as ScrollIcon } from '../images/arrow-down-outline.svg';
import Resume from '../images/Ocholla Tonny Resume.pdf';
import '../styles/layouts/_hero-section.scss';

interface Props {
  isMobileMenuOpen: boolean;
}

function HeroSection({ isMobileMenuOpen }: Props): JSX.Element {
  return (
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
        <OpenLink className="hero__button__icon" />
      </a>
      <ScrollIcon className="scroll-icon hide-for-mobile" />
    </section>
  );
}

export default HeroSection;
