import React from 'react';

const Viewer = (props) => (
  <div>
    <img src={props.imgUrl} alt="Smiley face" height="300" width="500"></img>
  </div>
)

export default Viewer;