import React from 'react';

import HeadlineComponent from '../Headline/Headline.component';
import './Gallery.css'

interface Props {
  title: string,
  description: string,
}

const galleryImages = [
  {
    src: ''
  },
  {
    src: ''
  },
  {
    src: ''
  },
];

// const style = {
//   backgroundImage: `url(${image})`,
//   backgroundSize: 'cover',
//   backgroundAttachment: 'center fixed',
// }

const Gallery = (props: Props) => {  
  // const galleryRender = galleryImages.map((t,i) => (
  //   <div className="imageItem" style={{backgroundImage: `url(${image})`, backgroundSize: 'cover'}} key={t} />
  // ));
  return (
    <div className="gallery"> 
      {/* {galleryRender} */}
       <HeadlineComponent title="Gallery" />
    </div>
  )};

export default Gallery;