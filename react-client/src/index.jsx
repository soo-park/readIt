import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Viewer from './components/Viewer.jsx';
import Search from './components/Search.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgUrl: '',
      items: []
    }
    this.handleClick = this.handleClick.bind(this)
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
        // when the data is received from the post request, change state
        this.setState(data)
      },
      error: (err) => {
        console.log('err');//, err);
      }
    });

  }

  render () {
    return (<div>
      <h1>What is on my image?</h1>
      <Search state={this.state} handleClick={this.handleClick}/>
      <Viewer imgUrl={this.state.imgUrl}/>
      <List items={this.state.items}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));