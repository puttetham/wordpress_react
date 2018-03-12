import React from 'react';

import './Headline.css'

interface Props {
  title: string,
  description: string,
  grid: string,
}

const Headline = (props: Props) => {  
  return (
    <div className="headline col-start-6-span-10"> 
      <h1>{props.title}</h1>
      {props.description && 
        <p>{props.description}</p>
      }
    </div>
  )};

export default Headline;