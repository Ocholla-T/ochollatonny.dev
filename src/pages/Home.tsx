import Navbar from '../components/Navbar';
import '../styles/pages/_home.scss';
import downloadIcon from '../images/download.svg';

function Home(): JSX.Element {
  return (
    <main>
      <Navbar />
      <section className="hero">
        <h4>Hi there &#128075;, I'm</h4>
        <h1>Ocholla Tonny.</h1>
        <p>
          <span>Frontend web developer</span> specializing in delivering digital experiences for the
          web.
        </p>
        <p>
          I'm always focused on continuous growth when learning & creating accessible, user-centred
          products.
        </p>
        <a href="" className="hero__button button flex flex-ai-c flex-jc-c">
          <img className="hero__button__icon " src={downloadIcon} alt="download icon" />
          Resume
        </a>
      </section>
    </main>
  );
}

export default Home;
