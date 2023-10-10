import React from 'react';
import star from '../assets/star-4pt-5.svg';
import next from '../assets/next.png';

const Hero = () => {
  return (
    <section id='home'>
      <div className='title'>
        <h1>SOFTWARE ENGINEER</h1>
      </div>
      <div className='hero-container'>
        <p className='text'>
          Hi, my name is Joseph Ogiku, I am a Software engineer based in Lagos, Nigeria. I specialize in Python and react.
        </p>
        <div className='hero-image'>
          <img src={star} alt='star' className='star1' />
        </div>
      </div>
      <div className='next'>
        <img src={next} alt='next' className='next-image' />
      </div>
    </section>
  );
};

export default Hero;
