import React from 'react';
import './App.css';
import authenticate from './components/authentication/authenticate';
import Login from './components/Login/Login';
import PostPage from './components/PostContainer/PostPage';

const App = () => {
  return (
    <div>
      <PostPage />
    </div>
  )
}

export default authenticate(App)(Login);


// Refactored into PostPage. Commented here reference. 

// import React, { Component } from 'react';

// import SearchBar from './components/SearchBar/SearchBar'
// import PostContainer from './components/PostContainer/PostContainer'
// import dummyData from './dummy-data'
// import './App.css';


// class App extends Component {
//   constructor(){
//     super();
//     this.state={
//       dummy: [],
//       search: []
//     }
//   }

//   componentDidMount(){
//     this.setState({
//       dummy: dummyData,
//     });
//   }

//   postSearch = e => {
//     const mySearch=this.state.dummy.filter(x=>
//       x.username.includes(e.target.value))
//       this.setState({search: mySearch})
//   }

//   render() {
//     return (
//       <div className="app-wrapper">
//       <SearchBar 
//       postSearch={this.postSearch}
//       />
//       <PostContainer 
//       dummy={this.state.search.length > 0 ? this.state.search : this.state.dummy}
//       />
//       </div>
//     );
//   }
// }

// export default App;

