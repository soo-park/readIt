import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div className="col-md-4 col-lg-6">
    <div style={{ "color": "#000000"}}>
      <h4> Top { props.items.length } Image Analysis Result </h4>
      <p>It is possible that the image contains.. in ... probablity.</p>

      { props.items.map((item, idx) => <ListItem item={item} key={idx}/>)}
    </div>
  </div>
)

export default List;