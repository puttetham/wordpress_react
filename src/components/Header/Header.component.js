import React, { Component } from 'react';

import MenuComponent from '../Menu/Menu.component';
import OverlayComponent from '../Overlay/Overlay.component';
import './Header.css'

interface Props {
  menuClick: Function,
  menuClose: Function,
  overlayOpen: boolean,
  images: Object,
  heroImage: string,
}

interface State {
  overlayOpen: boolean,
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

  const altStyle = {
    backgroundImage: `url(${this.props.heroImage})`,
    backgroundSize: 'cover',
  }
  
return (
  <div className="header" style={this.props.images ? altStyle : altStyle}> 
    <MenuComponent menuClick={menuClick} />
    <OverlayComponent overlayOpen={this.state.overlayOpen} menuClose={menuClose} />
  </div>
    )
  }
}
export default Header;