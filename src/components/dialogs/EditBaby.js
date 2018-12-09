import React, { Component, Fragment } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import EditIcon from "@material-ui/icons/Edit";
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
import { database, storage, auth } from "../../firebase";
import IconButton from "@material-ui/core/Icon";
import { DatePicker } from "material-ui-pickers";
import { TimePicker } from "material-ui-pickers";

const styles = theme => ({
  title: {
    fontFamily: "Mali, cursive",
    color: "#6670d1",
    fontWeight: "bold"
  },
  dialog: {
    textAlign: "center"
  },
  FormControl: {
    width: 300
  },
  editIcon: {
    marginBottom: 20
  },
  imageButton: {
    marginBottom: 20,
    marginTop: 20
  }
});

class EditBaby extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,

      babyBirthDetails: {
        ...this.props
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.babiesRef = database.ref(
      `/users/${auth.currentUser.uid}/babyBirthDetails/${this.props.babyID}`
    );
  }

  componentDidMount() {
    if (this.props.imagePath === undefined) {
      return;
    }

    storage
      .ref(this.props.imagePath)
      .getDownloadURL()
      .then(imageURL => {
        this.setState({ imageURL });
      });
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

    this.babiesRef.update({
      name: this.state.babyBirthDetails.name,
      gender: this.state.babyBirthDetails.gender,
      dateOfBirth: this.state.babyBirthDetails.dateOfBirth,
      placeOfBirth: this.state.babyBirthDetails.placeOfBirth,
      timeOfBirth: this.state.babyBirthDetails.timeOfBirth,
      weight: this.state.babyBirthDetails.weight
    });

    this.createImage(this.babiesRef);
    this.handleToggle();
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
      babyBirthDetails: {
        ...this.state.babyBirthDetails,
        [name]: value
      }
    });
  };

  handleDateChange = dateOfBirth => {
    this.setState({
      babyBirthDetails: {
        ...this.state.babyBirthDetails,
        dateOfBirth: dateOfBirth.toISOString()
      }
    });
  };

  handleTimeChange = timeOfBirth => {
    this.setState({
      babyBirthDetails: {
        ...this.state.babyBirthDetails,
        timeOfBirth: timeOfBirth.toISOString()
      }
    });
  };

  render() {
    const {
        open,
        babyBirthDetails: {
          name,
          gender,
          dateOfBirth,
          placeOfBirth,
          timeOfBirth,
          weight
        },
        selectedFile
      } = this.state,
      { classes } = this.props;
    const imageURL = selectedFile
      ? URL.createObjectURL(selectedFile)
      : this.state.imageURL || "https://via.placeholder.com/200x200";

    return (
      <Fragment>
        <Grid container justify="center" style={{ justifyContent: "flex-end" }}>
          <IconButton
            className={classes.editIcon}
            variant="contained"
            onClick={this.handleToggle}
            color="primary"
          >
            <EditIcon color="secondary" />
            <Typography color="secondary">Edit Baby</Typography>
          </IconButton>
        </Grid>

        <Dialog
          open={open}
          onClose={this.handleToggle}
          aria-labelledby="form-dialog-title"
          className={classes.dialog}
        >
          <DialogTitle id="form-dialog-title">
            <Typography variant="h4" className={classes.title}>
              Edit Baby
            </Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>Please fill out form below</DialogContentText>
            <form onSubmit={this.handleSubmit}>
              <input
                accept="image/png, image/jpeg"
                type="file"
                style={{ display: "none" }}
                onChange={this.fileSelectedHandler}
                ref={fileInput => (this.fileInput = fileInput)}
              />
              {/* Images */}
              <Button
                className={classes.imageButton}
                onClick={() => this.fileInput.click()}
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
              <br />
              <TextField
                name="name"
                label="Name"
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
                    value="Female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="Male"
                    control={<Radio />}
                    label="Male"
                  />
                </RadioGroup>
              </FormControl>
              <br />
              {/* DatePicker for Date of Birth */}
              <DatePicker
                autoOk
                label="Date of Birth"
                value={dateOfBirth}
                onChange={this.handleDateChange}
                disableFuture
                maxDateMessage="Date must be less than today"
                animateYearScrolling
                fullWidth
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
              <TimePicker
                clearable
                ampm={false}
                label="Time of Birth"
                value={timeOfBirth}
                onChange={this.handleTimeChange}
                fullWidth
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
              onClick={this.handleSubmit}
              color="primary"
              variant="contained"
            >
              <Typography color="secondary">Edit</Typography>
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

export default withStyles(styles)(EditBaby);
