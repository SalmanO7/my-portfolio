import React from 'react'
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { VscGithubAlt } from "react-icons/vsc";
import { CiFacebook } from "react-icons/ci";
import { RiMediumLine } from "react-icons/ri";
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container container">
                <h1 className='footer-title'>Salman</h1>

                <ul className='footer-list'>
                    <li>
                        <a href="#about" className='footer-link'>About</a>
                    </li>
                    <li>
                        <a href="#portfolio" className='footer-link'>Projects</a>
                    </li>
                    <li>
                        <a href="#skill" className='footer-link'>Skills</a>
                    </li>
                </ul>
            </div>

            <div className="footer-social socialMedia">
                <a href="https://www.instagram.com/salmanop402?igsh=MW03Mnkwd3ZranNhZA==" className='footer-social-link' target='blank'>
                    <CiInstagram />
                </a>
                <a href="https://www.linkedin.com/in/muhammad-salman-801a402a5" className='footer-social-link' target='blank'>
                    <CiLinkedin />
                </a>
                <a href="https://github.com/SalmanO7" className='footer-social-link' target='blank'>
                    <VscGithubAlt />
                </a>
                <a href="https://www.facebook.com/Salman221020" className='footer-social-link' target='blank'>
                    <CiFacebook />
                </a>
                <a href="https://medium.com/@m.salman07" className='footer-social-link' target='blank'>
                    <RiMediumLine />
                </a>

            </div>
            <span className='footer-copy'>&#169;Muhammad Salman. All rights reserved</span>
        </footer>
    )
}

export default Footer