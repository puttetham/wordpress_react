import React from 'react';

import './Share.css';
import SoundCloud from '../../assets/soundcloud.svg';
import Instagram from '../../assets/instagram.svg';
import Spotify from '../../assets/spotify.svg';

interface Props {
}

//https://simplesharebuttons.com/images/somacro/twitter.png

//TODO adda soundcloud, beatport, ev. spotify, ändra länkarna så man kommer till shurdas IG FB osv
//www.flaticon.com
const Share = (props: Props) => (
  <div className="share">
    <div className="icons">
      <a href=""><img src={SoundCloud} alt="" /></a>
      <a href=""><img src={Spotify} alt="" /></a>
      <a href=""><img src={Instagram} alt="" /></a>
    </div>
  </div>
);

export default Share;