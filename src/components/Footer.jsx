import "../styles/footer.css";

function Footer() {
  return (
    <footer id="footer">
      <p>© 2026 Khia McCleery. All rights reserved.</p>

      <div className="footer-links">
        <a
          href="https://github.com/kmm9023"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/khia-m-08165b2ab"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>

        <a href="mailto:mccleery02@gmail.com">
          Email
        </a>
      </div>
    </footer>
  );
}

export default Footer;