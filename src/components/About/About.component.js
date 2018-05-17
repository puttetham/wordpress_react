import React from 'react';

import HeadlineComponent from '../Headline/Headline.component';
import TextImageComponent from '../TextImage/TextImage.component';
import './About.css'

interface Props {
}

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      aboutInfo: [],
    }
  }

componentDidMount() {
    let dataURL = "http://dantrick.se/wp-json/wp/v2/about";
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          aboutInfo: res
    })
  })
 }

render() {
  const aboutInfoRender = this.state.aboutInfo.map((t, i) => (
    <div key={i} className="about-description">
      <p className="about-text">{t.acf.about}</p>
    </div>    
  ));

  
  return (
    <div className="about"> 
      <div className="about-container">
        {aboutInfoRender}
      </div>
    </div>
    )
  }
}

export default About;