import React from 'react';

import './Text.css'

interface Props {
  title: string,
  description: string,
}

const Text = (props: Props) => {  
  return (
    <div className="text"> 
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  )};

export default Text;