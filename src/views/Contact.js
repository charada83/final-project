import React, { Component, Fragment } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import { database, auth } from "../firebase";

const styles = theme => ({
  FormControl: {
    width: 300
  }
});

class FamilyInvite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      contact: {
        name: "",
        email: "",
        message: ""
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.contactRef = database.ref(`/users/${auth.currentUser.uid}/contact`);
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    });
  };

  handleChange = name => ({ target: { value } }) => {
    this.setState({
      inviteDetails: {
        ...this.state.contact,
        [name]: value
      }
    });
  };

  handleSubmit(event) {
    event.preventDefault();

    const ref = this.contactRef.push({
      name: this.state.contact.name,
      email: this.state.contact.email,
      message: this.state.contact.message
    });

    this.setState({
      open: false,
      contact: {
        name: "",
        email: "",
        message: ""
      }
    });
  }
  render() {
    const {
        contact: { name, email, message }
      } = this.state,
      { classes } = this.props;
    return (
      <Fragment>
        <h1>Contact Us</h1>
        <form>
          <TextField
            name="name"
            label="Name"
            value={name}
            onChange={this.handleChange("name")}
            margin="normal"
            className={classes.FormControl}
          />
          <br />
          <TextField
            name="email"
            label="Email"
            value={email}
            onChange={this.handleChange("email")}
            margin="normal"
            className={classes.FormControl}
          />
          <br />
          <TextField
            name="message"
            label="Message"
            value={message}
            onChange={this.handleChange("message")}
            margin="normal"
            className={classes.FormControl}
          />
        </form>

        <Button onClick={this.handleToggle} color="primary">
          Cancel
        </Button>
        <Button onClick={this.handleSubmit} color="primary" variant="raised">
          Send Message
        </Button>
      </Fragment>
    );
  }
}

export default withStyles(styles)(FamilyInvite);
