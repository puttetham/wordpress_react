import React, { Component } from 'react';
import Audio from 'react-audioplayer';



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
      img: "https://funkadelphia.files.wordpress.com/2012/09/odesza-summers-gone-lp.jpg",
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/wwy.mp3"
    },
  ]

  const style = {
    border: '',
  }
return (
    <div className="media-player">
      <Audio
        width={500}
        height={400}
        playlist={playlist}
        fullPlayer
        style={style}
      />
    </div>
    )
  }
}
export default MediaPlayer;