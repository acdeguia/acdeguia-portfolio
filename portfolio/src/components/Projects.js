import { projects } from "../data/projects";

function Projects() {



  return (
    <section className="container projects-section">
      <h2 className="header_2">Design and Coding Projects</h2>
      <div className="project-container">
  {projects.map((project) => {
    const isOddProject = project.id % 2 === 1;
    const projectLinks = project.id === "1" || project.id === "2" ? (
      <a className="demo-link" href={project.link}>
        Behance ↗
      </a>
    ) : (
      <ul className="flex demo-links">
        <li>
          <a className="demo-link" href={project.link}>
            Live ↗
          </a>
        </li>
        <li>
          <a className="demo-link" href={project.link2}>
            Github ↗
          </a>
        </li>
      </ul>
    );

    return (
      <div
        className={`project ${isOddProject ? "odd" : "even"}`}
        key={project.id}
      >
        <div className="image-container">
          <img
            className="zoomable-image"
            src={project.src}
            alt={project.name}
          />
          <div className={`proj-box-style${isOddProject ? "Odd" : "Even"}`}></div>
        </div>

        <div className="project-descip">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          {projectLinks}
        </div>
      </div>
    );
  })}
</div>
    </section>
  );
}

export default Projects;
