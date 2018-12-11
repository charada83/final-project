import React, { Component } from "react";
import { auth } from "../firebase";
import Login from "../components/auth/Login";
import Button from "@material-ui/core/Button";
import { navigate } from "@reach/router";
import { Typography } from "@material-ui/core";
import TitleLogo from "../components/layout/TitleLogo";
import { withStyles } from "@material-ui/core";

const style = theme => ({
  content: {
    fontFamily: "Mali, cursive",
    marginBottom: 40
  },
  text: {
    fontFamily: "Mali, cursive",
    marginTop: 20
  },
  button: { padding: 50, fontFamily: "Mali, cursive" },
  buttonText: {
    fontFamily: "Mali, cursive",
    fontSize: 18
  }
});
class Home extends Component {
  constructor(props) {
    super(props);
    this.currentUserRef = null;
    this.state = {
      currentUser: null
    };
  }

  componentDidMount() {
    auth.onAuthStateChanged(currentUser => {
      this.setState({ currentUser });
    });
  }

  handleClick() {
    navigate("/babydetails");
  }

  render() {
    const { currentUser } = this.state;
    const { classes } = this.props;
    if (currentUser) {
      return (
        <div>
          <section className={classes.content}>
            <Typography variant="h4" className={classes.text}>
              Welcome!
            </Typography>
            <p> Start creating precious Memories of your Children</p>
          </section>
          <Button
            className={classes.button}
            variant="contained"
            onClick={this.handleClick}
            color="primary"
            mini
          >
            <Typography className={classes.buttonText} color="secondary">
              My Children
            </Typography>
          </Button>
        </div>
      );
    }

    return (
      <div>
        <section className={classes.content}>
          <Typography variant="h4" gutterBottom className={classes.text}>
            Welcome to
          </Typography>
          <TitleLogo />
          <p>
            A place to store all of your children's fond memories and milestones
            in their first year.
          </p>
          <p>
            Baby Book allows you to record birth details such as Date of Birth,
            Weight and Time of Birth.
          </p>
          <p>
            You can also record those big Milestones and precious Memories thast
            can be accessed and updated anywhere.
          </p>
          <p>Get started by logging into your secure account below</p>
        </section>
        <Login />
      </div>
    );
  }
}

export default withStyles(style)(Home);
