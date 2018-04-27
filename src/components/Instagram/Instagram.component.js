import React from 'react';

import HeadlineComponent from '../Headline/Headline.component';
import './Instagram.css';
import Instafeed from 'react-instafeed';

interface Props {
  
}



class Instagram extends React.Component {
  render() {
    const instafeedTarget = 'instafeed';
    return (
      <div className="instagram" id={instafeedTarget}>
        <Instafeed
          limit='5'
          ref='instafeed'
          resolution='standard_resolution'
          sortBy='most-recent'
          target={instafeedTarget}
          userId='302005911'
          accessToken='302005911.1677ed0.6d2ed4dfcf6d429993689f328aa0da68'
          template='<img src="{{image}}" />'
        />
      </div>
    )
  }
}
export default Instagram;


// userId='302005911'
// accessToken='302005911.1677ed0.6d2ed4dfcf6d429993689f328aa0da68'

