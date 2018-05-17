import React, { Component } from 'react';

import MenuComponent from '../Menu/Menu.component';
import OverlayComponent from '../Overlay/Overlay.component';
import NavbarComponent from '../Navbar/Navbar.component';
import VideoComponent from '../Video/Video.component';
import ReactPlayer from 'react-player';
import IntroVid from '../../assets/danne2.mp4';

import './Header.css'

interface Props {
  menuClick: Function,
  menuClose: Function,
  overlayOpen: boolean,
  images: Object,
  heroImage: string,
  winW: number,
}

interface State {
  overlayOpen: boolean,
  isMobile: boolean,
}

class Header extends Component {
  constructor() {
    super();
    this.state = {
      overlayOpen: false,
    }
  }
  
  
render() {

  const menuClick = () => {
    this.setState({
      overlayOpen: true,
    })
    document.body.classList.add('no-scroll');
  };

  const menuClose = () => {
    this.setState({
      overlayOpen: false,
    })
    document.body.classList.remove('no-scroll');
  };

  const style = {
    backgroundImage: this.props.images ?  `url(${this.props.images.acf.image})` : null,
    backgroundSize: 'cover',
  }
  
return (
  <div className="header"> 
    <OverlayComponent overlayOpen={this.state.overlayOpen} menuClose={menuClose} />
    {!this.state.overlayOpen &&
      <MenuComponent menuClick={menuClick} />
    }
    <div className="hero">
      <VideoComponent src={IntroVid} />
      <div className="hero-text">
        <h1 className="header-Text">DANTRICK</h1>
        </div>
    </div>
  </div>
    )
  }
}
export default Header;