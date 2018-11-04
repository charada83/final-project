import React, { Component } from "react";
import firebase from "../../firebase";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import { auth, googleAuthProvider, emailAuthProvider } from "../../firebase";
import { Typography } from "@material-ui/core";
import Icon from "@material-ui/icons";

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      open: false,
      email: "",
      password: ""
    };
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    });
  };

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {})
      .catch(error => {
        console.log(error);
      });
  }

  signup(e) {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {})
      .then(u => {
        console.log(u);
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    const { open } = this.state;
    return (
      <div>
        <Button
          style={{ padding: 50 }}
          variant="contained"
          onClick={this.handleToggle}
          color="primary"
          mini
        >
          <Typography color="secondary">Get Started</Typography>
        </Button>
        <Dialog
          open={open}
          onClose={this.handleToggle}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Login</DialogTitle>
          <DialogContent>
            <DialogContentText>Please fill out form below</DialogContentText>
            <form>
              <TextField
                value={this.state.email}
                onChange={this.handleChange}
                type="email"
                name="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <br />
              <TextField
                value={this.state.password}
                onChange={this.handleChange}
                type="password"
                name="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
              <DialogActions>
                <Button type="submit" onClick={this.login}>
                  Login
                </Button>
                <Button onClick={this.signup} style={{ marginLeft: "25px" }}>
                  Signup
                </Button>

                <Button
                  onClick={() => auth.signInWithPopup(googleAuthProvider)}
                  variant="contained"
                  color="primary"
                  mini
                >
                  <Typography color="secondary"> Login with Google</Typography>
                </Button>
              </DialogActions>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}
export default Login;