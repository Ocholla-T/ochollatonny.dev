/*Styles */
import Button from '@components/Button'
import './styles.scss'

function Contacts(): JSX.Element {
  return (
    <section id="contacts" className="container flex flex-jc-c">
      <div className="contacts flex flex-ai-c flex-jc-c">
        <h3 className="contacts__title">
          <span>03.</span> What's next?
        </h3>
        <h1 className="contacts__subtitle">Get in Touch</h1>
        <p className="contacts__description">
          Want to build a landing page for your business or personal products that can fit all
          screen sizes, feel free to jump into my inbox. Giving YOU one less thing to worry about!
        </p>
        <Button buttonLink="mailto:tonnyocholla8@gmail.com" className="contacts__button">
          Let's Chat
        </Button>
      </div>
    </section>
  )
}

export default Contacts
