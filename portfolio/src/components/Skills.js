import skills from "../data/skills"

function Skills() {
    return(
        <section className="container skills-section">
            <h2 className="header_2">Technical Skills</h2>
            <div className="carousel-container">
                <div className="skills-container">
                    {skills.map((skill) =>(
                        <div className="skill">
                            <img src={skill.src} alt={skill.name}/>
                            <p>{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills