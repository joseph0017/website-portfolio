import React from 'react';
import { motion } from 'framer-motion';
import luxypalace from '../assets/luxypalace.mp4';
import juke from '../assets/juke.mp4';
import country from '../assets/country.mp4';
import ProjectVideo from '../components/Video';
import LuxyPalaceSkills from '../components/LuxyPalaceSkills';
import JukeSkills from '../components/JukeSkills';
import CountrySkills from '../components/CountrySkills';
import MiniContainer from '../components/MiniContainer';

const Project = () => {
  const animateProjects = {
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
    <section className='myproject' id='project'>
      <div className='me'>
        <p>
          MY PROJECTS
        </p>
      </div>
      <hr />
      {/* 1st project */}
      <div className='project-container'>
        <motion.div
          className='left-text-1'
          variants={animateProjects}
          initial='hidden'
          whileInView='visible'>
          <ProjectVideo vid={luxypalace} site='https://650a4eb818794a718c56cbb6--candid-paprenjak-5ba633.netlify.app/' githubRepo='https://github.com/joseph0017/LuxyPalace'
          />
        </motion.div>
        <motion.div
          className='right-text-1'
          variants={animateProjects}
          initial='hidden'
          whileInView='visible'>
          <h2>LUXYPALACE</h2>
          <p>
            The LuxyPalace is an online e-commerce store with a difference. The project was made with react and django, An API was created using the django rest framework which
            interacts with the MySQL database. For the payment option the Stripe API was used to create a seemless transaction process. The record of the transaction
            details are stored both in the stripe dashboard and MySQL database.
          </p>
          <LuxyPalaceSkills />
          <MiniContainer />
        </motion.div>
        {/* 2nd project */}
        <motion.div
          className='right-text-2'
          variants={animateProjects}
          initial='hidden'
          whileInView='visible'>
          <h2>JUKE</h2>
          <p>
            Unleash the power of our state-of-the-art Recommendation System to explore music tailored to your taste, creating a personalized musical journey. Get started with
            JUKE (an AI) that makes songs recommendations for you. Songs come from the Shazam API
          </p>
          <JukeSkills />
          <MiniContainer />
        </motion.div>
        <motion.div
          className='left-text-2'
          variants={animateProjects}
          initial='hidden'
          whileInView='visible'>
          <ProjectVideo vid={juke} site='https://stalwart-travesseiro-726570.netlify.app/' githubRepo='https://github.com/joseph0017/juke' />
        </motion.div>
        {/* 3rd project */}
        <motion.div
          className='left-text-3'
          variants={animateProjects}
          initial='hidden'
          whileInView='visible'>
          <ProjectVideo vid={country} site='https://moonlit-sopapillas-07364e.netlify.app/' githubRepo='https://github.com/joseph0017/rest-country' />
        </motion.div>
        <motion.div
          className='right-text-3'
          variants={animateProjects}
          initial='hidden'
          whileInView='visible'>
          <h2>REST COUNTRY API</h2>
          <p className='mentor'>
            An application that gets all the details you need to know about any country in the world. The data comes from REST Countries API. shout out to matt from frontendmentor
            as I enjoyed working on this application. This is a challenge from frontend mentor.
          </p>
          <CountrySkills />
          <MiniContainer />
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
