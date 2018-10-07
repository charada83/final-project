import React, { Component } from "react";

class BirthDetails extends Component {
  //   state = {
  //     name,
  //     gender,
  //     placeOfBirth,
  //     timeOfBirth,
  //     weight
  //   };
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <ul>
          <li>{this.props.gender}</li>
          <li>{this.props.dateOfBirth}</li>
          <li>{this.props.placeOfBirth}</li>
          <li>{this.props.timeOfBirth}</li>
          <li>{this.props.weight}</li>
          <li>?</li>
          <li>?</li>
          <li>?</li>
        </ul>
      </div>
    );
  }
}

export default BirthDetails;
