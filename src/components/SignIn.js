import React, { Component } from "react";
import { auth, googleAuthProvider } from "../firebase";
import Button from "@material-ui/core/Button";

class SignIn extends Component {
  render() {
    return (
      <div className="SignIn">
        <Button
          onClick={() => auth.signInWithPopup(googleAuthProvider)}
          style={{ marginBottom: 20, padding: 30 }}
          variant="contained"
          color="primary"
          mini
        >
          Get Started
        </Button>
      </div>
    );
  }
}

export default SignIn;
