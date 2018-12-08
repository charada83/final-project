import React, { Component } from "react";
import Memory from "./Memory";
import map from "lodash/map";

class AllMemories extends Component {
  render() {
    const { memory } = this.props;
    return (
      <section>
        {map(memory, (memory, key) => {
          return <Memory key={key} {...memory} />;
        })}
      </section>
    );
  }
}

export default AllMemories;
