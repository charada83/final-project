import React, { Component, Fragment } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddIcon from "@material-ui/icons/Add";
import FormControl from "@material-ui/core/FormControl";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { database, storage, auth } from "../../firebase";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import { DatePicker } from "material-ui-pickers";

const styles = theme => ({
  formControl: {
    width: 300
  },
  title: {
    fontFamily: "Mali, cursive",
    color: "#6670d1",
    fontWeight: "bold"
  },
  dialog: {
    textAlign: "center"
  },
  addIcon: {
    marginBottom: 20,
    borderRadius: 100
  },
  imageButton: {
    marginBottom: 20,
    marginTop: 20
  }
});

export const MILESTONES = {
  0: "First Smile",
  1: "First Time Rolling Over",
  2: "First Steps",
  3: "First Word"
};

class AddMilestone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      milestones: {
        category: "",
        date: Date.now()
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.milestonesRef = database.ref(
      `/users/${auth.currentUser.uid}/milestones/${this.props.babyID}`
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
      category: this.state.milestones.category,
      date: this.state.milestones.date
    });

    this.createImage(ref);

    this.setState({
      open: false,
      milestones: {
        category: "",
        date: undefined
      },
      selectedFile: undefined
    });
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

  handleDateChange = date => {
    this.setState({
      milestones: {
        ...this.state.milestones,
        date: date.toISOString()
      }
    });
  };

  render() {
    const {
        open,
        milestones: { category, date },
        selectedFile
      } = this.state,
      { classes } = this.props;
    const imageURL = selectedFile
      ? URL.createObjectURL(selectedFile)
      : this.state.url || "https://via.placeholder.com/150x150";

    return (
      <Fragment>
        <Grid container justify="center">
          <Button
            className={classes.addIcon}
            variant="contained"
            onClick={this.handleToggle}
            color="primary"
            mini
          >
            <AddIcon color="secondary" />
          </Button>
        </Grid>

        <Dialog
          className={classes.dialog}
          open={open}
          onClose={this.handleToggle}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            <Typography variant="h4" className={classes.title}>
              Add Milestone
            </Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>Please fill out form below</DialogContentText>
            <form onSubmit={this.handleSubmit}>
              <FormControl className={classes.formControl}>
                <InputLabel shrink htmlFor="category">
                  Milestone
                </InputLabel>
                <Select
                  value={category}
                  onChange={this.handleChange("category")}
                  displayEmpty
                >
                  <MenuItem value="" disabled>
                    Select Milestone
                  </MenuItem>
                  <MenuItem value={0}>{MILESTONES[0]}</MenuItem>
                  <MenuItem value={1}>{MILESTONES[1]}</MenuItem>
                  <MenuItem value={2}>{MILESTONES[2]}</MenuItem>
                  <MenuItem value={3}>{MILESTONES[3]}</MenuItem>
                </Select>
              </FormControl>
              <br />
              <DatePicker
                autoOk
                label="Date"
                value={date}
                onChange={this.handleDateChange}
                disableFuture
                maxDateMessage="Date must be less than today"
                animateYearScrolling
                fullWidth
              />
              {/* Images */}
              <input
                accept="image/png, image/jpeg"
                type="file"
                style={{ display: "none" }}
                onChange={this.fileSelectedHandler}
                ref={fileInput => (this.fileInput = fileInput)}
              />
              <br />
              <Button
                onClick={() => this.fileInput.click()}
                className={classes.imageButton}
                color="primary"
                variant="contained"
              >
                <Typography color="secondary">Add Image</Typography>
              </Button>
              <br />
              <img
                src={imageURL}
                alt="Uploaded images"
                height="150"
                width="150"
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleToggle} color="primary">
              Cancel
            </Button>
            <Button
              onClick={this.handleSubmit}
              color="primary"
              variant="contained"
            >
              <Typography color="secondary">Add</Typography>
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

export default withStyles(styles)(AddMilestone);
