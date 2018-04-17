import React from 'react';

import './Overlay.css';

interface Props {
  menuClose: Function,
  overlayOpen: boolean,
}

const Overlay = (props: Props) => {
  const linkItems = [
    {
      href: '#HeaderSection',
      title: 'START',
    },
    {
      href: '#AboutSection',
      title: 'ABOUT',
    },
    {
      href: '#GallerySection',
      title: 'GALLERY',
    },
    {
      href: '#MusicSection',
      title: 'MUSIC',
    },
    {
      href: '#ContactSection',
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