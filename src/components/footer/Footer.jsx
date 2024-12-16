import React from "react";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { VscGithubAlt } from "react-icons/vsc";
import { CiFacebook } from "react-icons/ci";
import { RiMediumLine } from "react-icons/ri";
import "./Footer.css";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <h1 className="footer-title">&lt;Mohsin /&gt;</h1>

        <ul className="footer-list">
          <li>
            <a href="#about" className="footer-link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer-link">
              Projects
            </a>
          </li>
          <li>
            <a href="#skill" className="footer-link">
              Skills
            </a>
          </li>
        </ul>
      </div>

      <div className="footer-social socialMedia">
        <a
          href="https://www.instagram.com/mohsin_shiekh108/?hl=en"
          className="footer-social-link"
          target="blank"
        >
          <CiInstagram />
        </a>
        <a href="www.linkedin.com/in/muhammad-mohsin-b89150248" target="blank">
          <CiLinkedin />
        </a>
        <a
          href=" https://github.com/MuhammadMohsin310"
          className="footer-social-link"
          target="blank"
        >
          <VscGithubAlt />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100040576321721Z"
          className="footer-social-link"
          target="blank"
        >
          <CiFacebook />
        </a>
        <a
          href="https://medium.com/@muhammad-mohsin"
          className="footer-social-link"
          target="blank"
        >
          <RiMediumLine />
        </a>
      </div>
      <span className="footer-copy">
        &#169;Muhammad Mohsin. All rights reserved
      </span>
    </footer>
  );
};

export default Footer;
