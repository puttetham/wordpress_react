import React, { Component } from 'react';

import HeaderComponent from '../components/Header/Header.component';
import AboutComponent from '../components/About/About.component';
import MediaPlayer from '../components/MediaPlayer/MediaPlayer.component';
import NavbarComponent from '../components/Navbar/Navbar.component';
import GalleryComponent from '../components/Gallery/Gallery.component';
import MusicComponent from '../components/Music/Music.component';
import ContactComponent from '../components/Contact/Contact.component';
import FooterComponent from '../components/Footer/Footer.component';

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
  
// componentDidMount() {
//     let dataURL = "http://localhost:8888/wordpress_react/wp-json/wp/v2/images?_embed/";
//     fetch(dataURL)
//       .then(res => res.json())
//       .then(res => {
//         console.log(res, 'response');
//         this.setState({
//           images: res
//         })
//       })
//       this.onResize();
//       window.addEventListener('resize', this.onResize);
//   }

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

// kolla inspiration https://www.wix.com/website/templates/html/music/dj
render() {
 /*  if (this.winW > 450) {
    configureAnchors({offset: -72, scrollDuration: 400})
  } */
  
  
 /*  const style = {
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
    backgroundAttachment: 'center fixed',
  } */
  // const heroImage = 'https://pre00.deviantart.net/20fb/th/pre/f/2009/273/5/8/daft_punk_wallpaper_by_goblinfish.jpg';
return (
      <div className="main">
        <div className="content-container">
          <ScrollableAnchor id={'HeaderSection'}>
            <HeaderComponent heroImage={heroImage} images={this.state.images[0]} overlayOpen={this.state.overlayOpen} isMobile={this.state.isMobile}  />
          </ScrollableAnchor>

          <div className="flex-container">
            <ScrollableAnchor id={'AboutSection'}>
              <AboutComponent />
            </ScrollableAnchor>
           
            <ScrollableAnchor id={'GallerySection'}>
              <GalleryComponent />
            </ScrollableAnchor>
            
            <ScrollableAnchor id={'MusicSection'}>
             <MusicComponent />
            </ScrollableAnchor>
            
            <ScrollableAnchor id={'ContactSection'}>
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