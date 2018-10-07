import React, { Component } from "react";
import BabiesBirthDetails from "../components/BabiesBirthDetails";

class Dashboard extends Component {
  //state = {  }
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <p>This is the Dashboard</p>
        <BabiesBirthDetails />
      </div>
    );
  }
}

export default Dashboard;
