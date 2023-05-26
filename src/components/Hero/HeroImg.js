import './heroimg.css'
import {useState} from 'react';
import IntroImg from '../../assets/intro-bg.jpg'
import {Link} from 'react-router-dom'
import CV from '../../assets/cv.pdf'

const HeroImg = () => {

  return (
    <div className='hero'>
      <div className='mask'>
        <img className='into-img' src={IntroImg} alt='introimg' />
      </div>
      <div className='content'>
        <p>HI, I'M A FREELANCER</p>
        <h1>REACT DEVELOPER.</h1>
        <div>
          <Link to='/project' className='btn'>
            Projects
          </Link>
          <Link
            to={CV}
            className='btn btn-light'
            download='CV Nurullah'
            target='_blank'
            rel='noreferrer'
          >
            Download CV
          </Link>
          
        </div>
      </div>
    </div>
  );
}

export default HeroImg