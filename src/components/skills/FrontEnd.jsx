import React from 'react'
import { IoCheckboxOutline } from "react-icons/io5";

const FrontEnd = () => {
    return (
        <div className='skills-content'>
            <h3 className='skills-title'>FrontEnd & Technology</h3>
            <div className='skills-box'>
                <div className='skills-group'>
                    <div className='skills-data'>
                        <IoCheckboxOutline className='skills-icon' />
                        <div>
                            <h3 className='skills-name'>HTML</h3>
                            <span className='skills-level'>Advanced</span>
                        </div>
                    </div>
                    <div className='skills-data'>
                        <IoCheckboxOutline className='skills-icon' />
                        <div>
                            <h3 className='skills-name'>CSS</h3>
                            <span className='skills-level'>Advanced</span>
                        </div>
                    </div>
                    <div className='skills-data'>
                        <IoCheckboxOutline className='skills-icon' />
                        <div>
                            <h3 className='skills-name'>JavaScript</h3>
                            <span className='skills-level'>Intermediate</span>
                        </div>
                    </div>
                    <div className='skills-data'>
                        <IoCheckboxOutline className='skills-icon' />
                        <div>
                            <h3 className='skills-name'>TypeScript</h3>
                            <span className='skills-level'>Intermediate</span>
                        </div>
                    </div>

                </div>
                <div className="skills-group">
                  
                    <div className='skills-data'>
                        <IoCheckboxOutline className='skills-icon' />
                        <div>
                            <h3 className='skills-name'>Next.js</h3>
                            <span className='skills-level'>Intermediate</span>
                        </div>
                    </div>
                    <div className='skills-data'>
                        <IoCheckboxOutline className='skills-icon' />
                        <div>
                            <h3 className='skills-name'>React.js</h3>
                            <span className='skills-level'>Intermediate</span>
                        </div>
                    </div>
                    <div className='skills-data'>
                        <IoCheckboxOutline className='skills-icon' />
                        <div>
                            <h3 className='skills-name'>TailwindCss</h3>
                            <span className='skills-level'>Intermediate</span>
                        </div>
                    </div>
                    <div className='skills-data'>
                        <IoCheckboxOutline className='skills-icon' />
                        <div>
                            <h3 className='skills-name'>Git</h3>
                            <span className='skills-level'>Intermediate</span>
                        </div>
                    </div>                                    
                </div>
            </div>
        </div>
    )
}

export default FrontEnd
