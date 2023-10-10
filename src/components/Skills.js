import React from 'react';

const Skills = () => {
  return (
    <section className='toolkit' id='skills'>
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
    </section>
  );
};

export default Skills;
