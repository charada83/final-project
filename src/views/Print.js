import React, { Component } from "react";
import Print from "@material-ui/icons/Print";

export default class PrintDetails extends Component {
  render() {
    return (
      <div>
        <Print
          onClick={() => window.print()}
          color="secondary"
          style={{ marginLeft: 10 }}
          id="dontPrint"
        />
      </div>
    );
  }
}
