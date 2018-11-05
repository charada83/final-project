import React, { Component } from "react";
import { auth } from "../firebase";
import Login from "../components/auth/Login";
import { Redirect } from "@reach/router";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };
  }

  componentDidMount() {
    auth.onAuthStateChanged(currentUser => {
      this.setState({ currentUser });
    });
  }

  render() {
    const { currentUser } = this.state;

    if (currentUser) {
      return <Redirect to="babydetails" noThrow />;
    }

    return (
      <div>
        <h1>Home</h1>
        <p>Welcome to Baby book.........</p>

        <Login />
      </div>
    );
  }
}

export default Home;
