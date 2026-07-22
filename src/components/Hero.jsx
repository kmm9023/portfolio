import "../styles/hero.css";
import headshot from "../assets/profile/headshot.JPG";

function Hero() {
  const resumeUrl =
    `${import.meta.env.BASE_URL}documents/Final%20resume.pdf`;

  return (
    <section className="hero">
      <div className="hero-text">
        <p className="intro">
          Hi, I'm
        </p>

        <h1>
          KHIA
          <br />
          MCCLEERY
        </h1>

        <h2>
          Digital Multimedia Designer
        </h2>

        <p className="description">
          I create thoughtful digital experiences through
          user research, interface design, branding,
          and front-end development.
        </p>

        <a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hero-button"
        >
          View My Resume
        </a>
      </div>

      <div className="hero-image">
        <img
          src={headshot}
          alt="Portrait of Khia McCleery"
        />
      </div>
    </section>
  );
}

export default Hero;