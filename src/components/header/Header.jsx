import React, { useState } from 'react'
import { CiHome, CiFileOn, CiImageOff, CiUser } from "react-icons/ci";
import { TiBriefcase, TiMessage } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";
import { BsMenuButtonWide } from "react-icons/bs";
import Logo from '../../assets/logo.jpg';
import './Header.css'



const Header = () => {

    const [toggle, showMenu] = useState(false);


    return (
        <header className='header'>
            <nav className='nav container'>
                <a href="#" className='nav-logo'>
                    <img src={Logo} alt="HEader Logo" className='headLogo' />
                </a>
                <div className={toggle ? "nav-menu show-menu" : "nav-menu"}>
                    <ul className="nav-list grid" >
                        <li className="nav-item">
                            <a href='#' className='nav-link'>
                                <CiHome className='nav-icon' />
                                Home</a>
                        </li>
                        <li className="nav-item">
                            <a href='#about' className='nav-link'>
                                <CiUser className='nav-icon' />
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href='#skills' className='nav-link'>
                                <CiFileOn className='nav-icon' />
                                Skills
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href='#services' className='nav-link'>
                                <TiBriefcase className='nav-icon' />
                                Services
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href='#portfolio' className='nav-link'>
                                <CiImageOff className='nav-icon' />
                                PortFolio
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href='#contact' className='nav-link'>
                                <TiMessage className='nav-icon' />
                                Contact
                            </a>
                        </li>
                    </ul>
                    <IoMdClose className='nav-close' onClick={() => showMenu(!toggle)} />
                </div>
                <div className="nav-toggle" onClick={() => showMenu(!toggle)}>
                    <BsMenuButtonWide className='nav-toggle' />
                </div>
            </nav>
        </header>
    )
}

export default Header
