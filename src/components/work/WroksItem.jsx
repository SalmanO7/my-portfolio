import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'

const WroksItem = ({ item }) => {
    return (
        <div className="work-card" key={item.id}>
            <img src={item.image} alt="" className='work-img' />
            <h3 className="work-title">{item.title}</h3>
            <a href="https://github.com/SalmanO7?tab=repositories" className='work-btn'>
                Explore <IoIosArrowRoundForward className='services-btn-icon' />
            </a>
        </div>
    )
}

export default WroksItem