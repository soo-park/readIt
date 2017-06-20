import React from 'react';

const Search = (props) => (
  <div>
    <input type="text" className="search-box" placeholder="Paste image URL here"/>
    <input type="button" className="button" value="Search" onClick={props.handleClick} />
  </div>
)

export default Search;