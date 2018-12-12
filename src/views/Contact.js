import React, { Component, Fragment } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import { database, auth } from "../firebase";
import { Paper, Typography } from "@material-ui/core";
import "../print.css";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";

const styles = theme => ({
  paper: {
    maxWidth: "60%",
    margin: "auto",
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 40,
    paddingLeft: 40
  },
  title: {
    fontFamily: "Mali, cursive",
    color: "#6670d1",
    fontWeight: "bold"
  },
  buttonContainer: {
    marginTop: 20
  },
  button: {
    marginLeft: 10
  }
});

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: {
        name: "",
        email: "",
        message: ""
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.contactRef = database.ref(`/users/${auth.currentUser.uid}/contact`);
  }

  handleChange = name => ({ target: { value } }) => {
    this.setState({
      contact: {
        ...this.state.contact,
        [name]: value
      }
    });
  };

  clearState = () => {
    this.setState({
      contact: {
        name: "",
        email: "",
        message: ""
      }
    });
  };

  handleSubmit(event) {
    event.preventDefault();

    const { name, email, message } = this.state.contact;

    this.contactRef.push({
      name,
      email,
      message
    });

    const encodedName = `?name=${encodeURIComponent(name)}`;
    const encodedEmail = `&email=${encodeURIComponent(email)}`;
    const encodedMessage = `&message=${encodeURIComponent(message)}`;
    const params = `${encodedName}${encodedEmail}${encodedMessage}`;
    const url =
      "https://us-central1-baby-book-app.cloudfunctions.net/handleContactForm";
    const urlWithParams = `${url}${params}`;

    console.log(urlWithParams);

    fetch(urlWithParams);

    this.clearState();
  }

  render() {
    const {
        contact: { name, email, message }
      } = this.state,
      { classes } = this.props;

    //Disables send button if fields left empty
    const isInvalid = name === "" || email === "" || message === "";

    return (
      <Fragment>
        <Paper className={classes.paper}>
          <Typography className={classes.title} variant="h3" gutterBottom>
            Contact Us
          </Typography>
          <form>
            <TextField
              name="name"
              label="Name"
              value={name}
              onChange={this.handleChange("name")}
              margin="normal"
              fullWidth
              inputProps={{
                maxLength: 30
              }}
              required
            />
            <br />
            <TextField
              name="email"
              label="Email"
              value={email}
              onChange={this.handleChange("email")}
              margin="normal"
              fullWidth
              inputProps={{
                maxLength: 40
              }}
              required
            />
            <br />
            <TextField
              name="message"
              label="Message"
              multiline
              rowsMax="3"
              value={message}
              onChange={this.handleChange("message")}
              margin="normal"
              fullWidth
              inputProps={{
                maxLength: 200
              }}
              required
            />
          </form>
          <div className={classes.buttonContainer}>
            <Button onClick={this.clearState} color="primary">
              Cancel
            </Button>
            <Button
              className={classes.button}
              onClick={this.handleSubmit}
              color="primary"
              variant="raised"
              disabled={isInvalid}
            >
              <Typography color="secondary">Send Message</Typography>
            </Button>
          </div>
        </Paper>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
        >
          <SnackbarContent
            // onClose={this.handleClose}
            variant="success"
            message="This is a success message!"
          />
        </Snackbar>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Contact);
