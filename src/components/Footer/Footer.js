import React from 'react';
import './footer.css';
import {FaFacebook, FaGithub, FaLinkedin} from 'react-icons/fa';
import {Link} from 'react-router-dom';

const Footer = () => {
  const d = new Date().getFullYear();
  return (
    <footer>
      <div className='social-links'>
        <Link
          to='https://www.facebook.com/nurullah.ozdemir.940/'
          className='linkss'
        >
          <FaFacebook className='social' />
        </Link>

        <Link to=' https://www.linkedin.com/in/nurullah-ozdemir/'>
          <FaLinkedin className='social' />
        </Link>

        <Link to='https://www.facebook.com/nurullah.ozdemir.940/'>
          <FaGithub className='social' />
        </Link>
      </div>
      <div className='footer-bottom'>
        <span>{`© ${d} Nurullah Ozdemir. All rights reserved.`}</span>
        <p></p>
      </div>
    </footer>
  );
};

export default Footer;
