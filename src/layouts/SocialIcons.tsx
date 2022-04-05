import '../styles/layouts/_social-icons.scss';
import { ReactComponent as LinkedInIcon } from '../images/logo-linkedin.svg';
import { ReactComponent as GithubIcon } from '../images/logo-github.svg';

function SocialIcons() {
  return (
    <aside className="social container flex flex-fd-c flex-ai-c hide-for-mobile">
      <a href="https://github.com/Ocholla-T" target="_blank" rel="noopener noreferrer">
        <GithubIcon className="social__icon" />
      </a>
      <a href="https://www.linkedin.com/in/ochollatonny" target="_blank" rel="noopener noreferrer">
        <LinkedInIcon className="social__icon" />
      </a>
      <div className="social__line" />
    </aside>
  );
}

export default SocialIcons;
