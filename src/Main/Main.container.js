import React, { Component } from 'react';

import HeaderComponent from '../components/Header/Header.component';
import AboutComponent from '../components/About/About.component';
import MediaPlayer from '../components/MediaPlayer/MediaPlayer.component';
import NavbarComponent from '../components/Navbar/Navbar.component';
import GalleryComponent from '../components/Gallery/Gallery.component';
import MusicComponent from '../components/Music/Music.component';
import ContactComponent from '../components/Contact/Contact.component';
import FooterComponent from '../components/Footer/Footer.component';

import Background from '../assets/nebula.jpg';

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
 /*  const style = {
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
    backgroundAttachment: 'center fixed',
  } */
  // const heroImage = 'https://pre00.deviantart.net/20fb/th/pre/f/2009/273/5/8/daft_punk_wallpaper_by_goblinfish.jpg';
return (
      <div className="main" >
        <div className="content-container">
          {/* <NavbarComponent /> */}
          <HeaderComponent images={this.state.images[0]} overlayOpen={this.state.overlayOpen}  />
          <div className="flex-container">
            <AboutComponent />
            {/* <HeadlineComponent title={this.state.title} description={this.state.description}/> */}
            <GalleryComponent />
            <MusicComponent />
            <ContactComponent />
            <FooterComponent />
           {/* <MediaPlayer /> */}
          </div>
          {/* <FooterComponent /> */}
        </div>
      </div>
    )
  }
}
export default Main;