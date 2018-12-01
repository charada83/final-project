import React, { Component } from "react";
import Milestone from "./Milestone";
import map from "lodash/map";

class AllMilestones extends Component {
  render() {
    const { milestone } = this.props;
    return (
      <section>
        {map(milestone, (milestone, key) => {
          return <Milestone key={key} {...milestone} />;
        })}
      </section>
    );
  }
}

export default AllMilestones;
