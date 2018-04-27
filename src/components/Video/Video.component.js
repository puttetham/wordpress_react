import React from 'react';

import './Video.css';

interface Props {
  src: string,
 
}

export const Video = (props: Props) => {
  

  return (
    <div className='video-player'>
      <video
        autoPlay
        loop
        muted
        playsInline
        webkit-playsinline="true"
      >
        <source src={props.src} type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;