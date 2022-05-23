/**Dependencies */
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

/* Images */
import { ReactComponent as OpenLink } from '@images/open-outline.svg'
import { ReactComponent as ScrollIcon } from '@images/arrow-down-outline.svg'
import Resume from '@images/Ocholla Tonny Resume.pdf'

/* Components */
import Button from '@components/Button'

/* Styling */
import './styles.scss'

interface HeroSectionProps {
  isMobileMenuOpen: boolean
}

function HeroSection({ isMobileMenuOpen }: HeroSectionProps): JSX.Element {
  const h1 = useRef<HTMLHeadingElement>(null)
  const h4 = useRef<HTMLHeadingElement>(null)
  const paragraphOne = useRef<HTMLParagraphElement>(null)
  const paragraphTwo = useRef<HTMLParagraphElement>(null)
  const heroButton = useRef<HTMLAnchorElement>(null)

  const tl = gsap.timeline({
    defaults: {
      ease: 'Power4.Out',
      duration: 1.5,
    },
  })

  useEffect(() => {
    if (window.matchMedia('(min-width: 600px)').matches) {
      tl.to([h1.current, h4.current, paragraphOne.current, paragraphTwo.current], {
        'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
        opacity: 1,
        y: 0,
      }).to(
        heroButton.current,
        {
          'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
          opacity: 1,
          y: 0,
        },
        '-=1.2',
      )
    }
  })

  return (
    <section className={`hero flex flex-fd-c ${isMobileMenuOpen && 'blur'} `}>
      <h4 ref={h4} className="hero__text">
        Hi there &#128075;, I'm
      </h4>
      <h1 ref={h1} className="hero__text">
        Ocholla Tonny.
      </h1>
      <p ref={paragraphOne} className="hero__text">
        <span>Frontend web developer</span> specializing in delivering digital experiences for the
        web.
      </p>
      <p ref={paragraphTwo} className="hero__text">
        I'm always focused on continuous growth when learning & creating accessible, user-centred
        products.
      </p>
      <Button ref={heroButton} buttonLink={Resume} className="hero__button">
        Resume
        <OpenLink className="hero__button__icon" />
      </Button>
      <ScrollIcon className="scroll-icon hide-for-mobile" />
    </section>
  )
}

export default HeroSection
