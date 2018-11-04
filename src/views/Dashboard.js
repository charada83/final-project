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

    this.handleSubmit = this.handleSubmit.bind(this);
    this.babiesRef = database.ref("/babyBirthDetails");
  }

  componentDidMount() {
    this.babiesRef.on("value", snapshot => {
      this.setState({ babyBirthDetails: snapshot.val() });
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.babiesRef.push({ name: this.state.name });
  }

  // fileSelectedHandler = event => {
  //   console.log(event);
  // };

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
        <BabiesBirthDetails babyBirthDetails={babyBirthDetails} />
        {/* {map(babyBirthDetails, (babyBirthDetail, key) => (
          <p key={key}>{babyBirthDetail.name}</p>
          <p key={key}>{babyBirthDetail.gender}</p>
        ))} */}
      </div>
    );
  }
}

export default Dashboard;
