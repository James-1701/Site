import Reveal from "./Reveal";

function Experience() {
  const experiences = [
    {
      number: "01",
      year: "2026",
      company: "Howmet Aerospace",
      role: "IT Software Engineering Intern",
      stack: "C# / .NET · SQL Server · Manufacturing Systems",
      description:
        "Built and shipped internal applications using C#/.NET and SQL Server, replacing manual processes and improving existing production software. Worked with engineers, process owners, IT, and data science to turn operational problems into software.",
      bullets: [
        "Designed SQL tables and databases and optimized production queries.",
        "Refactored legacy applications and built new applications from the ground up.",
        "Automated manual workflows and deployed software to production.",
      ],
    },
    {
      number: "02",
      year: "2023",
      company: "FIRST Robotics",
      role: "Robotics Team Programmer",
      stack: "Java · Robotics",
      description:
        "Contributed to the design, testing, and development of a competition robot while gaining experience with Java and mechatronics.",
      bullets: [
        "Learned Java and worked with the team's existing robot control software.",
        "Contributed to mechanical design and development of the competition robot.",
        "Tested robot systems and collaborated with teammates to identify and resolve issues.",
      ],
    },
  ];

  return (
    <section id="experience" className="section experience">
      <div className="section-label">01 / EXPERIENCE</div>

      {experiences.map((experience) => (
        <Reveal key={experience.company}>
          <div className="experience-content">
            <div className="experience-meta">
              <span>{experience.year}</span>
              <span>{experience.company}</span>
            </div>

            <div>
              <h2>{experience.role}</h2>

              <p className="muted">{experience.stack}</p>

              <p>{experience.description}</p>

              <ul>
                {experience.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      ))}

      <a
        className="resume-link"
        href="https://James-1701.github.io/Resume/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        View my resume ↗
      </a>
    </section>
  );
}

export default Experience;
