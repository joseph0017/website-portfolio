import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const animateAbout = {
    hidden: {
      opacity: 0,
      fill: 'rgba(255, 255, 255, 0)'
    },
    visible: {
      opacity: 1,
      fill: 'rgba(0, 0, 0, 1)',
      transition: {
        default: { duration: 1.5, ease: 'easeInOut' },
        fill: { duration: 1.5, ease: [1, 0, 0.8, 1] }
      }
    }
  };
  return (
    <motion.section
      className='aboutme'
      id='about'
      variants={animateAbout}
      initial='hidden'
      whileInView='visible'>
      <div className='me'>
        <p>
          ABOUT ME
        </p>
      </div>
      <hr />
      <div className='about-container'>
        <div className='left-text'>
          I USE MY BACKGROUND IN <span className='architecture'>ARCHITECTURE</span> TO BUILD <span className='creative'>CREATIVE</span> TECH SOLUTIONS.
        </div>
        <div className='right-text'>
          Thanks for getting this far, I graduated from the University of Benin(UNIBEN) with a B.Sc in architecture, and graduated from software engineering, Holberton school
          (cohort 9) with a specialization in frontend. I am however skilled in the backend as well.
          <div className='right-text'>
            I am extremely comfortable working on the backend or the frontend of the application, my expertise lies in react and django, but I can use other frontend frameworks
            such as Next Js, and MongoDB for the backend. I enjoy writing readable and maintainable codes for my applications, while creating beautiful user interfaces.
          </div>
          <div className='right-text'>
            When I am not coding, you will often find me playing chess, as there is no other game I think I love more, and listening to music.
          </div>
        </div>
      </div>
    </motion.section>

  );
};

export default About;
