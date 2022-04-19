/** Styles */
import { ReactNode } from 'react';
import './styles.scss';

interface ButtonProps {
  buttonLink: string;
  children?: ReactNode;
  className?: string;
}

function Button({ buttonLink, className, children }: ButtonProps): JSX.Element {
  return (
    <a
      href={buttonLink}
      className={`button flex flex-ai-c flex-jc-c ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

export default Button;
