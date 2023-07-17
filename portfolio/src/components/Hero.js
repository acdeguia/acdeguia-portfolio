import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { ThemeContext } from "../contexts/ThemeContext";

import myImage from "../assets/myImage.png";
import arrowHead from "../assets/arrow-head.png";
import githubicon from "../assets/github.svg";
import linkedinicon from "../assets/linkedin.svg";
import behanceicon from "../assets/behance.svg";

function Hero() {
  const { lightMode } = useContext(ThemeContext);

  return (
    <section className="container hero-section">
      <div className="hero_gap flex">
        <div className="left-main">
          <div className="social-media_links">
            <ul>
              <li>
                <a href="https://github.com/acdeguia">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_306_68)">
                      <path d="M6.86404 25.5748C7.65469 26.1698 8.88868 26.5996 10.75 26.3204V28.5125C10.75 28.6216 10.7151 28.6874 10.6886 28.7129L10.6883 28.7132C10.6794 28.7217 10.6145 28.7845 10.3814 28.7475C4.63661 26.8193 0.5 21.3927 0.5 15C0.5 6.99242 6.99362 0.5 15 0.5C23.0076 0.5 29.5 6.99239 29.5 15C29.5 21.3912 25.3672 26.8171 19.6263 28.747C19.3848 28.788 19.3189 28.724 19.3113 28.7166L19.311 28.7162C19.2858 28.6921 19.25 28.6262 19.25 28.5125V24.3962C19.25 23.3943 19.0167 22.5907 18.6658 21.9941C20.0958 21.7579 21.5525 21.2993 22.7191 20.3228C24.1538 19.1218 25.07 17.2075 25.07 14.2175C25.07 12.5669 24.5192 11.1857 23.5956 10.0825C23.8113 9.39344 24.0851 7.91408 23.3438 6.03754L23.2568 5.81725L23.0312 5.74505L22.8787 6.22125C23.0312 5.74505 23.0307 5.74489 23.0302 5.74474L23.0292 5.74442L23.0271 5.74376L23.0225 5.74237L23.012 5.73927C23.0084 5.73825 23.0046 5.73718 23.0004 5.73607C22.9957 5.7348 22.9906 5.73347 22.9851 5.7321C22.9645 5.72697 22.9388 5.72127 22.9079 5.7157C22.8461 5.70453 22.7637 5.69391 22.6603 5.68919C22.4531 5.67974 22.1641 5.69408 21.7888 5.77327C21.0718 5.92457 20.044 6.31158 18.6682 7.21717C17.4883 6.91183 16.2399 6.75982 15.0025 6.75373L14.9975 6.75376C13.7603 6.75982 12.513 6.9118 11.3354 7.21712C9.95827 6.31149 8.92921 5.92451 8.21138 5.77324C7.83565 5.69407 7.54628 5.67974 7.3389 5.68919C7.23538 5.69391 7.15295 5.70452 7.09107 5.71567C7.06016 5.72124 7.03447 5.72692 7.01394 5.73204C7.00367 5.7346 6.9947 5.73702 6.98702 5.7392L6.97647 5.74229L6.97192 5.74368L6.96983 5.74433L6.96882 5.74465C6.96834 5.74481 6.96785 5.74496 7.12 6.22125L6.96785 5.74496L6.74197 5.81712L6.65491 6.03769C5.91425 7.91433 6.18912 9.39407 6.40466 10.0829C5.48456 11.1849 4.92875 12.5646 4.92875 14.2175C4.92875 17.2002 5.84341 19.1143 7.27443 20.3188C8.44037 21.3001 9.89682 21.7643 11.3261 22.0049C11.1215 22.359 10.9598 22.7852 10.8627 23.2799C10.4664 23.4292 9.91917 23.5693 9.35245 23.5187C8.69363 23.4599 7.96373 23.1417 7.37895 22.1416L7.3778 22.1396L7.36763 22.1219C7.35923 22.1075 7.34759 22.0879 7.33271 22.064C7.30299 22.0162 7.26016 21.9503 7.2043 21.8723C7.09303 21.7167 6.92753 21.5089 6.70794 21.2967C6.27218 20.8756 5.59257 20.4085 4.68102 20.345L4.66706 20.344L4.65307 20.3438L4.64625 20.8437C4.65307 20.3438 4.65292 20.3438 4.65275 20.3438L4.6524 20.3438L4.65158 20.3438L4.64953 20.3438L4.64381 20.3437L4.62624 20.3438C4.61195 20.3439 4.59248 20.3442 4.56896 20.345C4.52238 20.3466 4.45764 20.3501 4.38433 20.3581C4.25761 20.372 4.02944 20.406 3.83692 20.5154C3.73532 20.5731 3.59739 20.6779 3.51901 20.8571C3.4338 21.052 3.45513 21.2503 3.52327 21.413C3.6387 21.6885 3.91571 21.932 4.26019 22.1677L4.29359 22.1905L4.32548 22.2055C4.32775 22.2067 4.33252 22.2092 4.3396 22.2132C4.35614 22.2226 4.3853 22.24 4.42472 22.2669C4.50347 22.3208 4.62345 22.4129 4.76572 22.5555C5.0478 22.8382 5.42435 23.3263 5.73955 24.1231L5.73966 24.1235C5.74282 24.1324 5.74698 24.1439 5.75224 24.1577C5.76276 24.1854 5.77769 24.2224 5.79769 24.2672C5.83763 24.3566 5.89813 24.4778 5.98458 24.6174C6.15736 24.8964 6.43605 25.2527 6.86404 25.5748Z" stroke={lightMode ? "#6450F0" : "#FF6E4A"} />
                    </g>
                    <defs>
                      <clipPath id="clip0_306_68">
                        <rect width="30" height="30" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/acdeguia">
                  <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="4.05405" cy="4.05405" r="3.65405" stroke={lightMode ? "#6450F0" : "#FF6E4A"} stroke-width="1" />
                    <path d="M11.3514 10.1189V29.1891H17.6999V17.9026C17.6999 16.7351 18.8902 15.1783 20.8741 15.1783C22.4612 15.1783 23.1225 16.9945 23.2548 17.9026V29.1891H30C30 24.9081 29.9207 15.9567 29.6032 14.3999C29.2065 12.454 27.6194 9.72968 23.2548 9.72968C19.7631 9.72968 18.0966 11.2864 17.6999 12.0648V10.1189H11.3514Z" stroke={lightMode ? "#6450F0" : "#FF6E4A"} stroke-width="1" />
                    <rect x="0.4" y="10.1297" width="7.30811" height="19.4703" stroke={lightMode ? "#6450F0" : "#FF6E4A"} stroke-width="1" />
                  </svg>

                </a>
              </li>
              <li>
                <a href="https://www.behance.net/acdeguia">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.4193 12.9939L10.4186 12.9945C9.85797 13.4081 9.16066 13.6009 8.35655 13.6009L10.4193 12.9939ZM10.4193 12.9939C11.0297 12.5415 11.2961 11.8285 11.2944 10.9544M10.4193 12.9939L8.35624 13.6009L4.15344 13.6042L3.75312 13.6046V13.2042V8.7878V8.3878H4.15312H8.03701C8.42138 8.38608 8.80302 8.41992 9.1783 8.48542L9.18024 8.48576C9.56517 8.5549 9.91508 8.68011 10.2263 8.86607C10.5549 9.06238 10.8145 9.33651 11.0048 9.67507C11.2066 10.034 11.2944 10.469 11.2944 10.9544M11.2944 10.9544H10.8944L11.2944 10.9535C11.2944 10.9538 11.2944 10.9541 11.2944 10.9544ZM19.6965 17.7773H20.114H29.5956C29.6218 16.8941 29.5308 16.0472 29.3241 15.2344C29.0894 14.3111 28.7087 13.4951 28.1857 12.7805C27.6686 12.0739 27.0066 11.5102 26.1955 11.0874L19.6965 17.7773ZM19.6965 17.7773L19.7143 18.1944M19.6965 17.7773L19.7143 18.1944M19.7143 18.1944C19.768 19.4537 20.0905 20.4558 20.7587 21.1026C21.4196 21.744 22.3454 22.0355 23.4705 22.0355M19.7143 18.1944L23.4705 22.0355M23.4705 22.0355C24.2987 22.0355 25.0323 21.8268 25.6547 21.3961C26.1347 21.0638 26.5011 20.6891 26.7053 20.2639M23.4705 22.0355L26.7053 20.2639M26.7053 20.2639H29.1714C28.6687 21.5633 27.9669 22.4767 27.0868 23.0442C26.0696 23.7002 24.8266 24.0387 23.3371 24.0387C22.3049 24.0387 21.3862 23.8739 20.5768 23.552C19.7643 23.2289 19.0824 22.7708 18.5248 22.1807C17.9644 21.5876 17.5287 20.8782 17.2211 20.0439C16.9143 19.2115 16.7575 18.2891 16.7575 17.274C16.7575 16.2967 16.9168 15.3936 17.2331 14.5613C17.55 13.7272 17.9986 13.012 18.5762 12.4094C19.1542 11.8064 19.846 11.3297 20.6545 10.9798C21.4537 10.6339 22.3471 10.4577 23.3388 10.4577C24.45 10.4577 25.3975 10.6724 26.1954 11.0874L26.7053 20.2639ZM12.1765 13.8201L11.2287 14.2744L12.2387 14.5652C13.3305 14.8796 14.1131 15.4192 14.6243 16.1652C15.1448 16.9247 15.4142 17.8526 15.4142 18.9673C15.4142 19.8669 15.2395 20.6248 14.9059 21.2529C14.5646 21.8956 14.1079 22.4154 13.5344 22.818L13.5339 22.8184C12.9496 23.2302 12.2808 23.5362 11.5212 23.7368C10.7479 23.9397 9.95067 24.0419 9.152 24.0403H9.1512H0.4V5.95963H8.88454C9.75945 5.95963 10.551 6.03758 11.2609 6.18914C11.9605 6.33849 12.5434 6.58057 13.0217 6.90798C13.4904 7.22885 13.8553 7.65437 14.1178 8.19438C14.3758 8.72508 14.5142 9.40111 14.5142 10.2411C14.5142 11.1315 14.3121 11.8416 13.9351 12.3961C13.5513 12.9607 12.9721 13.4388 12.1765 13.8201ZM9.83989 21.4853L9.83989 21.4853L9.84236 21.4848C10.2537 21.3959 10.6275 21.2471 10.9557 21.0315C11.2975 20.807 11.5667 20.5033 11.7643 20.1316L11.765 20.1302C11.9709 19.7392 12.0627 19.2632 12.0627 18.7273C12.0627 17.6891 11.7678 16.8505 11.0843 16.3335C10.4491 15.8514 9.63258 15.6308 8.67455 15.6308H4.15312H3.75312V16.0308V21.2138V21.614L4.15327 21.6138L8.59385 21.6122C9.01352 21.6139 9.43123 21.571 9.83989 21.4853ZM25.5781 13.3552L25.5776 13.3547C25.0267 12.7508 24.2177 12.4843 23.2321 12.4843C22.5898 12.4843 22.0243 12.5927 21.557 12.8313L21.5564 12.8316C21.1178 13.0565 20.7535 13.3404 20.4741 13.6921C20.2063 14.0291 20.0137 14.3919 19.9013 14.7816C19.7994 15.1347 19.7338 15.4645 19.7148 15.7655L19.6879 16.1908H20.114H26.222H26.7041L26.6151 15.717C26.429 14.7254 26.0939 13.9228 25.5781 13.3552ZM19.8707 6.91792H26.7019V8.23447H19.8707V6.91792Z" stroke={lightMode ? "#6450F0" : "#FF6E4A"} stroke-width="1" />
                  </svg>

                </a>
              </li>
            </ul>
            <div className="vertical"></div>
          </div>
          <div className="hero-main">
            <div>
              <p>Hi, my name is</p>
              <h1 className=" underline">Ann Catherine</h1>
            </div>
            <p className="element">
              I’m an aspiring{" "}
              <span className="bold">Frontend Web Developer</span> and a{" "}
              <span className="bold">UX/UI Designer</span> who is ambitious,
              passionate, and committed to personal growth.
            </p>
            <Link to="https://drive.google.com/file/d/1uCtwa1_qqiVfriO7RUveKca2Wh0aY3MG/view?usp=sharing">
              <button className="btn resume-btn">
                <span>View Resume</span>
              </button>
            </Link>
          </div>
        </div>

        <div className="main-hero_right">
          <div className="image-container respo">
            <div className="box-style"></div>
            <img className="myImg " src={myImage} alt="myimage" />
          </div>
          <div className="scroll-arrow">
            <svg
              width="40"
              height="40"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 9L10 19L19 9"
                stroke={lightMode ? "#6450F0" : "#FF6E4A"}
                stroke-opacity="0.64"
                stroke-width="1.3"
                stroke-linecap="round"
              />
              <path
                d="M1 1L10 11L19 1"
                stroke={lightMode ? "#6450F0" : "#FF6E4A"}
                stroke-opacity="0.64"
                stroke-width="1.3"
                stroke-linecap="round"
              />
            </svg>

            <svg
              width="55"
              height="40"
              viewBox="0 0 28 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1.40002L14 18.3L27 1.40002"
                stroke={lightMode ? "#6450F0" : "#FF6E4A"}
                stroke-width="1.3"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
