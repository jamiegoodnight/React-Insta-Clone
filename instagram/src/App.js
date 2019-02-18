import React, { Component } from 'react';

import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'
import dummyData from './dummy-data'
import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state={
      dummy: dummyData,
    }
  }

  render() {
    return (
      <div className="App">
      <SearchBar 
      
      />
      <PostContainer 
      dummy={this.state.dummy}
      />
      </div>
    );
  }
}

export default App;
    