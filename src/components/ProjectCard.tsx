import '../styles/components/_project-card.scss';
import { ReactComponent as FlagIcon } from '../images/flag-outline.svg';

interface Props {
  projectTitle: string;
  projectLink: string;
  projectDescription: string;
  techUsed: string[];
}

const ProjectCard = ({
  projectTitle,
  projectDescription,
  techUsed,
  projectLink,
}: Props): JSX.Element => {
  return (
    <section id="projects" className="projects container flex flex-ai-c">
      <h1 className="projects__title">Projects</h1>

      <a href={projectLink}>
        <article className="projects__card flex flex-jc-sb">
          <div className="projects__card__text">
            <p className="projects__card__text--tech"> {techUsed.join(' ')}</p>

            <h2 className="projects__card__text--title">{projectTitle}</h2>
            <p className="projects__card__text--description">{projectDescription}</p>
          </div>

          <FlagIcon className="projects__card__icon" />
        </article>
      </a>
    </section>
  );
};

export default ProjectCard;
