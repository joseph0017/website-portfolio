import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <section className='contact-section' id='contact'>
      <div className='connect'>
        <h1>LET'S <span>CONNECT</span></h1>
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
          <input type='submit' value='Send' className='submit-message' />
        </div>
      </form>
      <div className='contact-text-2'>
        <a href='https://github.com/joseph0017' className='github'>GITHUB</a>
        <a href='https://www.linkedin.com/in/joseph-ogiku' className='linkedin'>LINKEDIN</a>
        <a href='https://web.facebook.com/joseph.ogiku.3' className='facebook'>FACEBOOK</a>
      </div>
    </section>
  );
};

export default Contact;
