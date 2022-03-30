import '../styles/layouts/_social-icons.scss';
import linkedInIcon from '../images/logo-linkedin.svg';
import githubIcon from '../images/logo-github.svg';

function SocialIcons() {
  return (
    <aside className="social container flex flex-fd-c flex-ai-c hide-for-mobile">
      <a href="https://github.com/Ocholla-T" target="_blank" rel="noopener noreferrer">
        <img className="social__icon" src={githubIcon} alt="github" />
      </a>
      <a href="https://www.linkedin.com/in/ochollatonny" target="_blank" rel="noopener noreferrer">
        <img className="social__icon" src={linkedInIcon} alt="linkedIn" />
      </a>
      <div className="social__line" />
    </aside>
  );
}

export default SocialIcons;
