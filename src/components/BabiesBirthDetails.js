import React, { Component } from "react";
import BabyBirthDetails from "./BabyBirthDetails";
import map from "lodash/map";

class BabiesBirthDetails extends Component {
  render() {
    const { babyBirthDetails } = this.props;
    return (
      <section>
        {map(babyBirthDetails, (babyBirthDetail, key) => {
          return <BabyBirthDetails key={key} {...babyBirthDetail} />;
        })}
      </section>
    );
  }
}

export default BabiesBirthDetails;
