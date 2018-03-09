import React, { Component } from 'react';

import HeaderComponent from '../components/Header/Header.component';
import './Contact.css';

class Contact extends Component {
  constructor() {
    super();
    this.state = {
    }
  }
  
componentDidMount() {
}

render() {

const heroImage = 'http://images.wookmark.com/461981_wookmark.jpg';

return (
      <div className="contact">
        <HeaderComponent heroImage={heroImage}/>
      </div>
    )
  }
}
export default Contact;