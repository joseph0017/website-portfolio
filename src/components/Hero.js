import React from 'react';
import next from '../assets/next.png';
import { motion } from 'framer-motion';

const Hero = () => {
  const icon = {
  hidden: {
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)"
  },
  visible: {
    pathLength: 1,
    fill: "rgba(0, 0, 0, 1)"
  },
}
  const animateHome = {
  hidden: {
    opacity: 0,
    fill: "rgba(255, 255, 255, 0)"
  },
  visible: {
    opacity: 1,
    fill: "rgba(0, 0, 0, 1)",
    transition:{
                default: { duration: 2, ease: "easeInOut" },
                fill: { duration: 2, ease: [1, 0, 0.8, 1] }
              }
  }            
}
  return (
    <motion.section id='home'
    variants={animateHome}
            initial="hidden"
            animate="visible"

    >
      <div className='title'>
        <h1>SOFTWARE ENGINEER</h1>
      </div>
      <div className='hero-container'>
        <p className='text'>
          Hi, my name is Joseph Ogiku, I am a Software engineer based in Lagos, Nigeria. I specialize in Python and react.
        </p>
        <div className='hero-image'>
          <motion.svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 350 350'
            fill='#000000'
            className='star1'>
            <motion.path d='M322.6 187.4c-30.5-2.9-64.5 1.9-91.3-16.3-28-22.4-40.1-60.3-41.2-95.2-.6-16 2.2-31.9 2.7-47.8-2.8-12.7-20-7.5-18.1 4.7-6.2 61.9-16.1 138.9-88.8 154.5-9 1.8-36.4-1.9-49.6-3.4-5.2-.6-14 .7-13.7 7.4.2 4.8 5.9 7.8 12.8 8.8s23.5 2.5 36.3 4.3 32.6 10.3 47.9 17.7c30.7 13.2 50.2 51.9 49.5 85.8.8 7.1-4.3 17.9 5.2 20.7 12.9 3.1 11.8-12.4 14.5-20.6 3-10.9 6.1-21.7 9.5-32.4 8.6-34.3 36.5-60.2 70.4-69 22-5.8 45.5-3.2 51.7-4.2 7.9-.9 9.7-12.2 2.2-15zm-141.7 86.2c-8.1-25.5-28.1-53.6-51.6-64.9-8-4.2-16.4-7.6-24.9-10.9 40.6-13.4 63.4-42.2 73.7-81.8 9.6 35.6 32.5 71.9 70.5 80.6-33.6 13.3-58.9 42-67.7 77z'
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
                          default: { duration: 2, ease: "easeInOut" },
                          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                        }}
            ></motion.path>
          </motion.svg>
        </div>
      </div>
      <div className='next'>
        <img src={next} alt='next' className='next-image' />
      </div>
    </motion.section>
  );
};

export default Hero;
