import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const educationContent = [
  {
    passingYear: "2020 - 2022",
    degree: "Master of Computer Science",
    instituteName: "Institut Teknologi Sepuluh Nopember University (ITS)",
  },
  {
    passingYear: "2014 - 2019",
    degree: "Bachelor of Computer Science",
    instituteName: "Brawijaya University",
  },
];

const skillsContent = [
  {
    name: "Web Design",
    skillPercent: "85",
  },
  {
    name: "Mobile App",
    skillPercent: "55",
  },
  {
    name: "Illustrator",
    skillPercent: "65",
  },
  {
    name: "Photoshop",
    skillPercent: "72",
  },
  {
    name: "Motion Graphy",
    skillPercent: "80",
  },
];

const awardContent = [
  {
    awardYear: "2017 - 2018",
    degree: "Saga Unversity Scholarship",
    instituteName: "SPACE Exchange Program",
  },
  {
    awardYear: "2016 - 2017",
    degree: "Djarum Foundation Scholarship",
    instituteName: "Outstanding Student Program",
  },
];
const experienceContent = [
  {
    designation: "Backend Engineering Manager",
    jobType: "Full Time | Remote",
    year: "2019 - Present",
    compnayName: "Gloding Inc.",
    descriptions:
      "[NEED UPDATE] I design and develop services for customers of all sizes, specializing in creating stylish, modern websites",
    animationDealy: "200",
  },
  {
    designation: "Sr. System Architect",
    jobType: "Full Time | Remote",
    year: "2018 - 2019",
    compnayName: "Gloding Inc.",
    descriptions:
      "[NEED UPDATE] I design and develop services for customers of all sizes, specializing in creating stylish, modern websites",
    animationDealy: "200",
  },
  {
    designation: "Jr. Server Administrator",
    jobType: "Full Time | Remote",
    year: "2018 - 2019",
    compnayName: "Gloding Inc.",
    descriptions:
      "[NEED UPDATE] I design and develop services for customers of all sizes, specializing in creating stylish, modern websites",
    animationDealy: "",
  },
  {
    designation: "Backend Developer",
    jobType: "Part Time | Remote - Office",
    year: "2017 - 2018",
    compnayName: "Gloding Inc.",
    descriptions:
      "[NEED UPDATE] I design and develop services for customers of all sizes, specializing in creating stylish, modern websites",
    animationDealy: "200",
  },
  {
    designation: "Data Scientist",
    jobType: "Part Time | Remote",
    year: "Aug - Dec 2021",
    compnayName: "PT Hikari Solusindo Sukses",
    descriptions:
      "[NEED UPDATE] I design and develop services for customers of all sizes, specializing in creating stylish, modern websites",
    animationDealy: "200",
  },
  {
    designation: "Web Developer",
    jobType: "Internship | Office",
    year: "Jul - Sep 2017",
    compnayName: "PT Kereta Api Indonesia",
    descriptions:
      "[NEED UPDATE] We were making online application for internal KAI called IT Service Request and IT Change Request",
    animationDealy: "200",
  },
  {
    designation: "Jr. Mobile Developer",
    jobType: "Student Employee | Office",
    year: "2016 - 2017",
    compnayName: "Brawijaya University (MGM Research Group)",
    descriptions:
      "[NEED UPDATE] I developed both website and android apps. I got so many experiences about making new valuable product by metrics.",
    animationDealy: "200",
  },
];

const SkillsAnimation = () => {
  return (
    <>
      <div className="beny_tm_resume">
        <div className="main_title">
          <h3>My Experience</h3>
        </div>
        <Tabs>
          <TabList className="tab_list">
            <Tab> Education & Skills</Tab>
            <Tab>Experience</Tab>
          </TabList>
          <TabPanel>
            <div className="resume_inner">
              <div className="row">
                <div
                  className="col-4"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                >
                  <div className="education ">
                    <div className="edu_list">
                      <h4>
                        <label>Education</label>
                      </h4>
                      <ul>
                        {educationContent.map((val, i) => (
                          <li key={i}>
                            <span className="year">{val.passingYear}</span>
                            <p>
                              <span>{val.degree}</span> - {val.instituteName}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {/* End .col-4 */}

                <div
                  className="col-4"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <div className="skills ">
                    <h4>
                      <label>Skills and Certificates</label>
                    </h4>
                    <div className="beny_progress">
                      {skillsContent.map((val, i) => (
                        <div className="progress_inner" key={i}>
                          <span>
                            <span className="label">{val.name}</span>
                            <span className="number">{val.skillPercent}%</span>
                          </span>
                          <div className="background">
                            <div className="bar open">
                              <div
                                className="bar_in"
                                style={{ width: val.skillPercent + "%" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* End .col-5 */}

                <div
                  className="col-4"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                >
                  <div className="education ">
                    <div className="edu_list">
                      <h4>
                        <label>Awards</label>
                      </h4>
                      <ul>
                        {awardContent.map((val, i) => (
                          <li key={i}>
                            <span className="year">{val.awardYear}</span>
                            <p>
                              <span>{val.degree}</span> - {val.instituteName}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {/* End .col-4 */}
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="row">
              {experienceContent.map((val, i) => (
                <div
                  className="col-6"
                  key={i}
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay={val.animationDealy}
                >
                  <div className="resume-box-01">
                    <h5>{val.designation}</h5>
                    <h6>{val.jobType}</h6>
                    <span>{val.year}</span>
                    <div className="hr"></div>
                    <h4>
                      <label>{val.compnayName}</label>
                    </h4>
                    <p>{val.descriptions}</p>
                  </div>
                </div>
                //  End .col
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default SkillsAnimation;
