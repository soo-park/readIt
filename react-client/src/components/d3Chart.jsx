import React from 'react';

const Chart = (props) => {
  <div>
    <div id="wrapper">
    </div>
    <script src="http://d3js.org/d3.v3.min.js" charset="utf-8"></script>
    <script>
      {props.handleD3}
    </script>
  </div>
};


export default Chart;

