import React from 'react';

const ProjectVideo = ({ vid, site, githubRepo }) => {
  return (
    <div className='video-wrapper'>
      <video
        src={vid}
        autoPlay
        loop
        muted
        className='luxypalace'></video>
      <div className='hover-text'>
        <ul className='site-links'>
          <li className='live'>
            <a href={site}>VIEW LIVE</a>
          </li>
          <li className='git'>
            <a href={githubRepo}>GITHUB</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectVideo;
