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
import { withStyles } from "@material-ui/core";
// import { Consumer } from "../context";
import IconButton from "@material-ui/core/Icon";
import { Link } from "@reach/router";

const styles = theme => ({
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
  },
  link: {
    textDecoration: "none",

    "&:hover": { color: "#a1b2e3" },
    "&:visited": { color: "#a1b2e3" },
    "&:link": { color: "#a1b2e3" },
    "&:active": { color: "#a1b2e3" }
  }
});

class BirthDetails extends Component {
  //   state = {   };

  // onSelectEdit = id => {
  //   this.setState({
  //     editMode: true
  //   });
  // };

  render() {
    const { classes } = this.props;
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
        <Card className={classes.card}>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              <h2>
                {name}
                <IconButton /*onClick={() => onSelectEdit()}*/>
                  <EditIcon />
                </IconButton>
              </h2>
            </Typography>
            {/* <CardMedia className={classes.media} "Input Image" /> */}
            <Typography className={classes.cardContent} component="p">
              <ul>
                <li>{gender}</li>
                <li>{dateOfBirth}</li>
                <li>{placeOfBirth}</li>
                <li>{timeOfBirth}</li>
                <li>{parseFloat(weight).toFixed(2)} kg</li>
              </ul>
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <Link to="/dashboard/milestones" className={classes.link}>
                My Milestones
              </Link>
            </Button>
            <Button size="small">
              {/* Link to go to specific baby details */}
              {/* <Link to={`dashboard/memories/${babiesBirthDetails.id}`}> */}
              <Link to="/dashboard/memories" className={classes.link}>
                My Memories
              </Link>
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
