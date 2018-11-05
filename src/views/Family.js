import React, { Component } from "react";
import FamilyInvite from "../components/dialogs/FamilyInvite";

class Family extends Component {
  //state = {  }
  render() {
    return (
      <div>
        <FamilyInvite />
        <h1>Family Tree</h1>
        <p>Image and Textfield in tree structure goes here</p>
      </div>
    );
  }
}

export default Family;
