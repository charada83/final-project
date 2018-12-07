import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import AddMemory from "../components/dialogs/AddMemory";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import IconButton from "@material-ui/core/IconButton";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  title: {
    textAlign: "center",
    fontFamily: "Mali, cursive",
    color: "#6670d1",
    fontWeight: "bold"
  },
  arrow: {
    display: "flex",
    alignItems: "flex-start"
  }
});

class ScrollableTabsButtonForce extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleClick() {
    window.history.back();
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div>
        <IconButton onClick={this.handleClick} className={classes.arrow}>
          <KeyboardArrowLeft fontSize="large" />
        </IconButton>
        <Typography className={classes.title} variant="h3" gutterBottom>
          Memories
        </Typography>
        <AddMemory />
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            scrollable
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab label="1 Month" />
            <Tab label="2 Months" />
            <Tab label="3 Months" />
            <Tab label="4 Months" />
            <Tab label="5 Months" />
            <Tab label="6 Months" />
            <Tab label="7 Months" />
            <Tab label="8 Months" />
            <Tab label="9 Months" />
            <Tab label="10 Months" />
            <Tab label="11 Months" />
            <Tab label="12 Months" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>Item One</TabContainer>}
        {value === 1 && <TabContainer>Item Two</TabContainer>}
        {value === 2 && <TabContainer>Item Three</TabContainer>}
        {value === 3 && <TabContainer>Item Four</TabContainer>}
        {value === 4 && <TabContainer>Item Five</TabContainer>}
        {value === 5 && <TabContainer>Item Six</TabContainer>}
        {value === 6 && <TabContainer>Item Seven</TabContainer>}
        {value === 7 && <TabContainer>Item 8</TabContainer>}
        {value === 8 && <TabContainer>Item 9</TabContainer>}
        {value === 9 && <TabContainer>Item 10</TabContainer>}
        {value === 10 && <TabContainer>Item 11</TabContainer>}
        {value === 11 && <TabContainer>Item 12</TabContainer>}
      </div>
    );
  }
}

ScrollableTabsButtonForce.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ScrollableTabsButtonForce);
