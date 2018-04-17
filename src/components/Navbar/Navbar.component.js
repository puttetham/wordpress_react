import React from 'react';

import './Navbar.css'

interface Props {

}

const Navbar = (props: Props) => {
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
    <div key={i} className='link-item'>
      <a href={t.href} className={`${t.title}`}><p>{t.title}</p></a>
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