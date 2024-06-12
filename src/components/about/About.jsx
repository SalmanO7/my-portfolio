import React from 'react';
import AboutImg from '../../assets/about.jpg';
import { FaRegAddressCard } from "react-icons/fa6";
import CV from '../../assets/NewCV.pdf';
import Info from './Info';
import './About.css';

const About = () => {
  return (
    <section className='about section' id='about'>
      <h2 className="section-title">About Me</h2>
      <div className='section-subtitle-head'>
        <span className='section-subtitile'>My Introduction</span>
      </div>
      <div className='about-container container grid'>
        <img src={AboutImg} alt="About picture" className='about-img' />

        <div className="about-data">
          <Info />
          <div className='about-peragraph-section'>


            <p className='about-p'>Hi! I'm Salman, a passionate student developer with a keen interest in software development and web technologies.
              As I continue my journey in the tech world, I am eager to take on new challenges, learn from experienced professionals, and contribute to meaningful projects that make a difference. Thank you for visiting my portfolio, and I look forward to connecting with you!❤
            </p>
          </div>
          <a download="" href={CV} className='button about-btn button-flex'>
            Download Cv  <FaRegAddressCard className='cv-icon' />
          </a>
        </div>
      </div>
    </section>
  )
}

export default About