import React from 'react'
import Works from './Works'
import './Work.css'

const Work = () => {
    return (
        <section className='work section' id='portfolio'>
            <div className="portfolio-head">
                <h2 className='section-title'>PortFolio</h2>
                <span className="section-subtitle">Most Recent Works</span>
            </div>
            <Works />
        </section>
    )
}

export default Work