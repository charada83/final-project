import React, { Component } from "react";
import { auth, googleAuthProvider } from "../../firebase";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Dashboard from "../../views/Dashboard";
import Home from "../../views/Home";

class SignIn extends Component {
  render() {
    return (
      <div className="SignIn">
        {/* {this.state.user ? <Dashboard /> : <Home />} */}
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
            <Typography color="secondary"> Get Started</Typography>
          </Button>
        </Grid>
      </div>
    );
  }
}

export default SignIn;
