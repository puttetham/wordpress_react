import React from 'react';

import HeadlineComponent from '../Headline/Headline.component';
import './Banner.css'

interface Props {
}

class Footer extends React.Component {
  render() {
    return (
      <div className="banner"> 
          <h1 className="banner-heading">DANEL<br /> TEMESGHEN</h1>
          <p className="banner-text">STOCKHOLM, SWEDEN.</p>
      </div>
    )
  }
}
export default Footer;