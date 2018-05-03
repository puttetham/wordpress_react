import React from 'react';

import HeadlineComponent from '../Headline/Headline.component';
import TextImageComponent from '../TextImage/TextImage.component';
import './About.css'

interface Props {
}

class About extends React.Component {
  render() {
    return (
      <div className="about"> 
          {/* <TextImageComponent /> */}
          <div className="about-container">
            <p className="about-text">I'm Danel <span className="shurda">"Dantrick"</span> Temesghen. A DJ based in Stocktown, Sweden.</p>
          </div>
          
      </div>
    )
  }
}
export default About;