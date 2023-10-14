import React from 'react';

const JukeSkills = () => {
  return (
    <div>
      <div className='button-row-1'>
        <ul className='skill-button-1'>
          <li>
            <button>
              React
            </button>
          </li>
          <li>
            <button>
              JWT
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
              HTML5
            </button>
          </li>
        </ul>
      </div>
      <div className='button-row-2'>
        <ul className='skill-button-2'>
          <li>
            <button>
              DjangoRestframework
            </button>
          </li>
          <li>
            <button>
              Tailwind
            </button>
          </li>
          <li>
            <button>
              OpenAI
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default JukeSkills;
