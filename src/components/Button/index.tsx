/** Styles */
import { Ref, forwardRef, ReactNode } from 'react'
import './styles.scss'

type ButtonProps = {
  buttonLink: string
  children?: ReactNode
  className?: string
}

const Button = forwardRef(
  (
    { buttonLink, className, children }: ButtonProps,
    buttonRef: Ref<HTMLAnchorElement>,
  ): JSX.Element => {
    return (
      <a
        ref={buttonRef}
        href={buttonLink}
        className={`button flex flex-ai-c flex-jc-c ${className}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    )
  },
)

export default Button
