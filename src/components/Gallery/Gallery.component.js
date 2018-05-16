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
      <div className="flip-wrapper">
        <div id='container2'>
        <p className="flip-text">Follow me at</p> 
        <div id='flip'>
          <div><div>@dantricked</div></div>
          <div><div>Instagram</div></div>
        </div>
      </div>
      <div className="gallery">
         <InstagramComponent />
      </div>
      </div>
    )
  }
}
export default Gallery;
