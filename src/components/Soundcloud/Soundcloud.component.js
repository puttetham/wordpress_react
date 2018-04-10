import React from 'react';

import './Soundcloud.css'

interface Props {
 
}

const Soundcloud = (props: Props) => {  
  return (
    <div className="soundcloud"> 
      <div className="iframe-wrapper">
        <iframe width="400" height="400" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/197591238&color=%2311161f&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true"></iframe>
      </div>
    </div>
  )};

export default Soundcloud;