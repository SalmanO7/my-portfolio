import React from 'react'
import './ScrollUp.css'

const ScrollUp = () => {

    window.addEventListener('scroll', function(){
        const scrollUp = this.document.querySelector(".scroll-up");
        if(this.scrolly>= 560) scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove("show-scroll");
    })


    return (
        <a href='#' className='scroll-up'>
            <span className='scroll-up-icon'>K</span>
        </a>
    )
}

export default ScrollUp