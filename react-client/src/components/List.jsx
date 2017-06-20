import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div className="col-sm-4 col-md-4" style={{ "backgroundColor": "#FFFFFF", "opacity": 0.5, "filter": "alpha(opacity=50)"}}>
    <div style={{ "color": "#000000"}}>
      <h4> Image Analysis Result </h4>
      Top { props.items.length } results
      { props.items.map((item, idx) => <ListItem item={item} key={idx}/>)}
    </div>
  </div>
)

export default List;