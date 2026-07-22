import { Link } from "react-router-dom";
import "../styles/project.css";

function PeacefulPlace() {
  return (
    <main className="project-page">
      <Link to="/" className="back-link">
        ← Back to Portfolio
      </Link>

      <section className="project-hero">
        <p className="project-label">UX / UI CASE STUDY</p>

        <h1>Peaceful Place</h1>

        <p className="project-description">
          Peaceful Place is a collaborative UX/UI project focused on creating a
          calming digital workspace where users can personalize their
          environment through relaxing visuals, ambient audio, and intuitive
          interactions. The goal was to design an experience that supports both
          productivity and well-being while keeping the interface simple,
          accessible, and enjoyable to use.
        </p>
      </section>

      <section className="content-section">
        <h2>Project Details</h2>

        <div className="project-details">
          <div className="detail">
            <h4>Role</h4>
            <p>UX/UI Designer</p>
            <p>Front-End Developer</p>
          </div>

          <div className="detail">
            <h4>Team</h4>
            <p>Collaborative Team Project</p>
          </div>

          <div className="detail">
            <h4>Timeline</h4>
            <p>University Semester Project</p>
          </div>

          <div className="detail">
            <h4>Tools</h4>
            <p>Figma</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h2>Overview</h2>

        <p>
          Peaceful Place was designed to combine productivity and relaxation
          into a single digital experience. Instead of relying on multiple
          applications for music, calming backgrounds, and workspace tools,
          users can personalize everything in one intuitive interface.
        </p>

        <p>
          The project progressed through user research, wireframing,
          prototyping, interface design, and front-end development. Every design
          decision focused on creating a calm, distraction-free environment that
          users could tailor to their own preferences.
        </p>
      </section>

      <section className="content-section">
        <h2>My Contributions</h2>

        <ul className="project-list">
          <li>Conducted UX research and brainstorming activities.</li>
          <li>Created wireframes and interactive prototypes in Figma.</li>
          <li>Designed user flows and interface layouts.</li>
          <li>Developed the front-end experience using HTML, CSS, and JavaScript.</li>
          <li>Collaborated with teammates throughout the design process.</li>
        </ul>
      </section>

      <section className="content-section">
        <h2>Reflection</h2>

        <p>
          This project strengthened my understanding of user-centered design and
          collaborative workflows. Through multiple rounds of iteration, I
          learned how research, prototyping, and user feedback contribute to
          creating more intuitive digital experiences while balancing aesthetics
          and functionality.
        </p>
      </section>

      <section className="content-section">
        <h2>Explore the Project</h2>

        <p>
          Explore the interactive Figma prototype or read the complete design
          documentation to learn more about the research, design decisions, and
          development process behind Peaceful Place.
        </p>

        <div className="project-links">
          <a
            href="https://www.figma.com/design/6o9q5fNofwLkUlwHrPXcQj/dmd-300-group-project?node-id=433-440&t=ailJBU0l6KjYbNbv-1"
            target="_blank"
            rel="noopener noreferrer"
            className="project-button"
          >
            View Interactive Prototype
          </a>

          <a
            href="https://docs.google.com/document/d/1sA-P-YSGjG5eUYkYlWIsSRgTjfUL11ijh8WCttwnJCs/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="project-button secondary"
          >
            View Design Process
          </a>
        </div>
      </section>
    </main>
  );
}

export default PeacefulPlace;