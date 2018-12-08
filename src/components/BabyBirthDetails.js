import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core";
import { Link } from "@reach/router";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import CardMedia from "@material-ui/core/CardMedia";
import { storage } from "../firebase";
import EditBaby from "../components/dialogs/EditBaby";

const dateOpts = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};
const locale = navigator.languages[0];
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
    justifyContent: "space-around",
    flexDirection: "horizontal",
    color: "#d16682",
    fontSize: 16
  },
  media: {
    height: 200,
    width: 200
  },
  link: {
    textDecoration: "none",
    "&:visited": { color: "#6670d1" },
    "&:link": { color: "#d16682" },
    "&:active": { color: "#d16682" },
    fontWeight: "bold",
    fontFamily: "Mali, cursive",
    fontSize: 18,
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 20
  },
  name: {
    textAlign: "center",
    color: "#d1c766",
    fontWeight: "bold",
    fontFamily: "Mali, cursive"
  },
  listItem: {
    padding: 5
  },
  button: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  edit: {
    marginLeft: 20
  }
});

class BabyBirthDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  onSelectEdit = id => {
    this.setState({
      editMode: true
    });
  };

  componentDidMount() {
    this.getImage({});
  }

  componentDidUpdate(prevProps) {
    this.getImage(prevProps);
  }

  getImage() {
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
    const date = new Date(dateOfBirth).toLocaleDateString(locale, dateOpts);
    const time = new Date(timeOfBirth);

    return (
      <Card className={classes.card}>
        <CardContent>
          <EditBaby {...this.props} />
          <Typography className={classes.name} gutterBottom variant="h3">
            {name}
          </Typography>

          <div className={classes.cardContent}>
            {this.state.imageURL && (
              <CardMedia
                className={classes.media}
                image={this.state.imageURL}
              />
            )}

            <div className={classes.cardContent}>
              <List>
                <ListItem className={classes.listItem}>
                  Gender: {gender}
                </ListItem>
                <ListItem className={classes.listItem}>
                  Date Of Birth: {date}
                </ListItem>
                <ListItem className={classes.listItem}>
                  Place Of Birth: {placeOfBirth}
                </ListItem>
                <ListItem className={classes.listItem}>
                  Time Of Birth: {`${time.getHours()}:${time.getMinutes()}`}
                </ListItem>
                <ListItem className={classes.listItem}>
                  Weight: {parseFloat(weight).toFixed(2)} kg
                </ListItem>
              </List>
            </div>
          </div>
        </CardContent>
        <CardActions>
          <div className={classes.button}>
            <Button size="small">
              <Link
                to={`/babydetails/milestones/${this.props.babyID}`}
                className={classes.link}
              >
                My Milestones
              </Link>
            </Button>
            <Button size="small">
              <Link
                to={`/babydetails/memories/${this.props.babyID}`}
                className={classes.link}
              >
                My Memories
              </Link>
            </Button>
          </div>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(BabyBirthDetails);
