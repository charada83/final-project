import React, { Component } from "react";
import { Link } from "@reach/router";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";

const style = {
  link: {
    textDecoration: "none",
    fontSize: 18,
    color: "#6670d1"
  }
};
class NavBar extends Component {
  state = {
    open: true
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    return (
      <List component="nav">
        <ListItem>
          <Link to="/" style={style.link}>
            Home
          </Link>
        </ListItem>
        <ListItem onClick={this.handleClick}>
          <Link to="babydetails" style={style.link}>
            Baby Details
          </Link>
        </ListItem>
        <Divider />
        <ListItem>
          <Link to="/contact" style={style.link}>
            Contact Us
          </Link>
        </ListItem>
      </List>
    );
  }
}

export default NavBar;
