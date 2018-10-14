import React, { Component } from "react";
import { Link } from "@reach/router";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

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
          <Link to="/">Home</Link>
        </ListItem>
        <ListItem>
          <Link to="dashboard">Dashboard</Link>
        </ListItem>
        <ListItem>
          <Link to="/dashboard/milestones">Milestones</Link>
        </ListItem>
        <ListItem>
          <Link to="/dashboard/memories">Memories</Link>
        </ListItem>
        <ListItem onClick={this.handleClick}>
          <Link to="family">Family</Link>
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem>
              <Link to="/family/invite">Invite</Link>
            </ListItem>
            <ListItem>
              <Link to="/family/family-tree">Family Tree</Link>
            </ListItem>
          </List>
        </Collapse>
        <Divider />
        <ListItem>
          <Link to="/notifications">Notifications</Link>
        </ListItem>
      </List>
    );
  }
}

export default NavBar;
