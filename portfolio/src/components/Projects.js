import { projects } from "../data/projects"

function Projects() {
    return(
        <section >
            <h2>Deign and Coding Projects</h2>
            <div>
                {projects.map((project) => (
                    <div>
                        <img src={project.src} alt={project.name}/>
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <a href={project.link}>link</a>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects