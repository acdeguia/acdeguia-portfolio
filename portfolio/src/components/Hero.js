import verticalLine from "../assets/vertical-line.png";
import myImage from "../assets/myImage.png";
import arrowHead from "../assets/arrow-head.png";
import arrowTail from "../assets/arrow-tail.png";

import githubicon from "../assets/github.svg";
import linkedinicon from "../assets/linkedin.svg";
import behanceicon from "../assets/behance.svg";

function Hero() {
  return (
    <section className="hero-section">
      <div className="social-media_links">
        <ul>
          <li>
            <a href="https://github.com/acdeguia">
              <img src={githubicon} alt="github icon" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/acdeguia">
              <img src={linkedinicon} alt="github icon" />
            </a>
          </li>
          <li>
            <a href="https://www.behance.net/acdeguia">
              <img src={behanceicon} alt="github icon" />
            </a>
          </li>
        </ul>
        <img src={verticalLine} alt="vertical-line-design"></img>
      </div>
      <div className="hero-main">
        <p>Hi, my name is</p>
        <p>Ann Catherine</p>
        <p>
          I’m an aspiring <span>Frontend Web Developer</span> and a{" "}
          <span>UX/UI Designer</span> who is ambitious, passionate, and
          committed to personal growth.
        </p>
        <button className="btn resume-btn">Download Resume</button>
      </div>
      <div className="image-container">
        <img className="myImg" src={myImage} alt="myimage" />
        {/* <div className='box-style'></div> */}
      </div>
      <div className="arrow-container">
        <img src={arrowTail} alt="arrow" />
        <img className="arrow-head" src={arrowHead} alt="arrow" />
      </div>
    </section>
  );
}

export default Hero;
