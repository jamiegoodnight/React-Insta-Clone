import React from "react";
import App from "../../App";
import Login from "../Login/Login";

const Authenticate = App => Login =>
  class extends React.Component {
    render() {
      if (
        !localStorage.getItem("username") ||
        !localStorage.getItem("password")
      ) {
        return <Login />;
      } else {
        return <App />;
      }
    }
  };

export default Authenticate;
