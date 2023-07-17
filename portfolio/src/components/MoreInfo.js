import React, { useEffect, useContext } from 'react';
import { moreProjects } from "../data/projects";
import { ThemeContext } from "../contexts/ThemeContext";

function MoreInfo() {

  const { lightMode } = useContext(ThemeContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="container moreInfo-section">
      <h2 className="header_2">More Info & projects</h2>
      <p>
        I started my journey as a web developer when I decided to study Computer Science in college. I've always been interested in this stuff since I was a kid. I'm always curious and passionate about it, which makes me keep learning and getting better. I'm totally dedicated to growing as a person and in my career, always trying to find ways to learn more and improve my skills. My projects aren't flawless, but they are driven by my curiosity to learn new tools and tech. I've spent tons of hours <span>designing</span>, <span>developing</span>, and <span>refining</span> these projects, and they've really helped me improve my skills and knowledge.
      </p>
      <div className="moreProj-container">
        {moreProjects.map((project) => (
          <div>
            <p className="project-name">{project.name}</p>
            <img className="zoomable-image more-proj" src={project.src} alt="{project.name}" />
            <div className="more-proj-desc flex">
          <p>{project.techstack}</p>
              <ul className="flex demo-links">
            
                <li>
                  <a className="demo-link" href={project.link}><svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.45714 5.91431H1.51429C1.23025 5.91431 1 6.14456 1 6.42859V17.4857C1 17.7698 1.23025 18 1.51429 18H14.1143C14.3983 18 14.6286 17.7698 14.6286 17.4857V11.3143" stroke={lightMode ? "#6450F0" : "#FF6E4A"} stroke-linecap="round" />
                    <line x1="6.65723" y1="12.4684" x2="12.6358" y2="6.48982" stroke={lightMode ? "#6450F0" : "#FF6E4A"} stroke-linecap="round" />
                    <path d="M15.0241 3.09897C15.3481 3.03399 15.6485 3.28707 15.6393 3.61741L15.5097 8.31347C15.4978 8.74403 14.9936 8.97011 14.6642 8.69254L10.1877 4.92022C9.85834 4.64266 9.99567 4.1074 10.418 4.0227L15.0241 3.09897Z" fill={lightMode ? "#6450F0" : "#FF6E4A"} />
                  </svg>
                  </a>
                </li>
                <li>
                  <a className="demo-link" href={project.link2}><svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.61712 14.1658C4.0643 14.5023 4.72148 14.7353 5.65168 14.6483V15.4715C2.65049 14.4191 0.5 11.5615 0.5 8.20224C0.5 3.94872 3.94935 0.5 8.20224 0.5C12.4558 0.5 15.9045 3.9487 15.9045 8.20224C15.9045 11.5623 13.754 14.4205 10.7528 15.4726V13.3403C10.7528 12.8977 10.6743 12.5139 10.5425 12.195C11.252 12.0485 11.9719 11.786 12.5686 11.2866C13.4166 10.5767 13.9353 9.45893 13.9353 7.77436C13.9353 6.86309 13.6446 6.0889 13.1528 5.46233C13.2709 5.01493 13.367 4.20932 12.9755 3.21818L12.8885 2.99788L12.6629 2.92568L12.5105 3.40188C12.6629 2.92568 12.6624 2.92553 12.6619 2.92537L12.6609 2.92506L12.6589 2.92443L12.6547 2.92313L12.6454 2.9204C12.6388 2.91853 12.6315 2.91656 12.6235 2.91456C12.6075 2.91056 12.5885 2.90639 12.5667 2.90245C12.523 2.89456 12.4679 2.88762 12.4014 2.88459C12.2679 2.87849 12.0906 2.88816 11.8677 2.93521C11.4577 3.02173 10.8968 3.23375 10.1674 3.70258C9.53179 3.54697 8.86483 3.46971 8.20469 3.46645L8.19979 3.46647C7.53979 3.46971 6.87344 3.54694 6.23888 3.70254C5.50878 3.23366 4.94729 3.02167 4.53684 2.93518C4.31367 2.88815 4.13626 2.8785 4.00272 2.88458C3.93611 2.88762 3.88105 2.89454 3.83733 2.90242C3.8155 2.90635 3.79658 2.91051 3.78054 2.91451C3.77252 2.91651 3.76524 2.91846 3.75868 2.92033L3.74938 2.92305L3.74515 2.92434L3.74313 2.92497L3.74215 2.92528C3.74166 2.92544 3.74118 2.92559 3.89333 3.40188L3.74118 2.92559L3.5153 2.99775L3.42824 3.21832C3.03697 4.20971 3.1338 5.01557 3.25186 5.46272C2.76198 6.08823 2.46853 6.86154 2.46853 7.77436C2.46853 9.45503 2.98637 10.5724 3.83186 11.284C4.42902 11.7866 5.15002 12.0519 5.86033 12.2005C5.81529 12.3118 5.77686 12.4308 5.74597 12.5571C5.56691 12.6132 5.351 12.6541 5.13423 12.6347C4.84554 12.6089 4.51309 12.4753 4.23142 11.9945L4.22447 11.9824C4.21887 11.9728 4.21142 11.9603 4.20212 11.9454C4.18355 11.9155 4.15741 11.8754 4.12372 11.8283C4.05679 11.7347 3.95751 11.6101 3.82548 11.4825C3.56483 11.2306 3.14566 10.9387 2.57542 10.8989L2.56146 10.8979L2.54747 10.8977L2.54064 11.3977C2.54747 10.8977 2.54731 10.8977 2.54716 10.8977L2.54682 10.8977L2.54609 10.8977L2.5444 10.8977L2.54009 10.8977L2.52794 10.8977C2.51836 10.8978 2.50572 10.898 2.49068 10.8985C2.46105 10.8995 2.41983 10.9018 2.37283 10.9069C2.2987 10.915 2.13425 10.937 1.98616 11.0211C1.90678 11.0662 1.78625 11.155 1.71664 11.3142C1.64021 11.489 1.6617 11.6631 1.71759 11.7965C1.80851 12.0135 2.01134 12.1785 2.2016 12.3087L2.235 12.3315L2.26252 12.3444C2.26707 12.347 2.27709 12.353 2.29164 12.363C2.32376 12.3849 2.37835 12.4264 2.44556 12.4937C2.57773 12.6262 2.7657 12.866 2.92629 13.2705C2.92835 13.2763 2.9308 13.283 2.93366 13.2905C2.94083 13.3093 2.9506 13.3335 2.96337 13.3621C2.98886 13.4191 3.02659 13.4945 3.07981 13.5805C3.18614 13.7522 3.35652 13.9697 3.61712 14.1658ZM2.61146 11.3594C2.61149 11.3594 2.61201 11.36 2.61293 11.3612C2.61189 11.36 2.61143 11.3594 2.61146 11.3594ZM2.44294 11.9074C2.44289 11.9074 2.44348 11.9072 2.44479 11.9069L2.44294 11.9074Z" stroke={lightMode ? "#6450F0" : "#FF6E4A"} />
                  </svg>
                  </a>
                </li>
              </ul>
            </div>
            <p className="more-info-proj-descrip">{project.descrip}</p>
          </div>
        ))}
      </div>
      {/* <button className="btn more"><Link className="more-a" to='/projects'>View More</Link></button> */}
    </section>
  );
}

export default MoreInfo;
