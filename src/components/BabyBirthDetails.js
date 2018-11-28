import React, { Component } from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import EditIcon from "@material-ui/icons/Edit";
import { withStyles } from "@material-ui/core";
import IconButton from "@material-ui/core/Icon";
import { Link } from "@reach/router";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import CardMedia from "@material-ui/core/CardMedia";
import { auth, storage } from "../firebase";

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

class BabyBirthDetails extends Component {
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
    const {
      name,
      gender,
      dateOfBirth,
      placeOfBirth,
      timeOfBirth,
      weight,
      classes
    } = this.props;

    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography
            className={classes.name}
            gutterBottom
            variant="headline"
            component="h2"
          >
            <h2>
              {name}
              <IconButton /*onClick={() => onSelectEdit()}*/>
                <EditIcon />
              </IconButton>
            </h2>
          </Typography>
          <CardMedia className={classes.media} image={this.state.imageURL} />

          <Typography className={classes.cardContent}>
            <List>
              <ListItem className={classes.listItem}>Gender: {gender}</ListItem>
              <ListItem className={classes.listItem}>
                Date Of Birth: {dateOfBirth}
              </ListItem>
              <ListItem className={classes.listItem}>
                Place Of Birth: {placeOfBirth}
              </ListItem>
              <ListItem className={classes.listItem}>
                Time Of Birth: {timeOfBirth}
              </ListItem>
              <ListItem className={classes.listItem}>
                Weight: {parseFloat(weight).toFixed(2)} kg
              </ListItem>
            </List>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <Link to="/babydetails/milestones" className={classes.link}>
              My Milestones
            </Link>
          </Button>
          <Button size="small">
            {/* Link to go to specific baby details */}
            {/* <Link to={`/babydetails/memories/${babiesBirthDetails.id}`}> */}
            <Link to="/babydetails/memories" className={classes.link}>
              My Memories
            </Link>
          </Button>
        </CardActions>
      </Card>
    );
  }
}

BabyBirthDetails.PropTypes = {
  babiesBirthDetails: PropTypes.object.isRequired
};

export default withStyles(styles)(BabyBirthDetails);
