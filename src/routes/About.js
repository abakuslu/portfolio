import React from 'react'
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import HeroProject from '../components/Hero/HeroProject';
import AboutContent from '../components/About/AboutContent';

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroProject heading='About' text='im a friendly devloper' />
      <AboutContent />
      <Footer />
    </div>
  );
}

export default About