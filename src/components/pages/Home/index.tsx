/* Dependencies */
import { useState } from 'react'

/* Components */
import Contacts from '@layouts/Contacts'
import Footer from '@layouts/Footer'
import HeroSection from '@layouts/HeroSection'
import Navbar from '@layouts/NavBar'
import Projects from '@layouts/Projects'
import SocialIcons from '@layouts/SocialIcons'

/* Styling */
import './styles.scss'

function Home(): JSX.Element {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)

  const getIsMobileMenuOpenState: Function = (stateOfMobileMenu: boolean): void => {
    setIsMobileMenuOpen(stateOfMobileMenu)
  }

  return (
    <main className="flex flex-fd-c ">
      <Navbar getIsMobileMenuOpenState={getIsMobileMenuOpenState} />
      <HeroSection isMobileMenuOpen={isMobileMenuOpen} />
      <SocialIcons />
      <Projects isMobileMenuOpen={isMobileMenuOpen} />
      <Contacts />
      <Footer />
    </main>
  )
}

export default Home
