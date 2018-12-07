import React, { Component } from "react";
import AllMilestones from "../components/layout/AllMilestones";
import AddMilestone from "../components/dialogs/AddMilestone";
import { database, auth } from "../firebase";
import { withStyles, Typography } from "@material-ui/core";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import IconButton from "@material-ui/core/IconButton";

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
class Milestones extends Component {
  constructor(props) {
    super(props);
    this.state = {
      milestone: null
    };

    this.milestoneRef = database.ref(
      `/users/${auth.currentUser.uid}/milestones/${this.props.babyID}`
    );
  }

  componentDidMount() {
    this.milestoneRef.on("value", snapshot => {
      this.setState({ milestone: snapshot.val() });
    });
  }

  handleClick() {
    window.history.back();
  }

  render() {
    const { classes } = this.props;
    const { milestone } = this.state;
    return (
      <div>
        <IconButton onClick={this.handleClick} className={classes.arrow}>
          <KeyboardArrowLeft fontSize="large" />
        </IconButton>
        <Typography className={classes.title} variant="h3" gutterBottom>
          Milestones
        </Typography>

        <AddMilestone babyID={this.props.babyID} />
        <AllMilestones milestone={milestone} />
      </div>
    );
  }
}

export default withStyles(styles)(Milestones);
