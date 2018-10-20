import React, { Component } from "react";
import { auth, googleAuthProvider } from "../../firebase";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

class SignIn extends Component {
  render() {
    return (
      <div className="SignIn">
        <Grid container justify="center">
          <Button
            onClick={() => auth.signInWithPopup(googleAuthProvider)}
            style={{
              padding: 50
            }}
            variant="contained"
            color="primary"
            mini
          >
            Get Started
          </Button>
        </Grid>
      </div>
    );
  }
}

export default SignIn;
