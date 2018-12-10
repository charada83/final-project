import React, { Component, Fragment } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import { database, auth } from "../../firebase";

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
      inviteDetails: {
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
        ...this.state.inviteDetails,
        [name]: value
      }
    });
  };
  render() {
    const {
        inviteDetails: { name, email, message }
      } = this.state,
      { classes } = this.props;
    return (
      <Fragment>
        {/* <Button
          style={{ marginBottom: 20 }}
          variant="contained"
          onClick={this.handleToggle}
          color="primary"
          mini
        >
          <AddIcon /> Send Invite
        </Button> */}
        {/* <Dialog
          open={open}
          onClose={this.handleToggle}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Invite Family/Friends
          </DialogTitle>
          <DialogContent>
            <DialogContentText>Please fill out form below</DialogContentText> */}
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
        {/* </DialogContent>
          <DialogActions> */}
        <Button onClick={this.handleToggle} color="primary">
          Cancel
        </Button>
        <Button
          /*onClick={this.handleSubmit}*/
          color="primary"
          variant="raised"
        >
          Send Invite
        </Button>
        {/* </DialogActions>
        </Dialog> */}
      </Fragment>
    );
  }
}

export default withStyles(styles)(FamilyInvite);
