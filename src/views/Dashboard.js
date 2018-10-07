import React, { Component } from "react";
import BirthDetails from "../components/BirthDetails";

class Dashboard extends Component {
  //state = {  }
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <p>This is the Dashboard</p>
        <BirthDetails
          name="Lorcan"
          gender="Male"
          dateOfBirth="8/11/2018"
          placeOfBirth="Rotunda"
          timeOfBirth="9:58"
          weight="3.5kg"
        />
      </div>
    );
  }
}

export default Dashboard;
