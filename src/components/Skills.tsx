import Reveal from "./Reveal";

function Skills() {
  const skills = [
    "C# / .NET",
    "Rust",
    "Python",
    "C / C++",
    "JavaScript",
    "SQL",
    "Linux",
    "Nix",
    "NixOS",
    "Git",
    "GitHub Actions",
    "CI / CD",
  ];

  return (
    <section className="section skills">
      <div className="section-label">03 / TOOLBOX</div>

      <Reveal>
        <div className="skill-list">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export default Skills;
