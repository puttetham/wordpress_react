import React from 'react';

import HeadlineComponent from '../Headline/Headline.component';
import './Instagram.css';
import Instafeed from 'react-instafeed';

interface Props {
  
}



class Instagram extends React.Component {

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const instafeedTarget = 'instafeed';
    return (
      <div className="instagram" id={instafeedTarget}>
        <Instafeed
          limit='12'
          ref='instafeed'
          resolution='standard_resolution'
          sortBy='most-recent'
          target={instafeedTarget}
          userId='302005911'
          accessToken='302005911.1677ed0.6d2ed4dfcf6d429993689f328aa0da68'
          template='<a class="instafeed" href="{{link}}" target="_blank" id="{{id}}"><img  class="instagram-img" src="{{image}}" /></a>'
        />
      </div>
    )
  }
}
export default Instagram;


// userId='302005911'
// accessToken='302005911.1677ed0.6d2ed4dfcf6d429993689f328aa0da68'


