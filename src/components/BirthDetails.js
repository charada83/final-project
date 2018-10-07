import React, { Component } from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
//import Icon from "@material-ui/core/Icon";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import { withStyles } from "@material-ui/core";

const styles = {
  card: {
    maxWidth: 800,
    marginBottom: 20,
    marginLeft: "auto",
    marginRight: "auto"
  },
  cardContent: {
    display: "flex",
    justifyContent: "center"
  },
  media: {
    height: 140
  }
};

class BirthDetails extends Component {
  //   state = {   };

  // editBirthDetails = () =>
  // {

  // }
  render() {
    const {
      name,
      gender,
      dateOfBirth,
      placeOfBirth,
      timeOfBirth,
      weight
    } = this.props.babiesBirthDetails;
    return (
      <div>
        <Card style={styles.card}>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              <h2>
                {name}
                <EditIcon /*onClick={this.editBirthDetails()}*/ />
              </h2>
            </Typography>
            {/* <CardMedia className={classes.media} "Input Image" /> */}
            <Typography style={styles.cardContent} component="p">
              <ul>
                <li>{gender}</li>
                <li>{dateOfBirth}</li>
                <li>{placeOfBirth}</li>
                <li>{timeOfBirth}</li>
                <li>{weight}</li>
                <li>?</li>
                <li>?</li>
                <li>?</li>
              </ul>
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              {/* <AddIcon />*/} My Milestones
            </Button>
            <Button size="small" color="primary">
              My Big Moments
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

BirthDetails.PropTypes = {
  babiesBirthDetails: PropTypes.object.isRequired
};

export default withStyles(styles)(BirthDetails);
