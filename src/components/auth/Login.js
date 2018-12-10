import React, { PureComponent } from "react";
import firebase from "../../firebase";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import { auth, googleAuthProvider } from "../../firebase";
import { Typography } from "@material-ui/core";
import GoogleButton from "react-google-button";

class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      open: false,
      email: "",
      password: "",
      error: null
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
      .catch(error => {
        this.setState({ error });
      });

    this.setState({
      email: "",
      password: ""
    });
  }

  signup(e) {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .catch(error => {
        this.setState({ error });
      });

    this.setState({
      email: "",
      password: ""
    });
  }

  render() {
    const { open, email, password, error } = this.state;
    const isInvalid = email === "" || password === "";
    return (
      <div>
        <Button
          style={{ padding: 50 }}
          variant="contained"
          onClick={this.handleToggle}
          color="primary"
          mini
        >
          <Typography
            style={{ fontFamily: "Mali, cursive", fontSize: 18 }}
            color="secondary"
          >
            Get Started
          </Typography>
        </Button>
        <Dialog
          open={open}
          onClose={this.handleToggle}
          aria-labelledby="form-dialog-title"
          style={{ textAlign: "center" }}
        >
          <DialogTitle id="form-dialog-title">
            <Typography
              variant="h4"
              style={{
                fontFamily: "Mali, cursive",
                color: "#6670d1",
                fontWeight: "bold"
              }}
            >
              Login
            </Typography>
          </DialogTitle>
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
                style={{ paddingBotton: 5 }}
                fullWidth
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
                fullWidth
              />
              <DialogActions>
                <div style={{ marginRight: "auto", marginLeft: "auto" }}>
                  <Button
                    type="submit"
                    onClick={this.login}
                    disabled={isInvalid}
                    style={{
                      backgroundColor: "#6670d1",
                      marginRight: 5
                    }}
                  >
                    <Typography style={{ color: "#FFF" }}>Login</Typography>
                  </Button>
                  <Button
                    onClick={this.signup}
                    style={{
                      marginLeft: 5,
                      backgroundColor: "#6670d1"
                    }}
                  >
                    <Typography style={{ color: "#FFF" }}>Signup</Typography>
                  </Button>
                </div>
              </DialogActions>
              <DialogActions>
                <GoogleButton
                  onClick={() => auth.signInWithPopup(googleAuthProvider)}
                  fullWidth
                >
                  <Typography color="secondary">Login with Google</Typography>
                </GoogleButton>
              </DialogActions>
              {error && <p>{error.message}</p>}
            </form>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default Login;
