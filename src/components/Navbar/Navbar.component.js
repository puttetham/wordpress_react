import React from 'react';

import './Navbar.css'

interface Props {

}

const Navbar = (props: Props) => {
  const linkItems = [
    {
      href: '/',
      title: 'Start',
    },
    {
      href: '/bookings',
      title: 'Booking',
    },
    {
      href: '/contact',
      title: 'Contact',
    },
    {
      href: '/about',
      title: 'About',
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