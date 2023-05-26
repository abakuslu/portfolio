import React from 'react'
import Work from '../components/AllProjects/Work';
import Footer from '../components/Footer/Footer';
import HeroProject from '../components/Hero/HeroProject';
import Navbar from '../components/Navbar/Navbar';

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroProject heading='PROJECTS.' text='Some of my recent works'/>
      <Work />
      <Footer />
    </div>
  )
}

export default Project