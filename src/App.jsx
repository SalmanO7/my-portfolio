import React from 'react'
import Header from './components/header/Header';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import About from './components/about/About';
import Services from './components/services/Services';
import Work from './components/work/Work';
// import Qualification from './components/qualification/Qualification';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollUp/ScrollUp';
import './App.css'

const App = () => {
  return (
    <>
      <Header />

      <main className='main'>
        <Home />
        {<About />}
        {<Skills />}
        {<Services />}
        {/* { <Qualification/> } */}
        {<Work />}
        {<Contact />}
      </main>
      {<Footer />}
      <ScrollUp />
    </>
  )
}

export default App