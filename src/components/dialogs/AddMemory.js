import React, { Component, Fragment } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { database, storage, auth } from "../../firebase";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";

const styles = theme => ({
  title: {
    fontFamily: "Mali, cursive",
    color: "#6670d1",
    fontWeight: "bold"
  },
  dialog: {
    textAlign: "center"
  },
  formControl: {
    width: 300
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

export const MEMORIES = {
  0: "1 Month",
  1: "2 Months",
  2: "3 Months",
  3: "4 Months"
};

class AddMemory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      memory: {
        month: "",
        category: "",
        comment: "",
        date: ""
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.memoriesRef = database.ref(
      `/users/${auth.currentUser.uid}/memories/${this.props.babyID}`
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

    const ref = this.memoriesRef.push({
      month: this.state.memory.month,
      category: this.state.memory.category,
      comment: this.state.memory.comment,
      date: this.state.memory.date
    });

    this.createImage(ref);

    this.setState({
      open: false,
      memory: {
        mpnth: "",
        category: "",
        comment: "",
        date: ""
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
      memory: {
        ...this.state.memory,
        [name]: value
      }
    });
  };

  render() {
    const {
        open,
        memory: { month, category, comment, date },
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
              Add Memory
            </Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>Please fill out form below</DialogContentText>
            <form onSubmit={this.handleSubmit}>
              <FormControl fullWidth>
                <InputLabel shrink htmlFor="month">
                  Month
                </InputLabel>
                <Select
                  value={month}
                  onChange={this.handleChange("month")}
                  displayEmpty
                >
                  <MenuItem value="" disabled>
                    Select Month
                  </MenuItem>
                  <MenuItem value={0}>{MEMORIES[0]}</MenuItem>
                  <MenuItem value={1}>{MEMORIES[1]}</MenuItem>
                  <MenuItem value={2}>{MEMORIES[2]}</MenuItem>
                  <MenuItem value={3}>{MEMORIES[3]}</MenuItem>
                </Select>
              </FormControl>
              <TextField
                name="category"
                label="Memory"
                value={category}
                onChange={this.handleChange("category")}
                margin="normal"
                fullWidth
              />
              <br />
              <TextField
                name="comment"
                multiline
                rowsMax="4"
                label="Comment"
                value={comment}
                onChange={this.handleChange("comment")}
                margin="normal"
                fullWidth
              />
              <br />
              <TextField
                id="date"
                label="Date"
                type="date"
                value={date}
                defaultValue="dd/mm/yyyy"
                onChange={this.handleChange("date")}
                InputLabelProps={{
                  shrink: true
                }}
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

export default withStyles(styles)(AddMemory);
