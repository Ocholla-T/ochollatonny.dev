/* Images */
import { ReactComponent as OpenLink } from '@images/open-outline.svg';
import { ReactComponent as ScrollIcon } from '@images/arrow-down-outline.svg';
import Resume from '@images/Ocholla Tonny Resume.pdf';

/* Components */
import Button from '@components/Button';

/* Styling */
import './styles.scss';

interface HeroSectionProps {
  isMobileMenuOpen: boolean;
}

function HeroSection({ isMobileMenuOpen }: HeroSectionProps): JSX.Element {
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
      <Button buttonLink={Resume} className="hero__button">
        Resume
        <OpenLink className="hero__button__icon" />
      </Button>
      <ScrollIcon className="scroll-icon hide-for-mobile" />
    </section>
  );
}

export default HeroSection;
