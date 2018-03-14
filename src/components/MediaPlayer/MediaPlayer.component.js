import React, { Component } from 'react';
import AudioPlayer from 'react-responsive-audio-player';
// import ReactAudioPlayer from 'react-audio-player';
import Controls from './Controls.component';
import './MediaPlayer.css';
class MediaPlayer extends Component {
  constructor() {
    super();
    this.state = {
     playing: false,
    }
  }
  
componentDidMount() {
}

render() {
  const playlist = [
    { 
      name: "We Were Young",
      artist: "Odesza",
      artwork: "https://funkadelphia.files.wordpress.com/2012/09/odesza-summers-gone-lp.jpg",
      duration: 192,
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/wwy.mp3"
    },
  ]
  // const controls = ['playpause', 'backskip', 'forwardskip', 'progressdisplay'];
 
return (
      <div className="media-player">
      {/* <h1>hello</h1>
      <AudioPlayer playlist={playlist} controls={controls} /> */}
        <div className="Background" style={{'backgroundImage': `url(${playlist.artwork})`, 'backgroundSize': 'cover'}}>
        </div>
        <div className="Header">
          <div className="Title">
            <p>Now playing</p>
            <p>{playlist.name}</p>
          </div>
        </div>
        <audio id="audio">
          <source src={playlist.src} type="audio/mpeg" />>
        </audio>
        <Controls playing={this.state.playing} />
        
      </div>
    )
  }
}
export default MediaPlayer;