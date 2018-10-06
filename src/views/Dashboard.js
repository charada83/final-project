import React, { Component } from "react";
import BirthDetails from "../components/BirthDetails";

class Dashboard extends Component {
  //state = {  }
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <p>This is the Dashboard</p>
        <BirthDetails />
      </div>
    );
  }
}

export default Dashboard;
