import React, { Component } from 'react';

import HeaderComponent from '../components/Header/Header.component';
import './Bookings.css';

class Bookings extends Component {
  constructor() {
    super();
    this.state = {
      
    }
  }
  
componentDidMount() {
    // let dataURL = "http://localhost:8888/wordpress_react/wp-json/wp/v2/images?_embed/";
    // fetch(dataURL)
    //   .then(res => res.json())
    //   .then(res => {
    //     console.log(res);
    //     this.setState({
    //       images: res
    //     })
    //   })
}

render() {

return (
      <div className="bookings">
        <HeaderComponent />
      </div>
    )
  }
}
export default Bookings;