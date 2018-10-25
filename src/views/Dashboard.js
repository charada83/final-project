import React, { Component } from "react";
import BabiesBirthDetails from "../components/BabiesBirthDetails";
import AddBaby from "../components/dialogs/AddBaby";

class Dashboard extends Component {
  // fileSelectedHandler = event => {
  //   console.log(event);
  // };
  //state = {  }
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <AddBaby />
        <BabiesBirthDetails />
        {/* <input type="file" onChange={this.fileSelectedHandler} /> */}
      </div>
    );
  }
}

export default Dashboard;
