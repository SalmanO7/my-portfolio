import React from 'react';
import { FaSmileWink } from "react-icons/fa";
const Data = () => {
    return (
        <>
            <div className='home-data'>
                <div className='small-home-section'>
                    <h1 className='home-title'>
                        Muhammad Salman
                    </h1>
                    <h3 className="text-animation">I'm a <span></span></h3>
                    <p className='home-description'>As a dedicated front-end developer, I have a passion for crafting engaging and dynamic user interfaces.enabling me to create interactive web applications that provide seamless user experiences.
                    </p>
                </div>
                <a href="#contact" className='button button-flex'>
                    Say Hi
                    <FaSmileWink className='home-icon' />
                </a>
            </div>
        </>
    )
}

export default Data