interface AboutProps {
  showAbout: boolean;
}

function About({ showAbout }: AboutProps) {
  return (
    <div className={`about ${showAbout ? "about-visible" : ""}`}>
      <div className="about-content">
        <br />
        <p className="intro">
          My computing experience started in high school when I learned Linux
          and started self-hosting on a Raspberry Pi. Since then, I have been
          learning and experimenting with various technologies and programming
          languages to develop my skill set.
        </p>
        <br />
        <p className="intro">
          Outside of hobby programming and coursework I am also a brother of the
          Phi Kappa Tau fraternity and a varsity rower at my university. I enjoy
          spending time with my friends, working out, going on adventures and
          learning new things.
        </p>
        <br />
        <p className="intro">
          My goals are to keep learning new things, challenging myself, making
          an impact and putting out work I am proud of.{" "}
          <em>It never gets easier, you just get better.</em>
        </p>
      </div>
    </div>
  );
}

export default About;
