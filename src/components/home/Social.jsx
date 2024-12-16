import React from "react";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { VscGithubAlt } from "react-icons/vsc";

const Social = () => {
  return (
    <div className="home-social">
      <a
        href="https://www.instagram.com/mohsin_shiekh108/?hl=en"
        className="home-social-icon"
        target="blank"
      >
        <CiInstagram />
      </a>
      <a
        href="www.linkedin.com/in/muhammad-mohsin-b89150248"
        className="home-social-icon"
        target="blank"
      >
        <CiLinkedin />
      </a>
      <a
        href="https://github.com/MuhammadMohsin310
"
        className="home-social-icon"
        target="blank"
      >
        <VscGithubAlt />
      </a>
    </div>
  );
};

export default Social;
