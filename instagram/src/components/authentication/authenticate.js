import React from 'react';



const authenticate = App => Login =>
  class extends React.Component {
    render() {
     if (!localStorage.getItem('username') || !localStorage.getItem('password')){
         return <Login />
     } else { 
         return <App />
     }
    }
  };


// const authenticate = App => Login => props =>
//   class extends React.Component {
//     constructor(props){
//           super(props);
//       }
//     render() {
//       return <App />;
//     }
//   };



export default authenticate 