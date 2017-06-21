import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Viewer from './components/Viewer.jsx';
import Search from './components/Search.jsx';
import Chart from './components/d3Chart.jsx';
// import * as d3 from "d3";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgUrl: '',
      items: [],
      data: [
        { name: 'train', value: 99.89 },
        { name: 'railway', value: 99.75 },
        { name: 'transportation system', value: 99.59 },
        { name: 'station', value: 99.25 },
        { name: 'locomotive', value: 99.25 },
        { name: 'travel', value: 98.78 },
        { name: 'subway system', value: 98.16 },
        { name: 'commuter', value: 97.12 },
        { name: 'railroad track', value: 96.9 },
        { name: 'traffic', value: 96.87 },
        { name: 'blur', value: 96.67 },
        { name: 'platform', value: 96.24 },
        { name: 'urban', value: 96.07 },
        { name: 'no person', value: 95.86 },
        { name: 'business', value: 95.72 },
        { name: 'track', value: 94.94 },
        { name: 'city', value: 94.08 },
        { name: 'fast', value: 93.99 },
        { name: 'road', value: 93.12 },
        { name: 'terminal', value: 92.3 }
      ]
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  componentWillMount() {
    $.ajax({
      url: '/items', 
      success: (data) => {
        this.setState(data)
      },
      error: (err) => {
        console.log('err');//, err);
      }
    });
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  }

  handleClick() {
    // get inner html of the input box
    // clear up the input box
    var imageUrl = $('.search-box')[0].value;

    // make an ajax call with the input box data
    $.ajax({
      type: "POST",
      url: '/items/search',
      data: {'imageUrl': imageUrl},
      success: (data) => {
        // when the data is received from the post requedst, change state
        this.setState(data)
      },
      error: (err) => {
        console.log('err');//, err);
      }
    });

  }

  render () {
    return (<div>
      <Search state={this.state} handleClick={this.handleClick} handleKeyPress={this.handleKeyPress}/>
      <Viewer imgUrl={this.state.imgUrl}/>
      <Chart data={this.state.data}/>
      <List items={this.state.data}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));