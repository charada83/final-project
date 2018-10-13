import React, { Component } from "react";
import { Link } from "@reach/router";

class NavBar extends Component {
  //state = {  }
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="dashboard">Dashboard</Link>
            <ul>
              <li>
                <Link to="/dashboard/milestones">Milestones</Link>
              </li>
              <li>
                <Link to="/dashboard/memories">Memories</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="family">Family</Link>
            <ul>
              <li>
                <Link to="/family/invite">Invite</Link>
              </li>
              <li>
                <Link to="/family/family-tree">Family Tree</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
