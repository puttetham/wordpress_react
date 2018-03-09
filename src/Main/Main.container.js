import React, { Component } from 'react';

import HeaderComponent from '../components/Header/Header.component';
import FooterComponent from '../components/Footer/Footer.component';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
      overlayOpen: false,
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

  const menuClick = () => {
    this.setState({
      overlayOpen: true,
    })
    document.body.classList.add('no-scroll');
  };

  const menuClose = () => {
    this.setState({
      overlayOpen: false,
    })
    document.body.classList.remove('no-scroll');
  };

return (
      <div className="main">
        <HeaderComponent images={this.state.images[0]} menuClick={menuClick} menuClose={menuClose} overlayOpen={this.state.overlayOpen} />
        <FooterComponent />
      </div>
    )
  }
}
export default Main;