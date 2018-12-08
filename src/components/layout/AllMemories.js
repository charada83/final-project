import React, { Component } from "react";
import Memory from "./Memory";

class AllMemories extends Component {
  render() {
    const { memory } = this.props;
    return (
      <section>
        {memory.map((memory, key) => {
          return <Memory key={key} {...memory} />;
        })}
      </section>
    );
  }
}

export default AllMemories;
