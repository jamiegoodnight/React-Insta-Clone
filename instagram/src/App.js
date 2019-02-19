import React, { Component } from 'react';

import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'
import dummyData from './dummy-data'
import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state={
      dummy: [],
      search: []
    }
  }

  componentDidMount(){
    this.setState({
      dummy: dummyData,
    });
  }

  postSearch = e => {
    const newDummy=this.state.dummy.filter(x => {
      if (x.username.includes(e.target.value)){ 
        return x
      };
    }); 
    this.setState({search: newDummy});
  }

  render() {
    return (
      <div className="app-wrapper">
      <SearchBar 
      postSearch={this.postSearch}
      />
      <PostContainer 
      dummy={this.state.search < 0 ? this.state.search : this.state.dummy}
      />
      </div>
    );
  }
}

export default App;

