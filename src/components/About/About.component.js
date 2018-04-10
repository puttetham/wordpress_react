import React from 'react';

import HeadlineComponent from '../Headline/Headline.component';
import './About.css'

interface Props {
}

const About = (props: Props) => {  
  
  return (
    <div className="About"> 
        <HeadlineComponent title="About" description="Lorem test"/>
    </div>
  )};

export default About;