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
  
  // const renderImage = props.images.map((image, index) => {
  //   return <div key={index}>
   
  //   <img src={image.acf.image} alt="" />
    
  //   </div>
  // });

  const style = {
    backgroundImage: props.images ?  `url(${props.images.acf.image})` : null,
  }
  
  return(
  <div className="header" style={style}> 
    {/* {renderImage} */}
    <MenuComponent menuClick={props.menuClick} />
    <OverlayComponent overlayOpen={props.overlayOpen} menuClose={props.menuClose} />
  </div>
)};

export default Header;