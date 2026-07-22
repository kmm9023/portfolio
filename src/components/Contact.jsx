import "../styles/contact.css";

function Contact() {
  return (
    <section id="contact">
      <p className="contact-label">CONTACT</p>

      <h2>Let's create something together.</h2>

      <p className="contact-text">
        Whether you're looking to collaborate, have a project in mind, or
        just want to say hello, I'd love to hear from you.
      </p>

      <a
        href="mailto:mccleery02@gmail.com"
        className="contact-button"
      >
        Get In Touch
      </a>
    </section>
  );
}

export default Contact;