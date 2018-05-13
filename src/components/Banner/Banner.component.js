import React from 'react';

import HeadlineComponent from '../Headline/Headline.component';
import './Banner.css'

interface Props {
}

class Footer extends React.Component {
  render() {
    return (
      <div className="banner"> 
          <h1 className="banner-heading">DANEL<br /> TEMESGHEN</h1>
          <p className="banner-text">THOSE WHO DO <span className="textfix">NOT WANT TO <br  />
             IMITATE</span> ANYTHING, <br  />
             PRODUCE NOTHING. <br  />
             <span className="banner-shurda">Salvador Dali</span></p>
          {/* <iframe width="100%" height="60" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2Fdanel-dantrick-temesghen%2Fnubian-galaxy-episode-1-clouds-filled-with-questions%2F" frameborder="0" ></iframe> */}
      </div>
    )
  }
}
export default Footer;