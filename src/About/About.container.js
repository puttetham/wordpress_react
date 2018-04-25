import React, { Component } from 'react';

import HeaderComponent from '../components/Header/Header.component';
import HeadlineComponent from '../components/Headline/Headline.component';
import FooterComponent from '../components/Footer/Footer.component';
import TextImageComponent from '../components/TextImage/TextImage.component';

import './About.css';


class About extends Component {
  constructor() {
    super();
    this.state = {
    }
  }
  
componentDidMount() {
    // let dataURL = "http://localhost:8888/wordpress_react/wp-json/wp/v2/images?_embed/";
    // fetch(dataURL)
    //   .then(res => res.json())
    //   .then(res => {
    //     console.log(res);
    //     this.setState({
    //       images: res
    //     })
    //   })
}

render() {
const heroImage = 'https://img.wallpapersafari.com/desktop/1920/1080/28/77/hD2kRs.jpg';
return (
      <div className="About">
        <HeaderComponent heroImage={heroImage} />
        <div className="grid-container outer-padding-box">
          {<HeadlineComponent title="About" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
          }
         <TextImageComponent />
         </div>
        <FooterComponent />
      </div>
    )
  }
}
export default About;