import React, { Component } from 'react';

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
<<<<<<< HEAD
     
=======
    
>>>>>>> 72b4b34073aadee405fca295b805bb8fd0ae68b1
      <ShareComponent />
      {/* <iframe allowtransparency="true" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/icon/?url=http%3A%2F%2Fsoundcloud.com%2Fthe-bugle&color=orange_white&size=32" style={style}></iframe> */}
    </div>
    )
  }
}
export default MediaPlayer;