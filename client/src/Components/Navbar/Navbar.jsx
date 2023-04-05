import React, { useState } from 'react';
//import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import Dropdown from '../DropDown/Dropdown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
      <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
        <img className="nv-image" src="rgs-img/white_logo.png" alt="" ></img>
          {/* <i class='fab fa-firstdraft' /> */} 
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/services'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Services <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/industry'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Industry
            </Link>
            
          </li>
          
          <li className='nav-item'>
            <Link
              to='/success'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Success Stories
            </Link>
          </li>

          <li className='nav-item'>
            <Link
              to='/career'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Career
            </Link>
          </li>


          <li className='nav-item'>
            <Link
              to='/blog'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Blog
            </Link>
          </li>

          <li className='nav-item'>
            <Link
              to='/about'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              About Us
            </Link>
          </li>

          
          <li className='nav-item'>
            <Link
              to='/contact'
              className='nav-links-data'
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </li>
  
          
       
        </ul>
        {/* {/* <Button />  */}
      </nav>
    </>
  )
};

export default Navbar;