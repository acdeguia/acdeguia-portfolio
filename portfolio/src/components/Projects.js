import { Link } from "react-router-dom";

import { projects } from "../data/projects";

function Projects() {

  const handleInternalLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section className="container projects-section">
      <h2 className="header_2">Design and Coding Projects</h2>
      <p>I worked on a bunch of design and coding projects during my college. Some I did on my own, and others I collaborated with a team. These projects were either part of my coursework or because I was motivated to learn more.</p>
      <div className="project-container">
        {projects.map((project) => {
          const isOddProject = project.id % 2 === 1;
          const projectLinks = project.id === "1" || project.id === "2" ? (
            <a className="demo-link" href={project.link}>
              Behance ↗
            </a>
          ) : (
            <ul className="flex demo_links">
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

      <Link to={"/projects"}><button className="btn more">View More</button></Link>
    </section>
  );
}

export default Projects;
