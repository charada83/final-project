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
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";

import firebase, { database } from "../firebase";

// database.collection("babyBirthDetails")
//   .get()
//   .then(snapshot => {
//     snapshot.docs.forEach(doc => {
//       console.log(doc.data());
//     });
//   });

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
    height: 140
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

class BirthDetails extends Component {
  // onSelectEdit = id => {
  //   this.setState({
  //     editMode: true
  //   });
  // };

  render() {
    // const { classes } = this.props;
    // const {
    //   name,
    //   gender,
    //   dateOfBirth,
    //   placeOfBirth,
    //   timeOfBirth,
    //   weight
    // } = this.props.babiesBirthDetails;

    const { name } = this.props;

    return (
      <Card>
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            <h2>
              {name}
              <IconButton /*onClick={() => onSelectEdit()}*/>
                <EditIcon />
              </IconButton>
            </h2>
          </Typography>
        </CardContent>
      </Card>
      // <div>
      //   <Card className={classes.card}>
      //     <CardContent>
      //       <Typography
      //         className={classes.name}
      //         gutterBottom
      //         variant="headline"
      //         component="h2"
      //       >
      //         <h2>
      //           {name}
      //           <IconButton /*onClick={() => onSelectEdit()}*/>
      //             <EditIcon />
      //           </IconButton>
      //         </h2>
      //       </Typography>
      //       {/* <CardMedia className={classes.media} "Input Image" /> */}

      //       <Typography className={classes.cardContent}>
      //         <List>
      //           <ListItem className={classes.listItem}>{gender}</ListItem>
      //           <ListItem className={classes.listItem}>{dateOfBirth}</ListItem>
      //           <ListItem className={classes.listItem}>{placeOfBirth}</ListItem>
      //           <ListItem className={classes.listItem}>{timeOfBirth}</ListItem>
      //           <ListItem className={classes.listItem}>
      //             {parseFloat(weight).toFixed(2)} kg
      //           </ListItem>
      //         </List>
      //       </Typography>
      //     </CardContent>
      //     <CardActions>
      //       <Button size="small">
      //         <Link to="/dashboard/milestones" className={classes.link}>
      //           My Milestones
      //         </Link>
      //       </Button>
      //       <Button size="small">
      //         {/* Link to go to specific baby details */}
      //         {/* <Link to={`dashboard/memories/${babiesBirthDetails.id}`}> */}
      //         <Link to="/dashboard/memories" className={classes.link}>
      //           My Memories
      //         </Link>
      //       </Button>
      //     </CardActions>
      //   </Card>
      // </div>
    );
  }
}

BirthDetails.PropTypes = {
  babiesBirthDetails: PropTypes.object.isRequired
};

export default withStyles(styles)(BirthDetails);
