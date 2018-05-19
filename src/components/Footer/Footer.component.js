import React from 'react';

import HeadlineComponent from '../Headline/Headline.component';
import instagram from '../../assets/insta.svg';
import facebook from '../../assets/facebook.svg';
import mailto from '../../assets/mailto.png';
import soundcloud from '../../assets/soundcloud.svg';
import './Footer.css'


interface Props {
}

class Footer extends React.Component {
  
  render() {
    
    return (
      <div className="footer"> 
          <div className="logo-container">
          <a className="contact-logo" href="https://soundcloud.com/danel-temesghen" target="_blank"><img src={soundcloud} alt="" /></a>
          <a className="contact-logo" href="https://www.instagram.com/dantricked/" target="_blank"><img src={instagram} alt="" /></a>
          <a className="contact-logo" href="https://www.facebook.com/danel.temesghen" target="_blank"><img src={facebook} alt="" /></a>
          </div>
          <p className="copyright">Official website of <p className="djfoot">Dantrick</p></p>
          <p className="copyright disclaimer">Copyright &copy; {(new Date().getFullYear())}</p>
        
      </div>
    )
  }
}
export default Footer;