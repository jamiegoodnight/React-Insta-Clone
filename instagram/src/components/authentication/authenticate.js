import React from 'react';



const authenticate = App => Login => props =>
  class extends React.Component {
    render() {
      return <App />;
    }
  };



export default authenticate 