import React from 'react';

import MenuComponent from '../Menu/Menu.component';
import OverlayComponent from '../Overlay/Overlay.component';
import './Header.css'

interface Props {
  menuClick: Function,
  menuClose: Function,
  overlayOpen: boolean,
}

const Header = (props: Props) => (
  <div className="header"> 
    <MenuComponent menuClick={props.menuClick} />
    <OverlayComponent overlayOpen={props.overlayOpen} menuClose={props.menuClose} />
  </div>
);

export default Header;