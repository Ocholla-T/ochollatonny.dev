/*Dependencies */
import projects from './projects';

/* Components*/
import Card from './Card';

import { ReactComponent as FlagIcon } from '@images/flag-outline.svg';

/* Styles*/
import './styles.scss';
import { ReactNode } from 'react';

interface Projects {
  projectTitle: string;
  projectLink: string;
  projectDescription: string;
  techUsed: string[];
  imageSource: string;
}

function Projects() {
  return (
    <section id="projects" className="projects container flex flex-ai-c">
      <h1 className="projects__title">Projects</h1>
      <div>
        {projects.map(
          (
            { projectTitle, projectLink, projectDescription, techUsed, imageSource }: Projects,
            index: number,
          ) => (
            <Card
              key={index}
              projectTitle={projectTitle}
              projectLink={projectLink}
              projectDescription={projectDescription}
              techUsed={techUsed}
            >
              <img src={imageSource} className="card__icon" alt="" />
            </Card>
          ),
        )}
      </div>
    </section>
  );
}

export default Projects;
