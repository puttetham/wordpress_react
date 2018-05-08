import React from 'react';

import HeadlineComponent from '../Headline/Headline.component';
import instagram from '../../assets/insta.svg';
import facebook from '../../assets/facebook.svg';
import mailto from '../../assets/mailto.svg';
import './Footer.css'


interface Props {
}

class Footer extends React.Component {
  render() {
    return (
      <div className="footer"> 
          <p>Official website of DJ Dantrick</p>
          <div className="logo-container">
          <a className="contact-logo" href=""><img src={instagram} alt="" /></a>
          <a className="contact-logo" href=""><img src={facebook} alt="" /></a>
          <a className="contact-logo" href=""><img src={mailto} alt="" /></a>
          </div>
          
      </div>
    )
  }
}
export default Footer;