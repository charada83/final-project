import React, { Component } from "react";
import BabiesBirthDetails from "../components/BabiesBirthDetails";
import AddBaby from "../components/dialogs/AddBaby";

class Dashboard extends Component {
  //state = {  }
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <AddBaby />
        <BabiesBirthDetails />
      </div>
    );
  }
}

export default Dashboard;
