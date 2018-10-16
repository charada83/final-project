import React, { Component } from "react";
import Switch from "@material-ui/core/Switch";
import Typography from "@material-ui/core/Typography";

class Notifications extends Component {
  state = {
    checked: false
  };

  handleChange = () => {
    this.setState(state => ({ checked: !state.checked }));
  };

  render() {
    const { checked } = this.state;
    return (
      <div>
        <h1>Notifications Dialog</h1>
        <p>
          Notification dialog with toggle to turn notification email on birth
          date every month?
        </p>
        <Typography>Send notifcation monthly on Birth Date?</Typography>
        <Switch
          checked={checked}
          onChange={this.handleChange}
          aria-label="Collapse"
        />
      </div>
    );
  }
}

export default Notifications;
