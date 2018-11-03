import React, { Component } from "react";
import { auth } from "../firebase";
import CurrentUser from "../components/auth/CurrentUser";
import Dashboard from "./Dashboard";
import Login from "../components/auth/Login";
import { Redirect } from "@reach/router";

class Home extends Component {
  //state = {  }
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
    return (
      <div>
        <h1>Home</h1>
        <p>Welcome to Baby book.........</p>

        {!currentUser && <Login />}
        {currentUser && (
          <div>
            <Redirect to="/dashboard" />
            {/* <CurrentUser user={currentUser} /> */}
          </div>
        )}
      </div>
    );
  }
}

export default Home;
