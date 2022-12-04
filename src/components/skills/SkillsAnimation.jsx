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
    name: "Server (AWS, GCP, XServer)",
    skillPercent: "85",
  },
  {
    name: "Backend (Golang, Java, NodeJs)",
    skillPercent: "90",
  },
  {
    name: "CI / CD (Github Action, Jenkins)",
    skillPercent: "75",
  },
  {
    name: "General Web (React, Java, PHP)",
    skillPercent: "70",
  },
  {
    name: "Mobile (Ionic, Flutter)",
    skillPercent: "60",
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
    compnayLink: "https://gloding.com/",
    descriptions:
      "Monitoring the backend staff for the development of API services using several programming language stacks, namely Java Jax-rs, Go-lang, Nodejs, and Ruby on rails. I use Jira Management tools daily to control backend tasks and meet project deadline targets.",
    animationDealy: "200",
  },
  {
    designation: "Sr. System Architect",
    jobType: "Full Time | Remote",
    year: "2018 - 2019",
    compnayName: "Gloding Inc.",
    compnayLink: "https://gloding.com/",
    descriptions:
      "Understanding the desired business or departmental strategy and outcome. Breaking down those outcomes into defined parts including products, processes, and functions. Decide on the right architecture to achieve what they have defined. Also understanding software, hardware, and user interactions, integrations, and interfaces.",
    animationDealy: "200",
  },
  {
    designation: "Jr. Server Administrator",
    jobType: "Full Time | Remote",
    year: "2018 - 2019",
    compnayName: "Gloding Inc.",
    compnayLink: "https://gloding.com/",
    descriptions:
      "Monitoring server performance and capacity to ensure that it meets client needs. Troubleshooting problems with existing systems and implementing solutions to fix them. Administering disaster recovery plans to ensure that data is backed up and can be restored in case of failure.",
    animationDealy: "",
  },
  {
    designation: "Backend Developer",
    jobType: "Part Time | Remote - Office",
    year: "2017 - 2018",
    compnayName: "Gloding Inc.",
    compnayLink: "https://gloding.com/",
    descriptions:
      "Managing the exchange of data between the server and the users. Focus on the development of all server-side logic, maintenance, and definition of the central database, and ensuring high performance and responsiveness to requests from the front-end. Responsible for the integration of the front-end elements.",
    animationDealy: "200",
  },
  {
    designation: "Data Scientist",
    jobType: "Part Time | Remote",
    year: "Aug - Dec 2021",
    compnayName: "PT Hikari Solusindo Sukses",
    compnayLink: "https://hss.co.id/",
    descriptions:
      "Undertaking data collection, cleaning, preprocessing and analysis from COVID-19 sampler tools (Inose-C19). Training and building models to detect and classify human armpit sample as a COVID-19 patient or not. Also presenting the information using data visualization technique.",
    animationDealy: "200",
  },
  {
    designation: "Web Developer",
    jobType: "Internship | Office",
    year: "Jul - Sep 2017",
    compnayName: "PT Kereta Api Indonesia",
    compnayLink: "https://www.kai.id/",
    descriptions:
      "We were in team for making online application for internal KAI called IT Service Request and IT Change Request. We were using PHP framework (Yii) to develop and figma for presentation",
    animationDealy: "200",
  },
  {
    designation: "Jr. Mobile Developer",
    jobType: "Student Employee | Office",
    year: "2016 - 2017",
    compnayName: "Brawijaya University (MGM Research Group)",
    compnayLink: "https://filkom.ub.ac.id/lab-mgm/",
    descriptions:
      "Developing new features and user interfaces from wireframe models. Ensuring the best performance and user experience of the application. Also cooperating with back-end developers, designers, and the rest of the team to deliver well-architected and high-quality solutions",
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
                    <a href={val.compnayLink} target="_blank" rel="noopener noreferrer">
                      <label>{val.compnayName}</label>
                    </a>
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
