import React from 'react';

import HeadlineComponent from '../Headline/Headline.component';
import './Contact.css'

interface Props {
}

class Contact extends React.Component {
  render() {
    return (
      <div className="contact"> 
          <HeadlineComponent title="Contact"/>
      </div>
    )
  }
}
export default Contact;