import React, { Component } from "react";
import { auth } from "../firebase";
import Login from "../components/auth/Login";
import { Redirect } from "@reach/router";
import { navigate } from "@reach/router";
import HomeContent from "../components/layout/HomeContent";
import Button from "@material-ui/core/Button";
import { Link } from "@reach/router";

class Home extends Component {
  constructor(props) {
    super(props);
    this.currentUserRef = null;
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
      return (
        <div>
          <h4>Welcome {currentUser.displayName}</h4>
          <Button size="small">
            <Link to="/babydetails" noThrow>
              My Babies
            </Link>
          </Button>
        </div>
      );
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
