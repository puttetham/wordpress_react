import React from 'react';

import './Navbar.css'

interface Props {

}

const Navbar = (props: Props) => {
  const linkItems = [
    {
      href: '#HeaderSection',
      title: 'Start',
    },
    {
      href: '#AboutSection',
      title: 'About',
    },
    {
      href: '#GallerySection',
      title: 'Gallery',
    },
    {
      href: '#MusicSection',
      title: 'Music',
    },
    {
      href: '#ContactSection',
      title: 'Contact',
    },
  ];

  const linkRender = linkItems.map((t, i) => (
    <div key={t} className="link-item">
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