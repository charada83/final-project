import React, { Component } from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import CardMedia from "@material-ui/core/CardMedia";
import { storage } from "../../firebase";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  paper: {
    maxWidth: 900,
    marginBottom: 20,
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#000",
    paddingRight: 25,
    borderRadius: 50
  },
  paperContent: {
    color: "#d16682"
  },
  media: {
    height: 80,
    width: 80,
    marginRight: 20
  },
  list: {
    display: "flex",
    flexDirection: "horizontal",
    justifyContent: "space-between"
  }
});

class Milestone extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  // onSelectEdit = id => {
  //   this.setState({
  //     editMode: true
  //   });
  // };

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
    const { category, date, classes } = this.props;

    return (
      <Paper className={classes.paper}>
        <Typography className={classes.paperContent}>
          <List className={classes.list}>
            <ListItem>Milestone: {category}</ListItem>
            <ListItem>Date: {date}</ListItem>
            <div>
              <CardMedia
                className={classes.media}
                image={this.state.imageURL}
              />
            </div>
          </List>
        </Typography>
      </Paper>
    );
  }
}

Milestone.PropTypes = {
  milestones: PropTypes.object.isRequired
};

export default withStyles(styles)(Milestone);
