import React from 'react';

import './Image.css'

interface Props {
}

if (props.images) {
  const style = {
    backgroundImage: this.props.images ?  `url(${this.props.images.acf.image})` : null,
    backgroundSize: 'cover',
  }
}

const Image = (props: Props) => {  
  return (
    <div className="image" style={style} />
  )
};

export default Image;