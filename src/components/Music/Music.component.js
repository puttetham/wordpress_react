import React from 'react';

import HeadlineComponent from '../Headline/Headline.component';
import SoundcloudComponent from '../Soundcloud/Soundcloud.component';
import './Music.css'

interface Props {
}

class Music extends React.Component {
  render() {
    return (
      <div className="music"> 
          <HeadlineComponent title="Music"/>
      </div>
    )
  }
}
export default Music;