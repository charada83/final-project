import React, { Component } from "react";
import BabiesBirthDetails from "../components/BabiesBirthDetails";
import AddBaby from "../components/dialogs/AddBaby";
import { database, auth } from "../firebase";

class BabyDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      babyBirthDetails: null
    };

    this.babiesRef = database.ref(
      `/users/${auth.currentUser.uid}/babyBirthDetails`
    );
  }

  componentDidMount() {
    this.babiesRef.on("value", snapshot => {
      this.setState({ babyBirthDetails: snapshot.val() });
    });
  }

  render() {
    const { babyBirthDetails } = this.state;
    return (
      <div>
        <h1>Baby Details</h1>

        <AddBaby />
        <BabiesBirthDetails babyBirthDetails={babyBirthDetails} />
      </div>
    );
  }
}

export default BabyDetails;
