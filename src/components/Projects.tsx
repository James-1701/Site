import Reveal from "./Reveal";

function Projects() {
  const projects = [
    {
      number: "01",
      name: "nix-infra",
      description:
        "Declarative infrastructure for my personal fleet of Linux systems, using NixOS to manage machines and services.",
      tags: ["NixOS", "Linux", "IaC"],
      href: "https://github.com/James-1701/nix-infra",
    },
    {
      number: "02",
      name: "nix-lineage",
      description:
        "NixOS fleet management framework to centralize host roles and automatically configure systems based on traits.",
      tags: ["Nix", "NixOS", "Flakes"],
      href: "https://github.com/James-1701/nix-lineage",
    },
    {
      number: "03",
      name: "Type-II",
      description:
        "An in development simulation-driven space strategy game focused on orbital mechanics, logistics, and large-scale systems.",
      tags: ["Rust", "Bevy", "Simulation"],
    },
  ];

  return (
    <section id="projects" className="section projects">
      <div className="section-label">02 / PROJECTS</div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <Reveal key={project.name} className="project-reveal">
            <a
              className="project"
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <span className="project-number">{project.number}</span>

              <div>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
              </div>

              <div className="tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Projects;
