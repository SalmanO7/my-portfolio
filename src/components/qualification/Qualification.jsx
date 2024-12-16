import React from 'react'
import { LuGraduationCap } from "react-icons/lu";
import './Qualification.css'

const Qualification = () => {
  return (
    <section className='qualification section'>
        <h2 className='section-title'>Qualification</h2>
        <span className='section-subtitle'>My Personal Journey</span>

        <div className="qualification-container container">
            <div className='qualification-tabs'>
                <div className='qualification-btn button--flex qualification-active'>
                    <LuGraduationCap className='qualification-icon'/>Education
                </div>
                <div className='qualification-btn button--flex'>
                    {/* icon */}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification