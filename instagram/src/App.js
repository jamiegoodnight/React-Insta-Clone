import React, { Component } from 'react';

import SearchBar from './components/SearchBar/SearchBar'
import dummyData from './dummy-data'
import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state={
      dummy=dummyData,
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
      <CommentSection 

      />
      </div>
    );
  }
}

export default App;
    