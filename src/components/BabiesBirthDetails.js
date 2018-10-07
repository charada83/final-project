import React, { Component } from "react";
import BirthDetails from "./BirthDetails";

class BabiesBirthDetails extends Component {
  state = {
    babiesBirthDetails: [
      {
        id: 1,
        name: "Lorcan",
        gender: "Male",
        dateOfBirth: "8/11/2018",
        placeOfBirth: "Rotunda",
        timeOfBirth: "9:58 am",
        weight: "3.5kg"
      },
      {
        id: 2,
        name: "Ada",
        gender: "Female",
        dateOfBirth: "28/10/2014",
        placeOfBirth: "Drogheda",
        timeOfBirth: "9:58 am",
        weight: "3.04kg"
      }
    ]
  };

  render() {
    const { babiesBirthDetails } = this.state;

    return (
      <div>
        {babiesBirthDetails.map(babiesBirthDetails => (
          <BirthDetails
            key={babiesBirthDetails.id}
            babiesBirthDetails={babiesBirthDetails}
          />
        ))}
      </div>
    );
  }
}

export default BabiesBirthDetails;
