import React from 'react'
import FrontEnd from './FrontEnd'
import './Skills.css'

const Skills = () => {
  return (
    <section className='skills section' id='skills'>
      <h2 className='section-title'>Skills</h2>
      <span className='section-subtitle'>My Technical Level</span>
      <div className="skills-container conatiner grid">
        <FrontEnd/>
      </div>
    </section>
  )
}

export default Skills