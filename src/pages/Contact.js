import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const Contact = () => {
  const animateContact = {
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
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_okrngza', 'template_1fj9i08', form.current, '4hQJ-fZnCTIxhkZU1')
      .then((result) => {
        if (result.status === 200) {
          alert('Thanks for reaching out, I will be in touch with you soon.');
          form.current.reset();
        }
        console.log(result);
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <motion.section
      className='contact-section'
      id='contact'
      variants={animateContact}
      initial='hidden'
      whileInView='visible'>
      <div className='connect'>
        <h1 className='let'>LET'S <span className='connection'>CONNECT</span></h1>
      </div>
      <div className='contact-text'>
        <p>
          If you ever want to say hi, or grab some virtual coffee, you can find me on social media or you can just send me a message right here.
        </p>
      </div>
      <form ref={form} onSubmit={sendEmail} className='contact-form'>
        <div className='form-inputs'>
          <input
            type='text'
            name='user_name'
            className='name'
            placeholder='name' />
          <input
            type='email'
            name='user_email'
            className='email'
            placeholder='email' />
          <textarea name='message' className='message' placeholder='message' />
        </div>
        <div className='submit-button'>
          <button type='submit' className='submit-message'>
            Submit
          </button>
        </div>
      </form>
      <div className='contact-text-2'>
        <a href='https://github.com/joseph0017' className='github'>GITHUB</a>
        <a href='https://www.linkedin.com/in/joseph-ogiku' className='linkedin'>LINKEDIN</a>
        <a href='https://web.facebook.com/joseph.ogiku.3' className='facebook'>FACEBOOK</a>
      </div>
    </motion.section>
  );
};

export default Contact;
