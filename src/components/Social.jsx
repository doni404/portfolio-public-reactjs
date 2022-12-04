import React from "react";
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiGithub,
  FiMail,
} from "react-icons/fi";

const SocialShare = [
  {
    iconName: <FiFacebook />,
    link: "https://www.facebook.com/doni.putra.547389/",
  },
  {
    iconName: <FiLinkedin />,
    link: "https://www.linkedin.com/in/doniputrapurbawa/",
  },
  {
    iconName: <FiInstagram />,
    link: "https://www.instagram.com/doniputrapurbawa/",
  },
  {
    iconName: <FiGithub />,
    link: "https://github.com/doni404/",
  },
  {
    iconName: <FiMail />,
    link: "mailto:doniputrapurbawa@gmail.com",
  },
];
const Social = () => {
  return (
    <ul>
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            {val.iconName}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
