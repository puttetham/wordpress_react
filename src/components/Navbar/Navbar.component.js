import React from 'react';

import './Navbar.css'

interface Props {

}

const Navbar = (props: Props) => {
  const linkItems = [
    {
      href: '#HeaderSection',
      title: 'START',
      color: 'red',
    },
    {
      href: '#AboutSection',
      title: 'ABOUT',
      color: 'blue',
    },
    {
      href: '#GallerySection',
      title: 'GALLERY',
      color: 'orange',
    },
    {
      href: '#MusicSection',
      title: 'MUSIC',
      color: 'grey',
    },
    {
      href: '#ContactSection',
      title: 'CONTACT',
      color: 'black',
    },
  ];

  const linkRender = linkItems.map((t, i) => (
    <div key={i} className={`link-item ${t.color}`}>
      <a href={t.href}><p>{t.title}</p></a>
    </div>
  ));

  return (
    <div className="nav-bar"> 
      <div className="link-div">
        {linkRender}
      </div>
    </div>
  );
}

export default Navbar;