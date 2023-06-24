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
      <div className="left-main">
        <div className="social-media_links">
          <ul>
            <li>
              <a href="https://github.com/acdeguia">
                <img className="icons" src={githubicon} alt="github icon" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/acdeguia">
                <img className="icons" src={linkedinicon} alt="github icon" />
              </a>
            </li>
            <li>
              <a href="https://www.behance.net/acdeguia">
                <img className="icons" src={behanceicon} alt="github icon" />
              </a>
            </li>
          </ul>
          <div className="vertical"></div>
        </div>
        <div className="hero-main">
          <div>
            <p>Hi, my name is</p>
            <h1 className="underline">Ann Catherine</h1>
          </div>
          <p>
            I’m an aspiring <span>Frontend Web Developer</span> and a{" "}
            <span>UX/UI Designer</span> who is ambitious, passionate, and
            committed to personal growth.
          </p>
          <button className="btn resume-btn"><span>Download Resume</span></button>
          
        </div>
      </div>
      
      <div className="main-hero_right">
        <div className="image-container">

          <div className='box-style'></div>
          <img className="myImg" src={myImage} alt="myimage" />
        </div>
        <div className="scroll-arrow">
          <img src={arrowHead} alt="arrow" />
          <img src={arrowHead} alt="arrow" />
          <img src={arrowHead} alt="arrow" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
