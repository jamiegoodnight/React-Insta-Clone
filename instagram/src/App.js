import React, { Component } from 'react';

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

      />
      <CommentSection 

      />
      </div>
    );
  }
}

export default App;
    