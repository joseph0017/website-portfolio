import React, { useState } from 'react';
import menu from '../assets/hamburger.png';
import { motion } from 'framer-motion';

const Navbar = () => {
  const animateNavbar = {
    hidden: {
      opacity: 0,
      fill: 'rgba(255, 255, 255, 0)'
    },
    visible: {
      opacity: 1,
      fill: 'rgba(0, 0, 0, 1)',
      transition: {
        default: { duration: 2, ease: 'easeInOut' },
        fill: { duration: 2, ease: [1, 0, 0.8, 1] }
      }
    }
  };
  const [navbar, setNavbar] = useState(false);
  return (
    <motion.nav className='navbar'
    >
      <section className='nav'>
        <div className='icon'>
          <button className='button-icon' onClick={() => {setNavbar(!navbar)}}>
            {navbar ? (
                <svg className='bullet' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='#000000'><path d='m13.41 12 6.29-6.29c.94-.94-.48-2.35-1.41-1.41L12 10.59 5.71 4.3c-.93-.93-2.35.48-1.41 1.41L10.59 12 4.3 18.29c-.94.94.48 2.35 1.41 1.41L12 13.41c6.12 6.12 6.74 7.26 7.71 6.29a.996.996 0 0 0 0-1.41L13.42 12Z'></path>
                </svg>     
            ) : (
               <img src={menu} alt='menu' className='menu' />
                )}    
          </button>
        </div>
        <motion.div className={`link ${navbar ? "block" : "hidden"}`}
        variants={animateNavbar}
    initial="hidden"
    whileInView="visible"
        >
                <ul className="links">
                    <li className='home' onClick={() => {setNavbar(!navbar)}}><a href="#home">home</a></li>
                    <li className='about' onClick={() => {setNavbar(!navbar)}}><a href="#about">about</a></li>
                    <li className='skills' onClick={() => {setNavbar(!navbar)}}><a href="#skills">skills</a></li>
                    <li className='project' onClick={() => {setNavbar(!navbar)}}><a href="#project">project</a></li>   
                    <li className='contact' onClick={() => {setNavbar(!navbar)}}><a href="#contact">contact</a></li>
                </ul>
        </motion.div>
      </section>
    </motion.nav>
  );
};

export default Navbar;
