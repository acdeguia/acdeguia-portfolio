import { projects } from "../data/projects";

function Projects() {
  return (
    <section className="container projects-section">
      <h2 className="header_2">Design and Coding Projects</h2>
      <div className="project-container">
        {projects.map((project) => (
          <div
            className={`project ${project.id % 2 === 0 ? "even" : "odd"}`}
            key={project.id}
          >
            <div className="image-container">
              <img src={project.src} alt={project.name} />
              <div
                className={`proj-box-style${
                  project.id % 2 === 0 ? "Even" : "Odd"
                }`}
              ></div>
            </div>
            <div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.link}>
                <p
                  className={`link${project.id === "1" || project.id === '2' ? "Behance" : "Github"}`}
                ></p>
              </a>
                
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
