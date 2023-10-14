import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const animateToolkit = {
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
      className='toolkit'
      id='skills'
      variants={animateToolkit}
      initial='hidden'
      whileInView='visible'>
      <div className='me'>
        <p>
          MY TOOLKIT
        </p>
      </div>
      <hr />
      <div className='button-rows'>
        <div className='button-row-1'>
          <ul className='skill-button-1'>
            <li>
              <button>
                React
              </button>
            </li>
            <li>
              <button>
                Python
              </button>
            </li>
            <li>
              <button>
                Django
              </button>
            </li>
            <li>
              <button>
                MySQL
              </button>
            </li>
            <li>
              <button>
                Nodejs
              </button>
            </li>
          </ul>
        </div>
        <div className='button-row-2'>
          <ul className='skill-button-2'>
            <li>
              <button>
                Redux
              </button>
            </li>
            <li>
              <button>
                MongoDB
              </button>
            </li>
            <li>
              <button>
                Tailwind
              </button>
            </li>
            <li>
              <button>
                SCSS
              </button>
            </li>
            <li>
              <button>
                Stripe
              </button>
            </li>
          </ul>
        </div>
        <div className='button-row-2'></div>
      </div>
    </motion.section>
  );
};

export default Skills;
