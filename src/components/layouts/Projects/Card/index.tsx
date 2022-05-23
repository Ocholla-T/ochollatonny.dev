/* Dependencies */
import { forwardRef, ForwardedRef, ReactNode, MutableRefObject } from 'react'
import { gsap } from 'gsap'

/* Images */
import { ReactComponent as OpenLink } from '@images/open-outline.svg'
import { ReactComponent as GithubIcon } from '@images/logo-github.svg'

/* Styling */
import './styles.scss'

type Props = {
  children: ReactNode
  project: {
    githubLink: string
    projectDescription: string
    projectLink: string
    projectTitle: string
    techUsed: string[]
  }
}

const Card = forwardRef(
  ({ children, project }: Props, forwardedRef: ForwardedRef<HTMLElement | null>): JSX.Element => {
    const goToProject = (): void => {
      window.open(`${project.projectLink}`, '_blank')
    }

    const scaleCard = (): void => {
      gsap.to((forwardedRef as MutableRefObject<HTMLElement>)?.current, {
        scale: 1.05,
        duration: 0.3,
        ease: 'linear.easeInOut',
      })
    }

    const descaleCard = (): void => {
      gsap.to((forwardedRef as MutableRefObject<HTMLElement>)?.current, {
        scale: 1,
        duration: 0.3,
        ease: 'linear.easeInOut',
      })
    }

    return (
      <article
        ref={forwardedRef}
        className="card flex flex-jc-sb "
        onClick={goToProject}
        onMouseEnter={scaleCard}
        onMouseLeave={descaleCard}
      >
        <div className="card__text">
          <p className="card__text--tech"> {project.techUsed.join(' ')}</p>

          <h2 className="card__text--title">{project.projectTitle}</h2>
          <p className="card__text--description">{project.projectDescription}</p>
          <div className="card__links flex">
            <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
              <OpenLink className="card__links--icon card__links--icon-open" />
            </a>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <GithubIcon className="card__links--icon card__links--icon-github" />
            </a>
          </div>
        </div>
        {children}
      </article>
    )
  },
)

export default Card
