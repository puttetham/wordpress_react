import React from 'react';

import HeadlineComponent from '../Headline/Headline.component';
import './Footer.css'

interface Props {
}

const Footer = (props: Props) => {  
  
  return (
    <div className="footer"> 
        <HeadlineComponent title="Footer" />
    </div>
  )};

export default Footer;