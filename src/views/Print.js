import React, { Component } from "react";
import Button from "@material-ui/core/Button";

export default class Print extends Component {
  render() {
    return (
      <div>
        <Button onClick={() => window.print()}>PRINT</Button>
      </div>
    );
  }
}
