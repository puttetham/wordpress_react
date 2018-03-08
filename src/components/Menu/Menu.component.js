import React from 'react';

import './Menu.css'

const Menu = (props: Props) => (
  <div className="menu" onClick={props.menuClick}> 
    <div className="line" />
    <div className="line" />
  </div>
);

export default Menu;