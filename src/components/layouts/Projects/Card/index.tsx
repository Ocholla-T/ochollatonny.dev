/* Dependencies */
import { ReactNode } from 'react'

/* Images */
import { ReactComponent as OpenLink } from '@images/open-outline.svg'
import { ReactComponent as GithubIcon } from '@images/logo-github.svg'

/* Styling */
import './styles.scss'

interface Props {
  children: ReactNode
  project: {
    githubLink: string
    projectDescription: string
    projectLink: string
    projectTitle: string
    techUsed: string[]
  }
}

function Card({ children, project }: Props): JSX.Element {
  const goToProject = (): void => {
    window.open(`${project.projectLink}`, '_blank')
  }

  return (
    <article className="card flex flex-jc-sb" onClick={goToProject}>
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
}

export default Card
