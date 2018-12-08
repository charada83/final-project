import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import CardMedia from "@material-ui/core/CardMedia";
import { storage } from "../../firebase";
import Paper from "@material-ui/core/Paper";
import { MEMORIES } from "../dialogs/AddMemory";

const dateOpts = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};
const locale = navigator.languages[0];
const styles = theme => ({
  paper: {
    maxWidth: 900,
    marginBottom: 20,
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#000",
    paddingLeft: 10,
    paddingRight: 20,
    borderRadius: 50
  },
  paperContent: {
    color: "#d16682",
    fontSize: 18
  },
  media: {
    height: 80,
    width: 80,
    borderRadius: 100
  },
  list: {
    display: "flex",
    flexDirection: "horizontal",
    justifyContent: "space-between"
  }
});

class Memory extends Component {
  constructor(props) {
    super(props);

    this.state = {};
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

  render() {
    const { month, category, date, comment, classes } = this.props;
    const localeDate = new Date(date).toLocaleDateString(locale, dateOpts);

    return (
      <Paper className={classes.paper}>
        <div className={classes.paperContent}>
          <List className={classes.list}>
            <ListItem>{MEMORIES[month]}</ListItem>
            <ListItem>{category}</ListItem>
            <ListItem>{localeDate}</ListItem>
            <ListItem>{comment}</ListItem>
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