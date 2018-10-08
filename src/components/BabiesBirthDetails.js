import React, { Component, Fragment } from "react";
import BirthDetails from "./BirthDetails";
import { Consumer } from "../context";

class BabiesBirthDetails extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { babiesBirthDetails } = value;
          return (
            <Fragment>
              {babiesBirthDetails.map(babiesBirthDetails => (
                <BirthDetails
                  key={babiesBirthDetails.id}
                  babiesBirthDetails={babiesBirthDetails}
                />
              ))}
            </Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default BabiesBirthDetails;
