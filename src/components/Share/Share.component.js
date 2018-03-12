import React from 'react';

import './Share.css';

interface Props {
}

//https://simplesharebuttons.com/images/somacro/twitter.png

const Share = (props: Props) => (
  <div className="share">
    <p>Share on Social Media:</p>
    <div className="icons">
      <a href="" alt="Facebook">Facebook</a>
      <a href="" alt="Instagram">Instagram</a>
      <a href="" alt="Twitter">Twitter</a>
      <a href="" alt="Mail">Mail</a>
    </div>
  </div>
);

export default Share;