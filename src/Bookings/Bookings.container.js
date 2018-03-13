import React, { Component } from 'react';

import HeaderComponent from '../components/Header/Header.component';
import HeadlineComponent from '../components/Headline/Headline.component';
import FooterComponent from '../components/Footer/Footer.component';
import TwoColumnTextComponent from '../components/TwoColumnText/TwoColumnText.component';
import './Bookings.css';


class Bookings extends Component {
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
      <div className="bookings">
        <HeaderComponent heroImage={heroImage} />
        <div className="grid-container outer-padding-box">
          <HeadlineComponent title="Kommande Spelningar" description="Lorem text lorem text lorem text lorem text. Lorem text lorem text lorem text lorem text. Lorem text lorem text lorem text lorem text. Lorem text lorem text lorem text lorem text."/>
          <TwoColumnTextComponent title="Column title"/>
        </div>
        <FooterComponent />
      </div>
    )
  }
}
export default Bookings;