import React, { Component } from 'react';
import dummyData from '../../dummy-data';
import styled from 'styled-components';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fafafa;
`    

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
  postSearch = e => {
    const mySearch=this.state.dummy.filter(x=>
      x.username.includes(e.target.value))
      this.setState({search: mySearch})
  }
  render() {
    return (
      <PageWrapper>
        <SearchBar 
        postSearch={this.postSearch}
        />
        <PostContainer 
        dummy={this.state.search.length > 0 ? this.state.search : this.state.dummy}
        />
      </PageWrapper>
    );
  }
}

export default PostPage;
