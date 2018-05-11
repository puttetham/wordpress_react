import React from 'react';

import './Menu.css'

interface Props {
  menuClick: Function,
  overlayOpen: boolean,
}

const Menu = (props: Props) => (
  <div className="menu" onClick={props.menuClick}> 
    <div className="line open" />
    <div className="line open" />
  </div>
);

export default Menu;