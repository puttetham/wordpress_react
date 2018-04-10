import React from 'react';

import HeadlineComponent from '../Headline/Headline.component';
import './Footer.css'

interface Props {
}

class Footer extends React.Component {
  render() {
    return (
      <div className="footer"> 
          <HeadlineComponent title="Footer" />
      </div>
    )
  }
}
export default Footer;