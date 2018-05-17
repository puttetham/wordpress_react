import React, { Component } from 'react';

import HeaderComponent from '../components/Header/Header.component';
import AboutComponent from '../components/About/About.component';
import MediaPlayer from '../components/MediaPlayer/MediaPlayer.component';
import NavbarComponent from '../components/Navbar/Navbar.component';
import GalleryComponent from '../components/Gallery/Gallery.component';
import MusicComponent from '../components/Music/Music.component';
import ContactComponent from '../components/Contact/Contact.component';
import FooterComponent from '../components/Footer/Footer.component';
import BannerComponent from '../components/Banner/Banner.component';
import MixcloudComponent from '../components/Mixcloud/Mixcloud.component';

import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor'

import Background from '../assets/nebula.jpg';

import heroImage from '../assets/boombox.jpeg';

import './Main.css';

class Main extends Component {
  constructor() {
    super();
    this.winW = window.innerWidth;
    this.state = {
      images: [],
      title: 'Lorem Title',
      description: 'Lorem text lorem text lorem text lorem text. Lorem text lorem text lorem text lorem text. Lorem text lorem text lorem text lorem text. Lorem text lorem text lorem text lorem text.',
      isMobile: false,
    }
  }
  
componentDidMount() {
      this.onResize();
      window.addEventListener('resize', this.onResize);
      configureAnchors({offset: 2, scrollDuration: 400})
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }
  
  onResize = () => {
    this.winW = window.innerWidth;

    if(this.winW <= 450) {
      this.setState({
        isMobile: true,
      })
    }

    if(this.winW > 450) {
      this.setState({
        isMobile: false,
      })
    }
  }

render() {

return (
      <div className="main">
        <div className="content-container">
          <ScrollableAnchor id={'start'}>
            <HeaderComponent heroImage={heroImage} images={this.state.images[0]} overlayOpen={this.state.overlayOpen} isMobile={this.state.isMobile}  />
          </ScrollableAnchor>
          <div className="flex-container">
            <BannerComponent />
            <ScrollableAnchor id={'about'}>
              <AboutComponent />
            </ScrollableAnchor>
            <MixcloudComponent />
            <ScrollableAnchor id={'gallery'}>
              <GalleryComponent />
            </ScrollableAnchor>
            <ScrollableAnchor id={'contact'}>
              <ContactComponent />
            </ScrollableAnchor>
            <FooterComponent />
          </div>
        </div>
      </div>
    )
  }
}
export default Main;