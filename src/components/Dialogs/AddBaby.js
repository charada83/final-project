import React, { Component, Fragment } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

class AddBaby extends Component {
  state = {
    open: false,
    babyDetails: {
      name: "",
      gender: "",
      dateOfBirth: "",
      placeOfBirth: "",
      timeOfBirth: "",
      weight: ""
    }
  };

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    });
  };

  handleChange = name => ({ target: { value } }) => {
    this.setState({
      babyDetails: {
        ...this.state.babyDetails,
        [name]: value
      }
    });
  };

  // handleAdd = () => {
  //   // Need to add validation

  //   const { babyDetails } = this.state;
  //   this.props.onAdd(babyDetails);

  //* To Clear Form after submit
  // this.setState(
  // open: false,
  //   {
  //     babyDetails: {
  //       name: '',
  //   gende:'',
  //   dateOfBirth: '',
  //   placeOfBirth: '',
  //   timeOfBirth: '',
  //   weight: ''
  //     }
  //   }
  // )
  // };

  render() {
    const {
      open,
      babyDetails: {
        name,
        gender,
        dateOfBirth,
        placeOfBirth,
        timeOfBirth,
        weight
      }
    } = this.state;
    return (
      <Fragment>
        <Button
          variant="contained"
          onClick={this.handleToggle}
          color="primary"
          mini
        >
          <AddIcon /> Add Baby
        </Button>

        <Dialog
          open={open}
          onClose={this.handleToggle}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add Baby</DialogTitle>
          <DialogContent>
            <DialogContentText>Please fill out form below</DialogContentText>
            <form>
              <TextField
                name="name"
                label="Name"
                value={name}
                onChange={this.handleChange("name")}
                margin="normal"
              />
              <br />

              {/* Radio Buttons for Gender */}
              {/* DatePicker for Date of Birth */}
              <TextField
                name="placeOfBirth"
                label="Place of Birth"
                value={placeOfBirth}
                onChange={this.handleChange("placeOfBirth")}
                margin="normal"
              />
              <br />
              {/* TimePicker for Time of Birth */}
              {/* Number textfield for weight */}
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleToggle} color="primary">
              Cancel
            </Button>
            <Button
              /*onClick={this.handleAdd}*/ color="primary"
              variant="raised"
            >
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

export default AddBaby;
