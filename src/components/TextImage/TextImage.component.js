import React from 'react';

import AboutPhoto from '../../assets/shurda.jpg';
import './TextImage.css'

interface Props {
  title: string,
  colOne: Object,
  colTwo: Object
}

const TextImage = (props: Props) => {  

  const colOneData = [
    {
        img: AboutPhoto,
    },
  ]

  const colOneRender = colOneData.map((t, i) => (
    <div key={t} className="img-div">
        <img src={t.img} background='red'/>
    </div>
  ));

  
  return (
    <div className="text-image-wrapper"> 
      <div className="left">
        {colOneRender}
      </div>

      <div className="middle">
        <div className="flex-wrapper">
        <h1 className="about-headline">"THERE ARE PEOPLE WHO PLAY RECORDS AND THERE ARE DJ'S WHO BLOW MINDS."</h1>
        <p className="about-text">I'm Danel "Dantrick" Temesghen. A Dj based in Stocktown, Sweden. Lorem ipsum dolor sit amet, has ut integre discere platonem, ex ludus accumsan mandamus has, quot vivendo scripserit eu mel. His lobortis volutpat definitiones ex, mea mollis alienum vulputate ei. Fabellas instructior eos id, ut nulla semper omnium pri, utinam facilisis eos ex. Eam cu illum debet mediocritatem.</p>
        </div>
      </div>
    
    </div>
  )};

export default TextImage;