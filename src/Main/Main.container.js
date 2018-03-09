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
  const heroImage = 'https://pre00.deviantart.net/20fb/th/pre/f/2009/273/5/8/daft_punk_wallpaper_by_goblinfish.jpg';
return (
      <div className="main">
        <HeaderComponent images={this.state.images[0]} overlayOpen={this.state.overlayOpen} heroImage={heroImage} />
        <FooterComponent />
      </div>
    )
  }
}
export default Main;