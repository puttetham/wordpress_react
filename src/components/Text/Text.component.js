import React from 'react';

import MenuComponent from '../Menu/Menu.component';
import './Text.css'

interface Props {
  title: string,
  description: string,
}

const Footer = (props: Props) => {  
  return(
    <div className="text"> 
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  )};

export default Footer;