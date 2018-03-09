import React from 'react';

import MenuComponent from '../Menu/Menu.component';
import OverlayComponent from '../Overlay/Overlay.component';
import './Header.css'

interface Props {
  menuClick: Function,
  menuClose: Function,
  overlayOpen: boolean,
  images: Object,
}

const Header = (props: Props) => {
  console.log(props.images, 'checking props');
  
  const style = {
    backgroundImage: props.images ?  `url(${props.images.acf.image})` : null,
    backgroundSize: 'cover',
  }
  
  const altStyle = {
    backgroundImage: 'url(https://img.wallpapersafari.com/desktop/1920/1080/28/77/hD2kRs.jpg)',
    backgroundSize: 'cover',
  }

  return(
  <div className="header" style={props.images ? style : altStyle}> 
    <MenuComponent menuClick={props.menuClick} />
    <OverlayComponent overlayOpen={props.overlayOpen} menuClose={props.menuClose} />
  </div>
)};

export default Header;