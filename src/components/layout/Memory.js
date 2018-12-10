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
    maxWidth: "90%",
    minHeight: 250,
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
    paddingTop: 20,
    paddingBottom: 0
  },
  content: {
    display: "block",
    wordBreak: "break-all",
    maxWidth: 400
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
