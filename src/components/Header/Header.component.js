import React from 'react';

import MenuComponent from '../Menu/Menu.component';
import OverlayComponent from '../Overlay/Overlay.component';
import './Header.css'

const Header = (props: Props) => (
  <div className="header"> 
    <MenuComponent menuClick={props.menuClick}/>
    <OverlayComponent overlayOpen={props.overlayOpen} />
  </div>
);

export default Header;