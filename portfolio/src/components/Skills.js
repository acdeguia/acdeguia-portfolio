import skills from "../data/skills"

function Skills() {
    return(
        <section className="skills-section">
            <h2>Technical Skills</h2>
            {skills.map((skill) =>(
                <div className="skill">
                    <img src={skill.src} alt={skill.name}/>
                    <p>{skill.name}</p>
                </div>
            ))}
        </section>
    )
}

export default Skills