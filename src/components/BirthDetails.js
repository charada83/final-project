import React, { Component } from "react";
import PropTypes from "prop-types";

class BirthDetails extends Component {
  //   state = {
  //     name,
  //     gender,
  //     placeOfBirth,
  //     timeOfBirth,
  //     weight
  //   };
  render() {
    const {
      name,
      gender,
      dateOfBirth,
      placeOfBirth,
      timeOfBirth,
      weight
    } = this.props;
    return (
      <div>
        <h2>{name}</h2>
        <ul>
          <li>{gender}</li>
          <li>{dateOfBirth}</li>
          <li>{placeOfBirth}</li>
          <li>{timeOfBirth}</li>
          <li>{weight}</li>
          <li>?</li>
          <li>?</li>
          <li>?</li>
        </ul>
      </div>
    );
  }
}

BirthDetails.PropTypes = {
  name: PropTypes.string.isRequired
};

export default BirthDetails;
