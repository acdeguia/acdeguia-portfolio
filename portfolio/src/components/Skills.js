import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import skills from '../data/skills';

const carouselConfig = {
    responsive: {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 5,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 4,
      },
    },
    containerClass: 'carousel-container',
    dotListClass: 'custom-dot-list-style',
    itemClass: 'custom-skill-class',
    keyBoardControl: true,
    draggable: true,
    swipeable: true,
    infinite: true,
    autoPlay: true,
    autoPlaySpeed: 2000,
  };

function Skills() {
    return(
        <section className="skills-section">
        <h2 className="header_2">Technical Skills</h2>
        <Carousel {...carouselConfig}>
          {skills.map((skill) => (
            <div className="skill" key={skill.name}>
              <img src={skill.src} alt={skill.name} />
              <p>{skill.name}</p>
            </div>
          ))}
        </Carousel>
      </section>
    )
}

export default Skills