import React from 'react';
import next from '../assets/next.png';
import { motion } from 'framer-motion';

const Hero = () => {
  const animateHome = {
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
  return (
    <motion.section
      id='home'
      variants={animateHome}
      initial='hidden'
      animate='visible'
      className='home-section'>
      <div className='title-container'>
        <div className='title'>
          <h1>SOFTWARE ENGINEER,</h1>
        </div>
      </div>
      <div className='frontend'>
        <h1>FULLSTACK DEVELOPER</h1>
      </div>
      <div className='hero-container'>
        <p className='text'>
          Hi, my name is Joseph Ogiku, I am a Software engineer based in Lagos, Nigeria. I specialize in Python and react.
        </p>
      </div>
      <div className='next'>
        <img src={next} alt='next' className='next-image' />
        <img src={next} alt='next' className='next-image' />
      </div>
    </motion.section>
  );
};

export default Hero;
