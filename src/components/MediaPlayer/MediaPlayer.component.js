import React, { Component } from 'react';
import AudioPlayer from 'react-responsive-audio-player';
// import ReactAudioPlayer from 'react-audio-player';
import './MediaPlayer.css';
class MediaPlayer extends Component {
  constructor() {
    super();
    this.state = {
    }
  }
  
componentDidMount() {
}

render() {
  const playlist =
  [
    { 
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      title: 'Track 1 by Some Artist' 
    },
    { 
     url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
     title: 'Some Other Artist - Track 2' 
    }
  ];

  const controls = ['playpause', 'backskip', 'forwardskip', 'progressdisplay'];
  
return (
      <div className="media-player">
      <h1>hello</h1>
      <AudioPlayer playlist={playlist} controls={controls} />
      </div>
    )
  }
}
export default MediaPlayer;