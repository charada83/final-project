import React, { Component } from "react";
import { auth } from "../firebase";
import Login from "../components/auth/Login";
import { Redirect } from "@reach/router";

class Home extends Component {
  constructor(props) {
    super(props);
    this.usersRef = null;
    this.currentUserRef = null;
    this.state = {
      currentUser: null,
      users: {}
    };
  }

  componentDidMount() {
    auth.onAuthStateChanged(currentUser => {
      this.setState({ currentUser });
      //   this.usersRef = database.ref("/users");
      //   this.currentUserRef = this.usersRef.child(currentUser.uid);

      //   this.currentUserRef.once("value").then(snapshot => {
      //     if (snapshot.val()) return;
      //     const user = pick(currentUser, ["displayName", "photoURL", "email"]);
      //     this.currentUserRef.set(user);
      //   });

      //   this.usersRef.on("value", snapshot => {
      //     this.setState({ users: snapshot.val() });
      //   });
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
