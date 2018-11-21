import React, { Component, Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core";
import book from "../../book.svg";

const styles = theme => ({
  icon: {
    height: 60,
    paddingBottom: 10
  },

  title: {
    flexGrow: 1,
    paddingLeft: 10,
    fontFamily: "Mali, cursive"
  },

  span: {
    color: "#d16682"
  }
});

class TitleLogo extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <img src={book} className={classes.icon} alt="Baby Book logo" />

        <Typography
          className={classes.title}
          variant="h3"
          color="secondary"
          noWrap
        >
          BABY <span className={classes.span}>Book</span>
        </Typography>
      </Fragment>
    );
  }
}

export default withStyles(styles)(TitleLogo);
