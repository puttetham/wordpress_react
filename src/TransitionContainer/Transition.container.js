import React from 'react';


interface Props {
  title: string,
  description: string,
}

// const style = {
//   backgroundImage: this.props.images ?  `url(${this.props.images.acf.image})` : null,
//   backgroundSize: 'cover',
// }

const TransitionContainer = (props: Props) => {  
  return (
    <div className="landing-page"> 
      <div className="title-container">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </div>
  )};

export default TransitionContainer;