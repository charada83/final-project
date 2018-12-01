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

const styles = theme => ({
  card: {
    maxWidth: 800,
    marginBottom: 20,
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#000"
  },
  cardContent: {
    display: "flex",
    justifyContent: "center",
    color: "#d16682"
  },
  media: {
    height: 200,
    width: 200,
    marginLeft: "auto",
    marginRight: "auto"
  },
  link: {
    textDecoration: "none",

    "&:visited": { color: "#6670d1" },
    "&:link": { color: "#d16682" },
    "&:active": { color: "#d16682" }
  },
  name: {
    color: "#d1c766"
  },
  details: {
    textDecoration: "none"
  },
  listItem: {
    padding: 5
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
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.cardContent}>
            <List>
              <ListItem className={classes.listItem}>
                Category: {category}
              </ListItem>
              <ListItem className={classes.listItem}>Date: {date}</ListItem>
            </List>
          </Typography>
        </CardContent>
        <CardActions>
          <CardMedia className={classes.media} image={this.state.imageURL} />
        </CardActions>
      </Card>
    );
  }
}

Milestone.PropTypes = {
  milestones: PropTypes.object.isRequired
};

export default withStyles(styles)(Milestone);
