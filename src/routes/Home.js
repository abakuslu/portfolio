import React from 'react';
import Footer from '../components/Footer/Footer';
import HeroImg from '../components/Hero/HeroImg';
import Navbar from '../components/Navbar/Navbar';
import Work from '../components/AllProjects/Work';

const Home = () => {
  return (
    <div>
      <Navbar />

      <HeroImg />
      <Work />
      <Footer />
    </div>
  );
};

export default Home;
