import React, { Component } from 'react';
import Audio from 'react-audioplayer';
import ShareComponent from '../Share/Share.component';

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
    { 
      name: "We Were Young",
      img: "https://pre00.deviantart.net/20fb/th/pre/f/2009/273/5/8/daft_punk_wallpaper_by_goblinfish.jpg",
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/wwy.mp3"
    },
    { 
      name: "We Were Young",
      img: "https://funkadelphia.files.wordpress.com/2012/09/odesza-summers-gone-lp.jpg",
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/wwy.mp3"
    },
  ]
  const style = {
    height: '50px',
    width: '100px',
  }
return (
    <div className="media-player">
      {/*<Audio
        width={400}
        height={300}
        playlist={playlist}
        fullPlayer
        // style={style}
      /> */}
      <ShareComponent />
      <iframe width="400" height="200" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/245095911&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
    </div>
    )
  }
}
export default MediaPlayer;