import React from 'react';
import ScrollDown from './ScrollDown';
import Social from './Social';
import Data from './Data';
import './Home.css'

const Home = () => {
return (
    <section className='home section' >
      <div className="home-container container grid">
        <div className='home-content grid'>
          <Social />
          <div className="home-img"></div>
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  )
}

export default Home