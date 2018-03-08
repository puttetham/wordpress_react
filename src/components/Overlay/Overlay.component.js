import React from 'react';

import './Overlay.css';

const Overlay = (props: Props) => (
  <div className={!props.overlayOpen ? 'overlay' : 'overlay active'}> 
  </div>
);

export default Overlay;