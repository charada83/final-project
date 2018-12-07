import React, { Component } from "react";
import BabiesBirthDetails from "../components/BabiesBirthDetails";
import AddBaby from "../components/dialogs/AddBaby";
import { database, auth } from "../firebase";
import { withStyles, Typography, IconButton } from "@material-ui/core";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";

const styles = theme => ({
  title: {
    textAlign: "center",
    fontFamily: "Mali, cursive",
    color: "#6670d1",
    fontWeight: "bold"
  },
  arrow: {
    display: "flex",
    alignItems: "flex-start"
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

  handleClick() {
    window.history.back();
  }

  render() {
    const { classes } = this.props;
    const { babyBirthDetails } = this.state;
    return (
      <div>
        <IconButton onClick={this.handleClick} className={classes.arrow}>
          <KeyboardArrowLeft fontSize="large" />
        </IconButton>
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
