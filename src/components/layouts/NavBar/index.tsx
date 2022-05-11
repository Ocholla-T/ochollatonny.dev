/* Dependencies */
import { useEffect, useState } from 'react'
import { useTransition, animated, config } from 'react-spring'
import { gsap } from 'gsap'

/* Components */
import Button from '@components/Button'

/* Images */
import logo from '@images/logo.svg'
import Resume from '@images/Ocholla Tonny Resume.pdf'

/* Styling */
import './styles.scss'

interface Props {
  getIsMobileMenuOpenState: Function
}

function Navbar({ getIsMobileMenuOpenState }: Props): JSX.Element {
  const [isClicked, setIsClicked] = useState<boolean>(false)

  const transition = useTransition(isClicked, {
    config: config.gentle,
    from: { transform: 'translate3d(+100%, 0px, 0px)' },
    enter: { transform: 'translate3d(0%, 0px, 0px)' },
    leave: { transform: 'translate3d(+100%, 0px, 0px)' },
  })

  const toggleMenu = (): void => {
    setIsClicked((previousClickedState) => {
      return !previousClickedState
    })
  }

  useEffect(() => {
    getIsMobileMenuOpenState(isClicked)
  }, [isClicked])

  return (
    <header ref="header">
      <nav className="nav flex flex-ai-c flex-jc-sb">
        <img className="nav__logo" src={logo} alt="logo" />
        <div className="nav__links flex flex-ai-c hide-for-mobile">
          <ol className="flex">
            <li>
              <a href="#projects">
                <span>01.</span>Projects
              </a>
            </li>
            <li>
              <a href="#contact">
                <span>02.</span>Contact
              </a>
            </li>
          </ol>
          <Button buttonLink={Resume}>Say Hello!</Button>
        </div>

        {/* mobile and tablet screen markup */}

        <div
          className={`nav__menu hide-for-desktop ${isClicked && 'nav__menu-rotate'}`}
          onClick={toggleMenu}
        />
        {transition(
          (style, menu) =>
            menu && (
              <animated.aside
                style={style}
                className={`nav__menu__links-mobile flex flex-ai-c flex-jc-c hide-for-desktop`}
              >
                <ol className="flex">
                  <li>
                    <a href="#projects">
                      <span>01.</span>
                      <br />
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href="#contact">
                      <span>02.</span>
                      <br />
                      Contact
                    </a>
                  </li>
                </ol>
                <Button buttonLink={Resume}>Resume</Button>
              </animated.aside>
            ),
        )}
      </nav>
    </header>
  )
}

export default Navbar
