import Reveal from "./Reveal";

function Contact() {
  return (
    <section id="contact" className="contact">
      <Reveal>
        <p className="eyebrow">LET'S TALK</p>
        <h2>Contacts</h2>

        <div className="contact-links">
          <a href="mailto:mail@jameshollister.org">Email ↗</a>

          <a
            href="https://github.com/James-1701"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/jameshollister/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>
      </Reveal>
    </section>
  );
}

export default Contact;
