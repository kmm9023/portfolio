import { Link } from "react-router-dom";
import "../styles/featuredWork.css";

import seoulLogo from "../assets/seoul/logo.png";
import peacefulPlaceImage from "../assets/peaceful-place/final image.png";

function FeaturedWork() {
  return (
    <section id="work">
      <h2>Featured Projects</h2>

      <p className="section-description">
        Selected work in UX/UI design, branding, and digital experiences.
      </p>

      {/* Project 1 */}
      <div className="project">
        <div className="project-image seoul-project-image">
          <img src={seoulLogo} alt="Seoul brand identity logo" />
        </div>

        <div className="project-content">
          <span className="project-number">01</span>

          <h3>Seoul</h3>

          <p className="project-type">Brand Identity</p>

          <p>
            A modern visual identity inspired by the culture, architecture,
            and energy of Seoul, combining typography, color, and branding
            into a cohesive design system.
          </p>

          <Link to="/seoul">View Project →</Link>
        </div>
      </div>

      {/* Project 2 */}
      <div className="project reverse">
        <div className="project-image peaceful-project-image">
          <img
            src={peacefulPlaceImage}
            alt="Peaceful Place UX/UI project interface"
          />
        </div>

        <div className="project-content">
          <span className="project-number">02</span>

          <h3>Peaceful Place</h3>

          <p className="project-type">UX/UI Case Study</p>

          <p>
            Designing a customizable digital environment that helps users
            focus, relax, and recharge through calming visuals, ambient
            sounds, and personalization.
          </p>

          <Link to="/peaceful-place">View Project →</Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedWork;