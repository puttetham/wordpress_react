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
          {/* <HeadlineComponent title="About"/> */}
          <TextImageComponent />
      </div>
    )
  }
}
export default About;