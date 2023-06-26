import React from "react";
import { Link } from "react-router-dom";
import { moreProjects } from "../data/projects";

function MoreInfo() {
  return (
    <section className="container moreInfo-section">
      <h2 className="header_2">More Info & projects</h2>
      <p>
        
      I started my journey as a web developer when I decided to study Computer Science in college. I've always been interested in this stuff since I was a kid. I'm always curious and passionate about it, which makes me keep learning and getting better. I'm totally dedicated to growing as a person and in my career, always trying to find ways to learn more and improve my skills. My projects aren't flawless, but they are driven by my curiosity to learn new tools and tech. I've spent tons of hours designing, developing, and refining these projects, and they've really helped me improve my skills and knowledge.
      </p>
      <div className="moreProj-container">
        {moreProjects.map((project) => (
          <div>
            <img className="zoomable-image more-proj" src={project.src} alt="{project.name}" />
            <div className="more-proj-desc flex">
              <p>{project.name}</p>
              <ul className="flex demo-links">
                <li>
                  <a className="demo-link" href={project.link}>Live ↗</a>
                </li>
                <li>
                  <a className="demo-link" href={project.link2}>Github ↗</a>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
      {/* <button className="btn more"><Link className="more-a" to='/projects'>View More</Link></button> */}
    </section>
  );
}

export default MoreInfo;
