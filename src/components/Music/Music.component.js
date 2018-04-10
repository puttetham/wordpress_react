import React from 'react';

import HeadlineComponent from '../Headline/Headline.component';
import './Music.css'

interface Props {
}

const Music = (props: Props) => {  
  
  return (
    <div className="Music"> 
        <HeadlineComponent title="Music" />
    </div>
  )};

export default Music;