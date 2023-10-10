import React from 'react';

const Project = () => {
  return (
    <section className='myproject' id='project'>
      <hr />
      {/* 1st project */}
      <div className='project-container'>
        <div className='left-text-1'>
          I USE MY BACKGROUND IN <span className='architecture'>ARCHITECTURE</span> TO BUILD <span className='creative'>CREATIVE</span> TECH SOLUTIONS.
        </div>
        <div className='right-text-1'>
          <h2>LUXYPALACE</h2>
          <p>
            The LuxyPalace is an online e-commerce store with a difference. The project was made with react and django, An API was created using the django rest framework which
            interacts with the MySQL database. For the payment option the Stripe API was used to create a seemless transaction process. The record of the transaction
            details are stored both in the stripe dashboard and MySQL database.
          </p>
        </div>
        {/* 2nd project */}
        <div className='right-text-2'>
          <h2>JUKE</h2>
          <p>
            Unleash the power of our state-of-the-art Recommendation System to explore music tailored to your taste, creating a personalized musical journey. Get started with
            JUKE (an AI) that makes songs recommendations for you. Songs come from the Shazam API
          </p>
        </div>
        <div className='left-text-2'>
          I USE MY BACKGROUND IN <span className='architecture'>ARCHITECTURE</span> TO BUILD <span className='creative'>CREATIVE</span> TECH SOLUTIONS.
        </div>
        {/* 3rd project */}
        <div className='left-text-3'>
          I USE MY BACKGROUND IN <span className='architecture'>ARCHITECTURE</span> TO BUILD <span className='creative'>CREATIVE</span> TECH SOLUTIONS.
        </div>
        <div className='right-text-3'>
          <h2>REST COUNTRY API</h2>
          <p>
            A challenge from frontend mentor
          </p>
        </div>
      </div>
    </section>
  );
};

export default Project;
