import React, { useState } from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosCodeWorking } from "react-icons/io";
import { IoIosCloseCircleOutline, IoIosCheckmarkCircleOutline } from "react-icons/io";
import { SiPolywork } from "react-icons/si";
import './Services.css';

const Services = () => {

    
    const [toggle, setToggle] = useState(0);

    const toggleTab = (index) => {
        setToggle(index);
    };

    return (
        <section className='services section' id='services'>
            <div className='serivces-head'>
                <h2 className='section-title'>Services</h2>
                <span className='section-subtitle'>My Services</span>
            </div>

            <div className='services-container container grid'>
                <div className='services-content'>
                    <div>
                        <SiPolywork className='services-icon' />
                        <h3 className='services-title'>UI / UX Designer</h3>
                    </div>
                    <span className='services-btn' onClick={() => toggleTab(1)}>View More
                        <IoIosArrowRoundForward className='services-btn-icon' />
                    </span>

                    <div className={toggle === 1 ? "services-modal active-modal" : "services-modal"}>
                        <div className='services-modal-content'>
                            <IoIosCloseCircleOutline className='serivce-modal-close' onClick={() => toggleTab(0)} />
                            <h3 className='services-modal-title'>UI/UX Designing</h3>
                            <p className="services-modal-description">As a passionate UI/UX designer, I focus on creating user-centered designs that are both visually appealing and highly functional.</p>
                            <ul className='services-modal-services grid'>
                                <li className="services-modal-service">
                                    <IoIosCheckmarkCircleOutline className='services-modal-icon' />
                                    <p className='services-modal-info'>Designing with the user's needs in mind.</p>
                                </li>
                                <li className="services-modal-service">
                                    <IoIosCheckmarkCircleOutline className='services-modal-icon' />
                                    <p className='services-modal-info'>Making websites look attractive and on-brand.</p>
                                </li>
                                <li className="services-modal-service">
                                    <IoIosCheckmarkCircleOutline className='services-modal-icon' />
                                    <p className='services-modal-info'>Checking if users find the website easy to use.</p>
                                </li>
                                <li className="services-modal-service">
                                    <IoIosCheckmarkCircleOutline className='services-modal-icon' />
                                    <p className='services-modal-info'>Making websites usable for people with disabilities.</p>
                                </li>
                                <li className="services-modal-service">
                                    <IoIosCheckmarkCircleOutline className='services-modal-icon' />
                                    <p className='services-modal-info'>Adding buttons and animations to engage users.</p>
                                </li>
                                <li className="services-modal-service">
                                    <IoIosCheckmarkCircleOutline className='services-modal-icon' />
                                    <p className='services-modal-info'>Choosing readable fonts and color schemes.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='services-content'>
                    <div>
                        <IoIosCodeWorking className='services-icon web-dev-icon' />
                        <h3 className='services-title'>Web Developer</h3>
                    </div>
                    <span className='services-btn' onClick={() => toggleTab(2)}>View More
                        <IoIosArrowRoundForward className='services-btn-icon' />
                    </span>

                    <div className={toggle === 2 ? "services-modal active-modal" : "services-modal"}>
                        <div className='services-modal-content'>
                            <IoIosCloseCircleOutline className='serivce-modal-close' onClick={() => toggleTab(0)} />
                            <h3 className='services-modal-title'>Web Development</h3>
                            <p className="services-modal-description">As an enthusiastic web developer, I specialize in building responsive and dynamic websites. With a strong foundation in HTML, CSS, and JavaScript, along with experience in React.js.</p>
                            <ul className='services-modal-services grid'>
                                <li className="services-modal-service">
                                    <IoIosCheckmarkCircleOutline className='services-modal-icon' />
                                    <p className='services-modal-info'>Ensuring websites look great on all devices.</p>
                                </li>
                                <li className="services-modal-service">
                                    <IoIosCheckmarkCircleOutline className='services-modal-icon' />
                                    <p className='services-modal-info'>Building interactive and appealing web pages.</p>
                                </li>
                                <li className="services-modal-service">
                                    <IoIosCheckmarkCircleOutline className='services-modal-icon' />
                                    <p className='services-modal-info'>Creating dynamic websites with modern frameworks.</p>
                                </li>
                                <li className="services-modal-service">
                                    <IoIosCheckmarkCircleOutline className='services-modal-icon' />
                                    <p className='services-modal-info'>Ensuring websites work on Chrome, Firefox, Safari, etc.</p>
                                </li>
                                <li className="services-modal-service">
                                    <IoIosCheckmarkCircleOutline className='services-modal-icon' />
                                    <p className='services-modal-info'>Tracking code changes and collaborating with others.</p>
                                </li>
                                <li className="services-modal-service">
                                    <IoIosCheckmarkCircleOutline className='services-modal-icon' />
                                    <p className='services-modal-info'>Finding and fixing website issues.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
