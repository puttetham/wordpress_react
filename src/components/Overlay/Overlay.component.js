import React from 'react';

import './Overlay.css';

interface Props {
  menuClose: Function,
  overlayOpen: boolean,
}

const Overlay = (props: Props) => (
  <div className={!props.overlayOpen ? 'overlay' : 'overlay active'}> 
    <div className="line-container" onClick={props.menuClose}>
      <div className="line close"/>
      <div className="line close"/>
    </div>
    {/* <div className="link-div">
      <a href="/"><h2>Start</h2></a>
      <a href="/bookings"><h2>Boka</h2></a>
      <a href="/contact"><h2>Kontakt</h2></a>
    </div> */}
  </div>
);

export default Overlay;