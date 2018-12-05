import React, { Component } from "react";
import { auth } from "../../firebase";
import Login from "../auth/Login";
import Button from "@material-ui/core/Button";
import { Redirect } from "@reach/router";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <p>Welcome to Baby book.........</p>
      </div>
    );
  }
}

export default Home;
