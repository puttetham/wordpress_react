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
  </div>
);

export default Overlay;