/*Styles */
import Button from '@components/Button';
import './styles.scss';

function Contacts(): JSX.Element {
  return (
    <section id="contacts" className="container flex flex-jc-c">
      <div className="contacts flex flex-ai-c flex-jc-c">
        <h3 className="contacts__title">
          <span>03.</span> What's next?
        </h3>
        <h1 className="contacts__subtitle">Get in Touch</h1>
        <p className="contacts__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid repellat quia quisquam!
          Facere molestias quam beatae corporis eveniet,
        </p>
        <Button buttonLink="mailto:tonnyocholla8@gmail.com" className="contacts__button">
          Let's Chat
        </Button>
      </div>
    </section>
  );
}

export default Contacts;
