import React from 'react';

import './TwoColumnText.css'

interface Props {
  title: string,
  
  colOne: Object,
  colTwo: Object
}

const TwoColumnText = (props: Props) => {  

  const colOneData = [
    {
      place: "",
      date: "LoremDate",
    },
    {
      place: "Lorem",
      date: "LoremDate",
    },
    {
      place: "Lorem",
      date: "LoremDate",
    },
    {
      place: "Lorem",
      date: "LoremDate",
    },
  ]

  const colOneRender = colOneData.map((t, i) => (
    <div key={t} className="info">
      <p>{t.place}</p>
      <p>{t.date}</p>
    </div>
  ));

  
  return (
    <div className="two-column-text col-start-6-span-10"> 
      <h2>{props.title}</h2>
      <div className="colOne">
        {colOneRender}
      </div>
    </div>
  )};

export default TwoColumnText;