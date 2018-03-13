import React, { Component } from 'react';

import HeaderComponent from '../components/Header/Header.component';
import FooterComponent from '../components/Footer/Footer.component';
import HeadlineComponent from '../components/Headline/Headline.component';
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
        <div className="grid-container outer-padding-box">
          <HeadlineComponent title="Kontakt" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
        </div>
        <FooterComponent />
      </div>
    )
  }
}
export default Contact;