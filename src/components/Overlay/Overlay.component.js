import React from 'react';

import './Overlay.css';

interface Props {
  menuClose: Function,
  overlayOpen: boolean,
}

const Overlay = (props: Props) => {
  const linkItems = [
    {
      href: '#start',
      title: 'START',
    },
    {
      href: '#about',
      title: 'ABOUT',
    },
    {
      href: '#gallery',
      title: 'GALLERY',
    },
    {
      href: '#contact',
      title: 'CONTACT',
    },
  ];

  const linkRender = linkItems.map((t, i) => (
    <div key={i} className="link-item" onClick={props.menuClose}>
      <a href={t.href}><p className="mobile-item">{t.title}</p></a>
    </div>
  ));

  return(
    <div className={!props.overlayOpen ? 'overlay' : 'overlay active'}> 
    <div className="line-container" onClick={props.menuClose}>
      <div className="line close"/>
      <div className="line close"/>
    </div>
    <div className="mobile-links">
     {linkRender}
    </div>
  </div>
  )
}
  
  


export default Overlay;