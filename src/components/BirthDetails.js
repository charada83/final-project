import React, { Component } from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";

class BirthDetails extends Component {
  //   state = {
  //     name,
  //     gender,
  //     placeOfBirth,
  //     timeOfBirth,
  //     weight
  //   };
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
        <Card>
          {/* <CardMedia "Input Image" /> */}
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              <h2>
                {name}
                <EditIcon />
              </h2>
            </Typography>
            <Typography component="p">
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
            <Button sixe="small" color="primary">
              <AddIcon /> Add Detail?
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

export default BirthDetails;
