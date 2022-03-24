import { useRef, useState } from 'react';
import logo from '../images/logo.svg';
import '../styles/components/_navbar.scss';

function Navbar() {
  const [isShown, setIsShown] = useState(false);

  function toggleMenu() {
    setIsShown((previousShown) => !previousShown);
  }

  return (
    <header>
      <nav className="nav flex flex-ai-c flex-jc-sb">
        <img className="nav__logo" src={logo} alt="logo" />
        <div className="nav__links flex flex-ai-c hide-for-mobile">
          <ol className="flex">
            <li>
              <a href="">
                <span>01.</span>About
              </a>
            </li>
            <li>
              <a href="">
                <span>02.</span>Projects
              </a>
            </li>
            <li>
              <a href="">
                <span>03.</span>Contact
              </a>
            </li>
          </ol>
          <a className="nav__links__button"> Resume</a>
        </div>

        {/* mobile and tablet screen markup */}

        <div className="nav__menu hide-for-desktop" onClick={toggleMenu} />
        {isShown && (
          <aside className="nav__mobileLinks flex flex-ai-c flex-jc-c hide-for-desktop">
            <ol className="flex">
              <li>
                <a href="">
                  <span>01.</span>
                  <br />
                  About
                </a>
              </li>
              <li>
                <a href="">
                  <span>02.</span>
                  <br />
                  Projects
                </a>
              </li>
              <li>
                <a href="">
                  <span>03.</span>
                  <br />
                  Contact
                </a>
              </li>
            </ol>
            <a className="nav__mobileLinks__button"> Resume</a>
          </aside>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
