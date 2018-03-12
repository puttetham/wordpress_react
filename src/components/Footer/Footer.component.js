import React from 'react';

import MenuComponent from '../Menu/Menu.component';
import './Footer.css'
import ShareComponent from '../Share/Share.component';

interface Props {
}

const Footer = (props: Props) => {  
  return(
    <div className="footer-wrapper"> 
      <div className="hover-div">
        <h3>Footer</h3>
        <ShareComponent />
      </div>
    </div>
  )};

export default Footer;