import React, { Component } from "react";
import AllMemories from "../components/layout/AllMemories";
import AddMemory from "../components/dialogs/AddMemory";
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
class Memories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memory: null
    };

    this.memoryRef = database.ref(
      `/users/${auth.currentUser.uid}/memories/${this.props.babyID}`
    );
  }

  componentDidMount() {
    this.memoryRef.on("value", snapshot => {
      this.setState({ memory: snapshot.val() });
    });
  }

  handleClick() {
    window.history.back();
  }

  render() {
    const { classes } = this.props;
    const { memory } = this.state;
    return (
      <div>
        <IconButton onClick={this.handleClick} className={classes.arrow}>
          <KeyboardArrowLeft fontSize="large" />
        </IconButton>
        <Typography className={classes.title} variant="h3" gutterBottom>
          Memories
        </Typography>

        <AddMemory babyID={this.props.babyID} />
        <AllMemories memory={memory} />
      </div>
    );
  }
}

export default withStyles(styles)(Memories);
