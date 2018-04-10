import React from 'react';

import HeadlineComponent from '../Headline/Headline.component';
import './Contact.css'

interface Props {
}

const Contact = (props: Props) => {  
  
  return (
    <div className="contact"> 
        <HeadlineComponent title="Contact" />
    </div>
  )};

export default Contact;