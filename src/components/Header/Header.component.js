import React, { Component } from 'react';

import MenuComponent from '../Menu/Menu.component';
import OverlayComponent from '../Overlay/Overlay.component';
import NavbarComponent from '../Navbar/Navbar.component';
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

  // const altStyle = {
  //   backgroundImage: `url(${this.props.heroImage})`,
  //   backgroundRepeat: 'no-repeat',
  //   backgroundAttachment: 'fixed',
  //   backgroundPosition: 'center',
  //   backgroundSize: '500px auto'
  // }
  
return (
  <div className="header"> 
  <OverlayComponent overlayOpen={this.state.overlayOpen} menuClose={menuClose} />
    {!this.state.overlayOpen &&
      <MenuComponent menuClick={menuClick} />
    }
    <div className="hero">
    <ReactPlayer url={IntroVid} playing loop muted width='100vw' height='100vh'/>
      <div class="hero-text">
        <h1>DANTRICK</h1>
        <h2>Stockholm, Sweden</h2>
      </div>
    </div>
  </div>
    )
  }
}
export default Header;