import React from 'react';

import './TextImage.css'

interface Props {
  title: string,
  
  colOne: Object,
  colTwo: Object
}

const TextImage = (props: Props) => {  

  const colOneData = [
    {
        img: "https://www.jqueryscript.net/images/Simplest-Responsive-jQuery-Image-Lightbox-Plugin-simple-lightbox.jpg",
    }
  ]

  const colOneRender = colOneData.map((t, i) => (
    <div key={t} className="img">
        <img src={t.image} width='30%' height='auto' background='red'/>
    </div>
  ));

  
  return (
    <div className="text-image wrapper"> 
      <div className="colOne">
        {colOneRender}
      </div>
      <div className="textDiv"></div>
    </div>
  )};

export default TextImage;