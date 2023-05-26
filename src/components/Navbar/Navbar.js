import React, {useState} from 'react';
import './navbar.css';
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa';

const Navbar = () => {
const [click,setClick]=useState(false);
const[color,setColor]=useState(false);
const handleClick = ()=> setClick(!click);
const changeColor = () =>{
    if(window.screenY >=100){
        setColor(true);
    }else{
        setColor(false)
    }
}

window.addEventListener('scroll',changeColor);
  return (
    <div className={color? 'header header-bg':'header'}>
      <Link to='/'>
        <h1>Nurullah</h1>
      </Link>

      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-menu-item'>
          <Link to='/'>Home</Link>
        </li>
        <li className='nav-menu-item'>
          <Link to='/project'>Project</Link>
        </li>
        {/* <li className='nav-menu-item'>
          <Link to='/about'>About</Link>
        </li> */}
        <li className='nav-menu-item'>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
      <div className='hamburger' onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{color: '#fff'}} />
        ) : (
          <FaBars size={20} style={{color: '#fff'}} />
        )}
      </div>
    </div>
  );
}

export default Navbar