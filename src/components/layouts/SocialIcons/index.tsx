/*Images */
import { ReactComponent as MailIcon } from '@images/mail.svg'
import { ReactComponent as LinkedInIcon } from '@images/logo-linkedin.svg'
import { ReactComponent as GithubIcon } from '@images/logo-github.svg'

/*Styling */
import './styles.scss'

function SocialIcons() {
  return (
    <aside className="social container flex flex-fd-c flex-ai-c hide-for-mobile">
      <a href="https://github.com/Ocholla-T" target="_blank" rel="noopener noreferrer">
        <GithubIcon className="social__icon" />
      </a>
      <a href="https://www.linkedin.com/in/ochollatonny" target="_blank" rel="noopener noreferrer">
        <LinkedInIcon className="social__icon social__icon--linkedin" />
      </a>
      <a href="mailto:tonnyocholla8@gmail.com">
        <MailIcon className="social__icon" />
      </a>
      <div className="social__line" />
    </aside>
  )
}

export default SocialIcons
