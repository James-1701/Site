import profilePhotoOptimized from "../assets/profile-optimized.webp";
import profilePhoto from "../assets/profile.jpeg";
import About from "./About";
import { useState } from "react";

interface HeroProps {
  showAbout: boolean;
  setShowAbout: (show: boolean) => void;
}

function Hero({ showAbout, setShowAbout }: HeroProps) {
  const [loaded, setLoaded] = useState(false);
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="eyebrow">
          COMPUTER SCIENCE · CYBERSECURITY · ENGINEERING
        </p>

        <div className="hero-main">
          <div className="hero-text">
            <h1>
              Hi,
              <br />
              <em>I'm James</em>
            </h1>

            <p className="intro">
              a Computer Science student in the honors college at Grand Valley
              State University, pursuing a B.S. in Computer Science with minors
              in Cybersecurity and Engineering.
            </p>

            <About showAbout={showAbout} />

            {
              <span
                className="more-link intro"
                onClick={() => setShowAbout(!showAbout)}
              >
                {showAbout ? "less" : "more"}{" "}
              </span>
            }
          </div>

          <div className="hero-photo">
            <div className="hero-photo-frame">
              =======
              <img
                className={`profile-optimized ${loaded ? "loaded" : ""}`}
                src={profilePhotoOptimized}
                alt=""
                aria-hidden="true"
              />
              <img
                className={`profile ${loaded ? "loaded" : ""}`}
                src={profilePhoto}
                alt="Photo of myself"
                onLoad={() => setLoaded(true)}
              />
            </div>
          </div>
        </div>

        <div className="hero-actions">
          <a href="#projects">See my work ↓</a>
          <a href="#contact">Get in touch</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
