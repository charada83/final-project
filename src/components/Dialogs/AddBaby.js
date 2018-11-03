import React, { Component, Fragment } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import axios from "axios";
import { storage } from "../../firebase";
import { database } from "../../firebase";

const styles = theme => ({
  FormControl: {
    width: 300
  }
});

class AddBaby extends Component {
  state = {
    data: null,
    newData: "",
    selectedFile: null,
    open: false,
    babyDetails: {
      name: "",
      gender: "",
      dateOfBirth: "",
      placeOfBirth: "",
      timeOfBirth: "",
      weight: "",
      image: null,
      url: ""
    }
  };

  fileSelectedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    });
  };

  handleUpload = () => {
    const { image } = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {},
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            console.log(url);
            this.setState({ url });
          });
      }
    );
  };

  // fileUploadHandler = () => {
  //   const fd = new FormData();
  //   fd.append("image", this.state.selectedFile, this.state.selectedFile.name);
  //   axios.post("add firebase url from cloud storage", fd).then(res => {
  //     console.log(res);
  //   });
  //   //add catch block
  // };

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    });
  };

  // handleChange(event) {
  //   const newData = event.target.value;
  //   this.setState({
  //     newData
  //   });
  // }

  handleChange = name => ({ target: { value } }) => {
    this.setState({
      babyDetails: {
        ...this.state.babyDetails,
        [name]: value
      }
    });
  };

  handleSubmit(event) {
    //Don't do what browser wants to do...do following code instead
    event.preventDefault();
    database
      .ref("/babyBirthDetails")

      .push(this.state.babyDetails);
  }

  // handleSubmit = () => {
  //   // Need to add validation

  //   const { babyDetails } = this.state;
  //   this.props.onSubmit(babyDetails);

  //   //  To Clear Form after submit
  //   this.setState((open: false), {
  //     babyDetails: {
  //       name: "",
  //       gende: "",
  //       dateOfBirth: "",
  //       placeOfBirth: "",
  //       timeOfBirth: "",
  //       weight: ""
  //     }
  //   });
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
      } = this.state,
      { classes } = this.props;

    return (
      <Fragment>
        <Grid container justify="center">
          <Button
            style={{ marginBottom: 20 }}
            variant="contained"
            onClick={this.handleToggle}
            color="primary"
            mini
          >
            <AddIcon color="secondary" />{" "}
            <Typography color="secondary">Add Baby</Typography>
          </Button>
        </Grid>

        <Dialog
          open={open}
          onClose={this.handleToggle}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add Baby</DialogTitle>
          <DialogContent>
            <DialogContentText>Please fill out form below</DialogContentText>
            <form onSubmit={this.handleSubmit}>
              <input
                type="file"
                style={{ display: "none" }}
                onChange={this.fileSelectedHandler}
                ref={fileInput => (this.fileInput = fileInput)}
              />

              <Button onClick={() => this.fileInput.click()}>Add Image</Button>
              <Button onClick={this.handleUpload}>Upload</Button>
              <br />
              <img
                src={this.state.url || "https://via.placeholder.com/300x300"}
                alt="Uploaded images"
                height="300"
                width="300"
              />
              <br />
              <TextField
                name="name"
                label="Name"
                // value={this.state.newData}
                value={name}
                onChange={this.handleChange("name")}
                margin="normal"
                className={classes.FormControl}
              />
              <br />

              {/* Radio Buttons for Gender */}
              <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup
                  aria-label="Gender"
                  name="gender"
                  value={gender}
                  onChange={this.handleChange("gender")}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                </RadioGroup>
              </FormControl>
              <br />
              {/* DatePicker for Date of Birth */}
              <TextField
                id="date"
                label="Date of Birth"
                type="date"
                value={dateOfBirth}
                defaultValue="dd/mm/yyyy"
                className={classes.FormControl}
                InputLabelProps={{
                  shrink: true
                }}
              />
              <br />
              <TextField
                name="placeOfBirth"
                label="Place of Birth"
                value={placeOfBirth}
                onChange={this.handleChange("placeOfBirth")}
                margin="normal"
                className={classes.FormControl}
              />
              <br />
              {/* TimePicker for Time of Birth */}
              <TextField
                id="time"
                label="Time of Birth"
                type="time"
                value={timeOfBirth}
                defaultValue="00:00"
                className={classes.FormControl}
                InputLabelProps={{
                  shrink: true
                }}
                inputProps={{
                  step: 60 // 1 min
                }}
              />
              <br />
              {/* Number textfield for weight */}
              <TextField
                id="weight"
                label="Weight"
                value={weight}
                className={classes.FormControl}
                onChange={this.handleChange("weight")}
                InputProps={{
                  endAdornment: (
                    <InputAdornment variant="filled" position="end">
                      Kg
                    </InputAdornment>
                  )
                }}
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleToggle} color="primary">
              Cancel
            </Button>
            <Button
              // onClick={this.handleSubmit}
              color="primary"
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

export default withStyles(styles)(AddBaby);
