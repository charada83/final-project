import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  content: {
    textAlign: "center",
    fontFamily: "Mali, cursive",
    padding: 10
  },
  span: {
    color: "#d16682"
  }
});
class Footer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <AppBar position="static">
        <Typography
          className={classes.content}
          variant="h6"
          color="secondary"
          noWrap
        >
          BABY<span className={classes.span}>Book</span> 2018
        </Typography>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Footer);
