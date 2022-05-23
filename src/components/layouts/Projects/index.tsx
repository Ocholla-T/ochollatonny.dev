/*Dependencies */
import { gsap } from 'gsap'
import useIntersectionObserver from '@hooks/useIntersectionObserver'
import projects from './projects'

/* Components*/
import Card from './Card'

/* Styles*/
import './styles.scss'
import { createRef, RefObject, useEffect, useState } from 'react'

interface Projects {
  githubLink: string
  image: string
  projectDescription: string
  projectLink: string
  projectTitle: string
  techUsed: string[]
}
interface ProjectsProps {
  isMobileMenuOpen: boolean
}

export default function Projects({ isMobileMenuOpen }: ProjectsProps): JSX.Element {
  const [cardRef, setCardRef] = useState<Array<RefObject<HTMLElement>>>([])

  /**
   * This sets a ref to each individual card(cardRef)
   * Adds it to an array of HTMLElement useState array
   * Is updated when the length of projects changes.(projects.length)
   */

  useEffect(() => {
    setCardRef((cardRef) =>
      new Array(projects.length)
        .fill(null)
        .map((_, index) => cardRef[index] || createRef<HTMLElement>()),
    )
  }, [projects.length])

  const entry = useIntersectionObserver(cardRef, { threshold: 0.25 })

  /*When the card intersects with the viewport the animation triggers */

  if (!!entry?.isIntersecting && window.matchMedia('(min-width: 600px)').matches) {
    gsap.to(entry.target, {
      opacity: 1,
      x: 0,
    })
  }

  return (
    <section id="projects" className={`projects container flex ${isMobileMenuOpen && 'blur'}`}>
      <h3 className="projects__subtitle">
        <span>02.</span> Let's see what I can do...
      </h3>
      <div className="flex flex-ai-c">
        <h1 className="projects__title hide-for-mobile">Projects</h1>
        <div>
          {projects.map((project: Projects, index: number) => (
            <Card ref={cardRef[index]} key={index} project={project}>
              <img
                src={project.image}
                alt="This is an image representing the project"
                className="card__icon hide-for-mobile"
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
