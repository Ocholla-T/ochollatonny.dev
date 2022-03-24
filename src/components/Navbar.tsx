import logo from '../images/logo.svg';
import '../styles/components/_navbar.scss';

function Navbar() {
  return (
    <header>
      <nav className="nav">
        <img className="nav__logo" src={logo} alt="logo" />
        <div className="nav__links">
          <ol>
            <li>
              <span>01.</span>about
            </li>
            <li>
              <span>02.</span>projects
            </li>
            <li>
              <span>03.</span>contact
            </li>
          </ol>
          <a className="nav__links__button"> Resume</a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
