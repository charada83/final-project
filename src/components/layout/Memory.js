import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import CardMedia from "@material-ui/core/CardMedia";
import Paper from "@material-ui/core/Paper";
import { MEMORIES } from "../dialogs/AddMemory";
import IconButton from "@material-ui/core/Icon";
import DeleteIcon from "@material-ui/icons/Delete";
import { database, storage, auth } from "../../firebase";

const dateOpts = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};
const locale = navigator.languages[0];
const styles = theme => ({
  paper: {
    maxWidth: "90%",
    minHeight: 250,
    marginBottom: 20,
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#000",
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 20,
    borderRadius: 50
  },
  paperContent: {
    color: "#d16682",
    fontSize: 18
  },
  media: {
    height: 100,
    width: 100,
    borderRadius: 100
  },
  list: {
    display: "flex",
    justifyContent: "space-between"
  },
  heading: {
    color: "#d16682",
    textAlign: "center",
    paddingBottom: 0
  },
  content: {
    display: "block",
    wordBreak: "break-all",
    maxWidth: 400
  },
  deleteIcon: {
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: 20,
    paddingTop: 20
  }
});

class Memory extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    // this.handleSubmit = this.handleSubmit.bind(this);

    // this.memoryRef = database.ref(
    //   `/users/${auth.currentUser.uid}/memories/${this.props.babyID}`
    // );
  }

  componentDidMount() {
    this.getImage({});
  }

  componentDidUpdate(prevProps) {
    this.getImage(prevProps);
  }

  getImage(prevProps) {
    if (this.props.imagePath !== prevProps.imagePath) {
      storage
        .ref(this.props.imagePath)
        .getDownloadURL()
        .then(imageURL => {
          this.setState({ imageURL });
        });
    }
  }

  handleSubmit() {
    database.ref(this.memoryRef).remove();
  }

  render() {
    const { month, category, date, comment, classes } = this.props;
    const localeDate = new Date(date).toLocaleDateString(locale, dateOpts);

    return (
      <Paper className={classes.paper}>
        {/* <div className={classes.deleteIcon}>
          <IconButton
            variant="contained"
            onClick={this.handleSubmit}
            color="primary"
          >
            <DeleteIcon color="secondary" />
          </IconButton>
        </div> */}
        <h2 className={classes.heading}>{localeDate}</h2>
        <div className={classes.paperContent}>
          <List className={classes.list}>
            <div>
              <ListItem>
                <h3>{MEMORIES[month]}</h3>
              </ListItem>
            </div>
            <div className={classes.content}>
              <ListItem>{category}</ListItem>
              <ListItem>{comment}</ListItem>
            </div>
            <div>
              {this.state.imageURL && (
                <CardMedia
                  className={classes.media}
                  image={this.state.imageURL}
                />
              )}
            </div>
          </List>
        </div>
      </Paper>
    );
  }
}

export default withStyles(styles)(Memory);
