import React from 'react';





interface Props {
}

const Footer = (props: Props) => {  

  const togglePlay = () => {
    let status = props.playing;
    let audio = document.getElementById('audio');
    console.log(status);
    audio.play();
    
    // console.log('playing');
    // if(status === true) {
    //   status = false; 
    //   audio.play();
    //   console.log(play);
    // } else {
    //   status = true;
    //   audio.pause();
    //   console.log(pause);
    // }
    // this.setState({ playStatus: status });
  }

  return(
    <div className="footer-wrapper"> 
     <div className="pause-play" onClick={togglePlay}><p>play</p></div>
    </div>
  )};

export default Footer;