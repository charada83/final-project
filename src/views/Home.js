import React, { Component } from "react";
import { auth } from "../firebase";
import Login from "../components/auth/Login";
import { Redirect } from "@reach/router";
import { navigate } from "@reach/router";
import HomeContent from "../components/layout/HomeContent";
import Button from "@material-ui/core/Button";
import { Link } from "@reach/router";
import { Typography } from "@material-ui/core";

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
          <Button
            //style={{ padding: 50 }}
            variant="contained"
            onClick={this.handleToggle}
            color="primary"
            mini
          >
            <Link to="/babydetails" noThrow>
              <Typography color="secondary">My Babies</Typography>
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
