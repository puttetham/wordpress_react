import React from 'react';

import HeadlineComponent from '../Headline/Headline.component';
import UpcomingDatesComponent from '../UpcomingDates/UpcomingDates.component';
import ContactFormComponent from '../ContactForm/ContactForm.component';
import './Contact.css'

interface Props {
}



class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      dates: [],
    }
  }
componentDidMount() {
    let dataURL = "http://localhost/wordpress/wp-json/wp/v2/dates";
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          dates: res
        })
        //console.log(this.state.dates);
      })
  }
render() {
return (
    <div className="contact">
      <div className="left-col">
        <UpcomingDatesComponent dates={this.state.dates} />
      </div>
      <div className="right-col">
        
        <ContactFormComponent />
      </div>
      
      
      {/* <ContactFormComponent /> */}
    </div>
    )
  }
}
export default Contact;