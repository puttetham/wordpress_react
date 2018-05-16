import React from 'react';

import './Mixcloud.css'

interface Props {
}

const Mixcloud = (props: Props) => {  
  return (
    <div className="mixcloud"> 
      <iframe width="100%" height="60" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&hide_artwork=1&feed=%2Fdanel-dantrick-temesghen%2Fnubian-galaxy-episode-1-clouds-filled-with-questions%2F" frameborder="0" ></iframe>
    </div>
  )};

export default Mixcloud;