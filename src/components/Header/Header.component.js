import React from 'react';

import MenuComponent from '../Menu/Menu.component';
import OverlayComponent from '../Overlay/Overlay.component';
import './Header.css'

interface Props {
  menuClick: Function,
  menuClose: Function,
  overlayOpen: boolean,
  images: Array<Object>,
}

const Header = (props: Props) => {
  console.log(props.images, 'checking props');
  
  // const renderImage = props.images.map((image, index) => {
  //   return <div key={index}>
   
  //   <img src={image.acf.image} alt="" />
    
  //   </div>
  // });
  
  return(
  <div className="header"> 
    {/* {renderImage} */}
    <MenuComponent menuClick={props.menuClick} />
    <OverlayComponent overlayOpen={props.overlayOpen} menuClose={props.menuClose} />
  </div>
)};

export default Header;