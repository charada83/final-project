import React, { Component, Fragment } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddIcon from "@material-ui/icons/Add";
import { Typography } from "@material-ui/core";

class AddBaby extends Component {
  state = {
    open: false
    //       name='',
    //       gender='',
    //       dateOfBirth='',
    //       placeOfBirth='',
    //       timeOfBirth='',
    //       weight=''
  };

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    });
  };
  render() {
    const { open } = this.state;
    return (
      <Fragment>
        <Button variant="fab" onClick={this.handleToggle} color="primary" mini>
          <AddIcon />
        </Button>

        <Dialog
          open={open}
          onClose={this.handleToggle}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add Baby</DialogTitle>
          <DialogContent>
            <DialogContentText>Please fill out form below</DialogContentText>
            <form />
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={this.handleToggle}>
              Cancel
            </Button>
            <Button color="primary" variant="raised">
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

export default AddBaby;
