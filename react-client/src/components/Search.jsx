import React from 'react';

const Search = (props) => (
  <div style={{"paddingBottom": "10px", "paddingLeft": "20px"}}>
    <input type="text" className="search-box" placeholder="Paste image URL here"/>
    <input type="button" className="button btn btn-primary" value="Search" onClick={props.handleClick} />
  </div>
)

export default Search;