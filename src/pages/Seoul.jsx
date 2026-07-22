import { Link } from "react-router-dom";
import "../styles/seoul.css";

import logo from "../assets/seoul/logo.png";
import mockup1 from "../assets/seoul/mockup1.png";
import takeoutMockup from "../assets/seoul/takeoutmockup.png";
import menuFinal from "../assets/seoul/MenuFINAL.png";
import magnetPresentation from "../assets/seoul/magnetpresentation2.png";

function Seoul() {
  const brandGuideUrl = `${
    import.meta.env.BASE_URL
  }documents/Seoul%20Branding%20guide.pdf`;

  const capstoneDocumentUrl = `${
    import.meta.env.BASE_URL
  }documents/Seoul_Capstone_Document.pdf`;

  const instagramUrl =
    "https://www.instagram.com/seoulktown?igsh=MXdlY2JsNWF4b2RnOA%3D%3D&utm_source=qr";

  return (
    <main className="seoul-page">
      <Link to="/" className="seoul-back-link">
        ← Back to Portfolio
      </Link>

      <section className="seoul-hero">
        <div className="seoul-hero-content">
          <p className="seoul-eyebrow">
            Brand Identity · Undergraduate Capstone
          </p>

          <h1>Seoul</h1>

          <p className="seoul-intro">
            Seoul is a complete brand identity created for a Korean comfort
            food restaurant located in New York City’s Koreatown. The project
            develops a playful and approachable visual system across packaging,
            menus, merchandise, digital content, and restaurant materials.
          </p>

          <div className="seoul-button-group">
            <a
              href={brandGuideUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="seoul-button"
            >
              View Brand Guide
            </a>

            <a
              href={capstoneDocumentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="seoul-button seoul-button-secondary"
            >
              View Capstone Document
            </a>

            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="seoul-button seoul-button-secondary"
            >
              View Instagram
            </a>
          </div>
        </div>

        <div className="seoul-hero-image-wrapper">
          <img
            src={logo}
            alt="Seoul Korean comfort food restaurant logo"
            className="seoul-hero-logo"
          />
        </div>
      </section>

      <section className="seoul-details">
        <div className="seoul-detail-item">
          <h2>Role</h2>
          <p>
            Brand Designer
            <br />
            Graphic Designer
            <br />
            3D Designer
            <br />
            Front-End Developer
          </p>
        </div>

        <div className="seoul-detail-item">
          <h2>Timeline</h2>
          <p>
            Spring 2026
            <br />
            Undergraduate Capstone
          </p>
        </div>

        <div className="seoul-detail-item">
          <h2>Tools</h2>
          <p>
            Illustrator
            <br />
            Procreate
            <br />
            Blender
            <br />
            Canva
            <br />
            Figma
            <br />
            HTML and CSS
          </p>
        </div>

        <div className="seoul-detail-item">
          <h2>Deliverables</h2>
          <p>
            Brand Identity
            <br />
            Packaging
            <br />
            Menus
            <br />
            Merchandise
            <br />
            Brand Guide
          </p>
        </div>
      </section>

      <section className="seoul-section seoul-overview">
        <div className="seoul-section-heading">
          <p className="seoul-section-number">01</p>
          <h2>Project Overview</h2>
        </div>

        <div className="seoul-section-copy">
          <p>
            The goal of Seoul was to create a recognizable identity for a
            Korean comfort food restaurant that feels casual, energetic, and
            welcoming. The brand combines bold typography, bright yellow,
            black, and off-white colors, and playful smile-inspired graphics.
          </p>

          <p>
            The identity was designed to remain consistent across both physical
            and digital applications while still allowing each item to feel
            expressive and distinct.
          </p>
        </div>
      </section>

      <section className="seoul-full-image-section">
        <img
          src={mockup1}
          alt="Seoul restaurant branding and packaging mockup"
          className="seoul-wide-image"
        />
      </section>

      <section className="seoul-section">
        <div className="seoul-section-heading">
          <p className="seoul-section-number">02</p>
          <h2>Brand Challenge</h2>
        </div>

        <div className="seoul-section-copy">
          <p>
            The primary challenge was building a complete identity that could
            communicate Korean food and culture without relying on overly
            traditional or predictable visual elements.
          </p>

          <p>
            The final system needed to feel contemporary enough for a New York
            City audience while remaining friendly, memorable, and adaptable
            across restaurant materials.
          </p>
        </div>
      </section>

      <section className="seoul-image-grid">
        <figure className="seoul-image-card">
          <img
            src={takeoutMockup}
            alt="Seoul branded takeout packaging"
          />
          <figcaption>Takeout Packaging</figcaption>
        </figure>

        <figure className="seoul-image-card">
          <img
            src={menuFinal}
            alt="Seoul restaurant menu design"
          />
          <figcaption>Print Menu</figcaption>
        </figure>
      </section>

      <section className="seoul-section">
        <div className="seoul-section-heading">
          <p className="seoul-section-number">03</p>
          <h2>Final Identity</h2>
        </div>

        <div className="seoul-section-copy">
          <p>
            The final visual identity uses a bright yellow as its primary color,
            supported by black and a warm off-white. Rounded typography and
            smile-inspired details help give the restaurant a cheerful and
            approachable personality.
          </p>

          <p>
            The system was applied to packaging, printed menus, digital menus,
            promotional graphics, stickers, posters, and branded merchandise.
          </p>
        </div>
      </section>

      <section className="seoul-feature-section">
        <div className="seoul-feature-image">
          <img
            src={magnetPresentation}
            alt="Seoul food-inspired 3D magnet collection"
          />
        </div>

        <div className="seoul-feature-copy">
          <p className="seoul-section-number">04</p>
          <h2>3D Merchandise</h2>

          <p>
            I created a collection of food-inspired magnets in Blender to
            extend the restaurant identity into physical merchandise. The
            magnets use recognizable Korean comfort food imagery and maintain
            the same playful style as the rest of the brand.
          </p>
        </div>
      </section>

      <section className="seoul-section">
        <div className="seoul-section-heading">
          <p className="seoul-section-number">05</p>
          <h2>My Contributions</h2>
        </div>

        <div className="seoul-section-copy">
          <p>
            I developed the project from initial research and concept
            development through the final brand system. My work included logo
            design, typography and color selection, packaging, menu layouts,
            merchandise concepts, 3D modeling, digital content, and the final
            branding guide.
          </p>

          <p>
            I also created digital applications for the restaurant and
            documented the complete design process as part of my undergraduate
            capstone.
          </p>
        </div>
      </section>

      <section className="seoul-reflection">
        <p className="seoul-section-number">06</p>
        <h2>Reflection</h2>

        <p>
          This project gave me the opportunity to build one identity across
          many different formats and design disciplines. It strengthened my
          ability to maintain visual consistency while adapting a brand for
          print, digital, packaging, and three-dimensional applications.
        </p>

        <div className="seoul-button-group seoul-bottom-buttons">
          <a
            href={brandGuideUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="seoul-button"
          >
            View Brand Guide
          </a>

          <a
            href={capstoneDocumentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="seoul-button seoul-button-secondary"
          >
            View Capstone Document
          </a>

          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="seoul-button seoul-button-secondary"
          >
            View Instagram
          </a>
        </div>
      </section>
    </main>
  );
}

export default Seoul;