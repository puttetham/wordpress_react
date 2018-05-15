import React from 'react';

import HeadlineComponent from '../Headline/Headline.component';
import InstagramComponent from '../Instagram/Instagram.component';
import './Gallery.css'


interface Props {
  title: string,
  description: string,
}



class Gallery extends React.Component {
  render() {
    return (
      <div className="flippos">
        <div id='container2'>
        Make 
        <div id='flip'>
          <div><div>WORK</div></div>
          <div><div>LIFE</div></div>
          <div><div>Everything</div></div>
        </div>
        AweSoMe!
      </div>
      <div className="gallery">
       
         <InstagramComponent />
      </div>
      </div>
    )
  }
}
export default Gallery;


// userId='302005911'
// accessToken='302005911.1677ed0.6d2ed4dfcf6d429993689f328aa0da68'

