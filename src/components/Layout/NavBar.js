import React, { Component } from "react";
import { Link } from "@reach/router";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const style = {
  link: {
    textDecoration: "none"
  }
};
class NavBar extends Component {
  state = {
    open: true
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  //state = {  }
  render() {
    return (
      <List component="nav">
        <ListItem>
          <Link to="/" style={style.link}>
            Home
          </Link>
        </ListItem>
        <ListItem>
          <Link to="dashboard" style={style.link}>
            Baby Details
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/dashboard/milestones" style={style.link}>
            Milestones
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/dashboard/memories" style={style.link}>
            Memories
          </Link>
        </ListItem>
        <ListItem onClick={this.handleClick}>
          <Link to="family" style={style.link}>
            Family
          </Link>
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem>
              <Link to="/family/invite" style={style.link}>
                Invite
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/family/family-tree" style={style.link}>
                Family Tree
              </Link>
            </ListItem>
          </List>
        </Collapse>
        <Divider />
        <ListItem>
          <Link to="/notifications" style={style.link}>
            Notifications
          </Link>
        </ListItem>
      </List>
    );
  }
}

export default NavBar;
