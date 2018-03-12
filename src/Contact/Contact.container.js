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
          <HeadlineComponent title="Kommande Spelningar" description="Lorem text lorem text lorem text lorem text. Lorem text lorem text lorem text lorem text. Lorem text lorem text lorem text lorem text. Lorem text lorem text lorem text lorem text."/>
        </div>
        <FooterComponent />
      </div>
    )
  }
}
export default Contact;