import React from 'react';

import './Share.css';

interface Props {
}

//https://simplesharebuttons.com/images/somacro/twitter.png

const Share = (props: Props) => (
  <div className="share">
    Share on Social Media:
    <div className="icons">
      <a href="" alt="">Facebook</a>
      <a href="" alt="">Instagram</a>
      <a href="" alt="">Twitter</a>
      <a href="" alt="">Mail</a>
    </div>
  </div>
);

export default Share;