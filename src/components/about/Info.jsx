import React from 'react'
import { SlBriefcase } from "react-icons/sl";
import { GrTechnology } from "react-icons/gr";

const Info = () => {
    return (
        <div className='about-info grid'>
            <a href='#portfolio' className="about-box">
                <SlBriefcase className='about-icon' />
                <h3 className="about-title">Completed</h3>
                <span className="about-subtitle">Projects</span>
            </a>
            <a href='#skills' className="about-box">
                <GrTechnology className='about-icon' />
                <h3 className="about-title">Technologies</h3>
                <span className="about-subtitle">Skills</span>
            </a>
        </div>
    )
}

export default Info