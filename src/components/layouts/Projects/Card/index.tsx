/* Images */
import { ReactNode } from 'react';

/* Styling */
import './styles.scss';

interface Props {
  projectTitle: string;
  projectLink: string;
  projectDescription: string;
  techUsed: string[];
  children: ReactNode;
}

const Card = ({
  projectTitle,
  projectDescription,
  techUsed,
  projectLink,
  children,
}: Props): JSX.Element => {
  return (
    <a href={projectLink}>
      <article className="card flex flex-jc-sb">
        <div className="card__text">
          <p className="card__text--tech"> {techUsed.join(' ')}</p>

          <h2 className="card__text--title">{projectTitle}</h2>
          <p className="card__text--description">{projectDescription}</p>
        </div>
        {children}
      </article>
    </a>
  );
};

export default Card;
