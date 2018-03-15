import React, { Component } from 'react';

import HeaderComponent from '../components/Header/Header.component';
import HeadlineComponent from '../components/Headline/Headline.component';
import FooterComponent from '../components/Footer/Footer.component';
import MediaPlayer from '../components/MediaPlayer/MediaPlayer.component';


import './Main.css';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
      title: 'Lorem Title',
      description: 'Lorem text lorem text lorem text lorem text. Lorem text lorem text lorem text lorem text. Lorem text lorem text lorem text lorem text. Lorem text lorem text lorem text lorem text.'
    }
  }
  
componentDidMount() {
    let dataURL = "http://localhost:8888/wordpress_react/wp-json/wp/v2/images?_embed/";
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({
          images: res
        })
      })
  }

// kolla inspiration https://www.wix.com/website/templates/html/music/dj
render() {
  // const heroImage = 'https://pre00.deviantart.net/20fb/th/pre/f/2009/273/5/8/daft_punk_wallpaper_by_goblinfish.jpg';
return (
      <div className="main">
        <HeaderComponent images={this.state.images[0]} overlayOpen={this.state.overlayOpen}  />
        <div className="flex-container">
          {/* <HeadlineComponent title={this.state.title} description={this.state.description}/> */}
          <MediaPlayer />
        </div>
        {/* <FooterComponent /> */}
      </div>
    )
  }
}
export default Main;