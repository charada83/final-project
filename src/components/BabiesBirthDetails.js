import React, { Component, Fragment } from "react";
import BirthDetails from "./BirthDetails";
import { Consumer } from "../context";
import map from "lodash/map";

class BabiesBirthDetails extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { babyBirthDetails } = this.props;
    return (
      <section>
        {map(babyBirthDetails, (babyBirthDetail, key) => (
          <BirthDetails key={key} {...babyBirthDetail} />
        ))}
      </section>
      // <Consumer>
      //   {value => {
      //     const { babiesBirthDetails } = value;
      //     return (
      //       <Fragment>
      //         {babiesBirthDetails.map(babiesBirthDetails => (
      //           <BirthDetails
      //             key={babiesBirthDetails.id}
      //             babiesBirthDetails={babiesBirthDetails}
      //           />
      //         ))}
      //       </Fragment>
      //     );
      //   }}
      // </Consumer>
    );
  }
}

export default BabiesBirthDetails;
