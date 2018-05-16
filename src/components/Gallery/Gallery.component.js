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
      <iframe width="100%" height="60" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&hide_artwork=1&feed=%2Fdanel-dantrick-temesghen%2Fnubian-galaxy-episode-1-clouds-filled-with-questions%2F" frameborder="0" ></iframe>
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
