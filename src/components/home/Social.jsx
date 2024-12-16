import React from 'react'
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { VscGithubAlt } from "react-icons/vsc";



const Social = () => {
  return (
    <div className='home-social'>
      <a href="https://www.instagram.com/salmanop402?igsh=MW03Mnkwd3ZranNhZA==" className='home-social-icon' target='blank'>
        <CiInstagram />
      </a>
      <a href="https://www.linkedin.com/in/muhammad-salman-801a402a5" className='home-social-icon' target='blank'>
        <CiLinkedin />
      </a>
      <a href="https://github.com/SalmanO7" className='home-social-icon' target='blank'>
        <VscGithubAlt />
      </a>
    </div>
  )
}

export default Social