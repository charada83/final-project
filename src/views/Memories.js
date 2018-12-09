import React, { Component } from "react";
import AllMemories from "../components/layout/AllMemories";
import AddMemory from "../components/dialogs/AddMemory";
import { database, auth } from "../firebase";
import { withStyles, Typography } from "@material-ui/core";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import IconButton from "@material-ui/core/IconButton";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import filter from "lodash/filter";
import OutlinedInput from "@material-ui/core/OutlinedInput";

const styles = theme => ({
  title: {
    textAlign: "center",
    fontFamily: "Mali, cursive",
    color: "#6670d1",
    fontWeight: "bold"
  },
  arrow: {
    display: "flex",
    alignItems: "flex-start"
  },
  filterDropdown: {
    display: "flex",
    alignItems: "flex-start",
    marginLeft: 80,
    marginBottom: 20
  },
  outline: {
    minWidth: 200
  },
  label: {
    paddingLeft: 20
  }
});
class Memories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memories: {}
    };

    this.memoryRef = database.ref(
      `/users/${auth.currentUser.uid}/memories/${this.props.babyID}`
    );
  }

  componentDidMount() {
    this.memoryRef.on("value", snapshot => {
      this.setState({ memories: snapshot.val() });
    });
  }

  handleChange = event => {
    this.setState({ monthToFilter: event.target.value });
  };

  handleClick() {
    window.history.back();
  }

  render() {
    const { classes } = this.props;
    const { memories, monthToFilter } = this.state;
    const filteredMemories = filter(memories, memory => {
      // No filter selected.
      if (monthToFilter === undefined) {
        return true;
      }

      if (memory.month === monthToFilter) {
        return true;
      }

      return false;
    });

    return (
      <div>
        <IconButton onClick={this.handleClick} className={classes.arrow}>
          <KeyboardArrowLeft fontSize="large" />
        </IconButton>
        <Typography className={classes.title} variant="h3" gutterBottom>
          Memories
        </Typography>

        <AddMemory babyID={this.props.babyID} />
        <FormControl className={classes.filterDropdown}>
          <InputLabel className={classes.label} htmlFor="month" shrink="false">
            Select Month
          </InputLabel>
          <Select
            value={this.state.monthToFilter}
            onChange={this.handleChange}
            input={
              <OutlinedInput
                className={classes.outline}
                name="month"
                id="month"
              />
            }
            inputProps={{
              name: "month",
              id: "month"
            }}
          >
            <MenuItem value={undefined}>
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>1 Month</MenuItem>
            <MenuItem value={2}>2 Months</MenuItem>
            <MenuItem value={3}>3 Months</MenuItem>
            <MenuItem value={4}>4 Months</MenuItem>
          </Select>
        </FormControl>
        <AllMemories memory={filteredMemories} />
      </div>
    );
  }
}

export default withStyles(styles)(Memories);
