import React, { Component } from 'react';

import HeaderComponent from '../components/Header/Header.component';
import FooterComponent from '../components/Footer/Footer.component';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
    }
  }
  
componentDidMount() {
    let dataURL = "http://localhost:8888/wordpress_react/wp-json/wp/v2/images?_embed/";
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({
          images: res
        })
      })
  }

render() {

return (
      <div className="main">
        <HeaderComponent images={this.state.images[0]} overlayOpen={this.state.overlayOpen} />
        <FooterComponent />
      </div>
    )
  }
}
export default Main;