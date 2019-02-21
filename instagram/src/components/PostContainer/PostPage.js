import React, { Component } from 'react';

import SearchBar from '../SearchBar/SearchBar' 
import PostContainer from './PostContainer'
import dummyData from '../../dummy-data'

class PostPage extends Component {
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

  // postSearch = e => {
  //   const dummySearch=this.state.dummy.filter(x=>
  //     x.username.includes(e.target.value)
  //   )
  //   console.log(dummySearch)
  //   this.setState({
  //     search: dummySearch
  //   })
  // }


  postSearch = e => {
    const mySearch=this.state.dummy.filter(x=>
      x.username.includes(e.target.value))
      this.setState({search: mySearch})
  }

  render() {
    return (
      <div className="app-wrapper">
      <SearchBar 
      postSearch={this.postSearch}
      />
      <PostContainer 
      dummy={this.state.search.length > 0 ? this.state.search : this.state.dummy}
      />
      </div>
    );
  }
}

export default PostPage;
