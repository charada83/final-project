import React, { Component } from "react";
import BabiesBirthDetails from "../components/BabiesBirthDetails";
import AddBaby from "../components/dialogs/AddBaby";
import { database } from "../firebase";
import map from "lodash/map";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      babyBirthDetails: null
    };

    this.babiesRef = database.ref("/babyBirthDetails");
  }

  componentDidMount() {
    this.babiesRef.on("value", snapshot => {
      this.setState({ babyBirthDetails: snapshot.val() });
    });
  }

  render() {
    const { name, babyBirthDetails } = this.state;
    return (
      <div>
        <h1>Dashboard</h1>
        {/* <form className="newBaby">
          <input
            type="text"
            value={name}
            placeholder="Baby name"
            onChange={event => this.setState({ name: event.target.value })}
          />
          <button onClick={this.handleSubmit} disabled={!name}>
            Submit
          </button>
        </form> */}
        <AddBaby />
        <BabiesBirthDetails
          babyBirthDetails={babyBirthDetails}
          // user={currentUser}
        />
        {/* {map(babyBirthDetails, (babyBirthDetails, key) => (
          <p key={key}>{babyBirthDetails.name}</p>
        ))} */}
      </div>
    );
  }
}

export default Dashboard;
