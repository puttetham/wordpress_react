import React from 'react';

import './Share.css';
import FacebookLogo from '../../assets/facebook.svg';
import InstagramLogo from '../../assets/instagram.svg';
import TwitterLogo from '../../assets/twitter.svg';

interface Props {
}

//https://simplesharebuttons.com/images/somacro/twitter.png

//TODO adda soundcloud, beatport, ev. spotify, ändra länkarna så man kommer till shurdas IG FB osv

const Share = (props: Props) => (
  <div className="share">
    <p>Check me out</p>
    <div className="icons">
      <a href=""><img src={FacebookLogo} alt="" /></a>
      <a href=""><img src={InstagramLogo} alt="" /></a>
      <a href=""><img src={TwitterLogo} alt="" /></a>
      
    </div>
  </div>
);

export default Share;