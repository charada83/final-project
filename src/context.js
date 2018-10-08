import React, { Component } from "react";

const Context = React.createContext();

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "EDIT_BABY":
//       return {
//         ...state,
//         babiesBirthDetails: state.babiesBirthDetails.filter(
//           BirthDetails => BirthDetails.id !== action.payload
//         )
//       };
//     default:
//       return state;
//   }
// };

export class Provider extends Component {
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

    // dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
