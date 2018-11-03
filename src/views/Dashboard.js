import React, { Component } from "react";
import BabiesBirthDetails from "../components/BabiesBirthDetails";
import AddBaby from "../components/dialogs/AddBaby";
import { database } from "../firebase";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.babiesRef = database.ref("/babies");
  }

  handleSubmit(event) {
    event.preventDefault();
    this.babiesRef.push({ name: this.state.name });
  }

  // componentDidMount() {
  //   database.ref().on("value", snapshot => {
  //     this.setState({
  //       data: snapshot.val()
  //     });
  //   });
  // }
  // fileSelectedHandler = event => {
  //   console.log(event);
  // };
  //state = {  }
  render() {
    const { name } = this.state;
    return (
      <div>
        <h1>Dashboard</h1>
        <form className="newBaby">
          <input
            type="text"
            value={name}
            placeholder="Baby name"
            onChange={event => this.setState({ name: event.target.value })}
          />
          <button onClick={this.handleSubmit} disabled={!name}>
            Submit
          </button>
        </form>
        <AddBaby />
        <BabiesBirthDetails />
        {/* <input type="file" onChange={this.fileSelectedHandler} /> */}
        {/* <pre>{JSON.stringify(this.state.data, null, 2)}</pre> */}
      </div>
    );
  }
}

export default Dashboard;
