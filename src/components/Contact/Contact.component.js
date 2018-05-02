import React from 'react';

import HeadlineComponent from '../Headline/Headline.component';
import UpcomingDatesComponent from '../UpcomingDates/UpcomingDates.component';
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
      <HeadlineComponent title="Contact"/>
      <UpcomingDatesComponent dates={this.state.dates} />
    </div>
    )
  }
}
export default Contact;