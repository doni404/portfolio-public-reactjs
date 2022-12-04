import React from "react";
import Skills from "../skills/SkillsAnimation";
import Social from "../Social";

const AboutParallax = () => {
  return (
    <>
      <div className="about_inner">
        <div className="left">
          <img src="img/thumbs/1-1.jpg" alt="" />
          <div
            className="image"
            data-aos="fade-right"
            data-aos-duration="1200"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/about/9.jpg"
              })`,
            }}
          ></div>
        </div>
        <div
          className="right"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="50"
        >
          <div className="short">
            <h3> I'm Doni Putra</h3>
            <h5>
              A <span className="theme-color">Backend</span> IT Manager
              based in <span className="theme-color">Japan</span>
            </h5>
            <p>
            I have successfully delivered many projects on time to clients. 
            Besides working, I have also enhanced my education and have graduated with a bachelor's and master's degree in informatics engineering or computer science major. 
            My research interests include scalable and intelligent systems, artificial intelligence, and blockchain technology. Check out my Portfolio
            </p>
            <div className="about_social">
              <Social />
            </div>
          </div>
          <div className="extra">
            <h3 className="title">Personal Info</h3>
            <div className="list">
              <ul>
                <li>
                  <p>
                    <span>Name :</span> Doni Putra Purbawa
                  </p>
                </li>
                <li>
                  <p>
                    <span>Address :</span> Sidoarjo, Indonesia
                  </p>
                </li>
                <li>
                  <p>
                    <span>Age :</span> 26 Years
                  </p>
                </li>
                <li>
                  <p>
                    <span>Phone :</span> +62 878 1862 3001
                  </p>
                </li>
                <li>
                  <p>
                    <span>Nationality :</span> Indonesia
                  </p>
                </li>
                <li>
                  <p>
                    <span>Email :</span> doniputrapurbawa@gmail.com
                  </p>
                </li>
                <li>
                  <p>
                    <span>Freelance :</span> Available
                  </p>
                </li>
                <li>
                  <p>
                    <span>Languages :</span> Japanese, English, Indonesia
                  </p>
                </li>
              </ul>
            </div>
            <div className="beny_tm_button color-outline">
              <a href="img/about/cv_doniputrapurbawa.pdf" download>
                <span className="wrapper">
                  <span className="first">Download CV</span>
                  <span className="second">Download CV</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Skills />
    </>
  );
};

export default AboutParallax;
