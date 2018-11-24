import React, { Component } from "react";
import BabiesBirthDetails from "../components/BabiesBirthDetails";
import AddBaby from "../components/dialogs/AddBaby";
import { database, auth } from "../firebase";
import { withStyles, Typography } from "@material-ui/core";

const styles = theme => ({
  title: {
    textAlign: "center",
    fontFamily: "Mali, cursive",
    color: "#6670d1",
    fontWeight: "bold"
  }
});
class BabyDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      babyBirthDetails: null
    };

    this.babiesRef = database.ref(
      `/users/${auth.currentUser.uid}/babyBirthDetails`
    );
  }

  componentDidMount() {
    this.babiesRef.on("value", snapshot => {
      this.setState({ babyBirthDetails: snapshot.val() });
    });
  }

  render() {
    const { classes } = this.props;
    const { babyBirthDetails } = this.state;
    return (
      <div>
        <Typography className={classes.title} variant="h3" gutterBottom>
          Baby Details
        </Typography>

        <AddBaby />
        <BabiesBirthDetails babyBirthDetails={babyBirthDetails} />
      </div>
    );
  }
}

export default withStyles(styles)(BabyDetails);
