import React from 'react';

const Viewer = (props) => (
  <div className="col-sm-8 col-md-8">
    <img src={props.imgUrl} alt="Smiley face" style={{"maxHeight":"300px", "maxWidth":"450px"}}></img>
  </div>
)

export default Viewer;