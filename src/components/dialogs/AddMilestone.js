import React, { Component, Fragment } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { database, storage, auth } from "../../firebase";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";

const styles = theme => ({
  FormControl: {
    width: 300
  },
  dialogImage: {
    marginRight: "auto",
    marginLeft: "auto"
  }
});

class AddMilestone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,

      milestones: {
        category: "",
        date: ""
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.milestonesRef = database.ref(
      `/users/${auth.currentUser.uid}/milestones`
    );
  }

  createImage(ref) {
    if (this.state.selectedFile) {
      const imageType = this.state.selectedFile.type.split("/")[1];
      const userID = auth.currentUser.uid;
      const imagePath = `images/${userID}/${ref.key}.${imageType}`;

      storage
        .ref(imagePath)
        .put(this.state.selectedFile)
        .then(() => ref.update({ imagePath }));
    }
  }

  //Need to add validation
  handleSubmit(event) {
    event.preventDefault();

    const ref = this.milestonesRef.push({
      category: this.state.milestones.name,
      date: this.state.milestones.gender
    });

    this.createImage(ref);
  }

  //To Select Image from Gallery
  fileSelectedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    });
  };

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    });
  };

  handleChange = name => ({ target: { value } }) => {
    this.setState({
      milestones: {
        ...this.state.milestones,
        [name]: value
      }
    });
  };

  //   //  To Clear Form after submit
  //   this.setState((open: false), {
  //     babyDetails: {
  //       name: "",
  //       gender: "",
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
        milestones: { category, date },
        selectedFile
      } = this.state,
      { classes } = this.props;
    const imageURL = selectedFile
      ? URL.createObjectURL(selectedFile)
      : this.state.url || "https://via.placeholder.com/200x200";

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
            <Typography color="secondary">Add Milestone</Typography>
          </Button>
        </Grid>

        <Dialog
          open={open}
          onClose={this.handleToggle}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add Milestone</DialogTitle>
          <DialogContent>
            <DialogContentText>Please fill out form below</DialogContentText>
            <form onSubmit={this.handleSubmit}>
              <FormControl className={classes.formControl}>
                <InputLabel shrink htmlFor="milestone">
                  Milestone
                </InputLabel>
                <Select
                  value={this.state.milestone}
                  onChange={this.handleChange}
                  name="milestone"
                  displayEmpty
                  className={classes.selectEmpty}
                >
                  <MenuItem value="" disabled>
                    Select Milestone
                  </MenuItem>
                  <MenuItem>First Smile</MenuItem>
                  <MenuItem>First Time Rolling Over</MenuItem>
                  <MenuItem>First Steps</MenuItem>
                  <MenuItem>First Word</MenuItem>
                </Select>
              </FormControl>
              <br />
              <TextField
                id="date"
                label="Date"
                type="date"
                value={this.state.date}
                defaultValue="dd/mm/yyyy"
                className={classes.FormControl}
                onChange={this.handleChange("date")}
                InputLabelProps={{
                  shrink: true
                }}
                //variant="filled"
              />
              <input
                accept="image/png, image/jpeg"
                type="file"
                style={{ display: "none" }}
                onChange={this.fileSelectedHandler}
                ref={fileInput => (this.fileInput = fileInput)}
              />
              <br />
              {/* Images */}
              <Button
                className={classes.dialogImage}
                onClick={() => this.fileInput.click()}
              >
                Add Image
              </Button>
              <br />
              <img
                src={imageURL}
                alt="Uploaded images"
                height="100"
                width="100"
              />
              <br />
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleToggle} color="primary">
              Cancel
            </Button>
            <Button
              onClick={this.handleSubmit}
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

export default withStyles(styles)(AddMilestone);
