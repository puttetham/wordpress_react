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
          <div className="logo-container">
          <a className="contact-logo" href="https://www.instagram.com/dantricked/" target="_blank"><img src={instagram} alt="" /></a>
          <a className="contact-logo" href=""><img src={facebook} alt="" /></a>
          <a className="contact-logo" href="mailto:djdantrick@gmail.com"><img src={mailto} alt="" /></a>
          </div>
          <p className="copyright">Official website of <p className="djfoot">Dantrick</p>	&copy;</p>
      </div>
    )
  }
}
export default Footer;