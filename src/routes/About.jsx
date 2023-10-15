import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import AboutContent from '../components/AboutContent/AboutContent'

const About = () => {
  return (
    <div>
      <Navbar />
      {/* <HeroCom heading="ABOUT" text="I'm a early stage web Developer" /> */}
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About

