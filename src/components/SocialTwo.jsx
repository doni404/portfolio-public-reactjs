import React from "react";

const socialList = [
  {
    name: "FB.",
    link: "https://www.facebook.com/doni.putra.547389",
  },
  {
    name: "GH.",
    link: "https://github.com/doni404",
  },
  {
    name: "LI.",
    link: "https://www.linkedin.com/in/doniputrapurbawa/",
  },
];

const SocialTwo = () => {
  return (
    <ul>
      {socialList.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            <span className="first">{val.name}</span>
            <span className="second">{val.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialTwo;
