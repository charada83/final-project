import React, { Component } from "react";
import SignIn from "../components/SignIn";
import { auth } from "../firebase";
import CurrentUser from "../components/CurrentUser";

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
        <p>This is the HomePage</p>
        {!currentUser && <SignIn />}
        {currentUser && (
          <div>
            <CurrentUser user={currentUser} />
          </div>
        )}
      </div>
    );
  }
}

export default Home;
