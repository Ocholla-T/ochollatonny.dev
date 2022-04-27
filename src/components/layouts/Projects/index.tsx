/*Dependencies */
import projects from './projects'

/* Components*/
import Card from './Card'

/* Styles*/
import './styles.scss'

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

function Projects({ isMobileMenuOpen }: ProjectsProps): JSX.Element {
  return (
    <section id="projects" className={`projects container flex ${isMobileMenuOpen && 'blur'}`}>
      <h3 className="projects__subtitle">
        <span>02.</span> Let's see what I can do...
      </h3>
      <div className="flex flex-ai-c">
        <h1 className="projects__title hide-for-mobile">Projects</h1>
        <div>
          {projects.map((project: Projects, index: number) => (
            <Card key={index} project={project}>
              <img
                src={project.image}
                alt="This is an image representing the project"
                className="card__icon"
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
