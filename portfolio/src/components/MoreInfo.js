import { moreProjects } from "../data/projects";

function MoreInfo() {
  return (
    <section className="container moreInfo-section">
      <h2 className="header_2">Design and Coding Projects</h2>
      <p>
        My web developer journey began with my pursuit of a bachelor’s degree in
        Computer Science. From a young age, I have always felt a spark of
        curiosity and passion for the field. The inner drive motivates me to
        continuously push myself to learn & grow. I am deeply committed to
        personal and professional development, constantly seeking opportunities
        to expand my knowledge and skills.
      </p>
      <div className="moreProj-container">
        {moreProjects.map((project) => (
          <div>
            <img src={project.src} alt="{project.name}" />
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
      <button className="btn more">View More</button>
    </section>
  );
}

export default MoreInfo;
