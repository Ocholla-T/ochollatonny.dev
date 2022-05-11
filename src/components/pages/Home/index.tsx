/* Dependencies */
import { useState, AnimationEventHandler } from 'react'

/* Components */
import Contacts from '@layouts/Contacts'
import Footer from '@layouts/Footer'
import HeroSection from '@layouts/HeroSection'
import Navbar from '@layouts/NavBar'
import Projects from '@layouts/Projects'
import SocialIcons from '@layouts/SocialIcons'

/* Styling */
import './styles.scss'

/** Images */
import { ReactComponent as Logo } from '@images/logo.svg'

export default function Home(): JSX.Element {
  const [preloader, setPreloader] = useState<boolean>(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)

  const getIsMobileMenuOpenState: Function = (stateOfMobileMenu: boolean): void => {
    setIsMobileMenuOpen(stateOfMobileMenu)
  }

  const loadHomePage: AnimationEventHandler<SVGSVGElement> = (): void => {
    setPreloader((previousPreloaderState) => !previousPreloaderState)
  }

  return (
    <>
      {preloader ? (
        <div className="preloader flex flex-ai-c flex-jc-c">
          <Logo className="preloader__logo" width={55} onAnimationEnd={loadHomePage} />
        </div>
      ) : (
        <main className="flex flex-fd-c ">
          <Navbar getIsMobileMenuOpenState={getIsMobileMenuOpenState} />
          <HeroSection isMobileMenuOpen={isMobileMenuOpen} />
          <SocialIcons />
          <Projects isMobileMenuOpen={isMobileMenuOpen} />
          <Contacts />
          <Footer />
        </main>
      )}
    </>
  )
}
